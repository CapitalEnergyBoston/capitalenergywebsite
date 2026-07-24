import type { ReactNode } from "react";

/* --------------------------------------------------------------- Contact */

export const contact = {
  email: "ted@capitalenergy.io",
  phone: "+1 (617) 320-3916",
  phoneHref: "+16173203916",
  address: "444 Somerville Ave, Somerville, MA 02143",
};

/* --------------------------------------------------------------- Socials */

export const socials: { label: string; href: string; icon: ReactNode }[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/33207810",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.4 8.65 22 11 22 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3-2 0-2.3 1.57-2.3 3.2V21h-4V9Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/capitalenergy_24",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle
          cx="12"
          cy="12"
          r="4"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@CapitalEnergyio",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="currentColor">
        <path d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.5 12 5.5 12 5.5s-6 0-7.9.6A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12 31 31 0 0 0 2 15.8a3 3 0 0 0 2.1 2.1c1.9.6 7.9.6 7.9.6s6 0 7.9-.6a3 3 0 0 0 2.1-2.1c.3-1.9.4-3.8.4-3.8s0-1.9-.4-3.8ZM10 15V9l5.2 3L10 15Z" />
      </svg>
    ),
  },
];

/* -------------------------------------------------------------- Services */

export type Service = {
  slug: string;
  index: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  icon: ReactNode;
};

const iconClass = "h-6 w-6";
const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const services: Service[] = [
  {
    slug: "smart-strategy",
    index: "01",
    title: "Smart Strategy",
    tagline: "Clarity before you scale.",
    summary:
      "Before the growth push, we get sharp on who you serve, what you stand for, and why it matters. The foundation everything else is built on.",
    deliverables: [
      "Baseline assessments",
      "Customer + market research",
      "Positioning + messaging strategy",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      </svg>
    ),
  },
  {
    slug: "bold-stories",
    index: "02",
    title: "Bold Stories",
    tagline: "Complex work, made compelling.",
    summary:
      "We translate hard-to-explain innovation into a story people actually connect with — the kind that wins investors, customers, and talent.",
    deliverables: [
      "Brand evaluation",
      "Investor perception analysis",
      "Behavioral risk modeling",
    ],
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <path d="M4 5h16v11H8l-4 4V5Z" />
        <path d="M8 9h8M8 12.5h5" />
      </svg>
    ),
  },
  {
    slug: "real-impact",
    index: "03",
    title: "Real Impact",
    tagline: "Intelligence that compounds.",
    summary:
      "Reports that surface the contradictions and credibility gaps between what you mean and what the market hears — fast, repeatable, and built to scale with you.",
    deliverables: ["Rapid results", "Scales with you", "Repeatable intelligence"],
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <path d="M4 19V5M4 19h16M8 16l3.5-4 3 2.5L20 8" />
        <path d="M16 8h4v4" />
      </svg>
    ),
  },
];

/* -------------------------------------------------------------- Projects */

export type Project = {
  slug: string;
  name: string;
  image: string;
  sector: string;
  work: string;
};

export const projects: Project[] = [
  { slug: "cyvl", name: "Cyvl.ai", image: "/work/cyvl.jpg", sector: "Infrastructure AI", work: "Brand & go-to-market" },
  { slug: "veir", name: "VEIR", image: "/work/veir.jpg", sector: "Grid & transmission", work: "Brand & messaging" },
  { slug: "eden", name: "Eden GeoPower", image: "/work/eden.jpg", sector: "Geothermal", work: "Brand & storytelling" },
  { slug: "transaera", name: "Transaera", image: "/work/transaera.jpg", sector: "Cooling tech", work: "Positioning & content" },
  { slug: "h2ok", name: "H2Ok Innovations", image: "/work/h2ok.jpg", sector: "Water intelligence", work: "Brand & content" },
  { slug: "virv", name: "VIRV", image: "/work/virv.jpg", sector: "Climate tech", work: "Growth partnership" },
  { slug: "beacon", name: "Beacon Climate Innovations", image: "/work/beacon.jpg", sector: "Climate innovation", work: "Brand & go-to-market" },
  { slug: "aipower", name: "A&I Power Group", image: "/work/aipower.jpg", sector: "Power & energy", work: "Brand & web" },
  { slug: "shovelready", name: "Shovel Ready Capital", image: "/work/shovelready.jpg", sector: "Climate finance", work: "Brand & go-to-market" },
  { slug: "act", name: "The Alliance for Climate Transition", image: "/work/act.jpg", sector: "Climate nonprofit", work: "Storytelling" },
  { slug: "mfh", name: "Mass Fallen Heroes", image: "/work/mfh.jpg", sector: "Mission-driven", work: "Brand & build" },
  { slug: "salvation", name: "The Salvation Army", image: "/work/salvation.jpg", sector: "Mission-driven", work: "Design & build" },
];

/* ------------------------------------------------------------ Testimonials */

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "ACT could not have had a better partner to help us tell our story.",
    name: "Joe Curtatone",
    title: "President, The Alliance for Climate Transition (ACT)",
  },
  {
    quote:
      "Capital Energy has been an invaluable partner throughout VIRV's growth.",
    name: "Nick Holland",
    title: "Co-Founder & CEO, VIRV",
  },
  {
    quote:
      "Capital Energy's proactive approach, dedication, and ability to deliver in challenging, high-stakes situations have been exceptional.",
    name: "Paris Smalls",
    title: "Co-Founder & CEO, Eden GeoPower",
  },
  {
    quote:
      "Capital Energy was one of the earliest supporters and investors of Cyvl.",
    name: "Daniel Pelaez",
    title: "Co-Founder & CEO, Cyvl",
  },
  {
    quote:
      "Their expertise and guidance were critical in launching our state-of-the-art Emond Center for Engagement.",
    name: "Dan Magoon",
    title: "Executive Director & Co-Founder, Mass Fallen Heroes",
  },
  {
    quote:
      "Capital Energy has been a valued contractor on numerous projects for The Salvation Army Massachusetts Division over many years.",
    name: "Major Wendy A. Kountz",
    title: "The Salvation Army, Massachusetts Division",
  },
];
