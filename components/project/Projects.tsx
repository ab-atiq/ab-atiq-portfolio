import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "../SectionHeading";

export default function Projects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A handpicked selection of projects I'm proud of. Explore the full collection by category."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects" className="btn-secondary">
            View all projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
