import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function MyHealthCanvasAdvocacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Advocacy Partnerships | MyHealthCanvas"
        description="Partnership opportunities for patient advocacy organizations. Revenue sharing. No patient data access."
        keywords="patient advocacy, charity partnership, advocacy collaboration"
        canonicalPath="/myhealthcanvas/advocacy"
      />

      {/* This page is NOT for patients in distress */}
      {/* More formal. Shorter sentences. No emotional language. */}

      {/* Section 1 - Headline */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-md mx-auto text-center space-y-8">
          
          <h1 className="text-[28px] md:text-3xl font-light text-gray-900 leading-[1.3]">
            Advocacy Partnerships
          </h1>
          
          <p className="text-[17px] text-gray-600 leading-[1.6]">
            Partnership opportunities for patient advocacy organizations.
          </p>
          
        </div>
      </section>

      {/* Section 2 - How it works */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-lg mx-auto space-y-8">
          
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-[17px] font-medium text-gray-800 mb-2">Revenue sharing</h3>
            <p className="text-[15px] text-gray-600 leading-[1.6]">
              50% of referral sales. Unrestricted use.
            </p>
          </div>
          
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-[17px] font-medium text-gray-800 mb-2">No data access</h3>
            <p className="text-[15px] text-gray-600 leading-[1.6]">
              We do not collect patient data. Templates are printable.
            </p>
          </div>
          
          <div className="p-6 bg-white border border-gray-200 rounded-lg">
            <h3 className="text-[17px] font-medium text-gray-800 mb-2">Non-clinical</h3>
            <p className="text-[15px] text-gray-600 leading-[1.6]">
              Planning tool only. Not medical advice.
            </p>
          </div>
          
        </div>
      </section>

      {/* Section 3 - Contact */}
      <section className="py-20 px-6 md:px-12 lg:px-24">
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
      <footer className="py-8 border-t border-gray-100 mt-auto">
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
