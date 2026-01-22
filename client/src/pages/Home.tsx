import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="MyHealthCanvas | Recently Diagnosed? You Can Get Through This"
        description="A calm place to organize your health story. Private. Supportive. Never replaces your doctors."
        keywords="diagnosis support, patient support, health documents, recently diagnosed"
        canonicalPath="/"
      />

      {/* HERO - Ultra sparse, mobile-first */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-lg mx-auto text-center space-y-12">
          
          {/* Headline with BOLD font like AAA page + gradient on key emotional words */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2] tracking-tight">
            Recently{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              diagnosed
            </span>
            ?
            <br />
            Feeling{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              overwhelmed
            </span>
            ?
          </h1>
          
          {/* Reassurance - warm, human */}
          <div className="space-y-6">
            <p className="text-[19px] md:text-xl text-gray-600 font-light leading-[1.6]">
              This is understandable. And you can get through it.
            </p>
            <p className="text-[17px] md:text-lg text-gray-500 font-light leading-[1.6]">
              Only when you feel able, here are some things to think about organising, to help you take back control.
            </p>
          </div>
          
          {/* Single primary CTA only */}
          <div className="pt-4">
            <Link href="/first-30-days-after-diagnosis">
              <button className="w-full md:w-auto px-12 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
                Help me get organized
              </button>
            </Link>
          </div>
          
          {/* Felt safety line - not governance */}
          <p className="text-[15px] text-gray-400 font-light">
            Private. Supportive. Never replaces your doctors.
          </p>
          
        </div>
      </section>
      
      {/* TRUST FOOTER - Governance belongs here, not in body */}
      <footer className="py-8 border-t border-gray-100 mt-auto">
        <div className="container px-6">
          {/* Trust microcopy - small, separated */}
          <p className="text-[13px] text-gray-400 text-center mb-6 max-w-xl mx-auto">
            MyHealthCanvas does not provide medical advice. It helps you organize information, prepare questions, and communicate more clearly with your care team.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
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
