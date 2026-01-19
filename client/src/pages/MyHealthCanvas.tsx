import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, XCircle, Calendar, Stethoscope, Users, Plane, Shield } from "lucide-react";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";

declare global {
  interface Window {
    paypal?: any;
  }
}

export default function MyHealthCanvas() {
  const [activeTab, setActiveTab] = useState(0);

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

  const tabs = [
    { label: "Current Plan Preview", image: "/images/myhealthcanvas-mockup-comparison.png" },
    { label: "Complete Plan Preview", image: "/images/myhealthcanvas-mockup-comparison.png" },
    { label: "Side-by-Side Comparison", image: "/images/myhealthcanvas-mockup-comparison.png" }
  ];

  const useCases = [
    { icon: Calendar, title: "Before your appointment", description: "Organise your thoughts and questions before seeing your doctor." },
    { icon: Stethoscope, title: "After a new diagnosis", description: "Process and document what you've learned about your condition." },
    { icon: Users, title: "Coordinating care with family", description: "Share your health plan with caregivers and loved ones." },
    { icon: Plane, title: "Travel or emergency readiness", description: "Have your key health information ready when you need it most." }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="MyHealthCanvas | Patient Health Record PDF Forms"
        description="Printable PDFs to help you organise, reflect, and share what matters in your care. Patient-owned, no account required, instant download."
        keywords="patient health forms, MyHealthCanvas PDF, medical appointment preparation, health record forms, patient advocacy, cancer survivor, doctor appointment forms, medical history organizer, patient communication tool"
        canonicalPath="/myhealthcanvas"
        ogImage="https://myhealthcanvas.com/images/myhealthcanvas-mockup-comparison.png"
      />

      {/* GLOBAL ELEMENT - STICKY CTA BAR */}
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

      {/* SECTION 1 - PRODUCT HERO */}
      <section className="relative bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 via-background to-background py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              MyHealthCanvas Patient Health Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Printable PDFs to help you organise, reflect, and share what matters in your care.
            </p>
            <p className="text-sm text-muted-foreground">
              Patient-owned • No account • Instant download
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - WHAT YOU GET (before explanations) */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">What You Get</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                <span>Downloadable PDF (one or two pages)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                <span>Clear structure for health information</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                <span>Space for goals, questions & preferences</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                <span>Designed for patients and caregivers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PREVIEW TABS (engagement driver) */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Preview the Plans</h2>
            
            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            
            {/* Tab content */}
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
              <img 
                src={tabs[activeTab].image}
                alt={tabs[activeTab].label}
                className="w-full h-auto cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => window.open(tabs[activeTab].image, '_blank')}
              />
              <p className="text-center text-sm text-muted-foreground mt-4">Click to enlarge</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHO IT'S FOR / NOT FOR */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Best for */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[oklch(0.55_0.15_195)]">Best for</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Chronic conditions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Complex care journeys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Multiple specialists</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Caregiver involvement</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Not for */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-destructive">Not for</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Emergencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Diagnosis or triage</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Replacing clinician advice</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - USE CASES (visual cards) */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">When to Use MyHealthCanvas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <useCase.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground">{useCase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - GOVERNANCE (short, authoritative) */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Clinical AI governance - when AI is used</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  MyHealthCanvas is built on a physician-defined governance framework that ensures human authority, deterministic escalation, and auditability when AI components are introduced.
                </p>
                <a 
                  href="https://www.andysquire.ai/clinical-ai-governance" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Read governance framework →
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FINAL CONVERSION BLOCK */}
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
            Need help choosing? <a href="mailto:andy@andysquire.ai" className="text-primary hover:underline">Email us</a> - we'll guide you.
          </p>
        </div>
      </section>

      {/* Charity Partnership CTA */}
      <section className="py-8 bg-muted/30 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <a 
              href="/myhealthcanvas/advocacy" 
              className="text-[oklch(0.55_0.15_195)] hover:text-[oklch(0.45_0.15_195)] font-medium text-sm underline underline-offset-4 transition-colors"
            >
              Are you a patient charity? Learn about partnership opportunities →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
