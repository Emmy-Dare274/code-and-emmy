import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Broker Buddy | Code & Emmy",
  description:
    "A risk-free stock trading simulator built by a six-developer Agile team for a UK & Ireland hackathon — 1st Place Exceptional Award.",
};

export default function BrokerBuddyPage() {
  return (
    <main>
      <header className="portfolio-detail-header">
        <span className="portfolio-eyebrow">Portfolio</span>
        <h1>Broker Buddy</h1>
        <p className="text-muted-soft">
          A risk-free stock market simulator, built in a six-developer Agile
          sprint that won 1st Place at a UK &amp; Ireland hackathon.
        </p>
      </header>

      <div className="portfolio-detail-media">
        <Image
          src="/images/projects/broker-buddy.png"
          alt="Broker Buddy landing page screenshot"
          fill
          sizes="(min-width: 992px) 960px, 95vw"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>

      <div className="portfolio-detail-body">
        <p>
          Broker Buddy lets novice and experienced investors practice the
          stock market without risking real money — a simulator, not a live
          trading platform, built around a simple idea: skills come from
          practice, and practice shouldn&apos;t cost you your savings. It was
          built from scratch in a few intense days for the New Year 2024
          hackathon, alongside five other developers, and took{" "}
          <strong>1st Place, Exceptional Award</strong> in a UK &amp; Ireland
          -wide competition.
        </p>

        <h2>What it does</h2>
        <ul>
          <li>A landing page introducing the platform and its risk-free simulator</li>
          <li>User accounts, so trades and a personal watchlist persist between visits</li>
          <li>A market view with live stock data, prices and daily change</li>
          <li>A personal wallet tracking account balance, stock balance and capital development over time</li>
          <li>Buy/sell actions per stock, with holdings and share counts tracked per user</li>
          <li>A fully responsive layout, from desktop down to mobile, with a dedicated mobile nav</li>
        </ul>

        <h2>Working as a team of six</h2>
        <p>
          This was my first experience shipping software inside a real Agile
          team rather than solo. Six of us — Sandra, Kim, Vernell, Darren,
          Katerina and me — split the platform into ownable pieces (accounts,
          markets, wallet, marketing pages) and worked them in parallel
          against a single shared Django codebase, merging continuously
          rather than integrating everything at the end. With a hackathon
          deadline and six people committing to the same repository, keeping
          scope realistic, communicating blockers early, and reviewing each
          other&apos;s code before merging mattered as much as the code
          itself. That&apos;s the muscle I took away from it: building
          software is a team sport, and the fastest team isn&apos;t the one
          that codes fastest alone, it&apos;s the one that stays unblocked.
        </p>

        <div className="portfolio-gallery-image">
          <Image
            src="/images/projects/broker-buddy-app.png"
            alt="Broker Buddy wallet and market dashboard, shown across desktop, tablet and mobile"
            width={935}
            height={417}
          />
        </div>
        <p className="text-muted-soft" style={{ textAlign: "center", marginTop: "-1rem" }}>
          The wallet and market dashboard, designed responsively across desktop, tablet and mobile.
        </p>

        <h2>Built with</h2>
        <p>
          Django and Python on the backend, with Bootstrap, HTML and
          JavaScript on the front end, Font Awesome for icons and Google
          Fonts for typography. Deployed on Heroku, with Git and GitHub
          coordinating six people working against the same codebase at once.
        </p>

        <Link
          href="https://finflare-9057c20c8176.herokuapp.com/"
          className="portfolio-back-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View live demo →
        </Link>
        <br />
        <Link href="https://github.com/Emmy-Dare274/finFlare" className="portfolio-back-link" target="_blank" rel="noopener noreferrer">
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
