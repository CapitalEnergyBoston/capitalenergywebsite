import type { Metadata } from "next";
import { Container, Eyebrow } from "@/app/components/ui";
import { ContactForm } from "@/app/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute energy consultation with Capital Energy, an independent Boston-based advisory.",
};

const details = [
  {
    label: "Email",
    value: "hello@capitalenergy.com",
    href: "mailto:hello@capitalenergy.com",
  },
  {
    label: "Phone",
    value: "(617) 555-0100",
    href: "tel:+16175550100",
  },
  {
    label: "Office",
    value: "Boston, Massachusetts",
  },
  {
    label: "Hours",
    value: "Mon–Fri, 9am–6pm ET",
  },
];

export default function ContactPage() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-display mt-5 text-4xl font-semibold text-ink sm:text-5xl">
              Book your free consultation.
            </h1>
            <p className="mt-5 text-lg text-muted">
              Tell us a little about your organization and what you&apos;re
              trying to solve. We&apos;ll respond within one business day to set
              up a 30-minute call — no obligation, no sales pitch.
            </p>

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
                        className="transition-colors hover:text-brand"
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
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
