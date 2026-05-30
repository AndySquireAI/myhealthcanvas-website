import React from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import ClinicianPerspective from "@/components/ClinicianPerspective";
import ResourceRecommendations from "@/components/ResourceRecommendations";

export default function QuestionsAfterDiagnosis() {
  return (
    <div style={{ backgroundColor: "#FDFCF8" }} className="min-h-screen font-sans text-gray-900">
      <SEO 
        title="Questions to Ask After a Cancer Diagnosis | MyHealthCanvas"
        description="A comprehensive guide on what to ask your oncologist after a cancer diagnosis. Learn which questions matter most during those overwhelming first days."
        keywords="questions after cancer diagnosis, what to ask oncologist after diagnosis, newly diagnosed cancer questions, cancer staging questions, first oncology appointment"
        canonicalPath="/questions-after-cancer-diagnosis"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h1 className="text-[30px] md:text-[48px] font-bold text-gray-900 mb-6 leading-tight">
          The Most Important Questions to Ask After a Cancer Diagnosis
        </h1>
        <p className="text-[17px] md:text-[20px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Hearing the words "you have cancer" stops time. In the overwhelming days that follow, knowing exactly what to ask your oncologist can help you regain a sense of control and ensure you understand your path forward.
        </p>
      </section>

      {/* Why it matters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-8 md:p-10">
          <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-6">
            Why Asking the Right Questions Matters Right Now
          </h2>
          <div className="space-y-5 text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
            <p>
              The first few days and weeks after a cancer diagnosis are often described as a blur. You are suddenly thrust into a world with its own language, complex medical procedures, and life-altering decisions. It is completely normal to feel paralyzed by the sheer volume of information coming at you. When I was first diagnosed, I remember sitting in the doctor's office, hearing the diagnosis, and then everything else sounded like static. I didn't know what to ask because I didn't even know what I didn't know. The shock of the moment can make it nearly impossible to process complex medical information, let alone formulate insightful questions on the spot.
            </p>
            <p>
              This is why having a prepared list of questions is not just helpful—it is essential. Your oncologist is an expert in medicine, but you are the expert on your own life, your values, and your body. Asking specific, targeted questions bridges the gap between their medical expertise and your lived experience. It transforms you from a passive recipient of news into an active participant in your own care. When you ask questions, you are advocating for yourself, ensuring that the treatment plan aligns with your personal goals and lifestyle. It also helps build a collaborative relationship with your healthcare team, setting the tone for open communication throughout your treatment journey.
            </p>
            <p>
              Remember that you do not have to ask every single question in your very first appointment. The goal of the initial consultation is to establish a baseline understanding of your diagnosis, the immediate next steps, and the overall timeline. By focusing on the most critical questions first, you can build a foundation of knowledge that will help you make informed decisions about your treatment plan in the weeks to come. If you're looking for a broader overview of what to expect, you might also find our guide on the <Link href="/first-30-days-after-diagnosis" className="text-[oklch(0.55_0.15_195)] hover:underline font-medium">first 30 days after diagnosis</Link> helpful. Take it one step at a time, and give yourself grace as you navigate this new reality.
            </p>
          </div>
        </div>
      </section>

      {/* Questions to ask */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-8 text-center">
          10 Essential Questions for Your First Oncology Appointments
        </h2>
        
        <div className="space-y-8">
          {/* Question 1 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">1.</span>
              Exactly what type and subtype of cancer do I have?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Cancer is not just one disease; it's hundreds of different diseases. Knowing you have "breast cancer" or "lung cancer" is only the first step. You need to know the specific subtype, as this dictates the treatment. For example, is it hormone receptor-positive? Is there a specific genetic mutation driving the tumor? Ask your doctor to write down the exact medical name of your cancer so you can research it accurately later. Having the precise terminology will also help you find the right support groups and resources tailored to your specific condition.
            </p>
          </div>

          {/* Question 2 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">2.</span>
              What is the stage of my cancer, and what does that mean for me?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Staging describes how much cancer is in the body and where it is located. It typically ranges from Stage I (early, localized) to Stage IV (advanced, spread to other parts of the body). Understanding your stage is crucial because it determines your prognosis and the aggressiveness of the treatment required. Ask your doctor to explain the staging system for your specific cancer in plain English. Don't hesitate to ask them to draw a diagram or show you your scans to help you visualize what they are talking about.
            </p>
          </div>

          {/* Question 3 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">3.</span>
              What is the goal of my treatment?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              This is perhaps the most important question you can ask, yet many patients skip it. Is the goal curative (to eliminate the cancer completely and prevent it from returning)? Or is the goal palliative (to control the growth, manage symptoms, and extend quality of life)? Knowing the ultimate goal helps align your expectations with the medical reality and guides your decision-making process. It ensures that you and your medical team are working toward the same outcome.
            </p>
          </div>

          {/* Question 4 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">4.</span>
              What are my treatment options, and which do you recommend?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              There is rarely just one way to treat cancer. Options might include surgery, chemotherapy, radiation, immunotherapy, targeted therapy, or a combination of these. Ask your oncologist to outline all viable options, the pros and cons of each, and why they are recommending a specific path for you. Don't be afraid to ask about clinical trials as well. Understanding the rationale behind their recommendation will give you confidence in the treatment plan you ultimately choose.
            </p>
          </div>

          {/* Question 5 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">5.</span>
              What is the timeline for my treatment?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Cancer treatment often feels incredibly urgent, but sometimes there is time to gather second opinions or preserve fertility before starting. Ask how soon you need to begin treatment, how long the treatment will last, and how often you will need to be at the clinic or hospital. This helps you plan your life, work, and family commitments around your care. Knowing the schedule can also help reduce anxiety by providing a structured roadmap for the months ahead.
            </p>
          </div>

          {/* Question 6 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">6.</span>
              What are the potential short-term and long-term side effects?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Every treatment comes with side effects. Ask what you can expect immediately (like nausea, fatigue, or hair loss) and what might happen months or years down the line (like neuropathy, heart issues, or secondary cancers). More importantly, ask what can be done to prevent or manage these side effects. Modern medicine has excellent supportive care options, but you need to know what to watch for so you can report symptoms early before they become severe.
            </p>
          </div>

          {/* Question 7 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">7.</span>
              How will this diagnosis and treatment affect my daily life?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Will you be able to continue working? Can you drive yourself to appointments? Will you need help with childcare or household chores? Understanding the practical impact of your treatment plan allows you to start building your support system early. Be honest with your doctor about your lifestyle and responsibilities so they can give you realistic advice. If you need accommodations at work, ask your doctor for the necessary documentation.
            </p>
          </div>

          {/* Question 8 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">8.</span>
              Are there any additional tests or scans I need before we start?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Sometimes the initial biopsy or scan isn't enough to finalize a treatment plan. You might need a PET scan, an MRI, or specialized biomarker testing on your tumor tissue. Ask what other tests are required, what they are looking for, and how long it will take to get the results. This helps manage the anxiety of waiting and ensures that your treatment plan is based on the most comprehensive and up-to-date information available.
            </p>
          </div>

          {/* Question 9 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">9.</span>
              Who is my main point of contact, and how do I reach them?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              Cancer care involves a whole team of professionals—oncologists, surgeons, nurses, social workers, and navigators. You need to know exactly who to call if you have a question, experience a side effect, or have an emergency after hours. Get names, phone numbers, and instructions on whether to use the patient portal or call the clinic directly. Having a clear line of communication can prevent unnecessary trips to the emergency room and provide peace of mind.
            </p>
          </div>

          {/* Question 10 */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3">10.</span>
              Should I get a second opinion, and can you recommend someone?
            </h3>
            <p className="text-[15px] md:text-[17px] text-gray-700 leading-relaxed">
              A good oncologist will never be offended if you ask for a second opinion. In fact, many encourage it, especially for rare or complex cancers. A second opinion can confirm your diagnosis, offer alternative treatment options, or simply give you peace of mind that you are on the right track. Ask your doctor for recommendations at a different institution or a major cancer center. If you are unsure how to navigate this process, check out our guide on <Link href="/oncology-questions" className="text-[oklch(0.55_0.15_195)] hover:underline font-medium">asking oncology questions</Link>.
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
            Taking notes during an oncology appointment is incredibly difficult when you are stressed and emotional. However, having a written record is vital because you will likely forget much of what was said the moment you leave the office. Here is what you should focus on capturing:
          </p>
          <ul className="space-y-4 text-[15px] md:text-[17px] text-gray-700">
            <li className="flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3 font-bold">•</span>
              <span><strong>The exact diagnosis:</strong> Ask the doctor to spell out the specific type, subtype, and stage of your cancer. Write it down letter for letter.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3 font-bold">•</span>
              <span><strong>Next steps:</strong> Write down exactly what needs to happen next. Is it a scan? A blood test? A consultation with a surgeon? Note the dates, times, and locations.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3 font-bold">•</span>
              <span><strong>Medication instructions:</strong> If you are prescribed anything, note what it is for, when to take it, and potential side effects. Ask if there are any interactions with your current medications.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[oklch(0.55_0.15_195)] mr-3 font-bold">•</span>
              <span><strong>Contact information:</strong> Ensure you have the direct phone numbers for the clinic, the triage nurse, and the after-hours emergency line. Write down the names of the key people on your care team.</span>
            </li>
          </ul>
          <p className="text-[15px] md:text-[17px] text-gray-700 mt-6 leading-relaxed">
            If writing is too overwhelming, ask your doctor if you can record the conversation on your phone. Most doctors are completely fine with this, and it allows you to listen back later when you are in a calmer state of mind. You can also use transcription apps to turn the audio into text for easier reference.
          </p>
        </div>
      </section>

      {/* Appointment preparation tips */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="text-[22px] md:text-[28px] font-semibold text-gray-900 mb-8 text-center">
          Practical Tips for Your First Oncology Appointments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Bring a "Second Set of Ears"</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Never go to these early appointments alone. Bring a trusted friend or family member whose sole job is to take notes and listen. You will likely zone out or forget things; they can be your objective observer and record-keeper. Discuss beforehand what questions you want them to make sure get answered.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Organize Your Medical Records</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Start a binder or a digital folder with all your pathology reports, scan results, and blood work. Having everything in one place makes it easier when you see different specialists or seek a second opinion. Bring this binder to every appointment so you always have your history on hand.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Prioritize Your Questions</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              Doctors have limited time. Put your top 3-5 most urgent questions at the very top of your list. If you run out of time, you can ask the nurse the remaining questions or send them via the patient portal. Don't leave the office until your most critical concerns have been addressed.
            </p>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Be Honest About Your Fears</h3>
            <p className="text-[15px] text-gray-700 leading-relaxed">
              If you are terrified of needles, worried about losing your hair, or anxious about how treatment will affect your finances, say so. Your care team has resources—like social workers and financial navigators—who can help, but only if they know you need them. Vulnerability is a strength in cancer care.
            </p>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-6">
        <div className="bg-[oklch(0.55_0.15_195)] rounded-xl shadow-sm p-8 md:p-10 text-center text-white">
          <h2 className="text-[22px] md:text-[28px] font-bold mb-4">
            Get the Complete Oncology Appointment Checklist
          </h2>
          <p className="text-[15px] md:text-[17px] mb-8 max-w-2xl mx-auto opacity-90">
            Download our comprehensive, printable checklist to take with you to your next appointment. It includes all these questions, space for notes, and a medication tracker to help you stay organized during this chaotic time.
          </p>
          <Link href="/oncology-appointment-checklist">
            <a className="inline-block bg-white text-[oklch(0.55_0.15_195)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              View the Checklist
            </a>
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 md:p-10 text-center">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900 mb-4">
            Organize Your Health Journey
          </h2>
          <p className="text-[15px] md:text-[17px] text-gray-600 mb-8 max-w-2xl mx-auto">
            MyHealthCanvas provides tools to help you track your symptoms, organize your medical records, and communicate with your care team effectively. Take control of your health data today.
          </p>
          <Link href="/myhealthcanvas">
            <a className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
              Explore MyHealthCanvas
            </a>
          </Link>
        </div>
      </section>

      {/* Components */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ClinicianPerspective />
        <div className="mt-12">
          <ResourceRecommendations exclude={["/questions-after-cancer-diagnosis"]} />
        </div>
      </div>
    </div>
  );
}
