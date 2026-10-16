"use client";

import { useState } from "react";
import { Chevron } from "@/components/ui/Button";
import { site } from "@/content/site";

const topics = ["Website", "Web app", "Product design", "AI integration", "3D / interactive", "Full-time role", "Something else"];

type Status = "idle" | "sending" | "success" | "error";

const field =
  "w-full border-b border-line bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-ink-soft/60 focus:border-accent";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [topic, setTopic] = useState<string[]>([]);

  const toggle = (t: string) => setTopic((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch(site.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, topic: topic.join(", ") }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setTopic([]);
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-paper-2 p-10 md:p-14" role="status">
        <p className="text-h2">
          Thanks, <span className="italic-accent">talk soon</span>.
        </p>
        <p className="mt-4 text-ink-soft">Your message is in. I&apos;ll reply within a working day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm underline underline-offset-4 hover:text-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-10">
      <fieldset>
        <legend className="mb-4 text-sm text-ink-soft">What&apos;s it about?</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => {
            const on = topic.includes(t);
            return (
              <button
                key={t}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(t)}
                className={`inline-flex items-center gap-2 rounded-full border py-2 pl-4 pr-2 text-sm transition-colors ${
                  on ? "border-navy bg-navy text-on-navy" : "border-line hover:border-accent"
                }`}
              >
                {t}
                <span
                  aria-hidden="true"
                  className={`relative grid size-6 place-items-center rounded-full transition-transform duration-300 ${
                    on ? "rotate-45 bg-accent text-navy" : "bg-paper-2"
                  }`}
                >
                  <span className="absolute h-px w-2.5 bg-current" />
                  <span className="absolute h-2.5 w-px bg-current" />
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid gap-6 md:grid-cols-2">
        <label className="block">
          <span className="sr-only">Your name</span>
          <input name="name" required autoComplete="name" placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="sr-only">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email address" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="sr-only">Message</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell me about the project, timeline and anything else useful"
          className={`${field} resize-none`}
        />
      </label>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-14 items-center gap-4 rounded-full bg-navy pl-7 pr-1.5 font-medium text-on-navy transition-colors hover:bg-navy-2 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
          <span className="grid size-11 place-items-center rounded-full bg-accent text-navy transition-transform duration-500 group-hover:rotate-[360deg]">
            <Chevron />
          </span>
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-red-600">
            Something went wrong. Email me directly at {site.email}.
          </p>
        )}
      </div>
    </form>
  );
}
