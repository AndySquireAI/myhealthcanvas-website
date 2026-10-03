import {
  body,
  fail,
  headers,
  json,
  readForm,
  stripeClient,
  verifiedOrder,
} from "../../server/payments/core.mjs";
export const handler = event => handle(event, process.env);
export async function handle(event, env) {
  try {
    const input = body(event);
    const order = await verifiedOrder(stripeClient(env), input.sessionId, env);
    const pdf = await readForm(order.product, env);
    if (input.download === true)
      return {
        statusCode: 200,
        headers: {
          ...headers,
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${order.product.file}"`,
        },
        isBase64Encoded: true,
        body: pdf.toString("base64"),
      };
    return json(200, {
      name: order.product.name,
      filename: order.product.file,
      value: order.product.amount / 100,
      currency: "CHF",
      reference: order.reference,
      live: order.session.livemode,
    });
  } catch (error) {
    return fail(error);
  }
}
