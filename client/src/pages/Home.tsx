import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Just Diagnosed with Cancer? What to Do First | MyHealthCanvas"
        description="Newly diagnosed? Organize your thoughts, ask better questions, never forget. Questions to ask your oncologist, what to expect after diagnosis, and a calm place to prepare. Created by a 2× cancer survivor."
        keywords="newly diagnosed cancer, what to do after cancer diagnosis, questions to ask oncologist, cancer diagnosis support, how to prepare for oncologist appointment, what to expect after cancer diagnosis, cancer treatment questions, first oncologist appointment, cancer diagnosis checklist"
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
          
          {/* Headline - matches what patients search */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight">
            Just{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              diagnosed
            </span>
            ?
          </h1>
          
          {/* Core tagline - the value proposition */}
          <p className="text-[22px] md:text-[28px] font-semibold text-gray-800 leading-[1.4]">
            Organize your thoughts. Ask better questions.{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              Never forget.
            </span>
          </p>

          {/* Reassurance */}
          <div className="space-y-4">
            <p className="text-[18px] md:text-xl text-gray-600 font-light leading-[1.6]">
              The world is spinning. We know. This is a calm, private space to help you take the first step.
            </p>
          </div>
          
          {/* Primary CTA */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/first-30-days-after-diagnosis">
              <button className="w-full sm:w-auto px-10 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
                Start with the first 30 days
              </button>
            </Link>
            <a href="#questions">
              <button className="w-full sm:w-auto px-10 py-5 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] text-[18px] font-medium rounded-lg hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                Questions to ask your doctor
              </button>
            </a>
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

      {/* QUESTIONS TO ASK YOUR ONCOLOGIST - actual value content */}
      <section id="questions" className="py-20 px-6 md:px-12 lg:px-24 bg-white scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[26px] md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Questions to ask your{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              oncologist
            </span>
          </h2>
          <p className="text-[17px] text-gray-500 text-center mb-12 max-w-xl mx-auto">
            You don't have to remember everything. Start with these. Add your own. Take this list with you.
          </p>
          
          {/* Question categories */}
          <div className="space-y-12">
            
            {/* Understanding your diagnosis */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">1</span>
                Understanding your diagnosis
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">What type and stage of cancer do I have?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">Has it spread? How do you know?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">Do I need more tests before treatment can begin?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">Can you explain my pathology report in plain language?</li>
              </ul>
            </div>

            {/* Treatment options */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">2</span>
                Treatment options
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">What are my treatment options?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">Which treatment do you recommend and why?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">What are the side effects I should expect?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">How long will treatment last?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">Should I get a second opinion?</li>
              </ul>
            </div>

            {/* Practical & daily life */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-5 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-sm font-bold flex-shrink-0">3</span>
                Practical and daily life
              </h3>
              <ul className="space-y-3 ml-11">
                <li className="text-[16px] text-gray-700 leading-[1.6]">Will I be able to work during treatment?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">What support services are available to me?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">Who do I call if I have symptoms between appointments?</li>
                <li className="text-[16px] text-gray-700 leading-[1.6]">Are there clinical trials I should consider?</li>
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

      {/* YOUR FIRST 30 DAYS CHECKLIST - practical takeaway */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
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
            <div className="p-6 bg-white rounded-lg border border-gray-100">
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
            <div className="p-6 bg-white rounded-lg border border-gray-100">
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
            <div className="p-6 bg-white rounded-lg border border-gray-100">
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
            <div className="p-6 bg-white rounded-lg border border-gray-100">
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
