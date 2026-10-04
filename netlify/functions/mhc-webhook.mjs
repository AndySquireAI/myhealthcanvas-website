import { Buffer } from "node:buffer";
import {
  fail,
  json,
  readForm,
  sendDelivery,
  stripeClient,
  verifiedOrder,
} from "../../server/payments/core.mjs";
export const handler = event => handle(event, process.env);
export async function handle(event, env) {
  if (event.httpMethod !== "POST")
    return json(405, { error: "POST required." });
  let stripe, notification;
  try {
    stripe = stripeClient(env);
    const raw = event.isBase64Encoded
      ? Buffer.from(event.body, "base64")
      : event.body;
    notification = await stripe.webhooks.constructEventAsync(
      raw,
      event.headers["stripe-signature"],
      env.STRIPE_WEBHOOK_SECRET
    );
  } catch {
    return json(400, { error: "Webhook could not be verified." });
  }
  if (
    ![
      "checkout.session.completed",
      "checkout.session.async_payment_succeeded",
    ].includes(notification.type) ||
    notification.data.object.metadata?.store !== "myhealthcanvas-v1"
  )
    return json(200, { received: true });
  if (notification.data.object.payment_status !== "paid")
    return json(200, { received: true });
  try {
    const order = await verifiedOrder(stripe, notification.data.object.id, env);
    await readForm(order.product, env);
    await sendDelivery(order, env);
    return json(200, { received: true });
  } catch (error) {
    return fail(error);
  } // Non-2xx asks Stripe to retry failed fulfilment.
}
