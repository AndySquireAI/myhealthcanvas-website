import { useEffect } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import ResourceRecommendations from "@/components/ResourceRecommendations";
import SaveForAppointment from "@/components/SaveForAppointment";

export default function PrepareForAppointment() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "appointment_workflow_page_view", {
        event_category: "engagement",
        event_label: "prepare_for_appointment",
      });
    }
  }, []);

  const steps = [
    {
      number: 1,
      title: "Review your symptoms",
      description: "Write down any symptoms you have noticed since your last appointment. Include when they started, how often they happen, and how severe they feel. Even small changes matter.",
      tips: ["Note timing: morning vs evening, after meals, after medication", "Rate severity on a simple 1-10 scale", "Include symptoms that have improved as well as new ones"],
      color: "oklch(0.55 0.15 195)",
    },
    {
      number: 2,
      title: "Review your medications",
      description: "List all current medications, including over-the-counter medicines, supplements and anything you have stopped or changed. Your oncologist needs the full picture.",
      tips: ["Include dosages and how often you take each one", "Note any side effects you think are related to specific medicines", "Mention anything you have stopped taking and why"],
      color: "oklch(0.50 0.12 260)",
    },
    {
      number: 3,
      title: "Prepare your questions",
      description: "Write down everything you want to ask. Put your most important questions first in case time runs short. No question is too small.",
      tips: ["Start with what is worrying you most", "Include questions about next steps and timelines", "Ask about anything you did not understand from last time"],
      color: "oklch(0.50 0.12 160)",
    },
    {
      number: 4,
      title: "Prioritise your concerns",
      description: "If you have many questions, mark the top three. Appointments can feel rushed. Knowing your priorities helps you use the time well.",
      tips: ["Circle or star your top three concerns", "Consider what would reduce your anxiety most", "Think about what decisions need to be made today"],
      color: "oklch(0.50 0.12 40)",
    },
    {
      number: 5,
      title: "Bring a companion or caregiver",
      description: "If possible, bring someone with you. A second pair of ears can catch information you might miss, especially when emotions are high.",
      tips: ["Brief them on your key questions beforehand", "Ask them to take notes during the appointment", "Discuss afterwards what you both heard"],
      color: "oklch(0.50 0.12 340)",
    },
    {
      number: 6,
      title: "Record next steps",
      description: "Before you leave, write down what happens next: follow-up appointments, tests, medication changes, symptoms to watch for, and who to call if something changes.",
      tips: ["Ask the nurse or doctor to repeat anything unclear", "Write down dates, names and phone numbers", "Note what to do if symptoms worsen before next visit"],
      color: "oklch(0.50 0.12 100)",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="How To Prepare For Your Oncology Appointment - Step by Step | MyHealthCanvas"
        description="A practical 6-step workflow to prepare for your next oncology appointment. Review symptoms, medications, questions and priorities. Bring a companion. Record next steps. Free guide from MyHealthCanvas."
        keywords="prepare for oncology appointment, cancer appointment preparation, what to bring to oncologist, how to prepare for chemo appointment, oncology visit preparation, cancer appointment checklist"
        canonicalPath="/prepare-for-your-oncology-appointment"
      />

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            Appointment Preparation Workflow
          </p>
          <h1 className="text-[30px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 leading-[1.2]">
            How to prepare for your next oncology appointment
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-600 leading-[1.7] font-light max-w-2xl mx-auto">
            A simple 6-step workflow that helps you arrive prepared, ask better questions, and leave with clarity about what happens next.
          </p>
        </div>
      </section>

      {/* Why preparation matters */}
      <section className="py-10 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 text-center">Why preparation matters</h2>
          <div className="space-y-4 text-[16px] text-gray-600 leading-[1.8]">
            <p>
              Research consistently shows that patients who prepare for oncology appointments report better understanding of their diagnosis, higher satisfaction with their care, and less anxiety after visits. Preparation does not need to be complicated. Even five minutes of writing down your top questions can make a meaningful difference.
            </p>
            <p>
              Many patients describe feeling overwhelmed during appointments — information comes fast, emotions run high, and time feels short. Having a written plan means you do not have to rely on memory alone. You can focus on listening and asking follow-up questions instead of trying to remember what you wanted to say.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Step Workflow */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-[24px] md:text-[30px] font-bold text-gray-900 text-center">Your 6-step preparation workflow</h2>

          <div className="space-y-6">
            {steps.map((step) => (
              <div key={step.number} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[16px] font-bold text-white shrink-0"
                    style={{ background: step.color }}
                  >
                    {step.number}
                  </div>
                  <h3 className="text-[19px] md:text-[21px] font-bold text-gray-800">{step.title}</h3>
                </div>
                <p className="text-[15px] text-gray-600 leading-[1.7] ml-16">{step.description}</p>
                <div className="ml-16 space-y-2">
                  {step.tips.map((tip, i) => (
                    <p key={i} className="text-[14px] text-gray-500 leading-[1.6] flex items-start gap-2">
                      <span className="text-[oklch(0.55_0.15_195)] mt-0.5 shrink-0">·</span>
                      {tip}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Ready to prepare?</h2>
          <p className="text-[16px] text-gray-600 leading-[1.7]">
            Use these tools to put your preparation into practice.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <Link href="/oncology-appointment-checklist">
              <div className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3 h-full">
                <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  Download Free Checklist
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">
                  21 printable questions to bring to your next appointment.
                </p>
                <p className="text-[13px] font-bold text-[oklch(0.55_0.15_195)]">Get the checklist →</p>
              </div>
            </Link>

            <Link href="/myhealthcanvas">
              <div className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3 h-full">
                <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  Explore MyHealthCanvas
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">
                  A fillable PDF companion to organise questions, symptoms, medicines and priorities.
                </p>
                <p className="text-[13px] font-bold text-[oklch(0.55_0.15_195)]">Learn more →</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Caregiver note */}
      <section className="py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <h3 className="text-[18px] font-bold text-gray-800">A note for caregivers</h3>
          <p className="text-[15px] text-gray-600 leading-[1.7]">
            If you are preparing on behalf of someone else, this workflow still applies. You might also find it helpful to prepare your own questions about practical care at home, medication management, and what to watch for between appointments.
          </p>
          <Link href="/caregiver-oncology-questions">
            <span className="text-[14px] font-bold text-[oklch(0.55_0.15_195)] hover:underline cursor-pointer">
              See caregiver-specific questions →
            </span>
          </Link>
        </div>
      </section>

      <SaveForAppointment pageTitle="How To Prepare For Your Oncology Appointment" />
      <ResourceRecommendations exclude={["/prepare-for-your-oncology-appointment"]} />
    </div>
  );
}
