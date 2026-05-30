import React from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import ClinicianPerspective from "@/components/ClinicianPerspective";
import ResourceRecommendations from "@/components/ResourceRecommendations";
import SaveForAppointment from "@/components/SaveForAppointment";

export default function QuestionsAboutClinicalTrials() {
  return (
    <div style={{ backgroundColor: "#FDFCF8" }} className="min-h-screen font-sans text-gray-900">
      <SEO 
        title="Questions to Ask About Cancer Clinical Trials | MyHealthCanvas"
        description="A comprehensive guide on what to ask your oncologist about cancer clinical trials, including eligibility, costs, risks, and how to find the right trial for you."
        keywords="clinical trial questions cancer, should I join a clinical trial, questions about cancer clinical trials, cancer research, oncology trials"
        canonicalPath="/questions-about-clinical-trials"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-[30px] md:text-[48px] font-bold text-gray-900 leading-tight mb-6">
          Questions to Ask About Cancer Clinical Trials
        </h1>
        <p className="text-[15px] md:text-[17px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Clinical trials can offer access to cutting-edge treatments, but deciding whether to participate is a deeply personal choice. Here is a practical guide to help you navigate the conversation with your oncology team.
        </p>
      </section>

      {/* Why it matters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-6">
            Why It Matters: Understanding Clinical Trials
          </h2>
          <div className="space-y-5 text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
            <p>
              When you hear the words "clinical trial," it's completely normal to feel a mix of hope and hesitation. For many of us who have navigated a cancer diagnosis, the idea of participating in research can feel overwhelming. You might wonder if you'll be treated like a "guinea pig," or if you might receive a placebo instead of actual treatment. These are valid fears, but the reality of modern oncology trials is highly regulated, deeply ethical, and focused on patient safety.
            </p>
            <p>
              Clinical trials are the engine of progress in cancer care. Every standard treatment available today—from targeted therapies to immunotherapies—was once part of a clinical trial. By participating, you not only gain access to potentially groundbreaking treatments before they are widely available, but you also contribute to the future of cancer care for others. However, a trial isn't the right choice for everyone, and it's crucial to make an informed decision based on your specific diagnosis, stage, and personal circumstances.
            </p>
            <p>
              The key to making the right choice is asking the right questions. You need to understand the purpose of the trial, the phase it's in, what the potential side effects might be, and how it will impact your daily life, including travel and finances. Your medical team is there to help you weigh the potential benefits against the risks. Remember, you are always in control—even if you enroll in a trial, you have the right to withdraw at any time, for any reason.
            </p>
          </div>
        </div>
      </section>

      {/* Questions to ask */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-8 text-center">
          10 Essential Questions to Ask Your Oncologist
        </h2>
        
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              1. What is the main purpose of this clinical trial?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Every trial has a specific goal. Some are designed to test if a new drug is safe (Phase 1), while others compare a new treatment to the current standard of care to see if it's more effective (Phase 3). Understanding the primary objective helps you set realistic expectations. Ask your doctor what the researchers are hoping to prove and how that aligns with your personal treatment goals.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              2. Why do you think this specific trial is a good fit for me?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Your oncologist shouldn't just hand you a brochure; they should explain exactly why your specific cancer type, genetic markers, and health history make you a strong candidate. Ask them to compare the potential benefits of the trial against the standard treatment options currently available to you. You want to know if this trial offers a realistic chance of a better outcome than the standard route.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              3. Is there a chance I will receive a placebo?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              This is one of the most common fears. In cancer clinical trials, placebos are rarely used alone if there is an effective standard treatment available. Usually, you will receive either the standard treatment plus the new drug, or the standard treatment plus a placebo. It is vital to clarify exactly how the "control group" is treated so you know you won't be left without care.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              4. What are the known risks and potential side effects?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              While the new treatment might be promising, it could also come with unknown or severe side effects. Ask for a detailed breakdown of what previous participants have experienced. How do these side effects compare to those of the standard treatment? Knowing this helps you prepare mentally and physically, and allows you to decide what level of risk you are comfortable taking.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              5. How will this trial affect my daily life and schedule?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Clinical trials often require more frequent monitoring than standard care. This might mean extra blood tests, more frequent scans, and additional clinic visits. Ask for a realistic estimate of the time commitment. Will you need to take more time off work? Will you need a caregiver to drive you to more appointments? Understanding the logistical burden is crucial.
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              6. Who will pay for the trial and the associated costs?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Financial toxicity is a real concern in cancer care. Typically, the trial sponsor pays for the experimental drug and any tests done purely for research. However, your insurance is usually billed for routine care (like standard blood work or doctor visits). Ask to speak with a financial counselor or the trial coordinator to get a clear picture of what you might owe out-of-pocket.
            </p>
          </div>

          {/* Question 7 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              7. Will I need to travel, and are travel expenses covered?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Some trials are only available at major research hospitals, which might be hours away from your home. Ask if the trial sponsor provides reimbursement for travel, lodging, or meals. If you have to travel frequently, the physical and financial toll can add up quickly, so it's important to factor this into your decision.
            </p>
          </div>

          {/* Question 8 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              8. How will we know if the treatment is working?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Ask about the timeline for evaluating the treatment's effectiveness. Will you have scans every few weeks? What specific markers are they looking for? Knowing the schedule for these evaluations can help manage your anxiety and give you clear milestones to look forward to during the trial.
            </p>
          </div>

          {/* Question 9 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              9. What happens if my cancer progresses while on the trial?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              It's a difficult question, but a necessary one. You need to know the contingency plan. If the experimental treatment isn't working, will you be immediately transitioned to a standard treatment? Will you be eligible for other trials? Make sure you understand your options if things don't go as hoped.
            </p>
          </div>

          {/* Question 10 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-medium text-gray-900 mb-3" style={{ color: "oklch(0.55 0.15 195)" }}>
              10. Who will be in charge of my care during the trial?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              When you join a trial, you often work with a new team of research nurses and trial coordinators. Ask if your primary oncologist will still be involved in your day-to-day care. It's important to know who to call if you experience a side effect at 2 AM, and how your regular medical team will be kept in the loop.
            </p>
          </div>
        </div>
      </section>

      {/* What to write down */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-6">
            What to Write Down During Your Visit
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-700 mb-6 leading-relaxed">
            Clinical trial discussions involve a lot of complex information. Don't rely on your memory. Bring a notebook and make sure you document the following details:
          </p>
          <ul className="space-y-4 text-[15px] md:text-[17px] text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "oklch(0.55 0.15 195)" }}>•</span>
              <span><strong>The exact name and phase of the trial:</strong> You will want to research this later on sites like ClinicalTrials.gov.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "oklch(0.55 0.15 195)" }}>•</span>
              <span><strong>Contact information for the trial coordinator:</strong> This person will be your lifeline for logistical questions.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "oklch(0.55 0.15 195)" }}>•</span>
              <span><strong>Key dates and deadlines:</strong> Note any deadlines for enrollment or dates for preliminary testing.</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-1" style={{ color: "oklch(0.55 0.15 195)" }}>•</span>
              <span><strong>Specific exclusion criteria:</strong> Write down anything that might disqualify you, so you can gather necessary medical records to prove eligibility.</span>
            </li>
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
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold" style={{ backgroundColor: "oklch(0.55 0.15 195)" }}>1</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Bring a Support Person</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Have someone else take notes. When you are processing complex medical information, it's invaluable to have a second set of ears to catch details you might miss.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold" style={{ backgroundColor: "oklch(0.55 0.15 195)" }}>2</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Request the Informed Consent Form Early</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Ask if you can take the informed consent document home to read before signing. It's often a long, dense document, and you shouldn't feel pressured to sign it on the spot.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 text-white font-bold" style={{ backgroundColor: "oklch(0.55 0.15 195)" }}>3</div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Record the Conversation</h3>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Ask your doctor if you can record the audio of the appointment on your phone. This allows you to replay the conversation later when you are in a calmer state of mind.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-12">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-4">
            Get Organized for Your Next Appointment
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't go into your clinical trial discussion unprepared. Use our comprehensive checklist to ensure you cover all the critical points with your oncology team.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/oncology-appointment-checklist">
              <a className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white transition-colors duration-200" style={{ backgroundColor: "oklch(0.55 0.15 195)" }}>
                Get the Appointment Checklist
              </a>
            </Link>
            <Link href="/myhealthcanvas">
              <a className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200">
                Explore MyHealthCanvas
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Reusable Components */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ClinicianPerspective />
        <div className="mt-12">
          <SaveForAppointment pageTitle="Oncology Questions" />
      <ResourceRecommendations exclude={["/questions-about-clinical-trials"]} />
        </div>
      </div>
    </div>
  );
}
