import React from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import ClinicianPerspective from "@/components/ClinicianPerspective";
import ResourceRecommendations from "@/components/ResourceRecommendations";
import SaveForAppointment from "@/components/SaveForAppointment";

export default function QuestionsBeforeChemotherapy() {
  return (
    <div style={{ backgroundColor: "#FDFCF8" }} className="min-h-screen font-sans text-gray-900">
      <SEO 
        title="Questions to Ask Before Starting Chemotherapy | MyHealthCanvas"
        description="A comprehensive guide on what to ask your oncologist before starting chemotherapy. Learn about protocols, side effects, ports, and how to prepare."
        keywords="questions before chemotherapy, what to ask before chemo, chemotherapy preparation questions, chemo side effects, chemo port, chemo cycles"
        canonicalPath="/questions-before-chemotherapy"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-[30px] md:text-[48px] font-bold text-gray-900 mb-6 leading-tight">
          Questions to Ask Before Starting Chemotherapy
        </h1>
        <p className="text-[17px] md:text-[20px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Hearing that you need chemotherapy can feel overwhelming. Having the right questions ready can help you regain a sense of control, understand your treatment plan, and prepare for the road ahead.
        </p>
      </section>

      {/* Why it matters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-6">
            Why Asking the Right Questions Matters
          </h2>
          <div className="space-y-5 text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
            <p>
              When your oncologist first mentions chemotherapy, it's completely normal for your mind to go blank. The word itself carries so much weight, and the immediate rush of anxiety can make it difficult to process anything else being said in the room. But chemotherapy isn't just one single thing—it's a broad term for many different types of drugs, given in various combinations, on different schedules, with vastly different side effect profiles. What your friend or family member experienced during their chemotherapy might be entirely different from what you will experience.
            </p>
            <p>
              Understanding your specific chemotherapy protocol is the crucial first step in preparing your body and your life for treatment. Knowing exactly what to expect allows you to plan for time off work, arrange for help at home, organize childcare, and take proactive steps to manage potential side effects before they become severe. It shifts you from being a passive recipient of treatment to an active, empowered participant in your own care. When you know the roadmap, the journey becomes slightly less terrifying.
            </p>
            <p>
              Remember that your oncology team expects you to have questions. You are not bothering them by asking for clarification, nor are you taking up too much time. In fact, a well-informed patient is often better equipped to communicate symptoms early, which helps the medical team provide better supportive care and keep you out of the hospital. Take a deep breath, bring a notebook or a trusted friend to your appointment, and use this comprehensive guide to ensure you get the answers you need to feel ready.
            </p>
            <p>
              You might also find it helpful to review our guide on <Link href="/oncology-questions"><a className="text-[oklch(0.55_0.15_195)] hover:underline">general oncology questions</a></Link> or what to expect in the <Link href="/first-30-days-after-diagnosis"><a className="text-[oklch(0.55_0.15_195)] hover:underline">first 30 days after diagnosis</a></Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Questions to ask */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-8 text-center">
          Essential Questions for Your Oncologist
        </h2>
        
        <div className="space-y-8">
          {/* Question 1 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              1. What is the exact name of my chemotherapy regimen, and what is its primary goal?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Chemotherapy regimens often have acronyms (like AC-T, FOLFOX, or CHOP). Ask for the full names of the drugs involved, as this will help you if you decide to do your own research later. More importantly, clarify the goal of the treatment. Is it curative (intended to eliminate the cancer entirely)? Neoadjuvant (designed to shrink a tumor before surgery)? Adjuvant (given to kill microscopic cells after surgery to prevent recurrence)? Or palliative (intended to control symptoms, slow growth, and extend life)? Knowing the goal helps frame your expectations, informs your decision-making, and helps you understand the "why" behind the difficult days.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              2. What is the schedule (cycles) for this treatment, and how long will the entire process last?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Chemotherapy is usually given in cycles—a period of active treatment followed by a period of rest to allow your healthy cells to recover. Ask how often you will receive infusions (e.g., once a week, every two weeks, every three weeks) and how many total cycles are planned. You should also ask how long each actual infusion appointment will take; some take 30 minutes, while others take 6 to 8 hours. This information will help you map out your calendar for the coming months, coordinate rides to the clinic, and understand when you might feel your best or worst during each cycle.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              3. Will I need a port-a-cath or a PICC line, or can I use peripheral IVs?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Some chemotherapy drugs are "vesicants," meaning they can be harsh on the small peripheral veins in your arms and cause severe tissue damage if they leak. Your doctor may strongly recommend a port-a-cath (a small device implanted under the skin in your chest) or a PICC line (a catheter placed in your upper arm) to make infusions and frequent blood draws easier and safer. If a port is recommended, ask when the minor outpatient surgery to place it will happen, how long it takes to heal, and how to care for it at home.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              4. What are the most common side effects of these specific drugs, and how can we manage them?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Not all chemotherapy causes the same side effects. Ask specifically about nausea, profound fatigue, neuropathy (numbness, tingling, or pain in hands and feet), mouth sores, changes in taste, and digestive issues like diarrhea or constipation. Knowing what is common allows you to prepare proactively—for instance, by getting prescription anti-nausea medications filled before your first session, buying soft toothbrushes and gentle mouthwashes, or stocking up on easy-to-digest foods. Ask your doctor what their philosophy is on symptom management; you want a team that is aggressive about preventing nausea before it starts.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              5. Will I lose my hair, and if so, when? Is cold capping an option for me?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Hair loss (alopecia) is a deeply emotional and visible side effect, but it doesn't happen with every single drug. Ask if your specific regimen causes hair loss, and typically around which day or week it begins (often around days 14-21 after the first infusion). If keeping your hair is important to you, ask if scalp cooling (cold capping) is a safe and viable option for your type of cancer and treatment plan. Inquire about the success rates of cold capping with your specific drugs, and whether the clinic has the machines on-site or if you need to rent a manual system.
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              6. How will this treatment affect my immune system and blood counts?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Chemotherapy often lowers white blood cell counts, significantly increasing your risk of infection. Ask when your "nadir" (the lowest point of your blood counts) is expected during each cycle, as this is when you are most vulnerable. Inquire if you will receive growth factor injections (like Neulasta, Zarxio, or Nivestym) to help boost your white blood cells, and ask about the bone pain that can sometimes accompany these shots. Discuss what precautions you need to take regarding crowds, food safety, gardening, and being around sick people or children.
            </p>
          </div>

          {/* Question 7 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              7. Could this treatment affect my fertility or put me into early menopause?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              If you plan to have children in the future, this is a critical conversation to have before treatment begins. Some chemotherapy drugs can cause temporary or permanent infertility, or trigger early menopause. Ask for an urgent referral to a reproductive endocrinologist or fertility preservation specialist to discuss options like egg, embryo, or sperm freezing. This process takes time and must be completed before chemotherapy starts, so it requires immediate action.
            </p>
          </div>

          {/* Question 8 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              8. Will I be able to work and maintain my normal daily routine?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Everyone reacts differently to chemotherapy, but your doctor can give you a general idea based on your specific regimen and overall health. Some people are able to work through treatment with minor adjustments, while others need to take short-term disability or a leave of absence. Ask which days of the cycle are typically the hardest (often days 3-5 after infusion) so you can plan your work schedule, arrange for childcare, and coordinate household help accordingly.
            </p>
          </div>

          {/* Question 9 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              9. What symptoms warrant an immediate call to the clinic or a trip to the Emergency Room?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              This is perhaps the most important safety question you can ask. Ask for specific parameters. Usually, a fever of 100.4°F (38°C) or higher is considered a medical emergency during chemotherapy because your body may not be able to fight off the infection. Ask about other red flags, such as uncontrolled vomiting (unable to keep fluids down for 24 hours), severe diarrhea, shortness of breath, chest pain, or unusual bleeding. Make sure you know the after-hours phone number for the on-call oncologist.
            </p>
          </div>

          {/* Question 10 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              10. Are there any supplements, vitamins, or specific foods I should avoid?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Certain vitamins and supplements (like high-dose antioxidants, St. John's Wort, turmeric, or grapefruit) can interfere with how your liver processes chemotherapy drugs, making the treatment either less effective or dangerously toxic. Always provide your oncology team with a complete list of everything you take over-the-counter. Ask if there are specific dietary restrictions, such as avoiding raw seafood, unpasteurized dairy, or undercooked meats while your immune system is compromised.
            </p>
          </div>
        </div>
      </section>

      {/* What to write down */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-6">
            What to Write Down During Your Appointment
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-700 mb-6 leading-relaxed">
            Information comes fast during oncology appointments, and "chemo brain" or simple stress can make it hard to retain details. Don't rely on your memory. Make sure you leave the clinic with these specific details written down clearly:
          </p>
          <ul className="space-y-4 text-[15px] md:text-[17px] text-gray-700 list-disc pl-6">
            <li><strong>The exact names of your drugs:</strong> Both the generic and brand names, so you know exactly what is going into your body.</li>
            <li><strong>Your treatment schedule:</strong> The dates of your first few infusions, any required lab work beforehand, and follow-up visits with the doctor.</li>
            <li><strong>Pre-medications:</strong> What you need to take before arriving at the infusion center (e.g., steroids or anti-nausea pills) and exactly when to take them.</li>
            <li><strong>Emergency contacts:</strong> The daytime clinic number, the after-hours/weekend triage number, and instructions on when to go straight to the ER.</li>
            <li><strong>Symptom management plan:</strong> Exactly which medications to take for nausea, diarrhea, or constipation, including dosages and frequency. Know which ones are preventative and which are "as needed."</li>
          </ul>
        </div>
      </section>

      {/* Appointment preparation tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-8 text-center">
          Appointment Preparation Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Bring a "Second Set of Ears"</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Always bring a trusted friend, partner, or family member to take notes. When you are the patient, stress can make it hard to absorb complex medical information. Let your companion be the designated scribe so you can focus on the conversation.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ask to Record the Audio</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Many doctors are perfectly fine with you using your smartphone's voice memo app to record the conversation. Always ask for permission first. Being able to listen back later when you are calm is incredibly helpful for catching details you missed.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Prioritize Your List</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Doctors have limited time, and appointments can feel rushed. Put your top 3 most urgent questions at the very top of your list to ensure they get answered first, just in case the appointment runs short.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Need a structured way to prepare?</h3>
          <p className="text-[15px] md:text-[17px] text-gray-600 mb-6">
            Download or print our comprehensive checklist to ensure you don't miss any critical steps before your next oncology appointment.
          </p>
          <Link href="/oncology-appointment-checklist">
            <a className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors hover:opacity-90" style={{ backgroundColor: "oklch(0.55 0.15 195)" }}>
              View Appointment Checklist
            </a>
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center" style={{ backgroundColor: "#f9f9f7" }}>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Organize Your Cancer Journey</h3>
          <p className="text-[15px] md:text-[17px] text-gray-600 mb-6">
            MyHealthCanvas provides tools to track your symptoms, organize your questions, and keep your medical information in one secure place.
          </p>
          <Link href="/myhealthcanvas">
            <a className="inline-block px-6 py-3 rounded-lg font-medium text-white transition-colors hover:opacity-90" style={{ backgroundColor: "oklch(0.55 0.15 195)" }}>
              Explore MyHealthCanvas
            </a>
          </Link>
        </div>
      </section>

      {/* Reusable Components */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12">
        <ClinicianPerspective />
        <SaveForAppointment pageTitle="Oncology Questions" />
      <ResourceRecommendations exclude={["/questions-before-chemotherapy"]} />
      </div>
    </div>
  );
}
