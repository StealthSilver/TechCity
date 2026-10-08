import type { Testimonial } from "@/data/testimonials";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

function Rating({ value }: { value: number }) {
  return (
    <span className="flex gap-1" aria-label={`Rated ${value} out of 5`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={`size-1.5 ${
            index < value ? "bg-accent-secondary" : "bg-foreground/15"
          }`}
        />
      ))}
    </span>
  );
}

export default function TestimonialCard({
  item,
  className = "",
}: {
  item: Testimonial;
  className?: string;
}) {
  return (
    <figure
      className={`group flex flex-col border border-foreground/10 bg-background p-6 transition-colors duration-500 hover:border-foreground/25 sm:p-7 ${className}`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          {item.program}
        </span>
        <Rating value={item.rating} />
      </div>

      <blockquote className="mt-5 flex-1 text-[15px] leading-7 text-foreground/80">
        <span className="mr-1 font-mono text-accent-secondary" aria-hidden="true">
          ”
        </span>
        {item.quote}
      </blockquote>

      <p className="mt-5 flex items-center gap-2 text-[12px] text-foreground/55">
        <span className="size-1 bg-accent-secondary" aria-hidden="true" />
        {item.outcome}
      </p>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-foreground/10 pt-5">
        <span className="grid size-9 shrink-0 place-items-center bg-accent/15 font-mono text-[11px] tracking-[0.08em] text-foreground transition-colors duration-500 group-hover:bg-accent">
          {initials(item.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm tracking-tight text-foreground">
            {item.name}
          </span>
          <span className="mt-0.5 block truncate font-mono text-[10px] uppercase tracking-[0.14em] text-foreground/40">
            {item.degree} · {item.city}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
