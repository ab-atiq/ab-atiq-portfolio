import { Mail, Phone, MessageCircle } from "lucide-react";
import { contact } from "@/data/site";
import SectionHeading from "../SectionHeading";

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

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
          {cards.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.label === "WhatsApp" ? "_blank" : undefined}
              rel={c.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              className="card flex flex-col items-center gap-3 p-6 text-center transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent-dark dark:bg-accent/15 dark:text-accent-pink">
                <c.icon size={20} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-base-muted dark:text-dark-muted">
                  {c.label}
                </p>
                <p className="mt-1 break-all text-sm font-medium text-base-ink dark:text-dark-ink">
                  {c.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={`mailto:${contact.email}`} className="btn-primary">
            Say Hello <Mail size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
