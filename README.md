# Capital Energy

Marketing site for **Capital Energy** — a Somerville, MA marketing partner that helps
climate tech and energy startups translate complex work into compelling brands.

Built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **Motion** (Framer
Motion) for animation. Output as a fully static site so it can be hosted on GitHub
Pages today and moved to Vercel later with no code changes.

## Local development

```bash
npm install
npm run dev
```

The site runs at http://localhost:3000.

## Build

```bash
npm run build
```

Produces a static export in `out/` — plain HTML/CSS/JS, no server required.

## Design

- **Brand:** navy + steel blue derived from the real Capital Energy logo, with a mint
  "energy" accent. Tokens live in [`app/globals.css`](app/globals.css).
- **Type:** Space Grotesk (display) + Inter (body).
- **Motion:** scroll-reveal, staggered entrances, count-up stats, infinite marquees,
  and drifting gradient meshes. All motion respects `prefers-reduced-motion`.

## Project structure

```
app/
  layout.tsx              Root layout: fonts, metadata, header + footer
  page.tsx                Home (animated hero, marquee, services, work, testimonials)
  services/page.tsx       Services — Smart Strategy / Bold Stories / Real Impact
  work/page.tsx           Portfolio grid of client projects
  insights/page.tsx       CapEnergy Insights (beta) messaging-intelligence product
  about/page.tsx          About — story + values
  contact/page.tsx        Contact — real info + HubSpot-ready form
  content.tsx             Single source of truth: contact, socials, services,
                          projects, testimonials
  components/
    site-header.tsx       Sticky nav + mobile menu
    site-footer.tsx       CTA strip + footer
    home-hero.tsx         Animated hero
    motion.tsx            Reveal / Stagger / Counter primitives (Motion)
    testimonials.tsx      Testimonial marquee
    contact-form.tsx      Lead form (HubSpot-ready — see below)
    logo.tsx, ui.tsx      Logo, buttons, container, marquee
public/
  brand/                  Logo
  work/                   Client project imagery
```

## Deployment

### GitHub Pages (current)

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to GitHub Pages. One-time setup:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main`. The site publishes to
   `https://capitalenergyboston.github.io/capitalenergywebsite/`.

Because it's served from a subpath, the workflow sets
`NEXT_PUBLIC_BASE_PATH=/capitalenergywebsite` at build time so asset URLs resolve.

### Moving to Vercel later

1. Import the repo in Vercel — it auto-detects Next.js.
2. **Do not** set `NEXT_PUBLIC_BASE_PATH` (Vercel serves from the domain root).
3. Deploy. The same code works, and you can point `capitalenergy.io` at it.

## Connecting HubSpot (CRM)

The contact form in [`app/components/contact-form.tsx`](app/components/contact-form.tsx)
is already wired to submit to the HubSpot Forms API. Until it's configured it runs in
"demo" mode (shows the success state without sending anywhere). To go live:

1. In HubSpot, create a form and note its **Portal ID** and **Form ID**.
2. Set these environment variables where the site is hosted
   (Vercel project settings, or a local `.env.local`):

   ```
   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=xxxxxxx
   NEXT_PUBLIC_HUBSPOT_FORM_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```

The form fields (`firstname`, `lastname`, `email`, `company`, `phone`, `message`)
already match HubSpot's default contact properties, so no extra mapping is needed.

## Content note

Copy, branding, the logo, testimonials, client list, and contact details are sourced
from the live capitalenergy.io. Project imagery lives in `public/work/`. Short
sector/engagement tags on the portfolio are descriptive; swap in per-project case
studies as they're written.
