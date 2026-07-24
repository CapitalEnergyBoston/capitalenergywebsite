import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const siteName = "Capital Energy";
const siteDescription =
  "Capital Energy helps climate tech companies translate complex work into compelling brands. Strategy, storytelling, and go-to-market for the founders reinventing legacy industries.";

export const metadata: Metadata = {
  metadataBase: new URL("https://capitalenergy.io"),
  title: {
    default: `${siteName} — Brand & go-to-market for climate tech`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "climate tech marketing",
    "climate tech branding",
    "energy startup marketing",
    "go-to-market strategy",
    "positioning and messaging",
    "climate storytelling",
  ],
  openGraph: {
    title: `${siteName} — Brand & go-to-market for climate tech`,
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
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
