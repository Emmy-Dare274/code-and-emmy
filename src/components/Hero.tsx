"use client";

import { motion } from "framer-motion";
import PhotoFrame from "./PhotoFrame";

// The homepage's opening section. "Welcome to" fades up first, then
// the "Code & Emmy" title follows with a short delay and a 3D tilt,
// so the two lines feel sequenced instead of arriving all at once.
export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-text">
            <motion.p
              className="hero-eyebrow text-uppercase text-secondary fw-medium mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Welcome to
            </motion.p>

            <motion.h1
              className="brand-3d"
              style={{ transformPerspective: 800 }}
              initial={{ opacity: 0, rotateX: 55, y: 30 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            >
              Code &amp; Emmy
            </motion.h1>

            <motion.p
              className="hero-tagline text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Full-stack software developer building fast, reliable web
              applications with React, TypeScript, Next.js, and Django.
            </motion.p>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a href="#projects" className="btn btn-primary btn-lg me-3">
                View projects
              </a>
              
                href="/cv/emmanuel-oluwadare-cv.pdf"
                className="btn btn-outline-secondary btn-lg"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          <motion.div
            className="hero-photo"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PhotoFrame
              src="/images/emmy-hero.jpg"
              alt="Emmanuel Oluwadare"
              size={340}
              initials="EO"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
