import React from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import ClinicianPerspective from "@/components/ClinicianPerspective";
import ResourceRecommendations from "@/components/ResourceRecommendations";
import SaveForAppointment from "@/components/SaveForAppointment";
import { CheckCircle, Heart, ClipboardList, AlertCircle, Clock, Shield, BookOpen, Stethoscope } from "lucide-react";

export default function CaregiverOncologyQuestions() {
  return (
    <div className="min-h-screen font-sans text-gray-900" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO 
        title="Essential Questions for Cancer Caregivers to Ask the Oncologist"
        description="A comprehensive guide for cancer caregivers on what questions to ask at oncology appointments. Practical advice on managing care, medications, and caregiver burnout."
        keywords="caregiver oncology questions, what should caregivers ask oncologist, cancer caregiver appointment questions, caregiver burnout, cancer treatment support"
        canonicalPath="/caregiver-oncology-questions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-[30px] md:text-[48px] font-bold text-gray-900 leading-tight mb-6">
          The Caregiver's Guide: Essential Questions for the Oncology Team
        </h1>
        <p className="text-[15px] md:text-[17px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Stepping into the role of a cancer caregiver is overwhelming. You are suddenly the project manager, nurse, advocate, and emotional anchor. Here is exactly what you need to ask to manage their care—and protect your own well-being.
        </p>
      </section>

      {/* Why it matters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <Heart className="w-6 h-6" style={{ color: "oklch(0.55 0.15 195)" }} />
            Why Your Role in the Appointment Matters
          </h2>
          <div className="prose prose-lg text-gray-600 max-w-none space-y-6 text-[15px] md:text-[17px] leading-relaxed">
            <p>
              When the doctor walks into the room, their primary focus is naturally on the patient. They are looking at scans, discussing pathology reports, and outlining treatment protocols. But as a two-time cancer survivor, I can tell you this with absolute certainty: the caregiver is the unsung hero of the entire cancer journey. You are the one who will be managing the side effects at 2:00 AM, organizing the pillboxes, and tracking the subtle changes in your loved one's condition. Without you, the treatment plan is just a piece of paper.
            </p>
            <p>
              Because you are the one executing the care plan at home, your questions are just as critical as the patient's. Often, patients are too overwhelmed, fatigued, or frightened to process everything being said. They might minimize their symptoms to the doctor, not wanting to be a "bother" or fearing that complaining might delay their treatment. As the caregiver, you provide the objective reality of what is happening between appointments. You are the eyes and ears of the oncology team when the patient is at home.
            </p>
            <p>
              However, being a caregiver also carries an immense physical and emotional burden. If you don't ask the right questions about practical day-to-day management, emergency protocols, and support resources, you risk rapid burnout. The oncology team is there to support <em>both</em> of you. By asking targeted, practical questions, you build a partnership with the medical team that ensures better care for your loved one and a more sustainable path for yourself. Remember, you cannot pour from an empty cup. Advocating for clarity in your caregiving duties is the first step in advocating for your own survival through this process.
            </p>
            <p>
              It is also important to recognize that your perspective is unique. You notice the subtle shifts in mood, the slight decrease in appetite, or the wince of pain that the patient tries to hide. Bringing these observations to the oncologist's attention can lead to crucial adjustments in medication or supportive care that drastically improve the patient's quality of life. Your voice matters, and you must use it.
            </p>
          </div>
        </div>
      </section>

      {/* Questions to ask */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-8 flex items-center gap-3">
          <ClipboardList className="w-6 h-6" style={{ color: "oklch(0.55 0.15 195)" }} />
          Crucial Questions to Ask the Oncologist
        </h2>
        
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              1. "What specific side effects require an immediate trip to the ER versus a call to the clinic?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> In the middle of the night, a fever or sudden pain can cause panic. You need clear, black-and-white parameters. For example, a fever of 100.4°F (38°C) during chemotherapy is often a medical emergency requiring immediate IV antibiotics due to a compromised immune system (neutropenia). On the other hand, mild nausea or fatigue might just need a prescription adjustment during normal clinic hours. Get the exact numbers and symptoms written down so you aren't second-guessing yourself at 3:00 AM.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              2. "Who is our primary point of contact when we are at home, and how do we reach them after hours?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> You will rarely call the oncologist directly for day-to-day issues. You need the direct line to the triage nurse, the care coordinator, or the on-call physician. Ask about the patient portal—is it monitored on weekends? Knowing exactly who to call, what number to dial, and how quickly they typically respond will save you hours of anxiety and prevent unnecessary trips to the emergency room.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              3. "What is the exact schedule for medications, and what do we do if a dose is missed or vomited?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> Medication management is one of the heaviest burdens for a caregiver. You might be juggling anti-nausea meds, pain relievers, steroids, blood thinners, and the actual oral cancer drugs. Ask for a printed schedule. Crucially, find out the protocol for a rejected dose—do you give another pill, or wait until the next scheduled time? Mistakes here can be dangerous, so clarity is non-negotiable.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              4. "What physical limitations should we expect, and will we need mobility aids or home modifications?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> You need to prepare your home environment before a crisis occurs. Will they be able to climb stairs safely? Will they need a shower chair, a commode, or a walker? Treatments like surgery or certain chemotherapies that cause neuropathy can drastically alter mobility. Knowing this in advance allows you to order supplies, rearrange furniture, and make the home safe and accessible.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              5. "Are there dietary restrictions, and what should I do if they completely lose their appetite?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> Food often becomes a battleground and a source of immense stress for caregivers. Treatments can alter taste buds (making water taste like metal) or cause severe mouth sores. Ask if there are foods that interact with the chemotherapy (like grapefruit) or if they need a neutropenic diet. Get a referral to an oncology dietitian who can help you navigate weight loss, nutritional supplements, and strategies to make eating less painful.
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              6. "What level of daily care will they realistically need from me?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> You need to plan your own life, including your job, childcare, and other family responsibilities. Will they need 24/7 supervision? Can they be left alone for a few hours while you run errands? Will they need help with basic hygiene like bathing, dressing, and using the toilet? Honest answers here are vital for planning and knowing when you need to call in reinforcements from family or professional aides.
            </p>
          </div>

          {/* Question 7 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              7. "Is home health care, palliative care, or a visiting nurse an option for us?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> You do not have to do this alone. Palliative care is not hospice; it is specialized medical care focused on providing relief from the symptoms and stress of a serious illness, regardless of the diagnosis. Visiting nurses can help with port flushes, wound care, administering IV fluids, and drawing blood, saving you exhausting trips to the clinic. Advocate for these services early.
            </p>
          </div>

          {/* Question 8 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              8. "What resources does this hospital offer for caregiver support and mental health?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> Caregiver burnout is a very real medical issue that can lead to depression, anxiety, and physical illness. Many cancer centers have dedicated social workers, support groups, and counseling services specifically for caregivers. Ask to be connected with an oncology social worker immediately—don't wait until you are running on empty. Your mental health is a critical component of the patient's care plan.
            </p>
          </div>

          {/* Question 9 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              9. "How can we manage the financial toxicity of this treatment?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> The administrative and financial burden of cancer is staggering. Ask to speak with a financial navigator or counselor at the hospital. They can help with insurance pre-authorizations, co-pay assistance programs, pharmaceutical grants, and navigating disability paperwork. Do not let medical bills pile up in silence; there are often resources available if you ask early.
            </p>
          </div>

          {/* Question 10 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              10. "Are our legal documents (Advance Directives, Power of Attorney) in order for this specific hospital system?"
            </h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              <strong>Why you need to ask:</strong> While difficult to discuss, having a Medical Power of Attorney and Advance Directives on file ensures that if your loved one cannot speak for themselves, you have the legal authority to make decisions. Make sure the hospital has copies in their electronic medical record. It is far better to handle this paperwork when everyone is calm rather than during a medical crisis.
            </p>
          </div>
        </div>
      </section>

      {/* What to write down */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6" style={{ color: "oklch(0.55 0.15 195)" }} />
            What You Must Write Down During the Appointment
          </h2>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <p className="text-gray-600 text-[15px] md:text-[17px] mb-6 leading-relaxed">
              As the caregiver, you are the official scribe. The patient will likely be experiencing "white coat syndrome," dealing with chemo brain, or simply be too overwhelmed to retain the complex medical details. Here is what you need to document meticulously during every single visit:
            </p>
            <ul className="space-y-5 text-gray-600 text-[15px] md:text-[17px]">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.15 195)" }} />
                <div>
                  <strong className="text-gray-900 block mb-1">Exact names and purposes of medications:</strong>
                  <span>Write down both the generic and brand names, the precise dosage, the frequency, and the specific purpose of each drug. Note whether it should be taken with food or on an empty stomach.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.15 195)" }} />
                <div>
                  <strong className="text-gray-900 block mb-1">The treatment timeline and expectations:</strong>
                  <span>When is the next scan? How many cycles of treatment are planned? When should we expect the worst side effects to hit after an infusion (e.g., days 3-5 are usually the hardest)? Having a roadmap reduces anxiety.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.15 195)" }} />
                <div>
                  <strong className="text-gray-900 block mb-1">Actionable numbers and thresholds:</strong>
                  <span>The exact temperature that warrants an ER visit, the blood pressure limits, or the weight loss threshold that requires a call to the clinic. Vague instructions like "call if they get a fever" are not helpful at 2 AM.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "oklch(0.55 0.15 195)" }} />
                <div>
                  <strong className="text-gray-900 block mb-1">Names and roles of the care team:</strong>
                  <span>Write down the names of the triage nurses, social workers, financial navigators, and care coordinators. Building a relationship with the support staff is often more crucial than the doctor for daily survival and problem-solving.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Appointment preparation tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-8 flex items-center gap-3">
          <Shield className="w-6 h-6" style={{ color: "oklch(0.55 0.15 195)" }} />
          Caregiver Appointment Preparation Tips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Create a Shared Digital Note</h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              Keep a running list of questions on your phone in a shared note with the patient. When a symptom occurs at 3 PM on a Tuesday, write it down immediately. Do not rely on your memory for the appointment on Friday. Review and consolidate the list the night before.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Track Symptoms Objectively</h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              Bring a log of symptoms. Instead of saying "he was tired," say "he slept 16 hours on Wednesday and couldn't walk to the bathroom unassisted." Instead of "she was nauseous," say "she vomited three times on Monday despite taking Zofran." Data helps the oncologist make precise adjustments.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Ask for Permission to Record</h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              Ask the doctor, "Do you mind if I record this conversation on my phone so we can listen to it later?" Most doctors are happy to oblige, and it relieves the immense pressure of having to write down every single complex medical term accurately.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Prioritize Your List</h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              Oncologists have limited time, often only 15-20 minutes per patient. Put your top three most urgent questions at the very top of your list. Tell the doctor upfront, "I have three quick questions we need to cover today." If time runs out, you know the critical issues have been addressed.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">5. Review Previous Visit Notes</h3>
            <p className="text-gray-600 text-[15px] md:text-[17px] leading-relaxed">
              Before heading to the clinic, take 10 minutes to review the notes from your last visit. Did the doctor ask you to monitor a specific side effect? Did they order a blood test that you need the results for? Being prepared with context from the previous appointment ensures continuity of care and shows the medical team that you are an engaged, organized partner in the process.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get the Complete Checklist</h3>
              <p className="text-gray-600 mb-6 text-[15px] md:text-[17px]">
                Download our comprehensive, printable checklist to bring to your next oncology appointment. Never forget a crucial question again.
              </p>
            </div>
            <Link href="/oncology-appointment-checklist">
              <a className="inline-block px-6 py-3 rounded-lg text-white font-medium transition-colors hover:opacity-90 w-full sm:w-auto mx-auto" style={{ backgroundColor: "oklch(0.55 0.15 195)" }}>
                View Appointment Checklist
              </a>
            </Link>
          </div>
          
          <div className="flex-1 bg-white rounded-xl border border-gray-100 shadow-sm p-8 text-center flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Organize Your Care Journey</h3>
              <p className="text-gray-600 mb-6 text-[15px] md:text-[17px]">
                Use MyHealthCanvas to track medications, log symptoms, and keep all your caregiving notes in one secure, accessible place.
              </p>
            </div>
            <Link href="/myhealthcanvas">
              <a className="inline-block px-6 py-3 rounded-lg text-white font-medium transition-colors hover:opacity-90 w-full sm:w-auto mx-auto" style={{ backgroundColor: "oklch(0.55 0.15 195)" }}>
                Explore MyHealthCanvas
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Reusable Components */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 space-y-12 mt-12">
        <ClinicianPerspective />
        <SaveForAppointment pageTitle="Oncology Questions" />
      <ResourceRecommendations exclude={["/caregiver-oncology-questions"]} />
      </div>
    </div>
  );
}
