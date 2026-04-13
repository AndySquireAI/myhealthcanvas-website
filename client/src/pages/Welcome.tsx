import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="MyHealthCanvas - Your Personal Health Plan"
        description="When you or someone you love gets a diagnosis, MyHealthCanvas gives you a clear, organised health plan you can actually use. Created by patients. Backed by clinical expertise. Yours in minutes."
        keywords="cancer support, cancer diagnosis help, health plan, patient health canvas, caregiver support cancer, cancer family support, personalised health plan"
        canonicalPath="/"
      />

      {/* HERO - Safe Harbor image with heading overlaid */}
      <section className="relative w-full">
        {/* Full image - no cropping on any device */}
        <img 
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/safe-harbor-v7-1-jJWaWcTRMXV4RKMJSvqHQv.png"
          alt="A warm cottage scene - a patient arriving home to a welcoming family, district nurse, and comfort"
          className="w-full h-auto block"
          style={{ minHeight: '50vh', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        {/* Subtle bottom gradient only - keep the image visible */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0.45) 75%, rgba(0,0,0,0.7) 100%)',
          }}
        />

        {/* Hero copy overlaid at the bottom of the image */}
        <div className="absolute bottom-6 md:bottom-10 left-0 right-0 z-10 px-6 text-center">
          <h1 className="text-[22px] md:text-[36px] lg:text-[42px] font-bold text-white leading-[1.3] tracking-tight drop-shadow-lg max-w-3xl mx-auto">
            When you or someone you love gets a diagnosis — the paperwork, questions and decisions feel overwhelming.
          </h1>
        </div>
      </section>

      {/* VALUE PROPOSITION + PURCHASE CTAs */}
      <section className="py-10 md:py-14 px-6" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">

          <p className="text-[18px] md:text-[21px] text-gray-800 leading-[1.7] font-medium">
            MyHealthCanvas gives you a clear, organised health plan you can actually use.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.7] font-light">
            Created by patients. Backed by clinical expertise. Yours in minutes.
          </p>

          {/* Sub-headline */}
          <p className="text-[15px] md:text-[17px] text-gray-500 leading-[1.6] italic pt-2">
            Choose your plan — one page or two — and get your personalised health canvas delivered instantly.
          </p>

          {/* CTA Buttons - both above fold, stacked on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
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
                Get my 1-page health plan — £19
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
                Get the complete 2-page plan — £27
              </button>
            </Link>
          </div>

          {/* Trust Micro-Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 max-w-xl mx-auto">
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[18px]">🎓</span>
              <span className="text-[13px] text-gray-600 leading-tight text-left">Harvard Medical School — Best Overall Capstone 2026</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[18px]">🏛️</span>
              <span className="text-[13px] text-gray-600 leading-tight text-left">Oxford Saïd Business School — AI Programme Distinction</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[18px]">🏥</span>
              <span className="text-[13px] text-gray-600 leading-tight text-left">Bethesda Alterzentren Basel — Home Companion Pilot Partner</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E1D7EB40' }}>
              <span className="text-[18px]">🔒</span>
              <span className="text-[13px] text-gray-600 leading-tight text-left">Zero data stored on our servers — your health data stays on your device</span>
            </div>
          </div>

        </div>
      </section>

      {/* THREE NAVIGATION CARDS */}
      <section className="pb-10 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        {/* Transition text */}
        <p className="text-[19px] md:text-[22px] text-gray-800 font-medium text-center mb-8">
          When you are ready, how can we help today?
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Patient */}
          <Link href="/first-30-days-after-diagnosis">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg border border-[#E1D7EB]/40" style={{ backgroundColor: '#FFFFFF' }}>
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/icon-patient-eXQQP5Wq7PFqpmQg342FJV.png" alt="Heart in hands" className="w-16 h-16 mx-auto object-contain" />
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                I'm the Patient
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                Your first 30 days - one step at a time, at your own pace.
              </p>
              <p className="text-[14px] font-medium text-[oklch(0.55_0.15_195)] opacity-0 group-hover:opacity-100 transition-opacity">
                Go to First 30 Days →
              </p>
            </div>
          </Link>

          {/* Card 2 - Caregiver */}
          <Link href="/caregivers">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg border border-[#E1D7EB]/40" style={{ backgroundColor: '#FFFFFF' }}>
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/icon-caregiver-Af6MngKWcDvEDEM8k4VTB8.png" alt="Hands reaching" className="w-16 h-16 mx-auto object-contain" />
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                I'm the Caregiver
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                Practical tools and guidance for caregivers and family.
              </p>
              <p className="text-[14px] font-medium text-[oklch(0.55_0.15_195)] opacity-0 group-hover:opacity-100 transition-opacity">
                Go to Caregivers →
              </p>
            </div>
          </Link>

          {/* Card 3 - E-Library */}
          <Link href="/questions">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg border border-[#E1D7EB]/40" style={{ backgroundColor: '#FFFFFF' }}>
              <img src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/icon-library-NkRX6LRemFrv7eSGRma3aF.png" alt="Open book" className="w-16 h-16 mx-auto object-contain" />
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                Questions & Resources
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                20+ curated questions from the world's top cancer centres.
              </p>
              <p className="text-[14px] font-medium text-[oklch(0.55_0.15_195)] opacity-0 group-hover:opacity-100 transition-opacity">
                Go to Resources →
              </p>
            </div>
          </Link>

        </div>

        {/* Trust signal */}
        <p className="text-center text-[14px] text-gray-400 mt-8">
          Created by a 2× cancer survivor. Private. Never replaces your doctors.
        </p>
      </section>

    </div>
  );
}
