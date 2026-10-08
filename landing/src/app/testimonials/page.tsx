import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import TestimonialsGrid from "@/components/TestimonialsGrid";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Stories from TechCity students across India on programs, mentors, and landing their first tech roles.",
};

const average =
  testimonials.reduce((sum, item) => sum + item.rating, 0) /
  testimonials.length;

const stats = [
  { value: average.toFixed(1), label: "Average rating" },
  { value: String(testimonials.length), label: "Student stories" },
  {
    value: String(new Set(testimonials.map((item) => item.city)).size),
    label: "Cities across India",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="flex min-h-full flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
          <div className="fade-up flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionHeading
                index="04"
                label="Testimonials"
                title="In their words."
                titleClassName="text-[2.35rem] sm:text-5xl"
              />
              <p className="mt-6 max-w-lg text-base leading-7 text-foreground/70">
                Students from campuses across India on the labs, mentors, and
                hiring briefs that took them from classroom to first role.
              </p>
            </div>

            <dl className="grid grid-cols-3 gap-px bg-foreground/10">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-background px-5 py-4 first:pl-0 sm:px-8">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
                    {stat.label}
                  </dt>
                  <dd className="mt-2 text-3xl tracking-tight text-foreground">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div
            className="fade-up mt-14"
            style={{ "--fade-delay": "120ms" } as React.CSSProperties}
          >
            <TestimonialsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
