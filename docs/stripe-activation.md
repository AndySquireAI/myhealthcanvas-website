# MyHealthCanvas Stripe checkout — draft activation guide

This PR replaces PayPal on `/myhealthcanvas` and `/start`. Prices remain CHF 22 (Essential/current) and CHF 31 (Complete), one-time purchases. Patient photos and the watermarked preview are unchanged. No Stripe, Netlify or email account settings have been changed by this PR.

## Deployment gate

**Do not merge to production until preview test-mode checkout, delivery email and both PDF downloads pass.** The implementation fails closed when configuration is missing; merging unconfigured replaces working payment buttons with an unavailable message.

Supports Cloudflare Pages Functions and Netlify Functions through the same `/api/mhc-*` endpoints. The live domain responds through Cloudflare and both hosts have deploy checks. `wrangler.toml` enables Node compatibility and keeps the existing `dist/public` output. For local Cloudflare testing use `npx wrangler pages dev dist/public`; for Netlify use `npx netlify-cli dev`. Plain Vite preview/Express does not implement the API. Use an HTTPS deploy preview for the full payment test. Do not expose secrets using a `VITE_` prefix.

Runtime environment variables (Cloudflare Pages Variables/Secrets or Netlify Functions scope; separate preview and production values):

| Variable | Value |
| --- | --- |
| `MHC_PAYMENT_MODE` | `test` for preview; `live` only after acceptance |
| `STRIPE_SECRET_KEY` | Matching Stripe test/live secret key |
| `STRIPE_MHC_CURRENT_PRICE_ID` | Active one-time CHF 22 price |
| `STRIPE_MHC_COMPLETE_PRICE_ID` | Active one-time CHF 31 price |
| `MHC_SITE_URL` | Exact HTTPS origin, no path: preview origin or `https://myhealthcanvas.com` |
| `STRIPE_WEBHOOK_SECRET` | Signing secret for this deployment's endpoint |
| `MHC_DOWNLOAD_KEY` | Base64 32-byte key matching committed encrypted PDFs |
| `RESEND_API_KEY` | Transactional email API key |
| `MHC_EMAIL_FROM` | Sender on a verified Resend domain |
| `MHC_LIVE_CHECKOUT_ENABLED` | `true` for production only, after tests |

Live mode additionally requires Netlify `CONTEXT=production` or Cloudflare `CF_PAGES_BRANCH=main`. The Cloudflare adapter sets context from the platform branch, ignoring a user-supplied CONTEXT value. Preview builds reject live keys. Confirm the Cloudflare runtime exposes `CF_PAGES_BRANCH` before activation; absence safely disables live mode. The current development asset key is stored only in the ignored, mode-0600 `.env.stripe-assets.local` file in the developer checkout. Transfer it directly to the runtime secret setting and store a secure backup; never paste it into a PR, chat or public file. If replacing that key, re-encrypt both files with `scripts/protect-forms.mjs` and deploy files/key together.

Configure Stripe webhook URL `https://<deployment>/api/mhc-webhook` for `checkout.session.completed` and `checkout.session.async_payment_succeeded`. Use the matching mode and endpoint signing secret. Only card checkout is enabled. No discounts, adjustable quantities or automatic-tax additions are enabled; the expected charged totals are exactly CHF 22/31. Confirm the merchant's tax handling before live activation. Retain these Price IDs for existing orders; changing a configured Price ID invalidates old downloads until compatibility is implemented.

Resend is the selected delivery adapter, not an existing account we have verified. Configure sender-domain verification and disable email click tracking for these private links. Confirm provider arrangements and final privacy wording before launch. Presence of an API key does not establish deliverability: the successful test email is a release gate.

## Acceptance test (no real charges)

1. Run `npm run test:payments`, `npm run check`, `npm run build`.
2. On the configured preview buy each product using a Stripe test card. Confirm CHF amount and selected product. Decline a test payment and cancel checkout: neither may grant a download or record revenue.
3. Close the browser immediately after payment. Confirm the signed webhook still sends the private download email. Follow that email in a second browser; only the purchased PDF is offered.
4. On the success page refresh, retry and download again. Confirm the actual PDF opens, fields still work, and paid preview watermark is absent. A blocked browser-storage setting must still allow the initial link to work; reopening the email recovers access.
5. Verify both PDF formats on phone and desktop. File bytes are preserved by encryption; actual fillability/mobile download remains a manual check.
6. Directly visit the thank-you URL with no token or with the old `?product=complete&order_id=fake` parameters: no success claim and no downloads. Old `/downloads/` and legacy paid `/pdfs/` URLs must no longer serve PDF bytes.
7. Retry the same webhook within Resend's 24-hour idempotency window: one delivery email. Simulate an email-provider failure: webhook returns non-2xx for Stripe retry. Stripe's retries can outlast this window; later replay may send another copy of the same email, never another charge. Monitor webhook failures and email bounces; after retries are exhausted, resolve and replay in Stripe.
8. Refund the test payment, then use its existing download link: access must be denied. Partial refunds and disputed charges also deny access.
9. Test payments, invalid orders and consent-denied visits must not emit `purchase`. Verified live purchases can emit `purchase` only with granted consent, using a hashed transaction reference (never the download token or buyer email). Check the existing GTM container for independent thank-you/page-load conversion tags before live activation. Server-side revenue remains Stripe's source of truth; browser analytics may be blocked and is not guaranteed complete.
10. Only after acceptance: configure production keys/prices/webhook/email, confirm the published privacy notice, activate live mode, and perform the merchant-approved live smoke test.

## Security and recovery boundaries

- Server validates paid/completed status, store, product, exact Price ID, amount, currency, quantity, environment, and absence of refunds/disputes on every download. The browser cannot select a different file.
- AES-256-GCM ciphertext is bundled from `private/forms.mjs` only into server functions, allowing both hosting runtimes to serve the same encrypted assets. The key and plaintext are never delivered to the browser; the purchased PDF is decrypted on the server. Checkout also checks the chosen file before creating a payment session.
- Return links carry a Stripe session capability in the URL fragment, captured and removed before third-party scripts start. Requests send it in POST bodies, not query strings. Responses are no-store. Never log request bodies or share the private link. Storage is session-only; the email is the recovery path across devices.
- This is purchase gating, not DRM. A buyer can share a downloaded form or their private link. Downloads have no arbitrary expiry, but are re-verified each time. A lost email is handled manually against a verified Stripe receipt, not an unauthenticated order lookup.
- Removed five public paid/legacy PDFs from the current tree. **Public Git history and old deployments may still contain originals.** This PR cannot retract existing copies. No history rewrite or old-deployment deletion was performed. Future revised paid editions must originate outside the public repository.
- Existing PayPal buyers have a manual receipt-based support route; old query parameters do not authorize downloads.

References: [Stripe fulfilment](https://docs.stripe.com/checkout/fulfillment), [webhook signatures](https://docs.stripe.com/webhooks/signature), [Resend email API](https://resend.com/docs/api-reference/emails/send-email).
