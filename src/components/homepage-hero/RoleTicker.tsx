"use client";

// Cycles through role labels every ~2.6s with a cross-fade. Stops cycling
// (and just shows the first role) when the OS-level reduce-motion setting
// is on, same pattern as IdBadge and BackgroundMarquee.

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const roles = [
  "Full-Stack Developer",
  "UX-Minded Designer",
  "Agile Scrum Master",
  "Former Educator, 15 Years",
];

export default function RoleTicker() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="role-ticker">
      <span className="role-ticker-prefix">I&apos;m a</span>
      <span className="role-ticker-word">
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
