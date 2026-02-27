import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function First30Days() {
  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <SEO
        title="First 30 Days After Cancer Diagnosis — What to Do | MyHealthCanvas"
        description="Just diagnosed with cancer? A week-by-week guide for the first 30 days. What to do, who to call, questions to ask, and how to start organizing. Created by a 2× cancer survivor."
        keywords="first 30 days after cancer diagnosis, just diagnosed with cancer what to do, newly diagnosed cancer guide, cancer diagnosis first steps, what to expect after cancer diagnosis, cancer diagnosis checklist, surviving cancer diagnosis"
        canonicalPath="/first-30-days-after-diagnosis"
      />

      {/* Full-page background that extends to the fold */}
      <div 
        className="absolute top-0 left-0 right-0 h-screen bg-no-repeat opacity-60 md:opacity-70 pointer-events-none"
        style={{
          backgroundImage: 'url(/images/bg-first30days-office-v2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Section 1 - Above the fold */}
      <section className="min-h-[75vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 relative z-10">
        <div className="max-w-lg mx-auto text-center space-y-10">
          
          {/* Headline */}
          <h1 className="text-[32px] md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.2]">
            The first 30 days are for{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              surviving
            </span>
          </h1>
          
          {/* One sentence */}
          <p className="text-[19px] md:text-xl text-gray-500 font-light leading-[1.6]">
            You do not need to organize, decide, or understand anything yet. Just take it one week at a time.
          </p>

          {/* Scroll prompt */}
          <a href="#week1" className="inline-block">
            <p className="text-[15px] text-[oklch(0.55_0.15_195)] font-medium">
              A gentle guide for each week ↓
            </p>
          </a>
          
        </div>
      </section>

      {/* WEEK 1 - Breathe */}
      <section id="week1" className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 relative z-10 scroll-mt-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-lg font-bold flex-shrink-0">1</span>
            <div>
              <h2 className="text-[24px] md:text-3xl font-bold text-gray-800">Week 1 — Breathe</h2>
              <p className="text-[15px] text-gray-400 mt-1">The only job this week is to exist.</p>
            </div>
          </div>
          
          <div className="space-y-6 ml-16">
            <p className="text-[17px] text-gray-600 leading-[1.7]">
              You've just heard the word that changes everything. Your mind is racing. You can't sleep. You're Googling at 2am. That's normal. All of it.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-[17px] font-semibold text-gray-800">This week, try to:</h3>
              <ul className="space-y-3">
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Let yourself feel whatever you feel.</strong> Anger, fear, numbness, denial — there is no wrong reaction.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Tell one person you trust.</strong> You don't have to tell everyone. Just one person who can sit with you.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Call someone who understands.</strong> Macmillan Cancer Support: <strong>0808 808 00 00</strong> (free, confidential). Or visit a <a href="https://www.maggies.org" target="_blank" rel="noopener noreferrer" className="text-[oklch(0.55_0.15_195)] hover:underline">Maggie's Centre</a> — just walk in, no appointment needed.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Write down your next appointment.</strong> Date, time, location. That's enough for now.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-lg border border-gray-100">
              <p className="text-[15px] text-gray-500 italic">
                "I spent the first week in a fog. I couldn't eat. I couldn't think. And that was OK. The only thing I did was write down my next appointment date on a Post-it note. That was enough." — Andy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEK 2 - Gather */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-lg font-bold flex-shrink-0">2</span>
            <div>
              <h2 className="text-[24px] md:text-3xl font-bold text-gray-800">Week 2 — Gather</h2>
              <p className="text-[15px] text-gray-400 mt-1">One folder. Everything in it. No sorting.</p>
            </div>
          </div>
          
          <div className="space-y-6 ml-16">
            <p className="text-[17px] text-gray-600 leading-[1.7]">
              Papers are arriving. Letters from the hospital. Blood test results. Scan appointments. It feels like a flood. You don't need to understand any of it yet. You just need to not lose it.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-[17px] font-semibold text-gray-800">This week, try to:</h3>
              <ul className="space-y-3">
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Start one folder.</strong> A physical folder, a shoe box, a Google Drive folder — anything. Just one place.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Put everything in it.</strong> Every letter, every scan, every email. Take photos of paper documents with your phone.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>No sorting. No thinking. Just gathering.</strong> You'll organize later. Right now, just don't lose anything.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Or delegate.</strong> Forward everything to someone you trust. Let them hold it for you. That's completely fine.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WEEK 3 - Question */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-lg font-bold flex-shrink-0">3</span>
            <div>
              <h2 className="text-[24px] md:text-3xl font-bold text-gray-800">Week 3 — Question</h2>
              <p className="text-[15px] text-gray-400 mt-1">Your questions are your power.</p>
            </div>
          </div>
          
          <div className="space-y-6 ml-16">
            <p className="text-[17px] text-gray-600 leading-[1.7]">
              By now, you probably have an appointment coming up — maybe your first real conversation about treatment. The questions are swirling. Write them down. All of them. Even the ones that feel stupid. Especially those.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-[17px] font-semibold text-gray-800">This week, try to:</h3>
              <ul className="space-y-3">
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Write down every question that comes to mind.</strong> On your phone, on paper, at 3am — it doesn't matter when or where.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Look at our <Link href="/#questions" className="text-[oklch(0.55_0.15_195)] hover:underline">questions to ask your oncologist</Link>.</strong> Circle the ones that matter to you. Add your own.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Take your list to your next appointment.</strong> Read from it. Doctors expect this. They respect it.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Bring someone with you.</strong> A second pair of ears catches what you miss. Ask them to take notes.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-white rounded-lg border border-gray-100">
              <p className="text-[15px] text-gray-500 italic">
                "I walked into my first oncology appointment with 23 questions on my phone. I asked 8 of them. But those 8 were the right ones, and I didn't forget a single one. That list changed everything." — Andy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WEEK 4 - Prepare */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-12 rounded-full bg-[oklch(0.55_0.15_195)]/10 flex items-center justify-center text-[oklch(0.55_0.15_195)] text-lg font-bold flex-shrink-0">4</span>
            <div>
              <h2 className="text-[24px] md:text-3xl font-bold text-gray-800">Week 4 — Prepare</h2>
              <p className="text-[15px] text-gray-400 mt-1">You know more now. Let's get it organized.</p>
            </div>
          </div>
          
          <div className="space-y-6 ml-16">
            <p className="text-[17px] text-gray-600 leading-[1.7]">
              You've survived the first three weeks. You have a folder of documents. You have questions. You've had at least one conversation with your medical team. Now you know enough to start organizing — not everything, just the essentials.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-[17px] font-semibold text-gray-800">This week, try to:</h3>
              <ul className="space-y-3">
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Write down what you know so far.</strong> Your diagnosis. Your treatment plan. Your next steps. Even if it's just bullet points.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Designate one person as your "update person."</strong> They tell everyone else so you don't have to repeat yourself.</span>
                </li>
                <li className="text-[16px] text-gray-600 flex items-start gap-3">
                  <span className="text-[oklch(0.55_0.15_195)] mt-0.5 flex-shrink-0">○</span>
                  <span><strong>Start preparing for your next appointment.</strong> New questions will have come up. Write them down.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT COMES NEXT - bridge to MyHealthCanvas */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-r from-[oklch(0.55_0.15_195)]/5 to-[oklch(0.60_0.15_300)]/5 relative z-10">
        <div className="max-w-xl mx-auto text-center space-y-8">
          <h2 className="text-[24px] md:text-3xl font-bold text-gray-800">
            What comes next
          </h2>
          <p className="text-[17px] text-gray-600 leading-[1.7]">
            You've survived the first 30 days. You have documents, questions, and a little more clarity. Now it's time to get organized — so every appointment counts, every question gets asked, and nothing gets forgotten.
          </p>
          <p className="text-[18px] font-semibold text-gray-800">
            Organize your thoughts. Ask better questions.{" "}
            <span className="bg-gradient-to-r from-[oklch(0.55_0.15_195)] to-[oklch(0.60_0.15_300)] bg-clip-text text-transparent">
              Never forget.
            </span>
          </p>
          
          <div className="pt-4">
            <Link href="/myhealthcanvas">
              <button className="px-12 py-5 bg-[oklch(0.55_0.15_195)] text-white text-[18px] font-medium rounded-lg hover:bg-[oklch(0.50_0.15_195)] transition-colors">
                Start organizing with MyHealthCanvas
              </button>
            </Link>
          </div>
          
          <p className="text-[15px] text-gray-400 mt-6">
            Privately prepare for better conversations with your doctors.
          </p>
        </div>
      </section>

      {/* PERMISSION STRIP */}
      <section className="py-12 px-6 md:px-12 lg:px-24 bg-white relative z-10">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[16px] text-gray-500 leading-[1.6]">
            Many people only organize months later. Some never do. There is no wrong timeline. This guide will be here whenever you need it.
          </p>
        </div>
      </section>

    </div>
  );
}
