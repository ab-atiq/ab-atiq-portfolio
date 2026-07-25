import { Github, Linkedin, Twitter, Facebook } from "lucide-react";
import { profile, socials } from "@/data/site";
import SectionHeading from "../SectionHeading";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
};

export default function About() {
  return (
    <section id="about" className="bg-base-section py-20 dark:bg-dark-section sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="About Me"
          title="A little about my story"
          description="How I got here, what I enjoy building, and what I do when I'm away from the keyboard."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-5">
          {profile.bio.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-relaxed text-base-ink/80 dark:text-dark-ink/80"
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {socials.map((s) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-base-border bg-white text-base-ink transition-all hover:-translate-y-1 hover:border-accent hover:text-accent dark:border-dark-border dark:bg-dark-bg dark:text-dark-ink"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
