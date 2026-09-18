import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.scss";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";

// Space Grotesk for headings and the brand mark: it has the bold,
// slightly geometric character that gives a portfolio site a
// designed feel instead of looking like default system type.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-heading",
});

// Inter for body copy: highly legible at small sizes, calm and
// unobtrusive so it doesn't compete with the display type above.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Code & Emmy | Full-Stack Software Developer",
  description:
    "Portfolio of Emmanuel Oluwadare (Emmy), a full-stack software developer working with React, TypeScript, Next.js, and Django.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
