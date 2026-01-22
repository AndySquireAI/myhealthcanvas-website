import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowLeft, Folder } from "lucide-react";
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

  const folderSuggestions = [
    { name: "Disease Information", description: "Diagnosis details, condition info" },
    { name: "Treatment Information", description: "Treatment plans, protocols" },
    { name: "Complementary Treatments", description: "Alternative therapies, supplements" },
    { name: "Nutrition", description: "Diet plans, nutritional advice" },
    { name: "Blood Tests", description: "Lab results, blood work" },
    { name: "PET/CT/MRI", description: "Imaging scans and reports" },
    { name: "Prescriptions", description: "Medication lists, dosages" },
    { name: "Physician Visits", description: "Consultation summaries, notes" },
    { name: "Insurance", description: "Coverage, claims, approvals" },
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
              <a href="#organize-tips">
                <Button size="lg" className="text-lg px-8 py-6 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                  Show me how to get organized
                </Button>
              </a>
              <p className="text-sm text-slate-400 mt-4">
                Practical tips · Your data stays with you · No uploads required
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

      {/* SECTION 3 - STEP 1: CAPTURE EVERYTHING (LOCAL STORAGE ADVICE) */}
      <section id="organize-tips" className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Step 1 — Capture what you already have
            </h2>
            <p className="text-slate-600 mb-4">
              <strong>Take photos or screenshots</strong> of your documents so nothing gets lost. Store them on your phone, computer, or cloud storage like Google Drive.
            </p>
            <p className="text-sm text-slate-500 italic mb-8">
              This is just helpful advice — your documents stay with you. We don't collect or store any patient data.
            </p>

            {/* Tappable checklist */}
            <p className="text-sm font-medium text-slate-700 mb-3">Documents to capture:</p>
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

            {/* No upload button - just advice */}
          </div>
        </div>
      </section>

      {/* SECTION 4 - FOLDER ORGANIZATION SUGGESTIONS */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Step 2 — Organize into folders
            </h2>
            <p className="text-slate-600 mb-4">
              Create folders on your phone, computer, or Google Drive to keep everything organized. Here are some suggested folder names:
            </p>
            <p className="text-sm text-slate-500 italic mb-6">
              Store at your own risk — we recommend backing up to multiple locations.
            </p>

            {/* Folder grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {folderSuggestions.map((folder) => (
                <div
                  key={folder.name}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:border-[oklch(0.55_0.15_195)]/50 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Folder className="h-5 w-5 text-[oklch(0.55_0.15_195)]" />
                    <span className="font-medium text-slate-800 text-sm">{folder.name}</span>
                  </div>
                  <p className="text-xs text-slate-500">{folder.description}</p>
                </div>
              ))}
            </div>
            
            {/* No CTA here - just guidance */}
          </div>
        </div>
      </section>

      {/* SECTION 5 - PRACTICAL DAILY LIFE STEPS (NO CTA) */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Step 3 — Reduce overwhelm in daily life
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

      {/* SECTION 6 - UNDERSTAND YOUR MEDICAL TIMELINE */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              Step 4 — Understand what comes next
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
                <span>Keep your organized folders handy for appointments</span>
              </li>
            </ul>

            {/* No CTA - guidance only */}
          </div>
        </div>
      </section>

      {/* SECTION 7 - SECOND PERSPECTIVE */}
      <section className="py-12">
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
                <span>Compile your documents from your folders</span>
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
              Learn more about second opinions
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 8 - E-LIBRARY (NO PRIMARY CTA) */}
      <section className="py-12 bg-slate-50">
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

      {/* SECTION 9 - PRINTABLE HEALTH PLAN TEMPLATE */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Want a printable health plan template?
            </h2>
            <p className="text-slate-600">
              Our PDF templates help you organize your medical information for appointments and caregivers.
            </p>
            <Link href="/myhealthcanvas">
              <Button size="lg" className="bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                View printable templates
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 md:hidden z-50">
        <a href="#organize-tips" className="block">
          <Button className="w-full bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white py-6">
            Show me how to organize
          </Button>
        </a>
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
                <span>Gather your medical records, test results, and imaging from your folders</span>
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
