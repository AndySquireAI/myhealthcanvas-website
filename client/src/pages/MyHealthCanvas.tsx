import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function MyHealthCanvas() {
  const [zoomedImage, setZoomedImage] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Sticky mobile CTA bar logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const buySection = document.getElementById('pricing');
      if (buySection) {
        const buyTop = buySection.getBoundingClientRect().top;
        // Show after 400px scroll, hide when pricing section is visible
        setShowStickyBar(scrollY > 400 && buyTop > 200);
      } else {
        setShowStickyBar(scrollY > 400);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=Aeh8fC5lOPXjj-f1dqDeegz-8EDOi4BTMNLM01BQH4N4nqqKjwYhxKoAdnn_zDe6wQA7YqN0Da5ltbV4&currency=GBP";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Render Essential Plan button
      if (window.paypal && document.getElementById("paypal-button-current")) {
        window.paypal
          .Buttons({
            createOrder: function (_data: any, actions: any) {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "19.00",
                      currency_code: "GBP",
                    },
                    description: "MyHealthCanvas - Essential Plan",
                  },
                ],
              });
            },
            onApprove: function (_data: any, actions: any) {
              return actions.order.capture().then(function (details: any) {
                // Track purchase in Google Analytics
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "purchase", {
                    transaction_id: _data.orderID,
                    value: 19.0,
                    currency: "GBP",
                    items: [
                      {
                        item_name: "MyHealthCanvas Essential Plan",
                        price: 19.0,
                        quantity: 1,
                      },
                    ],
                  });
                }
                // Redirect to Thank You page with product info
                window.location.href = `/myhealthcanvas/thank-you?product=current&order_id=${_data.orderID}`;
              });
            },
            onError: function (err: any) {
              console.error("PayPal error:", err);
              alert("There was an error processing your payment. Please try again.");
            },
          })
          .render("#paypal-button-current");
      }

      // Render Complete Plan button
      if (window.paypal && document.getElementById("paypal-button-complete")) {
        window.paypal
          .Buttons({
            createOrder: function (_data: any, actions: any) {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "27.00",
                      currency_code: "GBP",
                    },
                    description: "MyHealthCanvas - Complete Plan",
                  },
                ],
              });
            },
            onApprove: function (_data: any, actions: any) {
              return actions.order.capture().then(function (details: any) {
                // Track purchase in Google Analytics
                if (typeof window !== "undefined" && (window as any).gtag) {
                  (window as any).gtag("event", "purchase", {
                    transaction_id: _data.orderID,
                    value: 27.0,
                    currency: "GBP",
                    items: [
                      {
                        item_name: "MyHealthCanvas Complete Plan",
                        price: 27.0,
                        quantity: 1,
                      },
                    ],
                  });
                }
                // Redirect to Thank You page with product info
                window.location.href = `/myhealthcanvas/thank-you?product=complete&order_id=${_data.orderID}`;
              });
            },
            onError: function (err: any) {
              console.error("PayPal error:", err);
              alert("There was an error processing your payment. Please try again.");
            },
          })
          .render("#paypal-button-complete");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="Your Personal Health Plan — Clear, Organised, Yours | MyHealthCanvas"
        description="Your personal health plan — clear, organised, yours. Prepare for every cancer appointment with confidence. Built by a 2× cancer survivor. From £19."
        keywords="health plan, patient health records, cancer appointment preparation, health toolkit cancer, MyHealthCanvas, personalised health plan, caregiver health plan"
        canonicalPath="/myhealthcanvas"
      />

      {/* Section 1 - Hero with headline matching Google Ad copy */}
      <section className="py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle blank canvas gallery background */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center opacity-70 md:opacity-80 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/bg-product-canvas-v2.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Large Logo at top */}
          <img
            src="/images/MyHealthCanvasLOGOX2.webp"
            alt="MyHealthCanvas Logo"
            className="h-40 md:h-48 lg:h-56 mx-auto"
          />
          
          {/* Headline - Must match Google Ad copy exactly */}
          <h1 className="text-[28px] md:text-5xl lg:text-[52px] font-bold text-gray-900 leading-[1.2] text-center">
            Your personal health plan —{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              clear, organised, yours.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-[20px] md:text-[24px] font-semibold text-gray-700 leading-[1.4] text-center">
            Take back control. Ask better questions. Give yourself every chance.
          </p>

          {/* Supporting line */}
          <p className="text-[16px] md:text-[18px] text-gray-500 leading-[1.6] text-center">
            Downloadable PDF Form - Easily fill in your data using free Adobe Acrobat Reader (Fill & Sign) on your Phone
          </p>
          
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-6 px-6 md:px-12 lg:px-24" style={{ background: 'linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.12 270))' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white text-[14px] md:text-[15px] font-medium">
            <span className="flex items-center gap-2"><span className="text-[18px]">&#128737;</span> Physician-governed design</span>
            <span className="flex items-center gap-2"><span className="text-[18px]">&#128274;</span> Your data stays private</span>
            <span className="flex items-center gap-2"><span className="text-[18px]">&#9825;</span> <span className="hidden md:inline">Built by Andy Squire — 2× cancer survivor, Harvard Medical School (Best Overall Capstone, AI in Healthcare 2026)</span><span className="md:hidden">Built by Andy Squire — 2× cancer survivor & Harvard Medical School recognised</span></span>
          </div>
        </div>
      </section>

      {/* PRICING SECTION - Both plans side by side, above fold on desktop */}
      <section id="pricing" className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto">
          
          <p className="text-center text-[18px] md:text-[20px] font-bold mb-10" style={{ background: 'linear-gradient(90deg, oklch(0.55 0.15 195), oklch(0.45 0.15 300))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>50% of all proceeds are donated to cancer charities, to fund research.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Essential Plan */}
            <Card className="border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader>
                <CardTitle className="text-[20px] font-bold">Essential Plan</CardTitle>
                <CardDescription className="text-[15px]">1-page summary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[32px] font-bold text-gray-900 mb-6">£19</p>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Diagnosis summary</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Key questions list</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Next steps checklist</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Fill on your phone, tablet or computer</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Private — we never see your data</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <button
                  data-gtag-purchase
                  data-plan="essential"
                  className="w-full py-3 rounded-lg text-[16px] font-semibold transition-all duration-300 hover:shadow-lg border-2 cursor-pointer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    color: 'oklch(0.45 0.15 195)',
                    borderColor: 'oklch(0.55 0.15 195)',
                  }}
                  onClick={() => {
                    // Fire GA4 purchase event for Google Ads conversion tracking
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'purchase', {
                        currency: 'GBP',
                        value: 19,
                        items: [{ item_name: 'Essential Plan', price: 19, quantity: 1 }],
                      });
                    }
                    document.getElementById('paypal-button-current')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get this plan →
                </button>
                <div id="paypal-button-current" className="w-full"></div>
              </CardFooter>
            </Card>

            {/* Complete Plan - Best Value */}
            <Card className="border-[oklch(0.55_0.15_195)] border-2 relative" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[12px] font-bold text-white rounded-full" style={{ background: 'oklch(0.55 0.15 195)' }}>★ BEST VALUE</div>
              <CardHeader>
                <CardTitle className="text-[20px] font-bold">Complete Plan</CardTitle>
                <CardDescription className="text-[15px]">2-page full plan</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[32px] font-bold text-gray-900 mb-6">£27</p>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Everything in Essential</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Medication tracker</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Appointment log</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Caregiver section</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Advance care planning & reflections</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Private — we never see your data</li>
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-3">
                <button
                  data-gtag-purchase
                  data-plan="complete"
                  className="w-full py-3 rounded-lg text-[16px] font-semibold text-white transition-all duration-300 hover:shadow-lg cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))',
                  }}
                  onClick={() => {
                    // Fire GA4 purchase event for Google Ads conversion tracking
                    if (typeof window !== 'undefined' && (window as any).gtag) {
                      (window as any).gtag('event', 'purchase', {
                        currency: 'GBP',
                        value: 27,
                        items: [{ item_name: 'Complete Plan', price: 27, quantity: 1 }],
                      });
                    }
                    document.getElementById('paypal-button-complete')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get this plan →
                </button>
                <div id="paypal-button-complete" className="w-full"></div>
              </CardFooter>
            </Card>
          </div>

          <p className="text-[13px] text-center mt-8" style={{ color: '#888888', fontStyle: 'italic' }}>
            Secure checkout via PayPal (no account needed) · All major cards accepted · Instant access after payment
          </p>
          
          {/* Felt safety */}
          <p className="text-[15px] text-gray-400 text-center mt-4">
            Private. Supportive. Never replaces your doctors.
          </p>
        </div>
      </section>

      {/* SOCIAL PROOF BLOCK */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-3xl mx-auto space-y-10">

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-100 space-y-3">
              <p className="text-[15px] text-gray-600 leading-[1.7] italic">
                "I felt so much more in control walking into my appointment. Having everything written down meant I didn't forget a single question."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">— Yolanda G, Switzerland · Patient</p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-gray-100 space-y-3">
              <p className="text-[15px] text-gray-600 leading-[1.7] italic">
                "As a caregiver, at first, I helped my mum fill it in — she was too overwhelmed by her diagnosis. But then after a while, she found keeping it updated on her phone helped her take back some control and feel organised."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">— Armin G, Switzerland · Caregiver</p>
            </div>
          </div>

          {/* Pilot badge */}
          <div className="flex items-center justify-center gap-3 py-4">
            <span className="text-[20px]">🏥</span>
            <p className="text-[15px] text-gray-600 font-medium">
              Used by families supported by Bethesda Alterszentren Basel
            </p>
          </div>

          {/* Privacy statement */}
          <div className="text-center py-4 px-6 bg-white rounded-xl border border-gray-100">
            <p className="text-[15px] text-gray-600 flex items-center justify-center gap-2">
              <span className="text-[18px]">🔒</span>
              We never store your health data. Everything stays on your device.
            </p>
          </div>

        </div>
      </section>

      {/* How It Works - 3 simple steps */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[24px] md:text-[30px] font-bold text-gray-800 text-center mb-3">How It Works</h2>
          <p className="text-[16px] text-gray-500 text-center mb-12">Three simple steps. No complex software to learn.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-[24px] font-bold text-white" style={{ background: 'oklch(0.55 0.15 195)' }}>1</div>
              <h3 className="text-[18px] font-bold text-gray-800">Choose Your Plan</h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">Pick the Essential Plan (1 page) or Complete Plan (2 pages). Fill it on your phone, tablet, or computer — or print it out. Your choice, every time.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-[24px] font-bold text-white" style={{ background: 'oklch(0.55 0.15 195)' }}>2</div>
              <h3 className="text-[18px] font-bold text-gray-800">Fill In Your Details</h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">Write down your health information, medications, and questions at your own pace. No rush, no pressure.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center text-[24px] font-bold text-white" style={{ background: 'oklch(0.55 0.15 195)' }}>3</div>
              <h3 className="text-[18px] font-bold text-gray-800">Take It to Your Appointment</h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">Bring your completed canvas — on your phone or printed out. Better questions lead to better care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - What You Get - MOCKUP */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[24px] md:text-3xl font-bold text-gray-800 mb-8 text-center">
            What you get
          </h2>
          
          {/* Mockup image */}
          <div className="space-y-4">
            <img
              src="/images/MyHealthCanvasMOCKUPPBD.webp"
              alt="MyHealthCanvas healthcare software template preview - organize your personal health records"
              className="w-full rounded-lg shadow-lg border border-gray-200"
            />
            <div className="text-center space-y-2">
              <p className="text-[15px] text-gray-500">
                Essential Plan (1 page) · Complete Plan (2 pages)
              </p>
              {/* Explicit button for click to enlarge */}
              <button
                onClick={() => setZoomedImage(true)}
                className="text-[14px] text-[oklch(0.55_0.15_195)] hover:underline cursor-pointer"
              >
                Click to view larger
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Patient Picture */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <img
            src="/images/patient-doctor-myhealthcanvas-final.webp"
            alt="Patient using healthcare software to communicate with doctor"
            className="w-full rounded-lg"
          />
        </div>
      </section>

      {/* Patient Advocacy Group Link */}
      <section className="py-8 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center">
          <Link 
            href="/myhealthcanvas/advocacy"
            className="text-[oklch(0.55_0.15_195)] hover:underline text-[16px]"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Are you a Patient Advocacy Group? →
          </Link>
        </div>
      </section>

      {/* Social Proof / Science Stats */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[24px] md:text-[30px] font-bold text-center mb-3" style={{ color: '#0D3349' }}>The research backs it up</h2>
          <p className="text-[16px] md:text-[17px] text-gray-500 text-center mb-10">Patients who arrive prepared get measurably better care.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#E8F5F5' }}>
              <p className="text-[36px] md:text-[42px] font-bold mb-2" style={{ color: '#0D3349' }}>30%</p>
              <p className="text-[14px] text-gray-600 leading-[1.6]">reduction in patient anxiety when patients journal symptoms and questions before appointments</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#FDF6EC' }}>
              <p className="text-[36px] md:text-[42px] font-bold mb-2" style={{ color: '#0D3349' }}>75%</p>
              <p className="text-[14px] text-gray-600 leading-[1.6]">improvement in care satisfaction among patients who arrived to appointments with prepared questions</p>
            </div>
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#E8F5F5' }}>
              <p className="text-[36px] md:text-[42px] font-bold mb-2" style={{ color: '#0D3349' }}>2×</p>
              <p className="text-[14px] text-gray-600 leading-[1.6]">more questions asked by patients using structured preparation tools vs unprepared patients</p>
            </div>
          </div>
          
          <p className="text-[12px] text-gray-400 text-center mt-6" style={{ fontStyle: 'italic' }}>Statistics drawn from published clinical communication and patient engagement research. MyHealthCanvas does not make medical claims.</p>
        </div>
      </section>

      {/* How We Protect You - Patient trust section */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-800">How We Protect You</h2>
          <p className="text-[16px] text-gray-500 leading-[1.7]">
            MyHealthCanvas was built on one simple rule: your health information belongs to you, and only you.
          </p>
          <p className="text-[16px] text-gray-500 leading-[1.7]">
            We never store, share, or process your personal data. Your forms are downloaded directly to your device — we have no access to what you write. Your doctors make your decisions. We just help you arrive prepared.
          </p>
          <div className="grid md:grid-cols-3 gap-6 pt-4">
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <p className="text-[15px] font-semibold text-gray-800 mb-1">No autonomous decisions</p>
              <p className="text-[14px] text-gray-500">We help you organise — your doctors make every decision.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <p className="text-[15px] font-semibold text-gray-800 mb-1">Your data, your control</p>
              <p className="text-[14px] text-gray-500">Nothing is shared without your explicit consent.</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-100">
              <p className="text-[15px] font-semibold text-gray-800 mb-1">Clinically informed</p>
              <p className="text-[14px] text-gray-500">Every question curated from Macmillan, NHS & Cancer Research UK.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-lg mx-auto text-center space-y-4">
          <h3 className="text-[20px] font-bold text-gray-800">Stay Informed</h3>
          <p className="text-[15px] text-gray-500">Get weekly health tips and new resources. One email a week, no spam.</p>
          <form
            action="mailto:andy@patientcentriccare.ai?subject=Newsletter%20Signup%20-%20MyHealthCanvas"
            method="GET"
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-[15px] focus:outline-none focus:border-[oklch(0.55_0.15_195)]"
              style={{ backgroundColor: '#FFFFFF' }}
            />
            <button
              type="submit"
              className="px-6 py-3 text-white text-[15px] font-medium rounded-lg transition-colors"
              style={{ background: 'oklch(0.55 0.15 195)' }}
            >
              Subscribe
            </button>
          </form>
          <p className="text-[12px] text-gray-400">Unsubscribe anytime. We respect your privacy.</p>
        </div>
      </section>

      {/* TRUST FOOTER */}
      <footer className="py-8 border-t border-gray-100 mt-auto">
        <div className="container px-6">
          <p className="text-[13px] text-gray-400 text-center mb-6 max-w-xl mx-auto">
            MyHealthCanvas does not provide medical advice. It helps you organize information, prepare questions, and communicate more clearly with your care team.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
              <Link href="/myhealthcanvas/advocacy" className="hover:text-gray-600">
                For Patient Advocacy Groups
              </Link>
              <Link href="/impressum" className="hover:text-gray-600">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA BAR */}
      {showStickyBar && (
        <div
          className="fixed bottom-0 left-0 right-0 z-[999] md:hidden"
          style={{
            background: '#0D3349',
            padding: '16px 20px',
            boxShadow: '0 -4px 20px rgba(0,0,0,0.3)',
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-[15px] leading-tight">From £19</p>
              <p className="text-[12px] leading-tight" style={{ color: '#AACCCC' }}>Instant download · Yours forever</p>
            </div>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white font-bold text-[14px] no-underline"
              style={{
                background: '#C8933A',
                padding: '12px 20px',
                borderRadius: '6px',
              }}
            >
              Get Yours
            </a>
          </div>
        </div>
      )}

      {/* ZOOMED IMAGE MODAL */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setZoomedImage(false)}
        >
          <div className="relative">
            <img
              src="/images/MyHealthCanvasMOCKUPPBD.webp"
              alt="MyHealthCanvas template preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setZoomedImage(false)}
              className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
