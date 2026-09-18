import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Figma Design System | Code & Emmy",
  description:
    "A lean, accessible Figma design system built to fix common issues seen in many popular design systems.",
};

export default function FigmaDesignSystemPage() {
  return (
    <main>
      <header className="portfolio-detail-header">
        <span className="portfolio-eyebrow">Portfolio</span>
        <h1>My Figma Design System</h1>
        <p className="text-muted-soft">
          A lean, accessible design system built from the ground up in Figma.
        </p>
      </header>

      <div className="portfolio-detail-media">
        <Image
          src="/images/projects/figma-design-system.png"
          alt="Mobile UI screens from the Figma design system"
          fill
          sizes="(min-width: 992px) 960px, 95vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="portfolio-detail-body">
        <p>
          I wanted to share what I&apos;ve learned by creating a lean and
          powerful Figma design system that&apos;s intuitive, accessible, and
          beautiful. I also wanted to fix the issues I&apos;ve seen with many
          popular design systems.
        </p>

        <h2>Built with</h2>
        <p>
          Figma — components, variants, and a structured token system for
          color, type and spacing, applied consistently across the mobile
          screens shown above.
        </p>

        <Link href="/#portfolio" className="portfolio-back-link">
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}
