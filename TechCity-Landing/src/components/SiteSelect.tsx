"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

export type SiteSelectOption = {
  value: string;
  label: string;
};

export default function SiteSelect({
  label,
  value,
  onChange,
  options,
  name,
  required = false,
  variant = "inline",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SiteSelectOption[];
  name?: string;
  required?: boolean;
  variant?: "inline" | "field";
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const listId = useId();
  const current = options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    if (!open) return;
    const selected = Math.max(
      0,
      options.findIndex((option) => option.value === value),
    );
    setActiveIndex(selected);

    function onPointer(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKey(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, options, value]);

  function choose(next: string) {
    onChange(next);
    setOpen(false);
  }

  function onTriggerKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      if (!open) {
        setOpen(true);
        return;
      }
    }
    if (!open) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(options.length - 1, index + 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(0, index - 1));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const option = options[activeIndex];
      if (option) choose(option.value);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const menu = open ? (
    <ul
      id={listId}
      role="listbox"
      aria-label={label}
      className="absolute top-full left-0 z-[900] mt-1 max-h-64 min-w-full overflow-auto border border-foreground/15 bg-background py-1"
    >
      {options.map((option, index) => {
        const selected = option.value === value;
        const active = index === activeIndex;
        return (
          <li key={option.value} role="presentation">
            <button
              type="button"
              role="option"
              aria-selected={selected}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => choose(option.value)}
              className={`flex w-full items-center px-3 py-2 text-left leading-none ${
                variant === "inline"
                  ? "font-mono text-[10px] uppercase tracking-[0.14em]"
                  : "text-sm"
              } ${
                selected || active
                  ? "bg-accent text-on-accent"
                  : "text-foreground/75 hover:bg-foreground/[0.04] hover:text-foreground"
              }`}
            >
              {option.label}
            </button>
          </li>
        );
      })}
    </ul>
  ) : null;

  return (
    <div ref={rootRef} className={variant === "field" ? "relative block" : "relative"}>
      {name ? <input type="hidden" name={name} value={value} /> : null}
      {variant === "inline" ? (
        <div className="inline-flex h-8 items-center gap-2 border border-foreground/15 bg-background px-2.5">
          <span className="font-mono text-[10px] uppercase leading-none tracking-[0.14em] text-foreground/40">
            {label}
          </span>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={listId}
            aria-required={required || undefined}
            onClick={() => setOpen((next) => !next)}
            onKeyDown={onTriggerKey}
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase leading-none tracking-[0.14em] text-foreground"
          >
            <span>{current?.label}</span>
            <Chevron open={open} />
          </button>
        </div>
      ) : (
        <div>
          <span className="font-mono text-[10px] uppercase leading-none tracking-[0.16em] text-foreground/45">
            {label}
            {required ? (
              <span className="ml-1 text-accent" aria-hidden="true">
                *
              </span>
            ) : null}
          </span>
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={listId}
            aria-required={required || undefined}
            onClick={() => setOpen((next) => !next)}
            onKeyDown={onTriggerKey}
            className="mt-2 flex w-full items-center justify-between gap-3 border border-foreground/15 bg-background px-3 py-2.5 text-left text-sm leading-none text-foreground outline-none focus:border-accent"
          >
            <span>{current?.label}</span>
            <Chevron open={open} />
          </button>
        </div>
      )}
      {menu}
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-2 shrink-0 text-current opacity-60 transition-transform ${open ? "rotate-180" : ""}`}
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 4.5 6 8.5 10 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
