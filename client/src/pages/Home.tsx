import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { Heart, Bot, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="MyHealthCanvas - AI & Healthcare for Everyone"
        description="Patient health forms, safe AI tools, and evidence-based healthcare insights — designed by a patient, not a platform. Used by patients and professionals across Asia, Australia, Europe, Latin America and US."
        keywords="patient health records, MyHealthCanvas, AI healthcare, patient advocacy, Andy Squire, health forms, medical records, patient-first AI, healthcare insights, digital health, patient-centric care"
        canonicalPath="/"
      />
      {/* Hero Section */}
      {/* Clarifying Banner - Governed AI Prototype */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-b border-teal-200 py-3">
        <div className="container text-center text-sm text-teal-800 font-medium">
          MyHealthCanvas is a governed AI prototype built on the <a href="https://andysquire.ai/clinical-ai-governance" className="underline font-semibold hover:text-teal-900">Physician-as-Pilot (AIITL) framework</a>. For full governance documentation, visit: <a href="https://PatientCentricCare.AI" className="underline font-semibold hover:text-teal-900">PatientCentricCare.AI</a>
        </div>
      </div>
      
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-background py-24 overflow-hidden">
        <div className="container">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              AI & Healthcare{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] via-[oklch(0.65_0.14_210)] to-[oklch(0.55_0.18_270)] bg-clip-text text-transparent">
                for Everyone
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Patient health forms, safe AI tools, and evidence-based healthcare insights — designed by a patient, not a platform. Used by patients and professionals across Asia, Australia, Europe, Latin America and US.
            </p>
            {/* Human-Centric Hero Image */}
            <div className="mt-8 max-w-4xl mx-auto">
              <img 
                src="/images/human-centric-hero.png" 
                alt="Human-Centric AI - AIITL Governance and Human-Centric Pilot" 
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* CTA Buttons - Two-Path Routing (Rule 1) */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/about">
                <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                  Regulators / Academics →
                </Button>
              </Link>
              <Link href="/myhealthcanvas">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
                  Care Concepts →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Products Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Ways Andy Can Help
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a patient, business owner, or healthcare professional,
              there's something here for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* MyHealthCanvas */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[oklch(0.55_0.15_195)]/20 hover:border-[oklch(0.55_0.15_195)]/50">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-[oklch(0.55_0.15_195)]" />
                </div>
                <CardTitle className="text-2xl">MyHealthCanvas</CardTitle>
                <CardDescription className="text-base">For Patients</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Gentle, easy-to-use health forms that improve communication with your
                  medical team. Created by a patient, for patients.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Patient-friendly language</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>Comprehensive health tracking</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                    <span>50% profits to cancer research</span>
                  </li>
                </ul>
                <Link href="/myhealthcanvas">
                  <Button className="w-full group-hover:bg-[oklch(0.55_0.15_195)] group-hover:text-white">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AAA */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[oklch(0.65_0.14_210)]/20 hover:border-[oklch(0.65_0.14_210)]/50">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-[oklch(0.65_0.14_210)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="h-8 w-8 text-[oklch(0.65_0.14_210)]" />
                </div>
                <CardTitle className="text-2xl">AAA</CardTitle>
                <CardDescription className="text-base">
                  For Small Businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Custom AI agents that save 50+ hours per month. Affordable automation
                  for restaurants, e-commerce, and service businesses.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span>3-6 month ROI payback</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span>Custom-built for your needs</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.65_0.14_210)] flex-shrink-0 mt-0.5" />
                    <span>Proven to deliver results</span>
                  </li>
                </ul>
                <Link href="/aaa">
                  <Button className="w-full group-hover:bg-[oklch(0.65_0.14_210)] group-hover:text-white">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* eLibrary */}
            <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-[oklch(0.55_0.18_270)]/20 hover:border-[oklch(0.55_0.18_270)]/50">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-[oklch(0.55_0.18_270)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-[oklch(0.55_0.18_270)]" />
                </div>
                <CardTitle className="text-2xl">eLibrary</CardTitle>
                <CardDescription className="text-base">
                  For Everyone
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Curated AI and healthcare insights with evidence-based analysis. All
                  articles feature Andy's AAA Assessment Framework.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.18_270)] flex-shrink-0 mt-0.5" />
                    <span>22+ in-depth articles</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.18_270)] flex-shrink-0 mt-0.5" />
                    <span>Evidence-based insights</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.18_270)] flex-shrink-0 mt-0.5" />
                    <span>Free to access</span>
                  </li>
                </ul>
                <Link href="/elibrary">
                  <Button className="w-full group-hover:bg-[oklch(0.55_0.18_270)] group-hover:text-white">
                    Browse Articles
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Andy Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/AndyAIPhoto.jpg"
                  alt="Andy Squire"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">Meet Andy Squire</h2>
                <p className="text-lg text-muted-foreground">
                  A 2× cancer survivor, patient advocate, and AI healthcare expert
                  dedicated to putting patients over profit.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>AI Education:</strong> Oxford, Harvard Medical School, Cambridge
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Partnership:</strong> Harvard Medical School Capstone - Human centric Safety OS
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Global Reach:</strong> Used by patients and professionals across Asia, Australia, Europe, Latin America and US.
                    </span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/about">
                    <Button variant="outline" size="lg">
                      Read Andy's Story
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">The Mission</h2>
            <p className="text-xl opacity-90 leading-relaxed">
              "I believe healthcare should be driven by patient needs, not platform
              profits. MyHealthCanvas is my way of giving back, providing tools that
              empower patients and insights that challenge the status quo."
            </p>
            <div className="pt-4">
              <p className="font-semibold text-2xl">— Andy Squire</p>
              <p className="opacity-75">Patient Advocate & AI Expert</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
