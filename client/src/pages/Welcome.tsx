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

      {/* HERO - Safe Harbor image with just the heading overlaid */}
      <section className="relative w-full" style={{ minHeight: '70vh' }}>
        {/* Background image - mobile centers on doorway */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/safe-harbor-v7-1-jJWaWcTRMXV4RKMJSvqHQv.png)',
            backgroundPosition: 'center 30%',
          }}
        />
        {/* Subtle bottom gradient only - keep the image visible */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 85%, rgba(0,0,0,0.6) 100%)',
          }}
        />

        {/* Just the heading - positioned at the bottom of the image */}
        <div className="absolute bottom-8 md:bottom-12 left-0 right-0 z-10 px-6 text-center">
          <h1 className="text-[26px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.2] tracking-tight drop-shadow-lg">
            "You don't have to carry this alone"
          </h1>
        </div>
      </section>

      {/* SURVIVOR'S WELCOME - Copy card and video BELOW the image */}
      <section className="py-12 md:py-16 px-6" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-2xl mx-auto text-center space-y-8">

          {/* Survivor's Welcome copy */}
          <div className="space-y-4">
            <p className="text-[16px] md:text-[17px] text-gray-700 leading-[1.8]">
              A cancer diagnosis feels like a storm. We created MyHealthCanvas to be the shelter.
            </p>
            <p className="text-[16px] md:text-[17px] text-gray-700 leading-[1.8]">
              Whether you are the one holding the diagnosis or the one holding the hand of a loved one, you are now part of a team. From the first 30 days of shock to the complexities of treatment, we provide the questions, the resources, and the community to help you find your way back to yourself.
            </p>
            <p className="text-[17px] md:text-[18px] text-gray-800 font-medium leading-[1.8] italic">
              Take a breath. Let us help with the rest.
            </p>
          </div>

          {/* Macmillan Video - soft frame */}
          <div>
            <p className="text-[15px] text-gray-500 italic mb-4">
              A moment for you before we begin...
            </p>
            <div className="max-w-[560px] mx-auto rounded-xl overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
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
          <p className="text-[20px] md:text-[24px] text-gray-800 font-medium pt-4">
            When you are ready, how can we help today?
          </p>

        </div>
      </section>

      {/* THREE NAVIGATION CARDS */}
      <section className="pb-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: '#FDFCF8' }}>
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
