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
    slug: "ecommerce-storefront",
    name: "E-Commerce Storefront",
    image: "/images/project-1.svg",
    shortDescription:
      "A full-featured online store with cart, checkout, and an admin dashboard.",
    description:
      "A responsive e-commerce storefront built with the MERN stack. Customers can browse products by category, search, add items to a cart, and complete a checkout flow. An admin dashboard lets the store owner manage products, orders, and inventory in real time.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://your-ecommerce-demo.vercel.app",
    githubLink: "https://github.com/yourusername/ecommerce-storefront-client",
    challenges:
      "Keeping cart state in sync between the client and server while handling concurrent stock updates was the trickiest part. I also had to design a flexible product schema in MongoDB that could support variants like size and color without over-complicating queries.",
    improvements:
      "Planning to add payment gateway integration (SSLCommerz/Stripe), wishlist functionality, and server-side caching to speed up product listing pages as the catalog grows.",
  },
  {
    slug: "task-management-app",
    name: "Task Management App",
    image: "/images/project-2.svg",
    shortDescription:
      "A Trello-style drag-and-drop task board for teams to organize their work.",
    description:
      "A collaborative task management application with drag-and-drop boards, lists, and cards. Users can create workspaces, invite teammates, assign due dates, and track progress across custom columns like To Do, In Progress, and Done.",
    techStack: ["React", "Next.js", "Express.js", "MongoDB", "Tailwind CSS"],
    liveLink: "https://your-task-app-demo.vercel.app",
    githubLink: "https://github.com/yourusername/task-management-client",
    challenges:
      "Implementing smooth drag-and-drop interactions that also persisted the new order to the database without noticeable lag was the biggest challenge, along with designing a permissions system for shared workspaces.",
    improvements:
      "Future plans include real-time collaboration with WebSockets, activity logs per card, and a calendar view for deadlines.",
  },
  {
    slug: "recipe-sharing-platform",
    name: "Recipe Sharing Platform",
    image: "/images/project-3.svg",
    shortDescription:
      "A community platform where users can publish, rate, and save recipes.",
    description:
      "A social platform for food lovers to publish recipes with step-by-step instructions and photos, rate other users' recipes, and save favorites to a personal collection. Includes search and filtering by cuisine, prep time, and ingredients.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
    liveLink: "https://your-recipe-app-demo.vercel.app",
    githubLink: "https://github.com/yourusername/recipe-platform-client",
    challenges:
      "Building a flexible search and filter system that stayed fast as the number of recipes grew required careful indexing in MongoDB. Handling image uploads securely and efficiently was another hurdle I solved with client-side compression before upload.",
    improvements:
      "I'd like to add a nutrition-facts calculator, user following/feed system, and offline support with a progressive web app shell.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
