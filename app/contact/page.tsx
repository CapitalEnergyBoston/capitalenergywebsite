import type { Metadata } from "next";
import { Reveal } from "@/app/components/motion";
import { Container, Eyebrow } from "@/app/components/ui";
import { ContactForm } from "@/app/components/contact-form";
import { contact } from "@/app/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk with Capital Energy about brand, story, and go-to-market for your climate tech company — or ask about the CapEnergy Insights beta.",
};

const details = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "Phone", value: contact.phone, href: `tel:${contact.phoneHref}` },
  { label: "Studio", value: contact.address },
  { label: "Hours", value: "Mon–Fri, 9am–6pm ET" },
];

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div
        aria-hidden
        className="animate-drift-slow pointer-events-none absolute -right-24 top-10 -z-10 h-96 w-96 rounded-full bg-accent/12 blur-3xl"
      />
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl">
                Let&apos;s chat.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">
                Building from scratch or scaling fast, we&apos;d love to hear
                what you&apos;re working on — and how you want the world to
                understand it. Ask us anything, including about the CapEnergy
                Insights beta.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <dl className="mt-10 space-y-6">
                {details.map((d) => (
                  <div key={d.label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      {d.label}
                    </dt>
                    <dd className="mt-1 text-lg text-ink">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="transition-colors hover:text-accent-600"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
