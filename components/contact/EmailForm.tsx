"use client";

import { FormEvent } from "react";
import { Send } from "lucide-react";
import { contact } from "@/data/site";

export default function EmailForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") ?? "").trim();
    const body = String(formData.get("body") ?? "").trim();
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
      <div>
        <label
          htmlFor="email-subject"
          className="mb-2 block text-sm font-semibold"
        >
          Subject
        </label>
        <input
          id="email-subject"
          name="subject"
          type="text"
          required
          maxLength={150}
          placeholder="What would you like to discuss?"
          className="w-full rounded-xl border border-base-border bg-white px-4 py-3 text-sm text-base-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-dark-border dark:bg-dark-bg dark:text-dark-ink"
        />
      </div>

      <div>
        <label
          htmlFor="email-body"
          className="mb-2 block text-sm font-semibold"
        >
          Message
        </label>
        <textarea
          id="email-body"
          name="body"
          required
          rows={7}
          maxLength={5000}
          placeholder="Write your message here..."
          className="w-full resize-y rounded-xl border border-base-border bg-white px-4 py-3 text-sm leading-relaxed text-base-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20 dark:border-dark-border dark:bg-dark-bg dark:text-dark-ink"
        />
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-base-muted dark:text-dark-muted">
          This opens your email app with the message ready to send.
        </p>
        <button type="submit" className="btn-primary shrink-0">
          Send email <Send size={16} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
