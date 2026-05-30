import { useState, useEffect } from "react";
import SEO from "@/components/SEO";

export default function ClinicianFeedback() {
  const [specialty, setSpecialty] = useState("");
  const [country, setCountry] = useState("");
  const [benefits, setBenefits] = useState("");
  const [permission, setPermission] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        event_category: "evidence",
        event_label: "clinician_feedback",
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store in localStorage for evidence dashboard
    const response = {
      specialty,
      country,
      benefits,
      permission,
      type: "clinician_feedback",
      timestamp: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("mhc_feedback_responses") || "[]");
    existing.push(response);
    localStorage.setItem("mhc_feedback_responses", JSON.stringify(existing));

    // Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "clinician_feedback_submitted", {
        event_category: "evidence",
        event_label: "clinician_feedback",
        specialty,
        country,
      });
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
        <SEO
          title="Thank You For Your Feedback | MyHealthCanvas"
          description="Thank you for sharing your clinical perspective on patient preparation."
          canonicalPath="/clinician-feedback"
        />
        <section className="py-20 px-6 md:px-12 lg:px-24 flex-1 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: "oklch(0.95 0.03 195)" }}>
              <span className="text-[28px]" aria-hidden="true">🩺</span>
            </div>
            <h1 className="text-[28px] font-bold text-gray-900">Thank you for your feedback.</h1>
            <p className="text-[16px] text-gray-600 leading-[1.7]">
              Your clinical perspective helps us improve MyHealthCanvas and better support patient-clinician communication. We read every response.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Clinician Feedback - Patient Preparation in Oncology | MyHealthCanvas"
        description="Share your perspective on how patient preparation affects oncology appointments. Help us build better tools for patient-clinician communication."
        keywords="clinician feedback patient preparation, oncology appointment preparation clinician, patient communication oncology"
        canonicalPath="/clinician-feedback"
      />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-lg mx-auto space-y-8">
          <div className="text-center space-y-4">
            <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
              For Healthcare Professionals
            </p>
            <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900">
              What benefits do you see when patients arrive prepared?
            </h1>
            <p className="text-[16px] text-gray-600 leading-[1.7]">
              We are building evidence to understand how structured patient preparation affects oncology consultations. Your clinical perspective is invaluable.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Specialty */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-gray-700">Your specialty *</label>
              <input
                type="text"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                placeholder="e.g. Medical Oncology, Radiation Oncology, Oncology Nursing"
                className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.15_195)]/30 focus:border-[oklch(0.55_0.15_195)]"
                required
              />
            </div>

            {/* Country */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-gray-700">Country *</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="e.g. United Kingdom"
                className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.15_195)]/30 focus:border-[oklch(0.55_0.15_195)]"
                required
              />
            </div>

            {/* Benefits */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-gray-700">
                What benefits do you observe when patients arrive with structured preparation? *
              </label>
              <textarea
                value={benefits}
                onChange={(e) => setBenefits(e.target.value)}
                placeholder="For example: more focused consultations, better use of appointment time, patients asking more relevant questions, improved shared decision-making..."
                rows={5}
                className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.15_195)]/30 focus:border-[oklch(0.55_0.15_195)] resize-none"
                required
              />
            </div>

            {/* Permission */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="clinician-permission"
                checked={permission}
                onChange={(e) => setPermission(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 cursor-pointer"
              />
              <label htmlFor="clinician-permission" className="text-[14px] text-gray-600 leading-[1.5] cursor-pointer">
                May we use your feedback anonymously to support evidence building and help patients understand the value of preparation?
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!specialty || !country || !benefits}
              className="w-full py-3.5 text-[15px] font-semibold text-white rounded-lg transition-all hover:shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Submit Feedback
            </button>

            <p className="text-[13px] text-gray-400 text-center">
              Your feedback helps us improve MyHealthCanvas and support more patients and caregivers.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
