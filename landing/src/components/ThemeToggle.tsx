"use client";

import { useEffect, useState } from "react";
import { applyTheme, getTheme, setTheme, type Theme } from "@/lib/theme";

export default function ThemeToggle() {
  const [theme, setThemeState] = useState<Theme | null>(null);

  useEffect(() => {
    applyTheme(getTheme());
    const sync = () => setThemeState(getTheme());
    sync();
    window.addEventListener("themechange", sync);
    return () => window.removeEventListener("themechange", sync);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em]"
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        className={`transition-colors ${
          theme === "dark" ? "text-foreground" : "text-foreground/35 hover:text-foreground/70"
        }`}
        aria-pressed={theme === "dark"}
        onClick={() => setTheme("dark")}
      >
        Dark
      </button>
      <span className="text-foreground/20">/</span>
      <button
        type="button"
        className={`transition-colors ${
          theme === "light" ? "text-foreground" : "text-foreground/35 hover:text-foreground/70"
        }`}
        aria-pressed={theme === "light"}
        onClick={() => setTheme("light")}
      >
        Light
      </button>
    </div>
  );
}
