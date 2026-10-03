import Stripe from "stripe";
import { createDecipheriv, createHash } from "node:crypto";
import { Buffer } from "node:buffer";
import encryptedForms from "../../private/forms.mjs";

export const products = {
  current: {
    name: "Essential Appointment Companion",
    amount: 2200,
    priceEnv: "STRIPE_MHC_CURRENT_PRICE_ID",
    file: "MyHealthCanvas-Current-Plan.pdf",
  },
  complete: {
    name: "Complete Care & Future Planning Companion",
    amount: 3100,
    priceEnv: "STRIPE_MHC_COMPLETE_PRICE_ID",
    file: "MyHealthCanvas-Complete-Plan.pdf",
  },
};
export class PaymentError extends Error {
  constructor(message, status = 503) {
    super(message);
    this.status = status;
  }
}
export function settings(env = process.env) {
  const live = env.MHC_PAYMENT_MODE === "live";
  if (
    !["test", "live"].includes(env.MHC_PAYMENT_MODE) ||
    !env.STRIPE_SECRET_KEY?.startsWith(live ? "sk_live_" : "sk_test_")
  )
    throw new PaymentError(
      "Checkout is not available yet. Please try again later."
    );
  if (
    live &&
    (env.CONTEXT !== "production" || env.MHC_LIVE_CHECKOUT_ENABLED !== "true")
  )
    throw new PaymentError("Live checkout is not enabled.");
  const origin = new URL(env.MHC_SITE_URL);
  if (
    origin.protocol !== "https:" ||
    origin.pathname !== "/" ||
    origin.search ||
    origin.hash ||
    origin.username ||
    origin.password
  )
    throw new PaymentError("Checkout configuration is incomplete.");
  return { live, origin: origin.origin, key: env.STRIPE_SECRET_KEY };
}
export function stripeClient(env = process.env) {
  return new Stripe(settings(env).key, {
    maxNetworkRetries: 1,
    timeout: 10000,
    httpClient: Stripe.createFetchHttpClient(),
  });
}
export const headers = {
  "Cache-Control": "no-store",
  "Content-Type": "application/json",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
};
export function json(statusCode, value) {
  return { statusCode, headers, body: JSON.stringify(value) };
}
export function fail(error) {
  return json(error instanceof PaymentError ? error.status : 503, {
    error:
      error instanceof PaymentError
        ? error.message
        : "We could not complete that request. Please retry or contact andy@patientcentriccare.ai.",
  });
}
export function body(event) {
  if (event.httpMethod !== "POST")
    throw new PaymentError("POST required.", 405);
  try {
    return JSON.parse(event.body || "{}");
  } catch {
    throw new PaymentError("Invalid request.", 400);
  }
}
export async function readForm(product, env = process.env) {
  const key = Buffer.from(env.MHC_DOWNLOAD_KEY || "", "base64");
  if (key.length !== 32)
    throw new PaymentError("Download delivery is not configured.");
  const encrypted = Buffer.from(encryptedForms[product.file], "base64");
  const decipher = createDecipheriv(
    "aes-256-gcm",
    key,
    encrypted.subarray(0, 12)
  );
  decipher.setAuthTag(encrypted.subarray(12, 28));
  const pdf = Buffer.concat([
    decipher.update(encrypted.subarray(28)),
    decipher.final(),
  ]);
  if (!pdf.subarray(0, 5).equals(Buffer.from("%PDF-")))
    throw new PaymentError("Download file is unavailable.");
  return pdf;
}
export async function verifiedOrder(stripe, id, env = process.env) {
  if (
    typeof id !== "string" ||
    !/^cs_(test_|live_)?[a-zA-Z0-9]{10,250}$/.test(id)
  )
    throw new PaymentError(
      "Open the download link from your purchase email.",
      400
    );
  const session = await stripe.checkout.sessions.retrieve(id, {
    expand: ["line_items", "payment_intent.latest_charge"],
  });
  const product = Object.hasOwn(products, session.metadata?.product || "")
    ? products[session.metadata.product]
    : null;
  const line = session.line_items?.data;
  if (
    !product ||
    session.metadata?.store !== "myhealthcanvas-v1" ||
    session.mode !== "payment" ||
    session.status !== "complete" ||
    session.payment_status !== "paid" ||
    session.livemode !== settings(env).live ||
    session.currency !== "chf" ||
    session.amount_total !== product.amount ||
    !env[product.priceEnv] ||
    line?.length !== 1 ||
    session.line_items.has_more ||
    line[0].price?.id !== env[product.priceEnv] ||
    line[0].quantity !== 1
  )
    throw new PaymentError(
      "A completed payment for this form could not be verified. If payment is processing, retry shortly.",
      403
    );
  const charge = session.payment_intent?.latest_charge;
  if (
    !charge ||
    typeof charge !== "object" ||
    !charge.paid ||
    charge.amount_refunded > 0 ||
    charge.disputed
  )
    throw new PaymentError(
      "This order is not eligible for download. Please contact support.",
      403
    );
  return {
    session,
    product,
    reference: createHash("sha256")
      .update(session.id)
      .digest("hex")
      .slice(0, 32),
  };
}
export async function createCheckout(
  stripe,
  productId,
  requestId,
  env = process.env,
  loadForm = readForm
) {
  const config = settings(env);
  const product = Object.hasOwn(products, productId || "")
    ? products[productId]
    : null;
  if (!product || !/^[a-f0-9-]{36}$/.test(requestId || ""))
    throw new PaymentError("Choose a valid form and try again.", 400);
  if (!env.RESEND_API_KEY || !env.MHC_EMAIL_FROM || !env.STRIPE_WEBHOOK_SECRET)
    throw new PaymentError(
      "Checkout is awaiting delivery setup. Please try again later."
    );
  await loadForm(product, env); // Never take payment for an unavailable file.
  const priceId = env[product.priceEnv];
  if (!priceId) throw new PaymentError("Checkout is awaiting price setup.");
  const price = await stripe.prices.retrieve(priceId);
  if (
    !price.active ||
    price.type !== "one_time" ||
    price.currency !== "chf" ||
    price.unit_amount !== product.amount ||
    price.livemode !== config.live
  )
    throw new PaymentError("Checkout price configuration needs attention.");
  return stripe.checkout.sessions.create(
    {
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [{ price: priceId, quantity: 1 }],
      metadata: { store: "myhealthcanvas-v1", product: productId },
      success_url: `${config.origin}/myhealthcanvas/thank-you#session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${config.origin}/myhealthcanvas#pricing`,
    },
    { idempotencyKey: `mhc-${productId}-${requestId}` }
  );
}
export async function sendDelivery(order, env = process.env, fetcher = fetch) {
  if (
    !env.RESEND_API_KEY ||
    !env.MHC_EMAIL_FROM ||
    !order.session.customer_details?.email
  )
    throw new PaymentError("Email delivery is unavailable.");
  const link = `${settings(env).origin}/myhealthcanvas/thank-you#session_id=${order.session.id}`;
  const response = await fetcher("https://api.resend.com/emails", {
    method: "POST",
    signal: AbortSignal.timeout(8000),
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `mhc-delivery-${order.session.id}`,
    },
    body: JSON.stringify({
      from: env.MHC_EMAIL_FROM,
      to: [order.session.customer_details.email],
      subject: "Your MyHealthCanvas download",
      text: `Thank you for purchasing the ${order.product.name}.\n\nOpen your private download link:\n${link}\n\nKeep this email to return to your form. Please do not share this link.\n\nFor help or a refund request, contact andy@patientcentriccare.ai. No health information is needed.`,
      tags: [{ name: "store", value: "myhealthcanvas" }],
    }),
  });
  if (!response.ok) throw new PaymentError("Email delivery will be retried.");
}
