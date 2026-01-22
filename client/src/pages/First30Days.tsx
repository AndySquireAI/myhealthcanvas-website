import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowLeft, Folder } from "lucide-react";
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

  const folderSuggestions = [
    { name: "Disease Information", description: "Diagnosis details" },
    { name: "Treatment Information", description: "Treatment plans" },
    { name: "Complementary Treatments", description: "Alternative therapies" },
    { name: "Nutrition", description: "Diet advice" },
    { name: "Blood Tests", description: "Lab results" },
    { name: "PET/CT/MRI", description: "Imaging scans" },
    { name: "Prescriptions", description: "Medications" },
    { name: "Physician Visits", description: "Consultation notes" },
    { name: "Insurance", description: "Coverage info" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO
        title="The First 30 Days After a Diagnosis | MyHealthCanvas"
        description="Get through the first 30 days after a diagnosis. Create a private space to organize what matters. No medical advice. Private by design."
        keywords="first 30 days diagnosis, overwhelmed after diagnosis, organize medical documents, patient support"
        canonicalPath="/first-30-days-after-diagnosis"
      />

      {/* MINIMAL NAVIGATION */}
      <nav className="py-4 border-b border-slate-100">
        <div className="container flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-slate-400 text-sm hover:text-slate-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
          <a href="#why-folders" className="text-slate-400 text-sm hover:text-slate-600">
            Why this helps
          </a>
        </div>
      </nav>

      {/* SECTION 1 - HERO */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              The First 30 Days After a Diagnosis
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              You don't need to solve everything right now. Start by creating a private space to organize what matters.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 - TWO THINGS THAT MATTER (No buttons) */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-8 text-center">
              Two things that matter right now
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">1. Capture what you already have</h3>
                <p className="text-slate-600">
                  Take photos or screenshots of appointment letters, test results, and emails. Store them on your phone or Google Drive. Nothing fancy - just don't lose them.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-2">2. Create simple folders</h3>
                <p className="text-slate-600">
                  Organize your photos into folders so you can find things when you need them. We suggest some folder names below.
                </p>
              </div>
            </div>

            {/* PRIMARY CTA - After Section 2 */}
            <div className="mt-10 text-center">
              <Link href="/myhealthcanvas">
                <Button size="lg" className="text-lg px-10 py-7 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                  Create my private health folder
                </Button>
              </Link>
              <p className="text-sm text-slate-400 mt-3">
                Takes ~2 minutes. Private by design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - SUGGESTED FOLDERS (No buttons) */}
      <section id="why-folders" className="py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 text-center">
              Suggested folder names
            </h2>
            <p className="text-slate-600 text-center mb-8">
              Create these on your phone, computer, or Google Drive. Your data stays with you - we never see it.
            </p>

            {/* Folder grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {folderSuggestions.map((folder) => (
                <div
                  key={folder.name}
                  className="bg-slate-50 border border-slate-200 rounded-lg p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Folder className="h-5 w-5 text-[oklch(0.55_0.15_195)]" />
                    <span className="font-medium text-slate-800 text-sm">{folder.name}</span>
                  </div>
                  <p className="text-xs text-slate-500">{folder.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - WHAT TO EXPECT (No buttons) */}
      <section className="py-12 bg-slate-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
              What to expect in the first month
            </h2>
            <div className="space-y-4 text-slate-600">
              <p>
                <strong>Shock is normal.</strong> You may feel numb, confused, or unable to process information. This is your brain protecting you.
              </p>
              <p>
                <strong>You don't need all the answers.</strong> Your care team will guide you. Your job right now is to show up and ask questions.
              </p>
              <p>
                <strong>Small steps matter.</strong> Organizing your documents is a small step that gives you a sense of control when everything feels uncertain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - REASSURANCE (No buttons) */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-slate-500 leading-relaxed">
              No medical advice. No AI decisions.<br />
              Just structure, clarity, and calm.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA - Same primary CTA repeated once */}
      <section className="py-16 bg-slate-50">
        <div className="container">
          <div className="max-w-xl mx-auto text-center">
            <Link href="/myhealthcanvas">
              <Button size="lg" className="text-lg px-10 py-7 bg-[oklch(0.55_0.15_195)] hover:bg-[oklch(0.50_0.15_195)] text-white">
                Create my private health folder
              </Button>
            </Link>
            <p className="text-sm text-slate-400 mt-3">
              Takes ~2 minutes. Private by design.
            </p>
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
