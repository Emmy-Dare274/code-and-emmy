// Two real, finished projects for now — Faaji & Brew AfroMart and Codestar
// Blog. A third (UX design case study) slots in the same grid the moment
// its name, description and image are ready; the grid auto-reflows for
// either 2 or 3 cards, so adding it later is a one-line change.

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
    slug: "codestar-blog",
    title: "Codestar Blog",
    description:
      "A full-stack Django blog application covering the fundamentals end to end — models, views, templates and deployment. Actively being expanded with new features.",
    tags: ["Django", "Python", "SQLite"],
    image: "/images/projects/codestar-blog.jpg",
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
