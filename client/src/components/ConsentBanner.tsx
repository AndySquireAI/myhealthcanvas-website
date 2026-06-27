import { useEffect, useState } from "react";
import { Link } from "wouter";
import { getStoredConsent, updateConsent } from "@/lib/analytics";

/**
 * Lightweight, GDPR/Swiss-friendly cookie consent banner.
 * - Defaults to "denied" (set in index.html Consent Mode default block).
 * - On Accept/Decline it calls gtag('consent','update', ...) and persists the choice.
 * - Stays hidden for visitors who have already decided.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show if the user has not made a decision yet.
    if (getStoredConsent() === null) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    updateConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    updateConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-[#E1D7EB]/70 bg-white shadow-xl p-5 sm:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p className="text-[15px] font-semibold text-gray-900">
              We respect your privacy
            </p>
            <p className="text-[13px] leading-[1.6] text-gray-600">
              We use cookies to understand how visitors use MyHealthCanvas so we can
              improve it. Your health information always stays private. See our{" "}
              <Link href="/privacy">
                <span className="underline text-[oklch(0.55_0.15_195)] cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              .
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <button
              onClick={handleDecline}
              className="px-5 py-2.5 rounded-xl border border-gray-200 text-[14px] font-medium text-gray-600 hover:border-gray-300 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-5 py-2.5 rounded-xl bg-[oklch(0.55_0.15_195)] text-white text-[14px] font-semibold hover:bg-[oklch(0.50_0.15_195)] transition-colors shadow-sm"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
