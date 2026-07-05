import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";

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
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent-dark dark:bg-accent/15 dark:text-accent-pink"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-4">
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Live Project <ExternalLink size={16} />
          </a>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub (Client) <Github size={16} />
          </a>
        </div>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="font-display text-xl font-semibold">Overview</h2>
            <p className="mt-2 leading-relaxed text-base-ink/80 dark:text-dark-ink/80">
              {project.description}
            </p>
          </div>

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
