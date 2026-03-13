import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Question data organized by journey card
const journeyCards = [
  {
    id: "breathe",
    week: "Week 1",
    title: "Breathe",
    subtitle: "I've just been diagnosed",
    description: "Start here. These are the first questions that matter — about your diagnosis and what it means.",
    color: "oklch(0.55 0.15 195)", // Teal
    bgHover: "#E1D7EB", // Lilac
    questions: [
      { text: "What type of cancer do I have?", detail: "Where did it start? Is it a primary or secondary cancer?", bold: true },
      { text: "What is the stage and grade of my cancer?", detail: "What does this mean for me?", bold: true },
      { text: "Has the cancer spread to other parts of my body?", bold: true },
      { text: "Is my cancer aggressive?", detail: "Will it grow or spread quickly?", bold: true },
      { text: "Can you explain my pathology report in plain language?", bold: false },
      { text: "Will you be able to find out what caused my cancer?", bold: false },
    ],
    // Sensitive questions hidden by default
    sensitiveQuestions: [
      { text: "What are the average survival rates, and what might this mean in my case?", bold: false },
    ],
    sensitiveLabel: "View survival rate questions",
  },
  {
    id: "understand",
    week: "Week 2",
    title: "Understand",
    subtitle: "I'm starting treatment",
    description: "Questions about your treatment plan, what to expect, tests, and the practicalities of your care.",
    color: "oklch(0.55 0.15 195)",
    bgHover: "#E1D7EB",
    questions: [
      { text: "What are my treatment options?", bold: true },
      { text: "What treatment do you recommend, and why is it the best choice for me?", bold: true },
      { text: "What is the goal of the treatment?", detail: "Is it to cure the cancer, prolong my life, or manage symptoms?", bold: true },
      { text: "How much experience do you have treating this specific type of cancer?", bold: false },
      { text: "Should I get a second opinion? How do I do that?", bold: false },
      { text: "Are there any clinical trials that might be right for me?", bold: false },
      { text: "When do I need to start treatment?", bold: false },
      { text: "What happens if I choose not to have treatment?", bold: false },
      { text: "What further tests will I need?", detail: "What do they involve and what will they tell us?", bold: true },
      { text: "Can biomarker, molecular, or genetic testing be done for my cancer?", bold: false },
      { text: "Where will I have my treatment, and how long will it take?", bold: false },
      { text: "Can treatment be scheduled around my work or other obligations?", bold: false },
      { text: "Will I need to stay in the hospital?", bold: false },
      { text: "Should a friend or family member come with me to appointments?", bold: false },
      { text: "Who is on my cancer care team, and who should I contact with questions?", bold: true },
    ],
  },
  {
    id: "prepare",
    week: "Weeks 3–4",
    title: "Prepare",
    subtitle: "Managing my daily life",
    description: "Questions about side effects, quality of life, support, and finances — the things that affect your everyday.",
    color: "oklch(0.55 0.15 195)",
    bgHover: "#E1D7EB",
    questions: [
      { text: "What are the potential short-term and long-term side effects?", bold: true },
      { text: "How will treatment affect my daily life?", detail: "Work, exercise, diet, sex life", bold: true },
      { text: "Will I lose my hair? Can you tell me about the cold cap?", bold: false },
      { text: "Will this treatment affect my fertility or cause early menopause?", bold: false },
      { text: "What can be done to manage side effects?", bold: false },
      { text: "What symptoms should I call you about right away?", bold: true },
      { text: "Can you suggest a mental health professional if I feel anxious or depressed?", bold: false },
      { text: "Will I qualify for any help or support at home during treatment?", bold: false },
      { text: "Is there a financial counselor or patient navigator I can talk to?", bold: false },
      { text: "Where can I find support for my family and children?", bold: false },
      { text: "Are there local support groups I can contact?", bold: false },
      { text: "Who can help me understand what my insurance or benefits cover?", bold: false },
    ],
  },
  {
    id: "looking-ahead",
    week: "Looking Ahead",
    title: "When I'm Ready",
    subtitle: "Life after treatment",
    description: "Questions about what comes next — follow-up care, recovery, and the future.",
    color: "oklch(0.55 0.15 195)",
    bgHover: "#E1D7EB",
    requiresSafetyPrompt: true,
    questions: [
      { text: "What happens once my treatment finishes?", bold: false },
      { text: "What kind of follow-up care will I need?", bold: false },
      { text: "How will we know if the cancer has come back?", detail: "What should I look out for?", bold: true },
      { text: "How long will it take before I start to feel normal again?", bold: false },
    ],
  },
];

export default function Home() {
  const [expandedSources, setExpandedSources] = useState(false);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [showSensitive, setShowSensitive] = useState<Record<string, boolean>>({});
  const [safetyDialogOpen, setSafetyDialogOpen] = useState(false);

  const handleCardClick = (cardId: string) => {
    const card = journeyCards.find(c => c.id === cardId);
    if (card?.requiresSafetyPrompt && expandedCard !== cardId) {
      setSafetyDialogOpen(true);
      return;
    }
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  const confirmLookingAhead = () => {
    setSafetyDialogOpen(false);
    setExpandedCard("looking-ahead");
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFCFA' }}>
      <SEO
        title="20+ Questions to Ask Your Oncologist | MyHealthCanvas UK"
        description="The most comprehensive curated list of questions to ask your oncologist — drawn from Macmillan, NHS, Cancer Research UK, MSK and more. Organized by diagnosis stage. Created by a 2× cancer survivor."
        keywords="questions to ask oncologist, questions to ask oncologist UK, what to ask oncologist first appointment, cancer diagnosis questions, questions for cancer doctor, 20 questions to ask your oncologist, oncologist appointment questions, cancer treatment questions UK, newly diagnosed cancer what to ask"
        canonicalPath="/"
      />

      {/* HERO - Emotional resonance + immediate value proposition */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle hands background - kept */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center md:bg-bottom opacity-40 md:opacity-50 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/bg-homepage-hands.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%',
          }}
        />
        
        <div className="max-w-xl mx-auto text-center space-y-10 relative z-10">
          
          {/* H1 - SEO optimized for target keyword */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight">
            Questions to Ask Your{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              Oncologist
            </span>
          </h1>
          
          {/* Core tagline - the value proposition */}
          <p className="text-[22px] md:text-[28px] font-semibold text-gray-800 leading-[1.4]">
            One step at a time.{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              Pick the questions you need.
            </span>
          </p>

          {/* Reassurance */}
          <div className="space-y-4">
            <p className="text-[18px] md:text-xl text-gray-600 font-light leading-[1.6]">
              Curated from Macmillan, NHS, Cancer Research UK, and the world's top cancer centres. You choose what to read, and when.
            </p>
          </div>
          
          {/* Primary CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#journey">
              <button className="w-full sm:w-auto px-10 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
                Start your journey
              </button>
            </a>
            <Link href="/first-30-days-after-diagnosis">
              <button className="w-full sm:w-auto px-10 py-5 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] text-[18px] font-medium rounded-lg hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                First 30 days after diagnosis
              </button>
            </Link>
          </div>
          
          {/* Trust signal */}
          <p className="text-[15px] text-gray-400 font-light">
            Created by a 2× cancer survivor. Private. Never replaces your doctors.
          </p>
          
        </div>
      </section>

      {/* BREATHE - First thing users see after hero */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FFFCFA' }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-medium">
            Week 1
          </p>
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-800">
            Breathe.
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-500 leading-[1.7] max-w-lg mx-auto">
            You don't need to do anything right now. You don't need to read everything on this page. 
            Just know that when you're ready, the right questions are here waiting for you.
          </p>
          <div className="pt-4 space-y-3">
            <p className="text-[16px] text-gray-500">
              If you need to talk to someone now:
            </p>
            <p className="text-[17px] font-medium text-[oklch(0.55_0.15_195)]">
              Macmillan: 0808 808 00 00 &nbsp;·&nbsp; Maggie's Centres &nbsp;·&nbsp; Cancer Research UK
            </p>
          </div>
        </div>
      </section>

      {/* EVIDENCE STRIP - why preparation matters */}
      <section className="py-10 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[oklch(0.55_0.15_195)]/5 to-[oklch(0.60_0.15_300)]/5">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.6]">
            <strong>74% of cancer patients</strong> seek information before their appointment.
            Patients who prepare questions have{" "}
            <strong>more productive conversations</strong> with their doctors and feel more in control.
          </p>
          <p className="text-[13px] text-gray-400 mt-3">
            CU Cancer Center, 2023 · Question Prompt List Meta-Analysis, 2025
          </p>
        </div>
      </section>

      {/* JOURNEY CARDS - Progressive disclosure */}
      <section id="journey" className="py-20 px-6 md:px-12 lg:px-24 scroll-mt-20" style={{ backgroundColor: '#FFFCFA' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Where are you in your{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              journey?
            </span>
          </h2>
          <p className="text-[17px] text-gray-500 text-center mb-4 max-w-xl mx-auto">
            Choose the stage that feels right for you. Only see what you need, when you need it.
          </p>
          <p className="text-[14px] text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Questions curated from{" "}
            <a href="https://www.macmillan.org.uk/cancer-information-and-support/treatment/your-treatment-options/questions-to-ask-your-healthcare-team" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">Macmillan</a>,{" "}
            <a href="https://www.gloshospitals.nhs.uk/media/documents/6478_Cancer_diagnosis_qs_long_A4_V2.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">NHS</a>,{" "}
            <a href="https://www.mskcc.org/news/questions-ask-oncologist-during-first-visit-after-cancer-diagnosis" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">Memorial Sloan Kettering</a>,{" "}
            <a href="https://www.cancer.org/cancer/managing-cancer/making-treatment-decisions/questions-to-ask-your-doctor.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">American Cancer Society</a>,{" "}
            <a href="https://www.cancer.gov/about-cancer/treatment/questions" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">NCI</a>{" "}
            and more.
          </p>

          {/* Journey Card Grid */}
          <div className="grid md:grid-cols-2 gap-5">
            {journeyCards.map((card) => {
              const isExpanded = expandedCard === card.id;
              return (
                <div key={card.id} className={`${isExpanded ? 'md:col-span-2' : ''}`}>
                  {/* Card */}
                  <button
                    onClick={() => handleCardClick(card.id)}
                    className="w-full text-left p-6 md:p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer group"
                    style={{
                      backgroundColor: isExpanded ? '#E1D7EB' : '#FFFCFA',
                      borderColor: isExpanded ? '#643296' : '#E1D7EB',
                    }}
                    onMouseEnter={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.backgroundColor = '#E1D7EB';
                        e.currentTarget.style.borderColor = '#643296';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isExpanded) {
                        e.currentTarget.style.backgroundColor = '#FFFCFA';
                        e.currentTarget.style.borderColor = '#E1D7EB';
                      }
                    }}
                  >
                    <p className="text-[13px] uppercase tracking-[0.15em] text-[oklch(0.55_0.15_195)] font-medium mb-2">
                      {card.week}
                    </p>
                    <h3 className="text-[22px] md:text-[26px] font-bold text-gray-800 mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[16px] text-gray-500 mb-3 italic">
                      "{card.subtitle}"
                    </p>
                    <p className="text-[15px] text-gray-500 leading-[1.6]">
                      {card.description}
                    </p>
                    <p className="text-[14px] text-[oklch(0.55_0.15_195)] mt-4 font-medium">
                      {isExpanded ? "Close ↑" : `View ${card.questions.length}${card.sensitiveQuestions ? '+' : ''} questions →`}
                    </p>
                  </button>

                  {/* Expanded questions */}
                  {isExpanded && (
                    <div className="mt-4 p-6 md:p-8 rounded-2xl border border-gray-100" style={{ backgroundColor: '#FFFCFA' }}>
                      <ul className="space-y-3">
                        {card.questions.map((q, i) => (
                          <li key={i} className="text-[16px] text-gray-700 leading-[1.6]">
                            {q.bold ? <strong>{q.text}</strong> : q.text}
                            {q.detail && (
                              <span className="text-gray-400 text-[14px]"> — {q.detail}</span>
                            )}
                          </li>
                        ))}
                      </ul>

                      {/* Sensitive questions toggle */}
                      {card.sensitiveQuestions && (
                        <div className="mt-6 pt-4 border-t border-gray-100">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowSensitive(prev => ({ ...prev, [card.id]: !prev[card.id] }));
                            }}
                            className="text-[14px] text-gray-400 hover:text-[oklch(0.55_0.15_195)] cursor-pointer transition-colors"
                          >
                            {showSensitive[card.id] ? "Hide detailed medical questions ↑" : card.sensitiveLabel || "View more detailed medical questions ↓"}
                          </button>
                          {showSensitive[card.id] && (
                            <ul className="space-y-3 mt-4">
                              {card.sensitiveQuestions.map((q, i) => (
                                <li key={i} className="text-[16px] text-gray-700 leading-[1.6]">
                                  {q.bold ? <strong>{q.text}</strong> : q.text}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}

                      {/* Add your own prompt */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <p className="text-[15px] text-gray-500 italic">
                          These are starting points. Write down every question that comes to mind — even at 3am.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA to organize */}
          <div className="mt-14 text-center">
            <Link href="/myhealthcanvas">
              <button 
                className="px-10 py-4 text-white text-[17px] font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #643296, #19878C)',
                }}
              >
                Build my custom question list
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SOURCES - Curated links to trusted organisations */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-800 mb-4 text-center">
            Where these questions come from
          </h2>
          <p className="text-[16px] text-gray-500 text-center mb-10 max-w-xl mx-auto">
            We curated questions from 9 of the most trusted cancer support organisations in the UK and internationally. Visit their original pages for even more detail.
          </p>

          {/* Source cards - always show first 5, toggle rest */}
          <div className="grid md:grid-cols-2 gap-4">
            
            {/* Macmillan */}
            <a href="https://www.macmillan.org.uk/cancer-information-and-support/treatment/your-treatment-options/questions-to-ask-your-healthcare-team" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">Macmillan Cancer Support</h3>
                  <p className="text-[13px] text-gray-400 mt-0.5">UK · 50+ questions</p>
                </div>
                <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
              </div>
              <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">Comprehensive, plain-language questions organized by your cancer journey stage.</p>
            </a>

            {/* NHS */}
            <a href="https://www.gloshospitals.nhs.uk/media/documents/6478_Cancer_diagnosis_qs_long_A4_V2.pdf" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">NHS Gloucestershire Trust</h3>
                  <p className="text-[13px] text-gray-400 mt-0.5">UK · 20+ questions · PDF</p>
                </div>
                <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
              </div>
              <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">Official NHS printable question list. Starts with the 6 most important questions.</p>
            </a>

            {/* Safeena */}
            <a href="https://www.safeena.org.uk/advice-and-guidance/medical-advice/questions-to-ask-your-doctors-oncologist/" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">Safeena Muslim Cancer Support</h3>
                  <p className="text-[13px] text-gray-400 mt-0.5">UK · 54 questions</p>
                </div>
                <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
              </div>
              <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">Very thorough. Includes practical questions about work, driving, and daily life that others miss.</p>
            </a>

            {/* Bowel Cancer UK */}
            <a href="https://www.bowelcanceruk.org.uk/about-bowel-cancer/diagnosis/questions-to-ask/" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">Bowel Cancer UK</h3>
                  <p className="text-[13px] text-gray-400 mt-0.5">UK · 14 questions</p>
                </div>
                <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
              </div>
              <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">Concise and practical. Includes fertility and family support questions often missed elsewhere.</p>
            </a>

            {/* GenesisCare */}
            <a href="https://www.genesiscare.com/uk/patient-support/questions-to-ask-your-consultant" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">GenesisCare UK</h3>
                  <p className="text-[13px] text-gray-400 mt-0.5">UK · 24 questions · Breast cancer</p>
                </div>
                <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
              </div>
              <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">Breast cancer-specific questions including HER2 status and hormone sensitivity.</p>
            </a>

            {/* Expandable international sources */}
            {expandedSources && (
              <>
                {/* MSK */}
                <a href="https://www.mskcc.org/news/questions-ask-oncologist-during-first-visit-after-cancer-diagnosis" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">Memorial Sloan Kettering</h3>
                      <p className="text-[13px] text-gray-400 mt-0.5">US · 11 questions</p>
                    </div>
                    <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
                  </div>
                  <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">Expert-authored by an MSK surgeon. Detailed explanations for each question.</p>
                </a>

                {/* ACS */}
                <a href="https://www.cancer.org/cancer/managing-cancer/making-treatment-decisions/questions-to-ask-your-doctor.html" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">American Cancer Society</h3>
                      <p className="text-[13px] text-gray-400 mt-0.5">US · 50+ questions</p>
                    </div>
                    <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
                  </div>
                  <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">The most comprehensive single source. Covers financial, emotional, and practical questions.</p>
                </a>

                {/* MD Anderson */}
                <a href="https://www.mdanderson.org/cancerwise/5-questions-to-ask-a-medical-oncologist-during-your-first-visit.h00-159619434.html" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">MD Anderson Cancer Center</h3>
                      <p className="text-[13px] text-gray-400 mt-0.5">US · 15 questions</p>
                    </div>
                    <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
                  </div>
                  <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">Expert-authored by an oncologist. Emphasis on treatment goals and patient values.</p>
                </a>

                {/* NCI */}
                <a href="https://www.cancer.gov/about-cancer/treatment/questions" target="_blank" rel="noopener noreferrer" className="p-5 bg-white rounded-lg border border-gray-100 hover:border-[oklch(0.55_0.15_195)]/30 transition-colors group">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-[16px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">National Cancer Institute</h3>
                      <p className="text-[13px] text-gray-400 mt-0.5">US Government · 30 questions</p>
                    </div>
                    <span className="text-[oklch(0.55_0.15_195)] text-[14px] flex-shrink-0 mt-1">↗</span>
                  </div>
                  <p className="text-[14px] text-gray-500 mt-2 leading-[1.5]">Authoritative US government source. Well-categorized including practical logistics.</p>
                </a>
              </>
            )}
          </div>

          {/* Toggle button */}
          <div className="text-center mt-6">
            <button
              onClick={() => setExpandedSources(!expandedSources)}
              className="text-[15px] text-[oklch(0.55_0.15_195)] hover:underline cursor-pointer"
            >
              {expandedSources ? "Show fewer sources ↑" : "Show international sources ↓"}
            </button>
          </div>
        </div>
      </section>

      {/* YOUR FIRST 30 DAYS CHECKLIST - practical takeaway */}
      <section className="py-20 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FFFCFA' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Your first 30 days:{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              a checklist
            </span>
          </h2>
          <p className="text-[17px] text-gray-500 text-center mb-12 max-w-xl mx-auto">
            You don't need to do everything. You don't need to do anything today. But when you're ready, start here.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Week 1 */}
            <div className="p-6 rounded-lg border border-gray-100" style={{ backgroundColor: '#FFFCFA' }}>
              <h3 className="text-[17px] font-bold text-[oklch(0.55_0.15_195)] mb-3">Week 1 — Breathe</h3>
              <ul className="space-y-2">
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Let yourself feel whatever you feel
                </li>
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Tell one person you trust
                </li>
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Call Macmillan (0808 808 00 00) or Maggie's if you need to talk
                </li>
              </ul>
            </div>

            {/* Week 2 */}
            <div className="p-6 rounded-lg border border-gray-100" style={{ backgroundColor: '#FFFCFA' }}>
              <h3 className="text-[17px] font-bold text-[oklch(0.55_0.15_195)] mb-3">Week 2 — Gather</h3>
              <ul className="space-y-2">
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Start one folder — digital or physical
                </li>
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Put every letter, scan result, and appointment note in it
                </li>
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  No sorting needed — just gather
                </li>
              </ul>
            </div>

            {/* Week 3 */}
            <div className="p-6 rounded-lg border border-gray-100" style={{ backgroundColor: '#FFFCFA' }}>
              <h3 className="text-[17px] font-bold text-[oklch(0.55_0.15_195)] mb-3">Week 3 — Question</h3>
              <ul className="space-y-2">
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Look at the questions above — circle the ones that matter to you
                </li>
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Add your own questions
                </li>
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Take this list to your next appointment
                </li>
              </ul>
            </div>

            {/* Week 4 */}
            <div className="p-6 rounded-lg border border-gray-100" style={{ backgroundColor: '#FFFCFA' }}>
              <h3 className="text-[17px] font-bold text-[oklch(0.55_0.15_195)] mb-3">Week 4 — Prepare</h3>
              <ul className="space-y-2">
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Designate one person as your "update person"
                </li>
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  Write down what you know so far — diagnosis, treatment plan, next steps
                </li>
                <li className="text-[15px] text-gray-600 flex items-start gap-2">
                  <span className="text-gray-300 mt-0.5">○</span>
                  You're ready to start organizing — MyHealthCanvas can help
                </li>
              </ul>
            </div>

          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/first-30-days-after-diagnosis">
              <button className="px-10 py-4 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] text-[16px] font-medium rounded-lg hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                Read the full first 30 days guide →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CREATED BY A SURVIVOR - trust + credibility */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FFFCFA' }}>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-800 mb-6">
            Created by someone who's been there
          </h2>
          <p className="text-[17px] text-gray-500 leading-[1.7]">
            MyHealthCanvas was created by <strong>Andy Squire</strong>, a 2× cancer survivor who knows what it's like to feel lost after diagnosis. This isn't a hospital system or a tech company — it's a patient helping other patients get organized, ask better questions, and feel more in control.
          </p>
          <div className="mt-6">
            <Link href="/about" className="text-[oklch(0.55_0.15_195)] hover:underline text-[15px]">
              Read Andy's story →
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Confirmation Dialog for "Looking Ahead" */}
      <AlertDialog open={safetyDialogOpen} onOpenChange={setSafetyDialogOpen}>
        <AlertDialogContent className="max-w-md" style={{ backgroundColor: '#FFFCFA' }}>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-[20px] text-gray-800">
              Before you continue
            </AlertDialogTitle>
            <AlertDialogDescription className="text-[16px] text-gray-500 leading-[1.6]">
              This section contains questions about the long-term future — including follow-up care and recurrence. 
              There's no rush. You can come back to this whenever you're ready.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-3 sm:gap-3">
            <AlertDialogCancel className="text-[15px]">
              Not right now
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmLookingAhead}
              className="text-[15px] bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)]"
            >
              I'm ready to view these
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

    </div>
  );
}
