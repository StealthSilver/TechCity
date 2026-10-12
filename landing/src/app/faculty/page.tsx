import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { FacultyInsights, FacultySubjects } from "@/components/ProgramInsights";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SectionHeading from "@/components/SectionHeading";
import { directors } from "@/data/directors";

export const metadata: Metadata = {
  title: "Faculty",
  description:
    "Deepak Tripathi and Gunjan Soam, directors of TechCity Skills, on technology leadership, academic design, and how the programs run inside a college.",
};

const marks = [
  { value: "2", label: "Directors" },
  { value: "15+", label: "Years of leadership" },
  { value: "10K+", label: "People mentored" },
  { value: "200+", label: "Hiring and tech partners" },
];

export default function FacultyPage() {
  return (
    <div className="flex min-h-full flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
          <div className="fade-up flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionHeading
                index="02"
                label="Faculty"
                title="The directors who run TechCity Skills."
                titleClassName="text-[2.35rem] sm:text-5xl"
              />
              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/70">
                One sets what is taught. The other holds the academic and
                operating system that makes a program work on a campus. Both
                are co-founders.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-px bg-foreground/10 sm:grid-cols-4 lg:max-w-xl">
              {marks.map((mark) => (
                <li key={mark.label} className="bg-background px-4 py-4 sm:px-5">
                  <p className="text-3xl tracking-tight text-foreground">
                    {mark.value}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase leading-4 tracking-[0.14em] text-foreground/40">
                    {mark.label}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-foreground/10">
          <div className="mx-auto grid max-w-7xl gap-px bg-foreground/10 lg:grid-cols-2">
            {directors.map((director, index) => (
              <article
                key={director.name}
                className="fade-up bg-background px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]"
                style={{ "--fade-delay": `${index * 80}ms` } as CSSProperties}
              >
                <div className="flex items-start gap-5">
                  <img
                    src={director.image}
                    alt={director.imageAlt}
                    width={112}
                    height={112}
                    className="size-24 shrink-0 object-cover sm:size-28"
                  />
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
                      <span className="text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="mx-2 text-foreground/20">/</span>
                      {director.kicker}
                    </p>
                    <h2 className="mt-3 text-[1.65rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[1.85rem]">
                      {director.name}
                    </h2>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-secondary">
                      {director.role}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {director.focus.map((item) => (
                        <li
                          key={item}
                          className="border border-foreground/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/65"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/40">
                  {director.years}
                </p>
                <p className="mt-4 max-w-md text-[15px] leading-7 text-foreground/70">
                  {director.summary}
                </p>
                <p className="mt-4 max-w-md text-[15px] leading-7 text-foreground/65">
                  {director.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-foreground/10">
          <div className="fade-up mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
            <SectionHeading
              index="03"
              label="Subjects"
              title="Where the faculty teach."
            />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-foreground/65">
              Of the 220 faculty in the programs now, the largest groups teach
              software and artificial intelligence. Data, cloud, and security
              make up the rest.
            </p>
            <div className="mt-12">
              <FacultySubjects />
            </div>
          </div>
        </section>

        <FacultyInsights index="04" />
      </main>
      <Footer />
    </div>
  );
}
