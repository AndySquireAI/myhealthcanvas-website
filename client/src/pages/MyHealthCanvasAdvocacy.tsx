import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, XCircle } from "lucide-react";
import SEO from "@/components/SEO";

export default function MyHealthCanvasAdvocacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="Patient Advocacy Partnerships | MyHealthCanvas"
        description="Partner with MyHealthCanvas to support patient empowerment. Charity partnerships for patient advocacy groups. Contact us to learn more."
        keywords="patient advocacy, charity partnership, patient support, advocacy collaboration"
        canonicalPath="/myhealthcanvas/advocacy"
      />

      {/* MINIMAL NAVIGATION */}
      <nav className="py-4 border-b border-slate-100">
        <div className="container flex justify-between items-center">
          <Link href="/myhealthcanvas" className="inline-flex items-center text-slate-400 text-sm hover:text-slate-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to MyHealthCanvas
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Patient Advocacy Partnerships
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              We partner with patient advocacy groups and charities to support patient empowerment through non-clinical planning tools.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              How partnerships work
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">Revenue sharing</h3>
                <p className="text-slate-600">
                  50% of template sales through your referral link go directly to your organization as unrestricted fundraising support.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">No data access</h3>
                <p className="text-slate-600">
                  We don't collect patient data. Your members download printable templates and fill them in by hand. Their information stays with them.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">Non-clinical positioning</h3>
                <p className="text-slate-600">
                  MyHealthCanvas is a planning tool, not a medical device. We don't provide medical advice or make clinical recommendations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS IS NOT */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              What this partnership is not
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Not a clinical endorsement</span>
                </li>
                <li className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Not a medical recommendation to patients</span>
                </li>
                <li className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Not access to patient health data</span>
                </li>
                <li className="flex items-center gap-3">
                  <XCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <span>Not a diagnostic or treatment tool</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRIMARY CTA - ONLY ONE */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Interested in partnering?
            </h2>
            <p className="text-slate-600">
              Contact us to discuss how we can support your patient community.
            </p>
            <a href="mailto:andy@patientcentriccare.ai">
              <Button size="lg" className="text-lg px-10 py-7 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                Contact us about patient advocacy
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-slate-100">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-slate-600">
                Home
              </Link>
              <Link href="/myhealthcanvas" className="hover:text-slate-600">
                MyHealthCanvas
              </Link>
              <Link href="/impressum" className="hover:text-slate-600">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
