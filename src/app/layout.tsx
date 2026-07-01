import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const caveat = Caveat({ variable: "--font-caveat", subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Anurag (Oval)",
  description: "Software engineer and builder. GSoC '24 & '26 contributor. SDE-1 at TELUS Digital AI. Physics grad who writes code.",
  authors: [{ name: "Anurag", url: "https://github.com/Oval17" }],
  twitter: { card: "summary_large_image", creator: "@Oval170", title: "Anurag (Oval)", description: "Software engineer and builder. GSoC '24 & '26 contributor. SDE-1 at TELUS Digital AI." },
  openGraph: {
    title: "Anurag (Oval)",
    description: "Software engineer and builder. GSoC '24 & '26 contributor. SDE-1 at TELUS Digital AI. Physics grad who writes code.",
    url: "https://ovalele.in",
    siteName: "Anurag (Oval)",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anurag Singh",
  alternateName: "Oval",
  url: "https://ovalele.in",
  sameAs: [
    "https://github.com/Oval17",
    "https://x.com/Oval170",
  ],
  jobTitle: "Software Engineer",
  description: "Software engineer and builder. GSoC '24 & '26 contributor. SDE-1 at TELUS Digital AI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable}`} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="lAl-AdlNPtBGdG7f2eohYocxUdf99fOH_KK3qJnA170" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
