"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// Button that flips between light and dark mode.
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // The server doesn't know which theme the visitor last chose, only
  // the browser does (it's saved there).
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width: 38, height: 38 }} />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className="btn btn-outline-secondary"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
