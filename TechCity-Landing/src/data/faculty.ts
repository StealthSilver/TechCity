export type FacultyMember = {
  slug: string;
  name: string;
  role: string;
  subject: string;
  campus: string;
  years: string;
  summary: string;
  body: string;
  note: string;
  teaches: string;
  focus: string[];
};

export const faculty: FacultyMember[] = [
  {
    slug: "ananya-mehta",
    name: "Ananya Mehta",
    role: "Faculty, software",
    subject: "Software",
    campus: "Faridabad",
    years: "8 years teaching",
    summary:
      "Ananya runs the software labs. Students leave with a repo they can explain: tests, a small API, and a change log that matches what they actually shipped.",
    body: "She starts from a failing check, then the code. Reviews stay short and specific, the same way a team reviews a pull request.",
    note: "Before teaching she spent five years on a payments team. The lab uses that habit: a change is finished when someone else can run it.",
    teaches: "Software lab, Faridabad, through December. One shared repository, reviewed each week.",
    focus: ["APIs", "Testing", "Version control"],
  },
  {
    slug: "rohan-iyer",
    name: "Rohan Iyer",
    role: "Faculty, artificial intelligence",
    subject: "Artificial intelligence",
    campus: "Pilani",
    years: "6 years in applied ML",
    summary:
      "Rohan teaches models as systems a team can run. A session ends with a dataset, a baseline, and a note on where the result would fail in production.",
    body: "Students practice the judgement around a model: what was measured, what was left out, and what they would not ship.",
    note: "He came from a team that shipped ranking models. The classroom rule is the same one he used there: a fluent answer is not a result.",
    teaches: "Applied AI section, Pilani. Students measure answers against the college’s own material.",
    focus: ["Machine learning", "Evaluation", "Applied AI"],
  },
  {
    slug: "kavya-nair",
    name: "Kavya Nair",
    role: "Faculty, data",
    subject: "Data",
    campus: "Banda",
    years: "9 years with data teams",
    summary:
      "Kavya teaches data work as a record someone else can rerun. Cleaning, a query, and a chart that answers one question.",
    body: "The labs use the same tables a college already has. The point is a result a department can check, not a slide of a dashboard.",
    note: "Kavya writes the explanation for someone who does not write queries. That reader is part of the lab, not an audience at the end.",
    teaches: "Data section, Banda. A sample of campus records, cleaned and checked in public.",
    focus: ["SQL", "Analysis", "Reporting"],
  },
  {
    slug: "arjun-deshmukh",
    name: "Arjun Deshmukh",
    role: "Faculty, cloud",
    subject: "Cloud",
    campus: "Faridabad",
    years: "11 years in infrastructure",
    summary:
      "Arjun teaches how a service is deployed and watched. Students put a small app on a cloud account and read the logs when it breaks.",
    body: "Cost, access, and a rollback are part of the lab. A deploy that only works on a laptop does not count.",
    note: "He keeps the lab on an account the college will still have after the term. Faculty sit in on the deploy review so they can run it again.",
    teaches: "Cloud lab, Faridabad. A small service, deployed and watched through November.",
    focus: ["Cloud architecture", "Deployments", "Observability"],
  },
  {
    slug: "meher-kapoor",
    name: "Meher Kapoor",
    role: "Faculty, security",
    subject: "Security",
    campus: "Pilani",
    years: "7 years in security",
    summary:
      "Meher teaches security as part of building, not a chapter at the end. Students find one real flaw in their own project and fix it.",
    body: "The work covers access, secrets, and what a review should catch before a program is shown to a partner.",
    note: "The finding has to be written so a team can act on it. A long list with no order does not pass the review.",
    teaches: "Security lab, Pilani. Students review their own project and fix one flaw they can defend.",
    focus: ["Application security", "Reviews", "Access control"],
  },
  {
    slug: "vikram-shah",
    name: "Vikram Shah",
    role: "Faculty, full stack",
    subject: "Software",
    campus: "Banda",
    years: "10 years building products",
    summary:
      "Vikram holds the full-stack studio. A student owns one feature from the screen to the data, and presents it as they would to a hiring team.",
    body: "Mentorship is a working session. The question is whether the feature can be defended, not whether the demo played through.",
    note: "He treats the studio like a hiring review. The student presents the feature, then answers what they would cut.",
    teaches: "Full-stack studio, Banda. One feature from the screen to the data, owned by one student.",
    focus: ["Full stack", "Product sense", "Mentorship"],
  },
  {
    slug: "neha-bansal",
    name: "Neha Bansal",
    role: "Faculty, placement",
    subject: "Placement",
    campus: "Jaipur",
    years: "8 years with hiring teams",
    summary:
      "Neha runs timed practice in the formats companies use at the start of a process. A trainer stays in the room and reviews the approach, not only the final answer.",
    body: "Students leave with the attempt and a note on what they would change the next time the clock starts.",
    note: "She has sat on the other side of these rounds. The lab copies the constraint, not the company name.",
    teaches: "Placement practice, Jaipur. Short timed sessions inside the hours the college already has.",
    focus: ["Interviews", "Timed practice", "Hiring reviews"],
  },
  {
    slug: "ishaan-reddy",
    name: "Ishaan Reddy",
    role: "Faculty, cloud",
    subject: "Cloud",
    campus: "Gurugram",
    years: "9 years in platform teams",
    summary:
      "Ishaan teaches the path from a local build to a service a teammate can reach. Permissions and a rollback are on the same lab sheet as the deploy.",
    body: "The college keeps the account. A lab that disappears when the trainer leaves is not finished.",
    note: "He writes the runbook with the faculty who will repeat the lab. The notes are part of the work, not a handoff at the end.",
    teaches: "Cloud section, Gurugram. One service on the college account, reviewed with faculty in the room.",
    focus: ["Deployments", "Runbooks", "Access"],
  },
  {
    slug: "sara-qureshi",
    name: "Sara Qureshi",
    role: "Faculty, data",
    subject: "Data",
    campus: "Nagpur",
    years: "7 years in analytics",
    summary:
      "Sara teaches the slow part of data work: agreeing what counts as clean before anyone trusts a chart. Each week ends with a check and a short explanation.",
    body: "The explanation is written for a reader who does not write queries. If that reader cannot question the result, the week is not done.",
    note: "She uses a sample the college already has, so the argument is about their records, not a toy dataset.",
    teaches: "Data section, Nagpur. Campus records, cleaned and explained through January.",
    focus: ["Data quality", "SQL", "Explanation"],
  },
  {
    slug: "aditya-menon",
    name: "Aditya Menon",
    role: "Faculty, software",
    subject: "Software",
    campus: "Chennai",
    years: "12 years shipping software",
    summary:
      "Aditya holds a shared codebase. Students review one change a week inside hours the college already scheduled, and they have to say what they would keep.",
    body: "The review is in the room. A comment left after class does not replace the conversation about what is safe to ship.",
    note: "He came from teams that reviewed in public. The lab is that room, scaled to a section, not a lecture about process.",
    teaches: "Software section, Chennai. One repository, a weekly review, through April.",
    focus: ["Code review", "Shared codebases", "Shipping"],
  },
  {
    slug: "priya-raman",
    name: "Priya Raman",
    role: "Faculty, security",
    subject: "Security",
    campus: "Hyderabad",
    years: "8 years in security reviews",
    summary:
      "Priya teaches a review as a ranking. Students write one finding, say what a team would fix first, and show the change that closed it.",
    body: "The sample service stays the same for the term. The skill is the write-up, not a new demo each week.",
    note: "She sits in the review with the section. A list of findings with no order does not leave the room.",
    teaches: "Security lab, Hyderabad. One sample service, reviewed and patched through November.",
    focus: ["Reviews", "Findings", "Fixes"],
  },
  {
    slug: "kabir-malhotra",
    name: "Kabir Malhotra",
    role: "Faculty, artificial intelligence",
    subject: "Artificial intelligence",
    campus: "Lucknow",
    years: "6 years building assistants",
    summary:
      "Kabir teaches a small assistant over material the college already uses. The lab stops when students can show which answers hold and which they threw out.",
    body: "A fluent reply is not the result. The write-up of what failed is the work the section keeps.",
    note: "He keeps the dataset inside the college. Students measure against pages a faculty member can check.",
    teaches: "Applied AI section, Lucknow. One assistant, an evaluation, and a note on what not to ship.",
    focus: ["Applied AI", "Evaluation", "Write-ups"],
  },
];

export function getFaculty(slug: string) {
  return faculty.find((person) => person.slug === slug);
}
