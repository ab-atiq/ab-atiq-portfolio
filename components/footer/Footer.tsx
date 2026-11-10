import Link from "next/link";
import {
  Facebook,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Twitter,
} from "lucide-react";
import { contact, nav, profile, socials } from "@/data/site";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Facebook,
  Twitter,
};

export default function Footer() {
  return (
    <footer className="border-t border-base-border bg-white dark:border-dark-border dark:bg-dark-bg">
      <div className="container-page grid gap-10 py-12 md:grid-cols-3 md:gap-8">
        <div>
          <Link href="/" className="font-display text-lg font-bold">
            {profile.name_eng}
            <span className="text-accent">.dev</span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-base-muted dark:text-dark-muted">
            {profile.designation}. {profile.tagline}
          </p>
          <div className="mt-5 flex gap-2">
            {socials.map((social) => {
              const Icon =
                socialIcons[social.label as keyof typeof socialIcons];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-base-border text-base-muted transition-colors hover:border-accent hover:text-accent dark:border-dark-border dark:text-dark-muted"
                >
                  <Icon size={17} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide">
            Contact
          </h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-base-muted transition-colors hover:text-accent dark:text-dark-muted"
              >
                <Mail
                  size={17}
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span className="break-all">{contact.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 text-sm text-base-muted transition-colors hover:text-accent dark:text-dark-muted"
              >
                <Phone
                  size={17}
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                />
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-base-muted transition-colors hover:text-accent dark:text-dark-muted"
              >
                <MessageCircle
                  size={17}
                  className="shrink-0 text-accent"
                  aria-hidden="true"
                />
                WhatsApp: {contact.whatsapp}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-wide">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-base-muted transition-colors hover:text-accent dark:text-dark-muted"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-base-border dark:border-dark-border">
        <div className="container-page py-5 text-xs text-base-muted dark:text-dark-muted sm:text-center">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
