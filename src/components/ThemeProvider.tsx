"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// Wraps the whole app so any component can read or change the
// current theme. attribute="data-bs-theme" tells next-themes to set
// that exact attribute on <html>, which is the same attribute
// Bootstrap 5's built-in dark mode looks for. One toggle switches
// both our custom colors and Bootstrap's own dark styling at once.
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-bs-theme"
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
