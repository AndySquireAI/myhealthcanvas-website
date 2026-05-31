import { Link } from "wouter";
import SEO from "@/components/SEO";
import OncologyFAQ from "@/components/OncologyFAQ";
import ResourceRecommendations from "@/components/ResourceRecommendations";
import SaveForAppointment from "@/components/SaveForAppointment";
import { useEffect } from "react";

const topicCards = [
  {
    path: "/questions-after-cancer-diagnosis",
    title: "Newly Diagnosed",
    subtitle: "Questions after diagnosis",
    description:
      "You have just received a cancer diagnosis. These are the first questions that matter — about your type of cancer, what stage it is, and what happens next.",
    color: "oklch(0.55 0.15 195)",
  },
  {
    path: "/questions-before-chemotherapy",
    title: "Before Chemotherapy",
    subtitle: "Questions before chemo starts",
    description:
      "Chemotherapy can feel overwhelming before it begins. These questions help you understand your treatment plan, side effects, and how to prepare practically.",
    color: "oklch(0.50 0.12 260)",
  },
  {
    path: "/questions-before-immunotherapy",
    title: "Before Immunotherapy",
    subtitle: "Questions about immunotherapy",
    description:
      "Immunotherapy works differently from chemotherapy. These questions help you understand how it works, what to expect, and what to watch for.",
    color: "oklch(0.50 0.12 160)",
  },
  {
    path: "/questions-about-clinical-trials",
    title: "Clinical Trials",
    subtitle: "Questions about clinical trials",
    description:
      "Clinical trials can offer access to new treatments. These questions help you evaluate whether a trial is right for you and what participation involves.",
    color: "oklch(0.50 0.12 40)",
  },
  {
    path: "/questions",
    title: "Managing Side Effects",
    subtitle: "Questions about symptoms and treatment effects",
    description:
      "Side effects can affect your daily life during treatment. These questions help you understand what to expect, what to report, and how to manage symptoms.",
    color: "oklch(0.50 0.12 340)",
  },
  {
    path: "/caregiver-oncology-questions",
    title: "Caregivers",
    subtitle: "Questions caregivers should ask",
    description:
      "Caregivers carry a unique burden. These questions help you support your loved one, communicate with the care team, and look after yourself.",
    color: "oklch(0.50 0.12 100)",
  },
];

export default function OncologyQuestions() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        event_category: "authority",
        event_label: "oncology_questions_hub",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Questions For Your Oncologist - Organised by Stage | MyHealthCanvas"
        description="Browse curated oncology questions organised by stage: newly diagnosed, before chemotherapy, before immunotherapy, clinical trials, managing side effects, and caregiver questions. Free, patient-first resources."
        keywords="questions for oncologist, oncology appointment questions, what to ask cancer doctor, cancer questions by stage, chemotherapy questions, immunotherapy questions, clinical trial questions, caregiver cancer questions"
        canonicalPath="/oncology-questions"
      />

      {/* Hero */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            Oncology Question Library
          </p>
          <h1 className="text-[30px] md:text-[42px] lg:text-[48px] font-bold text-gray-900 leading-[1.2]">
            Questions For Your Oncologist
          </h1>
          <p className="text-[18px] md:text-[20px] text-gray-600 leading-[1.7] font-light max-w-2xl mx-auto">
            Whether you are newly diagnosed, starting treatment, or reviewing results, asking the right questions can improve understanding, confidence and communication.
          </p>
        </div>
      </section>

      {/* Topic Cards */}
      <section className="py-10 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topicCards.map((card) => (
              <Link key={card.path} href={card.path}>
                <div className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all space-y-3 h-full">
                  <div
                    className="w-2 h-8 rounded-full"
                    style={{ backgroundColor: card.color }}
                  />
                  <h3 className="text-[19px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[14px] font-medium text-gray-500">{card.subtitle}</p>
                  <p className="text-[14px] text-gray-500 leading-[1.6]">{card.description}</p>
                  <p className="text-[13px] font-bold text-[oklch(0.55_0.15_195)]">
                    Read questions →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist CTA */}
      <section className="py-14 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">
            Want a printable version?
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7]">
            Download our free checklist of 21 essential questions to bring to your next oncology appointment.
          </p>
          <Link href="/oncology-appointment-checklist">
            <button
              className="px-8 py-4 text-white text-[15px] font-semibold rounded-xl transition-all hover:shadow-lg cursor-pointer"
              style={{ background: "oklch(0.55 0.15 195)" }}
            >
              Download Free Checklist
            </button>
          </Link>
        </div>
      </section>

      <OncologyFAQ />
      <SaveForAppointment pageTitle="Oncology Questions" />
      <ResourceRecommendations exclude={["/oncology-questions"]} />
    </div>
  );
}
