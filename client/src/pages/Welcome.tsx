import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="Questions to Ask Your Oncologist | MyHealthCanvas"
        description="Prepare for your oncology appointments with confidence. Organise questions, symptoms and treatment notes so you never miss important decisions during cancer care."
        keywords="questions to ask oncologist, cancer appointment checklist, prepare for chemotherapy consultation, cancer caregiver support, organise cancer treatment notes, newly diagnosed cancer help"
        canonicalPath="/"
      />

      <section className="relative w-full overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/safe-harbor-v7-1-jJWaWcTRMXV4RKMJSvqHQv.png"
          alt="Cancer patient and caregiver preparing for an oncology appointment"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, #FDFCF8 0%, rgba(253, 252, 248, 0.84) 50%, #FDFCF8 100%)' }}
        />

        <div className="relative z-10 pt-20 pb-12 md:pt-32 md:pb-20 px-6 text-center max-w-4xl mx-auto space-y-8">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            Built by a 2× cancer survivor
          </p>

          <h1 className="text-[34px] md:text-[52px] lg:text-[60px] font-bold text-gray-900 leading-[1.15] tracking-tight">
            Prepare for your next oncology appointment with confidence.
          </h1>

          <p className="text-[19px] md:text-[24px] text-gray-700 leading-[1.6] max-w-3xl mx-auto font-light">
            Organise your questions, treatment notes, medications and symptoms — so you never leave an oncology appointment wishing you had asked something important.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/questions">
              <button className="w-full sm:w-auto px-8 py-4 bg-[oklch(0.55_0.15_195)] text-white text-[16px] font-semibold rounded-xl hover:bg-[oklch(0.50_0.15_195)] transition-colors shadow-md hover:shadow-lg">
                Get Free Oncology Questions
              </button>
            </Link>
            <Link href="/myhealthcanvas#pricing">
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] bg-white text-[16px] font-semibold rounded-xl hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                View Cancer Appointment Plans
              </button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2 text-[14px] text-gray-500">
            <span>✓ Private by design</span>
            <span>✓ No medical jargon</span>
            <span>✓ For patients and caregivers</span>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 md:px-12 lg:px-24 relative z-20" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/questions">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm bg-white">
              <div className="text-4xl">🩺</div>
              <h3 className="text-[22px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                Questions for Your Oncologist
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">
                Start with the most important questions to ask about diagnosis, treatment options, side effects and prognosis.
              </p>
              <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                Free starter questions →
              </p>
            </div>
          </Link>

          <Link href="/first-30-days-after-diagnosis">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm bg-white">
              <div className="text-4xl">📘</div>
              <h3 className="text-[22px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                First 30 Days Guide
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">
                A calmer, step-by-step guide for navigating the shock and complexity of a new cancer diagnosis.
              </p>
              <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                Read the guide →
              </p>
            </div>
          </Link>

          <Link href="/myhealthcanvas">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm bg-white">
              <div className="text-4xl">🗂️</div>
              <h3 className="text-[22px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                Organise Your Cancer Journey
              </h3>
              <p className="text-[15px] text-gray-600 leading-[1.7]">
                Keep treatment notes, medications, symptoms and appointment questions together in one structured place.
              </p>
              <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                View patient plans →
              </p>
            </div>
          </Link>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-[30px] md:text-[40px] font-bold text-gray-900 leading-[1.25]">
            Cancer care is overwhelming. Your appointments should not be.
          </h2>

          <p className="text-[18px] md:text-[21px] text-gray-600 leading-[1.8] font-light max-w-2xl mx-auto">
            MyHealthCanvas helps patients and caregivers prepare for oncology consultations, organise information, and reduce the stress of remembering everything during treatment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/questions">
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-[16px] font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))' }}
              >
                Start with Free Questions
              </button>
            </Link>

            <Link href="/myhealthcanvas#pricing">
              <button
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 hover:shadow-lg border-2"
                style={{ backgroundColor: '#FFFFFF', color: 'oklch(0.45 0.15 195)', borderColor: 'oklch(0.55 0.15 195)' }}
              >
                Explore Printable Plans
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm bg-white border border-[#E1D7EB40]">
              <span className="text-[20px]">🎓</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Harvard Medical School<br/><span className="font-light text-gray-500">Best Overall Capstone 2026</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm bg-white border border-[#E1D7EB40]">
              <span className="text-[20px]">🏛️</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Oxford Saïd Business School<br/><span className="font-light text-gray-500">AI Programme Distinction</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm bg-white border border-[#E1D7EB40]">
              <span className="text-[20px]">🏥</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Pilot tested with care organisations<br/><span className="font-light text-gray-500">Designed with patients and caregivers</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm bg-white border border-[#E1D7EB40]">
              <span className="text-[20px]">🔒</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Privacy-first design<br/><span className="font-light text-gray-500">Your health information stays under your control</span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
