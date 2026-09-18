import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Codestar Blog | Code & Emmy",
  description:
    "A full-stack Django blog application covering models, views, templates and deployment end to end.",
};

export default function CodestarBlogPage() {
  return (
    <main>
      <header className="portfolio-detail-header">
        <span className="portfolio-eyebrow">Portfolio</span>
        <h1>Codestar Blog</h1>
        <p className="text-muted-soft">
          A full-stack Django blog application, built to work through the
          fundamentals end to end.
        </p>
      </header>

      <div className="portfolio-detail-media">
        <Image
          src="/images/projects/codestar-blog.jpg"
          alt="Codestar Blog screenshot"
          fill
          sizes="(min-width: 992px) 960px, 95vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="portfolio-detail-body">
        <p>
          Codestar Blog is a Django full-stack blog application built to
          practice the complete web development cycle — models, views,
          templates and production deployment — without relying on scaffolding
          or shortcuts. It&apos;s a foundational project, and one I&apos;m
          actively continuing to build on: extending the feature set,
          tightening the code, and bringing it up to the same standard as my
          later projects.
        </p>

        <h2>What it does</h2>
        <ul>
          <li>Blog post creation, editing and display through Django&apos;s templating system</li>
          <li>Separate About and Blog apps, cleanly split by responsibility</li>
          <li>A production-ready deployment setup (Procfile, static file handling, environment config)</li>
        </ul>

        <h2>Built with</h2>
        <p>
          Python and Django on the backend, with server-rendered HTML
          templates on the front. SQLite for local development, with the
          project structured for a straightforward move to a production
          database.
        </p>

        <Link href="https://github.com/Emmy-Dare274/codestar_blog" className="portfolio-back-link" target="_blank" rel="noopener noreferrer">
          View source on GitHub →
        </Link>
        <br />
        <Link href="/#portfolio" className="portfolio-back-link">
          ← Back to portfolio
        </Link>
      </div>
    </main>
  );
}
