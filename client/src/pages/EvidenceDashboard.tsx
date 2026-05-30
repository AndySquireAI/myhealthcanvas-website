import { useState, useEffect } from "react";
import SEO from "@/components/SEO";

interface SurveyResponse {
  preparedness: number;
  role: string;
  helpArea: string;
  context: string;
  timestamp: string;
}

interface FeedbackResponse {
  role?: string;
  specialty?: string;
  country: string;
  comment?: string;
  benefits?: string;
  permission: boolean;
  type: string;
  timestamp: string;
}

export default function EvidenceDashboard() {
  const [surveyResponses, setSurveyResponses] = useState<SurveyResponse[]>([]);
  const [feedbackResponses, setFeedbackResponses] = useState<FeedbackResponse[]>([]);

  useEffect(() => {
    // Load from localStorage
    const surveys = JSON.parse(localStorage.getItem("mhc_survey_responses") || "[]");
    const feedback = JSON.parse(localStorage.getItem("mhc_feedback_responses") || "[]");
    setSurveyResponses(surveys);
    setFeedbackResponses(feedback);
  }, []);

  // Calculate metrics
  const totalSurveys = surveyResponses.length;
  const avgPreparedness = totalSurveys > 0
    ? (surveyResponses.reduce((sum, r) => sum + r.preparedness, 0) / totalSurveys).toFixed(1)
    : "—";

  const roleBreakdown = surveyResponses.reduce((acc, r) => {
    acc[r.role] = (acc[r.role] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const helpAreaBreakdown = surveyResponses.reduce((acc, r) => {
    acc[r.helpArea] = (acc[r.helpArea] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const patientFeedback = feedbackResponses.filter(f => f.type === "patient_feedback");
  const clinicianFeedback = feedbackResponses.filter(f => f.type === "clinician_feedback");

  const sortedHelpAreas = Object.entries(helpAreaBreakdown).sort((a, b) => b[1] - a[1]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFCF8" }}>
      <SEO
        title="Evidence Dashboard | MyHealthCanvas"
        description="Internal evidence dashboard for MyHealthCanvas patient outcomes tracking."
        canonicalPath="/evidence-dashboard"
      />

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <p className="text-[12px] uppercase tracking-wider font-bold text-gray-400">Internal</p>
            <h1 className="text-[28px] md:text-[36px] font-bold text-gray-900">Evidence Dashboard</h1>
            <p className="text-[16px] text-gray-500">
              Patient outcomes and feedback data. Guides future development and partnership readiness.
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-1">
              <p className="text-[28px] font-bold text-gray-900">{totalSurveys}</p>
              <p className="text-[13px] text-gray-500">Survey Responses</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-1">
              <p className="text-[28px] font-bold" style={{ color: "oklch(0.55 0.15 195)" }}>{avgPreparedness}</p>
              <p className="text-[13px] text-gray-500">Avg Preparedness (1-5)</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-1">
              <p className="text-[28px] font-bold text-gray-900">{patientFeedback.length}</p>
              <p className="text-[13px] text-gray-500">Patient Feedback</p>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm text-center space-y-1">
              <p className="text-[28px] font-bold text-gray-900">{clinicianFeedback.length}</p>
              <p className="text-[13px] text-gray-500">Clinician Feedback</p>
            </div>
          </div>

          {/* Role Breakdown */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-[18px] font-bold text-gray-800">User Role Breakdown</h2>
            {Object.keys(roleBreakdown).length > 0 ? (
              <div className="space-y-3">
                {Object.entries(roleBreakdown).map(([role, count]) => (
                  <div key={role} className="flex items-center gap-3">
                    <span className="text-[14px] font-medium text-gray-700 w-24">{role}</span>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(count / totalSurveys) * 100}%`,
                          background: "oklch(0.55 0.15 195)",
                        }}
                      />
                    </div>
                    <span className="text-[14px] text-gray-500 w-12 text-right">{count}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[14px] text-gray-400 italic">No survey data yet. Responses will appear here as users complete the micro survey.</p>
            )}
          </div>

          {/* Most Requested Support */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-[18px] font-bold text-gray-800">Most Requested Support Area</h2>
            {sortedHelpAreas.length > 0 ? (
              <div className="space-y-3">
                {sortedHelpAreas.map(([area, count], idx) => (
                  <div key={area} className="flex items-center gap-3">
                    <span className="text-[14px] font-medium text-gray-700 w-36">{area}</span>
                    <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${(count / totalSurveys) * 100}%`,
                          background: idx === 0 ? "oklch(0.55 0.15 195)" : "oklch(0.70 0.10 195)",
                        }}
                      />
                    </div>
                    <span className="text-[14px] text-gray-500 w-12 text-right">{count}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[14px] text-gray-400 italic">No data yet. Will show which support areas users value most.</p>
            )}
          </div>

          {/* Recent Feedback */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-[18px] font-bold text-gray-800">Recent Feedback</h2>
            {feedbackResponses.length > 0 ? (
              <div className="space-y-4">
                {feedbackResponses.slice(-10).reverse().map((f, idx) => (
                  <div key={idx} className="border-b border-gray-50 pb-3 last:border-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[12px] uppercase tracking-wider font-bold" style={{ color: "oklch(0.55 0.15 195)" }}>
                        {f.type === "clinician_feedback" ? "Clinician" : f.role || "Patient"}
                      </span>
                      <span className="text-[12px] text-gray-400">• {f.country}</span>
                      <span className="text-[12px] text-gray-300">• {new Date(f.timestamp).toLocaleDateString()}</span>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-[1.6]">
                      {f.comment || f.benefits || "No comment provided."}
                    </p>
                    {f.permission && <span className="text-[11px] text-green-500 font-medium">✓ Permission granted</span>}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[14px] text-gray-400 italic">No feedback submitted yet. Responses from /share-your-experience and /clinician-feedback will appear here.</p>
            )}
          </div>

          {/* Strategic Goals */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-[18px] font-bold text-gray-800">Strategic Goals</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-[14px] font-semibold text-gray-700">Primary Target</p>
                <p className="text-[14px] text-gray-500">Collect 50 patient responses before changing product architecture.</p>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${Math.min((totalSurveys / 50) * 100, 100)}%`,
                      background: "oklch(0.55 0.15 195)",
                    }}
                  />
                </div>
                <p className="text-[12px] text-gray-400">{totalSurveys} / 50 responses</p>
              </div>
              <div className="space-y-2">
                <p className="text-[14px] font-semibold text-gray-700">Secondary Target</p>
                <p className="text-[14px] text-gray-500">Identify top 3 reasons people use MyHealthCanvas.</p>
                <p className="text-[12px] text-gray-400">
                  {sortedHelpAreas.length >= 3
                    ? `Top 3: ${sortedHelpAreas.slice(0, 3).map(([a]) => a).join(", ")}`
                    : "Waiting for more data..."}
                </p>
              </div>
            </div>
          </div>

          {/* Partnership Readiness */}
          <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-[18px] font-bold text-gray-800">Partnership Readiness Checklist</h2>
            <div className="space-y-2">
              {[
                { label: "50+ patient survey responses", met: totalSurveys >= 50 },
                { label: "Average preparedness score > 3.5", met: parseFloat(avgPreparedness as string) > 3.5 },
                { label: "5+ patient testimonials with permission", met: patientFeedback.filter(f => f.permission).length >= 5 },
                { label: "3+ clinician endorsements", met: clinicianFeedback.filter(f => f.permission).length >= 3 },
                { label: "Top support areas identified", met: sortedHelpAreas.length >= 3 },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className={`text-[14px] ${item.met ? "text-green-500" : "text-gray-300"}`}>
                    {item.met ? "✓" : "○"}
                  </span>
                  <span className={`text-[14px] ${item.met ? "text-gray-800 font-medium" : "text-gray-500"}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
