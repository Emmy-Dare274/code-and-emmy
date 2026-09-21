import { describe, it, expect, afterEach, vi } from "vitest";
import { getBaseUrl } from "./site-url";

describe("getBaseUrl", () => {
  const ORIGINAL_ENV = process.env.NEXT_PUBLIC_SITE_URL;

  afterEach(() => {
    process.env.NEXT_PUBLIC_SITE_URL = ORIGINAL_ENV;
  });

  it("returns the fallback when the env var is not set", () => {
    delete process.env.NEXT_PUBLIC_SITE_URL;
    expect(getBaseUrl()).toBe("https://www.codeandemmy.dev");
  });

  it("returns the normalized origin when the env var is a valid URL", () => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com/";
    expect(getBaseUrl()).toBe("https://example.com");
  });

  it("falls back instead of crashing when the env var is malformed", () => {
    // This exact string is what actually broke the production build earlier,
    // markdown link syntax pasted into the env var by mistake.
    process.env.NEXT_PUBLIC_SITE_URL = "[www.codeandemmy.dev](https://www.codeandemmy.dev)";
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    expect(getBaseUrl()).toBe("https://www.codeandemmy.dev");
    expect(warnSpy).toHaveBeenCalled();

    warnSpy.mockRestore();
  });
});
