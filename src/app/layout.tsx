import type { Metadata } from "next";
import "./globals.scss";
import { ThemeProvider } from "@/components/ThemeProvider";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Code & Emmy | Full-Stack Software Developer",
  description:
    "Portfolio of Emmanuel Oluwadare (Emmy), a full-stack software developer working with React, TypeScript, Next.js, Python, and Django.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning is required by next-themes: the real
    // theme is only known once JavaScript runs in the browser, so the
    // very first render briefly mismatches the server's guess. This
    // tells React that specific mismatch is expected, not a bug.
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
