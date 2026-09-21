import { describe, it, expect } from "vitest";
import { SOCIAL_LINKS } from "./social-links";

describe("SOCIAL_LINKS", () => {
  it("has an entry for every network the site links to", () => {
    expect(SOCIAL_LINKS).toHaveProperty("github");
    expect(SOCIAL_LINKS).toHaveProperty("linkedin");
    expect(SOCIAL_LINKS).toHaveProperty("instagram");
    expect(SOCIAL_LINKS).toHaveProperty("twitter");
  });

  it("only contains string values", () => {
    Object.values(SOCIAL_LINKS).forEach((value) => {
      expect(typeof value).toBe("string");
    });
  });

  it("has a real GitHub URL, not the placeholder", () => {
    expect(SOCIAL_LINKS.github).not.toBe("#");
    expect(SOCIAL_LINKS.github).toMatch(/^https:\/\/github\.com\//);
  });
});
