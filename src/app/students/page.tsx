import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import CollegeLogoTicker from "@/components/CollegeLogoTicker";
import CtaLink from "@/components/CtaLink";
import StudentHero from "@/components/StudentHero";
import { studentProducts } from "@/data/student";

export const metadata: Metadata = {
  title: "For students",
  description:
    "Marg, Spardha, Riyaaz, Kaksha, and Setu — TechCity products for students: roadmaps, assessments, coding practice, courses, and LMS.",
};

export default function Students() {
  return (
    <main className="flex-1">
      <StudentHero />

      <div className="-mt-6 pb-8 pt-2 sm:-mt-8 sm:pb-10 sm:pt-3">
        <CollegeLogoTicker />
      </div>

      <section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24 lg:pb-28"
      >
        <div className="fade-up flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
              <span className="text-accent">01</span>
              <span className="mx-2 text-foreground/20">/</span>
              About
            </p>
            <h2 className="mt-3 text-[1.85rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2.35rem]">
              Built inside colleges, for the work students actually do.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-foreground/65">
              TechCity runs with your campus — roadmaps, assessments, practice,
              courses, and LMS in one stack — so you leave ready to join a team,
              not just pass a paper.
            </p>
          </div>
          <CtaLink href="/about" className="fade-up self-start lg:self-end">
            Read the story
          </CtaLink>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto max-w-7xl scroll-mt-24 border-t border-foreground/10 px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
      >
        <div className="fade-up max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
            <span className="text-accent">02</span>
            <span className="mx-2 text-foreground/20">/</span>
            Products
          </p>
          <h2 className="mt-3 text-[1.85rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2.35rem]">
            Built for how students actually learn.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-foreground/65">
            Each product opens in its own app. Pick one, practice, and keep work
            a hiring team can ask about.
          </p>
        </div>

        <ul className="mt-12 border-t border-foreground/10 sm:mt-14">
          {studentProducts.map((product, index) => (
            <li
              key={product.slug}
              className="fade-up group border-b border-foreground/10"
              style={
                {
                  "--fade-delay": `${80 + index * 70}ms`,
                  "--product-accent": product.accent,
                } as CSSProperties
              }
            >
              {(() => {
                const className =
                  "grid gap-6 py-8 transition-colors sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-10 sm:py-10";
                const body = (
                  <>
                    <div className="min-w-0">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                        <span style={{ color: product.accent }}>
                          {product.index}
                        </span>
                        <span className="mx-2 text-foreground/20">/</span>
                        {product.category}
                      </p>
                      <h3 className="mt-3 text-[1.7rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2rem]">
                        {product.name}
                      </h3>
                      <p className="mt-2 text-[15px] font-medium leading-6 text-foreground/75">
                        {product.title}
                      </p>
                      <p className="mt-2 max-w-xl text-[15px] leading-7 text-foreground/60">
                        {product.line}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/50 transition-colors group-hover:text-foreground sm:self-end">
                      {product.external ? `Open ${product.name}` : "Coming soon"}
                      {product.external ? (
                        <svg
                          className="size-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
                      ) : null}
                    </span>
                  </>
                );

                return product.external ? (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {body}
                  </a>
                ) : (
                  <Link href={product.href} className={className}>
                    {body}
                  </Link>
                );
              })()}
              <div
                aria-hidden="true"
                className="h-0.5 w-0 bg-[var(--product-accent)] transition-[width] duration-500 ease-power4-in-out group-hover:w-full"
              />
            </li>
          ))}
        </ul>
      </section>

      <section
        id="showcase"
        className="scroll-mt-24 border-t border-foreground/10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-20">
          <div className="fade-up max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
              <span className="text-accent">03</span>
              <span className="mx-2 text-foreground/20">/</span>
              Showcase
            </p>
            <h2 className="mt-3 text-[1.7rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2rem]">
              Real projects from real campuses.
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-foreground/65">
              See upcoming, ongoing, and completed work students ship with
              TechCity.
            </p>
          </div>
          <CtaLink
            href="/students/projects"
            className="fade-up self-start sm:self-end"
          >
            View showcase
          </CtaLink>
        </div>
      </section>

      <section
        id="careers"
        className="scroll-mt-24 border-t border-foreground/10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-20">
          <div className="fade-up max-w-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
              <span className="text-accent">04</span>
              <span className="mx-2 text-foreground/20">/</span>
              Careers
            </p>
            <h2 className="mt-3 text-[1.7rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2rem]">
              Internships and openings, in one place.
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-foreground/65">
              Browse roles and campus programs shared through TechCity partners
              — and apply when you are ready.
            </p>
          </div>
          <CtaLink
            href="/students/careers"
            className="fade-up self-start sm:self-end"
          >
            View careers
          </CtaLink>
        </div>
      </section>
    </main>
  );
}
