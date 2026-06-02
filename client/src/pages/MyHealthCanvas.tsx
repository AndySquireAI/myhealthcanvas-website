import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import PatientStories from "@/components/PatientStories";
import CaregiverCompanion from "@/components/CaregiverCompanion";

declare global {
  interface Window {
    paypal?: any;
  }
}

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=Aeh8fC5lOPXjj-f1dqDeegz-8EDOi4BTMNLM01BQH4N4nqqKjwYhxKoAdnn_zDe6wQA7YqN0Da5ltbV4&currency=GBP";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.paypal && document.getElementById("paypal-button-current")) {
        window.paypal.Buttons({
          createOrder: function (_data: any, actions: any) {
            return actions.order.create({
              purchase_units: [{
                amount: { value: "19.00", currency_code: "GBP" },
                description: "MyHealthCanvas - Essential Appointment Companion",
              }],
            });
          },
          onApprove: function (_data: any, actions: any) {
            return actions.order.capture().then(function () {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "purchase", {
                  transaction_id: _data.orderID,
                  value: 19.0,
                  currency: "GBP",
                  items: [{ item_name: "MyHealthCanvas Essential Appointment Companion", price: 19.0, quantity: 1 }],
                });
              }
              window.location.href = `/myhealthcanvas/thank-you?product=current&order_id=${_data.orderID}`;
            });
          },
          onError: function (err: any) {
            console.error("PayPal error:", err);
            alert("There was an error processing your payment. Please try again.");
          },
        }).render("#paypal-button-current");
      }

      if (window.paypal && document.getElementById("paypal-button-complete")) {
        window.paypal.Buttons({
          createOrder: function (_data: any, actions: any) {
            return actions.order.create({
              purchase_units: [{
                amount: { value: "27.00", currency_code: "GBP" },
                description: "MyHealthCanvas - Complete Care & Future Planning Companion",
              }],
            });
          },
          onApprove: function (_data: any, actions: any) {
            return actions.order.capture().then(function () {
              if (typeof window !== "undefined" && (window as any).gtag) {
                (window as any).gtag("event", "purchase", {
                  transaction_id: _data.orderID,
                  value: 27.0,
                  currency: "GBP",
                  items: [{ item_name: "MyHealthCanvas Complete Care & Future Planning Companion", price: 27.0, quantity: 1 }],
                });
              }
              window.location.href = `/myhealthcanvas/thank-you?product=complete&order_id=${_data.orderID}`;
            });
          },
          onError: function (err: any) {
            console.error("PayPal error:", err);
            alert("There was an error processing your payment. Please try again.");
          },
        }).render("#paypal-button-complete");
      }
    };

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
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
            className="h-36 md:h-44 lg:h-52 mx-auto"
          />

          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            A patient-led oncology appointment companion
          </p>

          <h1 className="text-[30px] md:text-5xl lg:text-[54px] font-bold text-gray-900 leading-[1.15] text-center">
            Keep your questions, symptoms and care story ready for every appointment.
          </h1>

          <p className="text-[20px] md:text-[24px] font-semibold text-gray-700 leading-[1.4] text-center">
            Take back control. Ask better questions. Give yourself every chance.
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
              href="mailto:andy@patientcentriccare.ai?subject=Free%20Oncology%20Appointment%20Checklist"
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

      {/* Image 1: Man talking to oncologist */}
      <section className="px-6 md:px-12 lg:px-24 pt-10 pb-4" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-5xl mx-auto">
          <img
            src="/images/hero-man-oncologist.png"
            alt="Male cancer patient discussing his MyHealthCanvas appointment companion with his oncologist"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Text panel 1: Never leave an oncology appointment... */}
      <section className="py-10 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 leading-[1.2]">
            Never leave an oncology appointment wishing you had asked something important.
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7]">
            MyHealthCanvas helps you organise your questions, symptoms, medications and priorities so you can have clearer, more confident conversations with your care team.
          </p>
          <div className="flex items-center gap-2 justify-center">
            <svg className="w-5 h-5 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-[14px] font-medium text-gray-700">Private. Secure. Yours.</span>
          </div>
        </div>
      </section>

      {/* Image 2: Wife helping patient husband prepare */}
      <section className="px-6 md:px-12 lg:px-24 pt-4 pb-4" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-5xl mx-auto">
          <img
            src="/images/hero-couple-preparing.png"
            alt="Wife helping her husband prepare questions and notes for his next oncology appointment"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Text panel 2: Prepare together */}
      <section className="py-10 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900 leading-[1.2]">
            Prepare together. Feel more in control.
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7]">
            Review tomorrow's appointment, add questions, and make sure everything that matters is on your list.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
              <span className="text-[13px] font-medium text-gray-700">Stay organised</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-[13px] font-medium text-gray-700">Work together</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-[13px] font-medium text-gray-700">Feel confident</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span className="text-[13px] font-medium text-gray-700">Save time</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-[26px] md:text-[36px] font-bold text-gray-900">Start simple. Go deeper only when you are ready.</h2>
            <p className="text-[17px] md:text-[19px] text-gray-600 leading-[1.8] max-w-3xl mx-auto">
              A newly diagnosed patient may not be ready for sensitive future-planning questions. That is why MyHealthCanvas has two versions: a practical one-page appointment companion for immediate use, and a fuller two-page version for reflection and future care planning when the time feels right.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 shadow-sm">
              <p className="text-[13px] uppercase tracking-[0.15em] text-[oklch(0.55_0.15_195)] font-bold">For shock, diagnosis and first appointments</p>
              <h3 className="text-[22px] font-bold text-gray-900">Essential Appointment Companion</h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">
                The one-page version focuses on what most patients need first: diagnosis details, medicines, symptoms, immediate priorities and questions for the healthcare team.
              </p>
              <p className="text-[14px] text-gray-500 italic">
                Many newly diagnosed patients prefer to start here.
              </p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[oklch(0.55_0.15_195)] p-6 space-y-4 shadow-sm relative">
              <div className="absolute -top-3 left-6 px-3 py-1 text-[12px] font-bold text-white rounded-full" style={{ background: "oklch(0.55 0.15 195)" }}>Optional deeper layer</div>
              <p className="text-[13px] uppercase tracking-[0.15em] text-[oklch(0.55_0.15_195)] font-bold pt-2">For reflection, family and future care</p>
              <h3 className="text-[22px] font-bold text-gray-900">Complete Care & Future Planning Companion</h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">
                The two-page version includes everything in Essential, plus space for comfort, reflections, feedback, useful resources, future wishes, advance directive location and healthcare power of attorney.
              </p>
              <p className="text-[14px] text-gray-500 italic">
                Use this only if and when these questions feel helpful.
              </p>
            </div>
          </div>

          {/* Visual Comparison Table */}
          <div className="mt-10">
            <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900 text-center mb-6">What's included in each version</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="py-3 px-4 text-[14px] font-semibold text-gray-600">Feature</th>
                    <th className="py-3 px-4 text-[14px] font-semibold text-center text-gray-800">Essential</th>
                    <th className="py-3 px-4 text-[14px] font-semibold text-center" style={{ color: 'oklch(0.55 0.15 195)' }}>Complete</th>
                  </tr>
                </thead>
                <tbody className="text-[15px] text-gray-700">
                  <tr className="border-b border-gray-100"><td className="py-3 px-4">Diagnosis information</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50"><td className="py-3 px-4">Questions for your team</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3 px-4">Symptoms and priorities</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50"><td className="py-3 px-4">Medicines and allergies</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3 px-4">Caregiver notes</td><td className="py-3 px-4 text-center text-gray-300">—</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50"><td className="py-3 px-4">Future wishes</td><td className="py-3 px-4 text-center text-gray-300">—</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td></tr>
                  <tr className="border-b border-gray-100"><td className="py-3 px-4">Advance directives</td><td className="py-3 px-4 text-center text-gray-300">—</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td></tr>
                  <tr className="border-b border-gray-100 bg-gray-50/50"><td className="py-3 px-4">Healthcare power of attorney</td><td className="py-3 px-4 text-center text-gray-300">—</td><td className="py-3 px-4 text-center text-[oklch(0.55_0.15_195)] font-bold">✓</td></tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="text-center p-3 rounded-lg bg-white border border-gray-100">
                <p className="text-[13px] text-gray-500">Recommended if newly diagnosed</p>
                <p className="text-[15px] font-bold text-gray-800 mt-1">Essential Appointment Companion</p>
              </div>
              <div className="text-center p-3 rounded-lg bg-white border border-[oklch(0.55_0.15_195)]/30">
                <p className="text-[13px] text-gray-500">Recommended when ready for broader planning</p>
                <p className="text-[15px] font-bold text-gray-800 mt-1">Complete Care & Future Planning Companion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image 3: Hospital patient showing phone to doctor - above oncologist quote */}
      <section className="py-10 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-4xl mx-auto">
          <img
            src="/images/patient-doctor-myhealthcanvas-final.png"
            alt="Hospital patient showing his MyHealthCanvas on phone to his doctor during a ward visit"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Oncologist quote - moved above pricing for social proof */}
      <section className="py-10 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto">
          <div className="p-6 bg-white rounded-xl border border-[oklch(0.55_0.15_195)] shadow-sm text-center space-y-3">
            <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.8] italic">
              "Some of my patients bring their MyHC with them to appointments so they do not forget questions. Having a standard template is much easier for me to scan, and a lot less complex than fragmented EHR records."
            </p>
            <p className="text-[14px] text-gray-500 font-medium">Oncologist, 38 · Switzerland</p>
          </div>
        </div>
      </section>

      {/* Which version is right for me? - Decision helper */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-[26px] md:text-[34px] font-bold text-gray-900 text-center">Which version is right for me?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 shadow-sm">
              <p className="text-[20px]">❤️</p>
              <h3 className="text-[18px] font-bold text-gray-900">Essential (£19)</h3>
              <p className="text-[14px] font-semibold text-gray-700">Best if:</p>
              <ul className="text-[14px] text-gray-600 space-y-2">
                <li className="flex items-start gap-2"><span className="text-gray-400">·</span> Recently diagnosed</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">·</span> Want to stay organised</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">·</span> Need somewhere for questions and symptoms</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">·</span> Prefer a simple one-page summary</li>
              </ul>
              <div className="pt-2 border-t border-gray-100 space-y-1">
                <p className="text-[13px] font-semibold text-gray-700">Outcome:</p>
                <p className="text-[13px] text-gray-600">✔ Never forget important questions</p>
                <p className="text-[13px] text-gray-600">✔ Arrive more prepared</p>
                <p className="text-[13px] text-gray-600">✔ Keep everything in one place</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border-2 border-[oklch(0.55_0.15_195)] p-6 space-y-4 shadow-sm">
              <p className="text-[20px]">🤝</p>
              <h3 className="text-[18px] font-bold text-gray-900">Complete (£27)</h3>
              <p className="text-[14px] font-semibold text-gray-700">Best if:</p>
              <ul className="text-[14px] text-gray-600 space-y-2">
                <li className="flex items-start gap-2"><span className="text-gray-400">·</span> Treatment is already underway</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">·</span> You have a caregiver helping</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">·</span> Multiple specialists are involved</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">·</span> You want future planning included</li>
              </ul>
              <div className="pt-2 border-t border-gray-100 space-y-1">
                <p className="text-[13px] font-semibold text-gray-700">Outcome:</p>
                <p className="text-[13px] text-gray-600">✔ Better coordination</p>
                <p className="text-[13px] text-gray-600">✔ Reduced caregiver stress</p>
                <p className="text-[13px] text-gray-600">✔ More comprehensive picture of your care</p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-4 shadow-sm flex flex-col justify-center">
              <p className="text-[20px]">❓</p>
              <h3 className="text-[18px] font-bold text-gray-900">Still unsure?</h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">
                Start with the free checklist. Upgrade later if it helps.
              </p>
              <Link href="/oncology-appointment-checklist">
                <button className="w-full px-5 py-3 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] bg-white text-[14px] font-semibold rounded-xl hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                  Get free checklist
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <p className="text-[18px] md:text-[20px] font-bold" style={{ background: "linear-gradient(90deg, oklch(0.55 0.15 195), oklch(0.45 0.15 300))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              50% of all proceeds are donated to cancer charities, to fund research.
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
                <p className="text-[32px] font-bold text-gray-900 mb-2">£19</p>
                <p className="text-[14px] text-gray-500 mb-6">Best for first appointments, active treatment and quick sharing.</p>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Diagnosis and key medical information</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Questions and topics for your healthcare team</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Symptoms, current thoughts and priorities</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Medicines, allergies and important warnings</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Private downloadable PDF — we never see your data</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <button
                  data-gtag-purchase
                  data-plan="essential"
                  className="w-full py-3 rounded-lg text-[16px] font-semibold transition-all duration-300 hover:shadow-lg border-2 cursor-pointer"
                  style={{ backgroundColor: "#FFFFFF", color: "oklch(0.45 0.15 195)", borderColor: "oklch(0.55 0.15 195)" }}
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "purchase", {
                        currency: "GBP",
                        value: 19,
                        items: [{ item_name: "Essential Appointment Companion", price: 19, quantity: 1 }],
                      });
                    }
                    document.getElementById("paypal-button-current")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get the Essential version →
                </button>
                <div id="paypal-button-current" className="w-full"></div>
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
                <p className="text-[32px] font-bold text-gray-900 mb-2">£27</p>
                <p className="text-[14px] text-gray-500 mb-6">Best for patients and families ready for broader reflection and future care planning.</p>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Everything in the Essential version</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Sources of comfort and wellbeing</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Reflections, feedback and useful resources</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Future wishes, advance directive location and healthcare power of attorney</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Private downloadable PDF — we never see your data</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <button
                  data-gtag-purchase
                  data-plan="complete"
                  className="w-full py-3 rounded-lg text-[16px] font-semibold text-white transition-all duration-300 hover:shadow-lg cursor-pointer"
                  style={{ background: "linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))" }}
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag) {
                      (window as any).gtag("event", "purchase", {
                        currency: "GBP",
                        value: 27,
                        items: [{ item_name: "Complete Care & Future Planning Companion", price: 27, quantity: 1 }],
                      });
                    }
                    document.getElementById("paypal-button-complete")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Get the Complete version →
                </button>
                <div id="paypal-button-complete" className="w-full"></div>
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

          {/* Outcome quotes beside pricing */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="p-4 bg-white rounded-lg border border-gray-100 text-center">
              <p className="text-[14px] text-gray-600 italic leading-[1.6]">"I never forgot my questions again."</p>
              <p className="text-[12px] text-gray-400 mt-2">Cancer patient · Switzerland</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100 text-center">
              <p className="text-[14px] text-gray-600 italic leading-[1.6]">"It reduced the amount of information I had to keep in my head."</p>
              <p className="text-[12px] text-gray-400 mt-2">Caregiver · UK</p>
            </div>
          </div>

          <p className="text-[13px] text-center" style={{ color: "#888888", fontStyle: "italic" }}>
            Secure checkout via PayPal. No account needed. All major cards accepted. Instant access after payment.
          </p>
        </div>
      </section>

      {/* Real voices - condensed */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-[26px] md:text-[34px] font-bold text-gray-900">Real voices from patients, caregivers and clinicians</h2>
            <p className="text-[16px] text-gray-500">Concrete examples of how MyHealthCanvas is being used in real cancer care conversations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-100 space-y-3 shadow-sm">
              <p className="text-[15px] text-gray-600 leading-[1.8] italic">
                "After diagnosis, it is an avalanche of emails, letters, phone calls, SMS and in-person appointments. MyHC helps me organise my key information — especially the questions for my oncologist — so I never forget anything."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">Cancer patient, 58 · Switzerland</p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-100 space-y-3 shadow-sm">
              <p className="text-[15px] text-gray-600 leading-[1.8] italic">
                "My wife was in pain before treatment started. I had to take care of a mountain of admin. MyHC helped us think through our priorities and start to plan for a better future."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">Caregiver, 64 · UK</p>
            </div>
          </div>
        </div>
      </section>

      <PatientStories />
      <CaregiverCompanion />

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
            MyHealthCanvas was built on one simple rule: your health information belongs to you. We never store, share or process your personal health data. Your completed form stays on your device unless you choose to share it.
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
            <span>© 2025 MyHealthCanvas</span>
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
              <p className="text-white font-bold text-[15px] leading-tight">Start simple from £19</p>
              <p className="text-[12px] leading-tight" style={{ color: "#AACCCC" }}>Instant download · Private by design</p>
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
