"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CtaLink from "@/components/CtaLink";
import { studentLogin, studentProducts } from "@/data/student";

function ExternalArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`size-2.5 shrink-0 ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function PartnersLink({
  onClick,
  className = "",
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <a
      href="/"
      onClick={onClick}
      className={`group inline-flex h-8 shrink-0 items-center justify-center border border-foreground bg-transparent px-4 text-[13px] font-medium text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background ${className}`}
    >
      For partners
      <span className="inline-flex max-w-0 items-center overflow-hidden transition-all duration-300 ease-power4-in-out group-hover:ml-1.5 group-hover:max-w-4">
        <ExternalArrow className="-translate-x-1 translate-y-1 transition-transform duration-300 ease-power4-in-out group-hover:translate-x-0 group-hover:translate-y-0" />
      </span>
    </a>
  );
}

export default function StudentNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const previous = root.dataset.theme;
    root.dataset.theme = "light";
    return () => {
      root.dataset.theme = previous === "light" ? "light" : "dark";
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-foreground/10 transition-colors duration-300 ${
        scrolled || open ? "bg-background/85 backdrop-blur-xl" : "bg-background"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:h-[4.25rem] sm:px-8">
        <a href="/students" className="shrink-0" aria-label="TechCity">
          <Image
            src="/logo.png"
            alt="TechCity"
            width={945}
            height={921}
            className="brand-mark h-11 w-11 object-contain sm:h-12 sm:w-12"
            priority
            unoptimized
          />
        </a>

        <div className="flex min-w-0 items-center justify-end gap-6 lg:gap-8">
          <ul className="hidden items-center gap-7 lg:flex">
            {studentProducts.map((product) => {
              const active = pathname === product.href;
              return (
                <li key={product.href}>
                  <a
                    href={product.href}
                    aria-current={active ? "page" : undefined}
                    className={`font-mono text-[12px] uppercase tracking-[0.18em] transition-colors hover:text-foreground ${
                      active ? "text-foreground" : "text-foreground/55"
                    }`}
                  >
                    {product.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-5 lg:flex">
            <PartnersLink />
            <CtaLink href={studentLogin.href}>Log in</CtaLink>
          </div>

          <button
            type="button"
            className="relative grid h-10 w-10 place-items-center rounded-full border border-foreground/10 text-foreground lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-200 ${
                open ? "rotate-45" : "-translate-y-[3.5px]"
              }`}
            />
            <span
              className={`absolute h-px w-4 bg-current transition-transform duration-200 ${
                open ? "-rotate-45" : "translate-y-[3.5px]"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`border-t border-foreground/10 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open
            ? "max-h-[calc(100svh-4.25rem)] overflow-y-auto opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {studentProducts.map((product) => {
            const active = pathname === product.href;
            return (
              <li key={product.href}>
                <a
                  href={product.href}
                  aria-current={active ? "page" : undefined}
                  className={`block rounded-lg px-3 py-3 font-mono text-[12px] uppercase tracking-[0.18em] transition-colors hover:bg-foreground/[0.04] hover:text-foreground ${
                    active ? "text-foreground" : "text-foreground/70"
                  }`}
                >
                  {product.label}
                </a>
              </li>
            );
          })}
          <li className="flex flex-col gap-4 pt-2">
            <PartnersLink className="w-full" />
            <CtaLink href={studentLogin.href} className="flex w-full">
              Log in
            </CtaLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
