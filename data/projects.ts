// export type Project = {
//   slug: string;
//   name: string;
//   image: string;
//   shortDescription: string;
//   description: string;
//   techStack: string[];
//   liveLink: string;
//   githubLink: string;
//   challenges: string;
//   improvements: string;
// };

// export const projects: Project[] = [
//   {
//     slug: "ecommerce-storefront",
//     name: "E-Commerce Storefront",
//     image: "/images/project-1.svg",
//     shortDescription:
//       "A full-featured online store with cart, checkout, and an admin dashboard.",
//     description:
//       "A responsive e-commerce storefront built with the MERN stack. Customers can browse products by category, search, add items to a cart, and complete a checkout flow. An admin dashboard lets the store owner manage products, orders, and inventory in real time.",
//     techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
//     liveLink: "https://your-ecommerce-demo.vercel.app",
//     githubLink: "https://github.com/yourusername/ecommerce-storefront-client",
//     challenges:
//       "Keeping cart state in sync between the client and server while handling concurrent stock updates was the trickiest part. I also had to design a flexible product schema in MongoDB that could support variants like size and color without over-complicating queries.",
//     improvements:
//       "Planning to add payment gateway integration (SSLCommerz/Stripe), wishlist functionality, and server-side caching to speed up product listing pages as the catalog grows.",
//   },
//   {
//     slug: "task-management-app",
//     name: "Task Management App",
//     image: "/images/project-2.svg",
//     shortDescription:
//       "A Trello-style drag-and-drop task board for teams to organize their work.",
//     description:
//       "A collaborative task management application with drag-and-drop boards, lists, and cards. Users can create workspaces, invite teammates, assign due dates, and track progress across custom columns like To Do, In Progress, and Done.",
//     techStack: ["React", "Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
//     liveLink: "https://your-task-app-demo.vercel.app",
//     githubLink: "https://github.com/yourusername/task-management-client",
//     challenges:
//       "Implementing smooth drag-and-drop interactions that also persisted the new order to the database without noticeable lag was the biggest challenge, along with designing a permissions system for shared workspaces.",
//     improvements:
//       "Future plans include real-time collaboration with WebSockets, activity logs per card, and a calendar view for deadlines.",
//   },
//   {
//     slug: "recipe-sharing-platform",
//     name: "Recipe Sharing Platform",
//     image: "/images/project-3.svg",
//     shortDescription:
//       "A community platform where users can publish, rate, and save recipes.",
//     description:
//       "A social platform for food lovers to publish recipes with step-by-step instructions and photos, rate other users' recipes, and save favorites to a personal collection. Includes search and filtering by cuisine, prep time, and ingredients.",
//     techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
//     liveLink: "https://your-recipe-app-demo.vercel.app",
//     githubLink: "https://github.com/yourusername/recipe-platform-client",
//     challenges:
//       "Building a flexible search and filter system that stayed fast as the number of recipes grew required careful indexing in MongoDB. Handling image uploads securely and efficiently was another hurdle I solved with client-side compression before upload.",
//     improvements:
//       "I'd like to add a nutrition-facts calculator, user following/feed system, and offline support with a progressive web app shell.",
//   },
// ];

// export function getProjectBySlug(slug: string) {
//   return projects.find((p) => p.slug === slug);
// }

export type Project = {
  slug: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  challenges: string;
  improvements: string;
};

export const projects: Project[] = [
  {
    slug: "prostream",
    name: "ProStream (Streaming Site)",
    image: "/images/project-1.svg",
    shortDescription:
      "A live streaming platform with real-time chat and a tipping system, built as a team project.",
    description:
      "A live streaming platform with real-time chat and tip functionality, built with React, Django, and deployed on AWS. Implemented the full frontend as a responsive web application for desktop, tablet, and mobile, and collaborated closely with the backend team to integrate the Agora service for live video with a secure API implementation. Also implemented the SSLCommerz payment gateway so viewers can tip streamers during live streams, with an efficient withdrawal process for streamers.",
    techStack: [
      "React",
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "AWS EC2",
    ],
    liveLink: "",
    githubLink: "",
    challenges:
      "Integrating Agora's real-time streaming service securely from the frontend while coordinating closely with the backend team was the biggest challenge. Implementing the SSLCommerz payment gateway for in-stream tipping and building a reliable withdrawal flow for streamers also required careful handling of edge cases, and I wrote detailed API tests to keep the various flows robust and reliable.",
    improvements:
      "Future plans include adding more granular analytics for streamers, expanding the chat with moderation tools, and further optimizing video performance across devices.",
  },
  {
    slug: "issue-tracker-app",
    name: "Issue Tracker App",
    image: "/images/project-2.svg",
    shortDescription:
      "A responsive issue tracking app with authentication, search, and issue management.",
    description:
      "An issue tracker application featuring user authentication and authorization, the ability to create, view, and manage issues, and search functionality to quickly find relevant items. Built with a fully responsive design so it works well on mobile devices as well as desktop.",
    techStack: ["TypeScript", "Next.js", "Tailwind CSS", "Prisma", "Zod"],
    liveLink: "",
    githubLink: "",
    challenges:
      "Designing a clean data model with Prisma that supported issue statuses and ownership, while validating all incoming data with Zod, required careful planning to keep the API both type-safe and easy to extend.",
    improvements:
      "I'd like to add filtering and sorting on the issue list, email notifications for status changes, and role-based permissions for teams.",
  },
  {
    slug: "easy-rent",
    name: "Easy Rent (Rental Vehicle Platform)",
    image: "/images/project-3.svg",
    shortDescription:
      "A rental vehicle platform where users can take driving courses and rent vehicles, built as a team project.",
    description:
      "A fully responsive vehicle rental application with Firebase Authentication, React Router, and Material UI. Users can purchase driving courses and rent vehicles through the platform. Admins can view all vehicles, add or remove vehicles, see all course and vehicle orders, publish blog posts, and delete unpaid payment records. Users can also chat with the admin panel and with other renters on the platform.",
    techStack: ["React", "React Router", "Material UI", "Redux", "Firebase"],
    liveLink: "",
    githubLink: "",
    challenges:
      "Building a real-time chat system between users and the admin panel alongside a full rental and course-booking flow required careful state management with Redux, plus handling unpaid or abandoned orders cleanly on the admin side.",
    improvements:
      "Planning to add automated payment reminders, a ratings system for vehicles and instructors, and improved admin analytics for orders and revenue.",
  },
  {
    slug: "airplane-website",
    name: "Airplane Website",
    image: "/images/project-4.svg",
    shortDescription:
      "A MERN stack service and e-commerce platform with separate admin and customer dashboards.",
    description:
      "A fully responsive MERN stack application for airplane-related services with multiple authentication systems, with all data loaded from the database. It includes separate dashboard functionality for admins and customers: admins can manage all orders, add or remove services, and promote users to admin, while logged-in customers can place orders, view their orders, and add and view reviews.",
    techStack: ["React", "React Router", "Express.js", "MongoDB", "Firebase"],
    liveLink: "",
    githubLink: "",
    challenges:
      "Supporting multiple authentication flows alongside two distinct dashboard experiences for admins and customers meant carefully separating permissions and routes while keeping the codebase maintainable.",
    improvements:
      "Future improvements include adding order tracking notifications, more detailed service analytics for admins, and a refined review moderation system.",
  },
  {
    slug: "library-management",
    name: "Library Management",
    image: "/images/project-5.svg",
    shortDescription:
      "A responsive platform for buying and renting books, with a full admin panel.",
    description:
      "A fully responsive library management application with Firebase Authentication. Users can buy and rent books through the platform. Admins can view all books, add and remove books, track all book rentals, publish blog posts, and delete unpaid payment records. Users can also chat with the admin panel and with other users renting books from the organization.",
    techStack: ["React", "Firebase", "React Router"],
    liveLink: "",
    githubLink: "",
    challenges:
      "Managing both purchase and rental flows for books within a single consistent data model, while keeping the admin panel's book and payment management simple to use, took several iterations to get right.",
    improvements:
      "I'd like to add due-date reminders for rentals, a recommendation system based on reading history, and search filtering by genre and availability.",
  },
  {
    slug: "flight-scheduler",
    name: "Flight Scheduler",
    image: "/images/project-6.svg",
    shortDescription:
      "A Python OOP-based system for managing flight creation, bookings, and scheduling.",
    description:
      "A full Python, object-oriented project for managing flights end to end, including flight creation and management, passenger booking and seat allocation, date and time scheduling, and ticket pricing and fare calculation.",
    techStack: ["Python", "OOP"],
    liveLink: "",
    githubLink: "",
    challenges:
      "Modeling flights, seats, passengers, and fares as clean, reusable classes while keeping the seat allocation and pricing logic accurate and easy to extend was the main design challenge.",
    improvements:
      "Planning to add a persistent database backend, a simple CLI or web interface for interacting with the scheduler, and support for multi-leg itineraries.",
  },
  {
    slug: "django-mart",
    name: "Django Mart",
    image: "/images/project-7.svg",
    shortDescription:
      "An online shopping website built with Django, featuring categories, cart, and payments.",
    description:
      "An online shopping website built using the Django framework. Users can browse all products organized by different categories, add items to a cart, and complete purchases using integrated payment methods.",
    techStack: ["Python", "Django"],
    liveLink: "",
    githubLink: "",
    challenges:
      "Structuring the product catalog with categories in a way that kept queries efficient, while wiring up a reliable payment flow, required close attention to Django's ORM and views layer.",
    improvements:
      "Future plans include adding order history for customers, product reviews, and an improved admin interface for managing inventory.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
