export type ProjectStatus = "completed" | "current" | "upcoming";

export type CampusProject = {
  id: string;
  title: string;
  campus: string;
  city: string;
  subject: string;
  term: string;
  cohort: string;
  summary: string;
  outcome: string;
  status: ProjectStatus;
  /** Named college for a finished project report. */
  college?: string;
  /** Students in the room for a finished project. */
  students?: number;
  /** How a finished project went, for the project report. */
  report?: string;
};

export type TrainerOpening = {
  id: string;
  projectId: string;
  city: string;
  campus: string;
  subject: string;
  timing: "current" | "upcoming";
  start: string;
  commitment: string;
  detail: string;
  lat: number;
  lng: number;
};

export const projects: CampusProject[] = [
  {
    id: "bengaluru-payments",
    title: "Software engineering training",
    campus: "Bengaluru campus",
    city: "Bengaluru",
    subject: "Software",
    term: "Aug–Nov 2025",
    cohort: "Final-year section",
    summary:
      "A trainer taught software engineering inside the college timetable. Each week the section reviewed a change the way a teammate would.",
    outcome:
      "The cohort finished able to walk a reviewer through what they kept, what they cut, and why.",
    college: "Bengaluru campus",
    students: 48,
    report:
      "Training opened on how a team writes and reviews code, not on a tour of a framework. The first weeks were slow: students waited for the trainer to name the right answer. The trainer moved the room onto review, and each week a student explained a change while the section said what they would keep. By November the cohort could give that walkthrough without a slide deck. The college kept the lab notes and can run the same review again.",
    status: "completed",
  },
  {
    id: "indore-syllabus",
    title: "Artificial intelligence training",
    campus: "Indore campus",
    city: "Indore",
    subject: "AI",
    term: "Jan–Apr 2025",
    cohort: "Third-year section",
    summary:
      "A trainer taught applied AI against the college’s own syllabus. Students had to judge an answer, not only produce a demo.",
    outcome:
      "Students left able to show where a model failed and what they changed after measuring it.",
    college: "Indore campus",
    students: 36,
    report:
      "The training used the college syllabus as the material, so the examples were pages faculty already teach. Early sessions produced fluent answers that were wrong on the same topics. The trainer stopped the room from treating a smooth reply as a finished result, and the rest of the term was measurement: what to keep, what to throw out, and how to say that out loud. Students left with an evaluation they could walk through.",
    status: "completed",
  },
  {
    id: "hyderabad-service",
    title: "Cloud and DevOps training",
    campus: "Hyderabad campus",
    city: "Hyderabad",
    subject: "Cloud",
    term: "Aug–Nov 2024",
    cohort: "Final-year section",
    summary:
      "A trainer taught deployment on an account the college keeps: how a service is shipped, watched, and handed back to faculty.",
    outcome:
      "Faculty can rerun the lab. Students can explain the path from a local build to a service a teammate can reach.",
    college: "Hyderabad campus",
    students: 32,
    report:
      "The first classes covered the shape of a release. A small service ran locally in the second week, and that was the easy part. The rest of the term was the college account: permissions, a deploy a faculty member could repeat, and a check that the service was still up. Training closed when students could teach that path back to the room. The college still has the account and the lab notes.",
    status: "completed",
  },
  {
    id: "pune-review",
    title: "Cybersecurity training",
    campus: "Pune campus",
    city: "Pune",
    subject: "Security",
    term: "Jan–Apr 2025",
    cohort: "Final-year section",
    summary:
      "A trainer taught how systems fail and how a team ranks a fix. Students wrote the finding in plain language, then defended the order.",
    outcome:
      "Each student left with a written review a hiring team can read, and a ranking they could say out loud.",
    college: "Pune campus",
    students: 40,
    report:
      "Training used one sample service for the whole term. Students found issues and wrote them up. The first reports listed every finding at the same weight, which is not how a team works. The trainer sat in the review and asked what would be fixed first, and why. The write-ups got shorter. Each student left with a review they could defend, not a list of everything that looked wrong.",
    status: "completed",
  },
  {
    id: "lucknow-records",
    title: "Data and analytics training",
    campus: "Lucknow campus",
    city: "Lucknow",
    subject: "Data",
    term: "Aug–Nov 2024",
    cohort: "Third-year section",
    summary:
      "A trainer taught the path from a raw dataset to a result someone can question. The explanation mattered as much as the query.",
    outcome:
      "Students can explain the result to someone who does not write queries. Faculty can point at the lab.",
    college: "Lucknow campus",
    students: 34,
    report:
      "The sample of campus records was messier than the section expected, which is the point of the training. Two weeks went to agreeing what counted as clean before anyone trusted a number. After that, the checks held and students wrote the result for a reader who does not write queries. The term closed when they could give that explanation out loud. Faculty still have the lab.",
    status: "completed",
  },
  {
    id: "chennai-practice",
    title: "Placement drills",
    campus: "Chennai campus",
    city: "Chennai",
    subject: "Placement",
    term: "Jun–Jul 2025",
    cohort: "Final-year section",
    summary:
      "A short training block in the formats companies use at the start of hiring. A trainer reviewed the approach, not only the final answer.",
    outcome:
      "Students left with timed attempts and notes on what they would change the next time the clock started.",
    college: "Chennai campus",
    students: 52,
    report:
      "This was placement training, not a subject lab. Practice ran in the timed formats companies use before an interview. The first attempts were rushed, and the trainer stayed in the room to review how students started, not only whether the last line was right. The block closed in July. Students kept the attempts and the notes on what to change next.",
    status: "completed",
  },
  {
    id: "ahmedabad-faculty",
    title: "Faculty classroom practice",
    campus: "Ahmedabad campus",
    city: "Ahmedabad",
    subject: "Faculty",
    term: "Jan–Mar 2025",
    cohort: "College faculty",
    summary:
      "College faculty rehearsed a lab, a critique, and an assessment with TechCity trainers before they taught it to their own students.",
    outcome:
      "Faculty taught the lab after the rehearsal. The session stayed on campus.",
    college: "Ahmedabad campus",
    students: 18,
    report:
      "This training was for college faculty, not a student section. They rehearsed a lab, a critique, and an assessment with TechCity trainers before that session ran with students. The first pass was too long for the timetable. The second fit the hours the college already had. Faculty then taught the lab themselves, and the session stayed on campus.",
    status: "completed",
  },
  {
    id: "surat-writeup",
    title: "Artificial intelligence training",
    campus: "Surat campus",
    city: "Surat",
    subject: "AI",
    term: "Aug–Nov 2025",
    cohort: "Final-year section",
    summary:
      "A trainer taught applied AI on Gujarati text the college already uses. Students had to write the trade-offs so an interviewer could follow them.",
    outcome:
      "The write-up is what students take into the project discussion. The model stayed in the lab.",
    college: "Surat campus",
    students: 30,
    report:
      "Training tuned a small model on Gujarati text, and the tuning moved faster than the explanation. The trainer held the section until an interviewer could follow the trade-offs: what was kept, what was dropped, and where the model still failed. That write-up is the result of the training. Students take it into the project discussion.",
    status: "completed",
  },
  {
    id: "coimbatore-capstone",
    title: "Software engineering training",
    campus: "Coimbatore campus",
    city: "Coimbatore",
    subject: "Software",
    term: "Jan–Apr 2025",
    cohort: "Final-year section",
    summary:
      "A trainer taught software review on the cohort’s capstone. The second pass was about what a team would keep, not about adding features.",
    outcome:
      "Students can talk through what they cut and why the second version held.",
    college: "Coimbatore campus",
    students: 28,
    report:
      "The training used the capstone the section already had, and rebuilt it twice against mentor notes. The first rebuild added features and made the work harder to explain. The trainer stopped that and asked what a team would keep. The second pass cut scope. Students left able to talk through what they removed and why the second version held in a review.",
    status: "completed",
  },
  {
    id: "kochi-lesson",
    title: "Campus relay class",
    campus: "Kochi campus",
    city: "Kochi",
    subject: "Online",
    term: "Jun–Sep 2025",
    cohort: "Two colleges, one session",
    summary:
      "One trainer taught the lesson live. Kochi hosted the room, a second campus joined, and each college kept its own lab after.",
    outcome:
      "The recording stayed with both cohorts so students could replay the lesson before the lab.",
    college: "Kochi campus",
    students: 44,
    report:
      "This was a shared training session, not a second syllabus. One trainer taught live while another campus joined the same class. The first weeks had a lag between the room in Kochi and the campus on the call, so the lesson was shortened and the lab stayed local. The recording stayed with both cohorts. The shared class finished in September.",
    status: "completed",
  },
  {
    id: "gurugram-fullstack",
    title: "Software engineering training",
    campus: "Gurugram campus",
    city: "Gurugram",
    subject: "Software",
    term: "Aug–Dec 2026",
    cohort: "Final-year section",
    summary:
      "A trainer is on campus teaching software engineering. The section reviews one shared piece of work each week, inside the college timetable.",
    outcome:
      "In progress. Review is happening in the room. The term runs through December.",
    college: "Gurugram campus",
    students: 46,
    report:
      "Training started in August on how a team writes and reviews code. The section is mid-term: students can open a change and say what they would keep, and the trainer is still in the room for the reviews that are not there yet. Faculty sit in on the weekly review. The college keeps the lab notes as the term moves toward December.",
    status: "current",
  },
  {
    id: "hyderabad-cloud-now",
    title: "Cloud and DevOps training",
    campus: "Hyderabad campus",
    city: "Hyderabad",
    subject: "Cloud",
    term: "Jul–Nov 2026",
    cohort: "Final-year section",
    summary:
      "A trainer is teaching deployment on an account the college will keep. Faculty sit in on the reviews.",
    outcome:
      "In progress. The account and the lab notes stay with the college through November.",
    college: "Hyderabad campus",
    students: 38,
    report:
      "Training opened in July on how a service is shipped and watched. Students can take a local build onto the college account, and the current weeks are the part that usually slips: a deploy a faculty member can repeat, and a check that the service is still up. Faculty already sit in on those reviews. The term closes in November.",
    status: "current",
  },
  {
    id: "bengaluru-ai",
    title: "Artificial intelligence training",
    campus: "Bengaluru campus",
    city: "Bengaluru",
    subject: "AI",
    term: "Aug–Dec 2026",
    cohort: "Third-year section",
    summary:
      "A trainer is teaching applied AI on material the college already uses. Students measure whether an answer holds.",
    outcome:
      "In progress. The evaluation write-up is part of the training, not an extra.",
    college: "Bengaluru campus",
    students: 42,
    report:
      "Training started in August. The section is working on a small assistant over material the college already teaches, and the trainer is holding them to measurement: which answers hold, which get thrown out, and how that is written up. The demo is ahead of the evaluation. That write-up is the rest of the term, through December.",
    status: "current",
  },
  {
    id: "nagpur-data",
    title: "Data and analytics training",
    campus: "Nagpur campus",
    city: "Nagpur",
    subject: "Data",
    term: "Sep 2026–Jan 2027",
    cohort: "Third-year section",
    summary:
      "A trainer is teaching the path from a raw dataset to a result a non-technical reader can question.",
    outcome:
      "In progress. Each week ends with a check on the data and a short explanation.",
    college: "Nagpur campus",
    students: 33,
    report:
      "Training opened in September on a sample dataset the college provided. The section is still agreeing what “clean” means, which is the part of the training that takes the longest. Each week ends with a check and a short explanation for someone who does not write queries. The term runs through January.",
    status: "current",
  },
  {
    id: "jaipur-security",
    title: "Cybersecurity training",
    campus: "Jaipur campus",
    city: "Jaipur",
    subject: "Security",
    term: "Jan–Apr 2027",
    cohort: "Final-year section",
    summary:
      "A trainer will teach how systems fail and how a team ranks a fix. Students will write the finding and defend the order.",
    outcome:
      "Opens in January. The timetable slot is held. The trainer seat is open.",
    college: "Jaipur campus",
    students: 40,
    report:
      "The college has held the timetable for a final-year section of about 40 students. Training will use one sample service for the term. Students will write findings in plain language and rank what a team would fix first. The trainer designs that service with TechCity before January, then teaches the review in the room through April.",
    status: "upcoming",
  },
  {
    id: "chennai-software",
    title: "Software engineering training",
    campus: "Chennai campus",
    city: "Chennai",
    subject: "Software",
    term: "Jan–Apr 2027",
    cohort: "Final-year section",
    summary:
      "The next software training will run inside hours the college already has. Students will review one shared codebase each week.",
    outcome:
      "Opens in January. The lab is set. The trainer seat is open.",
    college: "Chennai campus",
    students: 50,
    report:
      "The college has the lab and the timetable for a final-year section of about 50 students. Training will teach how a team writes and reviews code, with one shared codebase and a weekly review in the room. A trainer needs to be in place before the term opens in January. The work runs through April.",
    status: "upcoming",
  },
  {
    id: "chandigarh-faculty",
    title: "Faculty classroom practice",
    campus: "Chandigarh campus",
    city: "Chandigarh",
    subject: "Faculty",
    term: "Feb–Apr 2027",
    cohort: "College faculty",
    summary:
      "Faculty will rehearse a lab and an assessment with a TechCity trainer before they teach it to their own students.",
    outcome:
      "Opens in February. The trainer works with faculty, then the college keeps the session.",
    college: "Chandigarh campus",
    students: 16,
    report:
      "This training is for college faculty, about 16 people, not a student section. From February they will rehearse a lab, a critique, and an assessment with a TechCity trainer, then teach that session themselves. The first audience is the faculty. Students see the lab only after the rehearsal fits the hours the college already has.",
    status: "upcoming",
  },
  {
    id: "kolkata-online",
    title: "Campus relay class",
    campus: "Kolkata campus",
    city: "Kolkata",
    subject: "Online",
    term: "Mar–Jun 2027",
    cohort: "Kolkata and one other campus",
    summary:
      "One trainer will teach the lesson live. Kolkata hosts the room, a second campus joins, and each college keeps its own lab after.",
    outcome:
      "Opens in March. The recording stays with both cohorts.",
    college: "Kolkata campus",
    students: 48,
    report:
      "Kolkata will host the room from March, with about 48 students across two colleges in the same live class. One trainer teaches the lesson. Each campus keeps its own lab after, and the recording stays with both cohorts so students can replay it before that lab. The shared class runs through June.",
    status: "upcoming",
  },
  {
    id: "bhopal-software",
    title: "Software engineering training",
    campus: "Bhopal campus",
    city: "Bhopal",
    subject: "Software",
    term: "Oct 2026–Feb 2027",
    cohort: "Final-year section",
    summary:
      "A trainer is on campus teaching how a team reviews code. The section works in one shared codebase, inside the hours the college already has.",
    outcome:
      "In progress. Weekly review is in the room. The term runs through February.",
    college: "Bhopal campus",
    students: 36,
    report:
      "Training opened in October. The section is past the first weeks, when students waited to be told the right change, and is now reviewing one shared codebase in the room. Faculty sit in on the review. The college keeps the lab notes. The term closes in February.",
    status: "current",
  },
  {
    id: "vizag-cloud",
    title: "Cloud and DevOps training",
    campus: "Visakhapatnam campus",
    city: "Visakhapatnam",
    subject: "Cloud",
    term: "Aug–Dec 2026",
    cohort: "Final-year section",
    summary:
      "A trainer is teaching how a service leaves a laptop and lands on an account the college will keep.",
    outcome:
      "In progress. Deploy reviews are on the timetable through December.",
    college: "Visakhapatnam campus",
    students: 34,
    report:
      "Training started in August. Students can run the service locally. The current weeks are the college account: who can deploy, how a faculty member repeats it, and how the section checks that the service is still up. Those reviews stay on the timetable through December.",
    status: "current",
  },
  {
    id: "mysuru-ai",
    title: "Artificial intelligence training",
    campus: "Mysuru campus",
    city: "Mysuru",
    subject: "AI",
    term: "Sep 2026–Jan 2027",
    cohort: "Third-year section",
    summary:
      "A trainer is teaching applied AI against pages the college already uses. Students have to say when an answer fails.",
    outcome:
      "In progress. The evaluation write-up is the work that remains, through January.",
    college: "Mysuru campus",
    students: 40,
    report:
      "Training opened in September on the college’s own material. The assistant replies. The trainer is holding the room to the harder part: which answers hold, which get thrown out, and how students write that down. That write-up is the rest of the term, through January.",
    status: "current",
  },
  {
    id: "patna-data",
    title: "Data and analytics training",
    campus: "Patna campus",
    city: "Patna",
    subject: "Data",
    term: "Feb–May 2027",
    cohort: "Third-year section",
    summary:
      "A trainer will teach the path from a raw dataset to an explanation a non-technical reader can question.",
    outcome:
      "Opens in February. The dataset is chosen. The trainer seat is open.",
    college: "Patna campus",
    students: 38,
    report:
      "The college has a third-year section of about 38 students and a sample dataset ready for February. Training will cover cleaning, a check on the result, and a short explanation said out loud. The timetable is held. A trainer needs to be in the room before the term opens. The work runs through May.",
    status: "upcoming",
  },
  {
    id: "vadodara-software",
    title: "Software engineering training",
    campus: "Vadodara campus",
    city: "Vadodara",
    subject: "Software",
    term: "Jan–Apr 2027",
    cohort: "Final-year section",
    summary:
      "The next software training will use one shared codebase and a weekly review inside the college timetable.",
    outcome:
      "Opens in January. The lab is booked. The trainer seat is open.",
    college: "Vadodara campus",
    students: 44,
    report:
      "The college has the lab and a final-year section of about 44 students for January. Training will teach how a team writes and reviews code, with the review held in the room each week. A trainer needs to be in place before the term opens. The work runs through April.",
    status: "upcoming",
  },
  {
    id: "dehradun-faculty",
    title: "Faculty classroom practice",
    campus: "Dehradun campus",
    city: "Dehradun",
    subject: "Faculty",
    term: "Mar–May 2027",
    cohort: "College faculty",
    summary:
      "Faculty will rehearse a lab and an assessment with a TechCity trainer before they teach it themselves.",
    outcome:
      "Opens in March. The trainer works with faculty, then the college keeps the session.",
    college: "Dehradun campus",
    students: 12,
    report:
      "This seat is for college faculty, about 12 people. From March they will rehearse a lab and an assessment with a TechCity trainer, then teach that session to their own students. Students are not the first audience. The rehearsal has to fit the hours the college already has, and it runs through May.",
    status: "upcoming",
  },
];

export const openings: TrainerOpening[] = [
  {
    id: "open-gurugram",
    projectId: "gurugram-fullstack",
    city: "Gurugram",
    campus: "Gurugram campus",
    subject: "Software",
    timing: "current",
    start: "Already running · through Dec 2026",
    commitment: "On campus, inside the college timetable, for the rest of this term.",
    detail:
      "Software engineering training is mid-term. The opening is for a trainer who can review student work in the room and keep the class moving through December.",
    lat: 28.46,
    lng: 77.03,
  },
  {
    id: "open-hyderabad",
    projectId: "hyderabad-cloud-now",
    city: "Hyderabad",
    campus: "Hyderabad campus",
    subject: "Cloud",
    timing: "current",
    start: "Already running · through Nov 2026",
    commitment: "On campus for the deploy reviews, through November.",
    detail:
      "Cloud and DevOps training is underway. Faculty already sit in on the reviews. The opening is for a trainer who can teach the path from a local build to the college account.",
    lat: 17.39,
    lng: 78.49,
  },
  {
    id: "open-bengaluru",
    projectId: "bengaluru-ai",
    city: "Bengaluru",
    campus: "Bengaluru campus",
    subject: "AI",
    timing: "current",
    start: "Already running · through Dec 2026",
    commitment: "On campus, one subject, inside the existing timetable.",
    detail:
      "Artificial intelligence training is in progress. The trainer owns the evaluation: what the section measures, what it throws out, and how students write that up.",
    lat: 12.97,
    lng: 77.59,
  },
  {
    id: "open-nagpur",
    projectId: "nagpur-data",
    city: "Nagpur",
    campus: "Nagpur campus",
    subject: "Data",
    timing: "current",
    start: "Already running · through Jan 2027",
    commitment: "On campus through January, with the third-year section.",
    detail:
      "Data and analytics training is underway. The trainer reviews the checks and the explanation students give to a reader who does not write queries.",
    lat: 21.15,
    lng: 79.09,
  },
  {
    id: "open-jaipur",
    projectId: "jaipur-security",
    city: "Jaipur",
    campus: "Jaipur campus",
    subject: "Security",
    timing: "upcoming",
    start: "January 2027",
    commitment: "On campus for one term, Jan–Apr 2027.",
    detail:
      "The timetable slot is held for cybersecurity training. The trainer prepares the sample service with TechCity, then teaches the review with the final-year section.",
    lat: 26.91,
    lng: 75.79,
  },
  {
    id: "open-chennai",
    projectId: "chennai-software",
    city: "Chennai",
    campus: "Chennai campus",
    subject: "Software",
    timing: "upcoming",
    start: "January 2027",
    commitment: "On campus for one term, Jan–Apr 2027.",
    detail:
      "Software engineering training needs a trainer before January. The work is one shared codebase and a weekly review in the college timetable.",
    lat: 13.08,
    lng: 80.27,
  },
  {
    id: "open-chandigarh",
    projectId: "chandigarh-faculty",
    city: "Chandigarh",
    campus: "Chandigarh campus",
    subject: "Faculty",
    timing: "upcoming",
    start: "February 2027",
    commitment: "On campus with college faculty, Feb–Apr 2027.",
    detail:
      "This seat is faculty classroom practice. The trainer rehearses a lab with faculty and leaves them able to teach it. Students are not the first audience.",
    lat: 30.73,
    lng: 76.78,
  },
  {
    id: "open-kolkata",
    projectId: "kolkata-online",
    city: "Kolkata",
    campus: "Kolkata campus",
    subject: "Online",
    timing: "upcoming",
    start: "March 2027",
    commitment: "Live sessions from March, with Kolkata in the room and a second campus joining.",
    detail:
      "A campus relay class: one trainer, one live lesson, two colleges. Kolkata hosts. The recording stays with both cohorts, and each campus keeps its own lab.",
    lat: 22.57,
    lng: 88.36,
  },
  {
    id: "open-bhopal",
    projectId: "bhopal-software",
    city: "Bhopal",
    campus: "Bhopal campus",
    subject: "Software",
    timing: "current",
    start: "Already running · through Feb 2027",
    commitment: "On campus, inside the college timetable, through February.",
    detail:
      "Software engineering training is underway. The opening is for a trainer who can review student work in the room and keep the weekly review moving through February.",
    lat: 23.26,
    lng: 77.41,
  },
  {
    id: "open-vizag",
    projectId: "vizag-cloud",
    city: "Visakhapatnam",
    campus: "Visakhapatnam campus",
    subject: "Cloud",
    timing: "current",
    start: "Already running · through Dec 2026",
    commitment: "On campus for the deploy reviews, through December.",
    detail:
      "Cloud and DevOps training is mid-term. The opening is for a trainer who can take the section from a local build to the college account.",
    lat: 17.69,
    lng: 83.22,
  },
  {
    id: "open-mysuru",
    projectId: "mysuru-ai",
    city: "Mysuru",
    campus: "Mysuru campus",
    subject: "AI",
    timing: "current",
    start: "Already running · through Jan 2027",
    commitment: "On campus, one subject, inside the existing timetable.",
    detail:
      "Artificial intelligence training is in progress. The trainer owns what the section measures and how students write the evaluation up.",
    lat: 12.3,
    lng: 76.64,
  },
  {
    id: "open-patna",
    projectId: "patna-data",
    city: "Patna",
    campus: "Patna campus",
    subject: "Data",
    timing: "upcoming",
    start: "February 2027",
    commitment: "On campus for one term, Feb–May 2027.",
    detail:
      "The dataset and the timetable are set. The trainer reviews the checks and the explanation students give to a reader who does not write queries.",
    lat: 25.59,
    lng: 85.14,
  },
  {
    id: "open-vadodara",
    projectId: "vadodara-software",
    city: "Vadodara",
    campus: "Vadodara campus",
    subject: "Software",
    timing: "upcoming",
    start: "January 2027",
    commitment: "On campus for one term, Jan–Apr 2027.",
    detail:
      "Software engineering training needs a trainer before January. The work is one shared codebase and a weekly review in the college timetable.",
    lat: 22.31,
    lng: 73.18,
  },
  {
    id: "open-dehradun",
    projectId: "dehradun-faculty",
    city: "Dehradun",
    campus: "Dehradun campus",
    subject: "Faculty",
    timing: "upcoming",
    start: "March 2027",
    commitment: "On campus with college faculty, Mar–May 2027.",
    detail:
      "This seat is faculty classroom practice. The trainer rehearses a lab with faculty and leaves them able to teach it.",
    lat: 30.32,
    lng: 78.03,
  },
];

export type ProjectReport = CampusProject & {
  college: string;
  students: number;
  report: string;
};

export function isProjectReport(project: CampusProject): project is ProjectReport {
  return (
    typeof project.college === "string" &&
    typeof project.students === "number" &&
    typeof project.report === "string"
  );
}

export function completedYear(project: CampusProject) {
  const years = project.term.match(/\d{4}/g);
  return years?.[years.length - 1] ?? "";
}

const byYearThenCity = (a: ProjectReport, b: ProjectReport) =>
  completedYear(b).localeCompare(completedYear(a)) || a.city.localeCompare(b.city);

function reportsWithStatus(status: ProjectStatus) {
  return projects
    .filter(
      (project): project is ProjectReport =>
        project.status === status && isProjectReport(project),
    )
    .sort(byYearThenCity);
}

export const completedProjects = reportsWithStatus("completed");

export const ongoingProjects = reportsWithStatus("current");

export function projectReport(id: string) {
  return completedProjects.find((project) => project.id === id);
}

export function ongoingReport(id: string) {
  return ongoingProjects.find((project) => project.id === id);
}

export const currentProjects = projects.filter(
  (project) => project.status === "current",
);

export const upcomingProjects = reportsWithStatus("upcoming");

export function upcomingReport(id: string) {
  return upcomingProjects.find((project) => project.id === id);
}

export function projectById(id: string) {
  return projects.find((project) => project.id === id);
}

export function openingForProject(projectId: string) {
  return openings.find((opening) => opening.projectId === projectId);
}

const cityCoordinates: Record<string, { lat: number; lng: number }> = {
  Ahmedabad: { lat: 23.0225, lng: 72.5714 },
  Bengaluru: { lat: 12.9716, lng: 77.5946 },
  Bhopal: { lat: 23.2599, lng: 77.4126 },
  Dehradun: { lat: 30.3165, lng: 78.0322 },
  Chandigarh: { lat: 30.7333, lng: 76.7794 },
  Chennai: { lat: 13.0827, lng: 80.2707 },
  Coimbatore: { lat: 11.0168, lng: 76.9558 },
  Gurugram: { lat: 28.4595, lng: 77.0266 },
  Hyderabad: { lat: 17.385, lng: 78.4867 },
  Indore: { lat: 22.7196, lng: 75.8577 },
  Jaipur: { lat: 26.9124, lng: 75.7873 },
  Kochi: { lat: 9.9312, lng: 76.2673 },
  Mysuru: { lat: 12.2958, lng: 76.6394 },
  Patna: { lat: 25.5941, lng: 85.1376 },
  Kolkata: { lat: 22.5726, lng: 88.3639 },
  Lucknow: { lat: 26.8467, lng: 80.9462 },
  Nagpur: { lat: 21.1458, lng: 79.0882 },
  Pune: { lat: 18.5204, lng: 73.8567 },
  Surat: { lat: 21.1702, lng: 72.8311 },
  Vadodara: { lat: 22.3072, lng: 73.1812 },
  Visakhapatnam: { lat: 17.6868, lng: 83.2185 },
};

export function projectCoordinates(project: CampusProject) {
  const base = cityCoordinates[project.city] ?? { lat: 22.5, lng: 79 };
  const siblings = projects.filter((item) => item.city === project.city);
  const index = Math.max(0, siblings.findIndex((item) => item.id === project.id));
  if (siblings.length < 2) return base;
  const angle = (index / siblings.length) * Math.PI * 2;
  return {
    lat: base.lat + Math.sin(angle) * 0.18,
    lng: base.lng + Math.cos(angle) * 0.18,
  };
}
