"use client";

// Giant low-opacity words drifting behind the badge, plus a slow parallax
// drift tied to scroll position. Purely decorative (aria-hidden). only the scroll-linked parallax uses Framer Motion.

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const words = ["DEVELOPER", "DESIGNER", "PROBLEM-SOLVER", "EDUCATOR", "BUILDER"];

export default function BackgroundMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 140]);

  return (
    <div className="bg-marquee-wrap" ref={ref} aria-hidden="true">
      <motion.div className="bg-marquee-layer" style={{ y }}>
        <div className={`bg-marquee-track${reduceMotion ? " bg-marquee-static" : ""}`}>
          {[...words, ...words].map((word, i) => (
            <span key={i}>{word}</span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
