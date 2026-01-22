import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import SEO from "@/components/SEO";

export default function First30Days() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

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
    "Lab results & pathology reports",
    "Discharge summaries",
    "Emails from hospitals or clinics",
    "Photos of handwritten notes",
    "Insurance or billing letters",
    "Text messages with dates or instructions",
  ];

  const trackCTAClick = (ctaName: string) => {
    if (typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "cta_click", {
        cta_name: ctaName,
        page_location: window.location.href,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="The First 30 Days After Diagnosis | MyHealthCanvas"
        description="The first 30 days after a diagnosis are overwhelming. This page helps you slow things down and take control, one step at a time."
        keywords="new diagnosis help, first 30 days diagnosis, overwhelmed after diagnosis, patient organization, caregiver support, second opinion"
        canonicalPath="/first-30-days"
      />

      {/* BACK LINK */}
      <div className="container pt-6">
        <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-slate-700">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to home
        </Link>
      </div>

      {/* SECTION 1 - HERO (EMOTIONAL GROUNDING) */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              The first 30 days after a diagnosis are overwhelming.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              You're being asked to absorb life-changing information, make decisions, and keep daily life running - all at once.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              This page helps you slow things down and take control, one step at a time.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col items-center gap-4 pt-6">
              <Link href="/myhealthcanvas" onClick={() => trackCTAClick("hero_get_organized")}>
                <Button size="lg" className="text-lg px-8 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                  Help me get organized
                </Button>
              </Link>
              <p className="text-sm text-slate-400">
                Free · Private · No medical advice · You stay in control
              </p>
              <a 
                href="#expert-support" 
                className="text-slate-500 hover:text-slate-700 underline underline-offset-4 text-sm mt-2"
                onClick={() => trackCTAClick("hero_second_perspective")}
              >
                I want a second perspective on my treatment plan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 - NORMALIZE THE EXPERIENCE */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              What most people experience in the first 30 days
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Shock, confusion, and emotional swings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>A flood of appointments, letters, reports, and emails</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Pressure to make treatment decisions before feeling ready</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Fear of "missing something important"</span>
              </li>
            </ul>
            <p className="text-lg font-semibold text-slate-800 mt-8">
              Nothing about this means you're doing it wrong.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - STEP 1: CAPTURE EVERYTHING */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Step 1: Capture everything before it gets lost
            </h2>
            <p className="text-slate-600 mb-6">
              In the first weeks, information arrives faster than anyone can process.
            </p>
            <p className="text-slate-600 mb-8">
              The most important thing you can do is capture it once, in one place.
            </p>

            {/* What to capture - Tappable checklist */}
            <h3 className="text-lg font-medium text-slate-700 mb-4">What to capture</h3>
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

            {/* How to do it */}
            <h3 className="text-lg font-medium text-slate-700 mb-4">How to do it (simple)</h3>
            <div className="space-y-6 mb-8">
              <div className="bg-slate-50 p-5 rounded-lg">
                <h4 className="font-medium text-slate-800 mb-2">Option A - Photos (most people start here)</h4>
                <p className="text-slate-600 text-sm">
                  Take photos or screenshots of everything on your phone.
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  Upload them into MyHealthCanvas - nothing needs to be sorted perfectly.
                </p>
              </div>
              <div className="bg-slate-50 p-5 rounded-lg">
                <h4 className="font-medium text-slate-800 mb-2">Option B - Forwarding</h4>
                <p className="text-slate-600 text-sm">
                  Email documents directly into your secure MyHealthCanvas folder.
                </p>
              </div>
            </div>
            <p className="text-slate-600 italic mb-6">
              The goal is capture first, organize later.
            </p>

            {/* Micro-CTA */}
            <Link href="/myhealthcanvas" onClick={() => trackCTAClick("step1_capture")}>
              <Button variant="outline" className="border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)]">
                Start capturing my documents
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4 - STEP 2: TURN CHAOS INTO CLARITY */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Step 2: See your situation clearly
            </h2>
            <p className="text-slate-600 mb-6">
              Once everything is in one place, you can begin to see:
            </p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>What has already happened</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>What decisions are coming</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>What questions you still need answered</span>
              </li>
            </ul>

            <p className="text-slate-600 mb-4">MyHealthCanvas helps you:</p>
            <ul className="space-y-2 text-slate-600 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Group documents by topic</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Track appointments and key dates</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Prepare questions for your medical team</span>
              </li>
            </ul>

            <p className="text-slate-600 mb-2">This is not about replacing your doctors.</p>
            <p className="text-slate-600 mb-8">It's about being able to follow the conversation.</p>

            <Link href="/myhealthcanvas" onClick={() => trackCTAClick("step2_prepare")}>
              <Button className="bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]">
                Help me prepare for my next appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 - STEP 3: SECOND PERSPECTIVE */}
      <section id="expert-support" className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Step 3: Get a second perspective - without undermining your care
            </h2>
            <p className="text-slate-600 mb-4">
              Many patients seek a second opinion not because they distrust their doctors, but because this is a pivotal decision - and it's hard to think clearly under stress.
            </p>
            <p className="text-slate-600 mb-6">A second perspective can help:</p>
            <ul className="space-y-2 text-slate-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Confirm the proposed treatment plan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Surface alternative approaches</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Clarify risks and trade-offs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Increase confidence in your decision</span>
              </li>
            </ul>

            {/* Easier than you think */}
            <h3 className="text-lg font-medium text-slate-700 mb-4">Easier than you think</h3>
            <p className="text-slate-800 font-semibold mb-4">
              This is often easier - and more accessible - than people expect.
            </p>
            <ul className="space-y-2 text-slate-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Many expert consultations are covered by insurance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Documents can be reviewed remotely</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Calls are typically focused and time-limited</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>You remain fully under the care of your existing medical team</span>
              </li>
            </ul>

            {/* How it works */}
            <h3 className="text-lg font-medium text-slate-700 mb-4">How it works</h3>
            <ol className="space-y-3 text-slate-600 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">1.</span>
                <span>Upload or email your documents</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">2.</span>
                <span>Share your proposed treatment plan</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">3.</span>
                <span>Have a focused remote consultation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[oklch(0.55_0.15_195)] font-medium">4.</span>
                <span>Take insights back to your medical team</span>
              </li>
            </ol>

            <Link href="/contact" onClick={() => trackCTAClick("expert_consultation")}>
              <Button variant="outline" className="border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)]">
                Explore expert consultation options
              </Button>
            </Link>
            <p className="text-sm text-slate-400 mt-3">
              Optional · Confidential · Designed to support - not replace - your care team
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6 - SELF-CARE */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Take care of yourself while decisions are forming
            </h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Take things one day at a time</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Accept help with meals, errands, or childcare</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Protect rest and nutrition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-slate-400">•</span>
                <span>Say no to non-essential commitments</span>
              </li>
            </ul>
            <p className="text-lg font-medium text-slate-700 mt-6">
              You don't need to solve everything this month.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FINAL CTA */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              You don't have to hold this all in your head
            </h2>
            <p className="text-slate-600">
              MyHealthCanvas exists to help patients and caregivers stay organized, informed, and in control - especially when things feel overwhelming.
            </p>
            <div className="pt-4">
              <Link href="/myhealthcanvas" onClick={() => trackCTAClick("final_cta")}>
                <Button size="lg" className="text-lg px-10 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                  Start MyHealthCanvas now
                </Button>
              </Link>
              <p className="text-sm text-slate-400 mt-4">
                Free to begin · Private · Built by patients
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50">
        <Link href="/myhealthcanvas" onClick={() => trackCTAClick("sticky_mobile_cta")} className="block">
          <Button className="w-full bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white py-6">
            Get organized today
          </Button>
        </Link>
      </div>

      {/* Bottom padding for sticky CTA on mobile */}
      <div className="h-20 md:hidden" />
    </div>
  );
}
