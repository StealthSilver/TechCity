"use client";

import { useCallback, useEffect, useRef, type PointerEvent } from "react";
import AsciiCity from "@/components/AsciiCity";
import CtaLink from "@/components/CtaLink";
import ThemeToggle from "@/components/ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#partners", label: "Partners" },
  { href: "#contact", label: "Contact" },
];

const FOLLOW_X = 18;
const FOLLOW_Y = 14;
const FOLLOW_EASE = 0.07;

function FooterHands() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const reducedRef = useRef(false);
  const posRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

  const tick = useCallback(() => {
    const pos = posRef.current;
    pos.x += (pos.tx - pos.x) * FOLLOW_EASE;
    pos.y += (pos.ty - pos.y) * FOLLOW_EASE;

    const left = leftRef.current;
    const right = rightRef.current;
    const transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
    if (left) left.style.transform = transform;
    if (right) right.style.transform = transform;

    if (Math.abs(pos.tx - pos.x) > 0.04 || Math.abs(pos.ty - pos.y) > 0.04) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, []);

  const startTick = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(tick);
  }, [tick]);

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedRef.current) return;
    const scene = sceneRef.current;
    if (!scene) return;
    const rect = scene.getBoundingClientRect();
    if (rect.width < 1 || rect.height < 1) return;
    const nx = (event.clientX - rect.left) / rect.width - 0.5;
    const ny = (event.clientY - rect.top) / rect.height - 0.5;
    posRef.current.tx = nx * FOLLOW_X * 2;
    posRef.current.ty = ny * FOLLOW_Y * 2;
    startTick();
  };

  const onPointerLeave = () => {
    posRef.current.tx = 0;
    posRef.current.ty = 0;
    startTick();
  };

  useEffect(() => {
    reducedRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const sync = () => {
      scene.style.setProperty("--scene-h", `${scene.clientHeight}px`);
    };
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(scene);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      ref={sceneRef}
      className="relative mt-8 h-[min(72svh,44rem)] w-full overflow-hidden sm:mt-12 lg:mt-0 lg:h-[min(86svh,52rem)]"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="pointer-events-none absolute inset-0 z-20 flex">
        <div
          ref={leftRef}
          className="relative h-full w-1/2 will-change-transform"
        >
          <div className="absolute bottom-0 left-0 h-[min(var(--scene-h,72svh),calc(50vw*3/2))] w-[min(50vw,calc(var(--scene-h,72svh)*2/3))]">
            <AsciiCity
              src="/ascii-hand-left.png"
              cropX={0.5}
              cropY={1}
              fit="contain"
              knockout
              className="h-full w-full cursor-pointer pointer-events-auto"
            />
          </div>
        </div>
        <div
          ref={rightRef}
          className="relative h-full w-1/2 will-change-transform"
        >
          <div className="absolute bottom-0 right-0 h-[min(var(--scene-h,72svh),calc(50vw*3/2))] w-[min(50vw,calc(var(--scene-h,72svh)*2/3))]">
            <AsciiCity
              src="/ascii-hand-right.png"
              cropX={0.5}
              cropY={1}
              fit="contain"
              knockout
              className="h-full w-full cursor-pointer pointer-events-auto"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-30">
        <nav
          aria-label="Footer"
          className="pointer-events-auto absolute left-1/2 top-[58%] -translate-x-1/2 -translate-y-1/2"
        >
          <ul className="flex flex-col items-center gap-3 lg:gap-4">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45 transition-colors hover:text-foreground lg:text-[14px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-5 py-6 sm:px-8 lg:px-10 lg:py-8">
          <div className="pointer-events-auto flex flex-col items-start gap-4">
            <ThemeToggle />
            <CtaLink href="mailto:hello@techcity.in" size="md">
              Get in touch
            </CtaLink>
          </div>
          <div className="pointer-events-auto flex flex-col items-end gap-2 text-right sm:gap-3">
            <a
              href="mailto:hello@techcity.in"
              className="w-fit text-[13px] text-foreground/55 underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground lg:text-[16px]"
            >
              hello@techcity.in
            </a>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/40 lg:text-[14px]">
              India
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/35">
              © 2026 TechCity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-24">
      <FooterHands />
    </footer>
  );
}
