import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="MyHealthCanvas | A Calm Place to Land After Diagnosis"
        description="Save everything. Decide later. You are not behind."
        keywords="diagnosis support, patient support, health documents"
        canonicalPath="/"
      />

      {/* HERO - Ultra sparse, mobile-first */}
      {/* Mobile: 18-19px body, 1.5-1.6 line height, 32-36 char width */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-md mx-auto text-center space-y-16">
          
          {/* Headline - max 8 words */}
          <h1 className="text-[28px] md:text-4xl lg:text-5xl font-light text-gray-900 leading-[1.3] tracking-tight">
            A calm place to land after diagnosis
          </h1>
          
          {/* Subheadline - one sentence, no commas */}
          <p className="text-[19px] md:text-xl text-gray-500 font-light leading-[1.6]">
            Save everything. Decide later. You are not behind.
          </p>
          
          {/* Single primary CTA - quiet, premium */}
          <div className="pt-4 space-y-8">
            <Link href="/myhealthcanvas">
              <button className="w-full md:w-auto px-12 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
                Start with one folder
              </button>
            </Link>
            
            {/* Secondary - text link only, not button */}
            <div>
              <Link href="/caregiver-help" className="text-gray-400 text-[16px] hover:text-gray-600 underline underline-offset-4">
                Or let a caregiver handle this
              </Link>
            </div>
          </div>
          
        </div>
      </section>
      
      {/* No other CTAs above the fold. None. */}
      {/* The homepage should feel like a deep breath, not a brochure. */}
      
      {/* FOOTER - Minimal, footer-only links */}
      <footer className="py-8 border-t border-gray-100 mt-auto">
        <div className="container px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/myhealthcanvas" className="hover:text-gray-600">
                Templates
              </Link>
              <Link href="/myhealthcanvas/advocacy" className="hover:text-gray-600">
                For advocates
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
