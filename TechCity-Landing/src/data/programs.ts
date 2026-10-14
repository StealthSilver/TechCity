export const programFamilyIds = [
  "trainers",
  "faculty",
  "placement",
  "mentorship",
  "online",
] as const;

export type ProgramFamilyId = (typeof programFamilyIds)[number];

export type ProgramItem = {
  name: string;
  detail: string;
};

export type ProgramFamily = {
  id: ProgramFamilyId;
  index: string;
  title: string;
  line: string;
  body: string;
  audience: string;
  figure: string;
  how: string;
  steps: [string, string, string];
  countNoun: string;
  chips?: string[];
  programs: ProgramItem[];
};

export const programFamilies: ProgramFamily[] = [
  {
    id: "trainers",
    index: "01",
    title: "Trainers for students",
    line: "Trainers on campus for software, data, AI, cloud, and security.",
    body: "TechCity places trainers with students. Each trainer teaches one subject the way a working team practices it, inside the college timetable.",
    audience: "Students",
    figure: "Subject for the day",
    how: "A trainer is placed on the campus for one subject and teaches it inside the college timetable. The lab follows a shared piece of work, and the trainer reviews it the way a teammate would.",
    steps: ["Campus", "Subject", "Review"],
    countNoun: "subjects",
    chips: ["Software", "Data", "AI", "Cloud", "Security"],
    programs: [
      {
        name: "Software engineering",
        detail:
          "How teams write, review, and ship code. Labs follow a shared codebase, and students practice the review a teammate would actually give.",
      },
      {
        name: "Data and analytics",
        detail:
          "From a raw dataset to a result someone can question. Trainers stay for the analysis and the explanation, not only the tool.",
      },
      {
        name: "Artificial intelligence",
        detail:
          "Applied models, how to judge them, and where AI belongs in a product. Students leave with a project they can walk through in an interview.",
      },
      {
        name: "Cloud and DevOps",
        detail:
          "How software is deployed, watched, and recovered. The pipeline in class follows the shape teams use after a release.",
      },
      {
        name: "Cybersecurity",
        detail:
          "How systems fail and how teams defend them. Students work through scenarios, then explain the fix in plain language.",
      },
    ],
  },
  {
    id: "faculty",
    index: "02",
    title: "Faculty development",
    line: "Programs that keep college faculty aligned with what the trainers teach.",
    body: "These programs are for the college’s own faculty. The aim is a syllabus, a lab, and an assessment that match the work trainers are doing with students.",
    audience: "College faculty",
    figure: "Syllabus and lab",
    how: "College faculty sit with TechCity trainers before they teach the same material. They rebuild a lab or a syllabus, rehearse it, then run that session with their own students.",
    steps: ["Trainers", "Rehearse", "Teach"],
    countNoun: "programs",
    programs: [
      {
        name: "Industry immersion",
        detail:
          "Faculty spend structured time with practitioners and bring that practice back into the courses they already teach.",
      },
      {
        name: "Curriculum studio",
        detail:
          "A course is rebuilt around the work hiring teams look for, with the faculty leading the syllabus and TechCity beside them.",
      },
      {
        name: "Classroom practice lab",
        detail:
          "Faculty rehearse a lab, a critique, and an assessment with TechCity trainers before that session runs with students.",
      },
    ],
  },
  {
    id: "placement",
    index: "03",
    title: "Placement preparation",
    line: "Practice for the hiring path companies actually run.",
    body: "Students rehearse the path from the profile a recruiter opens to the last conversation. Each program is one part of that path, in the order companies use.",
    audience: "Students",
    figure: "Hiring path",
    how: "Students practice the hiring path in the order companies use it. They start with a profile and timed work, then interviews, then one full loop from the application to the last conversation.",
    steps: ["Profile", "Practice", "Loop"],
    countNoun: "programs",
    programs: [
      {
        name: "Interview studio",
        detail:
          "Mock technical and conversation rounds. Students get notes on what to change before the next one, not a score alone.",
      },
      {
        name: "Coding and aptitude drills",
        detail:
          "Timed practice in the formats companies use at the start of a process, with a trainer in the room to review the approach.",
      },
      {
        name: "Portfolio and resume clinic",
        detail:
          "Projects and profiles rewritten the way a recruiter reads them: what shipped, what the student did, and what to open first.",
      },
      {
        name: "Hiring-loop rehearsal",
        detail:
          "One full cycle, from application to the final conversation, run as a single program so the parts connect.",
      },
    ],
  },
  {
    id: "mentorship",
    index: "04",
    title: "Mentorship",
    line: "A practitioner who stays with the student after the lecture.",
    body: "Mentorship covers the questions a timetable does not. A working practitioner stays with a student or a cohort across the semester.",
    audience: "Students",
    figure: "Across the semester",
    how: "A working practitioner stays with a student or a cohort for the semester. There is a standing time outside class to review work, a stuck lab, or the first weeks of a job.",
    steps: ["Mentor", "Semester", "Review"],
    countNoun: "programs",
    programs: [
      {
        name: "Industry mentor match",
        detail:
          "One practitioner paired with one student for the semester, with a standing time to review work and decisions.",
      },
      {
        name: "Cohort office hours",
        detail:
          "Open sessions for a stuck lab, a code review, or a career question. Students bring the work; the mentor works through it with them.",
      },
      {
        name: "First-role mentoring",
        detail:
          "Guidance through the months between campus and the first job: the offer, the team, and the first weeks of work.",
      },
    ],
  },
  {
    id: "online",
    index: "05",
    title: "Online lessons",
    line: "Live classes and lessons students can replay.",
    body: "When a trainer is shared across colleges, the lesson still happens. Students join live or replay it before a lab or an interview.",
    audience: "Students and campuses",
    figure: "One live lesson",
    how: "A trainer teaches the lesson live, and students join from campus or from home. The recording stays with the cohort so they can replay it before a lab or an interview.",
    steps: ["Live", "Campus", "Replay"],
    countNoun: "programs",
    programs: [
      {
        name: "Live virtual classrooms",
        detail:
          "Scheduled lessons students join from campus or from home, with the same trainer they would meet in the room.",
      },
      {
        name: "Lesson library",
        detail:
          "Recorded sessions kept for the cohort, so a student can replay a topic before a lab, a test, or an interview.",
      },
      {
        name: "Weekend intensives",
        detail:
          "A short online block on one skill, taught across two days, for a cohort that needs a subject between semesters.",
      },
      {
        name: "Campus relay classes",
        detail:
          "One trainer, live, with several colleges in the same session. Campuses share the lesson and keep their own lab time.",
      },
    ],
  },
];

export const programTotal = programFamilies.reduce(
  (sum, family) => sum + family.programs.length,
  0,
);
