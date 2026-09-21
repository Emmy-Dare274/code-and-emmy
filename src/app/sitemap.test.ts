import { describe, it, expect, beforeEach, vi } from "vitest";

describe("sitemap", () => {
  beforeEach(() => {
    // sitemap.ts reads the env var once, at module load, so each test
    // resets modules and sets the env var before importing it fresh.
    vi.resetModules();
    process.env.NEXT_PUBLIC_SITE_URL = "https://example.com";
  });

  it("includes the home page and every static route", async () => {
    const { default: sitemap } = await import("./sitemap");
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain("https://example.com");
    expect(urls).toContain("https://example.com/about");
    expect(urls).toContain("https://example.com/contact");
  });

  it("includes every portfolio project", async () => {
    const { default: sitemap } = await import("./sitemap");
    const urls = sitemap().map((entry) => entry.url);

    expect(urls).toContain("https://example.com/portfolio/faaji-brew-afromart");
    expect(urls).toContain("https://example.com/portfolio/boutique-ado");
    expect(urls).toContain("https://example.com/portfolio/figma-design-system");
  });

  it("gives the home page the highest priority", async () => {
    const { default: sitemap } = await import("./sitemap");
    const home = sitemap().find((entry) => entry.url === "https://example.com");

    expect(home?.priority).toBe(1);
  });
});
