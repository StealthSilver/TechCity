"use client";

import { useCallback, useEffect, useRef, type PointerEvent } from "react";
import AsciiCity from "@/components/AsciiCity";
import CtaLink from "@/components/CtaLink";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
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

  return (
    <div
      ref={sceneRef}
      className="relative mt-8 h-[min(90svh,56rem)] w-full overflow-hidden sm:mt-12 lg:mt-0 lg:h-[min(104svh,64rem)]"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 top-[min(21.6svh,13.2rem)] z-20 flex justify-between lg:top-[min(25.8svh,15.6rem)]">
        <div
          ref={leftRef}
          className="relative h-full w-[38%] will-change-transform"
        >
          <AsciiCity
            src="/ascii-hand-left.png"
            cropX={0}
            cropY={1}
            fit="cover"
            knockout
            className="h-full w-full cursor-pointer pointer-events-auto"
          />
        </div>
        <div
          ref={rightRef}
          className="relative h-full w-[38%] will-change-transform"
        >
          <AsciiCity
            src="/ascii-hand-right.png"
            cropX={1}
            cropY={1}
            fit="cover"
            knockout
            className="h-full w-full cursor-pointer pointer-events-auto"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-30">
        <nav
          aria-label="Footer"
          className="pointer-events-auto absolute left-1/2 top-[min(36.5svh,22.4rem)] -translate-x-1/2 -translate-y-1/2 lg:top-[min(42.6svh,25.9rem)]"
        >
          <ul className="flex flex-col items-center gap-3 lg:gap-4">
            {nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/45 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute inset-x-0 bottom-0">
          <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-5 py-6 sm:px-8 lg:py-8">
            <div className="pointer-events-auto flex flex-col items-start gap-3">
              <CtaLink href="/partners">
                Partner with us
              </CtaLink>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href="/privacy-policy"
                  className="font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/40 transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-and-conditions"
                  className="font-mono text-[9px] uppercase tracking-[0.16em] text-foreground/40 transition-colors hover:text-foreground"
                >
                  Terms and Conditions
                </a>
              </div>
            </div>
            <div className="pointer-events-auto flex flex-col items-end gap-2 text-right sm:gap-3">
              <p className="max-w-[16rem] text-[11px] leading-5 text-foreground/55">
                TechCity Hub, Level 4, Cyber City 400001
              </p>
              <a
                href="mailto:hello@techcityskills.com"
                className="w-fit text-[11px] text-foreground/55 underline decoration-foreground/25 underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
              >
                hello@techcityskills.com
              </a>
              <a
                href="tel:+18001234567"
                className="w-fit text-[11px] text-foreground/55 transition-colors hover:text-foreground"
              >
                +1 (800) 123-4567
              </a>
            </div>
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
