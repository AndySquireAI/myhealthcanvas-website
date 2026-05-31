import { useState, useEffect } from "react";

interface MicroSurveyProps {
  /** Context where the survey appears */
  context: "checklist_download" | "product_purchase";
}

export default function MicroSurvey({ context }: MicroSurveyProps) {
  const [step, setStep] = useState(0); // 0 = not started, 1-3 = questions, 4 = done
  const [preparedness, setPreparedness] = useState<number | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [helpArea, setHelpArea] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  // Check if already completed
  useEffect(() => {
    const completed = localStorage.getItem(`mhc_survey_${context}`);
    if (completed) {
      setDismissed(true);
    }
  }, [context]);

  const trackEvent = (event: string, data?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", event, {
        event_category: "survey",
        event_label: context,
        ...data,
      });
    }
  };

  const startSurvey = () => {
    setStep(1);
    trackEvent("survey_started");
  };

  const submitAnswer = (questionNum: number) => {
    if (questionNum === 1 && preparedness) {
      trackEvent("survey_q1_preparedness", { value: preparedness });
      setStep(2);
    } else if (questionNum === 2 && role) {
      trackEvent("survey_q2_role", { role });
      setStep(3);
    } else if (questionNum === 3 && helpArea) {
      trackEvent("survey_completed", {
        preparedness,
        role,
        help_area: helpArea,
      });
      // Store in localStorage
      const response = {
        preparedness,
        role,
        helpArea,
        context,
        timestamp: new Date().toISOString(),
      };
      const existing = JSON.parse(localStorage.getItem("mhc_survey_responses") || "[]");
      existing.push(response);
      localStorage.setItem("mhc_survey_responses", JSON.stringify(existing));
      localStorage.setItem(`mhc_survey_${context}`, "true");
      setStep(4);
    }
  };

  if (dismissed) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 max-w-md mx-auto my-6">
      {step === 0 && (
        <div className="text-center space-y-3">
          <p className="text-[15px] font-semibold text-gray-800">Quick question (30 seconds)</p>
          <p className="text-[13px] text-gray-500 leading-[1.6]">
            Your feedback helps us improve MyHealthCanvas and support more patients and caregivers.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={startSurvey}
              className="px-5 py-2.5 text-[14px] font-medium text-white rounded-lg transition-all hover:shadow-md cursor-pointer"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Sure, happy to help
            </button>
            <button
              onClick={() => setDismissed(true)}
              className="px-5 py-2.5 text-[14px] font-medium text-gray-500 rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              Not now
            </button>
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <p className="text-[15px] font-semibold text-gray-800">How prepared do you feel for your next appointment?</p>
          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                onClick={() => setPreparedness(n)}
                className={`w-11 h-11 rounded-full text-[15px] font-bold transition-all cursor-pointer ${
                  preparedness === n
                    ? "text-white shadow-md"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
                style={preparedness === n ? { background: "oklch(0.55 0.15 195)" } : {}}
              >
                {n}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-[12px] text-gray-400 px-1">
            <span>Not prepared</span>
            <span>Very prepared</span>
          </div>
          {preparedness && (
            <button
              onClick={() => submitAnswer(1)}
              className="w-full py-2.5 text-[14px] font-medium text-white rounded-lg cursor-pointer"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Next
            </button>
          )}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <p className="text-[15px] font-semibold text-gray-800">What is your role?</p>
          <div className="grid grid-cols-2 gap-2">
            {["Patient", "Caregiver", "Clinician", "Other"].map((r) => (
              <button
                key={r}
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
          {role && (
            <button
              onClick={() => submitAnswer(2)}
              className="w-full py-2.5 text-[14px] font-medium text-white rounded-lg cursor-pointer"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Next
            </button>
          )}
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <p className="text-[15px] font-semibold text-gray-800">What would help you most?</p>
          <div className="space-y-2">
            {["Better Question Preparation", "Clearer Symptom Tracking", "Reduced Caregiver Admin Burden", "Improved Appointment Communication", "Greater Sense of Control", "Future Planning When Ready"].map((area) => (
              <button
                key={area}
                onClick={() => setHelpArea(area)}
                className={`w-full py-2.5 px-4 text-[14px] font-medium rounded-lg text-left transition-all cursor-pointer ${
                  helpArea === area
                    ? "text-white shadow-md"
                    : "text-gray-600 bg-gray-100 hover:bg-gray-200"
                }`}
                style={helpArea === area ? { background: "oklch(0.55 0.15 195)" } : {}}
              >
                {area}
              </button>
            ))}
          </div>
          {helpArea && (
            <button
              onClick={() => submitAnswer(3)}
              className="w-full py-2.5 text-[14px] font-medium text-white rounded-lg cursor-pointer"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Submit
            </button>
          )}
        </div>
      )}

      {step === 4 && (
        <div className="text-center space-y-3">
          <p className="text-[18px] font-bold text-gray-800">Thank you</p>
          <p className="text-[14px] text-gray-500 leading-[1.6]">
            Your feedback helps us improve MyHealthCanvas and support more patients and caregivers.
          </p>
        </div>
      )}
    </div>
  );
}
