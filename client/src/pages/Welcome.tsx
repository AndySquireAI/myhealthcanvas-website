import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useEffect } from "react";

export default function Welcome() {

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


  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="MyHealthCanvas - Questions to ask my oncologist | Cancer appointment preparation"
        description="Newly diagnosed with breast, lung, bowel or prostate cancer? MyHealthCanvas helps you prepare for oncology appointments with curated questions, symptom tracking and communication support. Free checklist available."
        keywords="newly diagnosed cancer, questions to ask oncologist, cancer diagnosis checklist, breast cancer questions, lung cancer questions, bowel cancer questions, prostate cancer questions, cancer treatment notes, cancer patient planner, caregiver cancer support, oncology appointment preparation"
        canonicalPath="/"
      />

      {/* HERO - Mobile-optimised: coded text + cropped image */}
      <section className="w-full" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: All text coded for readability */}
            <div className="space-y-5 order-2 md:order-1 text-center">
              <h1 className="text-[28px] md:text-[38px] lg:text-[46px] font-bold text-gray-900 leading-[1.15] tracking-tight">
                You don't have to face your{" "}
                <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
                  next appointment
                </span>{" "}
                unprepared.
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.7]">
                MyHealthCanvas helps you organise your questions, symptoms, medications and priorities so you can have clearer, more confident conversations with your care team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
                <Link href="/questions" onClick={() => trackClick("hero_questions_cta")}>
                  <button className="w-full sm:w-auto px-7 py-3.5 bg-[oklch(0.55_0.15_195)] text-white text-[15px] font-semibold rounded-xl hover:bg-[oklch(0.50_0.15_195)] transition-colors shadow-md hover:shadow-lg">
                    Questions for Your Oncologist
                  </button>
                </Link>
                <Link href="/oncology-appointment-checklist" onClick={() => trackClick("hero_checklist_cta")}>
                  <button className="w-full sm:w-auto px-7 py-3.5 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] bg-white text-[15px] font-semibold rounded-xl hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                    Get free checklist
                  </button>
                </Link>
              </div>
              <div className="flex items-center gap-2 pt-1 justify-center">
                <svg className="w-5 h-5 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-[14px] font-medium text-gray-700">Private. Secure. Yours.</span>
              </div>
            </div>
            {/* Right: Cropped woman image (no baked text) */}
            <div className="order-1 md:order-2">
              <img
                src="/images/hero-woman-cropped.jpg"
                alt="Woman thinking about questions to ask at her next oncology appointment"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS BAR */}
      <section className="py-10 px-6 md:px-12 lg:px-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[18px] md:text-[24px] font-bold text-gray-900 text-center mb-8">
            MyHealthCanvas helps you feel more prepared, less overwhelmed.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
            <div className="text-center space-y-2">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-gray-800">Capture what matters</h3>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Keep track of your questions, symptoms, medications and care notes in one place.</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg className="w-7 h-7 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-gray-800">Prepare with confidence</h3>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Walk into appointments knowing you've covered what's important.</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg className="w-7 h-7 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-gray-800">Have better conversations</h3>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Stay focused, ask the right questions and understand your care.</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-gray-800">Feel more in control</h3>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Reduce stress and feel empowered in your cancer journey.</p>
            </div>
            <div className="text-center space-y-2 col-span-2 md:col-span-1">
              <div className="w-10 h-10 mx-auto flex items-center justify-center">
                <svg className="w-7 h-7 text-[oklch(0.55_0.15_195)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-[13px] md:text-[14px] font-bold text-gray-800">Private. Secure. Yours.</h3>
              <p className="text-[12px] text-gray-500 leading-[1.5]">Your information stays private. No one sees your data, unless you share it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* REAL VOICES - Trust section with product context */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-[24px] md:text-[32px] font-bold text-gray-900">Real voices from people using MyHealthCanvas</h2>
            <p className="text-[16px] text-gray-500 leading-[1.6]">Patients, caregivers and clinicians describe how the appointment companion helps organise questions, symptoms and priorities before cancer care appointments.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Patient voice */}
            <div className="p-6 bg-white rounded-xl border border-gray-100 space-y-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-wider font-bold" style={{ color: 'oklch(0.55 0.15 195)' }}>Outcome: Better Question Preparation</p>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[18px]" style={{ backgroundColor: 'oklch(0.95 0.03 195)' }}>
                <span aria-hidden="true">💙</span>
              </div>
              <p className="text-[15px] text-gray-600 leading-[1.8] italic">
                "After diagnosis, it's an avalanche of emails, letters, phone calls. MyHealthCanvas helps me organise my key information — especially the questions for my oncologist — so I never forget anything."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">Cancer patient, 58 · Switzerland</p>
            </div>

            {/* Caregiver voice */}
            <div className="p-6 bg-white rounded-xl border border-gray-100 space-y-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-wider font-bold" style={{ color: 'oklch(0.55 0.15 195)' }}>Outcome: Reduced Caregiver Admin Burden</p>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[18px]" style={{ backgroundColor: 'oklch(0.95 0.03 300)' }}>
                <span aria-hidden="true">🤝</span>
              </div>
              <p className="text-[15px] text-gray-600 leading-[1.8] italic">
                "My wife was in pain before treatment started. I had to take care of a mountain of admin. MyHealthCanvas helped us think through our priorities and start to plan for a better future."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">Caregiver, 64 · UK</p>
            </div>

            {/* Clinician voice */}
            <div className="p-6 bg-white rounded-xl border border-[oklch(0.55_0.15_195)]/30 space-y-4 shadow-sm">
              <p className="text-[11px] uppercase tracking-wider font-bold" style={{ color: 'oklch(0.55 0.15 195)' }}>Outcome: Improved Appointment Communication</p>
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-[18px]" style={{ backgroundColor: 'oklch(0.95 0.05 195)' }}>
                <span aria-hidden="true">🩺</span>
              </div>
              <p className="text-[15px] text-gray-600 leading-[1.8] italic">
                "Some of my patients bring their MyHealthCanvas to appointments so they don't forget questions. Having a standard template is much easier for me to scan than fragmented records."
              </p>
              <p className="text-[13px] text-gray-400 font-medium">Oncologist, 38 · Switzerland</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW PATIENTS ACTUALLY USE MYHEALTHCANVAS - Habit loop visualization */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f9f9f7' }}>
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

      {/* IS MYHEALTHCANVAS RIGHT FOR ME? */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Is MyHealthCanvas right for me?</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-semibold text-gray-800">Newly Diagnosed</p>
              <p className="text-[20px] font-bold text-[oklch(0.55_0.15_195)]">Yes</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-semibold text-gray-800">Starting Treatment</p>
              <p className="text-[20px] font-bold text-[oklch(0.55_0.15_195)]">Yes</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-semibold text-gray-800">Caregiver</p>
              <p className="text-[20px] font-bold text-[oklch(0.55_0.15_195)]">Yes</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-semibold text-gray-800">Long-Term Survivor</p>
              <p className="text-[20px] font-bold text-[oklch(0.55_0.15_195)]">Yes</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-semibold text-gray-800">Looking for Medical Advice</p>
              <p className="text-[20px] font-bold text-gray-400">No</p>
              <p className="text-[13px] text-gray-500">Talk to your clinicians.</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-2">
              <p className="text-[15px] font-semibold text-gray-800">Looking for Emergency Help</p>
              <p className="text-[20px] font-bold text-gray-400">No</p>
              <p className="text-[13px] text-gray-500">Contact emergency services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* THREE NAVIGATION CARDS - Support pathways */}
      <section className="py-12 px-6 md:px-12 lg:px-24 relative z-20" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">How can we help you today?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 - Patient */}
            <Link href="/first-30-days-after-diagnosis" onClick={() => trackClick("card_patient")}>
              <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/icon-patient-eXQQP5Wq7PFqpmQg342FJV.png" alt="Heart in hands" className="w-16 h-16 mx-auto object-contain" />
                <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  I'm the Patient
                </h3>
                <p className="text-[15px] text-gray-500 leading-[1.6]">
                  Your first 30 days after cancer diagnosis — one step at a time, at your own pace.
                </p>
                <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                  Read the Guide →
                </p>
              </div>
            </Link>

            {/* Card 2 - Caregiver */}
            <Link href="/caregivers" onClick={() => trackClick("card_caregiver")}>
              <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/icon-caregiver-Af6MngKWcDvEDEM8k4VTB8.png" alt="Hands reaching" className="w-16 h-16 mx-auto object-contain" />
                <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  I'm the Caregiver
                </h3>
                <p className="text-[15px] text-gray-500 leading-[1.6]">
                  Practical tools and advice for cancer caregivers, partners, and family members.
                </p>
                <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                  Caregiver Tools →
                </p>
              </div>
            </Link>

            {/* Card 3 - Questions */}
            <Link href="/questions" onClick={() => trackClick("card_questions")}>
              <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
                <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/icon-library-NkRX6LRemFrv7eSGRma3aF.png" alt="Open book" className="w-16 h-16 mx-auto object-contain" />
                <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  Questions to Ask
                </h3>
                <p className="text-[15px] text-gray-500 leading-[1.6]">
                  20+ curated questions from top cancer centres to bring to your next appointment.
                </p>
                <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                  View Questions →
                </p>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* LEAD MAGNET - 21 Questions Checklist */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#f9f9f7' }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">
            21 Questions to Ask at Your Next Oncology Appointment
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7] max-w-xl mx-auto">
            A calm, practical checklist you can take with you. Covers diagnosis, treatment, side effects, and what to expect next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link href="/oncology-appointment-checklist" onClick={() => trackClick("homepage_checklist_cta")}>
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

      {/* PRODUCT SECTION - Moved lower, compassionate framing */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FDFCF8' }}>
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
      <section className="py-12 px-6" style={{ backgroundColor: '#f9f9f7' }}>
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
