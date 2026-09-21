import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PersonJsonLd from "@/components/PersonJsonLd";
import "./globals.scss";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.codeandemmy.dev";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Code & Emmy | Emmanuel Oluwadare, Full-Stack Developer",
    template: "%s | Code & Emmy",
  },
  description:
    "Emmanuel Oluwadare is a full-stack software developer and UX designer based in Dublin, available to companies and freelance clients worldwide. Django, React and Next.js, shipped end to end.",
  keywords: [
    "Emmanuel Oluwadare",
    "full-stack developer Dublin",
    "Django developer",
    "React developer",
    "Next.js developer",
    "UX designer",
    "Code Institute graduate",
  ],
  authors: [{ name: "Emmanuel Oluwadare" }],
  creator: "Emmanuel Oluwadare",
  openGraph: {
    type: "website",
    url: baseUrl,
    siteName: "Code & Emmy",
    title: "Code & Emmy | Emmanuel Oluwadare, Full-Stack Developer",
    description:
      "Full-stack developer and UX-minded designer available to companies and freelance clients worldwide. Django and React on the backend and frontend, real products shipped end to end.",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Code & Emmy | Emmanuel Oluwadare, Full-Stack Developer",
    description:
      "Full-stack developer and UX-minded designer available to companies and freelance clients worldwide.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body id="top">
        <PersonJsonLd />
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
