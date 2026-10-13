export type Partner = {
  name: string;
  place: string;
  info: string;
  logo?: string;
  logoSurface?: "light" | "dark";
  summary?: string;
};

export const collegePartnerMarks: Partner[] = [
  {
    name: "Echelon Institute of Technology",
    place: "Faridabad, Haryana",
    info: "Opened in 2007 and affiliated to Guru Gobind Singh Indraprastha University, Delhi.",
    summary: "A Faridabad partner. Labs run on the college campus.",
    logo: "/logos/White-Logo.webp",
    logoSurface: "dark",
  },
  {
    name: "Integrated Academy of Management and Technology",
    place: "Ghaziabad, Uttar Pradesh",
    info: "Opened in 1995. The institute teaches management, information technology, law, education, and technology.",
    summary: "A Ghaziabad partner for management and technology.",
    logo: "/logos/inmantec-logo-1-1.png",
  },
  {
    name: "Adhunik Group of Institutions",
    place: "Ghaziabad, Uttar Pradesh",
    info: "An NCR campus in Duhai, Ghaziabad, with engineering and other programmes.",
    summary: "A Duhai partner. Sessions sit in the college timetable.",
    logo: "/logos/logo.png",
  },
  {
    name: "Ajay Kumar Garg Engineering College",
    place: "Ghaziabad, Uttar Pradesh",
    info: "Established in 1998. The college offers B.Tech across the major engineering disciplines, plus M.Tech and MCA.",
    summary: "A Ghaziabad engineering partner for B.Tech sections.",
    logo: "/logos/AKGEC_1_0.png",
    logoSurface: "dark",
  },
  {
    name: "St. Andrews Institute of Technology & Management",
    place: "Gurugram, Haryana",
    info: "Approved by AICTE and affiliated to Maharshi Dayanand University. It offers undergraduate and postgraduate courses in technology and management.",
    logo: "/logos/logo%20(1).png",
  },
  {
    name: "Lovely Professional University",
    place: "Phagwara, Punjab",
    info: "A university in Phagwara, Kapurthala district. The recorded year of establishment is December 2005.",
    logo: "/logos/lpu-logo.svg",
  },
  {
    name: "Chandigarh University",
    place: "Mohali, Punjab",
    info: "Established by the Punjab State Legislature and recognised by the University Grants Commission. NAAC has accredited it A+.",
    logo: "/logos/logo%20(2).png",
  },
  {
    name: "Chitkara University, Punjab",
    place: "Rajpura, Punjab",
    info: "A state private university. Punjab approved it in December 2010, and the UGC approved it to award degrees in January 2011.",
    logo: "/logos/cu-logo.webp",
  },
  {
    name: "Kali Charan Nigam Institute of Technology",
    place: "Banda, Uttar Pradesh",
    info: "Established in 2002 by Banda Education Centre. Approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow.",
    logo: "/logos/kcnitlogo.jpg",
  },
  {
    name: "Shobhit Institute of Engineering & Technology",
    place: "Meerut, Uttar Pradesh",
    info: "A deemed-to-be university, NAAC A grade, established in 2000.",
    logo: "/logos/logo%20(3).png",
  },
  {
    name: "Jai Prakash University",
    place: "Chapra, Bihar",
    info: "Established in 1990 under the Bihar State Universities Act. Its jurisdiction is the Saran division: Chapra, Siwan, and Gopalganj.",
    logo: "/logos/logo-new.avif",
  },
];

export const industryPartnerMarks: Partner[] = [
  {
    name: "HCL GUVI",
    place: "Tech learning",
    info: "An HCL learning partner for coding and job-ready technical programmes. Students leave with work a reviewer can open.",
    summary: "A learning partner for coding programmes.",
    logo: "/partners/hcl-guvi.webp",
  },
  {
    name: "Hitbullseye",
    place: "Test preparation",
    info: "A test-prep and college-programmes partner. The tie-up is practice and review, beside the labs.",
    summary: "A partner for test preparation beside the labs.",
    logo: "/partners/hitbullseye.png",
  },
  {
    name: "Chetu",
    place: "Software development",
    info: "A custom-software company. Students are prepared for the kind of system a delivery team will actually read.",
    summary: "A software partner for work a team can review.",
    logo: "/partners/chetu.png",
  },
  {
    name: "Froyo Technologies",
    place: "Learning and development",
    info: "A Noida learning partner for technical upskilling and certifications. The work is taught as a lab, not a slide deck.",
    summary: "A Noida partner for technical upskilling.",
    logo: "/partners/froyo.png",
    logoSurface: "dark",
  },
  {
    name: "VTS Infosoft",
    place: "Business applications",
    info: "A Noida firm for Microsoft business applications and corporate training. Students practise on the tools those teams use.",
    logo: "/partners/vts-infosoft.png",
  },
  {
    name: "EdCEPT",
    place: "Tech workshops",
    info: "A Delhi workshop partner for software, data, and applied labs taught with a college cohort.",
    logo: "/partners/edcept.svg",
  },
  {
    name: "epiTech Infosystems",
    place: "Software services",
    info: "A software services partner. The partnership is review of student work and the tools a lab is built on.",
    logo: "/partners/epitech.png",
  },
];

export const collegePartners: Partner[] = collegePartnerMarks;

export const industryPartners: Partner[] = industryPartnerMarks;
