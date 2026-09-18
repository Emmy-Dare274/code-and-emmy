"use client";

// Interactive hero: hovering the "developer" column desaturates the photo
// and reveals the frontend/backend stack icons underneath it; hovering
// "designer" restores full color and reveals the design-tool icons instead.
// The photo itself nudges left/right so it doesn't sit on top of whichever
// icon row is showing.

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
} from "react-icons/si";
import { FaFigma, FaPenRuler, FaUniversalAccess, FaLayerGroup } from "react-icons/fa6";

type HoverSide = "left" | "right" | null;

// Stack shown under "developer" on hover
const devStack = [
  { label: "React", Icon: SiReact },
  { label: "TypeScript", Icon: SiTypescript },
  { label: "Next.js", Icon: SiNextdotjs },
  { label: "Django", Icon: SiDjango },
  { label: "PostgreSQL", Icon: SiPostgresql },
];

// Tools shown under "designer" on hover — swap these if Figma isn't your
// main tool, or if you want to name specific ones instead of generic skills.
const designSkills = [
  { label: "Figma", Icon: FaFigma },
  { label: "UI/UX Design", Icon: FaPenRuler },
  { label: "Accessibility", Icon: FaUniversalAccess },
  { label: "Design Systems", Icon: FaLayerGroup },
];

export default function Hero() {
  const [hover, setHover] = useState<HoverSide>(null);

  // The grayscale layer's clip-path sweeps to cover the whole photo when
  // hovering "developer" (left), and shrinks to nothing when hovering
  // "designer" (right). At rest it sits at the 50/50 split.
  const grayscaleClip =
    hover === "left"
      ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      : hover === "right"
      ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
      : "polygon(0 0, 50% 0, 50% 100%, 0 100%)";

  // The color-wash (duotone tint) layer only shows at rest, on the right
  // half — any hover state collapses it so the photo reads as either fully
  // grayscale or fully natural color, never a half-tinted mix.
  const washClip = hover
    ? "polygon(0 0, 0 0, 0 100%, 0 100%)"
    : "polygon(0 0, 50% 0, 50% 100%, 0 100%)";

  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="hero-split-grid">
            {/* Developer column */}
            <div
              className="hero-role-col hero-role-left"
              onMouseEnter={() => setHover("left")}
              onMouseLeave={() => setHover(null)}
            >
              <h2 className="role-label">developer</h2>
              <p className="role-desc text-muted-soft">
                I build fast, reliable full-stack applications — from
                database schema to polished UI — using React, TypeScript,
                Next.js, Django and Python.
              </p>
              <AnimatePresence>
                {hover === "left" && (
                  <motion.div
                    className="skill-icon-row"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {devStack.map(({ label, Icon }) => (
                      <span className="skill-icon-card" key={label}>
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Photo — grayscale and color-wash layers are stacked on top
                of the base photo and their clip-path is animated below */}
            <motion.div
              className="hero-photo-split"
              animate={{ x: hover === "left" ? -14 : hover === "right" ? 14 : 0 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
            >
              <Image
                src="/images/emmy-hero.jpg"
                alt="Emmanuel Oluwadare"
                width={480}
                height={520}
                className="photo-base"
                priority
              />
              <motion.div
                className="photo-grayscale"
                initial={false}
                animate={{ clipPath: grayscaleClip }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              />
              <motion.div
                className="photo-wash"
                initial={false}
                animate={{ clipPath: washClip }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Designer column */}
            <div
              className="hero-role-col hero-role-right"
              onMouseEnter={() => setHover("right")}
              onMouseLeave={() => setHover(null)}
            >
              <h2 className="role-label">designer</h2>
              <p className="role-desc text-muted-soft">
                I design clean, accessible interfaces first, then build
                them — so the product looks as good as it works.
              </p>
              <AnimatePresence>
                {hover === "right" && (
                  <motion.div
                    className="skill-icon-row"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                  >
                    {designSkills.map(({ label, Icon }) => (
                      <span className="skill-icon-card" key={label}>
                        <Icon aria-hidden="true" />
                        <span>{label}</span>
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            className="hero-lede"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I&apos;m Emmanuel Oluwadare — a full-stack software developer and a designer
            based in Dublin, building sleek, market-ready web applications
            from idea to deployment. I bring a decade of experience as an
            educator into how I work: clear communication, structured
            problem-solving, and a habit of leaving things better documented
            than I found them.
          </motion.p>
        </div>
      </section>

      <div className="section-heading-divider" id="projects">
        <span>Some of my latest work</span>
      </div>
    </>
  );
}
