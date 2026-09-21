"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AboutPhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// A gentle, continuous vertical float, not a hover effect. The homepage
// hero photo's earlier "shaking" bug came from a hover-triggered transform
// fighting a CSS transition, so this loops on its own timer instead of
// reacting to the cursor, which avoids that entire class of bug.
export default function AboutPhoto({ src, alt, width, height }: AboutPhotoProps) {
  return (
    <motion.div
      animate={{ y: [0, -14, 0] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="about-photo"
        priority
      />
    </motion.div>
  );
}
