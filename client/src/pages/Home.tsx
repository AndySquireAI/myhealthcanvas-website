import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { Download, FileText, Users, Shield, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import SEO from "@/components/SEO";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is this medical advice?",
      answer: "No. This is a patient-authored planning document to support conversations with clinicians."
    },
    {
      question: "Do you store my health data?",
      answer: "No. The PDF is downloaded and owned by you."
    },
    {
      question: "Can I edit or print the PDF?",
      answer: "Yes. You can type into it, print it, or write by hand."
    },
    {
      question: "Who is this designed for?",
      answer: "Patients with chronic, complex, or long-term conditions, and their caregivers."
    },
    {
      question: "Can I share this with my doctor?",
      answer: "Yes. It's designed to be shared and discussed."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="MyHealthCanvas | Your Health Plan as a Printable PDF"
        description="Patient health forms for chronic, complex, or long-term health journeys. Choose a one-page snapshot or two-page complete plan - owned by you. Designed by a 2x cancer survivor."
        keywords="patient health forms, MyHealthCanvas, health plan PDF, medical appointment preparation, chronic illness, patient advocacy, Andy Squire, health records, patient-first, healthcare insights"
        canonicalPath="/"
      />

      {/* SECTION 1 - HERO (Above the fold, no scroll) */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-16 md:py-24 overflow-hidden">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Your Health Plan{" "}
                  <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                    as a Printable PDF
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground">
                  For patients managing chronic, complex, or long-term health journeys.
                </p>
                <p className="text-base text-muted-foreground">
                  Choose a one-page snapshot or a two-page complete plan. Owned by you. Shareable with your care team.
                </p>
                
                {/* Two buttons only */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a href="#pricing">
                    <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90 w-full sm:w-auto">
                      See the Plans
                    </Button>
                  </a>
                  <a href="/pdfs/MyHealthCanvas-Sample.pdf" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                      View Sample PDF
                    </Button>
                  </a>
                </div>
              </div>
              
              {/* Right: Product visual */}
              <div className="hidden md:block">
                <img 
                  src="/images/myhealthcanvas-mockup-comparison.png" 
                  alt="MyHealthCanvas PDF Preview"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - "How it Works" (immediately after hero) */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Download className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Download</h3>
                <p className="text-sm text-muted-foreground">Printable PDF - no account required</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Complete</h3>
                <p className="text-sm text-muted-foreground">At your own pace, in your own words</p>
              </div>
              <div className="flex flex-col items-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Share</h3>
                <p className="text-sm text-muted-foreground">Bring to appointments or caregivers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - PRICING (core conversion section) */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Choose Your Plan</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Card 1 - CURRENT PLAN */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">Current Plan</CardTitle>
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
                <Link href="/myhealthcanvas" className="w-full">
                  <Button className="w-full">Buy Current Plan</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Card 2 - COMPLETE PLAN - MOST POPULAR */}
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
                  <Button className="w-full bg-primary">Buy Complete Plan</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PLAN COMPARISON MOCKUP (CRITICAL) */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-4 md:p-8">
              <img 
                src="/images/myhealthcanvas-mockup-comparison.png" 
                alt="Compare the one-page Current Plan with the two-page Complete Plan"
                className="w-full h-auto cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => window.open('/images/myhealthcanvas-mockup-comparison.png', '_blank')}
              />
              <p className="text-center text-sm text-muted-foreground mt-4">
                Compare the one-page Current Plan with the two-page Complete Plan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - TRUST & SAFETY (compact, not dominant) */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Built on a governed clinical AI framework</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No diagnosis, triage, or treatment decisions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Human oversight and escalation pathways</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Automated, tamper-evident audit trails</span>
                  </li>
                </ul>
                <div className="text-center mt-6">
                  <a 
                    href="https://www.andysquire.ai/clinical-ai-governance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium"
                  >
                    Governance documentation →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FAQ (exactly 5 questions) */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card 
                  key={index} 
                  className="cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </div>
                    {openFaq === index && (
                      <p className="text-muted-foreground mt-4">{faq.answer}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FINAL CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to create your health plan?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/myhealthcanvas">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Buy Current Plan
                </Button>
              </Link>
              <Link href="/myhealthcanvas">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Buy Complete Plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
