import { useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface OncologyFAQProps {
  faqs?: FAQItem[];
}

const defaultFAQs: FAQItem[] = [
  {
    question: "How do I prepare for an oncology appointment?",
    answer:
      "Write down your questions before the appointment, bring a notebook or phone to take notes, and consider bringing a trusted person with you. Organise your questions by priority so the most important ones are covered first. Tools like MyHealthCanvas can help you structure your preparation.",
  },
  {
    question: "Should I bring a list of questions to my oncologist?",
    answer:
      "Yes. Research shows that patients who bring written questions to appointments remember more information, ask better questions, and feel more confident about their care. Even a short list of three to five questions can make a significant difference.",
  },
  {
    question: "How can I remember everything my doctor tells me?",
    answer:
      "Take notes during the appointment or ask if you can record the conversation. Bring someone with you who can listen and take notes. After the appointment, write down what you remember as soon as possible. A structured template like MyHealthCanvas helps you capture key information in real time.",
  },
  {
    question: "What should caregivers bring to oncology appointments?",
    answer:
      "Caregivers should bring a list of the patient's current medications, any symptom changes since the last visit, questions about practical care at home, and a way to take notes. It also helps to have a list of questions about what to expect next and who to call in an emergency.",
  },
  {
    question: "How do I track symptoms between oncology visits?",
    answer:
      "Keep a simple daily log of symptoms, including when they started, how severe they are, and what makes them better or worse. Note any new medications or changes in routine. Bring this log to your next appointment so your care team can see patterns over time.",
  },
];

export default function OncologyFAQ({ faqs }: OncologyFAQProps) {
  const items = faqs || defaultFAQs;

  // Inject FAQ schema markup
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: items.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    script.id = "faq-schema";
    document.head.appendChild(script);

    return () => {
      const existing = document.getElementById("faq-schema");
      if (existing) existing.remove();
    };
  }, [items]);

  return (
    <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {items.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
            >
              <summary className="cursor-pointer px-6 py-5 text-[16px] font-semibold text-gray-800 flex items-center justify-between list-none">
                <span>{faq.question}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform ml-4 shrink-0">
                  ▾
                </span>
              </summary>
              <div className="px-6 pb-5">
                <p className="text-[15px] text-gray-600 leading-[1.7]">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
