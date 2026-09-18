import { ImageResponse } from "next/og";

// Route-level favicon, generated at build time — no binary image file needed.
// Next.js automatically serves this at /icon and wires up the <link> tag itself.
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0b0d",
          borderRadius: 7,
          color: "#ffffff",
          fontSize: 14,
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        C&E
      </div>
    ),
    { ...size }
  );
}
