import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Reveal from "@/components/ui/Reveal";
import StatusDot from "@/components/ui/StatusDot";
import ContactForm from "@/components/contact/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project or say hi. Rohit Kartik replies within a working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const direct = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Phone", value: site.phone, href: site.phoneHref },
    ...site.socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => ({ label: s.label, value: s.href.replace("https://", ""), href: s.href })),
    { label: "Resume", value: "Download PDF", href: site.resume },
  ];

  return (
    <>
      <PageHeader
        label="Contact"
        lines={[
          <span key="1">
            <span className="text-accent-deep">Let&apos;s</span> build
          </span>,
          <span key="2">
            <span className="italic-accent">something</span>.
          </span>,
        ]}
        intro="A new product, a redesign, an AI feature or a role on your team. Tell me a little about it."
      >
        <StatusDot>Available for new work · reply within a working day</StatusDot>
      </PageHeader>

      <section className="pb-24 md:pb-32">
        <div className="container-x grid gap-16 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <ContactForm />
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 md:col-start-9">
            <p className="text-sm text-ink-soft">Or reach me directly</p>
            <ul className="mt-4 border-t border-line">
              {direct.map((d) => (
                <li key={d.label} className="border-b border-line">
                  <a
                    href={d.href}
                    target={d.href.startsWith("http") || d.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 py-4 transition-colors hover:text-accent"
                  >
                    <span className="text-sm text-ink-soft">{d.label}</span>
                    <span className="truncate text-right">{d.value}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-ink-soft">Based in {site.location}. Working with teams anywhere.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
