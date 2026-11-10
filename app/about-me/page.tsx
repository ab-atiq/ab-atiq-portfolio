import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Download, MapPin } from "lucide-react";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Journey from "@/components/journey/Journey";
import Skills from "@/components/skill/Skills";
import { profile } from "@/data/site";

export const metadata: Metadata = {
  title: "About Me",
  description: `Learn about ${profile.name}, including his background, education, experience, skills, and contact information.`,
};

export default function AboutMePage() {
  return (
    <>
      <section className="pb-16 pt-28 sm:pb-20 sm:pt-36">
        <div className="container-page">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,360px)] md:gap-16">
            <div>
              <span className="section-eyebrow">Get to know me</span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                I&apos;m {profile.name_eng}
              </h1>
              <p className="mt-4 text-xl font-semibold text-accent">
                {profile.designation}
              </p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-base-muted dark:text-dark-muted sm:text-lg">
                {profile.tagline}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-base-muted dark:text-dark-muted">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} className="text-accent" aria-hidden="true" />
                  {profile.location}
                </span>
                <span>
                  {profile.yearsExperience}+ years of experience
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#contact" className="btn-primary">
                  Get in touch <ArrowDown size={16} aria-hidden="true" />
                </Link>
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  View my resume <Download size={16} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[320px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-accent/10 blur-2xl" />
              <div className="card relative overflow-hidden p-2">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} — ${profile.designation}`}
                  width={640}
                  height={800}
                  priority
                  className="aspect-[4/5] w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Journey />
      <Skills />
      <Contact />
    </>
  );
}
