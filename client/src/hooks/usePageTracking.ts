import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { trackPageView } from "@/lib/analytics";

/**
 * Fires a `virtual_page_view` dataLayer event whenever the wouter route changes.
 * The initial hard page load is already covered by GTM's default pageview,
 * so we skip the very first render to avoid double-counting it.
 */
export function usePageTracking() {
  const [location] = useLocation();
  const isFirst = useRef(true);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    // Defer slightly so document.title (updated by the SEO component) is current.
    const id = window.setTimeout(() => {
      trackPageView(location);
    }, 0);
    return () => window.clearTimeout(id);
  }, [location]);
}
