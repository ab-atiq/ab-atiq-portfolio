// ─────────────────────────────────────────────────────────────
// EDIT THIS FILE to personalize the whole site.
// Everything on the homepage (hero, about, skills, education,
// experience, contact) is pulled from here.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Your Name",
  eyebrow: "Digital Architect",
  designation: "MERN Stack Developer",
  tagline: "Building modern web experiences with JavaScript and React.",
  location: "Dhaka, Bangladesh",
  yearsExperience: "0.6",
  available: true,
  avatar: "/images/avatar.svg",
  resumeUrl: "/resume.pdf",
  bio: [
    "I started my programming journey by tinkering with small HTML pages and slowly fell in love with the process of turning an idea into something people can actually click on. That curiosity eventually led me to the MERN stack, where I now spend most of my time.",
    "I enjoy building clean, user-focused web applications — the kind of work where a good UI decision and a well-structured API come together to make something feel effortless to use. I care a lot about readable code and about the small details that make an interface feel polished rather than just functional.",
    "Outside of programming, I like exploring new tech, playing football with friends on weekends, and sketching interface ideas long before I ever open an editor. I'm currently sharpening my full-stack skills while bringing hands-on experience in business operations and problem-solving to every project I take on.",
  ],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com/yourusername", icon: "twitter" },
  { label: "Facebook", href: "https://facebook.com/yourusername", icon: "facebook" },
];

export const contact = {
  email: "your.email@example.com",
  phone: "+880 1XXXXXXXXX",
  whatsapp: "+880 1XXXXXXXXX",
};

export type SkillCategory = {
  category: string;
  items: { name: string; level: number }[];
};

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "Figma", level: 65 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
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
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Your University Name",
    duration: "2021 — 2025",
    description:
      "Focused on web technologies, data structures, and software engineering practices. Built several academic and personal projects using the MERN stack.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Your College Name",
    duration: "2019 — 2021",
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
    role: "Junior MERN Stack Developer",
    company: "Company / Freelance",
    duration: "2025 — Present",
    description:
      "Building and maintaining full-stack web applications with React, Node.js, Express, and MongoDB. Collaborating with designers and clients to ship clean, responsive interfaces.",
  },
  {
    role: "Business Operations",
    company: "Previous Company",
    duration: "2022 — 2024",
    description:
      "Handled day-to-day operations and problem-solving in a business environment before transitioning into software development — experience that now shapes how I approach product thinking.",
  },
];

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Journey", href: "/#journey" },
  { label: "Contact", href: "/#contact" },
];
