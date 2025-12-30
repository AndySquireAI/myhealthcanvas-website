import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Download, Heart, Users, FileText, XCircle, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "wouter";

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
                // Trigger download of Current Plan PDF
                const link = document.createElement('a');
                link.href = '/downloads/MyHealthCanvas-Current-Plan.pdf';
                link.download = 'MyHealthCanvas-Current-Plan.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                alert(
                  "Thank you for your purchase! Your download should start automatically."
                );
                // Track conversion
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
                // Trigger download of Complete Plan PDF
                const link = document.createElement('a');
                link.href = '/downloads/MyHealthCanvas-Complete-Plan.pdf';
                link.download = 'MyHealthCanvas-Complete-Plan.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                alert(
                  "Thank you for your purchase! Your download should start automatically."
                );
                // Track conversion
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 via-background to-background py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Take Control of Your{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                Health Masterpiece
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto italic">
              From patient to artist of your own story
            </p>
            {/* MyHealthCanvas Logo */}
            <div className="flex justify-center py-4">
              <img 
                src="/images/myhealthcanvas-logo.png" 
                alt="MyHealthCanvas Logo" 
                className="h-48 md:h-64 w-auto"
              />
            </div>
            {/* Hero Clarifier - FEAT-MHC-009 */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MyHealthCanvas is a non-medical space where you can organise your health story before sharing it with others. A patient-controlled tool designed to support clarity, dignity, and shared decision-making.
            </p>
            
            {/* Patient-Doctor Hero Image */}
            <div className="mt-8 max-w-3xl mx-auto">
              <img 
                src="/images/patient-doctor-myhealthcanvas.png" 
                alt="Patient showing MyHealthCanvas to doctor on phone - improving patient-clinician communication" 
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What This Is / What This Is Not Block - FEAT-MHC-009 */}
      <section className="py-12 bg-background border-b">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What MyHealthCanvas IS */}
              <Card className="border-2 border-[oklch(0.55_0.15_195)]/30 bg-[oklch(0.55_0.15_195)]/5">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center gap-2 text-[oklch(0.45_0.15_195)]">
                    <CheckCircle2 className="h-6 w-6" />
                    What MyHealthCanvas IS
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">A personal health communication and reflection tool</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">A way to organise symptoms, questions, and priorities</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Support for conversations with clinicians and caregivers</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Fully controlled by the patient</span>
                  </div>
                </CardContent>
              </Card>

              {/* What MyHealthCanvas is NOT */}
              <Card className="border-2 border-muted bg-muted/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl flex items-center gap-2 text-muted-foreground">
                    <XCircle className="h-6 w-6" />
                    What MyHealthCanvas is NOT
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Not a diagnostic tool</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Not a medical device</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Not a replacement for clinicians</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="h-5 w-5 text-muted-foreground/60 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Not an automated decision-maker</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Patients struggle to communicate their complete health history
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Medical teams need organized, comprehensive information
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">
                      Traditional forms are intimidating and use confusing medical jargon
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">The Solution</h2>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Patient-friendly language that's easy to understand
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Comprehensive health tracking in one place
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">
                      Easy to fill out, easy to share, easy to update
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Both plans are downloadable PDF forms you can fill out at your own pace
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Current Plan */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Current Plan</CardTitle>
                <CardDescription>A quick sketch of critical health information</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£9</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Current medications & dosages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Recent medical history (last 2 years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Current symptoms & concerns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Allergies & reactions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Downloadable PDF</span>
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
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Complete Plan</CardTitle>
                <CardDescription>A fuller picture for your ongoing health story</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£12</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm font-semibold text-primary">
                  Everything in Current Plan, plus:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Complete medical history (lifetime)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Family health history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Lifestyle factors & habits</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Preventive care tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Mental health & wellbeing</span>
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
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-gradient-to-br from-[oklch(0.55_0.15_195)]/10 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Heart className="h-16 w-16 text-[oklch(0.55_0.15_195)] mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold">
              50% of Profits Go to Cancer Research
            </h2>
            <p className="text-lg text-muted-foreground">
              As a 2× cancer survivor, Andy is committed to supporting cancer research
              charities. Half of all profits from MyHealthCanvas go directly to
              organizations working to find cures and improve patient outcomes.
            </p>
            <p className="text-sm text-muted-foreground">
              Your purchase helps patients today and funds research for tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold">Purchase</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your plan and complete secure PayPal checkout
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Download</h3>
                <p className="text-sm text-muted-foreground">
                  Receive your PDF form via email immediately
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Fill Out</h3>
                <p className="text-sm text-muted-foreground">
                  Complete the form at your own pace, no rush
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Share</h3>
                <p className="text-sm text-muted-foreground">
                  Bring to appointments or email to your medical team
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Image */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">See What You'll Get</h2>
            <img
              src="/images/MyHealthCanvas-Preview-v2.png"
              alt="MyHealthCanvas Form Preview"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* PAG Link Section - FEAT-MHC-009 */}
      <section className="py-12 bg-muted/30 border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-muted-foreground">Are you a healthcare organisation or advocacy group?</p>
            <Link href="/myhealthcanvas/advocacy">
              <span className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium border-2 border-primary/30 rounded-lg text-primary hover:bg-primary/5 hover:border-primary/50 transition-all cursor-pointer">
                For Patient Advocacy Groups
                <ArrowRight className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
