import { useState, useEffect } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function OncologyChecklist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Analytics: page view
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "checklist_page_view", {
        event_category: "funnel",
        event_label: "oncology_checklist_landing",
      });
    }
  }, []);

  const handleDownload = () => {
    // Trigger download
    const link = document.createElement("a");
    link.href = "/pdfs/21-questions-oncology-checklist.pdf";
    link.download = "21-Questions-Oncology-Checklist.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Analytics: download
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "checklist_download", {
        event_category: "funnel",
        event_label: "pdf_downloaded",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track signup attempt if email provided
    if (email.trim() && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "checklist_signup_attempt", {
        event_category: "funnel",
        event_label: "email_provided",
      });
    }

    // Download the PDF
    handleDownload();
    setSubmitted(true);
  };

  if (submitted) {
    return <ChecklistThankYou />;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="21 Questions To Ask Your Oncologist - Free Checklist | MyHealthCanvas"
        description="Download a free printable checklist of 21 essential questions to ask at your next oncology appointment. Covers diagnosis, treatment, daily life and next steps. Designed by patients and clinicians."
        keywords="questions to ask oncologist, oncology appointment checklist, cancer questions checklist, what to ask cancer doctor, oncology appointment preparation, cancer diagnosis questions, treatment questions cancer"
        canonicalPath="/oncology-appointment-checklist"
      />

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            Free Printable Checklist
          </p>
          <h1 className="text-[30px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 leading-[1.2]">
            Never leave an oncology appointment wishing you had asked something important.
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-600 leading-[1.7] font-light">
            A free downloadable checklist designed by patients, caregivers and clinicians. 21 essential questions across diagnosis, treatment, daily life and next steps.
          </p>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-10 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 text-center mb-8">
            What's in the checklist
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
              <h3 className="text-[16px] font-bold text-gray-800">Understanding My Diagnosis</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">
                What type of cancer, what stage, has it spread, and what it means for you right now.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
              <h3 className="text-[16px] font-bold text-gray-800">Understanding My Treatment</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">
                Options, recommendations, goals of treatment, side effects and clinical trials.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
              <h3 className="text-[16px] font-bold text-gray-800">Daily Life During Treatment</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">
                Working, symptoms to report, things to avoid, and who to call in an emergency.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
              <h3 className="text-[16px] font-bold text-gray-800">Preparing For Next Appointment</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">
                What to track, what to bring, and who else should be in the room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section — honest copy */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-md mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900">
            Download the free checklist
          </h2>
          <p className="text-[15px] text-gray-600 leading-[1.6]">
            Enter your email if you would like future patient-support resources. The checklist will download immediately.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address (optional)"
              className="w-full px-5 py-4 rounded-xl border border-gray-200 text-[16px] focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.15_195)]/30 focus:border-[oklch(0.55_0.15_195)]"
            />
            <button
              type="submit"
              className="w-full px-6 py-4 text-white text-[16px] font-semibold rounded-xl transition-all hover:shadow-lg"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Download Checklist
            </button>
          </form>

          <p className="text-[13px] text-gray-400">
            Email optional — download works either way. Free. No spam.
          </p>
        </div>
      </section>

      {/* MyHealthCanvas bridge */}
      <section className="py-12 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-[15px] text-gray-600 leading-[1.7]">
            This checklist is a free starter resource from <strong>MyHealthCanvas</strong>, a patient-designed appointment companion that helps you organise questions, symptoms, medicines and priorities before oncology appointments.
          </p>
          <Link href="/myhealthcanvas">
            <span className="text-[15px] font-bold text-[oklch(0.55_0.15_195)] hover:underline cursor-pointer">
              Explore MyHealthCanvas →
            </span>
          </Link>
        </div>
      </section>

      {/* Trust footer */}
      <section className="py-10 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-[13px] text-gray-500">
            <span>Designed by a 2x cancer survivor</span>
            <span>·</span>
            <span>Private by design</span>
            <span>·</span>
            <span>Never replaces your doctors</span>
          </div>
        </div>
      </section>
    </div>
  );
}

/* Thank You / Confirmation Component */
function ChecklistThankYou() {
  // Track resource clicks
  const trackResourceClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "resource_click", {
        event_category: "funnel",
        event_label: label,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Your checklist has downloaded | MyHealthCanvas"
        description="Thank you for downloading the oncology appointment checklist. Explore more resources for cancer patients and caregivers."
        canonicalPath="/oncology-appointment-checklist"
      />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: "oklch(0.95 0.03 195)" }}>
            <span className="text-[28px]" aria-hidden="true">✓</span>
          </div>
          <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900">
            Your checklist has downloaded.
          </h1>
          <p className="text-[17px] text-gray-600 leading-[1.7]">
            If the download did not start, <a href="/pdfs/21-questions-oncology-checklist.pdf" download className="text-[oklch(0.55_0.15_195)] underline">click here to download it</a>.
          </p>
        </div>
      </section>

      {/* MyHealthCanvas bridge */}
      <section className="py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <p className="text-[15px] text-gray-600 leading-[1.7]">
            This checklist is a free starter resource from <strong>MyHealthCanvas</strong>, a patient-designed appointment companion that helps you organise questions, symptoms, medicines and priorities before oncology appointments.
          </p>
          <Link href="/myhealthcanvas" onClick={() => trackResourceClick("/myhealthcanvas")}>
            <span className="text-[15px] font-bold text-[oklch(0.55_0.15_195)] hover:underline cursor-pointer">
              Explore MyHealthCanvas →
            </span>
          </Link>
        </div>
      </section>

      {/* Recommended next resources */}
      <section className="py-12 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center">
            <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900">
              You might also find these helpful
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/questions" onClick={() => trackResourceClick("/questions")}>
              <div className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3 h-full">
                <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  Questions for Your Oncologist
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">
                  20+ curated questions organised by stage of your cancer journey.
                </p>
                <p className="text-[13px] font-bold text-[oklch(0.55_0.15_195)]">Read more →</p>
              </div>
            </Link>

            <Link href="/first-30-days-after-diagnosis" onClick={() => trackResourceClick("/first-30-days-after-diagnosis")}>
              <div className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3 h-full">
                <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  First 30 Days After Diagnosis
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">
                  A week-by-week guide to navigating the first month after a cancer diagnosis.
                </p>
                <p className="text-[13px] font-bold text-[oklch(0.55_0.15_195)]">Read more →</p>
              </div>
            </Link>

            <Link href="/myhealthcanvas" onClick={() => trackResourceClick("/myhealthcanvas")}>
              <div className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3 h-full">
                <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  MyHealthCanvas
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">
                  A printable appointment companion to organise your questions, symptoms and priorities.
                </p>
                <p className="text-[13px] font-bold text-[oklch(0.55_0.15_195)]">Learn more →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
