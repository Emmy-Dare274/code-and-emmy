"use client";

import { useState } from "react";
import Image from "next/image";

interface PhotoFrameProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  initials: string;
  shape?: "circle" | "rect";
}

// Shows the real photo once the file exists in public/images. Until
// then, or if the file is ever missing or unreadable, it falls back
// to a soft gradient block with initials instead of a broken image
// icon. shape controls whether the frame (and the fallback) renders
// as a circle or a rounded rectangle, so this one component can
// serve both a portrait-style hero photo and a circular avatar
// elsewhere later, like an About page.
export default function PhotoFrame({
  src,
  alt,
  width,
  height,
  initials,
  shape = "rect",
}: PhotoFrameProps) {
  const [failed, setFailed] = useState(false);
  const shapeClass = shape === "circle" ? "photo-frame-circle" : "photo-frame-rect";

  if (failed) {
    return (
      <div
        className={`photo-placeholder ${shapeClass}`}
        style={{ width, height }}
      >
        {initials}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`hero-photo-img ${shapeClass}`}
      priority
      onError={() => setFailed(true)}
    />
  );
}
