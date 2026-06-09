import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [journeyStep, setJourneyStep] = useState<string | null>(null);

  // Analytics: scroll depth tracking
  useEffect(() => {
    let maxScroll = 0;
    const thresholds = [25, 50, 75, 90];
    const fired = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const percent = Math.round((scrollTop / docHeight) * 100);
      if (percent > maxScroll) {
        maxScroll = percent;
        thresholds.forEach((t) => {
          if (percent >= t && !fired.has(t)) {
            fired.add(t);
            if (typeof window !== "undefined" && (window as any).gtag) {
              (window as any).gtag("event", "scroll_depth", {
                event_category: "engagement",
                event_label: `${t}%`,
                value: t,
              });
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Analytics: track CTA clicks
  const trackClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cta_click", {
        event_category: "homepage",
        event_label: label,
      });
    }
  };

  // Analytics: track journey selection
  const trackJourneySelect = (step: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "journey_select", {
        event_category: "homepage_engagement",
        event_label: step,
      });
    }
  };

  // Journey step content for the interactive selector
  const journeyContent: Record<string, { heading: string; description: string; cta: string; link: string; ctaLabel: string }> = {
    "just-diagnosed": {
      heading: "You've just been diagnosed",
      description: "Start with the questions that matter most right now — about your diagnosis, what it means, and what happens next. Take it one step at a time.",
      cta: "/questions",
      link: "/first-30-days-after-diagnosis",
      ctaLabel: "See questions for newly diagnosed →",
    },
    "starting-treatment": {
      heading: "You're starting treatment",
      description: "Prepare the right questions about your treatment plan, side effects, and daily life. Walk into your next appointment feeling ready.",
      cta: "/oncology-appointment-checklist",
      link: "/questions",
      ctaLabel: "Get your free appointment checklist →",
    },
    "supporting-someone": {
      heading: "You're supporting someone with cancer",
      description: "Caregivers carry more than they can hold in their head. Get practical tools to help you stay organised, ask the right questions, and support your person.",
      cta: "/caregivers",
      link: "/caregiver-oncology-questions",
      ctaLabel: "Caregiver tools & questions →",
    },
  };


  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="MyHealthCanvas - Questions to ask my oncologist | Cancer appointment preparation"
        description="Newly diagnosed with breast, lung, bowel or prostate cancer? MyHealthCanvas helps you prepare for oncology appointments with curated questions, symptom tracking and communication support. Free checklist available."
        keywords="newly diagnosed cancer, questions to ask oncologist, cancer diagnosis checklist, breast cancer questions, lung cancer questions, bowel cancer questions, prostate cancer questions, cancer treatment notes, cancer patient planner, caregiver cancer support, oncology appointment preparation"
        canonicalPath="/"
      />

      {/* HERO - Sharper value prop with immediate message match */}
      <section className="w-full" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-16 pb-6 md:pb-10">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: Tighter copy focused on the action */}
            <div className="space-y-5 order-2 md:order-1 text-center md:text-left">
              <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-bold text-gray-900 leading-[1.15] tracking-tight">
                Prepare for your{" "}
                <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
                  oncology appointment
                </span>{" "}
                with confidence.
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.7]">
                Curated questions from Macmillan, NHS, Cancer Research UK and the world's top cancer centres. Organised by where you are in your journey. Free checklist included.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center md:justify-start">
                <Link href="/oncology-appointment-checklist" onClick={() => trackClick("hero_checklist_cta")}>
                  <button className="w-full sm:w-auto px-7 py-3.5 bg-[oklch(0.55_0.15_195)] text-white text-[15px] font-semibold rounded-xl hover:bg-[oklch(0.50_0.15_195)] transition-colors shadow-md hover:shadow-lg">
                    Get Free Checklist
                  </button>
                </Link>
                <Link href="/questions" onClick={() => trackClick("hero_questions_cta")}>
                  <button className="w-full sm:w-auto px-7 py-3.5 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] bg-white text-[15px] font-semibold rounded-xl hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                    Questions for Your Oncologist
                  </button>
                </Link>
              </div>
              {/* Inline trust strip */}
              <div className="flex flex-wrap items-center gap-4 pt-3 justify-center md:justify-start">
                <span className="text-[13px] text-gray-500 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  2× cancer survivor
                </span>
                <span className="text-[13px] text-gray-500 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Harvard Medical School
                </span>
                <span className="text-[13px] text-gray-500 flex items-center gap-1.5">
                  <svg className="w-4 h-4 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  100% private
                </span>
              </div>
            </div>
            {/* Right: Hero image */}
            <div className="order-1 md:order-2">
              <img
                src="/images/hero-woman-cropped.jpg"
                alt="Woman preparing questions for her next oncology appointment"
                className="w-full rounded-xl shadow-lg"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE STRIP - Immediate social proof */}
      <section className="py-5 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[oklch(0.55_0.15_195)]/5 to-[oklch(0.60_0.15_300)]/5 border-y border-[oklch(0.55_0.15_195)]/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center">
          <p className="text-[15px] text-gray-700">
            <strong>74% of cancer patients</strong> seek information before appointments
          </p>
          <span className="hidden md:inline text-gray-300">|</span>
          <p className="text-[15px] text-gray-700">
            Patients who prepare questions have <strong>more productive conversations</strong>
          </p>
          <span className="hidden md:inline text-gray-300">|</span>
          <p className="text-[15px] text-gray-700">
            Sources: <strong>Macmillan · NHS · MSK · NCI</strong>
          </p>
        </div>
      </section>

      {/* WHERE ARE YOU IN YOUR JOURNEY? - Interactive engagement hook */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900">
              Where are you in your{" "}
              <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
                journey?
              </span>
            </h2>
            <p className="text-[16px] text-gray-500">Choose what feels right — we'll show you the most relevant resources.</p>
          </div>

          {/* Three journey buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <button
              onClick={() => { setJourneyStep("just-diagnosed"); trackJourneySelect("just-diagnosed"); }}
              className={`p-5 rounded-xl border-2 transition-all duration-300 text-left cursor-pointer group ${
                journeyStep === "just-diagnosed" 
                  ? "border-[oklch(0.55_0.15_195)] bg-[oklch(0.55_0.15_195)]/5 shadow-md" 
                  : "border-gray-200 bg-white hover:border-[oklch(0.55_0.15_195)]/50 hover:shadow-sm"
              }`}
            >
              <div className="text-[24px] mb-2">🫁</div>
              <h3 className="text-[16px] font-bold text-gray-800">I've just been diagnosed</h3>
              <p className="text-[13px] text-gray-500 mt-1">First questions & what to expect</p>
            </button>

            <button
              onClick={() => { setJourneyStep("starting-treatment"); trackJourneySelect("starting-treatment"); }}
              className={`p-5 rounded-xl border-2 transition-all duration-300 text-left cursor-pointer group ${
                journeyStep === "starting-treatment" 
                  ? "border-[oklch(0.55_0.15_195)] bg-[oklch(0.55_0.15_195)]/5 shadow-md" 
                  : "border-gray-200 bg-white hover:border-[oklch(0.55_0.15_195)]/50 hover:shadow-sm"
              }`}
            >
              <div className="text-[24px] mb-2">💊</div>
              <h3 className="text-[16px] font-bold text-gray-800">I'm starting treatment</h3>
              <p className="text-[13px] text-gray-500 mt-1">Prepare for your next appointment</p>
            </button>

            <button
              onClick={() => { setJourneyStep("supporting-someone"); trackJourneySelect("supporting-someone"); }}
              className={`p-5 rounded-xl border-2 transition-all duration-300 text-left cursor-pointer group ${
                journeyStep === "supporting-someone" 
                  ? "border-[oklch(0.55_0.15_195)] bg-[oklch(0.55_0.15_195)]/5 shadow-md" 
                  : "border-gray-200 bg-white hover:border-[oklch(0.55_0.15_195)]/50 hover:shadow-sm"
              }`}
            >
              <div className="text-[24px] mb-2">🤝</div>
              <h3 className="text-[16px] font-bold text-gray-800">I'm supporting someone</h3>
              <p className="text-[13px] text-gray-500 mt-1">Caregiver tools & guidance</p>
            </button>
          </div>

          {/* Dynamic content based on selection */}
          {journeyStep && journeyContent[journeyStep] && (
            <div className="bg-white rounded-xl border border-[oklch(0.55_0.15_195)]/20 p-6 md:p-8 shadow-sm animate-in fade-in duration-300 space-y-4">
              <h3 className="text-[20px] md:text-[24px] font-bold text-gray-900">
                {journeyContent[journeyStep].heading}
              </h3>
              <p className="text-[16px] text-gray-600 leading-[1.7]">
                {journeyContent[journeyStep].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Link href={journeyContent[journeyStep].cta} onClick={() => trackClick(`journey_primary_${journeyStep}`)}>
                  <button className="w-full sm:w-auto px-6 py-3 bg-[oklch(0.55_0.15_195)] text-white text-[15px] font-semibold rounded-xl hover:bg-[oklch(0.50_0.15_195)] transition-colors shadow-md">
                    {journeyContent[journeyStep].ctaLabel}
                  </button>
                </Link>
                <Link href={journeyContent[journeyStep].link} onClick={() => trackClick(`journey_secondary_${journeyStep}`)}>
                  <button className="w-full sm:w-auto px-6 py-3 border-2 border-gray-200 text-gray-700 text-[15px] font-medium rounded-xl hover:border-[oklch(0.55_0.15_195)]/50 transition-colors">
                    Explore more resources
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* QUICK-ACCESS RESOURCE CARDS - High-engagement destinations */}
      <section className="py-12 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Most helpful resources</h2>
            <p className="text-[15px] text-gray-500 mt-2">The tools and guides our visitors find most valuable.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - Questions (highest traffic) */}
            <Link href="/questions" onClick={() => trackClick("resource_questions")}>
              <div className="group cursor-pointer rounded-xl p-6 md:p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm h-full" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: 'oklch(0.95 0.03 195)' }}>
                  <svg className="w-7 h-7 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  20+ Questions to Ask
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">
                  Curated from Macmillan, NHS, MSK and more. Organised by diagnosis stage. Choose what to read, when.
                </p>
                <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                  View Questions →
                </p>
              </div>
            </Link>

            {/* Card 2 - Free Checklist (high conversion intent) */}
            <Link href="/oncology-appointment-checklist" onClick={() => trackClick("resource_checklist")}>
              <div className="group cursor-pointer rounded-xl p-6 md:p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-2 border-[oklch(0.55_0.15_195)]/30 shadow-sm h-full relative" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[11px] font-bold text-white rounded-full" style={{ background: 'oklch(0.55 0.15 195)' }}>Most Popular</div>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: 'oklch(0.95 0.03 195)' }}>
                  <svg className="w-7 h-7 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  Free Appointment Checklist
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">
                  21 printable questions to bring to your next oncology appointment. Download instantly — no signup required.
                </p>
                <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                  Download Free →
                </p>
              </div>
            </Link>

            {/* Card 3 - Caregivers (highest engagement time) */}
            <Link href="/caregivers" onClick={() => trackClick("resource_caregivers")}>
              <div className="group cursor-pointer rounded-xl p-6 md:p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm h-full" style={{ backgroundColor: '#FFFFFF' }}>
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: 'oklch(0.95 0.03 300)' }}>
                  <svg className="w-7 h-7 text-[oklch(0.55_0.15_300)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  Caregiver Support
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">
                  Practical tools for partners, family members and carers. Questions to ask, checklists, and emotional support.
                </p>
                <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                  Caregiver Tools →
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* REAL VOICES - Trust section with product context */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900">Real voices from people using MyHealthCanvas</h2>
            <p className="text-[16px] text-gray-500 leading-[1.6]">Patients, caregivers and clinicians describe how preparation helps before cancer care appointments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Patient voice */}
            <div className="p-6 bg-white rounded-xl border border-gray-100 space-y-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-wider font-bold" style={{ color: 'oklch(0.55 0.15 195)' }}>Patient</p>
              <p className="text-[15px] text-gray-600 leading-[1.8] italic">
                "After diagnosis, it's an avalanche of emails, letters, phone calls. MyHealthCanvas helps me organise my key information — especially the questions for my oncologist — so I never forget anything."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">Cancer patient, 58 · Switzerland</p>
            </div>

            {/* Caregiver voice */}
            <div className="p-6 bg-white rounded-xl border border-gray-100 space-y-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-wider font-bold" style={{ color: 'oklch(0.55 0.15 195)' }}>Caregiver</p>
              <p className="text-[15px] text-gray-600 leading-[1.8] italic">
                "My wife was in pain before treatment started. I had to take care of a mountain of admin. MyHealthCanvas helped us think through our priorities and start to plan for a better future."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">Caregiver, 64 · UK</p>
            </div>

            {/* Clinician voice */}
            <div className="p-6 bg-white rounded-xl border border-[oklch(0.55_0.15_195)]/30 space-y-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-wider font-bold" style={{ color: 'oklch(0.55 0.15 195)' }}>Oncologist</p>
              <p className="text-[15px] text-gray-600 leading-[1.8] italic">
                "Some of my patients bring their MyHealthCanvas to appointments so they don't forget questions. Having a standard template is much easier for me to scan than fragmented records."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">Oncologist, 38 · Switzerland</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD MAGNET - 21 Questions Checklist (reinforcement) */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">
            21 Questions to Ask at Your Next Oncology Appointment
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7] max-w-xl mx-auto">
            A calm, practical checklist you can take with you. Covers diagnosis, treatment, side effects, and what to expect next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link href="/oncology-appointment-checklist" onClick={() => trackClick("homepage_checklist_cta_lower")}>
              <button
                className="w-full sm:w-auto px-8 py-4 text-white text-[15px] font-semibold rounded-xl transition-all hover:shadow-md"
                style={{ background: 'oklch(0.55 0.15 195)' }}
              >
                Download Free Checklist
              </button>
            </Link>
          </div>

          <p className="text-[13px] text-gray-400">
            Free. No spam. Just a helpful checklist for your next appointment.
          </p>
        </div>
      </section>

      {/* HOW PATIENTS USE MYHEALTHCANVAS - Habit loop (engagement content) */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900">How patients actually use MyHealthCanvas</h2>
            <p className="text-[16px] text-gray-500 leading-[1.6]">Many patients use MyHealthCanvas throughout treatment — not just once.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {/* Before */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold text-white" style={{ background: 'oklch(0.55 0.15 195)' }}>1</div>
              <h3 className="text-[17px] font-bold text-gray-800">Before Appointment</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">Write down:</p>
              <ul className="text-[14px] text-gray-600 space-y-1">
                <li>· symptoms</li>
                <li>· concerns</li>
                <li>· questions</li>
              </ul>
            </div>

            {/* During */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold text-white" style={{ background: 'oklch(0.50 0.12 260)' }}>2</div>
              <h3 className="text-[17px] font-bold text-gray-800">During Appointment</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">Bring:</p>
              <ul className="text-[14px] text-gray-600 space-y-1">
                <li>· questions</li>
                <li>· medicines</li>
                <li>· priorities</li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold text-white" style={{ background: 'oklch(0.50 0.12 160)' }}>3</div>
              <h3 className="text-[17px] font-bold text-gray-800">After Appointment</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">Record:</p>
              <ul className="text-[14px] text-gray-600 space-y-1">
                <li>· decisions</li>
                <li>· next steps</li>
                <li>· follow-up questions</li>
              </ul>
            </div>

            {/* Between */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[14px] font-bold text-white" style={{ background: 'oklch(0.50 0.12 40)' }}>4</div>
              <h3 className="text-[17px] font-bold text-gray-800">Between Appointments</h3>
              <p className="text-[14px] text-gray-500 leading-[1.6]">Track:</p>
              <ul className="text-[14px] text-gray-600 space-y-1">
                <li>· symptoms</li>
                <li>· side effects</li>
                <li>· changes</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-2">
            <Link href="/prepare-for-your-oncology-appointment" onClick={() => trackClick("homepage_prepare_workflow")}>
              <span className="text-[15px] font-bold text-[oklch(0.55_0.15_195)] hover:underline cursor-pointer">
                See the full appointment preparation workflow →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* COMING SOON: PATIENT MEMORY - emerging direction teaser (vision, not a delivered capability) */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-8 md:p-10 text-center space-y-5">
            <span className="inline-block text-[12px] font-bold tracking-[0.08em] uppercase text-[#369994] bg-[oklch(0.95_0.03_195)] rounded-full px-4 py-1.5">Coming soon</span>
            <h2 className="text-[24px] md:text-[30px] font-bold text-gray-900 leading-[1.25]">
              We're building Patient Memory
            </h2>
            <p className="text-[16px] md:text-[17px] text-gray-600 leading-[1.7]">
              Today, MyHealthCanvas helps you prepare, remember and capture what matters for each appointment. Next, we're working towards helping you <strong>carry that information forward</strong> — across appointments, clinicians and care settings — so your next appointment can start where the last one finished.
            </p>
            <p className="text-[15px] text-gray-500 leading-[1.7] italic">
              Our vision for continuity of care: you don't have to remember everything, you won't lose what's important, and your family can help &mdash; all in one place you control.
            </p>
            <p className="text-[13px] font-semibold text-[#369994]">An emerging capability we're developing &mdash; not yet available.</p>
          </div>
        </div>
      </section>

      {/* PRODUCT SECTION - MyHealthCanvas companion */}
      <section className="py-16 px-6" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-[14px] uppercase tracking-[0.15em] text-[oklch(0.55_0.15_195)] font-bold">
            When you're ready for more
          </p>
          <h2 className="text-[26px] md:text-[34px] font-bold text-gray-900 leading-[1.3]">
            A companion for your cancer care journey
          </h2>
          <p className="text-[17px] md:text-[19px] text-gray-600 leading-[1.7] font-light max-w-2xl mx-auto">
            MyHealthCanvas is a printable appointment companion that helps you organise questions, symptoms, medicines and priorities — so nothing gets forgotten.
          </p>

          {/* Two versions explained compassionately */}
          <div className="grid md:grid-cols-2 gap-6 pt-6 text-left">
            <div className="bg-white rounded-xl border border-gray-100 p-6 space-y-3 shadow-sm">
              <p className="text-[13px] uppercase tracking-[0.15em] text-[oklch(0.55_0.15_195)] font-bold">For first appointments</p>
              <h3 className="text-[20px] font-bold text-gray-900">Essential Appointment Companion</h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">
                A one-page version focusing on what matters first: diagnosis details, medicines, symptoms, and questions for your team.
              </p>
              <p className="text-[14px] text-gray-500 italic">
                Many newly diagnosed patients prefer to start here.
              </p>
              <p className="text-[15px] font-semibold text-gray-800 pt-2">£19</p>
            </div>

            <div className="bg-white rounded-xl border-2 border-[oklch(0.55_0.15_195)]/40 p-6 space-y-3 shadow-sm relative">
              <div className="absolute -top-3 left-6 px-3 py-1 text-[11px] font-bold text-white rounded-full" style={{ background: 'oklch(0.55 0.15 195)' }}>When you're ready</div>
              <p className="text-[13px] uppercase tracking-[0.15em] text-[oklch(0.55_0.15_195)] font-bold pt-2">For reflection & future care</p>
              <h3 className="text-[20px] font-bold text-gray-900">Complete Care & Future Planning Companion</h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">
                Everything in Essential, plus space for comfort, reflections, future wishes, advance directives and healthcare power of attorney.
              </p>
              <p className="text-[14px] text-gray-500 italic">
                Use this only when these questions feel helpful.
              </p>
              <p className="text-[15px] font-semibold text-gray-800 pt-2">£27</p>
            </div>
          </div>

          {/* Soft CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/myhealthcanvas" onClick={() => trackClick("homepage_view_plans")}>
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-[16px] font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))',
                }}
              >
                Learn more about MyHealthCanvas
              </button>
            </Link>
          </div>

          <p className="text-[14px] text-gray-400 italic">
            50% of all proceeds are donated to cancer charities.
          </p>
        </div>
      </section>

      {/* TRUST BADGES - Credentials section */}
      <section className="py-12 px-6" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-[14px] uppercase tracking-[0.15em] text-gray-500 font-medium">Built with care and clinical understanding</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[20px]" aria-hidden="true">🎓</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Harvard Medical School<br/><span className="font-light text-gray-500">Best Overall Capstone 2026</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[20px]" aria-hidden="true">🏛️</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Oxford Saïd Business School<br/><span className="font-light text-gray-500">AI Programme Distinction</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[20px]" aria-hidden="true">🎗️</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">2× cancer survivor<br/><span className="font-light text-gray-500">Patient-first design philosophy</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[20px]" aria-hidden="true">🔒</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Zero data stored on servers<br/><span className="font-light text-gray-500">Your health data stays on your device</span></span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
