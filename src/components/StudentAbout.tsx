import CtaLink from "@/components/CtaLink";
import SlotNumber from "@/components/SlotNumber";

const figures = [
  { value: "30+", label: "Partner colleges" },
  { value: "50+", label: "Industry partners" },
  { value: "40+", label: "Faculty & trainers" },
  { value: "10K+", label: "Students mentored" },
];

export default function StudentAbout() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-foreground/10"
    >
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-20 sm:px-8 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28">
        <div className="fade-up flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
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
              TechCity runs with your campus: roadmaps, assessments, practice,
              courses, and LMS in one stack, so you leave ready to join a team,
              not just pass a paper.
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-7 text-foreground/65">
              The experience is lab-first: timed checks, daily coding, and
              projects a hiring team can open. The content is written with
              faculty and industry partners, then kept current as the stack
              moves, so what you practice is what the job asks for.
            </p>
          </div>
          <CtaLink href="/about" className="fade-up self-start lg:self-end">
            Read the story
          </CtaLink>
        </div>

        <ul className="fade-up mt-12 grid grid-cols-2 gap-px bg-foreground/10 sm:mt-14 md:grid-cols-4">
          {figures.map((item, index) => (
            <li
              key={item.label}
              className="bg-background px-4 py-6 sm:px-5 sm:py-7"
            >
              <p className="text-3xl leading-none tracking-tight text-foreground sm:text-4xl">
                <SlotNumber value={item.value} delay={index * 90} />
              </p>
              <p className="mt-2.5 max-w-[11rem] font-mono text-[10px] uppercase leading-4 tracking-[0.14em] text-foreground/40">
                {item.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
