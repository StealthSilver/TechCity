import type { CSSProperties } from "react";
import type { Metadata } from "next";
import CtaLink from "@/components/CtaLink";
import { studentProducts } from "@/data/student";

export const metadata: Metadata = {
  title: "For students",
  description:
    "Lessons, practice, a playground, and careers for students in TechCity programs.",
};

export default function Students() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="fade-up max-w-3xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
            <span className="text-accent">00</span>
            <span className="mx-2 text-foreground/20">/</span>
            For students
          </p>
          <h1 className="mt-4 text-[2.35rem] font-normal leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[4.25rem]">
            <span className="block">Lessons, practice,</span>
            <span className="block">and work you can show.</span>
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-foreground/65 sm:text-lg sm:leading-8">
            Four tools for the programs your college already runs. Open a
            lesson, try it, and keep what a hiring team can ask about.
          </p>
        </div>

        <ul className="mt-14 border-t border-foreground/10 sm:mt-16">
          {studentProducts.map((product, index) => (
            <li
              key={product.href}
              className="fade-up grid items-end gap-6 border-b border-foreground/10 py-8 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-10 sm:py-10"
              style={{ "--fade-delay": `${index * 60}ms` } as CSSProperties}
            >
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                  <span className="text-accent">{product.index}</span>
                  <span className="mx-2 text-foreground/20">/</span>
                  {product.label}
                </p>
                <h2 className="mt-3 max-w-xl text-[1.7rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2rem]">
                  {product.title}
                </h2>
                <p className="mt-3 max-w-xl text-[15px] leading-7 text-foreground/65">
                  {product.line}
                </p>
              </div>
              <CtaLink href={product.href} className="self-start sm:self-end">
                Open {product.label}
              </CtaLink>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
