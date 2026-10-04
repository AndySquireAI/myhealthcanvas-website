import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import StripeCheckoutButton from "@/components/StripeCheckoutButton";

export default function MyHealthCanvas() {

  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pricing = document.getElementById("pricing");
      if (pricing) {
        const pricingTop = pricing.getBoundingClientRect().top;
        setShowStickyBar(window.scrollY > 420 && pricingTop > 220);
      } else {
        setShowStickyBar(window.scrollY > 420);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Deep-link support: /myhealthcanvas#pricing (e.g. from the /get-started ad page)
  // scrolls straight to the pricing/checkout block.
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#pricing") {
      const scrollToPricingDeepLink = () => {
        document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
      };
      // Defer so the section is mounted before we scroll.
      const t = window.setTimeout(scrollToPricingDeepLink, 300);
      return () => window.clearTimeout(t);
    }
  }, []);

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="MyHealthCanvas - Prepare for oncology appointments with confidence"
        description="MyHealthCanvas helps cancer patients and caregivers organise questions, symptoms, medicines and priorities before oncology appointments. Choose a simple one-page version or a deeper two-page version when ready."
        keywords="questions to ask oncologist, cancer appointment checklist, cancer treatment planner, questions to ask before chemotherapy, cancer patient organizer, caregiver cancer support, advance care planning cancer, MyHealthCanvas"
        canonicalPath="/myhealthcanvas"
      />

      <section className="py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-70 md:opacity-80 pointer-events-none"
          style={{
            backgroundImage: "url(/images/bg-product-canvas-v2.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
          <img
            src="/images/MyHealthCanvasLOGOX2.webp"
            alt="MyHealthCanvas Logo"
            className="h-20 md:h-24 mx-auto"
          />

          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            A patient-led oncology appointment companion
          </p>

          <h1 className="text-[30px] md:text-5xl font-bold text-gray-900 leading-[1.15] text-center">
            Your next appointment.<br />
            <span className="text-[#007699]">What matters, in one place.</span>
          </h1>

          <p className="text-[20px] md:text-[24px] font-semibold text-gray-700 leading-[1.4] text-center">
            A printable companion to complete yourself or with someone you trust.
          </p>

          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.7] text-center">
            Downloadable PDF form. Fill it using free Adobe Acrobat Reader Fill & Sign on your phone, tablet or computer.
          </p>

          <p className="text-[15px] text-gray-500 leading-[1.6] text-center">
            It helps patients and caregivers organise the avalanche of emails, letters, calls, symptoms and appointment questions that can follow a cancer diagnosis.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <button
              onClick={scrollToPricing}
              className="w-full sm:w-auto px-8 py-4 text-white text-[16px] font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
              style={{ background: "linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))" }}
            >
              Choose the version that fits you
            </button>
            <a
              href="/oncology-appointment-checklist"
              className="w-full sm:w-auto px-8 py-4 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] bg-white text-[16px] font-semibold rounded-xl hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors no-underline"
            >
              Get free checklist
            </a>
          </div>


        </div>
      </section>

      <section className="py-6 px-6 md:px-12 lg:px-24" style={{ background: "linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.12 270))" }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white text-[14px] md:text-[15px] font-medium">
            <span>🛡️ Patient-led preparation tool</span>
            <span>🔒 Your data stays private</span>
            <span>♡ Built by a 2× cancer survivor</span>
          </div>
        </div>
      </section>

      <section id="form-preview" className="px-6 md:px-12 lg:px-24 py-10" aria-labelledby="form-preview-title">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="form-preview-title" className="text-[26px] md:text-[34px] font-bold text-gray-900 mb-3">
            A glimpse of your appointment companion
          </h2>
          <p className="text-[16px] text-gray-600 mb-6">
            Essential is one page. Complete adds a second page for reflection and future care planning.
          </p>
          <figure>
            <img
              src="/images/MyHealthCanvasMOCKUPPBD.webp"
              alt="Watermarked MyHealthCanvas preview: the one-page Current Plan and overlapping pages of the two-page Complete Plan."
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-xl border border-gray-200 shadow-sm"
            />
            <figcaption className="text-[14px] text-gray-500 mt-4">
              Watermarked preview with example details. Current Plan is the Essential version;
              Complete Plan is the Complete version. Your purchased PDF has no preview watermark.
            </figcaption>
          </figure>
          <a href="#pricing" className="inline-block mt-6 text-[oklch(0.55_0.15_195)] font-semibold underline underline-offset-4">
            Compare versions and prices
          </a>
        </div>
      </section>

      {/* Illustrative patient journey: replaces the repeated legacy photo sequence. */}
      <section id="patient-journey" className="px-6 md:px-12 lg:px-24 pt-10 pb-4" style={{ backgroundColor: "#FDFCF8" }} aria-labelledby="patient-journey-title">
        <div className="max-w-5xl mx-auto">
          <h2 id="patient-journey-title" className="text-2xl md:text-3xl font-bold text-center mb-6">Prepare at home. Bring what matters to your appointment.</h2>
          <figure className="space-y-4">
            <img
              src="/images/home-companion-myhealthcanvas-patient-journey.webp"
              alt="Illustrative patient journey: a patient and caregiver prepare at home, the patient reviews MyHealthCanvas with a nurse in hospital, and the patient discusses it with Dr König."
              title="Illustrative patient journey: preparation, patient choice and a human-led clinical conversation"
              width={2048}
              height={1157}
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl shadow-lg"
            />
            <figcaption className="max-w-4xl mx-auto text-center text-[13px] text-gray-500 leading-[1.6]">
              <strong>Illustrative patient journey.</strong> MyHealthCanvas is a private downloadable PDF completed and kept on the patient&apos;s own device. This purchase covers the PDF only; Home Companion voice support is not included.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-10 px-6 md:px-12 lg:px-24" aria-labelledby="how-to-use-title">
        <div className="max-w-4xl mx-auto">
          <h2 id="how-to-use-title" className="text-2xl md:text-3xl font-bold text-center mb-6">Three simple steps</h2>
          <ol className="grid md:grid-cols-3 gap-6 text-gray-600">
            <li className="rounded-xl bg-white border border-gray-200 p-6"><strong className="block text-gray-900 mb-2">1. Download</strong>Choose your PDF. Open it with free Adobe Acrobat Reader, or print it.</li>
            <li className="rounded-xl bg-white border border-gray-200 p-6"><strong className="block text-gray-900 mb-2">2. Make it yours</strong>Add your questions, symptoms and priorities. A caregiver can help if you choose.</li>
            <li className="rounded-xl bg-white border border-gray-200 p-6"><strong className="block text-gray-900 mb-2">3. Bring it with you</strong>Use it during your appointment, then save and update your own copy for next time.</li>
          </ol>
        </div>
      </section>

      <section id="pricing" className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <p className="text-[18px] md:text-[20px] font-bold" style={{ background: "linear-gradient(90deg, oklch(0.55 0.15 195), oklch(0.45 0.15 300))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              We commit 50% of net proceeds to cancer research charities.
            </p>
            <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900">Choose the version that fits where you are today</h2>
            <p className="text-[16px] text-gray-600 leading-[1.7] max-w-2xl mx-auto">
              There is no right or wrong choice. Start with the simpler version if you are newly diagnosed or overwhelmed. Choose the deeper version if you want more room for reflection, family discussion and future care planning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-gray-200" style={{ backgroundColor: "#FFFFFF" }}>
              <CardHeader>
                <CardTitle className="text-[21px] font-bold">Essential Appointment Companion</CardTitle>
                <CardDescription className="text-[15px]">1-page practical summary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[32px] font-bold text-gray-900 mb-1">CHF 22</p>
                <p className="text-[13px] text-gray-500 mb-2">One-time payment in CHF. Your payment provider may apply currency conversion.</p>
                <p className="text-[14px] text-gray-500 mb-6">Best for first appointments, active treatment and quick sharing.</p>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Diagnosis and key medical information</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Questions and topics for your healthcare team</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Symptoms, current thoughts and priorities</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Medicines, allergies and important warnings</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Downloadable PDF to complete and keep on your device</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <StripeCheckoutButton product="current" />
              </CardFooter>
            </Card>

            <Card className="border-[oklch(0.55_0.15_195)] border-2 relative" style={{ backgroundColor: "#FFFFFF" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[12px] font-bold text-white rounded-full" style={{ background: "oklch(0.55 0.15 195)" }}>
                WHEN YOU ARE READY
              </div>
              <CardHeader>
                <CardTitle className="text-[21px] font-bold">Complete Care & Future Planning Companion</CardTitle>
                <CardDescription className="text-[15px]">2-page deeper support version</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[32px] font-bold text-gray-900 mb-1">CHF 31</p>
                <p className="text-[13px] text-gray-500 mb-2">One-time payment in CHF. Your payment provider may apply currency conversion.</p>
                <p className="text-[14px] text-gray-500 mb-6">Best for patients and families ready for broader reflection and future care planning.</p>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Everything in the Essential version</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Sources of comfort and wellbeing</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Reflections, feedback and useful resources</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Future wishes, advance directive location and healthcare power of attorney</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Downloadable PDF to complete and keep on your device</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <StripeCheckoutButton product="complete" />
              </CardFooter>
            </Card>
          </div>

          {/* 30-Day Patient Promise */}
          <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl border border-gray-200 shadow-sm text-center space-y-3">
            <h3 className="text-[18px] font-bold text-gray-900">30-Day Patient Promise</h3>
            <p className="text-[15px] text-gray-600 leading-[1.7]">
              If you download MyHealthCanvas and decide it isn't useful for your situation, email Andy within 30 days and we'll refund your purchase.
            </p>
            <p className="text-[14px] text-gray-500 italic">
              We would rather help the right patients than keep money from the wrong ones.
            </p>
          </div>

          <p className="text-[13px] text-center" style={{ color: "#888888", fontStyle: "italic" }}>
            Secure card checkout via Stripe. No MyHealthCanvas account needed. Download after payment, with a return link by email.
          </p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-800">Download the free oncology appointment checklist</h2>
          <p className="text-[16px] text-gray-600 leading-[1.7]">
            Not ready to buy yet? Start with a simple checklist of 21 questions to bring to your next oncology appointment.
          </p>
          <Link href="/oncology-appointment-checklist">
            <button
              className="inline-block px-8 py-4 text-white text-[16px] font-semibold rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Get the free checklist
            </button>
          </Link>
          <p className="text-[13px] text-gray-400">Free. No spam. Printable PDF you can take to your next appointment.</p>
        </div>
      </section>

      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-800">How we protect you</h2>
          <p className="text-[16px] text-gray-500 leading-[1.7]">
            This purchase is a downloadable PDF. You complete and save it on your own device, and choose whether to share it with your care team. Home Companion voice support is not included in this purchase.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <p className="text-[15px] font-semibold text-gray-800 mb-1">No medical advice</p>
              <p className="text-[14px] text-gray-500">We help you organise. Your clinicians make care decisions.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <p className="text-[15px] font-semibold text-gray-800 mb-1">Your data, your control</p>
              <p className="text-[14px] text-gray-500">You decide what to write and who to share it with.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <p className="text-[15px] font-semibold text-gray-800 mb-1">Built for appointments</p>
              <p className="text-[14px] text-gray-500">Designed to help patients, caregivers and clinicians communicate clearly.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-gray-100 mt-auto">
        <div className="container px-6">
          <p className="text-[13px] text-gray-400 text-center mb-6 max-w-xl mx-auto">
            MyHealthCanvas does not provide medical advice. It helps you organise information, prepare questions, and communicate more clearly with your care team.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>© 2026 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              <Link href="/myhealthcanvas/advocacy" className="hover:text-gray-600">For Patient Advocacy Groups</Link>
              <Link href="/impressum" className="hover:text-gray-600">Impressum</Link>
            </div>
          </div>
        </div>
      </footer>

      {showStickyBar && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[999] md:hidden"
          style={{ background: "#0D3349", padding: "16px 20px", boxShadow: "0 -4px 20px rgba(0,0,0,0.3)" }}
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-white font-bold text-[15px] leading-tight">Start simple from CHF 22</p>
              <p className="text-[12px] leading-tight" style={{ color: "#AACCCC" }}>One-time payment in CHF. Your payment provider may apply currency conversion.</p>
            </div>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                scrollToPricing();
              }}
              className="text-white font-bold text-[14px] no-underline whitespace-nowrap"
              style={{ background: "#C8933A", padding: "12px 20px", borderRadius: "6px" }}
            >
              Choose
            </a>
          </div>
        </div>
      )}


    </div>
  );
}
