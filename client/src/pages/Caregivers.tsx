import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

const quotes = [
  { text: "To care for those who once cared for us is one of the highest honors.", author: "Tia Walker" },
  { text: "Kindness can reveal any person's beauty.", author: "Estee Lauder" },
  { text: "The closest thing to being cared for is to care for someone else.", author: "Carson McCullers" },
  { text: "There are only four kinds of people in the world: those who have been caregivers, those who are caregivers, those who will be caregivers, and those who will need caregivers.", author: "Rosalynn Carter" },
];

const categories = [
  {
    title: "Understanding the Treatment Plan",
    color: "#19878C",
    bgColor: "rgba(25, 135, 140, 0.06)",
    borderColor: "rgba(25, 135, 140, 0.2)",
    questions: [
      "What is the primary goal of this specific treatment - cure, control, or comfort?",
      "Who is our 'Point Person' if we have an emergency at 2 AM or on a weekend?",
      "What are the 3 most common side effects we should watch for at home?",
    ],
  },
  {
    title: "Considering a Second Opinion",
    color: "#2E7D8A",
    bgColor: "rgba(46, 125, 138, 0.06)",
    borderColor: "rgba(46, 125, 138, 0.2)",
    questions: [],
    isSecondOpinion: true,
  },
  {
    title: "Daily Life & Logistics",
    color: "#643296",
    bgColor: "rgba(100, 50, 150, 0.06)",
    borderColor: "rgba(100, 50, 150, 0.2)",
    questions: [
      "What physical tasks (lifting, dressing, bathing) will they need help with that I should prepare for?",
      "Are there specific dietary restrictions or 'must-eat' foods during this phase?",
      "How do we manage the medication schedule? Is there a tool or app you recommend?",
    ],
  },
  {
    title: "The Patient's Voice (Dignity)",
    color: "#6B7B3A",
    bgColor: "rgba(107, 123, 58, 0.06)",
    borderColor: "rgba(107, 123, 58, 0.2)",
    questions: [
      "How much of this information should we share with the patient directly? (Following the patient's lead).",
      "What can we do at home to help manage their anxiety or mental fatigue?",
      "Are there local support groups specifically for us (caregivers) so I can stay strong for them?",
    ],
  },
];

const accessChecklistUS = [
  { label: "Ask the oncologist for the Brand Name of the therapy (not just the chemical name).", checked: false },
  { label: "Check if there is a Co-Pay Card or Co-Pay Assistance Program.", checked: false },
  { label: "Confirm if the drug is on your Insurance Formulary (Tier 1-4).", checked: false },
  { label: "Ask about Patient Assistance Programs (PAPs) from the manufacturer.", checked: false },
];

const accessChecklistUK = [
  { label: "Ask the oncologist for the Brand Name of the therapy (not just the chemical name).", checked: false },
  { label: "Check if there is a Patient Support Programme (PSP) from the manufacturer.", checked: false },
  { label: "Confirm if the drug is on the National Specialties List or approved by NICE/SMC.", checked: false },
  { label: "Ask about the Cancer Drugs Fund (England) or equivalent access schemes.", checked: false },
];

export default function Caregivers() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [quoteIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  const [region, setRegion] = useState<"us" | "uk">("us");
  const [showDenialScript, setShowDenialScript] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [emailName, setEmailName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const printRef = useRef<HTMLDivElement>(null);

  // Inject MedicalOrganization JSON-LD schema
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-caregivers", "true");
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "MyHealthCanvas",
      "description": "Patient-first health planning tools for patients and caregivers",
      "founder": { "@type": "Person", "name": "Andy Squire" },
      "knowsAbout": ["caregiver support", "health planning", "patient navigation"]
    });
    document.head.appendChild(script);
    return () => {
      const existing = document.querySelector('script[data-seo-caregivers]');
      if (existing) existing.remove();
    };
  }, []);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleChecked = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentChecklist = region === "us" ? accessChecklistUS : accessChecklistUK;

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify form submission
    const formData = new FormData();
    formData.append("form-name", "caregiver-early-access");
    formData.append("name", emailName);
    formData.append("email", emailAddress);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => {
        setEmailSubmitted(true);
        setEmailName("");
        setEmailAddress("");
      })
      .catch(() => {
        // Fallback: still show success to user, log error
        setEmailSubmitted(true);
        console.error("Form submission failed");
      });
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Caregiver Toolkit - MyHealthCanvas</title>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; max-width: 700px; margin: 40px auto; padding: 0 20px; color: #1a2332; line-height: 1.8; }
              h1 { font-size: 24px; color: #19878C; margin-bottom: 8px; }
              h2 { font-size: 18px; color: #643296; margin-top: 32px; margin-bottom: 12px; }
              h3 { font-size: 16px; color: #19878C; margin-top: 28px; margin-bottom: 10px; }
              .subtitle { font-size: 14px; color: #666; margin-bottom: 32px; }
              ol, ul { padding-left: 20px; }
              li { margin-bottom: 12px; font-size: 15px; }
              .checkbox { display: inline-block; width: 16px; height: 16px; border: 1.5px solid #999; margin-right: 10px; vertical-align: middle; }
              .section-divider { border-top: 2px solid #E1D7EB; margin: 32px 0; }
              .tip { background: #f0f7f7; padding: 12px 16px; border-radius: 8px; font-size: 14px; color: #19878C; margin: 16px 0; }
              .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
              @media print { body { margin: 20px; } }
            </style>
          </head>
          <body>
            <h1>Caregiver Toolkit</h1>
            <p class="subtitle">MyHealthCanvas - Take this into your next consultation</p>
            
            <h2>Question Checklist</h2>
            ${categories
              .map(
                (cat) => `
              <h3>${cat.title}</h3>
              <ol>
                ${cat.questions.map((q) => `<li><span class="checkbox"></span> ${q}</li>`).join("")}
              </ol>
            `
              )
              .join("")}
            
            <div class="section-divider"></div>
            
            <h2>Funding Navigator</h2>
            <div class="tip">First question to ask: "Does this hospital have a Nurse Navigator or a Patient Access Manager? Can we meet them today?"</div>
            
            <h3>Access Checklist (${region === "us" ? "US & Canada" : "UK & Europe"})</h3>
            <ul>
              ${currentChecklist.map((item) => `<li><span class="checkbox"></span> ${item.label}</li>`).join("")}
            </ul>
            
            <h3>If Coverage is Denied</h3>
            <p>Your Nurse Navigator can file a 'Medical Necessity' appeal. Ask: "Can you help us file a formal appeal with the insurance provider/funding body, citing medical necessity?"</p>
            
            <div class="footer">
              <p>MyHealthCanvas.com - Created by a 2x cancer survivor</p>
              <p>Note: Funding pathways vary significantly by country, region, and individual insurance coverage. Always confirm with your local healthcare team.</p>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const currentQuote = quotes[quoteIndex];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Caregiver Support for Cancer Appointments | MyHealthCanvas"
        description="MyHealthCanvas helps cancer caregivers organise questions, symptoms, medicines, priorities, and notes before oncology appointments — so patients and families are better prepared."
        keywords="cancer caregiver, caregiver oncology appointment, caregiver questions to ask oncologist, supporting cancer patient, appointment preparation, caregiver checklist, family caregiver cancer care"
        canonicalPath="/caregivers"
      />

      {/* Hidden Netlify form for bot detection */}
      <form name="caregiver-early-access" data-netlify="true" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
      </form>

      {/* HERO — 2-column layout matching Homepage/Questions */}
      <section className="w-full" style={{ backgroundColor: '#FDFCF8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-10 md:pt-16 pb-8 md:pb-12">
          <div className="grid md:grid-cols-2 gap-6 md:gap-12 items-center">
            {/* Left: Coded text */}
            <div className="space-y-5 order-2 md:order-1 text-center">
              <p className="text-[14px] uppercase tracking-[0.2em] text-[oklch(0.55_0.15_195)] font-bold">
                For cancer caregivers and families
              </p>
              <h1 className="text-[26px] md:text-[36px] lg:text-[42px] font-bold text-gray-900 leading-[1.15] tracking-tight">
                Help someone you love get more from{" "}
                <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
                  every appointment
                </span>
              </h1>
              <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.7]">
                MyHealthCanvas helps caregivers organise questions, symptoms, medicines, notes, and priorities before cancer care appointments — so nothing important gets lost in the stress of the moment.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center">
                <Link href="/myhealthcanvas">
                  <button className="w-full sm:w-auto px-7 py-3.5 text-white text-[15px] font-semibold rounded-xl shadow-md hover:shadow-lg transition-all" style={{ background: "linear-gradient(135deg, oklch(0.55 0.15 195), oklch(0.50 0.18 270))" }}>
                    Start preparing for an appointment
                  </button>
                </Link>
                <Link href="/oncology-appointment-checklist">
                  <button className="w-full sm:w-auto px-7 py-3.5 border-2 border-[oklch(0.55_0.15_195)] text-[oklch(0.55_0.15_195)] bg-white text-[15px] font-semibold rounded-xl hover:bg-[oklch(0.55_0.15_195)]/5 transition-colors">
                    Get free checklist
                  </button>
                </Link>
              </div>
              <p className="text-[14px] text-gray-500 leading-[1.6] pt-1">
                Built by a cancer survivor. Piloted with families. Designed for patients, caregivers, and clinicians.
              </p>
            </div>
            {/* Right: Hero image */}
            <div className="order-1 md:order-2">
              <img
                src="/images/caregiver-hero-son-mum.png"
                alt="Adult son helping his mother at home — cancer caregiver support"
                className="w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-800 leading-[1.3]">
            Caregivers carry more than they can hold in their head
          </h2>
          <p className="text-[16px] md:text-[17px] text-gray-600 leading-[1.8]">
            When someone you love is facing cancer, you may be tracking appointments, medicines, symptoms, questions, worries, family updates, and decisions — often while trying to stay calm for everyone else.
          </p>
          <ul className="text-left max-w-md mx-auto space-y-3 text-[15px] md:text-[16px] text-gray-700">
            <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] flex-shrink-0" />What changed since the last visit?</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] flex-shrink-0" />Which symptoms matter?</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] flex-shrink-0" />What questions should we ask?</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] flex-shrink-0" />What did the clinician say?</li>
            <li className="flex items-start gap-3"><span className="mt-1.5 w-2 h-2 rounded-full bg-[oklch(0.55_0.15_195)] flex-shrink-0" />What needs to happen next?</li>
          </ul>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-800 leading-[1.3]">
            A shared canvas before, during, and after care conversations
          </h2>
          <p className="text-[16px] md:text-[17px] text-gray-600 leading-[1.8]">
            MyHealthCanvas gives caregivers a simple way to prepare for appointments with the patient, capture what matters, and bring a clearer picture into the room.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="p-5 rounded-xl" style={{ backgroundColor: "rgba(25, 135, 140, 0.05)", border: "1px solid rgba(25, 135, 140, 0.12)" }}>
              <p className="text-[15px] font-semibold text-gray-800 mb-1">Questions</p>
              <p className="text-[14px] text-gray-600 leading-[1.6]">Collect and prioritise what the patient and family want to ask</p>
            </div>
            <div className="p-5 rounded-xl" style={{ backgroundColor: "rgba(100, 50, 150, 0.04)", border: "1px solid rgba(100, 50, 150, 0.12)" }}>
              <p className="text-[15px] font-semibold text-gray-800 mb-1">Symptoms</p>
              <p className="text-[14px] text-gray-600 leading-[1.6]">Track changes before they are forgotten</p>
            </div>
            <div className="p-5 rounded-xl" style={{ backgroundColor: "rgba(107, 123, 58, 0.05)", border: "1px solid rgba(107, 123, 58, 0.12)" }}>
              <p className="text-[15px] font-semibold text-gray-800 mb-1">Medicines</p>
              <p className="text-[14px] text-gray-600 leading-[1.6]">Keep key treatment and medication notes together</p>
            </div>
            <div className="p-5 rounded-xl" style={{ backgroundColor: "rgba(180, 120, 40, 0.05)", border: "1px solid rgba(180, 120, 40, 0.12)" }}>
              <p className="text-[15px] font-semibold text-gray-800 mb-1">Priorities</p>
              <p className="text-[14px] text-gray-600 leading-[1.6]">Clarify what matters most to the patient</p>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT WITHOUT TAKING OVER */}
      <section className="py-12 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-800 leading-[1.3]">
            Support without taking over
          </h2>
          <p className="text-[16px] md:text-[17px] text-gray-600 leading-[1.8]">
            The best caregivers do not replace the patient's voice. They help protect it. MyHealthCanvas is designed to help caregivers prepare with the patient, not speak over them.
          </p>
          <p className="text-[15px] font-semibold bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
            Patient-first. Caregiver-supported. Clinician-useful.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-800 leading-[1.3] text-center">
            Useful when you are…
          </h2>
          <div className="space-y-3">
            {[
              "Preparing for a first oncology appointment",
              "Helping an older parent remember symptoms or questions",
              "Coordinating updates across family members",
              "Tracking side effects between visits",
              "Supporting someone who feels too overwhelmed to prepare alone",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: "rgba(25, 135, 140, 0.04)", border: "1px solid rgba(25, 135, 140, 0.08)" }}>
                <span className="mt-0.5 text-[oklch(0.55_0.15_195)] font-bold">✓</span>
                <p className="text-[15px] md:text-[16px] text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 pb-8" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[16px] md:text-[17px] text-gray-600 leading-[1.8]">
            You are not just a visitor in this journey — you are part of the team. These questions are designed to help
            you manage the logistics of care and ensure your loved one's dignity is maintained. Click each section to
            reveal the essential questions to take into your next consultation.
          </p>
        </div>
      </section>

      {/* Accordion Categories */}
      <section className="px-6 pb-12" style={{ backgroundColor: "#FDFCF8" }} ref={printRef}>
        <div className="max-w-2xl mx-auto space-y-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300"
              style={{
                border: `1.5px solid ${openCategory === index ? category.borderColor : "rgba(225, 215, 235, 0.4)"}`,
                backgroundColor: openCategory === index ? category.bgColor : "rgba(253, 252, 248, 0.95)",
              }}
            >
              <button
                onClick={() => toggleCategory(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-200 cursor-pointer"
                style={{ backgroundColor: "transparent" }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: category.color }}
                  />
                  <h2 className="text-[17px] md:text-[19px] font-semibold text-gray-800">
                    {category.title}
                  </h2>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0"
                  style={{
                    transform: openCategory === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openCategory === index ? ((category as any).isSecondOpinion ? "3000px" : "500px") : "0px",
                  opacity: openCategory === index ? 1 : 0,
                }}
              >
                <div className="px-6 pb-6 pt-1">
                  {(category as any).isSecondOpinion ? (
                    <div className="space-y-6 text-[15px] md:text-[16px] text-gray-700 leading-[1.7]">
                      <p>A second opinion is common in cancer care, especially before starting treatment.</p>
                      <p>Many patients and caregivers worry that asking for another opinion will offend their medical team. In reality, experienced cancer specialists understand that major treatment decisions deserve careful review.</p>
                      <p className="font-semibold">A second opinion may:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Confirm the proposed treatment plan</li>
                        <li>Identify alternative options</li>
                        <li>Introduce newer treatments or clinical trials</li>
                        <li>Give the patient and caregiver greater confidence moving forward</li>
                      </ul>
                      <p>The goal is not to replace your medical team.</p>
                      <p className="font-semibold">The goal is to make an important decision with as much information and confidence as possible.</p>

                      <hr className="border-gray-200" />

                      <h3 className="text-[17px] md:text-[18px] font-bold text-gray-900">Questions To Ask Your Current Team</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>"Would you support us obtaining a second opinion before treatment begins?"</li>
                        <li>"Could you recommend any specialists or centres that focus on this cancer type?"</li>
                        <li>"Can you securely share the relevant records with another specialist?"</li>
                        <li>"What records should we obtain before arranging a second opinion?"</li>
                        <li>"Will obtaining a second opinion affect the timing of treatment?"</li>
                      </ul>

                      <h3 className="text-[17px] md:text-[18px] font-bold text-gray-900">Questions To Ask The Second Opinion Specialist</h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>"Do you agree with the proposed diagnosis and treatment plan?"</li>
                        <li>"Are there alternative treatment approaches we should consider?"</li>
                        <li>"Would you recommend any additional testing before treatment begins?"</li>
                        <li>"Are there newer treatments or clinical trials that may be appropriate?"</li>
                        <li>"If you were treating a family member with this diagnosis, would you recommend the same approach?"</li>
                      </ul>

                      <hr className="border-gray-200" />

                      <h3 className="text-[17px] md:text-[18px] font-bold text-gray-900">Step-by-Step Process</h3>

                      <p className="font-semibold">1. Identify an Expert</p>
                      <p>Search for:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>University cancer centres</li>
                        <li>Research hospitals</li>
                        <li>Specialists who focus on your specific cancer type</li>
                        <li>Recommendations from patient advocacy groups</li>
                      </ul>
                      <p>Look for doctors who regularly treat your particular cancer, not just cancer in general.</p>

                      <p className="font-semibold">2. Contact Their Office</p>
                      <p>Ask:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Are they willing to provide a second opinion?</li>
                        <li>Can it be done remotely?</li>
                        <li>What records are required?</li>
                        <li>How long is the waiting time?</li>
                        <li>What are the costs?</li>
                      </ul>

                      <p className="font-semibold">3. Check Insurance Coverage</p>
                      <p>Before booking:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Ask whether a second opinion is covered</li>
                        <li>Check whether pre-authorisation is required</li>
                        <li>Ask whether remote consultations are covered</li>
                      </ul>

                      <p className="font-semibold">4. Request Your Records</p>
                      <p>Ask your primary team for:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Clinic notes</li>
                        <li>Imaging reports</li>
                        <li>Scan images</li>
                        <li>Pathology reports</li>
                        <li>Laboratory results</li>
                        <li>Proposed treatment plan</li>
                      </ul>
                      <p>Most healthcare systems give patients the right to obtain their records.</p>

                      <p className="font-semibold">5. Compare Recommendations</p>
                      <p>Many second opinions confirm most of the original plan.</p>
                      <p>Even when recommendations are similar, the reassurance gained can be extremely valuable. Sometimes small adjustments can make a meaningful difference.</p>

                      <hr className="border-gray-200" />

                      <h3 className="text-[17px] md:text-[18px] font-bold text-gray-900">Suggested Script For Patients Or Caregivers</h3>
                      <blockquote className="border-l-4 border-[#2E7D8A] pl-4 py-2 bg-[rgba(46,125,138,0.04)] rounded-r-lg space-y-3 italic">
                        <p>"We are very grateful for the care and recommendations provided by the team so far.</p>
                        <p>Because this is such an important decision, we would like to obtain a second opinion before treatment begins.</p>
                        <p>We understand that second opinions are a normal part of cancer care and hope this will help us move forward with complete confidence.</p>
                        <p>Would it be possible to securely share the relevant records, test results and proposed treatment plan with the specialist we have identified?"</p>
                      </blockquote>

                      <hr className="border-gray-200" />

                      <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="font-semibold text-gray-900 mb-2">💡 Remember</p>
                        <p>Seeking a second opinion is not a sign of distrust.</p>
                        <p>It is a normal part of making informed decisions about serious illnesses.</p>
                        <p>Many cancer specialists seek second opinions from colleagues themselves when managing complex cases.</p>
                      </div>

                      <hr className="border-gray-200" />

                      <div className="space-y-2">
                        <p className="font-semibold text-gray-900">Further Information</p>
                        <ul className="list-disc pl-6 space-y-2">
                          <li><a href="https://www.mskcc.org/news/what-to-know-about-getting-second-opinion-after-cancer-diagnosis" target="_blank" rel="noopener noreferrer" className="text-[#2E7D8A] underline hover:text-[#1a5c66]">Memorial Sloan Kettering Cancer Center</a></li>
                          <li><a href="https://www.cancerresearchuk.org/about-cancer/treatment/access-to-treatment/different-doctor-second-opinion" target="_blank" rel="noopener noreferrer" className="text-[#2E7D8A] underline hover:text-[#1a5c66]">Cancer Research UK</a></li>
                          <li><a href="https://www.cancer.gov/about-cancer/managing-care/finding-cancer-care" target="_blank" rel="noopener noreferrer" className="text-[#2E7D8A] underline hover:text-[#1a5c66]">National Cancer Institute (NCI)</a></li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <ul className="space-y-4">
                      {category.questions.map((question, qIndex) => (
                        <li key={qIndex} className="flex items-start gap-3">
                          <span
                            className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: category.color, opacity: 0.5 }}
                          />
                          <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.7]">
                            "{question}"
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* FUNDING NAVIGATOR MODULE */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Section divider */}
      <section className="px-6" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto">
          <div className="h-px" style={{ background: "linear-gradient(to right, transparent, #E1D7EB, transparent)" }} />
        </div>
      </section>

      {/* Funding Navigator Header */}
      <section className="px-6 pt-12 pb-6" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[12px] uppercase tracking-[0.2em] text-[#19878C] font-medium mb-3">
            Funding & Access
          </p>
          <h2 className="text-[24px] md:text-[30px] font-bold text-gray-800 leading-[1.2] mb-4">
            The Funding Navigator
          </h2>
          <p className="text-[15px] md:text-[16px] text-gray-500 leading-[1.7] max-w-lg mx-auto">
            Treatment costs and access pathways can feel overwhelming. This section helps you ask the right questions so the paperwork doesn't get in the way of the care.
          </p>
        </div>
      </section>

      {/* 1. The Navigator Question Card */}
      <section className="px-6 pb-8" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-xl p-6 md:p-8"
            style={{
              background: "linear-gradient(135deg, rgba(25, 135, 140, 0.06) 0%, rgba(100, 50, 150, 0.04) 100%)",
              border: "1.5px solid rgba(25, 135, 140, 0.15)",
            }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: "rgba(25, 135, 140, 0.12)" }}
              >
                <svg className="w-5 h-5 text-[#19878C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-1">
                  The Navigator: Your Professional Partner
                </h3>
                <p className="text-[13px] text-gray-400 font-medium">
                  Your first question at the hospital
                </p>
              </div>
            </div>

            <div
              className="rounded-lg p-5 mb-4"
              style={{ backgroundColor: "rgba(25, 135, 140, 0.06)", border: "1px solid rgba(25, 135, 140, 0.1)" }}
            >
              <p className="text-[16px] md:text-[17px] text-gray-800 font-medium leading-[1.6] italic">
                "Does this hospital have a Nurse Navigator or a Patient Access Manager? Can we meet them today?"
              </p>
            </div>

            <div className="flex items-start gap-2">
              <svg className="w-4 h-4 text-[#19878C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
              <p className="text-[14px] text-gray-500 leading-[1.6]">
                <span className="font-medium text-gray-600">Why this matters:</span> They handle the paperwork so you can handle the care. A Nurse Navigator is your single point of contact who coordinates between departments, insurance, and your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Funding with Region Toggle */}
      <section className="px-6 pb-8" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto">
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: "1.5px solid rgba(100, 50, 150, 0.15)" }}
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(100, 50, 150, 0.1)" }}
                >
                  <svg className="w-5 h-5 text-[#643296]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[18px] md:text-[20px] font-bold text-gray-800 mb-1">
                    The Funding: Manufacturer or Foundation Support
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-[1.5]">
                    Search for the drug name + "Patient Support Program" to find financial assistance.
                  </p>
                </div>
              </div>

              {/* Region Toggle */}
              <div className="flex items-center gap-1 p-1 rounded-lg w-fit" style={{ backgroundColor: "rgba(225, 215, 235, 0.3)" }}>
                <button
                  onClick={() => { setRegion("us"); setCheckedItems({}); }}
                  className="px-4 py-2 rounded-md text-[13px] font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: region === "us" ? "#fff" : "transparent",
                    color: region === "us" ? "#643296" : "#888",
                    boxShadow: region === "us" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  US & Canada
                </button>
                <button
                  onClick={() => { setRegion("uk"); setCheckedItems({}); }}
                  className="px-4 py-2 rounded-md text-[13px] font-medium transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: region === "uk" ? "#fff" : "transparent",
                    color: region === "uk" ? "#643296" : "#888",
                    boxShadow: region === "uk" ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  UK & Europe
                </button>
              </div>
            </div>

            {/* Checklist */}
            <div className="px-6 pb-6">
              <ul className="space-y-3">
                {currentChecklist.map((item, index) => {
                  const key = `${region}-${index}`;
                  return (
                    <li key={key}>
                      <button
                        onClick={() => toggleChecked(key)}
                        className="flex items-start gap-3 w-full text-left cursor-pointer group"
                      >
                        <div
                          className="w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center transition-all duration-200"
                          style={{
                            border: checkedItems[key] ? "none" : "1.5px solid #ccc",
                            backgroundColor: checkedItems[key] ? "#19878C" : "transparent",
                          }}
                        >
                          {checkedItems[key] && (
                            <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                            </svg>
                          )}
                        </div>
                        <p
                          className="text-[15px] leading-[1.6] transition-all duration-200"
                          style={{
                            color: checkedItems[key] ? "#999" : "#374151",
                            textDecoration: checkedItems[key] ? "line-through" : "none",
                          }}
                        >
                          {item.label}
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>

              <p className="text-[12px] text-gray-400 mt-4 leading-[1.5]">
                Note: Funding pathways vary significantly by country, region, and individual insurance coverage. Always confirm with your local healthcare team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Hidden "Stress" Category: Insurance Denials */}
      <section className="px-6 pb-12" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center">
            <button
              onClick={() => setShowDenialScript(!showDenialScript)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-[14px] font-medium transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: showDenialScript ? "rgba(180, 60, 60, 0.06)" : "rgba(225, 215, 235, 0.3)",
                color: showDenialScript ? "#8B3A3A" : "#666",
                border: showDenialScript ? "1.5px solid rgba(180, 60, 60, 0.15)" : "1.5px solid transparent",
              }}
            >
              <svg
                className="w-4 h-4 transition-transform duration-300"
                style={{ transform: showDenialScript ? "rotate(180deg)" : "rotate(0deg)" }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              What if they say no?
            </button>
          </div>

          <div
            className="overflow-hidden transition-all duration-500"
            style={{
              maxHeight: showDenialScript ? "600px" : "0px",
              opacity: showDenialScript ? 1 : 0,
            }}
          >
            <div
              className="mt-4 rounded-xl p-6 md:p-8"
              style={{
                backgroundColor: "rgba(180, 60, 60, 0.03)",
                border: "1.5px solid rgba(180, 60, 60, 0.1)",
              }}
            >
              <div className="flex items-start gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(180, 60, 60, 0.08)" }}
                >
                  <svg className="w-4 h-4 text-[#8B3A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-[17px] md:text-[18px] font-bold text-gray-800">
                  If Coverage is Denied
                </h3>
              </div>

              <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.7] mb-5">
                If coverage is denied, your Nurse Navigator can file a "Medical Necessity" appeal. This is more common than you think, and many denials are overturned on appeal.
              </p>

              <div
                className="rounded-lg p-5 mb-4"
                style={{ backgroundColor: "rgba(253, 252, 248, 0.8)", border: "1px solid rgba(180, 60, 60, 0.08)" }}
              >
                <p className="text-[13px] uppercase tracking-[0.15em] text-[#8B3A3A] font-medium mb-3">
                  The Script
                </p>
                <p className="text-[15px] md:text-[16px] text-gray-800 leading-[1.7] italic">
                  "Can you help us file a formal appeal with the insurance provider, citing medical necessity? What documentation do we need from the oncologist to support this?"
                </p>
              </div>

              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 text-[#19878C] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
                <p className="text-[13px] text-gray-500 leading-[1.5]">
                  <span className="font-medium text-gray-600">Remember:</span> You have the right to appeal. Many initial denials are administrative, not clinical. Your oncologist's letter of medical necessity is your strongest tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Print Button */}
      <section className="px-6 pb-12" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-[15px] transition-all duration-300 hover:shadow-lg cursor-pointer"
            style={{
              background: "linear-gradient(135deg, #19878C 0%, #643296 100%)",
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18.75 9H5.25"
              />
            </svg>
            Print this toolkit
          </button>
          <p className="text-[13px] text-gray-400">
            Includes questions, funding checklist, and appeal script
          </p>
        </div>
      </section>

      {/* CAREGIVER EARLY ACCESS — Email Capture */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-lg mx-auto text-center space-y-6">
          <h3 className="text-[22px] font-bold text-gray-800">Get early access for caregivers</h3>
          <p className="text-[15px] text-gray-500 leading-[1.6]">
            We're building new tools specifically for caregivers. Leave your details and we'll let you know when they're ready.
          </p>
          {emailSubmitted ? (
            <div className="py-6 px-8 rounded-xl" style={{ backgroundColor: "rgba(25, 135, 140, 0.08)", border: "1px solid rgba(25, 135, 140, 0.15)" }}>
              <p className="text-[16px] text-[#19878C] font-medium">Thank you — we'll be in touch.</p>
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="space-y-3 max-w-md mx-auto pt-2">
              <input
                type="text"
                placeholder="Your name"
                value={emailName}
                onChange={(e) => setEmailName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[15px] focus:outline-none focus:border-[#19878C]"
                style={{ backgroundColor: '#FFFFFF' }}
              />
              <input
                type="email"
                placeholder="Your email address"
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[15px] focus:outline-none focus:border-[#19878C]"
                style={{ backgroundColor: '#FFFFFF' }}
              />
              <button
                type="submit"
                className="w-full px-6 py-3 text-white text-[15px] font-medium rounded-lg transition-colors cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #19878C 0%, #643296 100%)' }}
              >
                Notify me
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 50% PROCEEDS STATEMENT */}
      <section className="py-10 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[18px] md:text-[20px] font-bold" style={{ background: 'linear-gradient(90deg, oklch(0.55 0.15 195), oklch(0.45 0.15 300))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            50% of all MyHealthCanvas proceeds go to cancer charities.
          </p>
        </div>
      </section>

      {/* Bottom trust signal */}
      <section className="px-6 pb-12" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[13px] text-gray-400">
            Created by a 2x cancer survivor. These questions are curated from leading oncology centres worldwide.
          </p>
        </div>
      </section>
    </div>
  );
}
