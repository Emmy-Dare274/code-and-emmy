"use client";

import { useState } from "react";
import Image from "next/image";

interface PhotoFrameProps {
  src: string;
  alt: string;
  size: number;
  initials: string;
}

// Shows the real photo once the file exists in public/images. Until
// then, or if the file is ever missing, it falls back to a soft
// gradient circle with initials instead of a broken image icon.
export default function PhotoFrame({ src, alt, size, initials }: PhotoFrameProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="photo-placeholder" style={{ width: size, height: size }}>
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className="hero-photo-img"
      priority
      onError={() => setFailed(true)}
    />
  );
}
