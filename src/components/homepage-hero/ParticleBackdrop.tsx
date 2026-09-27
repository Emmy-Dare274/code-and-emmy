"use client";

// A soft ambient particle field behind the badge, sitting between the
// background marquee (further back) and the badge/copy (in front). Plain
// square WebGL points, deliberately calm — a slow ambient drift plus a
// gentle tilt toward the pointer. Loaded client-only via next/dynamic from
// IntroHero, and skipped entirely when reduce-motion is on.

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Points as ThreePoints } from "three";

const PARTICLE_COUNT = 240;

// Generated once at module load, not during render — calling Math.random()
// inside a component body (even inside useMemo) trips the react-hooks
const positions = (() => {
  const arr = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    arr[i * 3] = (Math.random() - 0.5) * 12; // x
    arr[i * 3 + 1] = (Math.random() - 0.5) * 7; // y
    arr[i * 3 + 2] = (Math.random() - 0.5) * 6; // z
  }
  return arr;
})();

function Field() {
  const pointsRef = useRef<ThreePoints>(null);

  useFrame((state) => {
    if (!pointsRef.current) return;
    // Slow ambient drift, plus a tilt toward the pointer position — kept
    // moderate on purpose, this should read as calm, not busy.
    pointsRef.current.rotation.y += 0.0006 + state.pointer.x * 0.0015;
    pointsRef.current.rotation.x =
      state.pointer.y * 0.12 + Math.sin(state.clock.elapsedTime * 0.15) * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#7c9bff"
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export default function ParticleBackdrop() {
  return (
    <div className="particle-backdrop">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <Field />
      </Canvas>
    </div>
  );
}
