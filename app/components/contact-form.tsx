"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "@/app/components/ui";

/*
  HubSpot wiring (do this when the CRM account is ready):

  1. In HubSpot, create a form and copy its Portal ID + Form ID.
  2. Set these in your host env (Vercel project settings or a .env.local):
       NEXT_PUBLIC_HUBSPOT_PORTAL_ID=xxxxxxx
       NEXT_PUBLIC_HUBSPOT_FORM_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
  3. This component already POSTs to the HubSpot Forms API when both are set;
     until then it runs in "demo" mode and just shows the success state.
  Field names below (firstname, lastname, email, company, phone, message)
  match HubSpot's default contact properties, so they map with no extra config.
*/

const PORTAL_ID = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
const FORM_ID = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

type Status = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Demo mode: no HubSpot IDs configured yet.
    if (!PORTAL_ID || !FORM_ID) {
      await new Promise((r) => setTimeout(r, 600));
      setStatus("success");
      form.reset();
      return;
    }

    try {
      const fields = ["firstname", "lastname", "email", "company", "phone", "message"].map(
        (name) => ({ name, value: String(data.get(name) ?? "") })
      );

      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields,
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      );

      if (!res.ok) throw new Error(`HubSpot responded ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-surface p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent-600">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
            <path
              d="m5 13 4 4L19 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="font-display mt-5 text-2xl font-semibold text-ink">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-muted">
          Someone from Capital Energy will get back to you within one business
          day to find a time to talk.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-navy hover:text-accent-600"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-soft rounded-2xl border border-line bg-surface p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstname" className={labelClass}>
            First name
          </label>
          <input
            id="firstname"
            name="firstname"
            required
            autoComplete="given-name"
            className={fieldClass}
            placeholder="Jordan"
          />
        </div>
        <div>
          <label htmlFor="lastname" className={labelClass}>
            Last name
          </label>
          <input
            id="lastname"
            name="lastname"
            required
            autoComplete="family-name"
            className={fieldClass}
            placeholder="Rivera"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
            placeholder="jordan@company.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="text-muted">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={fieldClass}
            placeholder="(617) 555-0100"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="company" className={labelClass}>
            Company / organization
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            className={fieldClass}
            placeholder="Acme Manufacturing"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={`${fieldClass} resize-y`}
            placeholder="Tell us about your company, stage, and what you're trying to say…"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">
          Something went wrong sending your message. Please email us directly at{" "}
          <a href="mailto:ted@capitalenergy.io" className="underline">
            ted@capitalenergy.io
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-700 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
        {status !== "submitting" && <ArrowIcon />}
      </button>
      <p className="mt-4 text-xs text-muted">
        By submitting, you agree to be contacted about your inquiry. We never
        share your information.
      </p>
    </form>
  );
}
