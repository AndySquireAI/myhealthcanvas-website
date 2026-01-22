import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { XCircle, Shield, ArrowLeft } from "lucide-react";
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
        title="MyHealthCanvas | Printable Health Plan Templates"
        description="Downloadable PDF templates to organize your health information. Print and fill by hand. Your data stays with you - we don't collect patient information."
        keywords="health plan template, printable health record, patient organization, medical document template"
        canonicalPath="/myhealthcanvas"
      />

      {/* MINIMAL NAVIGATION */}
      <nav className="py-4 border-b border-slate-100">
        <div className="container flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-slate-400 text-sm hover:text-slate-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
          <a href="#what-this-is-not" className="text-slate-400 text-sm hover:text-slate-600">
            What this is not
          </a>
        </div>
      </nav>

      {/* HERO - CLARIFY WHAT THIS IS */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Printable Health Plan Templates
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Download, print, and fill in by hand. Your data stays with you - we don't collect or store any patient information.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT - Above the fold clarification */}
      <section id="what-this-is-not" className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              What this is not
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600">Not medical advice</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600">Not replacing your doctors</span>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="h-5 w-5 text-slate-400 flex-shrink-0" />
                <span className="text-slate-600">Not autonomous AI making decisions</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0" />
                <span className="text-slate-700 font-medium">Just a printable template to help you organize</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW - Clickable mockup */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              See what you get
            </h2>
            <div
              className="cursor-pointer"
              onClick={() => setZoomedImage(true)}
            >
              <img
                src="/images/MyHealthCanvasMOCKUPPBD.png"
                alt="MyHealthCanvas template preview - Current Plan (one page) and Complete Plan (two pages)"
                className="w-full rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
              />
              <p className="text-sm text-slate-500 text-center mt-3">
                Click to enlarge
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING - Single CTA area */}
      <section id="buy" className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
              Choose your template
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Current Plan */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-xl">Current Plan</CardTitle>
                  <CardDescription>One-page template</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-slate-900 mb-4">£9</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Essential health information</li>
                    <li>• Space for medications & contacts</li>
                    <li>• Print and fill by hand</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <div id="paypal-button-current" className="w-full"></div>
                </CardFooter>
              </Card>

              {/* Complete Plan */}
              <Card className="border-[oklch(0.55_0.15_195)] border-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">Complete Plan</CardTitle>
                    <span className="text-xs bg-[oklch(0.55_0.15_195)] text-white px-2 py-1 rounded">
                      Most comprehensive
                    </span>
                  </div>
                  <CardDescription>Two-page template</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-slate-900 mb-4">£12</p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li>• Everything in Current Plan</li>
                    <li>• Goals & priorities section</li>
                    <li>• Questions for your care team</li>
                    <li>• Reflections & feedback space</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <div id="paypal-button-complete" className="w-full"></div>
                </CardFooter>
              </Card>
            </div>

            <p className="text-sm text-slate-400 text-center mt-6">
              Secure payment via PayPal. Download link sent to your email.
            </p>
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-slate-500 leading-relaxed">
              No medical advice. No AI decisions.<br />
              Just structure, clarity, and calm.
            </p>
          </div>
        </div>
      </section>

      {/* SECONDARY TEXT LINK - For advocates (not a button) */}
      <section className="py-8 border-t border-slate-100">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <Link href="/myhealthcanvas/advocacy" className="text-slate-400 text-sm hover:text-slate-600">
              Looking for patient advocacy instead?
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-100">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-slate-600">
                Home
              </Link>
              <Link href="/impressum" className="hover:text-slate-600">
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
          <img
            src="/images/MyHealthCanvasMOCKUPPBD.png"
            alt="MyHealthCanvas template preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </div>
  );
}
