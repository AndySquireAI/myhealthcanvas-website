import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import SEO from "@/components/SEO";

export default function First30Days() {
  // GA4 scroll depth tracking
  useEffect(() => {
    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      const milestones = [25, 50, 75];
      milestones.forEach((milestone) => {
        if (scrollPercent >= milestone && !(window as any)[`scrolled_${milestone}`]) {
          (window as any)[`scrolled_${milestone}`] = true;
          if (typeof (window as any).gtag === "function") {
            (window as any).gtag("event", "scroll_depth", {
              percent_scrolled: milestone,
              page_location: window.location.href,
            });
          }
        }
      });
    };

    window.addEventListener("scroll", trackScrollDepth);
    return () => window.removeEventListener("scroll", trackScrollDepth);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="The First 30 Days After a Diagnosis | MyHealthCanvas"
        description="For the first month, don't organize anything. Just save photos, letters, emails, and scans into one place. When life slows down, you can organize later."
        keywords="diagnosis support, first month after diagnosis, patient support, caregiver help, health documents"
        canonicalPath="/first-30-days-after-diagnosis"
      />

      {/* MINIMAL NAVIGATION */}
      <nav className="py-4 border-b border-slate-100">
        <div className="container flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-slate-400 text-sm hover:text-slate-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
        </div>
      </nav>

      {/* HERO - Permission to be messy */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              The First 30 Days After a Diagnosis
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              You're not behind. This can wait. Nothing here expires.
            </p>
          </div>
        </div>
      </section>

      {/* CORE MESSAGE - Verbatim from instructions */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-slate-50 rounded-xl p-8 md:p-10 border border-slate-100">
              <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium">
                For the first month, don't organize anything.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                Just save photos, letters, emails, and scans into one place.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mt-4">
                When life slows down — or when a caregiver helps — you can organize later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ONE SAFE PLACE */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-semibold text-slate-800">
              Give yourself one safe place to put everything
            </h2>
            <p className="text-slate-600 leading-relaxed">
              A folder on your phone. A shared Drive. An email to yourself.<br />
              It doesn't matter where — just somewhere you won't lose it.
            </p>
            <p className="text-slate-500 text-sm">
              Just save it. Organize later — or never.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT TO SAVE - No pressure */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-slate-800 text-center mb-8">
              Things worth saving (when you have energy)
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Appointment letters",
                "Lab results",
                "Discharge summaries",
                "Medication lists",
                "Doctor's notes",
                "Insurance documents",
                "Scan images (CT, MRI, X-ray)",
                "Emails from your care team"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                  <span className="text-slate-400">○</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-500 text-sm mt-6">
              You don't need all of these. Any of them is enough.
            </p>
          </div>
        </div>
      </section>

      {/* CAREGIVER DELEGATION - Critical section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 text-center mb-6">
              If you're overwhelmed: let someone else handle this
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-center">
              <p>
                Many patients don't want to deal with documents at all.
              </p>
              <p>
                It's okay to forward everything to a partner, friend, or family member.
              </p>
              <p>
                They can save and organize it for you.
              </p>
            </div>
            <div className="mt-8 text-center">
              <Link href="/caregiver-help" className="text-[oklch(0.55_0.15_195)] hover:underline">
                How a caregiver can help →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REASSURANCE - Not actions */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center space-y-4">
            <p className="text-lg text-slate-700">You're not behind.</p>
            <p className="text-lg text-slate-700">This can wait.</p>
            <p className="text-lg text-slate-700">Nothing here expires.</p>
            <p className="text-slate-500 mt-6">You can come back to this later.</p>
          </div>
        </div>
      </section>

      {/* FOLDER STRUCTURE - Optional, later */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold text-slate-800 text-center mb-4">
              If you want to organize later (optional)
            </h2>
            <p className="text-center text-slate-500 mb-8">
              You don't need this now.<br />
              Many people only use this months later — or ask a caregiver to do it.
            </p>
            <div className="grid md:grid-cols-3 gap-3 text-sm">
              {[
                "Disease Information",
                "Treatment Information",
                "Complementary Treatments",
                "Nutrition",
                "Blood Tests",
                "PET/CT/MRI",
                "Prescriptions",
                "Physician Visits",
                "Insurance"
              ].map((folder, index) => (
                <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg text-slate-600">
                  <span className="text-blue-400">📁</span>
                  <span>{folder}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL REASSURANCE */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center space-y-6">
            <p className="text-xl text-slate-700 leading-relaxed">
              This is enough for today.
            </p>
            <p className="text-slate-500">
              When you're ready for more structure, we'll be here.
            </p>
            <div className="pt-4">
              <Link href="/myhealthcanvas" className="text-[oklch(0.55_0.15_195)] hover:underline text-sm">
                See our printable health plan templates →
              </Link>
            </div>
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
