import type { Metadata } from "next";
import { getProjectsByCategory, type ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "All Projects",
};

const projectSections: {
  category: ProjectCategory;
  title: string;
  description: string;
  emptyMessage: string;
}[] = [
  {
    category: "web",
    title: "Web Projects",
    description: "Websites and full-stack experiences built for the browser.",
    emptyMessage: "New web experiences are in the works. Check back soon!",
  },
  {
    category: "mobile",
    title: "Apps",
    description: "Mobile apps made to be useful wherever you go.",
    emptyMessage: "The next app is taking shape. Stay tuned for its debut!",
  },
  {
    category: "backend",
    title: "Backend Projects",
    description: "APIs, services, and the systems powering great products.",
    emptyMessage: "Something is brewing behind the scenes. Backend projects coming soon!",
  },
  {
    category: "oop",
    title: "OOP & Systems",
    description: "Object-oriented programming, problem solving, and system design.",
    emptyMessage: "A new problem-solving project is on the horizon. Check back soon!",
  },
  {
    category: "ai-ml",
    title: "AI & Machine Learning",
    description: "Experiments and practical projects exploring intelligent systems.",
    emptyMessage: "AI experiments are underway. Watch this space for what I build next!",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="All Projects"
          description="Explore projects by discipline, from web experiences to systems and AI."
        />

        <div className="mt-14 space-y-16 sm:mt-16 sm:space-y-20">
          {projectSections.map((section) => {
            const projects = getProjectsByCategory(section.category);

            return (
              <section
                key={section.category}
                id={`category-${section.category}`}
                aria-labelledby={`heading-${section.category}`}
              >
                <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2
                      id={`heading-${section.category}`}
                      className="font-display text-2xl font-bold tracking-tight sm:text-3xl"
                    >
                      {section.title}
                    </h2>
                    <p className="mt-2 text-sm text-base-muted dark:text-dark-muted">
                      {section.description}
                    </p>
                  </div>
                  <span className="w-fit rounded-full border border-base-border px-3 py-1 text-xs font-medium text-base-muted dark:border-dark-border dark:text-dark-muted">
                    {projects.length} {projects.length === 1 ? "project" : "projects"}
                  </span>
                </div>

                {projects.length > 0 ? (
                  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="relative overflow-hidden rounded-xl2 border border-dashed border-accent/40 bg-accent-soft/50 px-6 py-10 text-center dark:bg-accent/5 sm:px-10 sm:py-12">
                    <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />
                    <div className="relative mx-auto flex max-w-xl flex-col items-center">
                      <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-accent shadow-sm dark:bg-dark-section">
                        <Sparkles size={22} aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-lg font-semibold">
                        Good things are in the works
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-base-muted dark:text-dark-muted">
                        {section.emptyMessage}
                      </p>
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
