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
      "https://www.paypal.com/sdk/js?client-id=AYp6m7r81oS6Tj-j6uxb3oCOp2nkd4SVgzc4Uoau9nrHTywPMy1uZ9sOmi6UHS1P12YY4wwPt3_YPmIj&currency=GBP";
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
              return actions.order.capture().then(function () {
                alert(
                  "Thank you for your purchase! Your download link will be sent to your email."
                );
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
              });
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
              return actions.order.capture().then(function () {
                alert(
                  "Thank you for your purchase! Your download link will be sent to your email."
                );
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
              });
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
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="What MyHealthCanvas Does | Printable Health Templates"
        description="One private place for your health story. You stay in control of your data. Use it as little or as much as you want."
        keywords="health plan template, printable health record, patient organization"
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
        
        <div className="max-w-md mx-auto text-center space-y-8 relative z-10">
          
          {/* Large Logo at top */}
          <img
            src="/images/MyHealthCanvasLOGOX2.png"
            alt="MyHealthCanvas Logo"
            className="h-40 md:h-48 lg:h-56 mx-auto"
          />
          
          {/* Headline - BOLD like AAA page + gradient on "MyHealthCanvas" */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2]">
            What{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              MyHealthCanvas
            </span>
            {" "}actually does
          </h1>
          
        </div>
      </section>

      {/* Section 2 - Three short blocks only */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-lg mx-auto space-y-12">
          
          <div className="text-center">
            <p className="text-[19px] text-gray-700 leading-[1.6]">
              One private place for your health story
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-[19px] text-gray-700 leading-[1.6]">
              You stay in control of your data
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-[19px] text-gray-700 leading-[1.6]">
              You can use it as little or as much as you want
            </p>
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
              src="/images/MyHealthCanvasMOCKUPPBD.png"
              alt="MyHealthCanvas template preview - Current Plan (one page) and Complete Plan (two pages)"
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
            alt="Patient receiving care"
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
          >
            Are you a Patient Advocacy Group? →
          </Link>
        </div>
      </section>

      {/* Section 5 - Pricing */}
      <section id="buy" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Current Plan */}
            <Card className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-[20px] font-bold">Current Plan</CardTitle>
                <CardDescription className="text-[15px]">One-page template</CardDescription>
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
            <Card className="border-[oklch(0.55_0.15_195)] border-2 bg-white">
              <CardHeader>
                <CardTitle className="text-[20px] font-bold">Complete Plan</CardTitle>
                <CardDescription className="text-[15px]">Two-page template</CardDescription>
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
