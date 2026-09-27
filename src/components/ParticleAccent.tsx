"use client";

// Reusable ambient particle-field accent. Wraps the same WebGL square-point
// backdrop used behind the homepage badge (ParticleBackdrop) so any other
// section can drop in the identical moving-particle, mouse-reactive
// background. Client-only (WebGL can't render on the server) and skipped
// entirely under prefers-reduced-motion, same as the homepage usage.

import dynamic from "next/dynamic";
import { useReducedMotion } from "framer-motion";

const ParticleBackdrop = dynamic(
  () => import("@/components/homepage-hero/ParticleBackdrop"),
  { ssr: false }
);

export default function ParticleAccent() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return null;

  return <ParticleBackdrop />;
}
