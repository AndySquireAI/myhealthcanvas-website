import { body, createCheckout, fail, json, settings, stripeClient, PaymentError } from '../../server/payments/core.mjs';
export async function handler(event) {
  try {
    const input = body(event);
    if (event.headers.origin !== settings().origin) throw new PaymentError('Invalid checkout origin.', 403);
    const session = await createCheckout(stripeClient(), input.product, input.requestId);
    return json(200, { url: session.url });
  } catch (error) { return fail(error); }
}
