import { useEffect, useState } from "react";

export default function PatientJourneyAnimation() {
  const [paused, setPaused] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPaused(preference.matches);
    const update = () => setPaused(preference.matches);
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);
  return (
    <section className="px-6 md:px-12 lg:px-24 py-8" aria-label="From conversation to patient story">
      <figure className="max-w-5xl mx-auto rounded-2xl bg-white border border-gray-200 p-3 md:p-6">
        <img
          src={paused ? "/images/patient-journey-synchronised-20261018.jpg" : "/images/patient-journey-synchronised-20261018.gif"}
          alt="From conversation to patient story: engage through a voice agent, capture experiences and questions in a communication form, and remember context and preferences. The patient chooses what to share with the doctor."
          width={1536} height={512} loading="lazy" decoding="async"
          className="block w-full h-auto rounded-xl"
        />
        <div className="mt-3 text-center">
          <button type="button" onClick={() => setPaused(!paused)}
            className="rounded-full border border-[#007699] px-4 py-2 text-sm text-[#007699] bg-white">
            {paused ? "Play animation" : "Pause animation"}
          </button>
        </div>
        <figcaption className="mt-3 text-center text-sm text-gray-600 leading-relaxed">
          Illustrative connected workflow. MyHealthCanvas is a private downloadable PDF; Home Companion voice support and patient memory are separate research capabilities and are not included with the PDF. You choose what to share with your healthcare team.
        </figcaption>
      </figure>
    </section>
  );
}
