function hashName(name: string) {
  let hash = 0;
  for (const char of name) hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  return hash;
}

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function FacultyAvatar({
  name,
  className = "size-16",
}: {
  name: string;
  className?: string;
}) {
  const hash = hashName(name);
  const lightField = hash % 2 === 0;
  const blocks = Array.from({ length: 6 }, (_, index) => ((hash >> (index * 3)) & 7) > 3);

  return (
    <span
      className={`relative grid shrink-0 place-items-center overflow-hidden ${
        lightField
          ? "bg-accent-secondary text-background"
          : "bg-accent text-on-accent"
      } ${className}`}
      aria-hidden="true"
    >
      <span className="absolute inset-0 grid grid-cols-3 grid-rows-2 opacity-35">
        {blocks.map((on, index) => (
          <span
            key={index}
            className={on ? (lightField ? "bg-foreground" : "bg-accent-secondary") : ""}
          />
        ))}
      </span>
      <span className="relative font-mono text-[13px] tracking-[0.14em]">
        {initials(name)}
      </span>
    </span>
  );
}
