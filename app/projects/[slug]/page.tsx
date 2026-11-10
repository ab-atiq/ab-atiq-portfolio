import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import {
  getProjectBySlug,
  getVisibleLinks,
  projects,
  type ProjectCategory,
  type ProjectStatus,
} from "@/data/projects";

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

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const links = getVisibleLinks(project);
  const aiMlLinks = project.aiMl
    ? [
        { label: "Dataset", href: project.aiMl.datasetLink },
        { label: "Notebook", href: project.aiMl.notebookLink },
        { label: "Model Demo", href: project.aiMl.demoLink },
        { label: "Model Card", href: project.aiMl.modelCardLink },
      ].filter((link): link is { label: string; href: string } => Boolean(link.href))
    : [];

  return (
    <article className="py-16 sm:py-20">
      <div className="container-page max-w-4xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-base-muted hover:text-accent dark:text-dark-muted"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl2 sm:h-96">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover"
          />
        </div>

        <h1 className="mt-8 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {project.name}
        </h1>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            categoryLabels[project.category],
            statusLabels[project.status],
            String(project.year),
            project.teamType === "team" ? "Team project" : "Solo project",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-dark dark:bg-accent/15 dark:text-accent-pink"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="mt-4 text-sm font-medium text-base-muted dark:text-dark-muted">
          {project.role}
        </p>

        {(links.length > 0 || aiMlLinks.length > 0) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {link.label} <ExternalLink size={16} />
              </a>
            ))}
            {aiMlLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {link.label} <ExternalLink size={16} />
              </a>
            ))}
          </div>
        )}

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold">Overview</h2>
            <p className="mt-2 leading-relaxed text-base-ink/80 dark:text-dark-ink/80">
              {project.description}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">Key Features</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-base-ink/80 dark:text-dark-ink/80">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">Tech Stack</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-dark dark:bg-accent/15 dark:text-accent-pink"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.tags.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold">Topics</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-base-border px-3 py-1 text-xs text-base-muted dark:border-dark-border dark:text-dark-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.aiMl && (
            <div>
              <h2 className="font-display text-xl font-semibold">
                AI / ML Showcase
              </h2>
              <div className="mt-4 space-y-5 leading-relaxed text-base-ink/80 dark:text-dark-ink/80">
                <div>
                  <h3 className="font-semibold text-base-ink dark:text-dark-ink">
                    Problem
                  </h3>
                  <p className="mt-1">{project.aiMl.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-base-ink dark:text-dark-ink">
                    Dataset
                  </h3>
                  <p className="mt-1">{project.aiMl.dataset}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-base-ink dark:text-dark-ink">
                    Approach
                  </h3>
                  <p className="mt-1">{project.aiMl.approach}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-base-ink dark:text-dark-ink">
                    Models
                  </h3>
                  <ul className="mt-1 list-disc pl-5">
                    {project.aiMl.models.map((model) => (
                      <li key={model}>{model}</li>
                    ))}
                  </ul>
                </div>
                {project.aiMl.metrics.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-base-ink dark:text-dark-ink">
                      Metrics
                    </h3>
                    <dl className="mt-2 grid gap-3 sm:grid-cols-2">
                      {project.aiMl.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-lg border border-base-border p-3 dark:border-dark-border"
                        >
                          <dt className="text-sm">{metric.label}</dt>
                          <dd className="mt-1 font-semibold text-base-ink dark:text-dark-ink">
                            {metric.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
                {project.aiMl.resultsSummary && (
                  <p className="font-medium">{project.aiMl.resultsSummary}</p>
                )}
              </div>
            </div>
          )}

          <div>
            <h2 className="font-display text-xl font-semibold">Challenges</h2>
            <p className="mt-2 leading-relaxed text-base-ink/80 dark:text-dark-ink/80">
              {project.challenges}
            </p>
          </div>

          <div>
            <h2 className="font-display text-xl font-semibold">
              Future Improvements
            </h2>
            <p className="mt-2 leading-relaxed text-base-ink/80 dark:text-dark-ink/80">
              {project.improvements}
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
