import { useState, useRef } from "react";
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
  const printRef = useRef<HTMLDivElement>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const toggleChecked = (key: string) => {
    setCheckedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const currentChecklist = region === "us" ? accessChecklistUS : accessChecklistUK;

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
        title="Caregiver Support - MyHealthCanvas"
        description="Essential questions and resources for cancer caregivers. A toolkit to help you manage the logistics of care and ensure your loved one's dignity is maintained."
        keywords="cancer caregiver, caregiver support, caregiver questions, supporting cancer patient, caregiver toolkit, caregiver checklist"
        canonicalPath="/caregivers"
      />

      {/* Comfort Header with faded Safe Harbor background */}
      <section className="relative overflow-hidden" style={{ minHeight: "340px" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028717205/fsNdQYyZYzZATFEcR38JJy/safe-harbor-v7-1-jJWaWcTRMXV4RKMJSvqHQv.png)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            opacity: 0.15,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(253,252,248,0.3) 0%, rgba(253,252,248,0.95) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-24 pb-12 text-center">
          <p className="text-[14px] uppercase tracking-[0.2em] text-[#19878C] font-medium mb-6">
            For the person holding the hand
          </p>
          <h1 className="text-[28px] md:text-[36px] lg:text-[42px] font-bold text-gray-800 leading-[1.2] mb-8">
            The Caregiver's Toolkit
          </h1>
          <blockquote className="max-w-xl mx-auto">
            <p className="text-[18px] md:text-[22px] text-gray-600 italic leading-[1.6] font-light">
              "{currentQuote.text}"
            </p>
            <cite className="block mt-3 text-[14px] text-gray-400 not-italic">
              - {currentQuote.author}
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 pb-8" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[16px] md:text-[17px] text-gray-600 leading-[1.8]">
            You are not just a visitor in this journey - you are part of the team. These questions are designed to help
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
                  maxHeight: openCategory === index ? "500px" : "0px",
                  opacity: openCategory === index ? 1 : 0,
                }}
              >
                <div className="px-6 pb-6 pt-1">
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
                border: showDenialScript ? "1.5px solid rgba(180, 60, 60, 0.15)" : "1.5px solid rgba(225, 215, 235, 0.4)",
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
      <section className="px-6 pb-16" style={{ backgroundColor: "#FDFCF8" }}>
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
