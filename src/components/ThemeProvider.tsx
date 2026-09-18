"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// Wraps next-themes so Bootstrap's dark-mode CSS (the data-bs-theme
// attribute) is driven by the same toggle as everything else.
// enableSystem respects the visitor's OS preference on first load.
export default function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute="data-bs-theme" defaultTheme="light" enableSystem>
      {children}
    </NextThemesProvider>
  );
}
