import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="MyHealthCanvas | Recently Diagnosed? Start Here"
        description="A patient-owned planning tool to help you make sense of appointments, decisions, and next steps after diagnosis. Designed by patients, for patients."
        keywords="new diagnosis help, overwhelmed after diagnosis, caregiver organization tool, medical appointment preparation, patient planning tool, chronic illness support"
        canonicalPath="/"
      />

      {/* HERO SECTION - Emotional, distress-focused */}
      <section className="relative bg-gradient-to-br from-slate-50 via-white to-white py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            {/* H1 - Emotional hook */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Recently diagnosed?{" "}
              <span className="block mt-2">Feeling overwhelmed?</span>
            </h1>
            
            {/* H2 - Reassurance */}
            <h2 className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              You don't have to figure this out alone.
            </h2>
            
            {/* Supporting text */}
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              MyHealthCanvas helps patients and caregivers organize what matters next - appointments, questions, decisions - without losing control.
            </p>
            
            {/* Small supporting line */}
            <p className="text-sm text-slate-400">
              Designed by patients, for patients, facing chronic, complex, or life-changing diagnoses.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
              {/* Primary CTA */}
              <div className="flex flex-col items-center">
                <Link href="/day-1-after-diagnosis">
                  <Button size="lg" className="text-lg px-8 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                    Help me organize what comes next
                  </Button>
                </Link>
                <p className="text-xs text-slate-400 mt-3">
                  Free to start · No medical advice · You stay in control
                </p>
              </div>
              
              {/* Secondary CTA */}
              <Link href="/day-1-after-diagnosis" className="text-slate-500 hover:text-slate-700 underline underline-offset-4 text-sm">
                For caregivers & family →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST SECTION - Simple, human */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-2xl font-semibold text-slate-800">
              What people say
            </h2>
            <div className="space-y-6">
              <blockquote className="text-lg text-slate-600 italic">
                "I didn't know what questions to ask until I wrote them down."
              </blockquote>
              <blockquote className="text-lg text-slate-600 italic">
                "This helped me feel less stupid in appointments."
              </blockquote>
              <blockquote className="text-lg text-slate-600 italic">
                "Finally, something that doesn't tell me what to do - just helps me think."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET - Simple, clear */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-slate-800 mb-10">
              A simple planning tool, not a medical system
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-slate-200">
                <CardHeader>
                  <CardTitle className="text-lg text-slate-700">Current Plan</CardTitle>
                  <p className="text-2xl font-bold text-[oklch(0.55_0.15_195)]">£9</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>One-page health snapshot</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Key contacts & medications</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Questions for your care team</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/day-1-after-diagnosis" className="w-full">
                    <Button variant="outline" className="w-full border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)]">
                      Start organizing
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              <Card className="border-[oklch(0.55_0.15_195)] border-2">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-slate-700">Complete Plan</CardTitle>
                    <span className="text-xs bg-[oklch(0.55_0.15_195)] text-white px-2 py-1 rounded">Most helpful</span>
                  </div>
                  <p className="text-2xl font-bold text-[oklch(0.55_0.15_195)]">£12</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-slate-600">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[oklch(0.55_0.15_195)] flex-shrink-0 mt-0.5" />
                      <span>Everything in Current Plan</span>
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
                  <Link href="/day-1-after-diagnosis" className="w-full">
                    <Button className="w-full bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]">
                      Start organizing
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PREVIEW MOCKUP */}
      <section id="mockup" className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8">
              <img 
                src="/images/myhealthcanvas-mockup-comparison.png" 
                alt="Compare at a glance: one-page vs two-page plan"
                className="w-full h-auto cursor-pointer hover:opacity-95 transition-opacity"
                onClick={() => window.open('/images/myhealthcanvas-mockup-comparison.png', '_blank')}
              />
              <p className="text-center text-sm text-slate-500 mt-4">
                Click to view larger
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Ready to start organizing?
            </h2>
            <p className="text-slate-600">
              Take the first step. No account needed. You stay in control.
            </p>
            <Link href="/day-1-after-diagnosis">
              <Button size="lg" className="text-lg px-8 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]">
                Help me organize what comes next
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER TRUST LINE */}
      <section className="py-8 border-t bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-slate-500">
              MyHealthCanvas is a patient-owned planning tool. Not medical advice. Not a clinical system.{" "}
              <Link href="/myhealthcanvas/governance" className="underline underline-offset-2 hover:text-slate-700">
                Read our governance approach →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
