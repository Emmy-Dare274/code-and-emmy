// Five real projects: Faaji & Brew AfroMart, Boutique Ado, the Figma
// design system case study, Broker Buddy, and Faaji & Brew Palace.

import Image from "next/image";
import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
};

const projects: Project[] = [
  {
    slug: "faaji-brew-afromart",
    title: "Faaji & Brew AfroMart",
    description:
      "A full-stack e-commerce marketplace for authentic West African fabrics, spices, beads and homeware, with live Stripe payments, account-based order history, and staff tools for managing the catalog.",
    tags: ["Django", "PostgreSQL", "Stripe", "Bootstrap"],
    image: "/images/projects/afromart.jpg",
  },
  {
    slug: "boutique-ado",
    title: "Boutique Ado",
    description:
      "A full-stack Django e-commerce store for clothing and homeware, built around a shopping bag, Stripe checkout, a product catalog, and user profiles for order history.",
    tags: ["Django", "Python", "Stripe", "Bootstrap"],
    image: "/images/projects/boutique-ado.jpg",
  },
  {
    slug: "figma-design-system",
    title: "My Figma Design System",
    description:
      "A lean, accessible Figma design system built to be intuitive and beautiful, and to fix issues I've seen with many popular design systems.",
    tags: ["Figma", "Design Systems", "UI/UX"],
    image: "/images/projects/figma-design-system.png",
  },
  {
    slug: "broker-buddy",
    title: "Broker Buddy",
    description:
      "A stock-trading simulator built with a six-developer team in an Agile sprint for a UK & Ireland hackathon — 1st Place Exceptional Award. My focus was collaborative feature delivery under a hard deadline.",
    tags: ["Django", "Python", "Bootstrap", "Agile"],
    image: "/images/projects/broker-buddy.png",
  },
  {
    slug: "faaji-brew-palace",
    title: "Faaji & Brew Palace",
    description:
      "A full-stack Django reservation system that turns a phone ringing off the hook into a two-click booking flow — live table availability, authenticated CRUD reservations, and a staff dashboard, with double-bookings blocked at the database level.",
    tags: ["Django", "PostgreSQL", "Cloudinary", "Bootstrap"],
    image: "/images/projects/faaji-brew-palace.png",
  },
];

export default function FeaturedProjects() {
  return (
    <div className="portfolio-grid">
      {projects.map((project) => (
        <Link key={project.slug} href={`/portfolio/${project.slug}`} className="portfolio-card">
          <div className="portfolio-card-media">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 992px) 360px, 90vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="portfolio-card-body">
            <h3 className="portfolio-card-title">{project.title}</h3>
            <p className="portfolio-card-desc text-muted-soft">{project.description}</p>
            <div className="tech-pill-row">
              {project.tags.map((tag) => (
                <span className="tech-pill" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
