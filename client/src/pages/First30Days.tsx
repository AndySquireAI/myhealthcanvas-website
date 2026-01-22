import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function First30Days() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="The First 30 Days | MyHealthCanvas"
        description="The first 30 days are for surviving. You do not need to organize, decide, or understand anything yet."
        keywords="first 30 days after diagnosis, surviving diagnosis, patient support"
        canonicalPath="/first-30-days-after-diagnosis"
      />

      {/* Section 1 - Above the fold */}
      {/* One idea per screen. This page should feel empty on purpose. */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-md mx-auto text-center space-y-12">
          
          {/* Headline */}
          <h1 className="text-[28px] md:text-4xl lg:text-5xl font-light text-gray-900 leading-[1.3]">
            The first 30 days are for surviving
          </h1>
          
          {/* One sentence only */}
          <p className="text-[19px] md:text-xl text-gray-500 font-light leading-[1.6]">
            You do not need to organize, decide, or understand anything yet.
          </p>
          
        </div>
      </section>

      {/* Section 2 - Do one thing only */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-md mx-auto text-center space-y-8">
          
          {/* Subhead */}
          <h2 className="text-[22px] md:text-2xl font-medium text-gray-800">
            Do one thing only
          </h2>
          
          {/* Single instruction - no bullets, no elaboration */}
          <p className="text-[19px] text-gray-600 leading-[1.6]">
            Put every letter, scan, photo, or email in one place.
          </p>
          
        </div>
      </section>

      {/* Section 3 - Dump vs Delegate - ultra concise */}
      {/* Two cards, no buttons */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Card 1 - Dump */}
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-[18px] font-medium text-gray-800 mb-4">Dump</h3>
              <p className="text-[17px] text-gray-600 leading-[1.6] mb-2">
                Save everything in one folder
              </p>
              <p className="text-[15px] text-gray-400">
                No sorting. No thinking.
              </p>
            </div>
            
            {/* Card 2 - Delegate */}
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-[18px] font-medium text-gray-800 mb-4">Delegate</h3>
              <p className="text-[17px] text-gray-600 leading-[1.6] mb-2">
                Forward everything to someone you trust
              </p>
              <p className="text-[15px] text-gray-400">
                Let them handle it.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      {/* Section 4 - Permission */}
      {/* One line, smaller text. This line is powerful. Don't dilute it. */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[16px] text-gray-500 leading-[1.6]">
            Many people only organize months later. Some never do.
          </p>
        </div>
      </section>

      {/* Single CTA at bottom - quiet */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-md mx-auto text-center">
          <Link href="/myhealthcanvas">
            <button className="px-12 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
              Start with one folder
            </button>
          </Link>
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
