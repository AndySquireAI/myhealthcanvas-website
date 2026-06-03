import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { Search, X } from "lucide-react";

interface SearchItem {
  title: string;
  description: string;
  path: string;
  keywords: string[];
}

const searchIndex: SearchItem[] = [
  {
    title: "Home",
    description: "Welcome to MyHealthCanvas — organise your questions, symptoms, medications and priorities for oncology appointments.",
    path: "/",
    keywords: ["home", "welcome", "appointment", "cancer", "oncology", "prepare", "questions", "symptoms"],
  },
  {
    title: "Questions to Ask Your Oncologist",
    description: "Guided question prompts for every stage of your cancer journey — from diagnosis to treatment to life after.",
    path: "/questions",
    keywords: ["questions", "oncologist", "ask", "diagnosis", "treatment", "chemotherapy", "immunotherapy", "side effects", "clinical trials"],
  },
  {
    title: "MyHealthCanvas Product",
    description: "Your appointment companion — a downloadable PDF to organise questions, symptoms, goals and medications.",
    path: "/myhealthcanvas",
    keywords: ["buy", "purchase", "product", "pdf", "download", "companion", "essential", "complete", "price", "£19", "£27"],
  },
  {
    title: "Caregivers",
    description: "Support tools for caregivers — question checklists, funding navigator, second opinion guide, and dignity-centred care.",
    path: "/caregivers",
    keywords: ["caregiver", "carer", "family", "support", "funding", "second opinion", "treatment plan", "dignity", "medication"],
  },
  {
    title: "AAA - AI Agents",
    description: "AI Automation Agency — workflow automation, AI governance audit, and training for healthcare organisations.",
    path: "/aaa",
    keywords: ["ai", "automation", "agents", "governance", "workflow", "business", "enterprise", "training"],
  },
  {
    title: "eLibrary",
    description: "Articles and guides on cancer care, appointment preparation, patient advocacy, and caregiver support.",
    path: "/elibrary",
    keywords: ["articles", "blog", "library", "guides", "resources", "read", "research"],
  },
  {
    title: "About Andy",
    description: "Andy Squire — 2× cancer survivor, patient advocate, Harvard Medical School AI in Healthcare capstone.",
    path: "/about",
    keywords: ["andy", "squire", "about", "story", "survivor", "harvard", "advocate", "founder"],
  },
  {
    title: "First 30 Days After Diagnosis",
    description: "A week-by-week guide to navigating the first month after a cancer diagnosis.",
    path: "/first-30-days-after-diagnosis",
    keywords: ["first", "30 days", "diagnosis", "week", "guide", "breathe", "gather", "newly diagnosed"],
  },
  {
    title: "Oncology Appointment Checklist",
    description: "A free printable checklist to prepare for your next oncology appointment.",
    path: "/oncology-appointment-checklist",
    keywords: ["checklist", "appointment", "prepare", "printable", "free", "oncology"],
  },
  {
    title: "Questions After Cancer Diagnosis",
    description: "The most important questions to ask your oncologist after receiving a cancer diagnosis.",
    path: "/questions-after-cancer-diagnosis",
    keywords: ["diagnosis", "questions", "first appointment", "newly diagnosed", "what to ask"],
  },
  {
    title: "Questions Before Chemotherapy",
    description: "Essential questions to ask before starting chemotherapy treatment.",
    path: "/questions-before-chemotherapy",
    keywords: ["chemotherapy", "chemo", "treatment", "side effects", "infusion", "questions"],
  },
  {
    title: "Questions Before Immunotherapy",
    description: "Key questions to ask your oncologist before starting immunotherapy.",
    path: "/questions-before-immunotherapy",
    keywords: ["immunotherapy", "immune", "pd-l1", "biomarker", "infusion", "questions"],
  },
  {
    title: "Questions About Clinical Trials",
    description: "How to ask about clinical trials and decide whether participation is right for you.",
    path: "/questions-about-clinical-trials",
    keywords: ["clinical trials", "research", "participate", "eligibility", "experimental"],
  },
  {
    title: "Caregiver Oncology Questions",
    description: "10 essential questions every caregiver should ask the oncology team.",
    path: "/caregiver-oncology-questions",
    keywords: ["caregiver", "questions", "oncology", "family", "support", "practical"],
  },
  {
    title: "Prepare For Your Appointment",
    description: "Step-by-step guide to preparing for your oncology appointment.",
    path: "/prepare-for-your-oncology-appointment",
    keywords: ["prepare", "appointment", "ready", "organised", "steps", "guide"],
  },
  {
    title: "Why Preparation Matters",
    description: "Evidence-based reasons why preparing for oncology appointments improves outcomes.",
    path: "/why-appointment-preparation-matters",
    keywords: ["preparation", "evidence", "outcomes", "research", "why", "matters", "benefits"],
  },
  {
    title: "Patient Outcomes",
    description: "Real outcomes and stories from patients who prepared for their appointments.",
    path: "/patient-outcomes",
    keywords: ["outcomes", "results", "stories", "patients", "evidence", "impact"],
  },
  {
    title: "Share Your Experience",
    description: "Share your experience using MyHealthCanvas to help other patients.",
    path: "/share-your-experience",
    keywords: ["share", "experience", "feedback", "testimonial", "story"],
  },
  {
    title: "Contact",
    description: "Get in touch with Andy Squire for questions, partnerships, or speaking engagements.",
    path: "/contact",
    keywords: ["contact", "email", "message", "reach", "partnership", "speaking"],
  },
  {
    title: "Privacy Policy",
    description: "How MyHealthCanvas protects your data and privacy.",
    path: "/privacy",
    keywords: ["privacy", "data", "protection", "gdpr", "policy", "secure"],
  },
  {
    title: "Second Opinion Guide",
    description: "How to request a second opinion for your cancer diagnosis — step-by-step process and scripts.",
    path: "/caregivers",
    keywords: ["second opinion", "another doctor", "specialist", "confirm diagnosis", "alternative treatment"],
  },
];

export default function SiteSearch() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim().length >= 2
    ? searchIndex.filter((item) => {
        const q = query.toLowerCase();
        return (
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.keywords.some((kw) => kw.includes(q))
        );
      }).slice(0, 6)
    : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (path: string) => {
    setQuery("");
    setIsOpen(false);
    setLocation(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="w-full px-4 py-3" style={{ backgroundColor: "#FDFCF8" }}>
      <div className="max-w-2xl mx-auto relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder="Search this site..."
            className="w-full pl-11 pr-10 py-3 text-[15px] rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[oklch(0.55_0.15_195)]/30 focus:border-[oklch(0.55_0.15_195)] transition-all"
          />
          {query && (
            <button
              onClick={() => { setQuery(""); setIsOpen(false); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Results dropdown */}
        {isOpen && results.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
            {results.map((item, i) => (
              <button
                key={i}
                onClick={() => handleSelect(item.path)}
                className="w-full px-5 py-3 text-left hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors border-b border-gray-50 last:border-b-0"
              >
                <p className="text-[15px] font-semibold text-gray-900">{item.title}</p>
                <p className="text-[13px] text-gray-500 line-clamp-1">{item.description}</p>
              </button>
            ))}
          </div>
        )}

        {/* No results */}
        {isOpen && query.trim().length >= 2 && results.length === 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50">
            <div className="px-5 py-4 text-center">
              <p className="text-[14px] text-gray-500">No results found for "{query}"</p>
              <p className="text-[13px] text-gray-400 mt-1">Try different keywords or browse the menu above</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
