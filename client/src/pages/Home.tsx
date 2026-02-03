import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Just Diagnosed with Cancer? What to Do First | MyHealthCanvas"
        description="Newly diagnosed? Get organized with questions to ask your oncologist, what to expect after diagnosis, and how to prepare for your first appointment. Created by a cancer survivor."
        keywords="newly diagnosed cancer, what to do after cancer diagnosis, questions to ask oncologist, cancer diagnosis support, how to prepare for oncologist appointment, what to expect after cancer diagnosis, cancer treatment questions, first oncologist appointment"
        canonicalPath="/"
      />

      {/* HERO - Patient-in-distress messaging */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 relative overflow-hidden">
        {/* Subtle hands background */}
        <div 
          className="absolute inset-0 bg-no-repeat bg-center md:bg-bottom opacity-40 md:opacity-50 pointer-events-none"
          style={{
            backgroundImage: 'url(/images/bg-homepage-hands.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 70%',
          }}
        />
        
        <div className="max-w-xl mx-auto text-center space-y-10 relative z-10">
          
          {/* Headline - matches what patients search */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight">
            Just{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              diagnosed
            </span>
            ?
            <br />
            Here's what to do{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              first
            </span>
            .
          </h1>
          
          {/* Reassurance + practical value */}
          <div className="space-y-5">
            <p className="text-[19px] md:text-xl text-gray-600 font-light leading-[1.6]">
              It's overwhelming. You're not alone. And you can get through this.
            </p>
            <p className="text-[17px] md:text-lg text-gray-500 font-light leading-[1.6]">
              Questions to ask your oncologist. What to expect. How to organize your treatment information — all in one calm place.
            </p>
          </div>
          
          {/* Primary CTA */}
          <div className="pt-2">
            <Link href="/first-30-days-after-diagnosis">
              <button className="w-full md:w-auto px-12 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
                Help me get organized
              </button>
            </Link>
          </div>
          
          {/* Trust signal */}
          <p className="text-[15px] text-gray-400 font-light">
            Created by a 2× cancer survivor. Private. Never replaces your doctors.
          </p>
          
        </div>
      </section>

      {/* WHAT PATIENTS NEED - keyword-rich section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[24px] md:text-3xl font-bold text-gray-800 mb-10 text-center">
            What you need right now
          </h2>
          
          <div className="space-y-8">
            {/* Questions to ask */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[oklch(0.55_0.15_195)] text-lg">?</span>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-gray-800 mb-1">Questions to ask your oncologist</h3>
                <p className="text-[16px] text-gray-600">What to ask at your first appointment. Treatment options. Side effects. Prognosis. We help you prepare.</p>
              </div>
            </div>
            
            {/* What to expect */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[oklch(0.55_0.15_195)] text-lg">→</span>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-gray-800 mb-1">What to expect after diagnosis</h3>
                <p className="text-[16px] text-gray-600">The first 30 days. Tests, scans, appointments. How to tell family. What happens next — step by step.</p>
              </div>
            </div>
            
            {/* Organize treatment */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[oklch(0.55_0.15_195)] text-lg">✓</span>
              </div>
              <div>
                <h3 className="text-[18px] font-semibold text-gray-800 mb-1">Organize your cancer treatment</h3>
                <p className="text-[16px] text-gray-600">Track medications, appointments, and symptoms. One place for your health story that you control.</p>
              </div>
            </div>
          </div>
          
          {/* Secondary CTA */}
          <div className="mt-12 text-center">
            <Link href="/first-30-days-after-diagnosis">
              <button className="px-10 py-4 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] text-[16px] font-medium rounded-lg hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                Start with the first 30 days →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CREATED BY A SURVIVOR - trust + credibility */}
      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[17px] text-gray-500 leading-[1.7]">
            MyHealthCanvas was created by <strong>Andy Squire</strong>, a 2× cancer survivor who knows what it's like to feel lost after diagnosis. This isn't a hospital system or a tech company — it's a patient helping other patients get organized.
          </p>
          <div className="mt-6">
            <Link href="/about" className="text-[oklch(0.55_0.15_195)] hover:underline text-[15px]">
              Read Andy's story →
            </Link>
          </div>
        </div>
      </section>
      
      {/* TRUST FOOTER */}
      <footer className="py-8 border-t border-gray-100 mt-auto">
        <div className="container px-6">
          <p className="text-[13px] text-gray-400 text-center mb-6 max-w-xl mx-auto">
            MyHealthCanvas does not provide medical advice. It helps you organize information, prepare questions, and communicate more clearly with your care team.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/myhealthcanvas" className="hover:text-gray-600">
                Health Templates
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
