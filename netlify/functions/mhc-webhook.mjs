import { fail, json, readForm, sendDelivery, stripeClient, verifiedOrder } from '../../server/payments/core.mjs';
export async function handler(event) {
  if (event.httpMethod !== 'POST') return json(405, { error: 'POST required.' });
  let stripe, notification;
  try {
    stripe = stripeClient();
    const raw = event.isBase64Encoded ? Buffer.from(event.body, 'base64') : event.body;
    notification = stripe.webhooks.constructEvent(raw, event.headers['stripe-signature'], process.env.STRIPE_WEBHOOK_SECRET);
  } catch { return json(400, { error: 'Webhook could not be verified.' }); }
  if (!['checkout.session.completed', 'checkout.session.async_payment_succeeded'].includes(notification.type) || notification.data.object.metadata?.store !== 'myhealthcanvas-v1') return json(200, { received: true });
  if (notification.data.object.payment_status !== 'paid') return json(200, { received: true });
  try {
    const order = await verifiedOrder(stripe, notification.data.object.id);
    await readForm(order.product);
    await sendDelivery(order);
    return json(200, { received: true });
  } catch (error) { return fail(error); } // Non-2xx asks Stripe to retry failed fulfilment.
}
