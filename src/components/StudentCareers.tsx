import CtaLink from "@/components/CtaLink";
import { CareersFigure } from "@/components/StudentFigures";

const tracks = [
  { label: "Internships", line: "Roles for the term or the summer" },
  { label: "Campus programs", line: "Partner tracks that sit beside your labs" },
  { label: "Openings", line: "Full-time asks from hiring partners" },
];

export default function StudentCareers() {
  return (
    <section
      id="careers"
      className="scroll-mt-24 border-t border-foreground/10"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <CareersFigure className="fade-up max-w-lg justify-self-center lg:max-w-none lg:justify-self-start" />

        <div className="fade-up">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/45">
            <span className="text-accent">04</span>
            <span className="mx-2 text-foreground/20">/</span>
            Careers
          </p>
          <h2 className="mt-3 text-[1.85rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-[2.35rem]">
            Internships and openings, in one place.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-foreground/65">
            Browse roles and campus programs shared through TechCity partners.
            Apply when your lab work is ready to show: one place for
            internships, partner tracks, and openings.
          </p>

          <ul className="mt-8 border-t border-foreground/10">
            {tracks.map((track) => (
              <li
                key={track.label}
                className="grid gap-1 border-b border-foreground/10 py-3.5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                  {track.label}
                </span>
                <span className="text-[14px] leading-6 text-foreground/60">
                  {track.line}
                </span>
              </li>
            ))}
          </ul>

          <CtaLink href="/students/careers" className="mt-8 self-start">
            View careers
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
