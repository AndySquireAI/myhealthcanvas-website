import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Download, Heart, Users, FileText } from "lucide-react";
import { useEffect } from "react";

declare global {
  interface Window {
    paypal?: any;
  }
}

// Patient-first redesign - Updated January 5, 2026
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
                alert(
                  "Thank you for your purchase! Your download link will be sent to your email."
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
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto italic">
              From patient to artist of your own story
            </p>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              At your own pace. In your own words.
            </p>
            
            {/* Large MyHealthCanvas Logo */}
            <div className="flex justify-center my-8">
              <img
                src="/images/MyHealthCanvasLOGOX2.png"
                alt="MyHealthCanvas Logo"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 - Immediate Reassurance */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              A calmer way to prepare for medical appointments
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 max-w-3xl mx-auto text-left">
              <p>
                Medical appointments can feel rushed, emotional, and overwhelming. Important details are easy to forget — especially when you are anxious, tired, or unwell.
              </p>
              <p>
                MyHealthCanvas gives you a quiet, structured place to organise your health story before you meet your care team.
              </p>
              <p className="font-medium">
                You decide what matters. You decide what to share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - What MyHealthCanvas Actually Is */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              What is MyHealthCanvas?
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                MyHealthCanvas is a patient-friendly health preparation tool.
              </p>
              <p className="font-medium">It helps you:</p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                  <span>organise symptoms, treatments, and medical history</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                  <span>reflect on what has changed since your last appointment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                  <span>prepare questions you don't want to forget</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                  <span>communicate more clearly with your doctor or care team</span>
                </li>
              </ul>
              <p className="italic">
                It is not a test, a diagnosis, or something you need to "get right".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Why Patients Use It */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Why patients use MyHealthCanvas
            </h2>
            <ul className="space-y-4 text-lg text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] mt-3 flex-shrink-0" />
                <span>Appointments often feel too short</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] mt-3 flex-shrink-0" />
                <span>Stress makes it hard to remember everything</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] mt-3 flex-shrink-0" />
                <span>Health information is scattered across notes and memory</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] mt-3 flex-shrink-0" />
                <span>Important concerns get missed or postponed</span>
              </li>
            </ul>
            <p className="text-lg text-muted-foreground text-center pt-4">
              MyHealthCanvas brings everything together in one calm place — so your doctor can understand you better.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - How It Works */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              How it works
            </h2>
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">1. Start where you feel comfortable</h3>
                <p className="text-lg text-muted-foreground">
                  You can begin with symptoms, medications, questions, or anything that feels important today.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">2. Write in your own words</h3>
                <p className="text-lg text-muted-foreground">
                  There are no "right" answers. Skip anything that doesn't apply.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">3. Bring it with you</h3>
                <p className="text-lg text-muted-foreground">
                  Use MyHealthCanvas to support conversations during appointments or care discussions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Gentle Boundaries */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              What MyHealthCanvas is — and isn't
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[oklch(0.55_0.15_195)]">MyHealthCanvas is:</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>A preparation and reflection tool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Designed to support communication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Created by a patient, for patients</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-destructive">MyHealthCanvas is not:</h3>
                <ul className="space-y-3 text-lg text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0" />
                    <span>A diagnostic tool</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0" />
                    <span>Medical advice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-destructive mt-3 flex-shrink-0" />
                    <span>A replacement for professional care</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - AI (Minimal) */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              About AI support
            </h2>
            <div className="text-lg text-muted-foreground space-y-3">
              <p>
                Any AI assistance within MyHealthCanvas is designed only to support clarity and reflection.
              </p>
              <p>
                It does not diagnose, treat, or make clinical decisions.
              </p>
              <p className="font-medium">
                You remain in control at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Tiers */}
      <section className="py-20 bg-muted/30">
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
                <CardDescription>For recent health tracking</CardDescription>
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
                <CardDescription>For comprehensive health records</CardDescription>
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
                    <span>Complete medical history (all years)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Family health history</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Lifestyle & wellness tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Mental health & quality of life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Advanced care planning</span>
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

      {/* Section 7 - Emotional Close */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              You don't have to do this alone
            </h2>
            <div className="text-lg text-muted-foreground space-y-4">
              <p>
                Preparing for healthcare conversations can feel heavy — especially when you're already dealing with illness or uncertainty.
              </p>
              <p>
                MyHealthCanvas exists to make that process a little calmer, clearer, and more humane.
              </p>
              <p className="font-medium text-xl">
                Use as much or as little as you like.
              </p>
            </div>
            <div className="pt-6">
              <Button size="lg" className="text-lg px-8" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Start MyHealthCanvas
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">The Mission</h2>
            <p className="text-xl text-muted-foreground">
              Created by a 2× cancer survivor who understands what patients need
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Heart className="h-12 w-12 text-[oklch(0.55_0.15_195)] mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">50%</div>
                  <p className="text-muted-foreground">
                    of profits go to cancer research
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-[oklch(0.55_0.15_195)] mx-auto mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2">Patient First</div>
                  <p className="text-muted-foreground">
                    Designed by patients, for patients
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
