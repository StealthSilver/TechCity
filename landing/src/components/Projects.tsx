import SectionHeading from "@/components/SectionHeading";

const columns = [
  {
    id: "projects-ongoing",
    label: "Ongoing",
    items: [
      {
        title: "Faculty-in-residence",
        meta: "4 campuses",
        body: "Industry faculty embedded in engineering programs this semester.",
      },
      {
        title: "Live industry labs",
        meta: "In delivery",
        body: "Campus labs running hiring-partner briefs as coursework.",
      },
    ],
  },
  {
    id: "projects-completed",
    label: "Completed",
    items: [
      {
        title: "Placement-linked cohort",
        meta: "2025",
        body: "First full classroom-to-offer cycle with partner universities.",
      },
      {
        title: "Curriculum sprint",
        meta: "Shipped",
        body: "Industry-reviewed tracks for software, data, and product.",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-foreground/10"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-[4.5rem]">
        <SectionHeading
          index="02"
          label="Projects"
          title="Work that ships with campuses."
        />

        <div className="mt-10 grid gap-px bg-foreground/10 sm:grid-cols-2">
          {columns.map((column) => (
            <div
              key={column.id}
              id={column.id}
              className="scroll-mt-24 bg-background px-0 py-8 sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {column.label}
              </p>
              <ul className="mt-6 space-y-7">
                {column.items.map((item) => (
                  <li key={item.title}>
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="text-[1.05rem] tracking-tight text-foreground">
                        {item.title}
                      </h3>
                      <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">
                        {item.meta}
                      </span>
                    </div>
                    <p className="mt-2 max-w-sm text-sm leading-6 text-foreground/55">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
