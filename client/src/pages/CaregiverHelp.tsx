import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

export default function CaregiverHelp() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FDFCF8' }}>
      <SEO
        title="How a Caregiver Can Help | MyHealthCanvas"
        description="Simple ways caregivers can help patients organize their health documents. Forward emails, share photos, create one shared folder. That's it."
        keywords="caregiver help, patient support, health documents, family caregiver"
        canonicalPath="/caregiver-help"
      />

      {/* MINIMAL NAVIGATION */}
      <nav className="py-4 border-b border-slate-100">
        <div className="container flex justify-between items-center">
          <Link href="/first-30-days-after-diagnosis" className="inline-flex items-center text-slate-400 text-sm hover:text-slate-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              How a Caregiver Can Help
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              You don't need to be organized. You just need to be there.
            </p>
          </div>
        </div>
      </section>

      {/* SIMPLE STEPS */}
      <section className="py-12" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-8">
            
            <div className="bg-white rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                Forward emails
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ask the patient to forward any emails from doctors, hospitals, or insurance to you. 
                You can save them in a folder for later.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                Share photos
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Ask them to send you photos of appointment letters, prescriptions, and test results. 
                They can use WhatsApp, iMessage, or whatever is easiest.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">
                One shared folder
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Create a shared Google Drive folder or iCloud folder. 
                Put everything in there. You can organize it later — or never.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* THAT'S IT */}
      <section className="py-12" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="container">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <p className="text-2xl text-slate-800 font-medium">
              That's it.
            </p>
            <p className="text-slate-600 leading-relaxed">
              You don't need a system. You don't need to understand everything.<br />
              Just help them not lose things.
            </p>
          </div>
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="py-12" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="container">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <p className="text-lg text-slate-700">Being present is enough.</p>
            <p className="text-lg text-slate-700">You don't have to fix anything.</p>
            <p className="text-slate-500 mt-6">Just don't let things get lost.</p>
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <section className="py-12" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <Link href="/first-30-days-after-diagnosis" className="text-[oklch(0.55_0.15_195)] hover:underline">
              ← Back to the first 30 days guide
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER - Minimal */}
      <footer className="py-8 border-t border-slate-100">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <span>© 2025 MyHealthCanvas</span>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-slate-600">
                Home
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
