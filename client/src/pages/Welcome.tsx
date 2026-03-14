import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="MyHealthCanvas - You're Home Now"
        description="A cancer diagnosis is a trauma, not just a medical event. We've curated the tools and questions you need so you don't have to figure it all out alone. Created by a 2x cancer survivor."
        keywords="cancer support, cancer diagnosis help, questions to ask oncologist, cancer patient resources, caregiver support cancer"
        canonicalPath="/"
      />

      {/* HERO - Safe Harbor with porch background */}
      <section className="relative min-h-screen flex flex-col justify-center items-center px-6">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/safe-harbor-porch-2VabP4afavmmDynRpeSjTE.webp)',
          }}
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
          
          {/* Main heading */}
          <h1 className="text-[36px] md:text-5xl lg:text-6xl font-bold text-white leading-[1.2] tracking-tight drop-shadow-lg">
            Take a breath.
            <br />
            <span className="text-[#E8F3F3]">You're in a safe place.</span>
          </h1>

          {/* Sub-text */}
          <p className="text-[18px] md:text-[20px] text-white/90 leading-[1.7] max-w-lg mx-auto drop-shadow-md">
            A cancer diagnosis is a trauma, not just a medical event. We've curated the tools and questions you need so you don't have to figure it all out alone.
          </p>

          {/* Macmillan Video - soft frame */}
          <div className="pt-4">
            <p className="text-[16px] text-white/70 italic mb-4">
              A moment for you before we begin...
            </p>
            <div className="max-w-[640px] mx-auto rounded-xl overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/XWQtsYgrVa0?rel=0"
                  title="Macmillan Emotional Support"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Transition text */}
          <p className="text-[20px] md:text-[24px] text-white font-medium pt-6 drop-shadow-md">
            When you are ready, how can we help today?
          </p>

        </div>
      </section>

      {/* THREE NAVIGATION CARDS */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Patient */}
          <Link href="/first-30-days-after-diagnosis">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg border border-[#E1D7EB]/40" style={{ backgroundColor: 'rgba(253, 252, 248, 0.95)' }}>
              <div className="text-4xl">💛</div>
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                I have just been diagnosed
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                Your first 30 days - one step at a time, at your own pace.
              </p>
              <p className="text-[14px] font-medium text-[oklch(0.55_0.15_195)] opacity-0 group-hover:opacity-100 transition-opacity">
                Start here →
              </p>
            </div>
          </Link>

          {/* Card 2 - Caregiver */}
          <Link href="/myhealthcanvas/advocacy">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg border border-[#E1D7EB]/40" style={{ backgroundColor: 'rgba(253, 252, 248, 0.95)' }}>
              <div className="text-4xl">🤝</div>
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                I am supporting a loved one
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                Practical tools and guidance for caregivers and family.
              </p>
              <p className="text-[14px] font-medium text-[oklch(0.55_0.15_195)] opacity-0 group-hover:opacity-100 transition-opacity">
                Caregiver resources →
              </p>
            </div>
          </Link>

          {/* Card 3 - Appointment prep */}
          <Link href="/questions">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg border border-[#E1D7EB]/40" style={{ backgroundColor: 'rgba(253, 252, 248, 0.95)' }}>
              <div className="text-4xl">📋</div>
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                I need to prepare for an appointment
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                20+ curated questions from the world's top cancer centres.
              </p>
              <p className="text-[14px] font-medium text-[oklch(0.55_0.15_195)] opacity-0 group-hover:opacity-100 transition-opacity">
                View questions →
              </p>
            </div>
          </Link>

        </div>

        {/* Trust signal */}
        <p className="text-center text-[14px] text-gray-400 mt-10">
          Created by a 2x cancer survivor. Private. Free. Never replaces your doctors.
        </p>
      </section>

    </div>
  );
}
