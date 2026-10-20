"use client";

import { useEffect, useState } from "react";
import CtaLink from "@/components/CtaLink";
import GradientASCII from "@/components/GradientASCII";
import { studentLogin } from "@/data/student";

/** Dark theme — leave unchanged. */
const DARK_COLORS = ["#0a1f6e", "#1e4fd8", "#3b6ff0", "#6b9aff"];

/** Light theme — deeper blues so the ASCII reads on white. */
const LIGHT_COLORS = ["#0b2a8a", "#1d4ed8", "#2563eb", "#3b82f6"];

function readIsLight() {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.theme === "light";
}

export default function StudentHero() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const sync = () => setLight(readIsLight());
    sync();
    window.addEventListener("techcity-theme", sync);
    return () => window.removeEventListener("techcity-theme", sync);
  }, []);

  return (
    <section className="student-hero relative isolate min-h-[min(92svh,52rem)] overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <GradientASCII
          key={light ? "light" : "dark"}
          colors={light ? LIGHT_COLORS : DARK_COLORS}
          shape="horizon"
          characters=" =+xX0S8#@"
          cellSize={18}
          density={0.8}
          glyphOpacity={light ? 0.95 : 0.85}
          glow={light ? 0.12 : 0.2}
          depthOfField={0}
          flicker={0.2}
          softness={0.5}
          scale={1}
          flow={0.5}
          speed={1}
          gradientOpacity={light ? 1 : 0.9}
          grain={light ? 0.04 : 0.08}
          variation={0}
          mouseInteraction
          scrambleRadius={0.1}
          clickEffect="wave"
          intro
          lightMode={light}
        />
      </div>

      <div
        aria-hidden="true"
        className="student-hero-scrim pointer-events-none absolute inset-0 z-[1]"
      />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[min(92svh,52rem)] max-w-7xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="fade-up flex max-w-2xl flex-col items-center">
          <h1 className="text-[2.75rem] font-normal leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-[4.75rem]">
            Learn. Practice. Ship.
          </h1>
          <p className="mt-5 max-w-sm text-[14px] leading-6 text-foreground/65 sm:text-[15px] sm:leading-7">
            Practice, assessments, and courses that help campus students get
            placed.
          </p>
          <div className="pointer-events-auto mt-10">
            <CtaLink
              href={studentLogin.href}
              external={studentLogin.external}
              size="lg"
            >
              {studentLogin.label}
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
