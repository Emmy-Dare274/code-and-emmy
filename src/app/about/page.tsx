import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiDjango, SiReact } from "react-icons/si";
import { FaFigma, FaChalkboardUser, FaTrophy } from "react-icons/fa6";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Emmanuel Oluwadare (Emmy) is a full-stack developer and UX designer based in Dublin, available to companies and freelance clients worldwide. Former international teacher, Code Institute graduate, award-winning hackathon team lead.",
};

const pillars = [
  {
    icon: SiDjango,
    title: "Backend engineering",
    body: "Python and Django, PostgreSQL data modeling, authentication, and third-party integrations like Stripe for payments and Cloudinary for media. I write tests as I build, not after.",
  },
  {
    icon: SiReact,
    title: "Frontend engineering",
    body: "React, Next.js and TypeScript, with an eye for performance and accessibility. I care as much about how an interface feels to use as whether it works.",
  },
  {
    icon: FaFigma,
    title: "Product design",
    body: "I design in Figma before I write a line of code when a project calls for it. That includes building reusable design systems, not just one-off screens.",
  },
  {
    icon: FaChalkboardUser,
    title: "Communication & leadership",
    body: "15 years of teaching and experience as an Agile Scrum Master mean I can explain technical decisions clearly, break big problems into manageable steps, and lead a team under a deadline.",
  },
];

const audiences = [
  {
    title: "Hiring for your team",
    body: "Full-stack developer and UX-minded designer with a Level 5 British Diploma from Code Institute, an award-winning hackathon team lead, and 15 years of experience communicating and collaborating across teams. I ship tested, accessible, production-ready web applications, from wireframe to deployment.",
  },
  {
    title: "Need a freelance build",
    body: "I design and build complete web applications on my own, from the first wireframe to a live, tested site. You get one person who handles the user experience, the code and the deployment, and who explains every decision in plain language.",
  },
];

const proofProjects = [
  {
    slug: "faaji-brew-afromart",
    title: "Faaji & Brew AfroMart",
    body: "A Django and PostgreSQL e-commerce store with Stripe payments, built with 116 automated tests and PEP8-compliant code.",
  },
  {
    slug: "boutique-ado",
    title: "Boutique Ado",
    body: "A full-stack Django store for clothing and homeware, with a persistent shopping bag, checkout, and order history.",
  },
  {
    slug: "figma-design-system",
    title: "My Figma Design System",
    body: "A lean, accessible design system built to fix issues I've seen in many popular ones.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <header className="about-hero">
        <div className="container">
          <ScrollReveal>
            <div className="about-hero-grid">
              <div className="about-hero-copy">
                <span className="role-label">About</span>
                <h1>
                  Hi, I&apos;m Emmanuel. Most people call me{" "}
                  <span className="text-highlight">Emmy</span>.
                </h1>
                <p className="text-muted-soft about-lede">
                  Full-Stack Software Developer and UX Designer from Nigeria,
                  based in Dublin and available to companies worldwide and
                  for freelance projects.
                </p>
                <p className="text-muted-soft">
                  Before software development, I spent 15 years as an
                  internationally qualified teacher in international
                  schools, teaching English, Computer Science and
                  project-based learning. I hold two Master&apos;s degrees
                  (an M.Ed in Management and Leadership and an M.A. in
                  TESOL) and a PGCE. A love of technology and
                  problem-solving led me to retrain as a developer, and I
                  earned a Level 5 British Diploma in Full-Stack Software
                  Development from Code Institute, Dublin, in 2026. I now
                  build production-ready web applications with Django,
                  React, TypeScript and PostgreSQL.
                </p>
              </div>
              <div className="about-hero-media">
                <Image
                  src="/images/about-emmy.jpg"
                  alt="Emmanuel Oluwadare"
                  width={420}
                  height={520}
                  className="about-photo"
                  priority
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </header>

      <section className="about-section">
        <div className="container">
          <ScrollReveal>
            <h2>My story</h2>
            <div className="about-story">
              <p className="text-muted-soft">
                That teaching career built the skills I use every day as a
                developer: explaining complex ideas clearly, breaking big
                problems into structured steps, and designing solutions
                around real people.
              </p>
              <p className="text-muted-soft">
                My work includes a Django and PostgreSQL e-commerce platform
                with Stripe payments and 116 automated tests, a restaurant
                booking system, and a JavaScript quiz game that earned a
                Merit grade in a formal assessment. In January 2024, I led a
                team of six to the 1st Place Exceptional Award at the UK and
                Ireland hackathon with Broker Buddy, a stock investment
                platform we designed, built and deployed to Heroku within
                the deadline.
              </p>
              <p className="text-muted-soft">
                I&apos;ve worked in Agile teams as a developer and Scrum
                Master, and design is the other half of what I do. I plan
                user journeys and wireframes before writing code, and
                I&apos;ve been developing my UI/UX skills, including design
                systems, so that what I build is both clean under the hood
                and easy to use.
              </p>
            </div>
            <div className="achievement-banner">
              <FaTrophy aria-hidden="true" />
              <span>
                1st Place Exceptional Award, UK &amp; Ireland Hackathon 2024,
                team lead for Broker Buddy
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="about-section about-section-alt">
        <div className="container">
          <ScrollReveal>
            <h2>What I do</h2>
          </ScrollReveal>
          <div className="about-pillars">
            {pillars.map(({ icon: Icon, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <div className="pillar-card">
                  <Icon aria-hidden="true" className="pillar-icon" />
                  <h3>{title}</h3>
                  <p className="text-muted-soft">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <ScrollReveal>
            <h2>Who I work with</h2>
          </ScrollReveal>
          <div className="audience-grid">
            {audiences.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="audience-card">
                  <h3>{title}</h3>
                  <p className="text-muted-soft">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-section-alt">
        <div className="container">
          <ScrollReveal>
            <h2>Proof, not just claims</h2>
            <p className="text-muted-soft about-section-intro">
              Two live e-commerce applications and a design system I built
              from scratch. Each one has a shopping bag or checkout flow,
              user accounts, and a real product catalog, not a tutorial
              clone.
            </p>
          </ScrollReveal>
          <div className="proof-grid">
            {proofProjects.map(({ slug, title, body }, i) => (
              <ScrollReveal key={slug} delay={i * 0.08}>
                <Link href={`/portfolio/${slug}`} className="proof-card">
                  <h3>{title}</h3>
                  <p className="text-muted-soft">{body}</p>
                  <span className="portfolio-back-link">View project →</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-cta">
          <ScrollReveal>
            <p className="about-availability">
              Available to companies worldwide and for freelance projects.
            </p>
            <div className="about-cta-buttons">
              <Link href="/contact" className="btn btn-primary">
                Get in touch
              </Link>
              <a
                href="/cv/emmanuel-oluwadare-cv.pdf"
                className="btn btn-outline-secondary"
                download
              >
                Download CV
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
