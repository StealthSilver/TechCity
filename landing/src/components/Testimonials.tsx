import SectionHeading from "@/components/SectionHeading";

const quotes = [
  {
    quote:
      "Faculty who have shipped product changed how our students think about work — not just how they write exams.",
    name: "Dean of Engineering",
    role: "Partner university",
  },
  {
    quote:
      "The cohorts arrive interview-ready. We spend less time teaching tools and more time seeing how they solve.",
    name: "Head of University Hiring",
    role: "Industry partner",
  },
  {
    quote:
      "The path from classroom to first role was finally a path. Labs, mentors, and hiring briefs in the same semester.",
    name: "Program graduate",
    role: "2025 cohort",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 border-t border-foreground/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
        <SectionHeading
          index="04"
          label="Testimonials"
          title="What partners and students say."
          titleClassName="text-[1.85rem] sm:text-[2.25rem]"
        />

        <ul className="mt-12 grid gap-px bg-foreground/10 lg:grid-cols-3">
          {quotes.map((item) => (
            <li
              key={item.name}
              className="flex flex-col bg-background px-0 py-8 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:pr-0"
            >
              <span
                className="font-mono text-2xl leading-none text-accent-secondary"
                aria-hidden="true"
              >
                ”
              </span>
              <blockquote className="mt-5 flex-1 text-[1.05rem] leading-8 text-foreground/85">
                {item.quote}
              </blockquote>
              <footer className="mt-8">
                <p className="text-sm tracking-tight text-foreground">
                  {item.name}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-foreground/40">
                  {item.role}
                </p>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
