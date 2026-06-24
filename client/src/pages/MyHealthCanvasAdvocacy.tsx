import { Link, useLocation } from "wouter";
import SEO from "@/components/SEO";
import { trackPagPartnershipClick } from "@/lib/analytics";

export default function MyHealthCanvasAdvocacy() {
  const [, navigate] = useLocation();

  const goToPartnershipForm = () => {
    trackPagPartnershipClick("advocacy_contact_cta");
    navigate("/contact?subject=partnership");
  };

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

      {/* Section 3 - Partnership CTA (prominent conversion block) */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-xl mx-auto text-center">
          <div
            className="rounded-2xl px-8 py-12 md:px-12 md:py-14 shadow-xl"
            style={{ background: "linear-gradient(135deg, #007699 0%, #369994 100%)" }}
          >
            <h2 className="text-[28px] md:text-[36px] font-bold text-white leading-[1.2]">
              Partner with us
            </h2>
            <p className="mt-4 text-[16px] md:text-[18px] text-white/90 leading-[1.6]">
              50% revenue share. No patient data. Printable templates your community can use today.
            </p>

            <button
              type="button"
              onClick={goToPartnershipForm}
              className="mt-8 inline-flex items-center gap-2 px-10 py-5 bg-[#fea821] text-gray-900 text-[18px] font-bold rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 hover:brightness-105"
            >
              Become a partner
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p className="mt-6 text-[14px] text-white/80">
              Prefer email?{" "}
              <a
                href="mailto:andy@patientcentriccare.ai?subject=Advocacy%20Partnership%20Enquiry"
                onClick={() => trackPagPartnershipClick("advocacy_email_link")}
                className="underline font-medium text-white hover:text-[#fea821] transition-colors"
              >
                andy@patientcentriccare.ai
              </a>
            </p>
          </div>
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
