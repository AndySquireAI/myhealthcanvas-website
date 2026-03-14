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

  useEffect(() => {
    // Load PayPal SDK
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=Aeh8fC5lOPXjj-f1dqDeegz-8EDOi4BTMNLM01BQH4N4nqqKjwYhxKoAdnn_zDe6wQA7YqN0Da5ltbV4&currency=GBP";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Render Current Plan button
      if (window.paypal && document.getElementById("paypal-button-current")) {
        window.paypal
          .Buttons({
            createOrder: function (_data: any, actions: any) {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "9.00",
                      currency_code: "GBP",
                    },
                    description: "MyHealthCanvas - Current Plan",
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
                    value: 9.0,
                    currency: "GBP",
                    items: [
                      {
                        item_name: "MyHealthCanvas Current Plan",
                        price: 9.0,
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
                      value: "12.00",
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
                    value: 12.0,
                    currency: "GBP",
                    items: [
                      {
                        item_name: "MyHealthCanvas Complete Plan",
                        price: 12.0,
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
        title="Personal Healthcare Software | Organize Your Health Records at Home"
        description="Take control of your health story. Organize your personal health records, prepare for appointments, and manage your care at home. Simple healthcare software built for patients, not hospitals."
        keywords="healthcare software, personal health records, home care software, patient health records, care at home, health record organizer, medical appointment preparation"
        canonicalPath="/myhealthcanvas"
      />

      {/* Section 1 - Logo and Headline with subtle blank canvas background */}
      <section className="py-16 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle blank canvas gallery background */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center opacity-70 md:opacity-80 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/bg-product-canvas-v2.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        <div className="max-w-xl mx-auto text-center space-y-8 relative z-10">
          
          {/* Large Logo at top */}
          <img
            src="/images/MyHealthCanvasLOGOX2.png"
            alt="MyHealthCanvas Logo"
            className="h-40 md:h-48 lg:h-56 mx-auto"
          />
          
          {/* Headline - Empowering, patient-first */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2]">
            Take Control of Your{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              Health Story
            </span>
          </h1>
          
          {/* Subheadline - bridges keyword to product */}
          <p className="text-[18px] md:text-[20px] text-gray-600 leading-[1.6]">
            Organize your personal health records. Prepare for appointments. Manage your care at home.
          </p>
          
        </div>
      </section>

      {/* Section 2 - Value props with keywords */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-lg mx-auto space-y-12">
          
          <div className="text-center">
            <p className="text-[19px] text-gray-700 leading-[1.6]">
              <strong>Your personal health records</strong> — one private place for your health story
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-[19px] text-gray-700 leading-[1.6]">
              <strong>Care at home, on your terms</strong> — you stay in control of your data
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-[19px] text-gray-700 leading-[1.6]">
              <strong>No complex software to learn</strong> — use it as little or as much as you want
            </p>
          </div>
          
        </div>
      </section>

      {/* Section 2.5 - Why this works (keyword bridge) */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[17px] text-gray-500 leading-[1.7]">
            Most healthcare software is built for hospitals, not patients. MyHealthCanvas is different: 
            a simple way to organize your health information, track medications, and prepare questions 
            for your care team — without the complexity of electronic health record systems.
          </p>
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
              src="/images/MyHealthCanvasMOCKUPPBD.png"
              alt="MyHealthCanvas healthcare software template preview - organize your personal health records"
              className="w-full rounded-lg shadow-lg border border-gray-200"
            />
            <div className="text-center space-y-2">
              <p className="text-[15px] text-gray-500">
                Current Plan (1 page) · Complete Plan (2 pages)
              </p>
              {/* Explicit button for click to enlarge - works on desktop */}
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
            src="/images/patient-doctor-myhealthcanvas-final.png"
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

      {/* Section 5 - Pricing */}
      <section id="buy" className="py-20 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Plan */}
            <Card className="border-gray-200" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader>
                <CardTitle className="text-[20px] font-bold">Current Plan</CardTitle>
                <CardDescription className="text-[15px]">One-page health record template</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[32px] font-bold text-gray-900 mb-6">£9</p>
                <ul className="space-y-2 text-[16px] text-gray-600">
                  <li>Essential health information</li>
                  <li>Medications & contacts</li>
                  <li>Print and fill by hand</li>
                </ul>
              </CardContent>
              <CardFooter>
                <div id="paypal-button-current" className="w-full"></div>
              </CardFooter>
            </Card>

            {/* Complete Plan */}
            <Card className="border-[oklch(0.55_0.15_195)] border-2" style={{ backgroundColor: '#FFFFFF' }}>
              <CardHeader>
                <CardTitle className="text-[20px] font-bold">Complete Plan</CardTitle>
                <CardDescription className="text-[15px]">Two-page health record template</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-[32px] font-bold text-gray-900 mb-6">£12</p>
                <ul className="space-y-2 text-[16px] text-gray-600">
                  <li>Everything in Current Plan</li>
                  <li>Goals & priorities</li>
                  <li>Questions for care team</li>
                </ul>
              </CardContent>
              <CardFooter>
                <div id="paypal-button-complete" className="w-full"></div>
              </CardFooter>
            </Card>
          </div>

          <p className="text-[14px] text-gray-400 text-center mt-8">
            Secure payment via PayPal
          </p>
          
          {/* Felt safety - not governance */}
          <p className="text-[15px] text-gray-400 text-center mt-4">
            Private. Supportive. Never replaces your doctors.
          </p>
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

      {/* ZOOMED IMAGE MODAL */}
      {zoomedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 cursor-pointer"
          onClick={() => setZoomedImage(false)}
        >
          <div className="relative">
            <img
              src="/images/MyHealthCanvasMOCKUPPBD.png"
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
