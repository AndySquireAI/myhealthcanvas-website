import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, Shield } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function MyHealthCanvas() {

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
    <div className="min-h-screen flex flex-col">
      <SEO
        title="MyHealthCanvas | Printable Patient Health Record Templates"
        description="Download, fill, and share with your care team. Printable PDF templates designed for patients with chronic, complex, or long-term health needs."
        keywords="patient health forms, MyHealthCanvas PDF, medical appointment preparation, health record forms, patient advocacy, cancer survivor, doctor appointment forms, medical history organizer, patient communication tool"
        canonicalPath="/myhealthcanvas"
        ogImage="https://myhealthcanvas.com/images/myhealthcanvas-mockup-comparison.png"
      />

      {/* STICKY CTA BAR */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container py-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-sm font-medium">
              <span className="text-muted-foreground">Current</span> <span className="font-bold">£9</span>
              <span className="mx-3 text-muted-foreground">|</span>
              <span className="text-muted-foreground">Complete</span> <span className="font-bold">£12</span>
            </div>
            <div className="flex gap-3">
              <a href="#buy-current">
                <Button size="sm" variant="outline">Buy Current</Button>
              </a>
              <a href="#buy-complete">
                <Button size="sm">Buy Complete</Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 via-background to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Printable{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                Patient Health Record
              </span>{" "}
              Templates
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download, fill, and share with your care team.
            </p>
            {/* MyHealthCanvas Logo */}
            <div className="flex justify-center mt-8">
              <img
                src="/images/MyHealthCanvasLOGOX2.png"
                alt="MyHealthCanvas Logo"
                className="w-full max-w-xs h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">What You Get</h2>
            <div className="space-y-3">
              <p className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0" />
                <span>Downloadable PDF, yours to keep</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0" />
                <span>Designed for appointments & caregivers</span>
              </p>
              <p className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0" />
                <span>One-page or two-page options</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Preview the Plans</h2>
            
            {/* Mockup image */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
              <img 
                src="/images/myhealthcanvas-mockup-comparison.png"
                alt="Compare at a glance: one-page vs two-page plan"
                className="w-full h-auto cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => window.open('/images/myhealthcanvas-mockup-comparison.png', '_blank')}
              />
              <p className="text-center text-sm text-muted-foreground mt-4">Compare at a glance: one-page vs two-page plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR / NOT FOR */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Who it helps */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[oklch(0.55_0.15_195)]">Who it helps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Long-term care patients</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Multiple meds / conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Family caregivers</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Not intended for */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-destructive">Not intended for</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Diagnosis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Urgent clinical decisions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Patient-Doctor Image */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <img
              src="/images/patient-doctor-myhealthcanvas-final.png"
              alt="Patient and doctor discussing MyHealthCanvas on phone"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* GOVERNANCE MINI-BLOCK */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <p className="text-muted-foreground">
                Built on governed clinical AI principles — no clinical decisions.
              </p>
            </div>
            <a 
              href="https://www.andysquire.ai/clinical-ai-governance" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:text-primary/80 text-sm"
            >
              Read governance framework →
            </a>
          </div>
        </div>
      </section>

      {/* PRICING + CTAs */}
      <section id="buy" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Current Plan */}
            <Card id="buy-current" className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Current Plan</CardTitle>
                <CardDescription>One-page snapshot</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£9</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-primary">Best for appointments & emergencies</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Medical snapshot & key facts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Questions for your care team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Printable, patient-owned PDF</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-4">
                  <div id="paypal-button-current" className="w-full"></div>
                  <p className="text-xs text-center text-muted-foreground">
                    Secure payment via PayPal
                  </p>
                </div>
              </CardFooter>
            </Card>

            {/* Complete Plan */}
            <Card id="buy-complete" className="hover:shadow-xl transition-all duration-300 border-2 border-primary/50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Complete Plan</CardTitle>
                <CardDescription>Two-page comprehensive</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£12</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-medium text-primary">Best for complex care & caregiver support</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Everything in the Current Plan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Goals, priorities & reflections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Care preferences & what matters most</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="w-full space-y-4">
                  <div id="paypal-button-complete" className="w-full"></div>
                  <p className="text-xs text-center text-muted-foreground">
                    Secure payment via PayPal
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>

          {/* Reassurance line */}
          <p className="text-center text-muted-foreground mt-8">
            Need help choosing? <a href="mailto:andy@andysquire.ai" className="text-primary hover:underline">Email us</a> — we'll guide you.
          </p>
        </div>
      </section>

      {/* PAG Link */}
      <section className="py-8 bg-muted/30 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <a 
              href="/myhealthcanvas/advocacy" 
              className="text-[oklch(0.55_0.15_195)] hover:text-[oklch(0.45_0.15_195)] font-medium text-sm underline underline-offset-4 transition-colors"
            >
              For Patient Advocacy Group Collaborations →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
