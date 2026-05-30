import React from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import ClinicianPerspective from "@/components/ClinicianPerspective";
import ResourceRecommendations from "@/components/ResourceRecommendations";

export default function QuestionsBeforeImmunotherapy() {
  return (
    <div style={{ backgroundColor: "#FDFCF8" }} className="min-h-screen pb-20">
      <SEO 
        title="Questions to Ask Before Starting Immunotherapy | MyHealthCanvas"
        description="A comprehensive guide of essential questions to ask your oncologist before starting immunotherapy. Learn about side effects, biomarkers, and how it differs from chemotherapy."
        keywords="questions before immunotherapy, immunotherapy questions cancer, what to ask about immunotherapy, checkpoint inhibitors, immune-related side effects, PD-L1, MSI"
        canonicalPath="/questions-before-immunotherapy"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Essential Questions to Ask Before Starting Immunotherapy
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Immunotherapy is fundamentally different from traditional chemotherapy. It trains your own immune system to fight cancer. Here is exactly what you need to ask your care team to understand your treatment plan, prepare for unique side effects, and advocate for yourself.
        </p>
      </section>

      {/* Why it matters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Why This Conversation Matters</h2>
          <div className="space-y-5 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              When my oncologist first mentioned immunotherapy, I felt a surge of hope. The idea of using my own body's defenses to attack the cancer sounded far more natural than the harsh chemicals of traditional chemotherapy. But I quickly learned that "natural" doesn't mean "without risks." Immunotherapy is a powerful tool, and it comes with its own entirely distinct set of rules, expectations, and potential side effects.
            </p>
            <p>
              Unlike chemotherapy, which directly attacks rapidly dividing cells (both cancerous and healthy), immunotherapy—specifically checkpoint inhibitors—takes the brakes off your immune system. This allows your T-cells to recognize and destroy cancer cells. However, because your immune system is now hyper-activated, it can sometimes mistakenly attack healthy organs, leading to immune-related adverse events (irAEs). These side effects can happen at any time—during treatment, or even months after you've finished.
            </p>
            <p>
              Having a detailed conversation with your oncologist before your first infusion is critical. You need to understand your specific biomarkers (like PD-L1 or MSI status) that indicate whether this treatment is likely to work for you. You also need to know exactly what symptoms to watch for, because with immunotherapy, catching a side effect early can mean the difference between a simple steroid prescription and a hospital stay. The questions below are designed to help you navigate this complex but incredibly promising landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Questions to ask */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-[#f9f9f7] rounded-3xl my-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">10 Crucial Questions for Your Oncologist</h2>
        
        <div className="space-y-8">
          {/* Question 1 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">1.</span>
              What specific type of immunotherapy are you recommending, and how does it work?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> "Immunotherapy" is a broad term. You might be getting a checkpoint inhibitor (like Keytruda or Opdivo), CAR T-cell therapy, or a cancer vaccine. Understanding the exact mechanism helps you grasp why it was chosen for your specific cancer type and what it's actually doing inside your body.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">2.</span>
              What biomarkers were tested on my tumor, and what do the results mean for this treatment?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> Immunotherapy isn't a guessing game. Doctors look for specific markers on your tumor cells, such as PD-L1 expression, Microsatellite Instability (MSI-High), or Tumor Mutational Burden (TMB). High levels of these markers often indicate that the tumor is more likely to respond to checkpoint inhibitors. Ask your doctor to explain your specific pathology report.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">3.</span>
              Will I be receiving immunotherapy alone, or in combination with chemotherapy or targeted therapy?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> Increasingly, oncologists are combining immunotherapy with traditional chemotherapy or other drugs. Chemotherapy can sometimes break open cancer cells, releasing antigens that make it easier for the immunotherapy-boosted immune system to spot and attack the cancer. Knowing if you're getting a combination helps you prepare for a wider range of potential side effects.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">4.</span>
              What are the most common immune-related side effects (irAEs) for this specific drug?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> Because immunotherapy revs up your immune system, it can cause inflammation in healthy organs. This can manifest as colitis (severe diarrhea), pneumonitis (lung inflammation causing cough/shortness of breath), hepatitis (liver inflammation), or dermatitis (severe rashes). You need to know exactly what to look out for.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">5.</span>
              What symptoms require an immediate call to the clinic or a trip to the emergency room?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> With chemotherapy, you might wait out a bout of nausea. With immunotherapy, a sudden onset of diarrhea or a new, persistent cough is a red flag that requires immediate medical intervention (usually high-dose steroids) to calm the immune system down before permanent organ damage occurs. Get a clear list of "red flag" symptoms.
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">6.</span>
              How will this treatment affect my pre-existing autoimmune conditions?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> If you already have an autoimmune disease (like rheumatoid arthritis, lupus, or Crohn's disease), immunotherapy can cause it to flare up significantly. Your oncologist needs to coordinate closely with your rheumatologist or specialist to weigh the risks and manage any exacerbations.
            </p>
          </div>

          {/* Question 7 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">7.</span>
              How often will I receive treatments, and how long is the overall treatment plan?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> Immunotherapy infusions are typically given every 2, 3, 4, or 6 weeks. Unlike chemotherapy, which often has a set number of cycles, immunotherapy might continue for a year, two years, or until the disease progresses or side effects become intolerable. Knowing the schedule helps you plan your life and work.
            </p>
          </div>

          {/* Question 8 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">8.</span>
              How will we know if the immunotherapy is working?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> Immunotherapy responses can look different on scans. Sometimes, tumors actually appear larger on the first scan before they shrink—a phenomenon called "pseudoprogression," caused by immune cells swarming the tumor. Ask your doctor how and when they will evaluate your progress to avoid unnecessary panic.
            </p>
          </div>

          {/* Question 9 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">9.</span>
              Can immunotherapy affect my endocrine system (thyroid, pituitary, adrenal glands)?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> Endocrine issues are a very common, yet often subtle, side effect of checkpoint inhibitors. Symptoms like extreme fatigue, weight changes, or feeling unusually cold might be signs of thyroid dysfunction or adrenal insufficiency. These conditions are usually permanent but can be easily managed with daily hormone replacement pills.
            </p>
          </div>

          {/* Question 10 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">10.</span>
              Who do I call after hours or on weekends if I experience a concerning side effect?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Context:</strong> Immune-related side effects don't respect office hours. You need a direct line to an on-call oncologist or triage nurse who understands immunotherapy. If you go to a local ER, the doctors there might not be familiar with irAEs, so you must have a way for your oncology team to communicate with them.
            </p>
          </div>
        </div>
      </section>

      {/* What to write down */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What to Write Down During the Appointment</h2>
          <p className="text-gray-700 mb-6 text-lg">
            When discussing immunotherapy, the details matter immensely. Don't rely on your memory. Make sure you leave the appointment with these specific pieces of information written down:
          </p>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <svg className="w-6 h-6 text-[oklch(0.55_0.15_195)] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>The exact name of the drug(s):</strong> Both the brand name (e.g., Keytruda) and the generic name (e.g., pembrolizumab).</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-[oklch(0.55_0.15_195)] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>Your biomarker status:</strong> Write down your PD-L1 percentage or MSI status. This is crucial information if you ever seek a second opinion.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-[oklch(0.55_0.15_195)] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>The 24/7 emergency contact number:</strong> Put this in your phone immediately, and give it to your primary caregiver.</span>
            </li>
            <li className="flex items-start">
              <svg className="w-6 h-6 text-[oklch(0.55_0.15_195)] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>The baseline tests required:</strong> Note down any blood work (especially thyroid panels) or scans needed before your first infusion.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Appointment preparation tips */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto bg-[#f9f9f7] rounded-3xl my-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Appointment Preparation Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">1. Bring an Immunotherapy Wallet Card</h3>
            <p className="text-gray-600">
              Ask your clinic for an immunotherapy wallet card, or print one online. It states that you are on immunotherapy and warns ER doctors against giving you certain contraindicated treatments. Carry it at all times.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">2. Document Your Baseline</h3>
            <p className="text-gray-600">
              Before starting, take note of your normal bowel habits, energy levels, and skin condition. Because immunotherapy side effects involve inflammation, knowing your "normal" helps you spot subtle changes early.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">3. Review Your Supplements</h3>
            <p className="text-gray-600">
              Bring a list of every vitamin, probiotic, or herbal supplement you take. Some supplements can interfere with how your immune system responds to the treatment.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2 text-lg">4. Bring a Second Set of Ears</h3>
            <p className="text-gray-600">
              The rules for immunotherapy are different from chemo. Bring a caregiver who can specifically listen for the side effect warning signs and help you monitor for them at home.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[oklch(0.55_0.15_195)] rounded-xl p-8 text-white shadow-md">
            <h3 className="text-2xl font-bold mb-4">Get the Complete Checklist</h3>
            <p className="mb-6 text-white/90">
              Download our comprehensive oncology appointment checklist to ensure you never leave the doctor's office with unanswered questions.
            </p>
            <Link href="/oncology-appointment-checklist">
              <a className="inline-block bg-white text-[oklch(0.55_0.15_195)] font-semibold px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                View Checklist
              </a>
            </Link>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 text-white shadow-md">
            <h3 className="text-2xl font-bold mb-4">Organize Your Journey</h3>
            <p className="mb-6 text-gray-300">
              Use MyHealthCanvas to track your symptoms, store your biomarker results, and keep your medical team's contact info in one secure place.
            </p>
            <Link href="/myhealthcanvas">
              <a className="inline-block bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Explore MyHealthCanvas
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Components */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <ClinicianPerspective />
        <div className="mt-16">
          <ResourceRecommendations exclude={["/questions-before-immunotherapy"]} />
        </div>
      </div>
    </div>
  );
}
