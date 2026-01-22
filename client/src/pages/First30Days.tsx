import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function First30Days() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <SEO
        title="The First 30 Days | MyHealthCanvas"
        description="The first 30 days are for surviving. You do not need to organize, decide, or understand anything yet."
        keywords="first 30 days after diagnosis, surviving diagnosis, patient support"
        canonicalPath="/first-30-days-after-diagnosis"
      />

      {/* Full-page background that extends to the fold */}
      <div 
        className="absolute top-0 left-0 right-0 h-screen bg-no-repeat opacity-60 md:opacity-70 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/bg-first30days-office-v2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Section 1 - Above the fold */}
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-md mx-auto text-center space-y-12">
          
          {/* Headline - BOLD like AAA page + gradient on "surviving" */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2]">
            The first 30 days are for{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              surviving
            </span>
          </h1>
          
          {/* One sentence only */}
          <p className="text-[19px] md:text-xl text-gray-500 font-light leading-[1.6]">
            You do not need to organize, decide, or understand anything yet.
          </p>
          
        </div>
      </section>

      {/* Section 2 - Do one thing only */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50 relative z-10">
        <div className="max-w-md mx-auto text-center space-y-8">
          
          <h2 className="text-[24px] md:text-3xl font-bold text-gray-800">
            Do one thing only
          </h2>
          
          <p className="text-[19px] text-gray-600 leading-[1.6]">
            Put every letter, scan, photo, or email in one place.
          </p>
          
        </div>
      </section>

      {/* Section 3 - Dump vs Delegate */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-[20px] font-bold text-gray-800 mb-4">Dump</h3>
              <p className="text-[17px] text-gray-600 leading-[1.6] mb-2">
                Save everything in one folder
              </p>
              <p className="text-[15px] text-gray-400">
                No sorting. No thinking.
              </p>
            </div>
            
            <div className="p-8 bg-white border border-gray-200 rounded-lg">
              <h3 className="text-[20px] font-bold text-gray-800 mb-4">Delegate</h3>
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
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 relative z-10">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[16px] text-gray-500 leading-[1.6]">
            Many people only organize months later. Some never do.
          </p>
        </div>
      </section>

      {/* Single CTA at bottom */}
      <section className="py-24 px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-md mx-auto text-center space-y-6">
          <Link href="/myhealthcanvas">
            <button className="px-12 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
              Start with one folder
            </button>
          </Link>
          
          {/* Felt safety - not governance */}
          <p className="text-[15px] text-gray-400">
            Private. Supportive. Never replaces your doctors.
          </p>
        </div>
      </section>

      {/* TRUST FOOTER */}
      <footer className="py-8 border-t border-gray-100 mt-auto relative z-10">
        <div className="container px-6">
          <p className="text-[13px] text-gray-400 text-center mb-6 max-w-xl mx-auto">
            MyHealthCanvas does not provide medical advice. It helps you organize information, prepare questions, and communicate more clearly with your care team.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
              <Link href="/myhealthcanvas" className="hover:text-gray-600">
                Templates
              </Link>
              <Link href="/myhealthcanvas/advocacy" className="hover:text-gray-600">
                For Patient Advocacy Groups
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
