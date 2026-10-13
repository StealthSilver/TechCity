"use client";

import { useEffect, useState, type FormEvent } from "react";
import SiteSelect from "@/components/SiteSelect";
import { openings, projectById } from "@/data/projects";

const subjects = ["Software", "Data", "AI", "Cloud", "Security", "Faculty", "Online"];

export default function TrainerApply({
  openingId,
  general = false,
  timing,
}: {
  openingId?: string;
  general?: boolean;
  timing?: "current" | "upcoming";
}) {
  const pool = timing ? openings.filter((opening) => opening.timing === timing) : openings;
  const selected = pool.find((opening) => opening.id === openingId) ?? pool[0];
  const project = selected ? projectById(selected.projectId) : undefined;
  const [subject, setSubject] = useState(selected?.subject ?? subjects[0]);
  const [chosenOpening, setChosenOpening] = useState(selected?.id ?? "");

  useEffect(() => {
    if (!selected) return;
    setSubject(selected.subject);
    setChosenOpening(selected.id);
  }, [selected]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const opening = general
      ? undefined
      : pool.find((item) => item.id === String(data.get("opening")));
    const linked = opening ? projectById(opening.projectId) : undefined;
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const subject = String(data.get("subject") ?? "");
    const years = String(data.get("years") ?? "");
    const note = String(data.get("note") ?? "");
    const resume = data.get("resume");
    const resumeName = resume instanceof File ? resume.name : "";

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Subject: ${subject}`,
      `Years teaching: ${years}`,
      `Resume: ${resumeName}`,
      ...(general
        ? []
        : [
            `Opening: ${opening ? `${opening.subject} trainer, ${opening.campus}` : ""}`,
            `Project: ${linked?.title ?? ""}`,
            `City: ${opening?.city ?? ""}`,
          ]),
      "",
      note,
    ].join("\n");

    const mailto = `mailto:hello@techcityskills.com?subject=${encodeURIComponent(
      general
        ? `Trainer application — ${subject}`
        : `Trainer application — ${opening?.city ?? "TechCity"} ${subject}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
      <Field label="Name" name="name" autoComplete="name" required />
      <Field label="Email" name="email" type="email" autoComplete="email" required />
      <Field label="Phone" name="phone" type="tel" autoComplete="tel" required />
      <SiteSelect
        variant="field"
        name="subject"
        label="Subject you teach"
        required
        value={subject}
        onChange={setSubject}
        options={subjects.map((item) => ({ value: item, label: item }))}
      />
      <Field label="Years teaching" name="years" inputMode="numeric" required />
      {general ? null : (
        <SiteSelect
          variant="field"
          name="opening"
          label="Opening"
          required
          value={chosenOpening}
          onChange={setChosenOpening}
          options={pool.map((opening) => ({
            value: opening.id,
            label: `${opening.city} — ${opening.subject}${opening.timing === "upcoming" ? " · upcoming" : ""}`,
          }))}
        />
      )}
      <label className="block sm:col-span-2">
        <Label required>Resume</Label>
        <input
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          required
          className="mt-2 w-full border border-foreground/15 bg-transparent px-3 py-2 text-sm text-foreground/70 outline-none file:mr-4 file:border-0 file:bg-transparent file:font-mono file:text-[10px] file:uppercase file:tracking-[0.16em] file:text-accent focus:border-accent"
        />
      </label>
      <label className="block sm:col-span-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45">
          Note
        </span>
        <textarea
          name="note"
          rows={4}
          placeholder={
            general
              ? "The subject you teach, and where you can be on campus."
              : project
                ? `Why this ${project.title.toLowerCase()} seat at ${selected.campus}.`
                : "Why this seat."
          }
          className="mt-2 w-full resize-y border border-foreground/15 bg-transparent px-3 py-2.5 text-sm leading-6 text-foreground outline-none placeholder:text-foreground/30 focus:border-accent"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          className="bg-accent px-5 py-2.5 text-[13px] font-medium text-on-accent transition-opacity hover:opacity-90"
        >
          Apply
        </button>
      </div>
    </form>
  );
}

function Label({
  children,
  required,
}: {
  children: string;
  required?: boolean;
}) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/45">
      {children}
      {required ? (
        <span className="ml-1 text-accent" aria-hidden="true">
          *
        </span>
      ) : null}
    </span>
  );
}

function Field({
  label,
  name,
  type = "text",
  autoComplete,
  inputMode,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  inputMode?: "numeric";
  required?: boolean;
}) {
  return (
    <label className="block">
      <Label required={required}>{label}</Label>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        required={required}
        className="mt-2 w-full border border-foreground/15 bg-transparent px-3 py-2.5 text-sm text-foreground outline-none focus:border-accent"
      />
    </label>
  );
}
