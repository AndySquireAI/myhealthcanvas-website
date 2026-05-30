import { useEffect } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import ResourceRecommendations from "@/components/ResourceRecommendations";
import SaveForAppointment from "@/components/SaveForAppointment";

export default function WhyPreparationMatters() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        event_category: "content",
        event_label: "why_preparation_matters",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Why Appointment Preparation Matters for Cancer Patients | MyHealthCanvas"
        description="Understanding why preparing for oncology appointments helps patients communicate better, remember more, and feel less overwhelmed. Learn about cognitive overload, diagnosis shock, and how structured preparation supports better cancer care conversations."
        keywords="why prepare for oncology appointment, cancer appointment preparation importance, cognitive overload cancer, diagnosis shock, patient communication oncology, caregiver burden cancer"
        canonicalPath="/why-appointment-preparation-matters"
      />

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            Understanding the Evidence
          </p>
          <h1 className="text-[30px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 leading-[1.2]">
            Why appointment preparation matters
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-600 leading-[1.7] font-light max-w-2xl mx-auto">
            Cancer patients who prepare for appointments report better understanding, higher satisfaction, and less anxiety. Here is why.
          </p>
        </div>
      </section>

      {/* Cognitive Overload */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Cognitive overload in cancer care</h2>
          <div className="space-y-4 text-[16px] text-gray-600 leading-[1.8]">
            <p>
              A cancer diagnosis introduces an extraordinary volume of new information: medical terminology, treatment options, medication schedules, appointment logistics, insurance paperwork, and emotional processing. This all happens simultaneously, often within days of receiving life-changing news.
            </p>
            <p>
              The human brain has limited working memory capacity. Under stress, that capacity decreases further. Patients in oncology settings frequently report that they cannot remember what was discussed during appointments, even minutes after leaving the room. This is not a failure of attention or intelligence. It is a predictable consequence of cognitive overload.
            </p>
            <p>
              Written preparation helps because it moves information from fragile working memory into a stable external format. When patients write down their questions, symptoms, and concerns before an appointment, they free up cognitive resources to listen, process, and respond during the conversation itself.
            </p>
          </div>
        </div>
      </section>

      {/* Diagnosis Shock */}
      <section className="py-14 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Diagnosis shock and information retention</h2>
          <div className="space-y-4 text-[16px] text-gray-600 leading-[1.8]">
            <p>
              The period immediately following a cancer diagnosis is often described as a state of shock. Patients report feeling numb, disconnected, or unable to process what they are being told. This is a normal psychological response to threatening news.
            </p>
            <p>
              During this period, information retention drops significantly. Patients may hear their oncologist explain treatment options but be unable to recall the details hours later. They may nod during conversations without truly absorbing the content. They may agree to plans they do not fully understand.
            </p>
            <p>
              Structured preparation tools help bridge this gap. By providing a framework for capturing information — even simple prompts like "write down your top three questions" — patients can participate more actively in their care even when emotional processing is consuming most of their cognitive bandwidth.
            </p>
          </div>
        </div>
      </section>

      {/* Forgetting Information */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Why patients forget important information</h2>
          <div className="space-y-4 text-[16px] text-gray-600 leading-[1.8]">
            <p>
              Research in health communication consistently shows that patients forget a substantial proportion of what they are told during medical consultations. Estimates vary, but studies suggest patients may forget 40-80% of medical information provided during appointments.
            </p>
            <p>
              Several factors contribute to this: the emotional weight of the conversation, unfamiliar medical terminology, the speed at which information is delivered, and the absence of written reinforcement. When patients are simultaneously processing fear, uncertainty, and complex medical concepts, memory encoding suffers.
            </p>
            <p>
              Having a written record — whether prepared before the appointment or captured during it — significantly improves recall. Patients who bring structured notes report feeling more confident that they have not missed anything important, and clinicians report that prepared patients use appointment time more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Caregiver Burden */}
      <section className="py-14 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Caregiver burden and the role of organisation</h2>
          <div className="space-y-4 text-[16px] text-gray-600 leading-[1.8]">
            <p>
              Caregivers — partners, family members, friends — often take on significant organisational responsibilities during cancer treatment. They coordinate appointments, manage medications, track symptoms, communicate with multiple healthcare providers, and support the patient emotionally. This is in addition to their own work, family, and personal needs.
            </p>
            <p>
              The administrative burden alone can be overwhelming. Information arrives from multiple sources in multiple formats: letters, emails, phone calls, patient portals, and verbal instructions. Without a central organising tool, important details get lost between appointments.
            </p>
            <p>
              Structured preparation tools reduce this burden by providing a single place to capture and organise the most important information. When caregivers and patients use the same framework, communication between them also improves. Both know what has been recorded, what questions remain, and what needs to happen next.
            </p>
          </div>
        </div>
      </section>

      {/* What This Means */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">What this means for patients</h2>
          <div className="space-y-4 text-[16px] text-gray-600 leading-[1.8]">
            <p>
              Preparation is not about being a "good patient" or impressing your oncologist. It is about giving yourself the best chance of understanding your care, asking the questions that matter to you, and leaving appointments with clarity about what happens next.
            </p>
            <p>
              Even five minutes of writing down your top concerns before an appointment can make a meaningful difference. The goal is not perfection. The goal is reducing the chance that you leave wishing you had said something.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-3 mt-6">
            <p className="text-[14px] font-bold text-gray-700">Important note</p>
            <p className="text-[14px] text-gray-500 leading-[1.6]">
              MyHealthCanvas helps with preparation, communication, and organisation. It does not provide medical advice, treatment recommendations, or clinical guidance. Your healthcare team makes care decisions. MyHealthCanvas helps you participate in those conversations more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-14 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Start preparing</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/questions">
              <div className="group cursor-pointer bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-2 h-full text-center">
                <p className="text-[15px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)]">Questions</p>
                <p className="text-[13px] text-gray-500">20+ curated questions for your oncologist</p>
              </div>
            </Link>
            <Link href="/oncology-appointment-checklist">
              <div className="group cursor-pointer bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-2 h-full text-center">
                <p className="text-[15px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)]">Checklist</p>
                <p className="text-[13px] text-gray-500">Free 21-question printable checklist</p>
              </div>
            </Link>
            <Link href="/myhealthcanvas">
              <div className="group cursor-pointer bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-2 h-full text-center">
                <p className="text-[15px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)]">MyHealthCanvas</p>
                <p className="text-[13px] text-gray-500">Fillable PDF appointment companion</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <SaveForAppointment pageTitle="Why Appointment Preparation Matters" />
      <ResourceRecommendations exclude={["/why-appointment-preparation-matters"]} />
    </div>
  );
}
