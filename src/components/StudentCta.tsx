"use client";

import { useEffect, useState } from "react";
import CtaLink from "@/components/CtaLink";
import Grainient from "@/components/Grainient";
import { studentLogin } from "@/data/student";

/** Dark theme: near-black navies — only a hint of blue at the bright end. */
const DARK_COLORS = ["#02040a", "#040812", "#06102a", "#0a1a4a", "#122a72"];
/** Light theme: pale ice blues — barely tinted white through soft blue. */
const LIGHT_COLORS = ["#ffffff", "#f8fbff", "#eef5ff", "#dceaff", "#c7dcfa"];

function readIsLight() {
  if (typeof document === "undefined") return false;
  return document.documentElement.dataset.theme === "light";
}

export default function StudentCta() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const sync = () => setLight(readIsLight());
    sync();
    window.addEventListener("techcity-theme", sync);
    return () => window.removeEventListener("techcity-theme", sync);
  }, []);

  return (
    <section
      id="get-started"
      aria-labelledby="student-cta-heading"
      className="relative isolate min-h-[min(70svh,36rem)] overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Grainient
          key={light ? "light" : "dark"}
          colors={light ? LIGHT_COLORS : DARK_COLORS}
          angle={55}
          flow={0.8}
          silk={0.35}
          grainAmount={0.08}
          type="linear"
          bands={1}
          softness={1}
          scale={1}
          speed={1}
          grainSize={1.2}
          grainAnimated
          contrast={1}
          saturation={1}
          variation={0}
          interactive
          stir={1}
          clickSwirl
          intro
          lightMode={false}
        />
      </div>

      <div
        aria-hidden="true"
        className="student-cta-scrim pointer-events-none absolute inset-0 z-[1]"
      />

      <div className="pointer-events-none relative z-10 mx-auto flex min-h-[min(70svh,36rem)] max-w-7xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8 sm:py-24">
        <div className="fade-up flex max-w-xl flex-col items-center">
          <p
            className={`font-mono text-[11px] uppercase tracking-[0.18em] ${
              light ? "text-[#1e3a8a]/70" : "text-[#93c5fd]/80"
            }`}
          >
            TechCity
          </p>
          <h2
            id="student-cta-heading"
            className={`mt-3 text-[2.35rem] font-normal leading-[1.05] tracking-tight sm:text-[3.25rem] ${
              light ? "text-[#0a1f6e]" : "text-[#f7f9ff]"
            }`}
          >
            Get started on the platform.
          </h2>
          <p
            className={`mt-5 max-w-md text-[15px] leading-7 ${
              light ? "text-[#1e40af]/75" : "text-[#bfdbfe]/80"
            }`}
          >
            One account for Marg, Spardha, Riyaaz, Kaksha, and Setu — practice,
            assessments, and courses from campus.
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
