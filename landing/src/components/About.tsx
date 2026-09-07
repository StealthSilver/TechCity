import SectionHeading from "@/components/SectionHeading";

const pillars = [
  {
    id: "about",
    index: "01",
    title: "Our story",
    body: "Built to close the gap between campus teaching and the work companies hire for.",
  },
  {
    id: "faculty",
    index: "02",
    title: "Faculty",
    body: "Practitioners on campus who teach, mentor, and keep curriculum current.",
  },
  {
    id: "programs",
    index: "03",
    title: "Programs",
    body: "Cohort tracks in software, data, and product — assessed the way hiring teams assess.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-foreground/10"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-[4.5rem]">
        <div>
          <SectionHeading
            index="01"
            label="About"
            title="From classrooms to careers."
          />
          <p className="mt-5 max-w-md text-[15px] leading-7 text-foreground/65">
            TechCity partners with universities to run industry-aligned
            skilling — faculty, programs, and career pathways as one suite.
          </p>
        </div>

        <ul className="border-t border-foreground/10">
          {pillars.map((pillar) => (
            <li
              key={pillar.id}
              id={pillar.id === "about" ? undefined : pillar.id}
              className="scroll-mt-24 border-b border-foreground/10"
            >
              <a
                href={`#${pillar.id}`}
                className="group grid grid-cols-[3rem_1fr] gap-4 py-5 sm:grid-cols-[4rem_1fr] sm:gap-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground/35 transition-colors group-hover:text-accent">
                  {pillar.index}
                </span>
                <span>
                  <span className="block text-[1.05rem] tracking-tight text-foreground transition-colors group-hover:text-foreground">
                    {pillar.title}
                  </span>
                  <span className="mt-1.5 block max-w-md text-sm leading-6 text-foreground/55">
                    {pillar.body}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
