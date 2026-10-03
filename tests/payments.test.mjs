import test from 'node:test';
import assert from 'node:assert/strict';
import Stripe from 'stripe';
import { createCheckout, products, verifiedOrder, settings, sendDelivery } from '../server/payments/core.mjs';
import { handler as webhook } from '../netlify/functions/mhc-webhook.mjs';
import { handler as checkoutHandler } from '../netlify/functions/mhc-checkout.mjs';
import { handler as orderHandler } from '../netlify/functions/mhc-order.mjs';
const env = { MHC_PAYMENT_MODE: 'test', STRIPE_SECRET_KEY: 'sk_test_example', MHC_SITE_URL: 'https://example.com', STRIPE_MHC_CURRENT_PRICE_ID: 'price_current', STRIPE_MHC_COMPLETE_PRICE_ID: 'price_complete', RESEND_API_KEY: 'test', MHC_EMAIL_FROM: 'test@example.com', STRIPE_WEBHOOK_SECRET: 'whsec_example' };
const id = 'cs_test_abcdefghijklmnopqrst';
const requestId = '12345678-1234-1234-1234-123456789012';
function session(product = 'current') { return { id, metadata: { store: 'myhealthcanvas-v1', product }, mode: 'payment', status: 'complete', payment_status: 'paid', livemode: false, currency: 'chf', amount_total: products[product].amount, line_items: { data: [{ price: { id: env[products[product].priceEnv] }, quantity: 1 }], has_more: false }, payment_intent: { latest_charge: { paid: true, amount_refunded: 0, disputed: false } }, customer_details: { email: 'buyer@example.com' } }; }
function reader(value) { return { checkout: { sessions: { retrieve: async () => value } } }; }
for (const product of ['current', 'complete']) test(`verified ${product} grants only purchased product`, async () => {
 const result = await verifiedOrder(reader(session(product)), id, env);
 assert.equal(result.product, products[product]); assert.equal(result.reference.length, 32); assert.ok(!result.reference.includes(id));
});
for (const [label, mutate] of [
 ['unpaid', s => s.payment_status = 'unpaid'], ['unfinished', s => s.status = 'open'], ['subscription', s => s.mode = 'subscription'], ['wrong store', s => s.metadata.store = 'ebook'], ['unknown product', s => s.metadata.product = '__proto__'], ['wrong price', s => s.line_items.data[0].price.id = 'price_other'], ['wrong currency', s => s.currency = 'gbp'], ['wrong total', s => s.amount_total = 1], ['quantity', s => s.line_items.data[0].quantity = 2], ['extra item', s => s.line_items.data.push(s.line_items.data[0])], ['pagination', s => s.line_items.has_more = true], ['mode mismatch', s => s.livemode = true], ['refund', s => s.payment_intent.latest_charge.amount_refunded = 1], ['dispute', s => s.payment_intent.latest_charge.disputed = true], ['no charge', s => s.payment_intent = null],
]) test(`rejects ${label}`, async () => { const s = session(); mutate(s); await assert.rejects(verifiedOrder(reader(s), id, env)); });
test('cannot grant access from product/order query or invalid token', async () => { await assert.rejects(verifiedOrder(reader(session()), 'current', env)); });
test('live mode requires production context and explicit activation', () => {
 assert.throws(() => settings({ ...env, MHC_PAYMENT_MODE: 'live' }));
 assert.throws(() => settings({ ...env, MHC_PAYMENT_MODE: 'live', STRIPE_SECRET_KEY: 'sk_live_example', CONTEXT: 'deploy-preview', MHC_LIVE_CHECKOUT_ENABLED: 'true' }));
 assert.equal(settings({ ...env, MHC_PAYMENT_MODE: 'live', STRIPE_SECRET_KEY: 'sk_live_example', CONTEXT: 'production', MHC_LIVE_CHECKOUT_ENABLED: 'true' }).live, true);
});
test('checkout uses server price, fragment return link and stable retry key', async () => {
 let sent, options;
 const stripe = { prices: { retrieve: async () => ({ active: true, type: 'one_time', currency: 'chf', unit_amount: 2200, livemode: false }) }, checkout: { sessions: { create: async (value, opts) => { sent = value; options = opts; return { url: 'https://checkout.stripe.com/test' }; } } } };
 await createCheckout(stripe, 'current', requestId, env, async () => {});
 assert.deepEqual(sent.line_items, [{ price: 'price_current', quantity: 1 }]);
 assert.ok(sent.success_url.includes('#session_id=')); assert.equal(options.idempotencyKey, `mhc-current-${requestId}`);
 await assert.rejects(createCheckout(stripe, 'current', requestId, { ...env, RESEND_API_KEY: '' }, async () => {}));
 await assert.rejects(createCheckout(stripe, 'current', requestId, env, async () => { throw new Error('missing file'); }));
 stripe.prices.retrieve = async () => ({ active: true, type: 'one_time', currency: 'chf', unit_amount: 2200, livemode: true });
 await assert.rejects(createCheckout(stripe, 'current', requestId, env, async () => {}));
});
test('email return link goes only to Stripe buyer and provider failures retry', async () => {
 const order = await verifiedOrder(reader(session()), id, env);
 let email;
 await sendDelivery(order, env, async (_url, opts) => { email = opts; return { ok: true }; });
 const payload = JSON.parse(email.body);
 assert.deepEqual(payload.to, ['buyer@example.com']); assert.ok(payload.text.includes(`#session_id=${id}`));
 assert.equal(email.headers['Idempotency-Key'], `mhc-delivery-${id}`);
 await assert.rejects(sendDelivery(order, env, async () => ({ ok: false })));
});
test('signed webhook ignores unrelated store; invalid signatures rejected', async () => {
 Object.assign(process.env, env);
 const stripe = new Stripe(env.STRIPE_SECRET_KEY);
 const payload = JSON.stringify({ type: 'checkout.session.completed', data: { object: { metadata: { store: 'ebook' } } } });
 const signature = stripe.webhooks.generateTestHeaderString({ payload, secret: env.STRIPE_WEBHOOK_SECRET });
 assert.equal((await webhook({ httpMethod: 'POST', headers: { 'stripe-signature': signature }, body: payload })).statusCode, 200);
 assert.equal((await webhook({ httpMethod: 'POST', headers: { 'stripe-signature': 'forged' }, body: payload })).statusCode, 400);
});
test('endpoints reject unsupported methods, invalid sessions and foreign checkout origins', async () => {
 Object.assign(process.env, env);
 assert.equal((await checkoutHandler({ httpMethod: 'GET', headers: {} })).statusCode, 405);
 assert.equal((await checkoutHandler({ httpMethod: 'POST', headers: { origin: 'https://evil.example' }, body: '{}' })).statusCode, 403);
 const denied = await orderHandler({ httpMethod: 'POST', body: JSON.stringify({ product: 'complete', order_id: 'invented' }) });
 assert.equal(denied.statusCode, 400); assert.equal(denied.headers['Cache-Control'], 'no-store'); assert.ok(!denied.body.includes('%PDF'));
});

test('return-link bootstrap strips bearer before analytics and supports reload without localStorage', async () => {
 const { readFileSync } = await import('node:fs');
 const { runInNewContext } = await import('node:vm');
 const html = readFileSync('client/index.html', 'utf8');
 const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
 const saved = new Map(); let replaced;
 const context = { URLSearchParams, location: { pathname: '/myhealthcanvas/thank-you', hash: `#session_id=${id}` }, window: {}, sessionStorage: { setItem: (k, v) => saved.set(k, v) }, history: { replaceState: (_a, _b, url) => replaced = url } };
 runInNewContext(script, context);
 assert.equal(context.window.mhcOrderSession, id); assert.equal(saved.get('mhc_order_session'), id); assert.equal(replaced, '/myhealthcanvas/thank-you');
 assert.ok(html.indexOf(script) < html.indexOf('Google Tag Manager'));
 context.sessionStorage.setItem = () => { throw new Error('blocked'); };
 assert.doesNotThrow(() => runInNewContext(script, context));
});
test('paid plaintext and legacy copies are absent from the public directory', async () => {
 const { existsSync } = await import('node:fs');
 for (const file of ['downloads/MyHealthCanvas-Current-Plan.pdf', 'downloads/MyHealthCanvas-Complete-Plan.pdf', 'pdfs/myhealthstory-complete-plan.pdf', 'pdfs/myhealthstory-current-plan.pdf', 'pdfs/myhealthstory-fillable-form.pdf']) assert.equal(existsSync(`client/public/${file}`), false, file);
});
