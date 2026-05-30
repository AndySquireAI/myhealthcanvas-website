import { useEffect } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import ResourceRecommendations from "@/components/ResourceRecommendations";
import SaveForAppointment from "@/components/SaveForAppointment";

export default function PatientOutcomes() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "outcomes_page_view", {
        event_category: "evidence",
        event_label: "patient_outcomes",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Patient Outcomes - How MyHealthCanvas Helps | MyHealthCanvas"
        description="MyHealthCanvas helps cancer patients and caregivers prepare for appointments, communicate more clearly, and feel less overwhelmed. See how structured preparation supports better conversations with your care team."
        keywords="cancer patient preparation outcomes, oncology appointment preparation benefits, patient communication support, caregiver support outcomes, MyHealthCanvas results"
        canonicalPath="/patient-outcomes"
      />

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            Patient Outcomes
          </p>
          <h1 className="text-[30px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 leading-[1.2]">
            Better prepared. Better conversations. Less overwhelm.
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-600 leading-[1.7] font-light max-w-2xl mx-auto">
            MyHealthCanvas is designed to improve preparation, communication and confidence for cancer patients and caregivers. Here is what we are trying to help with.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-[24px] md:text-[30px] font-bold text-gray-900 text-center">What patients and caregivers tell us</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Before */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold text-white" style={{ background: "oklch(0.55 0.15 195)" }}>1</div>
              <h3 className="text-[17px] font-bold text-gray-800">Before Appointment</h3>
              <p className="text-[14px] text-gray-500 mb-2">Patients often:</p>
              <ul className="text-[14px] text-gray-600 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Forget questions they wanted to ask</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Forget symptoms they wanted to report</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Forget medication changes to mention</li>
              </ul>
            </div>

            {/* During */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold text-white" style={{ background: "oklch(0.50 0.12 260)" }}>2</div>
              <h3 className="text-[17px] font-bold text-gray-800">During Appointment</h3>
              <p className="text-[14px] text-gray-500 mb-2">Patients often:</p>
              <ul className="text-[14px] text-gray-600 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Feel rushed by time constraints</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Feel overwhelmed by information</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Forget what was discussed afterwards</li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold text-white" style={{ background: "oklch(0.50 0.12 160)" }}>3</div>
              <h3 className="text-[17px] font-bold text-gray-800">After Appointment</h3>
              <p className="text-[14px] text-gray-500 mb-2">Patients often:</p>
              <ul className="text-[14px] text-gray-600 space-y-2">
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Forget recommendations given</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Lose important paperwork</li>
                <li className="flex items-start gap-2"><span className="text-red-400 mt-0.5">-</span> Miss follow-up questions until too late</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How MyHealthCanvas Helps */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-[24px] md:text-[30px] font-bold text-gray-900">How MyHealthCanvas helps</h2>
            <p className="text-[16px] text-gray-500 leading-[1.6]">
              MyHealthCanvas organises everything into one structured document that patients and caregivers can fill in, update, and bring to every appointment.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-bold text-gray-800">Questions</p>
              <p className="text-[13px] text-gray-500">Write them down as they come to mind. Never forget what you wanted to ask.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-bold text-gray-800">Symptoms</p>
              <p className="text-[13px] text-gray-500">Track changes between appointments. Report accurately to your team.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-bold text-gray-800">Medications</p>
              <p className="text-[13px] text-gray-500">Keep a current list including dosages, side effects and changes.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-bold text-gray-800">Priorities</p>
              <p className="text-[13px] text-gray-500">Know what matters most to you before the appointment starts.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-bold text-gray-800">Future Planning</p>
              <p className="text-[13px] text-gray-500">When ready, record wishes, directives and power of attorney details.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-bold text-gray-800">Communication</p>
              <p className="text-[13px] text-gray-500">Give clinicians a clear, structured summary they can scan quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome-Oriented Testimonials */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 text-center">What users report</h2>

          <div className="space-y-5">
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
              <p className="text-[12px] uppercase tracking-wider font-bold" style={{ color: "oklch(0.55 0.15 195)" }}>Outcome: Better Question Preparation</p>
              <p className="text-[15px] text-gray-600 leading-[1.7] italic">
                "After diagnosis, it is an avalanche of emails, letters, phone calls, SMS and in-person appointments. MyHC helps me organise my key information - especially the questions for my oncologist - so I never forget anything."
              </p>
              <p className="text-[13px] text-gray-400">Cancer patient, 58 - Switzerland</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
              <p className="text-[12px] uppercase tracking-wider font-bold" style={{ color: "oklch(0.55 0.15 195)" }}>Outcome: Reduced Caregiver Stress</p>
              <p className="text-[15px] text-gray-600 leading-[1.7] italic">
                "My wife was in pain before treatment started. I had to take care of a mountain of admin and paperwork, which added stress. MyHC helped us think through our priorities and start to plan for a better future. Tracking progress together reduced stress for both of us."
              </p>
              <p className="text-[13px] text-gray-400">Caregiver, 64 - UK</p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3">
              <p className="text-[12px] uppercase tracking-wider font-bold" style={{ color: "oklch(0.55 0.15 195)" }}>Outcome: Improved Communication</p>
              <p className="text-[15px] text-gray-600 leading-[1.7] italic">
                "Some of my patients bring their MyHealthCanvas to appointments so they don't forget questions. Having a standard template is much easier for me to scan than fragmented records."
              </p>
              <p className="text-[13px] text-gray-400">Oncologist, 38 - Switzerland</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Help us improve</h2>
          <p className="text-[16px] text-gray-600 leading-[1.7]">
            If you have used MyHealthCanvas, we would love to hear about your experience. Your feedback helps us improve and support more patients and caregivers.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/share-your-experience">
              <button className="px-8 py-4 text-white text-[15px] font-semibold rounded-xl transition-all hover:shadow-md cursor-pointer" style={{ background: "oklch(0.55 0.15 195)" }}>
                Share Your Experience
              </button>
            </Link>
            <Link href="/clinician-feedback">
              <button className="px-8 py-4 text-[15px] font-semibold rounded-xl border-2 transition-all hover:shadow-md cursor-pointer" style={{ color: "oklch(0.55 0.15 195)", borderColor: "oklch(0.55 0.15 195)" }}>
                Clinician Feedback
              </button>
            </Link>
          </div>
        </div>
      </section>

      <SaveForAppointment pageTitle="Patient Outcomes - MyHealthCanvas" />
      <ResourceRecommendations exclude={["/patient-outcomes"]} />
    </div>
  );
}
