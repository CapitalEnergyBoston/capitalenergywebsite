# Capital Energy

Marketing site for Capital Energy, an independent Boston-based energy consulting firm.

Built with **Next.js 16** (App Router) + **Tailwind CSS v4**, output as a fully static site so it can be hosted on GitHub Pages today and moved to Vercel later with no code changes.

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

This produces a static export in `out/`. There is no server — the output is plain HTML/CSS/JS.

## Project structure

```
app/
  layout.tsx            Root layout: fonts, metadata, header + footer
  page.tsx              Home
  about/page.tsx        About
  services/page.tsx     Services
  insights/page.tsx     Insights
  contact/page.tsx      Contact (with lead form)
  content.tsx           Shared data (services list)
  components/
    site-header.tsx     Sticky nav + mobile menu
    site-footer.tsx     Footer
    contact-form.tsx    Lead form (HubSpot-ready — see below)
    logo.tsx, ui.tsx    Shared UI primitives
app/globals.css         Design tokens (colors, fonts) + base styles
```

## Deployment

### GitHub Pages (current)

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages. One-time setup in the repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. Push to `main`. The site publishes to
   `https://capitalenergyboston.github.io/capitalenergywebsite/`.

Because it is served from a subpath, the workflow sets
`NEXT_PUBLIC_BASE_PATH=/capitalenergywebsite` at build time so asset URLs resolve.

### Moving to Vercel later

1. Import the repo in Vercel — it auto-detects Next.js.
2. **Do not** set `NEXT_PUBLIC_BASE_PATH` (Vercel serves from the domain root).
3. Deploy. That's it — the same code works.

## Connecting HubSpot (CRM)

The contact form in `app/components/contact-form.tsx` is already wired to submit to
the HubSpot Forms API. Until it's configured it runs in "demo" mode (shows the success
state without sending anywhere). To go live:

1. In HubSpot, create a form and note its **Portal ID** and **Form ID**.
2. Set these environment variables where the site is hosted
   (Vercel project settings, or a local `.env.local`):

   ```
   NEXT_PUBLIC_HUBSPOT_PORTAL_ID=xxxxxxx
   NEXT_PUBLIC_HUBSPOT_FORM_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```

The form fields (`firstname`, `lastname`, `email`, `company`, `phone`, `message`)
already match HubSpot's default contact properties, so no extra mapping is needed.

> Note: on a static GitHub Pages host you'd need to add these as build-time env vars
> in the workflow. The cleaner path is to connect HubSpot after moving to Vercel.
