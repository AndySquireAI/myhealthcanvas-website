// Centralised GA4 event tracking for MyHealthCanvas.
//
// All events flow into the single consolidated GA4 property (G-6CNLJJJ8WQ)
// via the gtag instance loaded by Google Tag Manager (GTM-TG2F5QL2).
//
// Three "win paths" are tracked as conversions:
//   1. Forms revenue        -> "purchase" (already implemented in MyHealthCanvas.tsx)
//   2. PAG partnership      -> "pag_partnership_click" / "contact_form_submit" (subject=partnership)
//   3. AAA agent clients    -> "aaa_discovery_call_click" / "contact_form_submit" (subject=aaa)
//
// Keeping this in one place avoids the ad-hoc, copy-pasted gtag calls that
// previously made events inconsistent and hard to mark as Key Events in GA4.

type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

/**
 * Low-level event sender. Safe on SSR / when gtag is not yet loaded.
 * Always pushes to dataLayer as a fallback so GTM-side tags can also pick it up.
 */
export function trackEvent(eventName: string, params: GtagParams = {}): void {
  if (typeof window === "undefined") return;

  const payload = { ...params, page_path: window.location.pathname };

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    } else if (Array.isArray(window.dataLayer)) {
      // Fallback: let GTM observe the event even if gtag isn't ready.
      window.dataLayer.push({ event: eventName, ...payload });
    }
  } catch (err) {
    // Never let analytics break the UX.
    // eslint-disable-next-line no-console
    console.warn("trackEvent failed:", err);
  }
}

// ---- Tier 1: high-intent lead conversions -------------------------------

/** AAA "Book a discovery call" CTA clicked (AI Agents / AI Automation client lead). */
export function trackAaaDiscoveryCallClick(source: string): void {
  trackEvent("aaa_discovery_call_click", {
    event_category: "lead",
    lead_type: "aaa_agent_client",
    event_label: source,
  });
}

/** Advocacy "Contact us" CTA clicked (PAG / charity partnership lead). */
export function trackPagPartnershipClick(source: string): void {
  trackEvent("pag_partnership_click", {
    event_category: "lead",
    lead_type: "pag_partnership",
    event_label: source,
  });
}

/** Contact form successfully submitted. `subject` separates lead types in GA4. */
export function trackContactFormSubmit(subject: string): void {
  trackEvent("contact_form_submit", {
    event_category: "lead",
    lead_type: contactSubjectToLeadType(subject),
    event_label: subject || "unspecified",
  });
}

function contactSubjectToLeadType(subject: string): string {
  switch (subject) {
    case "partnership":
      return "pag_partnership";
    case "aaa":
      return "aaa_agent_client";
    case "myhealthcanvas":
      return "forms_customer";
    default:
      return "general";
  }
}

// ---- Tier 2: engagement signals (kept consistent with existing usage) ----

export function trackResourceClick(label: string, location?: string): void {
  trackEvent("resource_click", {
    event_category: "engagement",
    event_label: label,
    location,
  });
}

export function trackScrollDepth(percent: number): void {
  trackEvent("scroll_depth", {
    event_category: "engagement",
    value: percent,
    event_label: `${percent}%`,
  });
}
