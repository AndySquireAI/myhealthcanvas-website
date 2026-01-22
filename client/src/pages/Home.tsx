import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import SEO from "@/components/SEO";

export default function Home() {
  const [showFounderStory, setShowFounderStory] = useState(false);
  const [showGovernance, setShowGovernance] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="MyHealthCanvas | The First 30 Days After a Diagnosis"
        description="Recently diagnosed? Feeling overwhelmed? MyHealthCanvas helps you get through the first 30 days with structure, clarity, and calm. No medical advice. No AI decisions."
        keywords="diagnosis support, overwhelmed after diagnosis, patient organization, first 30 days, health planning"
        canonicalPath="/"
      />

      {/* MINIMAL NAVIGATION - One escape hatch only */}
      <nav className="py-4 border-b border-slate-100">
        <div className="container flex justify-between items-center">
          <span className="text-slate-400 text-sm">MyHealthCanvas</span>
          <a href="#why-exists" className="text-slate-400 text-sm hover:text-slate-600">
            Why this exists
          </a>
        </div>
      </nav>

      {/* HERO - SINGLE CTA ONLY */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Recently diagnosed? Feeling overwhelmed?
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              You don't have to figure this out alone. Take one calm step at a time.
            </p>
            
            {/* SINGLE PRIMARY CTA - No competing buttons */}
            <div className="pt-4">
              <Link href="/first-30-days-after-diagnosis">
                <Button size="lg" className="text-lg px-10 py-7 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                  Start with the first 30 days
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE BLOCK - No buttons */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-slate-500 leading-relaxed">
              No medical advice. No AI decisions.<br />
              Just structure, clarity, and calm.
            </p>
          </div>
        </div>
      </section>

      {/* WHY THIS EXISTS - Collapsed sections, no buttons */}
      <section id="why-exists" className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 text-center mb-10">
              Why MyHealthCanvas Exists
            </h2>
            
            {/* Founder Story - Accordion */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => setShowFounderStory(!showFounderStory)}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="text-slate-700 font-medium">The story behind this</span>
                {showFounderStory ? (
                  <ChevronUp className="h-5 w-5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                )}
              </button>
              {showFounderStory && (
                <div className="pb-6 text-slate-600 leading-relaxed">
                  <p className="mb-4">
                    MyHealthCanvas was created by someone who has been through this. The overwhelming flood of information after a diagnosis. The fear. The confusion about what to do next.
                  </p>
                  <p>
                    This isn't a product built by people who don't understand. It's a quiet space designed to help you find your footing - one step at a time.
                  </p>
                </div>
              )}
            </div>

            {/* Governance - Accordion */}
            <div className="border-b border-slate-200">
              <button
                onClick={() => setShowGovernance(!showGovernance)}
                className="w-full py-4 flex items-center justify-between text-left"
              >
                <span className="text-slate-700 font-medium">How we protect you</span>
                {showGovernance ? (
                  <ChevronUp className="h-5 w-5 text-slate-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-slate-400" />
                )}
              </button>
              {showGovernance && (
                <div className="pb-6 text-slate-600 leading-relaxed">
                  <p className="mb-4">
                    We don't collect your health data. We don't make medical decisions. We don't use AI to diagnose or recommend treatments.
                  </p>
                  <p>
                    MyHealthCanvas provides printable templates and organizational guidance. Your information stays with you - on your phone, your computer, your Google Drive. We never see it.
                  </p>
                </div>
              )}
            </div>

            {/* Plain text statement - not a button */}
            <div className="pt-8 text-center">
              <p className="text-slate-500 italic">
                Designed by patients, for patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Same primary CTA repeated once */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <Link href="/first-30-days-after-diagnosis">
              <Button size="lg" className="text-lg px-10 py-7 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                Start with the first 30 days
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER - Minimal, text links only */}
      <footer className="py-8 border-t border-slate-100">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/myhealthcanvas/advocacy" className="hover:text-slate-600">
                For advocates
              </Link>
              <Link href="/impressum" className="hover:text-slate-600">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
