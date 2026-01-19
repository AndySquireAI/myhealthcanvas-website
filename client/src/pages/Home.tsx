import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Download, FileText, Users, Shield, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this medical advice?",
      answer: "No, it is a planning tool only."
    },
    {
      question: "Do you store my health data?",
      answer: "No — download, no account."
    },
    {
      question: "Can I edit the PDF?",
      answer: "Yes."
    },
    {
      question: "Who is this for?",
      answer: "Patients & caregivers."
    },
    {
      question: "Can I share with my doctor?",
      answer: "Yes."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="MyHealthCanvas | Your Health Plan - Printable PDF Templates"
        description="Printable PDF templates for appointments and care. Designed for patients with chronic, complex, or long-term health needs. Patient-owned, no medical advice, no account required."
        keywords="patient health forms, MyHealthCanvas, health plan PDF, medical appointment preparation, chronic illness, patient advocacy, health records, patient-first, healthcare templates"
        canonicalPath="/"
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Your Health Plan —{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                Printable PDF Templates
              </span>{" "}
              for Appointments & Care
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed by patients, for patients — to help you take back control of your chronic, complex, or long-term health story.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="#pricing">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                  See Plans & Prices
                </Button>
              </a>
              <a href="#mockup">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                  View a Sample PDF
                </Button>
              </a>
            </div>
            
            {/* Soft reassurance line */}
            <p className="text-sm text-muted-foreground">
              Planning support — not medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION STRIP */}
      <section className="py-10 bg-muted/30 border-y">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Download className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Download</h3>
                <p className="text-sm text-muted-foreground">Instant PDF, no signup</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Complete</h3>
                <p className="text-sm text-muted-foreground">Fill at your pace</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Share</h3>
                <p className="text-sm text-muted-foreground">Bring to appointments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Current Plan */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Current Plan</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£9</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Patient-owned, printable PDF</p>
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
                <Link href="/myhealthcanvas" className="w-full">
                  <Button className="w-full">Get Current Plan</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Complete Plan */}
            <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Complete Plan</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£12</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Patient-owned, printable PDF</p>
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
                <Link href="/myhealthcanvas" className="w-full">
                  <Button className="w-full bg-primary">Get Complete Plan</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* PLAN COMPARISON MOCKUP */}
      <section id="mockup" className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
              <img 
                src="/images/myhealthcanvas-mockup-comparison.png" 
                alt="Compare at a glance: one-page vs two-page plan"
                className="w-full h-auto cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => window.open('/images/myhealthcanvas-mockup-comparison.png', '_blank')}
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Compare at a glance: one-page vs two-page plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INSIDE PREVIEW */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">What's Inside</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">One-page</h3>
                  <p className="text-muted-foreground">Quick snapshot of essentials</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Two-page</h3>
                  <p className="text-muted-foreground">Goals, context, preferences</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST & SAFETY BLURB */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="font-semibold text-lg">Built on a governed clinical AI framework.</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Human oversight • No clinical advice • Audit logging
            </p>
            <a 
              href="https://www.andysquire.ai/clinical-ai-governance" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm">View governance framework</Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CardContent className="py-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>
                    {openFaq === index && (
                      <p className="text-muted-foreground mt-3">{faq.answer}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to create your health plan?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/myhealthcanvas">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get Current Plan
                </Button>
              </Link>
              <Link href="/myhealthcanvas">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Get Complete Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
