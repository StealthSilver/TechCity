import SectionHeading from "@/components/SectionHeading";

const groups = [
  {
    id: "partners-college",
    label: "College",
    items: [
      "Engineering colleges",
      "State universities",
      "Private campuses",
    ],
  },
  {
    id: "partners-industry",
    label: "Industry",
    items: ["Product teams", "IT services", "Hiring partners"],
  },
];

export default function Partners() {
  return (
    <section
      id="partners"
      className="scroll-mt-24 border-t border-foreground/10"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-end lg:gap-16 lg:py-[4.5rem]">
        <SectionHeading
          index="03"
          label="Partners"
          title="Campuses and companies, in one loop."
        />

        <div className="grid grid-cols-2 gap-8 sm:gap-12">
          {groups.map((group) => (
            <div key={group.id} id={group.id} className="scroll-mt-24">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {group.label}
              </p>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[15px] leading-7 text-foreground/70"
                  >
                    {item}
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
