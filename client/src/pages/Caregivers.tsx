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

export default function Caregivers() {
  const [openCategory, setOpenCategory] = useState<number | null>(null);
  const [quoteIndex] = useState(() => Math.floor(Math.random() * quotes.length));
  const printRef = useRef<HTMLDivElement>(null);

  const toggleCategory = (index: number) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  const handlePrint = () => {
    const printContent = categories
      .map(
        (cat) =>
          `\n${cat.title}\n${"=".repeat(cat.title.length)}\n${cat.questions.map((q, i) => `${i + 1}. ${q}`).join("\n")}`
      )
      .join("\n\n");

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Caregiver Question Checklist - MyHealthCanvas</title>
            <style>
              body { font-family: Georgia, serif; max-width: 700px; margin: 40px auto; padding: 0 20px; color: #1a2332; line-height: 1.8; }
              h1 { font-size: 24px; color: #19878C; margin-bottom: 8px; }
              h2 { font-size: 18px; color: #643296; margin-top: 32px; margin-bottom: 12px; }
              .subtitle { font-size: 14px; color: #666; margin-bottom: 32px; }
              ol { padding-left: 20px; }
              li { margin-bottom: 12px; font-size: 15px; }
              .checkbox { display: inline-block; width: 16px; height: 16px; border: 1.5px solid #999; margin-right: 10px; vertical-align: middle; }
              .footer { margin-top: 40px; padding-top: 16px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
              @media print { body { margin: 20px; } }
            </style>
          </head>
          <body>
            <h1>Caregiver Question Checklist</h1>
            <p class="subtitle">MyHealthCanvas - Take this list into your next consultation</p>
            ${categories
              .map(
                (cat) => `
              <h2>${cat.title}</h2>
              <ol>
                ${cat.questions.map((q) => `<li><span class="checkbox"></span> ${q}</li>`).join("")}
              </ol>
            `
              )
              .join("")}
            <div class="footer">
              <p>MyHealthCanvas.com - Created by a 2x cancer survivor</p>
              <p>These questions are designed to help caregivers manage the logistics of care and ensure the patient's dignity is maintained.</p>
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
        {/* Faded Safe Harbor image as background */}
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
        {/* Warm overlay */}
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
          {/* Rotating quote */}
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
              {/* Accordion Button */}
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

              {/* Accordion Content */}
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
            Print this checklist
          </button>
          <p className="text-[13px] text-gray-400">
            Take this list into your next consultation
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
