import CtaLink from "@/components/CtaLink";
import SectionHeading from "@/components/SectionHeading";
import { programFamilies, programTotal } from "@/data/programs";

const benefit = [
  { label: "Classroom", last: false },
  { label: "Program", last: false },
  { label: "First role", last: true },
];

function BenefitMark() {
  return (
    <figure className="max-w-sm border border-foreground/10">
      <svg
        viewBox="0 0 360 88"
        className="block h-auto w-full text-foreground"
        aria-hidden="true"
      >
        <line
          x1="52"
          y1="32"
          x2="308"
          y2="32"
          stroke="currentColor"
          strokeOpacity="0.16"
        />
        <line
          x1="52"
          y1="32"
          x2="308"
          y2="32"
          stroke="var(--accent)"
          strokeWidth="1.5"
        />
        {benefit.map((step, index) => {
          const x = 52 + index * 128;
          return (
            <g key={step.label}>
              <circle
                cx={x}
                cy="32"
                r={step.last ? 7 : 4.5}
                fill={step.last ? "var(--accent-secondary)" : "var(--background)"}
                stroke={step.last ? "var(--accent-secondary)" : "currentColor"}
                strokeOpacity={step.last ? 1 : 0.7}
              />
              <text
                x={x}
                y="62"
                fill="currentColor"
                fillOpacity={step.last ? 0.9 : 0.45}
                fontFamily="var(--font-geist-mono), ui-monospace, monospace"
                fontSize="10"
                letterSpacing="1.1"
                textAnchor="middle"
              >
                {step.label.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
      <figcaption className="border-t border-foreground/10 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45">
        How the programs help
      </figcaption>
    </figure>
  );
}

function ProgramCountChart() {
  const max = Math.max(...programFamilies.map((family) => family.programs.length));

  return (
    <div className="border border-foreground/10">
      <div className="flex items-baseline justify-between gap-4 border-b border-foreground/10 px-4 py-4 sm:px-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45">
          Programs
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
          <span className="mr-2 text-2xl tracking-tight text-foreground tabular-nums">
            {programTotal}
          </span>
          total
        </p>
      </div>
      <ul>
        {programFamilies.map((family) => (
          <li key={family.id} className="border-b border-foreground/10 last:border-b-0">
            <a
              href={`/programs#${family.id}`}
              className="group grid grid-cols-[minmax(0,1fr)_4.5rem] items-center gap-4 px-4 py-4 sm:px-5"
            >
              <span className="min-w-0">
                <span className="block truncate text-[15px] tracking-tight text-foreground transition-colors group-hover:text-accent-secondary">
                  {family.title}
                </span>
                <span className="mt-1 block text-sm leading-5 text-foreground/55">
                  {family.line}
                </span>
                <span className="mt-2.5 block h-1 bg-foreground/10">
                  <span
                    className="block h-full bg-accent"
                    style={{ width: `${(family.programs.length / max) * 100}%` }}
                  />
                </span>
              </span>
              <span className="text-right">
                <span className="block text-2xl tabular-nums tracking-tight text-foreground">
                  {family.programs.length}
                </span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/40">
                  {family.countNoun}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Programs() {
  return (
    <section id="programs" className="scroll-mt-24 border-t border-foreground/10">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-x-16 lg:gap-y-8">
          <div>
            <SectionHeading
              index="02"
              label="Programs"
              title="Five programs on one campus."
            />
            <p className="mt-5 max-w-md text-[15px] leading-7 text-foreground/65">
              Five programs run with a college in one semester. A trainer in
              the classroom, faculty beside that teaching, and placement,
              mentorship, and online lessons for the same students.
            </p>
          </div>
          <div className="lg:col-start-2 lg:row-span-3 lg:row-start-1">
            <ProgramCountChart />
          </div>
          <BenefitMark />
          <CtaLink href="/programs" className="self-start">
            View all programs
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
