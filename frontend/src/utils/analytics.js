// Analytics-ready event stub. No provider is wired up — this just gives every
// meaningful interaction a single, consistent call site so a real provider
// (GA4, PostHog, etc.) can be dropped in later without touching call sites.
export function trackEvent(name, payload = {}) {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.debug('[analytics]', name, payload);
  }
}
