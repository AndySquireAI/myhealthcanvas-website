import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="MyHealthCanvas | Organize What Matters After a Diagnosis"
        description="Recently diagnosed? Feeling overwhelmed? MyHealthCanvas helps patients and caregivers organize appointments, questions, and medical information. Free to start."
        keywords="organize medical records, diagnosis help, patient organization, caregiver support, medical appointments, health planning"
        canonicalPath="/"
      />

      {/* HERO - SINGLE PRIMARY CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Recently diagnosed? Feeling overwhelmed?
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              You don't have to navigate this alone. Start by organizing what matters most — your appointments, questions, and medical information.
            </p>
            
            {/* Single Primary CTA */}
            <div className="pt-6">
              <Link href="/myhealthcanvas">
                <Button size="lg" className="text-lg px-8 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                  Help me organize what matters
                </Button>
              </Link>
              <p className="text-sm text-slate-400 mt-4">
                Free to start · Patient-owned · No medical advice
              </p>
            </div>

            {/* Single subtle secondary link */}
            <div className="pt-4">
              <a 
                href="#why-myhealthcanvas" 
                className="text-slate-500 hover:text-slate-700 text-sm underline underline-offset-4"
              >
                Explore helpful resources →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY MYHEALTHCANVAS HELPS IN THE FIRST MONTH */}
      <section id="why-myhealthcanvas" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 text-center mb-8">
              Why MyHealthCanvas Helps in the First Month
            </h2>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-[oklch(0.55_0.15_195)]" />
                </div>
                <p className="text-slate-600">Capture everything so nothing gets lost</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-[oklch(0.55_0.15_195)]" />
                </div>
                <p className="text-slate-600">Prepare questions for your clinical team</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-[oklch(0.55_0.15_195)]" />
                </div>
                <p className="text-slate-600">Track appointments and treatments</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-[oklch(0.55_0.15_195)]" />
                </div>
                <p className="text-slate-600">Feel less overwhelmed</p>
              </div>
            </div>

            {/* Single Primary CTA */}
            <div className="text-center">
              <Link href="/myhealthcanvas">
                <Button size="lg" className="bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                  Start my first plan
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST 30 DAYS TEASER */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
              The First 30 Days After a Diagnosis
            </h2>
            <p className="text-slate-600 mb-8">
              Understand why you feel overwhelmed — and what you can do right now to get control.
            </p>
            <Link href="/first-30-days-after-diagnosis" className="text-[oklch(0.55_0.15_195)] hover:underline underline-offset-4">
              Read the guide →
            </Link>
          </div>
        </div>
      </section>

      {/* E-LIBRARY TEASER - INFORMATIONAL ONLY */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
              Helpful Resources for Patients & Caregivers
            </h2>
            <p className="text-slate-600 mb-6">
              Practical guides and articles to help you navigate your health journey.
            </p>
            <Link href="/elibrary" className="text-[oklch(0.55_0.15_195)] hover:underline underline-offset-4">
              Read articles and practical guides →
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA - REPEAT MAIN ONE ONLY */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Ready to get organized?
            </h2>
            <Link href="/myhealthcanvas">
              <Button size="lg" className="text-lg px-8 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                Start organizing what matters
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
