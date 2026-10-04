import { useEffect, useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { getStoredConsent, trackPurchase } from "@/lib/analytics";

declare global {
  interface Window {
    mhcOrderSession?: string;
  }
}
type Order = {
  name: string;
  filename: string;
  value: number;
  currency: string;
  reference: string;
  live: boolean;
};
function sessionId() {
  if (window.mhcOrderSession) return window.mhcOrderSession;
  try {
    return sessionStorage.getItem("mhc_order_session") || "";
  } catch {
    return "";
  }
}
export default function ThankYou() {
  const [order, setOrder] = useState<Order | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [checking, setChecking] = useState(true);
  async function verify() {
    setChecking(true);
    setError("");
    try {
      if (!sessionId())
        throw new Error(
          "Open the private download link in your purchase email. For an earlier PayPal order, contact us with your payment receipt."
        );
      const response = await fetch("/api/mhc-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionId() }),
        signal: AbortSignal.timeout(20000),
      });
      const result = await response
        .json()
        .catch(() => ({
          error:
            "Download verification is unavailable. Please try again later.",
        }));
      if (!response.ok) throw new Error(result.error);
      setOrder(result);
      // Only verified live orders; consent denied/undecided and test orders emit nothing.
      if (result.live && getStoredConsent() === "granted") {
        let recorded = false;
        try {
          recorded =
            localStorage.getItem(`mhc_purchase_${result.reference}`) === "sent";
        } catch {
          /* optional storage */
        }
        if (!recorded) {
          trackPurchase({
            transactionId: result.reference,
            value: result.value,
            currency: result.currency,
            itemName: result.name,
          });
          try {
            localStorage.setItem(`mhc_purchase_${result.reference}`, "sent");
          } catch {
            /* GA deduplicates transaction_id */
          }
        }
      }
    } catch (error) {
      setError(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "Verification took too long. Please retry."
      );
    } finally {
      setChecking(false);
    }
  }
  useEffect(() => {
    void verify();
  }, []);
  async function download() {
    if (busy || !order) return;
    setBusy(true);
    setError("");
    try {
      const response = await fetch("/api/mhc-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionId(), download: true }),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error((await response.json()).error);
      const url = URL.createObjectURL(await response.blob());
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = order.filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 60000);
    } catch (error) {
      setError(
        error instanceof Error && error.name !== "TimeoutError"
          ? error.message
          : "Download took too long. Please retry."
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className="min-h-screen bg-[#FDFCF8] px-6 py-20">
      <SEO
        title="Your download | MyHealthCanvas"
        description="Access your purchased MyHealthCanvas form."
        canonicalPath="/myhealthcanvas/thank-you"
        noindex
      />
      <div className="mx-auto max-w-xl space-y-6">
        <p className="font-semibold text-[#007699]">MYHEALTHCANVAS</p>
        <h1 className="text-4xl font-bold">
          {checking
            ? "Checking your payment…"
            : order
              ? "Your form is ready"
              : "Find your download"}
        </h1>
        {order && (
          <section className="space-y-4 rounded-xl border bg-white p-6">
            <h2 className="text-xl font-semibold">{order.name}</h2>
            <p>
              {order.live ? "Payment confirmed" : "Test payment confirmed"} ·
              CHF {order.value}
            </p>
            <button
              onClick={download}
              disabled={busy}
              className="w-full rounded-lg bg-[#007699] px-5 py-3 font-semibold text-white disabled:opacity-60"
            >
              {busy ? "Preparing your PDF…" : "Download your PDF"}
            </button>
            <p className="text-sm text-gray-600">
              Save the PDF on your device. Keep your purchase email to return to
              this download on another device.
            </p>
            <p className="text-sm text-gray-600">
              Open the PDF in Adobe Acrobat Reader to fill it in, or print it
              and write by hand.
            </p>
          </section>
        )}
        {error && (
          <p role="alert" className="text-red-700">
            {error}
          </p>
        )}
        {!checking && !order && sessionId() && (
          <button className="rounded-lg border px-5 py-3" onClick={verify}>
            Retry verification
          </button>
        )}
        <p className="text-sm text-gray-600">
          Missing your email or need help? Contact{" "}
          <a
            className="underline"
            href="mailto:andy@patientcentriccare.ai?subject=MyHealthCanvas%20download%20help"
          >
            andy@patientcentriccare.ai
          </a>{" "}
          with your payment receipt. Please do not send health information.
        </p>
        <Link
          href="/myhealthcanvas"
          className="inline-block text-[#007699] underline"
        >
          Back to MyHealthCanvas
        </Link>
      </div>
    </main>
  );
}
