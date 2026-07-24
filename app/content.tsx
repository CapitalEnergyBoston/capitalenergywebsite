import type { ReactNode } from "react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: ReactNode;
  outcomes: string[];
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
    slug: "procurement",
    title: "Energy Procurement",
    summary:
      "Competitive supply contracts for electricity and natural gas — sourced, benchmarked, and negotiated to lock in the best price and terms for your load profile.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <path d="M3 21h18M6 21V8l6-4 6 4v13M9 21v-6h6v6" />
      </svg>
    ),
    outcomes: [
      "Reverse-auction supplier bidding",
      "Contract terms reviewed line by line",
      "Budget certainty with the right hedge",
    ],
  },
  {
    slug: "sustainability",
    title: "Sustainability & Decarbonization",
    summary:
      "A practical roadmap to lower emissions — renewable procurement, RECs, on-site generation, and reporting that stands up to scrutiny from boards and regulators.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <path d="M12 3C7 7 6 11 6 14a6 6 0 0 0 12 0c0-3-1-7-6-11Z" />
        <path d="M12 21v-6" />
      </svg>
    ),
    outcomes: [
      "Renewable & REC strategy",
      "On-site solar and storage evaluation",
      "Scope 1–2 reporting support",
    ],
  },
  {
    slug: "risk-management",
    title: "Risk & Market Management",
    summary:
      "Ongoing oversight of your energy position. We watch the markets, model your exposure, and tell you exactly when to lock, layer, or wait.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <path d="M3 17l5-6 4 4 8-9" />
        <path d="M15 6h5v5" />
      </svg>
    ),
    outcomes: [
      "Live market monitoring",
      "Layered hedging strategies",
      "Quarterly position reviews",
    ],
  },
  {
    slug: "bill-audit",
    title: "Bill Audit & Cost Recovery",
    summary:
      "A forensic review of your utility invoices, tariffs, and meter data to recover overcharges and make sure you’re on the optimal rate class.",
    icon: (
      <svg viewBox="0 0 24 24" className={iconClass} {...stroke}>
        <path d="M7 3h10a1 1 0 0 1 1 1v17l-3-2-3 2-3-2-3 2V4a1 1 0 0 1 1-1Z" />
        <path d="M9 8h6M9 12h6" />
      </svg>
    ),
    outcomes: [
      "Tariff and rate-class optimization",
      "Historical overcharge recovery",
      "Meter and demand analysis",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
