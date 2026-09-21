const FALLBACK_SITE_URL = "https://www.codeandemmy.dev";

/**
 * Reads NEXT_PUBLIC_SITE_URL and validates it's an actual URL before
 * trusting it. A malformed value (stray markdown syntax pasted in by
 * mistake, a typo) falls back to the known-good production URL instead of
 * crashing the build or silently producing broken links in the sitemap
 * and structured data.
 */
export function getBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (!raw) return FALLBACK_SITE_URL;

  try {
    // .origin strips any trailing slash or path, so callers can safely
    // do `${baseUrl}${route}` without ending up with a double slash.
    return new URL(raw).origin;
  } catch {
    console.warn(
      `NEXT_PUBLIC_SITE_URL is not a valid URL ("${raw}"), falling back to ${FALLBACK_SITE_URL}`
    );
    return FALLBACK_SITE_URL;
  }
}
