// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize the whole site.
// Everything on the homepage (hero, about, skills, education,
// experience, contact) is pulled from here.
// ─────────────────────────────────────────────────────────────

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About Me", href: "/about-me" },
  { label: "Journey", href: "/about-me#journey" },
  { label: "Skills", href: "/about-me#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/about-me#contact" },
];

export const profile = {
  name: "Abul Bashar Atiqur",
  name_eng: "AB Atiq",
  eyebrow: "Software Engineer",
  designation: "Software Engineer & CS Instructor",
  tagline:
    "Building modern web experiences and solutions with a focus on clean code and user-centric design.",
  location: "Naogaon, Rajshahi, Bangladesh",
  yearsExperience: "1.5",
  available: false,
  avatar: "/images/Atiqur_Rahman_CS_instructor.jpg",
  resumeUrl: "/Atiqur_Rahman_Resume_final.pdf",
  bio: [
    "I started my programming journey by tinkering with small HTML pages and slowly fell in love with the process of turning an idea into something people can actually click on. That curiosity eventually led me to the MERN stack, where I now spend most of my time.",
    "I enjoy building clean, user-focused web applications — the kind of work where a good UI decision and a well-structured API come together to make something feel effortless to use. I care a lot about readable code and about the small details that make an interface feel polished rather than just functional.",
    "Outside of programming, I like exploring new tech, playing football with friends on weekends, and sketching interface ideas long before I ever open an editor. I'm currently sharpening my full-stack skills while bringing hands-on experience in business operations and problem-solving to every project I take on.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/ab-atiq", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abulbasharatiq/",
    icon: "linkedin",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/abulbasbaratiq/",
    icon: "facebook",
  },
  {
    label: "Twitter",
    href: "https://x.com/abulbasharatiq",
    icon: "twitter",
  },
];

export const contact = {
  email: "ab.atiq.engineer@gmail.com",
  phone: "+880 1521787417",
  whatsapp: "+880 1521787417",
};

export type SkillCategory = {
  category: string;
  items: { name: string; level: number }[];
};

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "C/C++", level: 85 },
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 70 },
      { name: "Java", level: 75 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML & CSS", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Bootstrap", level: 80 },
      { name: "Material UI", level: 75 },
      { name: "Redux", level: 70 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "Mongoose", level: 70 },
      { name: "MySQL", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "REST APIs", level: 80 },
      { name: "Docker", level: 60 },
      { name: "Django", level: 65 },
      { name: "FastAPI", level: 60 },
      { name: "Django REST Framework", level: 65 },
      { name: "Prisma", level: 60 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Netlify", level: 85 },
      { name: "Chrome DevTools", level: 80 },
      { name: "Postman", level: 75 },
      { name: "Jira", level: 70 },
      { name: "Figma", level: 65 },
      { name: "PhotoShop", level: 60 },
      { name: "Illustrator", level: 60 },
      { name: "Canva", level: 70 },
      { name: "Premiere Pro", level: 60 },
    ],
  },
];

export type EducationItem = {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
};

export const education: EducationItem[] = [
  {
    degree: "MSc in Computer Science & Engineering",
    institution: "Begum Rokeya University, Rangpur, Bangladesh",
    duration: "2025 — present",
    description:
      "Focused on web technologies, data structures, and software engineering practices. Built several academic and personal projects using the MERN stack.",
  },
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Begum Rokeya University, Rangpur, Bangladesh",
    duration: "2020 — 2025",
    description:
      "Focused on web technologies, data structures, and software engineering practices. Built several academic and personal projects using the MERN stack.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Rajshahi Court College, Rajshahi, Bangladesh",
    duration: "2017 — 2019",
    description: "Science group.",
  },
  {
    degree: "SSC (Secondary School Certificate) or Dakhil",
    institution: "Chalkhori Narayon Dakhil Madrasha, Naogaon, Bangladesh",
    duration: "2014 — 2016",
    description: "Science group.",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

export const experience: ExperienceItem[] = [
  {
    role: "CS Instructor",
    company: "Phitron Team (Programming Hero)",
    duration: "December 2024 — Present",
    description:
      "Provide real-time support to students on programming concepts (C/C++, DSA, OOP, databases) through group forums and 1:1 sessions, and run a daily support session to clarify problem-solving approaches and debug code, maintaining a 100% student satisfaction rate. Deliver weekly conceptual sessions to 200+ students, breaking down complex problem-solving approaches and best practices for competitive programming and real-world applications, while collaborating with team members to resolve challenging programming problems and improve course materials.",
  },
];
