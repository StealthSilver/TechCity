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
    slug: "roadmaps",
    href: "/students/roadmaps",
    label: "Roadmaps",
    index: "02",
    title: "The path through the program.",
    line: "What to study next, in the order the campus program already uses. Each step names the work that comes after it.",
  },
  {
    slug: "spardha",
    href: "/students/spardha",
    label: "Spardha",
    index: "03",
    title: "Contests from the campus.",
    line: "Events and rounds your college runs with TechCity. Enter, then keep the attempt you can talk through later.",
  },
  {
    slug: "code-arena",
    href: "/students/code-arena",
    label: "Code Arena",
    index: "04",
    title: "Problems you can attempt.",
    line: "Timed coding work you can start on your own. Each attempt stays, with a note on what to change.",
  },
  {
    slug: "learning",
    href: "/students/learning",
    label: "Learning",
    index: "05",
    title: "Lessons you can replay.",
    line: "Sessions from the program, ready to watch again before the lab or the review that follows them.",
  },
] as const;

export const studentLogin = {
  slug: "login",
  href: "/students/login",
  label: "Log in",
  line: "One account for lessons, roadmaps, Spardha, Code Arena, and learning.",
} as const;

const studentPages = [...studentProducts, studentLogin];

export function studentPage(slug: string) {
  return studentPages.find((page) => page.slug === slug);
}
