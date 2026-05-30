interface SaveForAppointmentProps {
  /** The page title to use in share/email subject */
  pageTitle?: string;
}

export default function SaveForAppointment({ pageTitle = "MyHealthCanvas Resource" }: SaveForAppointmentProps) {
  const trackClick = (action: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", `${action}_click`, {
        event_category: "return_visit",
        event_label: pageTitle,
        page: window.location.pathname,
      });
    }
  };

  const handlePrint = () => {
    trackClick("print_resource");
    window.print();
  };

  const handleEmailToSelf = () => {
    trackClick("email_to_self");
    const subject = encodeURIComponent(pageTitle);
    const body = encodeURIComponent(`I saved this resource for my next appointment:\n\n${window.location.href}\n\n— From MyHealthCanvas`);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_self");
  };

  const handleShare = async () => {
    trackClick("share_resource");
    if (navigator.share) {
      try {
        await navigator.share({
          title: pageTitle,
          text: "I found this helpful for preparing for my oncology appointment.",
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed — no action needed
      }
    } else {
      // Fallback: copy link
      await navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard.");
    }
  };

  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 border-t border-gray-100">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="text-[15px] font-semibold text-gray-700">Save this resource for your next appointment</p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={handlePrint}
            className="px-5 py-2.5 text-[14px] font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
          >
            Print
          </button>
          <button
            onClick={handleEmailToSelf}
            className="px-5 py-2.5 text-[14px] font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
          >
            Email to yourself
          </button>
          <button
            onClick={handleShare}
            className="px-5 py-2.5 text-[14px] font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all cursor-pointer"
          >
            Share with caregiver
          </button>
        </div>
      </div>
    </section>
  );
}
