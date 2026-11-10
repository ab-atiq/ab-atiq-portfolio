import { Mail, Phone, MessageCircle } from "lucide-react";
import { contact } from "@/data/site";
import SectionHeading from "../SectionHeading";
import EmailForm from "./EmailForm";

export default function Contact() {
  const cards = [
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsapp,
      href: `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`,
    },
  ];

  return (
    <section id="contact" className="bg-base-section py-20 dark:bg-dark-section sm:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind, or just want to say hi? Reach out through any of the channels below."
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:items-start">
          <div>
            <h3 className="mb-4 font-display text-xl font-semibold">
              Send me a message
            </h3>
            <EmailForm />
          </div>

          <aside>
            <h3 className="mb-4 font-display text-xl font-semibold">
              Other ways to reach me
            </h3>
            <div className="space-y-4">
              {cards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.label === "WhatsApp" ? "_blank" : undefined}
                  rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                  className="card flex items-center gap-4 p-5 transition-transform hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-dark dark:bg-accent/15 dark:text-accent-pink">
                    <c.icon size={20} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-base-muted dark:text-dark-muted">
                      {c.label}
                    </span>
                    <span className="mt-1 block break-all text-sm font-medium text-base-ink dark:text-dark-ink">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-base-muted dark:text-dark-muted">
              Prefer a direct email?{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-semibold text-accent hover:underline"
              >
                {contact.email}
              </a>
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
