import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project, ProjectCategory, ProjectStatus } from "@/data/projects";

const categoryLabels: Record<ProjectCategory, string> = {
  web: "Web",
  mobile: "Mobile",
  backend: "Backend",
  oop: "OOP",
  "ai-ml": "AI / ML",
};

const statusLabels: Record<ProjectStatus, string> = {
  live: "Live",
  "in-progress": "In progress",
  archived: "Archived",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card group flex flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-dark dark:bg-accent/15 dark:text-accent-pink">
            {categoryLabels[project.category]}
          </span>
          <span className="rounded-full border border-base-border px-3 py-1 text-xs font-medium text-base-muted dark:border-dark-border dark:text-dark-muted">
            {statusLabels[project.status]}
          </span>
          <span className="rounded-full border border-base-border px-3 py-1 text-xs font-medium text-base-muted dark:border-dark-border dark:text-dark-muted">
            {project.year}
          </span>
        </div>
        <h3 className="mt-4 font-display text-lg font-semibold">{project.name}</h3>
        <p className="mt-1 text-xs font-medium text-base-muted dark:text-dark-muted">
          {project.role} · {project.teamType === "team" ? "Team project" : "Solo project"}
        </p>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-base-muted dark:text-dark-muted">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-dark dark:bg-accent/15 dark:text-accent-pink"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.tags.length > 0 && (
          <p className="mt-3 text-xs text-base-muted dark:text-dark-muted">
            {project.tags.slice(0, 3).join(" · ")}
          </p>
        )}
        <Link
          href={`/projects/${project.slug}`}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:gap-2.5 transition-all"
        >
          View More <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
