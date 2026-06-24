import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useEffect } from "react";

/**
 * Dedicated Google Ads campaign landing page (/get-started).
 *
 * Purpose: paid-search visitors arrive with transactional intent ("be ready for
 * my appointment"), but were previously dropped on the broad oncology-prep
 * homepage two clicks away from buying. This page mirrors the ad promise, leads
 * with one primary CTA straight to purchase, and surfaces trust + the charity
 * commitment above the fold. Lean by design (reuses the 90 KB cropped hero,
 * no multi-MB background images) so it loads fast on mobile.
 *
 * noindex: this is an ad destination, not an SEO page — kept out of the index so
 * it does not compete with "/" or dilute organic ranking.
 */
export default function GetStarted() {
  // Lightweight engagement + CTA tracking, mirroring the homepage convention.
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "lp_view", {
        event_category: "landing_page",
        event_label: "get_started",
      });
    }
  }, []);

  const trackCta = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "lp_cta_click", {
        event_category: "landing_page",
        event_label: label,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Be ready for your next oncology appointment | MyHealthCanvas"
        description="A guided companion that helps you organise your questions, symptoms and medications before your oncology appointment. Instant download from £19. 50% of proceeds donated to cancer charities."
        canonicalPath="/get-started"
        noindex
      />

      {/* HERO — ad promise + one primary CTA, trust line above the fold */}
      <section className="w-full" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: coded text for fast paint */}
            <div className="space-y-5 order-2 md:order-1 text-center md:text-left">
              <p className="text-[13px] uppercase tracking-[0.15em] text-[oklch(0.55_0.15_195)] font-bold">
                For cancer patients &amp; caregivers
              </p>
              <h1 className="text-[28px] md:text-[38px] lg:text-[44px] font-bold text-gray-900 leading-[1.15] tracking-tight">
                Be ready for your{" "}
                <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
                  next appointment
                </span>
                .
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.7]">
                MyHealthCanvas is a guided companion that helps you organise your
                questions, symptoms, medications and priorities — so you walk in
                prepared and have a clearer conversation with your care team.
              </p>

              {/* Primary CTA — straight to purchase, no detour */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
                <Link href="/myhealthcanvas#pricing" onClick={() => trackCta("hero_get_yours")}>
                  <button className="w-full sm:w-auto px-8 py-4 rounded-xl text-[16px] font-semibold text-white transition-all duration-300 hover:shadow-lg shadow-md cursor-pointer"
                    style={{ background: "linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))" }}>
                    Get yours from £19 →
                  </button>
                </Link>
                <Link href="/oncology-appointment-checklist" onClick={() => trackCta("hero_free_checklist")}>
                  <button className="w-full sm:w-auto px-7 py-4 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] bg-white text-[15px] font-semibold rounded-xl hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                    Or get the free checklist
                  </button>
                </Link>
              </div>

              {/* Trust + charity line above the fold */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-2 justify-center md:justify-start text-[13px] font-medium text-gray-600">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Private. Secure. Yours.
                </span>
                <span>Instant download</span>
                <span className="text-[oklch(0.55_0.15_195)] font-semibold">50% of proceeds to cancer charities</span>
              </div>
            </div>

            {/* Right: lightweight hero image (reuses 90 KB cropped JPG) */}
            <div className="order-1 md:order-2">
              <img
                src="/images/hero-woman-cropped.jpg"
                alt="A patient preparing her questions before an oncology appointment"
                className="w-full rounded-xl shadow-lg"
                width={640}
                height={480}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES — credentials, mirrors the homepage block */}
      <section className="py-12 px-6" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[14px] uppercase tracking-[0.15em] text-gray-500 font-medium">
              Built with care and clinical understanding
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E1D7EB40" }}>
              <span className="text-[20px]" aria-hidden="true">🎓</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Harvard Medical School<br /><span className="font-light text-gray-500">Best Overall Capstone 2026</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E1D7EB40" }}>
              <span className="text-[20px]" aria-hidden="true">🏛️</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Oxford Saïd Business School<br /><span className="font-light text-gray-500">AI Programme Distinction</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E1D7EB40" }}>
              <span className="text-[20px]" aria-hidden="true">🎗️</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">2× cancer survivor<br /><span className="font-light text-gray-500">Patient-first design philosophy</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: "#FFFFFF", border: "1px solid #E1D7EB40" }}>
              <span className="text-[20px]" aria-hidden="true">🔒</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Zero data stored on servers<br /><span className="font-light text-gray-500">Your health data stays on your device</span></span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET — three concrete benefits, then repeat CTA */}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 text-center mb-8">
            What you get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-2">
              <h3 className="text-[15px] font-bold text-gray-800">Curated questions</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">Know what to ask before you walk in — nothing forgotten in the moment.</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-[15px] font-bold text-gray-800">Symptoms &amp; medications in one place</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">Keep your notes organised so your care team gets the full picture.</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-[15px] font-bold text-gray-800">Yours forever, private</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">A downloadable PDF on your device. We never see your data.</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 pt-10">
            <Link href="/myhealthcanvas#pricing" onClick={() => trackCta("midpage_get_yours")}>
              <button className="w-full sm:w-auto px-10 py-4 rounded-xl text-[16px] font-semibold text-white transition-all duration-300 hover:shadow-lg cursor-pointer"
                style={{ background: "linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))" }}>
                Get yours from £19 →
              </button>
            </Link>
            <p className="text-[13px] text-gray-500 italic">
              Secure checkout via PayPal. No account needed. 30-day refund promise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
