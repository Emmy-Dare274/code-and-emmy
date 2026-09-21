"use client";

import { motion } from "framer-motion";

interface SkillMeterProps {
  label: string;
  level: number; // 0-100, self-assessed proficiency
}

// A single animated proficiency bar. Fills from 0 to `level` once, the first
// time it scrolls into view, matching ScrollReveal's "plays once" behavior.
export default function SkillMeter({ label, level }: SkillMeterProps) {
  return (
    <div className="skill-meter">
      <div className="skill-meter-label">
        <span>{label}</span>
        <span className="skill-meter-value">{level}%</span>
      </div>
      <div className="skill-meter-track">
        <motion.div
          className="skill-meter-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
