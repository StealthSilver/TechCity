import CtaLink from "@/components/CtaLink";
import { ShowcaseFigure } from "@/components/StudentFigures";

const lanes = [
  { label: "Upcoming", line: "Terms about to open on campus" },
  { label: "Ongoing", line: "Labs running in the timetable now" },
  { label: "Completed", line: "Work a hiring team can open" },
];

export default function StudentShowcase() {
  return (
    <section
      id="showcase"
      className="scroll-mt-24 border-t border-foreground/10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="fade-up order-2 lg:order-1">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
            <span className="text-accent">03</span>
            <span className="mx-2 text-foreground/20">/</span>
            Showcase
          </p>
          <h2 className="mt-3 text-[1.85rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2.35rem]">
            Real projects from real campuses.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-foreground/65">
            Browse upcoming, ongoing, and completed work students ship with
            TechCity: labs, tracks, and reviews kept on campus, not buried in a
            slide deck.
          </p>

          <ul className="mt-8 border-t border-foreground/10">
            {lanes.map((lane) => (
              <li
                key={lane.label}
                className="grid gap-1 border-b border-foreground/10 py-3.5 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  {lane.label}
                </span>
                <span className="text-[14px] leading-6 text-foreground/60">
                  {lane.line}
                </span>
              </li>
            ))}
          </ul>

          <CtaLink href="/students/projects" className="mt-8 self-start">
            View showcase
          </CtaLink>
        </div>

        <ShowcaseFigure className="fade-up order-1 max-w-lg justify-self-center lg:order-2 lg:max-w-none lg:justify-self-end" />
      </div>
    </section>
  );
}
