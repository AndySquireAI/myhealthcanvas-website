import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useState } from "react";

export default function Home() {
  const [expandedSources, setExpandedSources] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
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
            The UK's most complete curated list.{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              One page. Every source.
            </span>
          </p>

          {/* Reassurance */}
          <div className="space-y-4">
            <p className="text-[18px] md:text-xl text-gray-600 font-light leading-[1.6]">
              We've reviewed Macmillan, NHS, Cancer Research UK, and the world's top cancer centres to bring you the questions that matter most — all in one place.
            </p>
          </div>
          
          {/* Primary CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#questions">
              <button className="w-full sm:w-auto px-10 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
                See the questions
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

      {/* CURATED QUESTIONS - THE MAIN SEO CONTENT */}
      <section id="questions" className="py-20 px-6 md:px-12 lg:px-24 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Questions to ask your{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              oncologist
            </span>
            {" "}at your first appointment
          </h2>
          <p className="text-[17px] text-gray-500 text-center mb-4 max-w-xl mx-auto">
            Curated from 9 of the UK's and world's most trusted cancer support organisations. Take this list with you.
          </p>
          <p className="text-[14px] text-gray-400 text-center mb-12 max-w-xl mx-auto">
            Sources include{" "}
            <a href="https://www.macmillan.org.uk/cancer-information-and-support/treatment/your-treatment-options/questions-to-ask-your-healthcare-team" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">Macmillan</a>,{" "}
            <a href="https://www.gloshospitals.nhs.uk/media/documents/6478_Cancer_diagnosis_qs_long_A4_V2.pdf" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">NHS</a>,{" "}
            <a href="https://www.mskcc.org/news/questions-ask-oncologist-during-first-visit-after-cancer-diagnosis" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">Memorial Sloan Kettering</a>,{" "}
            <a href="https://www.cancer.org/cancer/managing-cancer/making-treatment-decisions/questions-to-ask-your-doctor.html" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">American Cancer Society</a>,{" "}
            <a href="https://www.cancer.gov/about-cancer/treatment/questions" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">NCI</a>{" "}
            and more.
          </p>
          
          {/* Question categories */}
          <div className="space-y-12">
            
            {/* 1. Understanding your diagnosis */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">1</span>
                Understanding your diagnosis
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>What type of cancer do I have?</strong>
                  <span className="text-gray-400 text-[14px]"> — Where did it start? Is it a primary or secondary cancer?</span>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>What is the stage and grade of my cancer?</strong>
                  <span className="text-gray-400 text-[14px]"> — What does this mean for me?</span>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>Has the cancer spread to other parts of my body?</strong>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>Is my cancer aggressive?</strong>
                  <span className="text-gray-400 text-[14px]"> — Will it grow or spread quickly?</span>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  What are the average survival rates, and what might this mean in my case?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Will you be able to find out what caused my cancer?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Can you explain my pathology report in plain language?
                </li>
              </ul>
            </div>

            {/* 2. Treatment options */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">2</span>
                Your treatment plan
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>What are my treatment options?</strong>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>What treatment do you recommend, and why is it the best choice for me?</strong>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>What is the goal of the treatment?</strong>
                  <span className="text-gray-400 text-[14px]"> — Is it to cure the cancer, prolong my life, or manage symptoms?</span>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  How much experience do you have treating this specific type of cancer?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Should I get a second opinion? How do I do that?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Are there any clinical trials that might be right for me?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  When do I need to start treatment?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  What happens if I choose not to have treatment?
                </li>
              </ul>
            </div>

            {/* 3. Tests, logistics & practicalities */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">3</span>
                Tests, logistics and practicalities
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>What further tests will I need?</strong>
                  <span className="text-gray-400 text-[14px]"> — What do they involve and what will they tell us?</span>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Can biomarker, molecular, or genetic testing be done for my cancer?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Where will I have my treatment, and how long will it take?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Can treatment be scheduled around my work or other obligations?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Will I need to stay in the hospital?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Should a friend or family member come with me to appointments?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>Who is on my cancer care team, and who should I contact with questions?</strong>
                </li>
              </ul>
            </div>

            {/* 4. Side effects & quality of life */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">4</span>
                Side effects and quality of life
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>What are the potential short-term and long-term side effects?</strong>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>How will treatment affect my daily life?</strong>
                  <span className="text-gray-400 text-[14px]"> — Work, exercise, diet, sex life</span>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Will I lose my hair? Can you tell me about the cold cap?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Will this treatment affect my fertility or cause early menopause?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  What can be done to manage side effects?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>What symptoms should I call you about right away?</strong>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Can you suggest a mental health professional if I feel anxious or depressed?
                </li>
              </ul>
            </div>

            {/* 5. Support & finances */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">5</span>
                Support and finances
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Will I qualify for any help or support at home during treatment?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Is there a financial counselor or patient navigator I can talk to?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Where can I find support for my family and children?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Are there local support groups I can contact?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  Who can help me understand what my insurance or benefits cover?
                </li>
              </ul>
            </div>

            {/* 6. After treatment ends */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">6</span>
                After treatment ends
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  What happens once my treatment finishes?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  What kind of follow-up care will I need?
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  <strong>How will we know if the cancer has come back?</strong>
                  <span className="text-gray-400 text-[14px]"> — What should I look out for?</span>
                </li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">
                  How long will it take before I start to feel normal again?
                </li>
              </ul>
            </div>

          </div>

          {/* Add your own prompt */}
          <div className="mt-12 p-6 bg-gray-50 rounded-lg text-center">
            <p className="text-[16px] text-gray-600 mb-1">
              <strong>These are starting points.</strong> Your questions matter most.
            </p>
            <p className="text-[15px] text-gray-500">
              Write down every question that comes to mind — even at 3am. No question is too small.
            </p>
          </div>

          {/* CTA to organize */}
          <div className="mt-10 text-center">
            <Link href="/myhealthcanvas">
              <button className="px-10 py-4 bg-[oklch(0.55_0.15_195)] text-white text-[16px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
                Organize your questions with MyHealthCanvas
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SOURCES - Curated links to trusted organisations */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
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
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
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
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
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
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
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
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
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
            <div className="p-6 bg-gray-50 rounded-lg border border-gray-100">
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
      <section className="py-16 px-6 md:px-12 lg:px-24">
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

    </div>
  );
}
