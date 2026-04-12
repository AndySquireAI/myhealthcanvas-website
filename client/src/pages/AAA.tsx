import SEO from "@/components/SEO";
import { useState, useCallback } from "react";

export default function AAA() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handlePlayVideo = useCallback(() => {
    setVideoPlaying(true);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="AI Agents for Your Organisation | AndySquire.AI"
        description="We build AI agent teams that work alongside your people — governed, auditable and safe. From workflow automation to full governance infrastructure. From CHF 2,000/month."
        keywords="AI agents, AI automation, AI agent team, human-agent teaming, AI governance, EU AI Act compliance, healthcare AI, Safety OS, Physician-as-Pilot, HAT Model"
        canonicalPath="/aaa"
      />

      {/* HERO — BROAD AGENT HOOK */}
      <section className="relative overflow-hidden" style={{ minHeight: "420px" }}>
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(25,135,140,0.08) 0%, rgba(100,50,150,0.06) 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 pt-20 pb-10 text-center">
          <p className="inline-block text-[13px] font-semibold text-[#19878C] uppercase tracking-[0.15em] mb-6 px-4 py-1.5 rounded-full" style={{ backgroundColor: "rgba(25,135,140,0.08)" }}>
            From CHF 2,000/month — retainer-based, no lock-in
          </p>
          <h1 className="text-[28px] md:text-[40px] lg:text-[46px] font-bold text-gray-800 leading-[1.2] mb-5">
            AI Agents That Work Alongside Your Team
          </h1>
          <p className="text-[18px] md:text-[22px] text-gray-500 leading-[1.5] max-w-2xl mx-auto mb-4" style={{ fontStyle: "italic" }}>
            Delivered by practitioners, not theorists.
          </p>
          <p className="text-[16px] md:text-[18px] text-gray-600 leading-[1.6] max-w-2xl mx-auto mb-10">
            We design, build and govern AI agent teams for organisations — so your people can focus on what matters.
          </p>

          {/* CTA */}
          <a
            href="mailto:andy@patientcentriccare.ai?subject=Discovery%20call%20request%20%E2%80%94%20AI%20Agents&body=Hi%20Andy%2C%0A%0AI%E2%80%99d%20like%20to%20book%20a%20discovery%20call%20to%20discuss%20AI%20agents%20for%20our%20organisation.%0A%0AOrganisation%3A%20%0ARole%3A%20%0ABest%20time%20to%20talk%3A%20%0A%0AThanks"
            className="inline-flex items-center gap-2 px-8 py-4 text-white text-[16px] font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
            style={{ background: "linear-gradient(135deg, #19878C 0%, #643296 100%)" }}
          >
            Book a discovery call
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* HAT TEAM VIDEO */}
      <section className="py-12 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[13px] uppercase tracking-[0.2em] text-[#643296] font-medium mb-3">
            See it in action
          </p>
          <h2 className="text-center text-[22px] md:text-[28px] font-bold text-gray-800 mb-8">
            Meet a Human-Agent Team
          </h2>

          <div className="w-full">
            {videoPlaying ? (
              <div className="relative w-full rounded-xl shadow-2xl overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/5_CTHc4rRyE?autoplay=1&rel=0"
                  title="Human-Agent Teaming: AI Agents Working Alongside Your Team"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <button
                onClick={handlePlayVideo}
                className="relative w-full rounded-xl shadow-2xl overflow-hidden group cursor-pointer block"
                aria-label="Play video: Human-Agent Teaming"
              >
                <img
                  src="/images/hero-aaa-new.webp"
                  alt="Human-Agent Teaming — AI Agents Working Alongside Your Team"
                  className="w-full block"
                  loading="lazy"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-all duration-300" />
                {/* Big play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 md:w-12 md:h-12 text-red-600 ml-1" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                {/* Watch video label */}
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <span className="bg-black/60 text-white text-sm md:text-base font-medium px-4 py-2 rounded-full">
                    ▶ Watch the 42-second intro
                  </span>
                </div>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 3 SERVICE PILLARS */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[13px] uppercase tracking-[0.2em] text-[#19878C] font-medium mb-3">
            What we deliver
          </p>
          <h2 className="text-center text-[26px] md:text-[32px] font-bold text-gray-800 mb-12">
            Three pillars of safe AI adoption
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm transition-shadow hover:shadow-md" style={{ border: "1px solid rgba(25,135,140,0.12)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(25,135,140,0.1)" }}>
                <svg className="w-7 h-7 text-[#19878C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-3">Workflow Automation</h3>
              <p className="text-[15px] text-gray-500 leading-[1.7]">
                Map, automate and govern admin workflows using the Human-Agent Teaming model. Reduce manual burden while maintaining full auditability.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm transition-shadow hover:shadow-md" style={{ border: "1px solid rgba(100,50,150,0.12)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(100,50,150,0.1)" }}>
                <svg className="w-7 h-7 text-[#643296]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-3">AI Governance Audit</h3>
              <p className="text-[15px] text-gray-500 leading-[1.7]">
                Review your current AI tools against EU AI Act requirements. Deadline: August 2026. Identify gaps and build a defensible compliance roadmap.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm transition-shadow hover:shadow-md" style={{ border: "1px solid rgba(107,123,58,0.12)" }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(107,123,58,0.1)" }}>
                <svg className="w-7 h-7 text-[#6B7B3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <h3 className="text-[20px] font-bold text-gray-800 mb-3">Training & Implementation</h3>
              <p className="text-[15px] text-gray-500 leading-[1.7]">
                Embed the Physician-as-Pilot™ framework in your team. Hands-on workshops, governance playbooks, and ongoing implementation support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY HEALTHCARE AI IS DIFFERENT — SAFETY OS */}
      <section className="py-16 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-[13px] uppercase tracking-[0.2em] font-medium mb-3" style={{ color: "#2B9E9E" }}>
            Why healthcare AI is different
          </p>
          <h2 className="text-center text-[26px] md:text-[34px] font-bold text-white leading-[1.2] mb-4">
            AI Should Not Act in Care Without a Governance Control Plane
          </h2>
          <p className="text-center text-[16px] md:text-[18px] leading-[1.6] max-w-2xl mx-auto mb-4" style={{ color: "#8A9BB0" }}>
            Like Kubernetes orchestrates compute, Safety OS™ orchestrates AI behaviour — enforcing human authority, bounded autonomy, and full auditability at runtime.
          </p>
          <p className="text-center text-[15px] leading-[1.6] max-w-2xl mx-auto mb-10" style={{ color: "#6B7F99" }}>
            Every AI agent in healthcare needs a governance layer between intent and execution. Safety OS is that layer — not a policy document, but an enforceable control plane.
          </p>

          {/* Architecture diagram */}
          <div className="max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl" style={{ border: "1px solid #1E3A4A" }}>
            <img
              src="/images/safety-os-architecture.png"
              alt="Safety OS Runtime Governance Control Plane — 4-layer architecture showing Human Authority Layer, Runtime Governance Control Plane (Safety OS), Untrusted AI Layer, and Healthcare Infrastructure"
              className="w-full block"
              loading="lazy"
              style={{ backgroundColor: "#FFFFFF" }}
            />
          </div>

          {/* Key points below diagram */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center mt-10 max-w-3xl mx-auto">
            <div className="flex-1 text-center md:text-left">
              <p className="text-[15px] font-semibold text-white mb-1">Human Authority Layer</p>
              <p className="text-[13px] leading-[1.6]" style={{ color: "#8A9BB0" }}>
                Clinicians, caregivers and patients retain defined roles, permissions and liability. Authority is never delegated to AI.
              </p>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-[15px] font-semibold mb-1" style={{ color: "#2B9E9E" }}>Safety OS™ Control Plane</p>
              <p className="text-[13px] leading-[1.6]" style={{ color: "#8A9BB0" }}>
                Policy-as-code. Versioned. Auditable. Enforced at runtime. No execution without enforcement.
              </p>
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-[15px] font-semibold text-white mb-1">Governance Data Moat</p>
              <p className="text-[13px] leading-[1.6]" style={{ color: "#8A9BB0" }}>
                Every deployment generates telemetry. Every signal improves enforcement. The system gets stronger with scale.
              </p>
            </div>
          </div>

          {/* Link to full architecture */}
          <div className="text-center mt-10">
            <a
              href="https://www.patientcentriccare.ai/standards/hybrid-human-agent-operating-standard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors hover:text-white"
              style={{ color: "#2B9E9E" }}
            >
              Read the full Safety OS architecture
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[13px] uppercase tracking-[0.2em] text-[#643296] font-medium mb-8">
            Credentials & research
          </p>

          <div className="space-y-5">
            {/* Harvard badge */}
            <div className="flex items-center gap-4 py-4 px-6 rounded-xl bg-white" style={{ border: "1px solid rgba(25,135,140,0.12)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(25,135,140,0.08)" }}>
                <svg className="w-6 h-6 text-[#19878C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-gray-800">Harvard Medical School</p>
                <p className="text-[14px] text-gray-500">Best Overall Capstone — "AI in Healthcare," February 2026</p>
              </div>
            </div>

            {/* Oxford */}
            <div className="flex items-center gap-4 py-4 px-6 rounded-xl bg-white" style={{ border: "1px solid rgba(100,50,150,0.12)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(100,50,150,0.08)" }}>
                <svg className="w-6 h-6 text-[#643296]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-gray-800">University of Oxford</p>
                <p className="text-[14px] text-gray-500">Saïd Business School — AI Programme Distinction</p>
              </div>
            </div>

            {/* SSRN preprint */}
            <div className="flex items-center gap-4 py-4 px-6 rounded-xl bg-white" style={{ border: "1px solid rgba(100,50,150,0.12)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(100,50,150,0.08)" }}>
                <svg className="w-6 h-6 text-[#643296]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-gray-800">Peer-reviewed research</p>
                <p className="text-[14px] text-gray-500">
                  Physician-as-Pilot Framework 2.1 —{" "}
                  <a
                    href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6399818"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#643296] underline hover:text-[#19878C] transition-colors"
                  >
                    SSRN Abstract 6399818
                  </a>
                </p>
              </div>
            </div>

            {/* EU AI Act deadline */}
            <div className="flex items-center gap-4 py-4 px-6 rounded-xl bg-white" style={{ border: "1px solid rgba(180,60,60,0.12)" }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "rgba(180,60,60,0.06)" }}>
                <svg className="w-6 h-6 text-[#8B3A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[16px] font-semibold text-gray-800">EU AI Act deadline: August 2026</p>
                <p className="text-[14px] text-gray-500">Is your organisation ready? We can help you find out.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[13px] uppercase tracking-[0.2em] text-[#19878C] font-medium mb-3">
            How it works
          </p>
          <h2 className="text-center text-[26px] md:text-[32px] font-bold text-gray-800 mb-12">
            From discovery call to governed AI
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[16px] font-bold text-white" style={{ background: "linear-gradient(135deg, #19878C, #643296)" }}>
                1
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-gray-800 mb-1">Discovery call</h3>
                <p className="text-[15px] text-gray-500 leading-[1.7]">We map your current workflows, identify automation opportunities, and assess your AI governance posture.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[16px] font-bold text-white" style={{ background: "linear-gradient(135deg, #19878C, #643296)" }}>
                2
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-gray-800 mb-1">Governance-first design</h3>
                <p className="text-[15px] text-gray-500 leading-[1.7]">Every workflow is designed with human authority, audit trails, and regulatory alignment built in — not bolted on.</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[16px] font-bold text-white" style={{ background: "linear-gradient(135deg, #19878C, #643296)" }}>
                3
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-gray-800 mb-1">Implementation & training</h3>
                <p className="text-[15px] text-gray-500 leading-[1.7]">We deploy, train your team, and provide ongoing retainer support. No lock-in — you keep everything we build.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING ANCHOR */}
      <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-xl p-8 md:p-10 bg-white shadow-sm" style={{ border: "1px solid rgba(25,135,140,0.12)" }}>
            <p className="text-[13px] uppercase tracking-[0.2em] text-[#19878C] font-medium mb-4">
              Pricing
            </p>
            <p className="text-[36px] md:text-[44px] font-bold text-gray-800 mb-2">
              CHF 2,000<span className="text-[20px] font-normal text-gray-400">/month</span>
            </p>
            <p className="text-[16px] text-gray-500 mb-6">
              Retainer-based. No lock-in. Cancel any time.
            </p>
            <ul className="text-left max-w-sm mx-auto space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <span className="text-[#19878C] font-bold mt-0.5">✓</span>
                <span className="text-[15px] text-gray-600">Workflow automation design & deployment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#19878C] font-bold mt-0.5">✓</span>
                <span className="text-[15px] text-gray-600">EU AI Act governance audit</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#19878C] font-bold mt-0.5">✓</span>
                <span className="text-[15px] text-gray-600">Team training & Physician-as-Pilot™ embedding</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#19878C] font-bold mt-0.5">✓</span>
                <span className="text-[15px] text-gray-600">Ongoing retainer support & iteration</span>
              </li>
            </ul>
            <a
              href="mailto:andy@patientcentriccare.ai?subject=Discovery%20call%20request%20%E2%80%94%20AI%20Automation&body=Hi%20Andy%2C%0A%0AI%E2%80%99d%20like%20to%20book%20a%20discovery%20call%20to%20discuss%20AI%20automation%20for%20our%20organisation.%0A%0AOrganisation%3A%20%0ARole%3A%20%0ABest%20time%20to%20talk%3A%20%0A%0AThanks"
              className="inline-flex items-center gap-2 px-8 py-4 text-white text-[16px] font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
              style={{ background: "linear-gradient(135deg, #19878C 0%, #643296 100%)" }}
            >
              Book a discovery call
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* BOTTOM TRUST */}
      <section className="py-10 px-6" style={{ backgroundColor: "#FDFCF8" }}>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[13px] text-gray-400 leading-[1.6]">
            Andy Squire — Harvard Medical School (AI in Healthcare), University of Oxford (Artificial Intelligence). Based in Basel, Switzerland.
          </p>
        </div>
      </section>
    </div>
  );
}
