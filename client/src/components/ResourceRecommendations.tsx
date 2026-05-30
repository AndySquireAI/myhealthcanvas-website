import { Link } from "wouter";

interface ResourceRecommendationsProps {
  /** Hide specific paths from recommendations (e.g. the current page) */
  exclude?: string[];
}

const allResources = [
  {
    path: "/oncology-questions",
    title: "Questions For Your Oncologist",
    description: "Browse curated questions organised by stage of your cancer journey.",
    cta: "View questions",
  },
  {
    path: "/first-30-days-after-diagnosis",
    title: "First 30 Days After Diagnosis",
    description: "A week-by-week guide to navigating the first month after a cancer diagnosis.",
    cta: "Read the guide",
  },
  {
    path: "/oncology-appointment-checklist",
    title: "Oncology Appointment Checklist",
    description: "Download 21 printable questions to bring to your next oncology appointment.",
    cta: "Get the checklist",
  },
  {
    path: "/myhealthcanvas",
    title: "MyHealthCanvas",
    description: "A printable appointment companion to organise your questions, symptoms and priorities.",
    cta: "Learn more",
  },
];

export default function ResourceRecommendations({ exclude = [] }: ResourceRecommendationsProps) {
  const resources = allResources.filter((r) => !exclude.includes(r.path));

  const trackClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "resource_click", {
        event_category: "engagement",
        event_label: label,
      });
    }
  };

  return (
    <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">Recommended next reading</h2>
          <p className="text-[15px] text-gray-500 mt-2">Continue preparing for your cancer care journey.</p>
        </div>

        <div className={`grid gap-6 ${resources.length >= 3 ? "md:grid-cols-3" : resources.length === 2 ? "md:grid-cols-2 max-w-2xl mx-auto" : "max-w-md mx-auto"}`}>
          {resources.slice(0, 3).map((r) => (
            <Link key={r.path} href={r.path} onClick={() => trackClick(r.path)}>
              <div className="group cursor-pointer bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all space-y-3 h-full">
                <h3 className="text-[17px] font-bold text-gray-800 group-hover:text-[oklch(0.55_0.15_195)] transition-colors">
                  {r.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-[1.6]">{r.description}</p>
                <p className="text-[13px] font-bold text-[oklch(0.55_0.15_195)]">{r.cta} →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
