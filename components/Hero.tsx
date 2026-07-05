import Image from "next/image";
import Link from "next/link";
import { Mail, Download } from "lucide-react";
import { profile } from "@/data/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white dark:bg-dark-bg"
    >
      <div className="container-page grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-28">
        {/* Text column */}
        <div className="order-2 lg:order-1">
          <span className="section-eyebrow animate-fade-up">
            {profile.eyebrow}
          </span>

          <h1
            className="mt-6 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem] animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            I&apos;m
            <br />
            <span className="text-accent">{profile.name}</span>
          </h1>

          <p
            className="mt-4 font-display text-xl font-semibold text-base-ink/80 sm:text-2xl animate-fade-up dark:text-dark-ink/80"
            style={{ animationDelay: "140ms" }}
          >
            {profile.designation}
          </p>
          <p
            className="mt-2 max-w-md text-base-muted animate-fade-up dark:text-dark-muted"
            style={{ animationDelay: "180ms" }}
          >
            {profile.tagline}
          </p>

          <p
            className="mt-5 max-w-lg text-sm leading-relaxed text-base-muted animate-fade-up dark:text-dark-muted"
            style={{ animationDelay: "220ms" }}
          >
            Passionate about creating clean, user-focused web applications.
            Currently sharpening my MERN stack skills while bringing{" "}
            {profile.yearsExperience} year of professional experience in
            business operations and problem-solving.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: "260ms" }}
          >
            <Link href="/#contact" className="btn-primary">
              Get in Touch <Mail size={16} />
            </Link>
            <a
              href={profile.resumeUrl}
              download
              className="btn-secondary"
            >
              Resume <Download size={16} />
            </a>
          </div>
        </div>

        {/* Photo column */}
        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative animate-pop-in">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent to-accent-pink opacity-90 blur-0" />
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-white shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 dark:border-dark-bg">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                priority
                className="object-cover grayscale"
              />
            </div>

            {/* Floating experience badge */}
            <div className="absolute -right-2 top-6 flex items-center gap-2 rounded-2xl bg-base-ink/90 px-4 py-2 text-white shadow-lg backdrop-blur animate-float-slow dark:bg-dark-section">
              <span className="font-display text-lg font-bold text-accent">
                {profile.yearsExperience}
              </span>
              <span className="text-xs leading-tight">
                years
                <br />
                experience
              </span>
            </div>

            {/* Floating availability badge */}
            {profile.available && (
              <div
                className="absolute -left-4 bottom-8 flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-base-ink shadow-lg animate-float-slow dark:bg-dark-section dark:text-dark-ink"
                style={{ animationDelay: "1.2s" }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Available for work
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
