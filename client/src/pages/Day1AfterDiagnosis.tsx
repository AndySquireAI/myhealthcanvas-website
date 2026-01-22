import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function Day1AfterDiagnosis() {
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
        title="Day 1 After Diagnosis | MyHealthCanvas"
        description="The first 30 days after diagnosis are overwhelming. Here's how to organize what matters - appointments, questions, decisions - without losing control."
        keywords="new diagnosis help, overwhelmed after diagnosis, what to do after diagnosis, caregiver support, patient planning, first 30 days diagnosis"
        canonicalPath="/day-1-after-diagnosis"
      />

      {/* BACK LINK */}
      <div className="container pt-6">
        <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to home
        </Link>
      </div>

      {/* HERO - Emotional, single-purpose */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              The first 30 days are the hardest
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              You've just received news that changes everything. There's too much information, too many appointments, and not enough clarity.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              This is normal. And you can get through it.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU NEED TO ORGANIZE */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 text-center mb-8">
              What you need to organize right now
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h3 className="font-medium text-slate-800 mb-2">Your key contacts</h3>
                <p className="text-slate-600 text-sm">Who to call, when, and for what. Stop searching through papers.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h3 className="font-medium text-slate-800 mb-2">Your medications</h3>
                <p className="text-slate-600 text-sm">What you're taking, why, and what to watch for.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h3 className="font-medium text-slate-800 mb-2">Your questions</h3>
                <p className="text-slate-600 text-sm">The things you forget to ask when you're sitting in the appointment.</p>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200">
                <h3 className="font-medium text-slate-800 mb-2">What matters to you</h3>
                <p className="text-slate-600 text-sm">Your priorities, your values, your preferences - not just the medical facts.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              What not to panic about yet
            </h2>
            <p className="text-slate-600">
              You don't need to understand everything right now. You don't need to make every decision today. You just need a place to put your thoughts so they stop spinning.
            </p>
            <p className="text-slate-600">
              That's what MyHealthCanvas is for.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING - Action-focused */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-slate-800 mb-3">
              Create your first care plan
            </h2>
            <p className="text-center text-slate-600 mb-10">
              A printable PDF you can fill in, update, and share with your care team.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Current Plan */}
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-700">Current Plan</CardTitle>
                  <p className="text-3xl font-bold text-[oklch(0.55_0.15_195)]">£9</p>
                  <p className="text-sm text-slate-500">One-page snapshot</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Key contacts & care team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Current medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Questions for appointments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Health summary</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <div id="paypal-button-current" className="w-full"></div>
                  <p className="text-xs text-slate-400 text-center">Instant download after payment</p>
                </CardFooter>
              </Card>

              {/* Complete Plan */}
              <Card className="border-[oklch(0.55_0.15_195)] border-2 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[oklch(0.55_0.15_195)] text-white text-xs px-3 py-1 rounded-full">
                    Most helpful
                  </span>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-lg text-slate-700">Complete Plan</CardTitle>
                  <p className="text-3xl font-bold text-[oklch(0.55_0.15_195)]">£12</p>
                  <p className="text-sm text-slate-500">Two-page comprehensive</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Everything in Current Plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Goals & priorities (30/60/90 days)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Care preferences & values</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Reflections & what matters most</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col gap-3">
                  <div id="paypal-button-complete" className="w-full"></div>
                  <p className="text-xs text-slate-400 text-center">Instant download after payment</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-center text-slate-800 mb-6">
              See what you'll get
            </h2>
            <div className="bg-slate-50 rounded-xl p-4 md:p-6">
              <img 
                src="/images/myhealthcanvas-mockup-comparison.png" 
                alt="Compare the Current Plan and Complete Plan"
                className="w-full h-auto cursor-pointer hover:opacity-95 transition-opacity rounded-lg"
                onClick={() => window.open('/images/myhealthcanvas-mockup-comparison.png', '_blank')}
              />
              <p className="text-center text-sm text-slate-500 mt-4">
                Click to view larger
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <blockquote className="text-lg text-slate-600 italic">
              "I finally felt like I had some control back."
            </blockquote>
            <blockquote className="text-lg text-slate-600 italic">
              "My husband filled this out with me. It helped us talk about things we'd been avoiding."
            </blockquote>
          </div>
        </div>
      </section>

      {/* FINAL REASSURANCE */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h2 className="text-xl font-semibold text-slate-800">
              You don't have to have all the answers
            </h2>
            <p className="text-slate-600">
              You just need a place to start. This is that place.
            </p>
            <p className="text-sm text-slate-400 mt-6">
              No account required · Download instantly · You own your data
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER TRUST */}
      <section className="py-8 border-t bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-slate-500">
              MyHealthCanvas is a patient-owned planning tool. Not medical advice.{" "}
              <Link href="/myhealthcanvas/governance" className="underline underline-offset-2 hover:text-slate-700">
                Read our approach →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
