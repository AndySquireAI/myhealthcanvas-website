import {
  body,
  createCheckout,
  fail,
  json,
  settings,
  stripeClient,
  PaymentError,
} from "../../server/payments/core.mjs";
export const handler = event => handle(event, process.env);
export async function handle(event, env) {
  try {
    const input = body(event);
    if (event.headers.origin !== settings(env).origin)
      throw new PaymentError("Invalid checkout origin.", 403);
    const session = await createCheckout(
      stripeClient(env),
      input.product,
      input.requestId,
      env
    );
    return json(200, { url: session.url });
  } catch (error) {
    return fail(error);
  }
}
