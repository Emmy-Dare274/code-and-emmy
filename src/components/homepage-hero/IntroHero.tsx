"use client";

// The new first section of the homepage: dark, full-height, badge-led intro
// that sits above the existing Hero. Composes IdBadge + RoleTicker +
// BackgroundMarquee. The rest of the homepage (Hero, FeaturedProjects) is
// wrapped in ScrollReveal in page.tsx so it animates in as the visitor
// scrolls past this section.

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import IdBadge from "./IdBadge";
import RoleTicker from "./RoleTicker";
import BackgroundMarquee from "./BackgroundMarquee";

// loads client-side only, after the rest of the section is already visible.
const ParticleBackdrop = dynamic(() => import("./ParticleBackdrop"), {
  ssr: false,
});

export default function IntroHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="intro-hero">
      <BackgroundMarquee />
      {!reduceMotion && <ParticleBackdrop />}
      <div className="container intro-hero-inner">
        <IdBadge />

        <motion.div
          className="intro-hero-copy"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <RoleTicker />
          <p className="intro-hero-sub">
            Full-stack software developer based in Dublin, available to
            companies worldwide and for freelance projects.
          </p>
        </motion.div>

        <motion.div
          className="intro-scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <span className="intro-scroll-line" />
          <span>Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
