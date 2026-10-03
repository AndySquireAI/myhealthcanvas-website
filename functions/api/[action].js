import { Buffer } from "node:buffer";
import { handle as checkout } from "../../netlify/functions/mhc-checkout.mjs";
import { handle as order } from "../../netlify/functions/mhc-order.mjs";
import { handle as webhook } from "../../netlify/functions/mhc-webhook.mjs";
const handlers = {
  "mhc-checkout": checkout,
  "mhc-order": order,
  "mhc-webhook": webhook,
};
export async function onRequest({ request, env, params }) {
  const handle = Object.hasOwn(handlers, params.action)
    ? handlers[params.action]
    : null;
  if (!handle) return new Response("Not found", { status: 404 });
  // Never trust an environment-supplied CONTEXT to promote a branch preview.
  const config = {
    ...env,
    CONTEXT: env.CF_PAGES_BRANCH === "main" ? "production" : "deploy-preview",
  };
  const result = await handle(
    {
      httpMethod: request.method,
      headers: Object.fromEntries(request.headers),
      body:
        request.method === "GET" || request.method === "HEAD"
          ? ""
          : await request.text(),
    },
    config
  );
  return new Response(
    result.isBase64Encoded ? Buffer.from(result.body, "base64") : result.body,
    { status: result.statusCode, headers: result.headers }
  );
}
