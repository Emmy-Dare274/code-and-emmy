import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Code & Emmy, Emmanuel Oluwadare, Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0b0b0d",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#FFB020", marginBottom: 20 }}>
          Code &amp; Emmy
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          Emmanuel Oluwadare
        </div>
        <div style={{ fontSize: 32, color: "#c8c8cf", marginTop: 20 }}>
          Full-Stack Developer &amp; UX Designer
        </div>
      </div>
    ),
    { ...size }
  );
}
