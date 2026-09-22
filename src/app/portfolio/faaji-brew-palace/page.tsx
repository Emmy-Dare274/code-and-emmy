import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faaji & Brew Palace | Code & Emmy",
  description:
    "A full-stack Django restaurant reservation system with authenticated CRUD bookings, live table availability, and a staff dashboard, built for a West African fine-dining brand.",
};

export default function FaajiBrewPalacePage() {
  return (
    <main>
      <header className="portfolio-detail-header">
        <span className="portfolio-eyebrow">Portfolio</span>
        <h1>Faaji &amp; Brew Palace</h1>
        <p className="text-muted-soft">
          A full-stack Django reservation system for a West African
          fine-dining brand across Lagos and London.
        </p>
      </header>

      <div className="portfolio-detail-media">
        <Image
          src="/images/projects/faaji-brew-palace.png"
          alt="Faaji & Brew Palace restaurant homepage and booking site"
          fill
          sizes="(min-width: 992px) 960px, 95vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="portfolio-detail-body">
        <p>
          Every restaurant hits the same wall eventually: a phone ringing
          off the hook during service, a paper reservation book nobody can
          read, and double-bookings that cost trust as much as revenue.
          Faaji &amp; Brew Palace replaces that with a real booking system,
          not a contact form dressed up as one. Guests register, check live
          table availability, and create, view, edit or cancel an actual
          reservation, backed by a data model that makes a double-booking
          structurally impossible rather than hoping staff catch it in
          time.
        </p>

        <h2>What it does</h2>
        <ul>
          <li>Account registration, login and logout via django-allauth, with custom-styled templates</li>
          <li>Full CRUD on reservations — book, view, edit and cancel a table, not just submit an enquiry</li>
          <li>A personal &quot;My Bookings&quot; dashboard showing each guest&apos;s reservations and their status</li>
          <li>A unique database constraint that blocks double-booking a table at the model level, not just in the UI</li>
          <li>A staff admin interface for managing every booking, table and the restaurant&apos;s public profile</li>
          <li>Custom branded 403, 404 and 500 error pages, and Django flash messages confirming every action</li>
          <li>A mobile-first Bootstrap 5 layout, tested at 375px, 768px and 1280px</li>
        </ul>

        <h2>Built with</h2>
        <p>
          Django 6.0 and Python 3.12 on the backend, PostgreSQL in
          production (hosted on Neon) with SQLite for local development,
          django-allauth for authentication, and Cloudinary for image
          hosting. The frontend is Bootstrap 5 with Crispy Forms for clean
          form rendering, Font Awesome for icons, and Google Fonts
          (Cormorant Garamond and Inter) for the fine-dining typography.
          Deployed on Heroku with Gunicorn and WhiteNoise.
        </p>

        <h2>Quality &amp; testing</h2>
        <p>
          19 automated Django unit tests, all passing, plus 24 manual test
          cases covering authentication, CRUD, navigation and error
          scenarios. Zero errors on W3C HTML/CSS validation, PEP8-compliant
          Python, JSHint-checked JavaScript, Lighthouse performance audits,
          and cross-browser testing on Chrome, Edge and Firefox. This
          wasn&apos;t built to look finished, it was built and verified to
          actually be finished.
        </p>

        <Link
          href="https://faaji-brew-palace-8fcdc34800ef.herokuapp.com/"
          className="portfolio-back-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View live demo →
        </Link>
        <br />
        <Link href="https://github.com/Emmy-Dare274/faaji-brew-palace" className="portfolio-back-link" target="_blank" rel="noopener noreferrer">
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
