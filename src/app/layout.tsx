import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.scss";
import ThemeProvider from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// Heading font — exposed as the --font-heading CSS variable in globals.scss
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Body font — exposed as the --font-body CSS variable in globals.scss
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code & Emmy | Emmanuel Oluwadare — Full-Stack Developer",
  description:
    "Emmanuel Oluwadare is a full-stack software developer and UX/UI-minded engineer based in Dublin, building sleek, market-ready web applications with React, TypeScript, Next.js and Django.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body id="top">
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
