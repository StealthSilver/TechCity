import CtaLink from "@/components/CtaLink";
import SectionHeading from "@/components/SectionHeading";
import { directors } from "@/data/directors";

const beats = [
  {
    index: "01",
    title: "A finished course is not finished work.",
    body: "Labs are built to be kept: work a hiring team can open, run, and ask about.",
  },
  {
    index: "02",
    title: "The tools move faster than the semester.",
    body: "Generative AI, cloud, and full-stack stay current, and faculty teach it with the trainers.",
  },
  {
    index: "03",
    title: "Hiring still starts with a training month.",
    body: "Every program is mapped to a skill a team can check in the first week.",
  },
];

const figures = [
  { value: "15+", label: "Years of leadership" },
  { value: "100%", label: "Programs built on live projects" },
  { value: "200+", label: "Hiring and tech partners" },
  { value: "10K+", label: "Students mentored" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <SectionHeading
              index="01"
              label="About"
              title="Colleges were teaching the subject. Companies were hiring for the work."
              titleClassName="max-w-xl text-[2rem] sm:text-[2.45rem]"
            />
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-foreground/65">
              TechCity Skills was founded to close that distance. We work
              inside colleges, with their faculty, so a student leaves able to
              join a team.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaLink href="/about">Read the story</CtaLink>
              <CtaLink href="/faculty">Meet the directors</CtaLink>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-px bg-foreground/10">
            {figures.map((item) => (
              <li key={item.label} className="bg-background px-4 py-5 sm:px-5">
                <p className="text-3xl tracking-tight text-foreground sm:text-4xl">
                  {item.value}
                </p>
                <p className="mt-2 max-w-[10rem] font-mono text-[10px] uppercase leading-4 tracking-[0.14em] text-foreground/40">
                  {item.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <ol className="mt-14 grid gap-px bg-foreground/10 lg:grid-cols-3">
          {beats.map((beat) => (
            <li key={beat.index} className="bg-background py-6 lg:px-6 lg:first:pl-0 lg:last:pr-0">
              <p className="font-mono text-[11px] tracking-[0.16em] text-accent">
                {beat.index}
              </p>
              <h3 className="mt-3 text-[1.15rem] font-normal leading-snug tracking-tight text-foreground">
                {beat.title}
              </h3>
              <p className="mt-2 max-w-sm text-[15px] leading-7 text-foreground/65">
                {beat.body}
              </p>
            </li>
          ))}
        </ol>

        <ul className="mt-14 grid gap-10 border-t border-foreground/10 pt-10 sm:grid-cols-2 sm:gap-8">
          {directors.map((director) => (
            <li key={director.name} className="flex items-start gap-4">
              <img
                src={director.image}
                alt={director.imageAlt}
                width={80}
                height={80}
                className="size-16 shrink-0 object-cover sm:size-20"
              />
              <div className="min-w-0">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {director.kicker}
                </p>
                <p className="mt-2 text-[1.15rem] tracking-tight text-foreground">
                  {director.name}
                </p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/40">
                  {director.role}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {director.focus.slice(0, 2).map((item) => (
                    <li
                      key={item}
                      className="border border-foreground/15 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground/60"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
