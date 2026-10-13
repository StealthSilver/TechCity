export const studentProducts = [
  {
    slug: "lms",
    href: "/students/lms",
    label: "LMS",
    index: "01",
    title: "The classes, in order.",
    line: "Lessons and labs from the program on your campus. Replay a session, then open the work that follows it.",
  },
  {
    slug: "practice",
    href: "/students/practice",
    label: "Practice",
    index: "02",
    title: "Attempts you can review.",
    line: "Timed work in the formats companies use before an interview. Each attempt stays, with a note on what to change.",
  },
  {
    slug: "playground",
    href: "/students/playground",
    label: "Playground",
    index: "03",
    title: "Try it before it is a project.",
    line: "A place to run the idea from class on your own, before it has to hold up in a lab or a review.",
  },
  {
    slug: "careers",
    href: "/students/careers",
    label: "Careers",
    index: "04",
    title: "Roles next to the work.",
    line: "Openings from the companies that hire out of these programs, beside the projects you can actually show.",
  },
] as const;

export const studentLogin = {
  slug: "login",
  href: "/students/login",
  label: "Log in",
  line: "One account for lessons, practice, the playground, and careers.",
} as const;

const studentPages = [...studentProducts, studentLogin];

export function studentPage(slug: string) {
  return studentPages.find((page) => page.slug === slug);
}
