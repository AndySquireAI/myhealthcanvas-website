export default function ClinicianPerspective() {
  return (
    <section className="py-14 px-6 md:px-12 lg:px-24" style={{ backgroundColor: "#f9f9f7" }}>
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center space-y-3">
          <h2 className="text-[22px] md:text-[28px] font-bold text-gray-900">
            Why clinicians appreciate prepared patients
          </h2>
          <p className="text-[16px] text-gray-600 leading-[1.7] max-w-2xl mx-auto">
            Research consistently shows that patients who prepare for appointments have better outcomes and stronger relationships with their care teams.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-[15px] text-gray-700 font-medium">Remember more information</p>
            <p className="text-[14px] text-gray-500 mt-1">Patients who bring written questions retain more from each consultation.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-[15px] text-gray-700 font-medium">Ask better questions</p>
            <p className="text-[14px] text-gray-500 mt-1">Prepared questions lead to more focused, productive conversations.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-[15px] text-gray-700 font-medium">Identify concerns earlier</p>
            <p className="text-[14px] text-gray-500 mt-1">Writing down symptoms and worries helps surface issues that might otherwise be forgotten.</p>
          </div>
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <p className="text-[15px] text-gray-700 font-medium">Communicate priorities more clearly</p>
            <p className="text-[14px] text-gray-500 mt-1">When patients know what matters most to them, clinicians can tailor care more effectively.</p>
          </div>
        </div>

        {/* Oncologist quote */}
        <div className="p-6 bg-white rounded-xl border border-[oklch(0.55_0.15_195)]/20 shadow-sm max-w-2xl mx-auto">
          <p className="text-[15px] text-gray-600 leading-[1.8] italic">
            "Some of my patients bring their MyHealthCanvas to appointments so they don't forget questions. Having a standard template is much easier for me to scan, and a lot less complex than fragmented EHR records."
          </p>
          <p className="text-[13px] text-gray-400 font-medium mt-3">Oncologist, 38 · Switzerland</p>
        </div>
      </div>
    </section>
  );
}
