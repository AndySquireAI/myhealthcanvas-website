import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function MyHealthCanvasAdvocacy() {
  return (
    <div className="min-h-screen flex flex-col relative" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="Advocacy Partnerships | MyHealthCanvas"
        description="Partnership opportunities for patient advocacy organizations. Revenue sharing. No patient data access."
        keywords="patient advocacy, charity partnership, advocacy collaboration"
        canonicalPath="/myhealthcanvas/advocacy"
      />

      {/* This page is NOT for patients in distress */}
      {/* More formal. Shorter sentences. No emotional language. */}

      {/* Full-page background - circle of patients finding comfort */}
      <div 
        className="absolute top-0 left-0 right-0 h-screen bg-no-repeat opacity-45 md:opacity-50 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/bg-advocacy-circle.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Section 1 - Headline - BOLD like AAA page */}
      <section className="py-20 px-6 md:px-12 lg:px-24 min-h-[50vh] flex flex-col justify-center relative z-10">
        <div className="max-w-md mx-auto text-center space-y-8">
          
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2]">
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              Advocacy
            </span>
            {" "}Partnerships
          </h1>
          
          <p className="text-[17px] text-gray-600 leading-[1.6]">
            Partnership opportunities for patient advocacy organizations.
          </p>
          
        </div>
      </section>

      {/* Section 2 - How it works */}
      <section className="py-16 px-6 md:px-12 lg:px-24 relative z-10" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-lg mx-auto space-y-8">
          
          <div className="p-6 border border-gray-200 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="text-[18px] font-bold text-gray-800 mb-2">Revenue sharing</h3>
            <p className="text-[15px] text-gray-600 leading-[1.6]">
              50% of referral sales. Unrestricted use.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="text-[18px] font-bold text-gray-800 mb-2">No data access</h3>
            <p className="text-[15px] text-gray-600 leading-[1.6]">
              We do not collect patient data. Templates are printable.
            </p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg" style={{ backgroundColor: '#FFFFFF' }}>
            <h3 className="text-[18px] font-bold text-gray-800 mb-2">Non-clinical</h3>
            <p className="text-[15px] text-gray-600 leading-[1.6]">
              Planning tool only. Not medical advice.
            </p>
          </div>
          
        </div>
      </section>

      {/* Section 3 - Contact */}
      <section className="py-20 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-md mx-auto text-center space-y-8">
          
          <p className="text-[17px] text-gray-600">
            Contact us to discuss partnership.
          </p>
          
          <a 
            href="mailto:andy@patientcentriccare.ai"
            className="inline-block px-10 py-4 bg-[oklch(0.55_0.15_195)] text-white text-[17px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors"
          >
            Contact us
          </a>
          
        </div>
      </section>

      {/* FOOTER - Minimal */}
      <footer className="py-8 border-t border-gray-100 mt-auto relative z-10">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
              <Link href="/myhealthcanvas" className="hover:text-gray-600">
                Templates
              </Link>
              <Link href="/impressum" className="hover:text-gray-600">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
