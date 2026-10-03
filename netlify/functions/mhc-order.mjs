import { body, fail, headers, json, readForm, stripeClient, verifiedOrder } from '../../server/payments/core.mjs';
export async function handler(event) {
  try {
    const input = body(event);
    const order = await verifiedOrder(stripeClient(), input.sessionId);
    const pdf = await readForm(order.product);
    if (input.download === true) return { statusCode: 200, headers: { ...headers, 'Content-Type': 'application/pdf', 'Content-Disposition': `attachment; filename="${order.product.file}"` }, isBase64Encoded: true, body: pdf.toString('base64') };
    return json(200, { name: order.product.name, filename: order.product.file, value: order.product.amount / 100, currency: 'CHF', reference: order.reference, live: order.session.livemode });
  } catch (error) { return fail(error); }
}
