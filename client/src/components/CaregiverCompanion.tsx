import { Link } from "wouter";

export default function CaregiverCompanion() {
  const activities = [
    {
      activity: "Track symptoms",
      how: "Record daily changes in the symptoms section — severity, timing, and what helps.",
    },
    {
      activity: "Remember information",
      how: "Write down key details from appointments in one place instead of scattered notes.",
    },
    {
      activity: "Prepare questions",
      how: "Add questions as they come to mind between visits. Review together before the appointment.",
    },
    {
      activity: "Take notes",
      how: "Use the structured format during appointments to capture decisions and next steps.",
    },
    {
      activity: "Coordinate appointments",
      how: "Keep medications, priorities and care team information in a single document to share.",
    },
  ];

  const trackClick = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "caregiver_resource_click", {
        event_category: "engagement",
        event_label: "caregiver_companion_section",
      });
    }
  };

  return (
    <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#FDFCF8" }}>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">How caregivers use MyHealthCanvas</h2>
          <p className="text-[16px] text-gray-500 leading-[1.6]">
            Caregivers carry a unique burden. MyHealthCanvas supports the practical tasks that often fall on family members and partners.
          </p>
        </div>

        <div className="space-y-3">
          {activities.map((item, i) => (
            <div key={i} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="sm:w-1/3">
                <p className="text-[15px] font-bold text-gray-800">{item.activity}</p>
              </div>
              <div className="sm:w-2/3">
                <p className="text-[14px] text-gray-600 leading-[1.6]">{item.how}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <Link href="/caregiver-oncology-questions" onClick={trackClick}>
            <span className="text-[15px] font-bold text-[oklch(0.55_0.15_195)] hover:underline cursor-pointer">
              See questions caregivers should ask →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
