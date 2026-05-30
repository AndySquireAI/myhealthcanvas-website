import { useEffect } from "react";

export default function PatientStories() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "patient_story_view", {
        event_category: "engagement",
        event_label: "patient_stories_section",
      });
    }
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h2 className="text-[24px] md:text-[30px] font-bold text-gray-900">How people use MyHealthCanvas</h2>
          <p className="text-[16px] text-gray-500 leading-[1.6]">Real examples from patients, caregivers and clinicians.</p>
        </div>

        <div className="space-y-6">
          {/* Patient story */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[14px]" style={{ backgroundColor: "oklch(0.95 0.03 195)" }}>
                <span aria-hidden="true">💙</span>
              </div>
              <p className="text-[14px] font-bold text-gray-800">Newly Diagnosed Patient</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 ml-11">
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-gray-400 font-bold">Problem</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  After diagnosis, overwhelmed by information from multiple sources. Forgot important questions at appointments. Left feeling unprepared and anxious.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-[oklch(0.55_0.15_195)] font-bold">How they use MyHealthCanvas</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  Writes down questions as they come to mind between appointments. Reviews symptoms weekly. Brings the completed PDF to every oncology visit on their phone.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-gray-400 font-bold">Outcome</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  Feels more confident and prepared. Never forgets key questions. Oncologist appreciates the structured information and can focus on what matters most.
                </p>
              </div>
            </div>
          </div>

          {/* Caregiver story */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[14px]" style={{ backgroundColor: "oklch(0.95 0.03 300)" }}>
                <span aria-hidden="true">🤝</span>
              </div>
              <p className="text-[14px] font-bold text-gray-800">Caregiver</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 ml-11">
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-gray-400 font-bold">Problem</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  Managing medications, appointments, and symptoms for a loved one while also working. Information scattered across notebooks, phone notes, and memory.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-[oklch(0.55_0.15_195)] font-bold">How they use MyHealthCanvas</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  Uses the Complete version to track medications, symptoms, and priorities in one place. Fills it in together with their partner before each appointment. Shares with the care team.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-gray-400 font-bold">Outcome</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  Reduced stress from trying to remember everything. Better communication with the healthcare team. Both patient and caregiver feel more in control.
                </p>
              </div>
            </div>
          </div>

          {/* Clinician story */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-[14px]" style={{ backgroundColor: "oklch(0.95 0.05 195)" }}>
                <span aria-hidden="true">🩺</span>
              </div>
              <p className="text-[14px] font-bold text-gray-800">Oncologist</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 ml-11">
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-gray-400 font-bold">Problem</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  Patients arrive with fragmented information — some on paper, some on phones, some forgotten entirely. Difficult to get a complete picture in a short appointment.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-[oklch(0.55_0.15_195)] font-bold">How patients arrive with MyHealthCanvas</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  Patients bring a single structured document with symptoms, medications, questions, and priorities clearly organised. Easy to scan in under a minute.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-[12px] uppercase tracking-wider text-gray-400 font-bold">Why it helps</p>
                <p className="text-[14px] text-gray-600 leading-[1.6]">
                  More focused appointments. Less time gathering information, more time discussing care. Patients feel heard. Clinicians can address what matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
