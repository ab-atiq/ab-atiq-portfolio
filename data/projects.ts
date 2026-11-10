/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

export type ProjectCategory =
  | "web" // full-stack / frontend web apps
  | "mobile" // Android / iOS / React Native / Flutter
  | "backend" // API / service-focused projects
  | "oop" // OOP / DSA / system-design projects
  | "ai-ml"; // machine learning / data science / AI

export type ProjectStatus = "live" | "in-progress" | "archived";

/**
 * Leave a link as "" (or omit it) and the UI hides it.
 * Use the `github*` keys for code, and `*Live` keys for deployed URLs.
 */
export type ProjectLinks = {
  frontendLive?: string; // deployed frontend
  backendLive?: string; // deployed backend / API base URL or docs (Swagger)
  githubFrontend?: string; // client repo
  githubBackend?: string; // server repo
  github?: string; // single / monorepo (OOP, AI/ML, scripts)
  demoVideo?: string; // YouTube / Loom walkthrough
};

/** Only fill this for projects with category "ai-ml". */
export type AiMlShowcase = {
  problem: string; // what problem are you solving?
  dataset: string; // name + source + size
  datasetLink?: string; // where the dataset came from (Kaggle, UCI, etc.)
  approach: string; // preprocessing + modeling approach in 2-3 sentences
  models: string[]; // e.g. ["Logistic Regression", "Random Forest", "CNN"]
  metrics: { label: string; value: string }[]; // e.g. { label: "Accuracy", value: "94.2%" }
  resultsSummary?: string; // one-line takeaway, e.g. "CNN beat baseline by 6 points"
  notebookLink?: string; // Colab / Kaggle / Jupyter
  demoLink?: string; // Hugging Face Space / Streamlit / Gradio
  modelCardLink?: string; // optional write-up / paper / blog
};

export type Project = {
  slug: string; // URL key: lowercase, kebab-case, unique
  name: string;
  image: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean; // show on the home page
  order: number; // lower numbers appear first in the grid
  year: number; // year built or last major update
  teamType: "solo" | "team";
  role: string; // your contribution, e.g. "Frontend Developer"
  tags: string[]; // free-form keywords for filtering
  shortDescription: string; // 1 line, used on cards
  description: string; // full paragraph, used on the details page
  features: string[]; // bullet list of key features
  techStack: string[];
  links: ProjectLinks;
  challenges: string;
  improvements: string;
  aiMl?: AiMlShowcase;
};

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projects: Project[] = [
  {
    slug: "university-management-system",
    name: "University Management System (UMS)",
    image: "/images/UMS.png",
    category: "web",
    status: "live",
    featured: true,
    order: 1,
    year: 2026, // TODO: confirm year
    teamType: "solo", // TODO: change to "team" if this was a group project
    role: "Frontend Developer",
    tags: ["nextjs", "typescript", "erp", "education", "forms", "rbac"],
    shortDescription:
      "A role-based academic ERP for students, faculty, and admins, covering enrollment, attendance, grades, and payments.",
    description:
      "A role-based academic ERP frontend built with the Next.js App Router for students, faculty, and admins. Students can enroll under semester-gated rules and view degree curriculum and published results with transcripts. Faculty can mark attendance, manage exams, and enter grades. Admins can manage invoices and payments, where payment screens rely on backend-verified payment status and API errors are mapped into form validation.",
    features: [
      "Role-based views for students, faculty, and admins",
      "Semester-gated enrollment",
      "Degree curriculum views",
      "Attendance marking",
      "Exam management and grade entry",
      "Published results and transcript views",
      "Invoice and payment screens using backend-verified status",
      "API error mapping into form validation",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "TanStack Form",
      "Zod",
    ],
    links: {
      frontendLive: "https://ph-l2-a7-ums-frontend.vercel.app/",
      githubFrontend: "https://github.com/ab-atiq/PH-L2-A7-UMS-Frontend",
      githubBackend: "https://github.com/ab-atiq/PH-L2-A7-UMS-Backend",
    },
    challenges:
      "TODO: Describe the hardest problem, for example enforcing semester-gated enrollment on the client, or mapping backend validation errors onto form fields.",
    improvements:
      "TODO: Describe next steps, for example real-time attendance updates, a richer transcript export, or more test coverage for the grade entry flow.",
  },
  {
    slug: "fixitnow",
    name: "FixItNow (Service Booking Platform)",
    image: "/images/FixItNow.png",
    category: "web",
    status: "live",
    featured: true,
    order: 2,
    year: 2026, // TODO: confirm year
    teamType: "solo", // TODO: change to "team" if this was a group project
    role: "Full-Stack Developer",
    tags: ["nextjs", "typescript", "stripe", "jwt", "booking", "rbac"],
    shortDescription:
      "A full-stack service booking platform where customers book technicians and pay securely via Stripe.",
    description:
      "A full-stack service booking platform where customers book technicians, manage bookings, and pay securely via Stripe. Includes role-based dashboards for customers, technicians, and admins, covering booking workflows, earnings tracking, and user moderation. Authentication uses JWT with protected routes, and API calls go through centralized Axios interceptors that log users out automatically when their token expires.",
    features: [
      "Customer booking of technicians and booking management",
      "Secure payments via Stripe",
      "Role-based dashboards for customers, technicians, and admins",
      "Earnings tracking for technicians",
      "User moderation for admins",
      "JWT authentication with protected routes",
      "Centralized Axios interceptors with automatic logout on token expiry",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Stripe",
      "Axios",
      "Vercel",
    ],
    links: {
      frontendLive: "https://fixitnow-frontend-pi.vercel.app/",
      githubFrontend: "https://github.com/ab-atiq/FixItNow-frontend",
      githubBackend:
        "https://github.com/ab-atiq/PH_L2_A4_FixItNow_Backend_Project",
    },
    challenges:
      "TODO: Describe the hardest problem, for example keeping payment status in sync with bookings, or handling token expiry cleanly across all API calls.",
    improvements:
      "TODO: Describe next steps, for example webhook-based payment confirmation, notifications for booking status changes, or technician ratings.",
  },
  {
    slug: "prostream",
    name: "ProStream (Streaming Site)",
    image: "/images/pro_stream.png",
    category: "web",
    status: "live",
    featured: true,
    order: 3,
    year: 2025, // TODO: confirm year
    teamType: "team",
    role: "Frontend Developer & Payment Integration",
    tags: ["streaming", "realtime", "payments", "react", "django"],
    shortDescription:
      "A live streaming platform with real-time chat and a tipping system, built as a team project.",
    description:
      "A live streaming platform with real-time chat and tip functionality, built with React, Django, and deployed on AWS. Implemented the full frontend as a responsive web application for desktop, tablet, and mobile, and collaborated closely with the backend team to integrate the Agora service for live video with a secure API implementation. Also implemented the SSLCommerz payment gateway so viewers can tip streamers during live streams, with an efficient withdrawal process for streamers.",
    features: [
      "Live streaming with Agora integration",
      "Real-time chat during streams",
      "Tipping streamers via SSLCommerz payment gateway",
      "Withdrawal process for streamers",
      "Responsive on desktop, tablet, and mobile",
      "Detailed API tests for robustness",
    ],
    techStack: [
      "React",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "AWS EC2",
    ],
    links: {
      frontendLive: "",
      backendLive: "",
      githubFrontend: "",
      githubBackend: "",
      demoVideo: "",
    },
    challenges:
      "Integrating Agora's real-time streaming service securely from the frontend while coordinating closely with the backend team was the biggest challenge. Implementing the SSLCommerz payment gateway for in-stream tipping and building a reliable withdrawal flow for streamers also required careful handling of edge cases, and I wrote detailed API tests to keep the various flows robust and reliable.",
    improvements:
      "Future plans include adding more granular analytics for streamers, expanding the chat with moderation tools, and further optimizing video performance across devices.",
  },
  {
    slug: "issue-tracker-app",
    name: "Issue Tracker App",
    image: "/images/issue_tracker.png",
    category: "web",
    status: "live",
    featured: true,
    order: 4,
    year: 2025, // TODO: confirm year
    teamType: "solo",
    role: "Full-Stack Developer",
    tags: ["typescript", "nextjs", "prisma", "auth", "zod"],
    shortDescription:
      "A responsive issue tracking app with authentication, search, and issue management.",
    description:
      "An issue tracker application featuring user authentication and authorization, the ability to create, view, and manage issues, and search functionality to quickly find relevant items. Built with a fully responsive design so it works well on mobile devices as well as desktop.",
    features: [
      "User authentication and authorization",
      "Create, view, and manage issues",
      "Search functionality",
      "Responsive design for mobile devices",
      "Type-safe validation with Zod",
    ],
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "Zod"],
    links: {
      frontendLive: "",
      github: "", // Next.js full-stack = single repo
      demoVideo: "",
    },
    challenges:
      "Designing a clean data model with Prisma that supported issue statuses and ownership, while validating all incoming data with Zod, required careful planning to keep the API both type-safe and easy to extend.",
    improvements:
      "I'd like to add filtering and sorting on the issue list, email notifications for status changes, and role-based permissions for teams.",
  },
  {
    slug: "easy-rent",
    name: "Easy Rent (Rental Vehicle Platform)",
    image: "/images/easy_rent.png",
    category: "web",
    status: "live",
    featured: true,
    order: 5,
    year: 2024, // TODO: confirm year
    teamType: "team",
    role: "Full-Stack Developer",
    tags: ["rental", "firebase", "chat", "admin-panel", "redux"],
    shortDescription:
      "A rental vehicle platform where users can take driving courses and rent vehicles, built as a team project.",
    description:
      "A fully responsive vehicle rental application with Firebase Authentication, React Router, and Material UI. Users can purchase driving courses and rent vehicles through the platform. Admins can view all vehicles, add or remove vehicles, see all course and vehicle orders, publish blog posts, and delete unpaid payment records. Users can also chat with the admin panel and with other renters on the platform.",
    features: [
      "Firebase Authentication",
      "Buy driving courses and rent vehicles",
      "Admin panel: manage vehicles, orders, blogs, and unpaid payments",
      "Chat between users and admin, and among renters",
      "Fully responsive UI with Material UI",
    ],
    techStack: ["React", "React Router", "Material UI", "Redux", "Firebase"],
    links: {
      frontendLive: "",
      backendLive: "",
      githubFrontend: "",
      githubBackend: "",
    },
    challenges:
      "Building a real-time chat system between users and the admin panel alongside a full rental and course-booking flow required careful state management with Redux, plus handling unpaid or abandoned orders cleanly on the admin side.",
    improvements:
      "Planning to add automated payment reminders, a ratings system for vehicles and instructors, and improved admin analytics for orders and revenue.",
  },
  {
    slug: "airplane-website",
    name: "Airplane Website",
    image: "/images/project-3.svg",
    category: "web",
    status: "live",
    featured: false,
    order: 6,
    year: 2024, // TODO: confirm year
    teamType: "solo",
    role: "Full-Stack Developer",
    tags: ["mern", "mongodb", "ecommerce", "dashboard"],
    shortDescription:
      "A MERN stack service and e-commerce platform with separate admin and customer dashboards.",
    description:
      "A fully responsive MERN stack application for airplane-related services with multiple authentication systems, with all data loaded from the database. It includes separate dashboard functionality for admins and customers: admins can manage all orders, add or remove services, and promote users to admin, while logged-in customers can place orders, view their orders, and add and view reviews.",
    features: [
      "Multiple authentication systems",
      "Separate admin and customer dashboards",
      "Admin: manage orders, add/remove services, make users admin",
      "Customer: place orders, view orders, add and view reviews",
      "All data loaded dynamically from the database",
    ],
    techStack: ["React", "React Router", "Express.js", "MongoDB", "Firebase"],
    links: {
      frontendLive: "",
      backendLive: "",
      githubFrontend: "",
      githubBackend: "",
    },
    challenges:
      "Supporting multiple authentication flows alongside two distinct dashboard experiences for admins and customers meant carefully separating permissions and routes while keeping the codebase maintainable.",
    improvements:
      "Future improvements include adding order tracking notifications, more detailed service analytics for admins, and a refined review moderation system.",
  },
  {
    slug: "library-management",
    name: "Library Management",
    image: "/images/project-1.svg",
    category: "web",
    status: "live",
    featured: false,
    order: 7,
    year: 2024, // TODO: confirm year
    teamType: "solo",
    role: "Full-Stack Developer",
    tags: ["firebase", "rental", "ecommerce", "admin-panel"],
    shortDescription:
      "A responsive platform for buying and renting books, with a full admin panel.",
    description:
      "A fully responsive library management application with Firebase Authentication. Users can buy and rent books through the platform. Admins can view all books, add and remove books, track all book rentals, publish blog posts, and delete unpaid payment records. Users can also chat with the admin panel and with other users renting books from the organization.",
    features: [
      "Firebase Authentication",
      "Buy and rent books",
      "Admin panel: manage books, rentals, blogs, and unpaid payments",
      "Chat between users and admin",
    ],
    techStack: ["React", "Firebase", "React Router"],
    links: {
      github: "",
    },
    challenges:
      "Managing both purchase and rental flows for books within a single consistent data model, while keeping the admin panel's book and payment management simple to use, took several iterations to get right.",
    improvements:
      "I'd like to add due-date reminders for rentals, a recommendation system based on reading history, and search filtering by genre and availability.",
  },
  {
    slug: "flight-scheduler",
    name: "Flight Scheduler",
    image: "/images/project-2.svg",
    category: "oop",
    status: "live",
    featured: false,
    order: 8,
    year: 2024, // TODO: confirm year
    teamType: "solo",
    role: "Developer",
    tags: ["python", "oop", "scheduling", "design"],
    shortDescription:
      "A Python OOP-based system for managing flight creation, bookings, and scheduling.",
    description:
      "A full Python, object-oriented project for managing flights end to end, including flight creation and management, passenger booking and seat allocation, date and time scheduling, and ticket pricing and fare calculation.",
    features: [
      "Flight creation and management",
      "Passenger booking and seat allocation",
      "Date and time scheduling",
      "Ticket pricing and fare calculation",
    ],
    techStack: ["Python", "OOP"],
    links: {
      github: "",
    },
    challenges:
      "Modeling flights, seats, passengers, and fares as clean, reusable classes while keeping the seat allocation and pricing logic accurate and easy to extend was the main design challenge.",
    improvements:
      "Planning to add a persistent database backend, a simple CLI or web interface for interacting with the scheduler, and support for multi-leg itineraries.",
  },
  {
    slug: "django-mart",
    name: "Django Mart",
    image: "/images/project-3.svg",
    category: "web",
    status: "live",
    featured: false,
    order: 9,
    year: 2023, // TODO: confirm year
    teamType: "solo",
    role: "Full-Stack Developer",
    tags: ["django", "ecommerce", "payments"],
    shortDescription:
      "An online shopping website built with Django, featuring categories, cart, and payments.",
    description:
      "An online shopping website built using the Django framework. Users can browse all products organized by different categories, add items to a cart, and complete purchases using integrated payment methods.",
    features: [
      "Browse products by category",
      "Add to cart",
      "Checkout with payment methods",
    ],
    techStack: ["Python", "Django"],
    links: {
      github: "",
    },
    challenges:
      "Structuring the product catalog with categories in a way that kept queries efficient, while wiring up a reliable payment flow, required close attention to Django's ORM and views layer.",
    improvements:
      "Future plans include adding order history for customers, product reviews, and an improved admin interface for managing inventory.",
  },

  /* ================================================================ */
  /* TEMPLATES: copy one block, uncomment, and fill it in.             */
  /* ================================================================ */

  // ---- A) Full-stack web project (separate frontend + backend) ----
  // {
  //   slug: "my-project",
  //   name: "My Project",
  //   image: "/images/project-10.svg",
  //   category: "web",
  //   status: "live",         // "live" | "in-progress" | "archived"
  //   featured: false,
  //   order: 10,
  //   year: 2026,
  //   teamType: "solo",       // "solo" | "team"
  //   role: "Full-Stack Developer",
  //   tags: ["react", "nodejs", "postgres"],
  //   shortDescription: "One line that sells the project.",
  //   description: "What it is, who it is for, and what you built.",
  //   features: ["Feature 1", "Feature 2", "Feature 3"],
  //   techStack: ["React", "Node.js", "Express.js", "PostgreSQL"],
  //   links: {
  //     frontendLive: "https://my-project.vercel.app",
  //     backendLive: "https://my-project-api.onrender.com/docs",
  //     githubFrontend: "https://github.com/you/my-project-client",
  //     githubBackend: "https://github.com/you/my-project-server",
  //     demoVideo: "",
  //   },
  //   challenges: "The hardest technical problem and how you solved it.",
  //   improvements: "What you would add or improve next.",
  // },

  // ---- B) AI/ML project showcase ----
  // {
  //   slug: "my-ml-project",
  //   name: "My ML Project",
  //   image: "/images/project-11.svg",
  //   category: "ai-ml",
  //   status: "live",
  //   featured: true,
  //   order: 11,
  //   year: 2026,
  //   teamType: "solo",
  //   role: "ML Engineer",
  //   tags: ["python", "scikit-learn", "classification"],
  //   shortDescription: "Predicts X from Y with Z% accuracy.",
  //   description: "What the model does, why it matters, and how it is served.",
  //   features: ["Data cleaning pipeline", "Model comparison", "Deployed demo"],
  //   techStack: ["Python", "Pandas", "scikit-learn", "PyTorch", "Streamlit"],
  //   links: {
  //     github: "https://github.com/you/my-ml-project",
  //     frontendLive: "https://huggingface.co/spaces/you/my-ml-project",
  //     demoVideo: "",
  //   },
  //   challenges: "Class imbalance, overfitting, noisy data, and what you did.",
  //   improvements: "More data, better architecture, MLOps, model monitoring.",
  //   aiMl: {
  //     problem: "Detect X from Y to help Z.",
  //     dataset: "Dataset name, 10k samples, 5 classes",
  //     datasetLink: "https://www.kaggle.com/...",
  //     approach: "Cleaned and normalized data, trained a baseline then a CNN, tuned with cross-validation.",
  //     models: ["Logistic Regression", "Random Forest", "CNN"],
  //     metrics: [
  //       { label: "Accuracy", value: "94.2%" },
  //       { label: "F1 Score", value: "0.93" },
  //     ],
  //     resultsSummary: "CNN beat the baseline by 6 accuracy points.",
  //     notebookLink: "https://colab.research.google.com/...",
  //     demoLink: "https://huggingface.co/spaces/...",
  //     modelCardLink: "",
  //   },
  // },

  // ---- C) Mobile app project ----
  // {
  //   slug: "my-mobile-app",
  //   name: "My Mobile App",
  //   image: "/images/project-12.svg",
  //   category: "mobile",
  //   status: "live",
  //   featured: false,
  //   order: 12,
  //   year: 2026,
  //   teamType: "solo",
  //   role: "Mobile Developer",
  //   tags: ["react-native", "expo", "firebase"],
  //   shortDescription: "One line that sells the app.",
  //   description: "What the app does and which platforms it supports.",
  //   features: ["Feature 1", "Feature 2"],
  //   techStack: ["React Native", "Expo", "Firebase"],
  //   links: {
  //     frontendLive: "https://expo.dev/...",
  //     github: "https://github.com/you/my-mobile-app",
  //     demoVideo: "https://youtube.com/...",
  //   },
  //   challenges: "Offline support, push notifications, performance, etc.",
  //   improvements: "Store release, analytics, dark mode, etc.",
  // },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** Projects sorted by the explicit `order` field. */
export function getSortedProjects(list: Project[] = projects) {
  return [...list].sort((a, b) => a.order - b.order);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return getSortedProjects(projects.filter((p) => p.featured));
}

export function getProjectsByCategory(category: ProjectCategory) {
  return getSortedProjects(projects.filter((p) => p.category === category));
}

export function getProjectsByTag(tag: string) {
  return getSortedProjects(projects.filter((p) => p.tags.includes(tag)));
}

/** Unique categories that actually have projects, for filter tabs. */
export function getAllCategories(): ProjectCategory[] {
  return [...new Set(projects.map((p) => p.category))];
}

/** Returns only the links that are filled in, ready to map into buttons. */
export function getVisibleLinks(project: Project) {
  const labels: Record<keyof ProjectLinks, string> = {
    frontendLive: "Live Site",
    backendLive: "Live API",
    githubFrontend: "Frontend Code",
    githubBackend: "Backend Code",
    github: "GitHub",
    demoVideo: "Demo Video",
  };

  return (Object.keys(labels) as (keyof ProjectLinks)[])
    .filter((key) => Boolean(project.links[key]))
    .map((key) => ({
      key,
      label: labels[key],
      href: project.links[key] as string,
    }));
}

/**
 * Checks the data for common mistakes. Call it in a test or at build time.
 * Returns a list of problems; an empty array means the data is valid.
 */
export function validateProjects(list: Project[] = projects): string[] {
  const errors: string[] = [];
  const slugs = new Set<string>();

  for (const p of list) {
    if (slugs.has(p.slug)) errors.push(`Duplicate slug: "${p.slug}"`);
    slugs.add(p.slug);

    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug))
      errors.push(`Slug must be kebab-case: "${p.slug}"`);
    if (!p.name.trim()) errors.push(`Missing name: "${p.slug}"`);
    if (p.techStack.length === 0) errors.push(`No techStack: "${p.slug}"`);
    if (p.category === "ai-ml" && !p.aiMl)
      errors.push(`AI/ML project needs an "aiMl" block: "${p.slug}"`);
    if (p.category !== "ai-ml" && p.aiMl)
      errors.push(`"aiMl" is only for ai-ml projects: "${p.slug}"`);
  }

  return errors;
}
