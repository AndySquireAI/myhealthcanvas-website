import { useState, useEffect } from "react";
import SEO from "@/components/SEO";

export default function ShareExperience() {
  const [role, setRole] = useState("");
  const [country, setCountry] = useState("");
  const [comment, setComment] = useState("");
  const [permission, setPermission] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        event_category: "evidence",
        event_label: "share_experience",
      });
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Store in localStorage for evidence dashboard
    const response = {
      role,
      country,
      comment,
      permission,
      type: "patient_feedback",
      timestamp: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("mhc_feedback_responses") || "[]");
    existing.push(response);
    localStorage.setItem("mhc_feedback_responses", JSON.stringify(existing));

    // Analytics
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "feedback_submitted", {
        event_category: "evidence",
        event_label: "patient_feedback",
        role,
        country,
      });
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
        <SEO
          title="Thank You For Sharing | MyHealthCanvas"
          description="Thank you for sharing your experience with MyHealthCanvas."
          canonicalPath="/share-your-experience"
        />
        <section className="py-20 px-6 md:px-12 lg:px-24 flex-1 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: "oklch(0.95 0.03 195)" }}>
              <span className="text-[28px]" aria-hidden="true">💙</span>
            </div>
            <h1 className="text-[28px] font-bold text-gray-900">Thank you for sharing.</h1>
            <p className="text-[16px] text-gray-600 leading-[1.7]">
              Your feedback helps us improve MyHealthCanvas and support more patients and caregivers. We read every response.
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Share Your Experience | MyHealthCanvas"
        description="Has MyHealthCanvas helped you prepare for oncology appointments? Share your experience to help us improve and support more patients and caregivers."
        keywords="MyHealthCanvas feedback, patient experience, cancer appointment preparation feedback"
        canonicalPath="/share-your-experience"
      />

      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-lg mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900">
              Has MyHealthCanvas helped you?
            </h1>
            <p className="text-[16px] text-gray-600 leading-[1.7]">
              If you have used MyHealthCanvas or the free checklist, we would love to hear about your experience. Your feedback helps us improve and support more patients and caregivers.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Role */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-gray-700">What is your role? *</label>
              <div className="grid grid-cols-2 gap-2">
                {["Patient", "Caregiver", "Clinician", "Other"].map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`py-2.5 px-4 text-[14px] font-medium rounded-lg transition-all cursor-pointer ${
                      role === r
                        ? "text-white shadow-md"
                        : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                    }`}
                    style={role === r ? { background: "oklch(0.55 0.15 195)" } : {}}
                  >
                    {r}
                  </button>
                ))}
              </div>
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

            {/* Privacy notice */}
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-[12px] text-gray-500 leading-[1.5]">
                Please do not include medical details you would not want reviewed by the MyHealthCanvas team.
              </p>
            </div>

            {/* Comment */}
            <div className="space-y-2">
              <label className="text-[14px] font-semibold text-gray-700">Your experience (optional)</label>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="How has MyHealthCanvas or the checklist helped you? What could be better?"
                rows={4}
                className="w-full px-4 py-3 text-[15px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.15_195)]/30 focus:border-[oklch(0.55_0.15_195)] resize-none"
              />
            </div>

            {/* Permission */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="permission"
                checked={permission}
                onChange={(e) => setPermission(e.target.checked)}
                className="mt-1 w-4 h-4 rounded border-gray-300 cursor-pointer"
              />
              <label htmlFor="permission" className="text-[14px] text-gray-600 leading-[1.5] cursor-pointer">
                May we use your feedback anonymously to help other patients and caregivers? (We will never share identifying details.)
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={!role || !country}
              className="w-full py-3.5 text-[15px] font-semibold text-white rounded-lg transition-all hover:shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Share My Experience
            </button>

            <p className="text-[13px] text-gray-400 text-center">
              Your feedback helps us improve MyHealthCanvas and support more patients and caregivers.
            </p>
            <p className="text-[12px] text-gray-300 text-center italic">
              Prototype note: this response is stored locally only and will not reach the MyHealthCanvas team yet.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
