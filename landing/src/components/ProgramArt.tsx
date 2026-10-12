import type { ReactNode } from "react";
import type { ProgramFamilyId } from "@/data/programs";

function Label({
  x,
  y,
  children,
  opacity = 0.4,
  anchor = "start",
}: {
  x: number | string;
  y: number | string;
  children: string;
  opacity?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <text
      x={x}
      y={y}
      fill="currentColor"
      fillOpacity={opacity}
      fontFamily="var(--font-geist-mono), ui-monospace, monospace"
      fontSize="8"
      letterSpacing="1.1"
      textAnchor={anchor}
    >
      {children}
    </text>
  );
}

function TrainersArt() {
  const subjects = ["Software", "Data", "AI", "Cloud", "Security"];
  const active = 2;

  return (
    <>
      {subjects.map((subject, index) => {
        const y = 28 + index * 34;
        const on = index === active;
        return (
          <g key={subject}>
            <rect
              x="132"
              y={y}
              width="216"
              height="26"
              fill={on ? "var(--accent)" : "none"}
              fillOpacity={on ? 0.16 : 0}
              stroke="currentColor"
              strokeOpacity={on ? 0 : 0.14}
            />
            {on ? (
              <rect x="132" y={y} width="2" height="26" fill="var(--accent-secondary)" />
            ) : null}
            <Label x="148" y={y + 17} opacity={on ? 0.85 : 0.38}>
              {subject}
            </Label>
            {on ? (
              <Label x="336" y={y + 17} opacity={0.55} anchor="end">
                Today
              </Label>
            ) : null}
          </g>
        );
      })}
    </>
  );
}

function FacultyArt() {
  return (
    <>
      <rect
        x="78"
        y="36"
        width="148"
        height="148"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.22"
      />
      {[0, 1, 2, 3, 4].map((line) => (
        <line
          key={line}
          x1="96"
          x2={line === 4 ? 168 : 206}
          y1={68 + line * 18}
          y2={68 + line * 18}
          stroke="currentColor"
          strokeOpacity="0.28"
        />
      ))}
      <Label x="96" y="56">
        Syllabus
      </Label>

      <line
        x1="226"
        y1="110"
        x2="262"
        y2="110"
        stroke="var(--accent)"
        strokeWidth="1.25"
      />

      <rect
        x="262"
        y="58"
        width="132"
        height="104"
        fill="var(--accent)"
        fillOpacity="0.08"
        stroke="var(--accent)"
        strokeOpacity="0.7"
      />
      <rect x="262" y="58" width="132" height="2" fill="var(--accent-secondary)" />
      {[0, 1, 2].map((line) => (
        <line
          key={line}
          x1="278"
          x2="372"
          y1={88 + line * 16}
          y2={88 + line * 16}
          stroke="currentColor"
          strokeOpacity="0.28"
        />
      ))}
      <Label x="278" y="78" opacity={0.7}>
        Lab
      </Label>
    </>
  );
}

function PlacementArt() {
  const marks = ["Profile", "Drills", "Clinic", "Offer"];

  return (
    <>
      <line
        x1="72"
        y1="96"
        x2="408"
        y2="96"
        stroke="currentColor"
        strokeOpacity="0.16"
      />
      <line
        x1="72"
        y1="96"
        x2="408"
        y2="96"
        stroke="var(--accent)"
        strokeWidth="1.25"
      />
      {marks.map((mark, index) => {
        const x = 72 + index * 112;
        const last = index === marks.length - 1;
        return (
          <g key={mark}>
            <circle
              cx={x}
              cy="96"
              r={last ? 6 : 4}
              fill={last ? "var(--accent-secondary)" : "var(--background)"}
              stroke={last ? "var(--accent-secondary)" : "currentColor"}
              strokeOpacity={last ? 1 : 0.55}
            />
            <Label x={x} y="72" opacity={0.35} anchor="middle">
              {String(index + 1).padStart(2, "0")}
            </Label>
            <Label x={x} y="124" opacity={last ? 0.75 : 0.42} anchor="middle">
              {mark}
            </Label>
          </g>
        );
      })}
    </>
  );
}

function MentorshipArt() {
  return (
    <>
      <line
        x1="108"
        y1="108"
        x2="372"
        y2="108"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeDasharray="3 5"
      />
      {[0, 1, 2, 3, 4].map((tick) => {
        const x = 148 + tick * 46;
        return (
          <line
            key={tick}
            x1={x}
            x2={x}
            y1="100"
            y2="116"
            stroke="var(--accent)"
            strokeOpacity="0.8"
          />
        );
      })}
      <circle
        cx="96"
        cy="108"
        r="16"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.45"
      />
      <circle
        cx="384"
        cy="108"
        r="16"
        fill="var(--accent)"
        fillOpacity="0.16"
        stroke="var(--accent-secondary)"
      />
      <Label x="96" y="148" anchor="middle">
        Student
      </Label>
      <Label x="384" y="148" opacity={0.7} anchor="middle">
        Mentor
      </Label>
      <Label x="240" y="84" opacity={0.35} anchor="middle">
        Semester
      </Label>
    </>
  );
}

function OnlineArt() {
  const campuses = [108, 240, 372];

  return (
    <>
      {campuses.map((x) => (
        <line
          key={x}
          x1="240"
          y1="64"
          x2={x}
          y2="132"
          stroke="currentColor"
          strokeOpacity="0.22"
        />
      ))}
      <circle
        cx="240"
        cy="52"
        r="14"
        fill="var(--accent)"
        fillOpacity="0.16"
        stroke="var(--accent)"
      />
      <circle cx="240" cy="52" r="3" fill="var(--accent-secondary)" />
      <Label x="240" y="28" opacity={0.55} anchor="middle">
        Live
      </Label>
      {campuses.map((x, index) => (
        <g key={x}>
          <rect
            x={x - 22}
            y="132"
            width="44"
            height="32"
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.35"
          />
          <Label x={x} y="182" anchor="middle">
            {String(index + 1).padStart(2, "0")}
          </Label>
        </g>
      ))}
    </>
  );
}

const arts: Record<ProgramFamilyId, () => ReactNode> = {
  trainers: TrainersArt,
  faculty: FacultyArt,
  placement: PlacementArt,
  mentorship: MentorshipArt,
  online: OnlineArt,
};

export function ProgramFigure({
  id,
  caption,
  index,
  className = "",
}: {
  id: ProgramFamilyId;
  caption: string;
  index: string;
  className?: string;
}) {
  const Art = arts[id];

  return (
    <figure className={`border border-foreground/10 ${className}`}>
      <svg
        viewBox="0 0 480 220"
        className="block h-auto w-full text-foreground"
        role="img"
        aria-label={caption}
      >
        <Art />
      </svg>
      <figcaption className="flex items-center justify-between gap-4 border-t border-foreground/10 px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.12em] text-foreground/40">
        <span>{caption}</span>
        <span className="shrink-0 text-accent-secondary">{index}</span>
      </figcaption>
    </figure>
  );
}
