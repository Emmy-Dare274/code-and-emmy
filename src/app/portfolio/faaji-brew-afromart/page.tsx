import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faaji & Brew AfroMart | Code & Emmy",
  description:
    "A full-stack e-commerce marketplace built with Django, PostgreSQL and Stripe, selling authentic West African fabrics, spices, beads and homeware.",
};

export default function AfroMartPage() {
  return (
    <main>
      <header className="portfolio-detail-header">
        <span className="portfolio-eyebrow">Portfolio</span>
        <h1>Faaji & Brew AfroMart</h1>
        <p className="text-muted-soft">
          A full-stack e-commerce marketplace for authentic West African
          fabrics, spices, beads, jewelry and homeware.
        </p>
      </header>

      <div className="portfolio-detail-media">
        <Image
          src="/images/projects/afromart.jpg"
          alt="Faaji & Brew AfroMart screenshot"
          fill
          sizes="(min-width: 992px) 960px, 95vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="portfolio-detail-body">
        <p>
          AfroMart grew out of real customer requests at the Faaji & Brew
          Palace restaurant, extending that brand into a working online
          store. It was built as my Level 5 Diploma capstone project for
          Code Institute&apos;s Full-Stack Software Development program — a
          real, functional store built to accept live payments, not a
          simulation.
        </p>

        <h2>What it does</h2>
        <ul>
          <li>Category browsing with live price filtering and a global search</li>
          <li>Product pages with photo carousels and variant selection</li>
          <li>A persistent basket that merges seamlessly across guest and logged-in sessions</li>
          <li>Secure Stripe checkout, with order confirmation only firing after server-side webhook verification</li>
          <li>Full account system — email verification, saved addresses, order history, one-click reordering</li>
          <li>Verified-purchase-only product reviews, with a staff moderation queue</li>
          <li>A staff dashboard for managing products, categories and reviews — no Django admin required</li>
        </ul>

        <h2>Built with</h2>
        <p>
          Django 6.1 and PostgreSQL on the backend, with Stripe for payments,
          django-allauth for authentication, and Cloudinary for image
          hosting. The frontend is Bootstrap 5 with vanilla JavaScript — no
          frontend framework, by design, to keep the focus on solid
          server-rendered fundamentals. Deployed on Heroku with Gunicorn and
          WhiteNoise.
        </p>

        <h2>Quality &amp; testing</h2>
        <p>
          116 automated tests across six independent Django apps, a fully
          PEP8-compliant codebase, W3C-validated HTML/CSS, and a complete
          manual test pass including real Stripe transactions.
        </p>

        <Link
          href="https://faaji-brew-afromart-0cba904df962.herokuapp.com/"
          className="portfolio-back-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View live demo →
        </Link>
        <br />
        <Link href="https://github.com/Emmy-Dare274/faaji-brew-afromart" className="portfolio-back-link" target="_blank" rel="noopener noreferrer">
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
