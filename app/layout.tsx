import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const siteName = "Capital Energy";
const siteDescription =
  "Capital Energy is a Boston-based energy consulting firm helping organizations navigate procurement, sustainability, and the transition to cleaner, lower-cost power.";

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalenergyboston.github.io"),
  title: {
    default: `${siteName} — Energy Consulting`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "energy consulting",
    "energy procurement",
    "sustainability advisory",
    "energy strategy",
    "Boston energy consultants",
  ],
  openGraph: {
    title: `${siteName} — Energy Consulting`,
    description: siteDescription,
    siteName,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
