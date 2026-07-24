import { Marquee } from "@/app/components/ui";
import { testimonials, type Testimonial } from "@/app/content";

function initials(name: string) {
  return name
    .replace(/^Major\s+/, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="mx-3 flex h-full w-[20rem] shrink-0 flex-col justify-between rounded-2xl border border-line bg-surface p-7 sm:w-[24rem]">
      <blockquote className="text-[15px] leading-relaxed text-ink">
        <span className="font-display mr-1 text-2xl leading-none text-accent">
          &ldquo;
        </span>
        {t.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-xs font-semibold text-white">
          {initials(t.name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-ink">
            {t.name}
          </span>
          <span className="block truncate text-xs text-muted">{t.title}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function TestimonialMarquee() {
  return (
    <Marquee duration={55} className="py-2">
      {testimonials.map((t) => (
        <Card key={t.name} t={t} />
      ))}
    </Marquee>
  );
}
