import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Welcome() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="MyHealthCanvas - You Don't Have to Carry This Alone"
        description="A cancer diagnosis feels like a storm. We created MyHealthCanvas to be the shelter. Whether you are the one holding the diagnosis or the one holding the hand of a loved one, we provide the questions, resources, and community to help you find your way back to yourself."
        keywords="cancer support, cancer diagnosis help, questions to ask oncologist, cancer patient resources, caregiver support cancer, cancer family support"
        canonicalPath="/"
      />

      {/* HERO - Safe Harbor with approved cottage homecoming image */}
      <section className="relative min-h-screen flex flex-col justify-end items-center pb-8 md:pb-12">
        {/* Background image - mobile centers on doorway, desktop covers full */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/safe-harbor-v7-1-jJWaWcTRMXV4RKMJSvqHQv.png)',
            backgroundPosition: 'center 30%',
          }}
        />
        {/* Subtle vignette + bottom gradient for text/button legibility */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.08) 40%, rgba(0,0,0,0.35) 75%, rgba(0,0,0,0.65) 100%)',
          }}
        />

        {/* Content overlay - positioned at bottom */}
        <div className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center space-y-5">
          
          {/* Main heading */}
          <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.2] tracking-tight drop-shadow-lg">
            "You don't have to carry this alone"
          </h1>

          {/* Survivor's Welcome copy - semi-transparent warm panel */}
          <div 
            className="max-w-xl mx-auto rounded-xl px-6 py-5 md:px-8 md:py-6"
            style={{ backgroundColor: 'rgba(253, 252, 248, 0.88)', backdropFilter: 'blur(8px)' }}
          >
            <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.8]">
              A cancer diagnosis feels like a storm. We created MyHealthCanvas to be the shelter.
            </p>
            <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.8] mt-3">
              Whether you are the one holding the diagnosis or the one holding the hand of a loved one, you are now part of a team. From the first 30 days of shock to the complexities of treatment, we provide the questions, the resources, and the community to help you find your way back to yourself.
            </p>
            <p className="text-[16px] md:text-[17px] text-gray-800 font-medium leading-[1.8] mt-3 italic">
              Take a breath. Let us help with the rest.
            </p>
          </div>

          {/* Macmillan Video - soft frame */}
          <div className="pt-2">
            <p className="text-[15px] text-white/80 italic mb-3 drop-shadow-md">
              A moment for you before we begin...
            </p>
            <div className="max-w-[560px] mx-auto rounded-xl overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
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
          <p className="text-[18px] md:text-[22px] text-white font-medium pt-4 drop-shadow-md">
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
          <Link href="/myhealthcanvas/advocacy">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg border border-[#E1D7EB]/40" style={{ backgroundColor: 'rgba(253, 252, 248, 0.95)' }}>
              <div className="text-4xl">🤝</div>
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                I'm the Caregiver
              </h3>
              <p className="text-[15px] text-gray-500 leading-[1.6]">
                Practical tools and guidance for caregivers and family.
              </p>
              <p className="text-[14px] font-medium text-[oklch(0.55_0.15_195)] opacity-0 group-hover:opacity-100 transition-opacity">
                Go to Advocacy →
              </p>
            </div>
          </Link>

          {/* Card 3 - E-Library */}
          <Link href="/questions">
            <div className="group cursor-pointer rounded-xl p-8 text-center space-y-4 transition-all duration-300 hover:shadow-lg border border-[#E1D7EB]/40" style={{ backgroundColor: 'rgba(253, 252, 248, 0.95)' }}>
              <div className="text-4xl">📚</div>
              <h3 className="text-[20px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                I need the E-Library
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
        <p className="text-center text-[14px] text-gray-400 mt-10">
          Created by a 2x cancer survivor. Private. Free. Never replaces your doctors.
        </p>
      </section>

    </div>
  );
}
