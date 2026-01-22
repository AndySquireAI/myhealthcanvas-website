import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";

export default function First30Days() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [showSecondOpinionModal, setShowSecondOpinionModal] = useState(false);

  // GA4 scroll depth tracking
  useEffect(() => {
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      const milestones = [25, 50, 75];
      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !(window as any)[`scrolled_${milestone}`]) {
          (window as any)[`scrolled_${milestone}`] = true;
          if (typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "scroll_depth", {
              percent_scrolled: milestone,
              page_location: window.location.href,
            });
          }
        }
      });
    };

    window.addEventListener("scroll", trackScrollDepth);
    return () => window.removeEventListener("scroll", trackScrollDepth);
  }, []);

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const checklistItems = [
    "Appointment letters",
    "Lab results",
    "Test reports",
    "Emails with care instructions",
    "Texts about appointments or treatments",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="The First 30 Days After a Diagnosis | MyHealthCanvas"
        description="Understand why you feel overwhelmed after a diagnosis — and what you can do right now to get control. Practical steps for patients and caregivers."
        keywords="first 30 days diagnosis, overwhelmed after diagnosis, organize medical documents, patient support, caregiver help"
        canonicalPath="/first-30-days-after-diagnosis"
      />

      {/* BACK LINK */}
      <div className="container pt-6">
        <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to home
        </Link>
      </div>

      {/* SECTION 1 - HERO */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              The First 30 Days After a Diagnosis
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Understand why you feel overwhelmed — and what you can do right now to get control.
            </p>
            
            {/* Single Primary CTA */}
            <div className="pt-6">
              <Link href="/myhealthcanvas">
                <Button size="lg" className="text-lg px-8 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                  Start organizing my documents
                </Button>
              </Link>
              <p className="text-sm text-slate-400 mt-4">
                You stay in control · No medical advice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - EMOTIONAL SUPPORT (NO CTAs) */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Feelings are real. You're not alone.
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Shock, confusion, fear are normal</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>This is a lot to absorb</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>You don't have to solve everything today</span>
              </li>
            </ul>
            {/* No buttons here - pause point */}
          </div>
        </div>
      </section>

      {/* SECTION 3 - STEP 1: CAPTURE EVERYTHING */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Step 1 — Capture what you already have
            </h2>
            <p className="text-slate-600 mb-8">
              Take photos/screenshots of your documents so nothing gets lost. You can organize them later.
            </p>

            {/* Tappable checklist */}
            <div className="space-y-3 mb-8">
              {checklistItems.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleCheck(item)}
                  className={`w-full flex items-center gap-4 p-4 rounded-lg border text-left transition-colors ${
                    checkedItems[item]
                      ? "bg-[oklch(0.55_0.15_195)]/10 border-[oklch(0.55_0.15_195)]"
                      : "bg-white border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 ${
                      checkedItems[item]
                        ? "bg-[oklch(0.55_0.15_195)] text-white"
                        : "border-2 border-slate-300"
                    }`}
                  >
                    {checkedItems[item] && <Check className="h-4 w-4" />}
                  </div>
                  <span className={checkedItems[item] ? "text-slate-700" : "text-slate-600"}>
                    {item}
                  </span>
                </button>
              ))}
            </div>

            {/* Single Primary CTA */}
            <Link href="/myhealthcanvas">
              <Button className="bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]">
                Upload and organize now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PRACTICAL DAILY LIFE STEPS (NO CTA) */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Step 2 — Reduce overwhelm in daily life
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Keep a simple routine</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Ask for help with meals and errands</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Rest when you can</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Prioritize sleep & nutrition</span>
              </li>
            </ul>
            {/* No CTA here - guidance only */}
          </div>
        </div>
      </section>

      {/* SECTION 5 - UNDERSTAND YOUR MEDICAL TIMELINE */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Step 3 — Understand what comes next
            </h2>
            <p className="text-slate-600 mb-6">
              Your care team will outline next steps. It's common to have a few weeks before major decisions — use that time to prepare.
            </p>
            <ul className="space-y-3 text-slate-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Talk with your clinician about timelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Write down your questions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Track appointments in one place</span>
              </li>
            </ul>

            {/* Single CTA */}
            <Link href="/myhealthcanvas">
              <Button className="bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]">
                Prepare for my next appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SECOND PERSPECTIVE */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Optional: Getting a second opinion
            </h2>
            <p className="text-slate-600 mb-6">
              A second perspective can help you feel confident — not replace your team.
            </p>
            <ul className="space-y-3 text-slate-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">1.</span>
                <span>Compile documents</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">2.</span>
                <span>Share with a specialist covered by insurance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">3.</span>
                <span>Review together on a remote call</span>
              </li>
            </ul>

            {/* Modal trigger button */}
            <Button 
              variant="outline" 
              className="border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)]"
              onClick={() => setShowSecondOpinionModal(true)}
            >
              Explore how to get a second opinion
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 7 - E-LIBRARY (NO PRIMARY CTA) */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Helpful Resources for Patients & Caregivers
            </h2>
            <Link href="/elibrary" className="text-[oklch(0.55_0.15_195)] hover:underline underline-offset-4">
              Read articles and practical guides →
            </Link>
            {/* No buttons here - informational only */}
          </div>
        </div>
      </section>

      {/* SECTION 8 - FINAL CTA */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Ready to start organizing?
            </h2>
            <Link href="/myhealthcanvas">
              <Button size="lg" className="text-lg px-10 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                Start organizing what matters
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50">
        <Link href="/myhealthcanvas" className="block">
          <Button className="w-full bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white py-6">
            Get organized today
          </Button>
        </Link>
      </div>

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-20 md:hidden" />

      {/* SECOND OPINION MODAL */}
      {showSecondOpinionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowSecondOpinionModal(false)}>
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-semibold text-slate-800">Getting a Second Opinion</h3>
            <p className="text-slate-600 text-sm">
              A second opinion can help confirm your treatment plan or explore alternatives. Here's how:
            </p>
            <ol className="space-y-3 text-slate-600 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">1.</span>
                <span>Gather your medical records, test results, and imaging</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">2.</span>
                <span>Contact a specialist — many offer remote consultations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">3.</span>
                <span>Check if your insurance covers second opinions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">4.</span>
                <span>Share insights with your primary care team</span>
              </li>
            </ol>
            <p className="text-xs text-slate-400">
              This is not medical advice. Always consult with your healthcare provider.
            </p>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => setShowSecondOpinionModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
