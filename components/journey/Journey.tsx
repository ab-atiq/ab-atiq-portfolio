import type { ElementType } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { education, experience } from "@/data/site";
import SectionHeading from "../SectionHeading";

function TimelineList({
  items,
  icon: Icon,
}: {
  items: {
    title: string;
    subtitle: string;
    duration: string;
    description?: string;
  }[];
  icon: ElementType;
}) {
  return (
    <ol className="relative space-y-8 border-l border-base-border pl-6 dark:border-dark-border">
      {items.map((item, i) => (
        <li key={i} className="relative">
          <span className="absolute -left-[31px] flex h-7 w-7 items-center justify-center rounded-full bg-accent-soft text-accent-dark dark:bg-accent/15 dark:text-accent-pink">
            <Icon size={14} />
          </span>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">
            {item.duration}
          </p>
          <h4 className="mt-1 font-display text-base font-semibold">
            {item.title}
          </h4>
          <p className="text-sm text-base-muted dark:text-dark-muted">
            {item.subtitle}
          </p>
          {item.description && (
            <p className="mt-2 text-sm leading-relaxed text-base-ink/75 dark:text-dark-ink/75">
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="bg-base-section py-20 dark:bg-dark-section sm:py-28"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Journey"
          title="Education & Experience"
          description="The path that shaped how I think about building software."
        />

        <div className="mt-14 grid gap-12 grid-cols-1">
          <div>
            <h3 className="mb-6 flex items-center gap-2 font-display text-xl font-bold">
              <Briefcase className="text-accent" size={22} />
              Experience
            </h3>
            <TimelineList
              icon={Briefcase}
              items={experience.map((e) => ({
                title: e.role,
                subtitle: e.company,
                duration: e.duration,
                description: e.description,
              }))}
            />
          </div>

          <div>
            <h3 className="mt-14 mb-6 flex items-center gap-2 font-display text-xl font-bold">
              <GraduationCap className="text-accent" size={22} />
              Education
            </h3>
            <TimelineList
              icon={GraduationCap}
              items={education.map((e) => ({
                title: e.degree,
                subtitle: e.institution,
                duration: e.duration,
                description: e.description,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
