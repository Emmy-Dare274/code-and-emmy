"use client";

import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";

// The homepage opens by introducing you, not the site's own name.
// Two labeled identity blocks (Developer / Designer) sit beside a
// large portrait photo, in the same spirit as a personal portfolio
// that leads with the person rather than a logo or a slogan.
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-intro-grid">
          <div className="hero-text-col">
            <motion.p
              className="hero-greeting text-secondary mb-2"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I&apos;m Emmanuel Oluwadare
            </motion.p>

            <motion.div
              className="role-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="role-label">Developer</h2>
              <p className="role-desc text-secondary">
                A full-stack software developer building fast, reliable
                web applications with React, TypeScript, Next.js, and
                Django, backed by PostgreSQL and clean, tested Python
                code.
              </p>
            </motion.div>

            <motion.div
              className="role-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h2 className="role-label">Designer</h2>
              <p className="role-desc text-secondary">
                A UX/UI designer who shapes those same products from the
                inside out, clear layouts, accessible interfaces, and
                interactions that feel effortless to use.
              </p>
            </motion.div>

            <motion.p
              className="hero-lede"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              Based in Dublin, Ireland, I build and design full-stack
              products end to end, e-commerce platforms, booking
              systems, and everything in between, including a
              hackathon-winning build with teams across the UK and
              Ireland, and time spent working in Agile sprints as a
              Scrum Master. Have a look at my{" "}
              <a href="#projects">projects</a>, read more{" "}
              <a href="/about">about me</a>, or{" "}
              <a href="/contact">get in touch</a> if you&apos;d like to
              work together. You can also{" "}
              <a href="/cv/emmanuel-oluwadare-cv.pdf" target="_blank" rel="noopener noreferrer">
                download my CV
              </a>{" "}
              for the full picture.
            </motion.p>
          </div>

          <motion.div
            className="hero-photo-col"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PhotoFrame
              src="/images/emmy-hero.jpg"
              alt="Emmanuel Oluwadare"
              width={420}
              height={460}
              initials="EO"
              shape="rect"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
