"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import CtaLink from "@/components/CtaLink";

const links = [
  {
    href: "#about",
    label: "About",
    children: [
      { href: "#about", label: "Our story" },
      { href: "#faculty", label: "Faculty" },
      { href: "#programs", label: "Programs" },
    ],
  },
  {
    href: "#projects",
    label: "Projects",
    children: [
      { href: "#projects-ongoing", label: "Ongoing" },
      { href: "#projects-completed", label: "Completed" },
    ],
  },
  {
    href: "#partners",
    label: "Partners",
    children: [
      { href: "#partners-college", label: "College" },
      { href: "#partners-industry", label: "Industry" },
    ],
  },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

function Chevron({ open, className = "" }: { open?: boolean; className?: string }) {
  return (
    <svg
      className={`size-2.5 transition-transform duration-200 ${open ? "rotate-180" : ""} ${className}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 4.5 6 8.5 10 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

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

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

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
    if (!open) setOpenSection(null);
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    setOpenSection(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:h-[4.25rem] sm:px-8">
        <a href="/" className="shrink-0" aria-label="TechCity">
          <Image
            src="/logo.png"
            alt="TechCity"
            width={945}
            height={921}
            className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            priority
            unoptimized
          />
        </a>

        <div className="flex min-w-0 items-center justify-end gap-6 lg:gap-8">
          <ul className="hidden items-center gap-7 lg:flex">
            {links.map((link) =>
              link.children ? (
                <li key={link.href} className="group/nav relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/55 transition-colors group-hover/nav:text-foreground group-focus-within/nav:text-foreground"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    {link.label}
                    <Chevron className="group-hover/nav:rotate-180 group-focus-within/nav:rotate-180" />
                  </button>
                  <div className="invisible absolute top-full left-0 min-w-52 translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover/nav:visible group-hover/nav:translate-y-0 group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:translate-y-0 group-focus-within/nav:opacity-100">
                    <ul
                      role="menu"
                      className="border border-foreground/10 bg-background/95 py-2 backdrop-blur-xl"
                    >
                      {link.children.map((child) => (
                        <li key={child.href} role="none">
                          <a
                            href={child.href}
                            role="menuitem"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between gap-3 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/55 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                          >
                            {child.label}
                            <ExternalArrow />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/55 transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ),
            )}
          </ul>

          <CtaLink href="#partners" className="hidden lg:inline-flex">
            Partner with us
          </CtaLink>

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
        className={`overflow-hidden border-t border-foreground/10 bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) =>
            link.children ? (
              <li key={link.href}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                  aria-expanded={openSection === link.href}
                  onClick={() =>
                    setOpenSection((value) =>
                      value === link.href ? null : link.href,
                    )
                  }
                >
                  {link.label}
                  <Chevron open={openSection === link.href} />
                </button>
                <ul
                  className={`overflow-hidden transition-[max-height,opacity] duration-200 ${
                    openSection === link.href
                      ? "max-h-48 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <a
                        href={child.href}
                        onClick={closeMenu}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-3 px-6 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/50 transition-colors hover:text-foreground"
                      >
                        {child.label}
                        <ExternalArrow />
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 font-mono text-[12px] uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:bg-foreground/[0.04] hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ),
          )}
          <li className="pt-2">
            <CtaLink
              href="#partners"
              onClick={closeMenu}
              className="flex w-full"
            >
              Partner with us
            </CtaLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
