import { skills } from "@/data/site";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="Technologies and tools I use to design, build, and ship web applications."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.category} className="card p-6">
              <h3 className="font-display text-lg font-semibold text-accent">
                {group.category}
              </h3>
              <div className="mt-5 space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-medium text-base-ink dark:text-dark-ink">
                        {skill.name}
                      </span>
                      <span className="text-base-muted dark:text-dark-muted">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-base-section dark:bg-dark-bg">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-pink"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
