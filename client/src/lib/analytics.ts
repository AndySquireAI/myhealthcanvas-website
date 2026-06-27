// Centralised GA4 analytics for MyHealthCanvas.
//
// All events flow into the "NEW MyHealthCanvas" GA4 web stream (G-YYX090N0HV)
// via the gtag instance loaded by Google Tag Manager (GTM-TG2F5QL2),
// working with the dataLayer/gtag stub defined in index.html (before GTM loads).
// NOTE: the GA4 Measurement ID is configured inside the GTM container's Google
// Tag, NOT hardcoded here. This comment is documentation only.
//
// Three "win paths" are tracked as conversions:
//   1. Forms revenue        -> "purchase" (already implemented in MyHealthCanvas.tsx)
//   2. PAG partnership      -> "pag_partnership_click" / "contact_form_submit" (subject=partnership)
//   3. AAA agent clients    -> "aaa_discovery_call_click" / "contact_form_submit" (subject=aaa)
//
// This file also owns Google Consent Mode v2 signalling and SPA virtual
// pageviews so analytics stays consistent and EU AI Act / GDPR aligned.
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

export const CONSENT_STORAGE_KEY = "mhc_consent_v2";

// Ensure gtag exists even if the index.html stub somehow didn't run (defensive).
function gtag(...args: any[]) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // The index.html stub defines window.gtag; fall back to dataLayer.push.
  if (typeof window.gtag === "function") {
    window.gtag(...args);
  } else {
    window.dataLayer.push(args);
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

// ---- Purchase (forms revenue) -------------------------------------------

/**
 * Fires the GA4 `purchase` event reliably, then runs `onComplete` (typically a
 * redirect to the thank-you page).
 *
 * Why this exists: the previous code fired `gtag("event", "purchase", ...)` and
 * then immediately set `window.location.href`. gtag sends its hit asynchronously
 * (a beacon), so navigating away in the same tick frequently cancelled the
 * request before it left the browser. The result: real PayPal sales captured
 * fine, but the `purchase` event never reached GA4 ("No stream data detected").
 *
 * Here we pass `event_callback` so the redirect only runs once the beacon has
 * been dispatched, with a `setTimeout` safety net so checkout NEVER hangs if
 * GA is blocked, slow, or consent-denied. We also guard against double-firing.
 */
export interface PurchaseDetails {
  transactionId?: string;
  value: number;
  currency?: string;
  itemName: string;
}

let purchaseFired = false;

export function trackPurchase(details: PurchaseDetails, onComplete?: () => void): void {
  const finish = (() => {
    let done = false;
    return () => {
      if (done) return;
      done = true;
      if (onComplete) onComplete();
    };
  })();

  // Always complete (redirect) even if analytics is unavailable or slow.
  const safetyTimer = setTimeout(finish, 1200);

  if (typeof window === "undefined") {
    clearTimeout(safetyTimer);
    finish();
    return;
  }

  // Guard: never log the same purchase twice in one page session.
  if (purchaseFired) {
    clearTimeout(safetyTimer);
    finish();
    return;
  }
  purchaseFired = true;

  const payload: Record<string, unknown> = {
    value: details.value,
    currency: details.currency || "GBP",
    items: [{ item_name: details.itemName, price: details.value, quantity: 1 }],
    page_path: window.location.pathname,
    event_callback: () => {
      clearTimeout(safetyTimer);
      finish();
    },
  };
  if (details.transactionId) payload.transaction_id = details.transactionId;

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", "purchase", payload);
    } else if (Array.isArray(window.dataLayer)) {
      // No gtag yet: still record for GTM, then complete immediately.
      window.dataLayer.push({ event: "purchase", ...payload });
      clearTimeout(safetyTimer);
      finish();
    } else {
      clearTimeout(safetyTimer);
      finish();
    }
  } catch (err) {
    // Never let analytics break the checkout flow.
    // eslint-disable-next-line no-console
    console.warn("trackPurchase failed:", err);
    clearTimeout(safetyTimer);
    finish();
  }
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

// ---- Consent Mode v2 -----------------------------------------------------

/**
 * Read the stored consent decision. Returns "granted", "denied", or null (undecided).
 */
export function getStoredConsent(): "granted" | "denied" | null {
  try {
    const v = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (v === "granted" || v === "denied") return v;
  } catch {
    /* storage may be blocked */
  }
  return null;
}

/**
 * Update Google Consent Mode v2 signals after the user makes a choice,
 * persist the decision, and push a dataLayer event GTM can trigger on.
 */
export function updateConsent(granted: boolean) {
  const value = granted ? "granted" : "denied";
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, value);
  } catch {
    /* ignore */
  }

  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });

  gtag("set", "ads_data_redaction", !granted);

  // Custom event so GTM tags waiting on consent can (re)fire.
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "consent_update",
      consent_state: value,
    });
  }
}

// ---- SPA pageviews -------------------------------------------------------

/**
 * Push a virtual pageview for SPA route changes.
 * GTM should have a Custom Event trigger on `virtual_page_view`
 * wired to a GA4 event/config tag using {{DLV - page_path}}.
 */
export function trackPageView(path: string, title?: string) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "virtual_page_view",
    page_path: path,
    page_location: window.location.origin + path,
    page_title: title || document.title,
  });
}
