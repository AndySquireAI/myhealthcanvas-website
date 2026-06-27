import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { trackPurchase } from "@/lib/analytics";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function Start() {
  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=Aeh8fC5lOPXjj-f1dqDeegz-8EDOi4BTMNLM01BQH4N4nqqKjwYhxKoAdnn_zDe6wQA7YqN0Da5ltbV4&currency=GBP";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Render Current Plan button
      if (window.paypal && document.getElementById("paypal-button-current-start")) {
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
                    description: "MyHealthCanvas - Current Plan",
                  },
                ],
              });
            },
            onApprove: function (_data: any, actions: any) {
              return actions.order.capture().then(function () {
                trackPurchase(
                  {
                    transactionId: _data.orderID,
                    value: 19.0,
                    currency: "GBP",
                    itemName: "MyHealthCanvas Current Plan",
                  },
                  () => {
                    window.location.href = `/myhealthcanvas/thank-you?product=current&order_id=${_data.orderID}`;
                  },
                );
              });
            },
            onError: function (err: any) {
              console.error("PayPal error:", err);
              alert("There was an error processing your payment. Please try again.");
            },
          })
          .render("#paypal-button-current-start");
      }

      // Render Complete Plan button
      if (window.paypal && document.getElementById("paypal-button-complete-start")) {
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
              return actions.order.capture().then(function () {
                trackPurchase(
                  {
                    transactionId: _data.orderID,
                    value: 27.0,
                    currency: "GBP",
                    itemName: "MyHealthCanvas Complete Plan",
                  },
                  () => {
                    window.location.href = `/myhealthcanvas/thank-you?product=complete&order_id=${_data.orderID}`;
                  },
                );
              });
            },
            onError: function (err: any) {
              console.error("PayPal error:", err);
              alert("There was an error processing your payment. Please try again.");
            },
          })
          .render("#paypal-button-complete-start");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="Get Your Health Toolkit | MyHealthCanvas — From £19"
        description="Prepare for every cancer appointment with confidence. Curated questions from Macmillan, NHS & Cancer Research UK. Built by a 2× cancer survivor. Instant download."
        keywords="questions to ask oncologist, cancer appointment preparation, health toolkit cancer, patient health form, MyHealthCanvas"
        canonicalPath="/start"
        noindex={true}
      />

      {/* Minimal header - logo only, no nav */}
      <header className="py-4 px-6 border-b border-gray-100" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto flex items-center justify-center">
          <img
            src="/images/MyHealthCanvasLOGOX2.webp"
            alt="MyHealthCanvas Logo"
            className="h-32 md:h-40 lg:h-48"
          />
        </div>
      </header>

      {/* Hero - tight, conversion-focused */}
      <section className="py-12 md:py-16 px-6" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-[28px] md:text-[40px] lg:text-[44px] font-bold text-gray-900 leading-[1.2]">
            Take back control.{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              Ask better questions.
            </span>
          </h1>
          <p className="text-[17px] md:text-[19px] text-gray-600 leading-[1.6] max-w-lg mx-auto">
            The structured health toolkit for cancer patients — built by a 2× cancer survivor. Instant download. Yours forever.
          </p>
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-10 py-4 text-white text-[17px] font-medium rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #643296, #19878C)',
            }}
          >
            Get yours from £19
          </a>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-5 px-6" style={{ background: 'linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.12 270))' }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white text-[13px] md:text-[14px] font-medium">
            <span className="flex items-center gap-2"><span className="text-[16px]">&#128737;</span> Physician-governed</span>
            <span className="flex items-center gap-2"><span className="text-[16px]">&#128274;</span> Private & encrypted</span>
            <span className="flex items-center gap-2"><span className="text-[16px]">&#9825;</span> Built by a 2× cancer survivor</span>
            <span className="flex items-center gap-2"><span className="text-[16px]">&#127891;</span> Harvard Medical School</span>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-14 px-6" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[22px] md:text-[26px] font-bold text-center mb-8" style={{ color: '#0D3349' }}>The research backs it up</h2>
          
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            <div className="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: '#E8F5F5' }}>
              <p className="text-[28px] md:text-[36px] font-bold mb-1" style={{ color: '#0D3349' }}>30%</p>
              <p className="text-[12px] md:text-[13px] text-gray-600 leading-[1.5]">reduction in patient anxiety with structured preparation</p>
            </div>
            <div className="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: '#FDF6EC' }}>
              <p className="text-[28px] md:text-[36px] font-bold mb-1" style={{ color: '#0D3349' }}>75%</p>
              <p className="text-[12px] md:text-[13px] text-gray-600 leading-[1.5]">improvement in care satisfaction with prepared questions</p>
            </div>
            <div className="p-4 md:p-6 rounded-lg text-center" style={{ backgroundColor: '#E8F5F5' }}>
              <p className="text-[28px] md:text-[36px] font-bold mb-1" style={{ color: '#0D3349' }}>2×</p>
              <p className="text-[12px] md:text-[13px] text-gray-600 leading-[1.5]">more questions asked with structured tools</p>
            </div>
          </div>
          
          <p className="text-[11px] text-gray-400 text-center mt-4 italic">Statistics drawn from published clinical communication and patient engagement research.</p>
        </div>
      </section>

      {/* What's Inside - quick feature list */}
      <section className="py-12 px-6" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-[22px] md:text-[26px] font-bold mb-8" style={{ color: '#0D3349' }}>What's inside</h2>
          <div className="grid md:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
            <div className="flex items-start gap-3">
              <span className="text-[oklch(0.55_0.15_195)] text-[18px] mt-0.5 flex-shrink-0">✓</span>
              <p className="text-[15px] text-gray-700">All your key health information in one place</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[oklch(0.55_0.15_195)] text-[18px] mt-0.5 flex-shrink-0">✓</span>
              <p className="text-[15px] text-gray-700">Curated questions from Macmillan, NHS & CRUK</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[oklch(0.55_0.15_195)] text-[18px] mt-0.5 flex-shrink-0">✓</span>
              <p className="text-[15px] text-gray-700">Fill on phone, tablet, computer — or print it</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[oklch(0.55_0.15_195)] text-[18px] mt-0.5 flex-shrink-0">✓</span>
              <p className="text-[15px] text-gray-700">Track symptoms, medications & appointments</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[oklch(0.55_0.15_195)] text-[18px] mt-0.5 flex-shrink-0">✓</span>
              <p className="text-[15px] text-gray-700">Use for every appointment — yours forever</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[oklch(0.55_0.15_195)] text-[18px] mt-0.5 flex-shrink-0">✓</span>
              <p className="text-[15px] text-gray-700">Private & encrypted — we never see your data</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section id="pricing" className="py-16 px-6 scroll-mt-10" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto">
          
          <p className="text-center text-[18px] md:text-[20px] font-bold mb-10" style={{ background: 'linear-gradient(90deg, oklch(0.55 0.15 195), oklch(0.45 0.15 300))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>50% of all proceeds are donated to cancer charities, to fund research.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Plan */}
            <Card className="border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader>
                <CardTitle className="text-[20px] font-bold">Current Plan</CardTitle>
                <CardDescription className="text-[15px]">Your Health Story, Always at Hand</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[32px] font-bold text-gray-900 mb-6">£19</p>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> All your key health information in one place</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Curated questions from Macmillan, NHS & CRUK</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Fill on phone, tablet or computer — or print</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Track symptoms, medications & appointments</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Use for every appointment — yours forever</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Private & encrypted on your device</li>
                </ul>
              </CardContent>
              <CardFooter>
                <div id="paypal-button-current-start" className="w-full"></div>
              </CardFooter>
            </Card>

            {/* Complete Plan */}
            <Card className="border-[oklch(0.55_0.15_195)] border-2 relative" style={{ backgroundColor: '#FFFFFF' }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[12px] font-bold text-white rounded-full" style={{ background: 'oklch(0.55 0.15 195)' }}>MOST POPULAR</div>
              <CardHeader>
                <CardTitle className="text-[20px] font-bold">Complete Plan</CardTitle>
                <CardDescription className="text-[15px]">Your Complete Cancer Journey, Organised</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[32px] font-bold text-gray-900 mb-6">£27</p>
                <ul className="space-y-3 text-[15px] text-gray-600">
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Everything in the Current Plan</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Advance care planning & your wishes</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Goals, priorities & what matters most</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Reflections & emotional wellbeing journal</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Caregiver coordination section</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Questions for every stage of treatment</li>
                  <li className="flex items-start gap-2"><span className="text-[oklch(0.55_0.15_195)] mt-0.5">✓</span> Private & encrypted on your device</li>
                </ul>
              </CardContent>
              <CardFooter>
                <div id="paypal-button-complete-start" className="w-full"></div>
              </CardFooter>
            </Card>
          </div>

          <p className="text-[13px] text-center mt-8" style={{ color: '#888888', fontStyle: 'italic' }}>
            Secure checkout via PayPal (no account needed) · All major cards accepted · Instant access after payment
          </p>
        </div>
      </section>

      {/* Trust / How We Protect You - minimal */}
      <section className="py-12 px-6" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h2 className="text-[20px] md:text-[24px] font-bold text-gray-800">Your data stays yours</h2>
          <p className="text-[15px] text-gray-500 leading-[1.7] max-w-lg mx-auto">
            We never store, share, or process your personal data. Your forms download directly to your device — we have no access to what you write. Your doctors make your decisions. We just help you arrive prepared.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-2 text-[14px] text-gray-500">
            <span>&#128274; Private & encrypted</span>
            <span>&#128737; Physician-governed</span>
            <span>&#9825; Evidence-based</span>
          </div>
        </div>
      </section>

      {/* Created by - survivor credibility */}
      <section className="py-10 px-6" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-[15px] text-gray-500 leading-[1.7]">
            Built by <strong className="text-gray-700">Andy Squire</strong> — a 2× cancer survivor who knows what it's like to feel lost after diagnosis. Harvard Medical School (AI in Healthcare). This isn't a hospital system or a tech company — it's a patient helping other patients.
          </p>
        </div>
      </section>

      {/* Minimal footer - no nav links, just legal */}
      <footer className="py-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[12px] text-gray-400">
            MyHealthCanvas does not provide medical advice. It helps you organize information and prepare questions for your care team.
          </p>
          <p className="text-[12px] text-gray-400 mt-2">
            © {new Date().getFullYear()} MyHealthCanvas · <a href="/privacy" className="hover:underline">Privacy</a> · <a href="/terms" className="hover:underline">Terms</a> · <a href="/impressum" className="hover:underline">Impressum</a>
          </p>
        </div>
      </footer>

    </div>
  );
}
