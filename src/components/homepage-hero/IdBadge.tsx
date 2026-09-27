"use client";

// A lanyard-style ID badge: drops in on load, swings gently on its own,
// and flips to a back face on hover/tap. Pure CSS 3D transforms driven by
// Framer Motion — no WebGL, that's reserved for the particle backdrop.

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa6";

export default function IdBadge() {
  const [flipped, setFlipped] = useState(false);
  const reduceMotion = useReducedMotion();

  // Auto-flips on its own timer, independent of hover, so it turns around
  // even if nobody touches it. Clicking still flips it manually on demand.
  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setFlipped((f) => !f);
    }, 2800);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="id-badge-wrap">
      <div className="id-lanyard" aria-hidden="true" />
      <div className="id-clip" aria-hidden="true" />

      <motion.div
        className="id-badge-drop"
        initial={reduceMotion ? { y: 0, opacity: 0 } : { y: -260, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={
          reduceMotion
            ? { duration: 0.4 }
            : { type: "spring", stiffness: 120, damping: 14, delay: 0.15 }
        }
      >
        <motion.div
          className="id-badge-swing"
          animate={reduceMotion ? { rotate: 0 } : { rotate: [-3, 3, -3] }}
          transition={reduceMotion ? { duration: 0 } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="id-card-scene"
            onClick={() => setFlipped((f) => !f)}
            role="button"
            tabIndex={0}
            aria-label="Flip badge"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setFlipped((f) => !f);
            }}
          >
            <motion.div
              className="id-card-inner"
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="id-card-face id-card-front">
                <div className="id-card-topline">
                  <span>CODE &amp; EMMY</span>
                  <span className="id-card-status">
                    <i className="id-status-dot" />
                    <FaGlobe aria-hidden="true" />
                    Available
                  </span>
                </div>
                <div className="id-card-photo">
                  <Image
                    src="/images/emmy-badge.jpg"
                    alt="Emmanuel Oluwadare"
                    width={340}
                    height={396}
                    priority
                  />
                </div>
                <div className="id-card-name">Emmanuel Oluwadare</div>
                <div className="id-card-role">Full-Stack Developer + UX Designer</div>
                <div className="id-card-footer">
                  <span className="id-card-tag">DUBLIN, IE</span>
                  <span className="id-card-id">ID · 0001</span>
                </div>
              </div>

              <div className="id-card-face id-card-back">
                <div className="id-card-back-title">Quick facts</div>
                <ul className="id-card-back-list">
                  <li>15 yrs teaching → full-stack developer</li>
                  <li>Code Institute, Level 5 Diploma, 2026</li>
                  <li>1st Place, UK &amp; Ireland Hackathon 2024</li>
                  <li>Django · React · Next.js · TypeScript</li>
                </ul>

                <hr className="id-back-hr" />
                <p className="id-back-tagline">
                  Building and designing quality, usable products.
                </p>

                <div className="id-barcode" aria-hidden="true" />
                <div className="id-card-back-links">
                  <a href="https://github.com/Emmy-Dare274" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub aria-hidden="true" />
                  </a>
                  <a href="https://www.linkedin.com/in/emmanuel-o-oluwadare/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
