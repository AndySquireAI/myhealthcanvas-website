import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="MyHealthCanvas - Questions to ask my oncologist | Cancer diagnosis and treatment notes"
        description="Newly diagnosed with breast, lung, bowel or prostate cancer? MyHealthCanvas helps you collect questions for your oncologist, track symptoms and prepare for every appointment. From £19."
        keywords="newly diagnosed cancer, questions to ask oncologist, cancer diagnosis checklist, breast cancer questions, lung cancer questions, bowel cancer questions, prostate cancer questions, cancer treatment notes, cancer patient planner, caregiver cancer support"
        canonicalPath="/"
      />

      {/* HERO - Focused on the immediate need based on keywords */}
      <section className="relative w-full overflow-hidden">
        {/* Full image - subtle background */}
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/safe-harbor-v7-1-jJWaWcTRMXV4RKMJSvqHQv.png"
          alt="Cancer patient and caregiver preparing questions for oncologist appointment with MyHealthCanvas"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-30 pointer-events-none"
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, #FDFCF8 0%, rgba(253, 252, 248, 0.8) 50%, #FDFCF8 100%)',
          }}
        />

        {/* Hero copy centered and highly visible */}
        <div className="relative z-10 pt-20 pb-12 md:pt-32 md:pb-20 px-6 text-center max-w-4xl mx-auto space-y-8">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
            Just Diagnosed? Start Here.
          </p>
          <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-bold text-gray-900 leading-[1.2] tracking-tight">
            The questions you need to ask your{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              oncologist.
            </span>
          </h1>
          <p className="text-[18px] md:text-[22px] text-gray-600 leading-[1.6] max-w-2xl mx-auto font-light">
            Don't let the first 30 days overwhelm you. We've curated the most important questions from the world's top cancer centres so you can arrive prepared.
          </p>
          
          {/* Immediate Hooks to deeper content */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Link href="/questions">
              <button className="w-full sm:w-auto px-8 py-4 bg-[oklch(0.55_0.15_195)] text-white text-[16px] font-semibold rounded-xl hover:bg-[oklch(0.50_0.15_195)] transition-colors shadow-md hover:shadow-lg">
                View the 20+ Questions
              </button>
            </Link>
            <Link href="/first-30-days-after-diagnosis">
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] bg-white text-[16px] font-semibold rounded-xl hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                Guide: The First 30 Days
              </button>
            </Link>
          </div>
          
          <p className="text-[14px] text-gray-400 font-light pt-4">
            Created by a 2× cancer survivor. Private. Never replaces your doctors.
          </p>
        </div>
      </section>

      {/* THREE NAVIGATION CARDS - Moved up to capture attention fast */}
      <section className="py-12 px-6 md:px-12 lg:px-24 relative z-20" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Patient */}
          <Link href="/first-30-days-after-diagnosis">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/icon-patient-eXQQP5Wq7PFqpmQg342FJV.png" alt="Heart in hands" className="w-16 h-16 mx-auto object-contain" />
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                I'm the Patient
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                Your first 30 days after cancer diagnosis - one step at a time, at your own pace.
              </p>
              <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                Read the Guide →
              </p>
            </div>
          </Link>

          {/* Card 2 - Caregiver */}
          <Link href="/caregivers">
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

          {/* Card 3 - Product */}
          <Link href="/myhealthcanvas">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#E1D7EB]/60 shadow-sm" style={{ backgroundColor: '#FFFFFF' }}>
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/icon-library-NkRX6LRemFrv7eSGRma3aF.png" alt="Open book" className="w-16 h-16 mx-auto object-contain" />
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                MyHealthCanvas
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                Get our printable 1-page or 2-page cancer plan to organize your treatment notes.
              </p>
              <p className="text-[14px] font-bold text-[oklch(0.55_0.15_195)]">
                View Plans →
              </p>
            </div>
          </Link>

        </div>
      </section>

      {/* VALUE PROPOSITION + PURCHASE CTAs (Moved down) */}
      <section className="py-16 px-6" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-[28px] md:text-[36px] font-bold text-gray-900 leading-[1.3]">
            Organise your health story.
          </h2>
          <p className="text-[18px] md:text-[20px] text-gray-600 leading-[1.7] font-light max-w-2xl mx-auto">
            Whether you're facing breast, lung, bowel, prostate cancer or lymphoma — choose your plan and start writing down your questions and treatment notes instantly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link href="/myhealthcanvas#pricing">
              <button
                data-gtag-purchase
                data-plan="essential"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-[16px] font-semibold transition-all duration-300 hover:shadow-lg border-2"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: 'oklch(0.45 0.15 195)',
                  borderColor: 'oklch(0.55 0.15 195)',
                }}
              >
                Get my 1-page cancer plan - £19
              </button>
            </Link>
            <Link href="/myhealthcanvas#pricing">
              <button
                data-gtag-purchase
                data-plan="complete"
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-[16px] font-semibold text-white transition-all duration-300 hover:shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))',
                }}
              >
                Get the complete 2-page cancer plan - £27
              </button>
            </Link>
          </div>

          {/* Trust Micro-Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[20px]">🎓</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Harvard Medical School<br/><span className="font-light text-gray-500">Best Overall Capstone 2026</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[20px]">🏛️</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Oxford Saïd Business School<br/><span className="font-light text-gray-500">AI Programme Distinction</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[20px]">🏥</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Bethesda Alterszentren Basel<br/><span className="font-light text-gray-500">Home Companion Pilot Partner</span></span>
            </div>
            <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-sm" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[20px]">🔒</span>
              <span className="text-[14px] text-gray-700 leading-tight text-left font-medium">Zero data stored on servers<br/><span className="font-light text-gray-500">Your health data stays on your device</span></span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
