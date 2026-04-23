import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anurag — Oval",
  description:
    "Engineer. I write code (or do I?). SDE Intern at TELUS Digital AI. GSoC 2024.",
  keywords: ["Anurag", "Oval", "portfolio", "software engineer", "developer"],
  authors: [{ name: "Anurag", url: "https://github.com/Oval17" }],
  openGraph: {
    title: "Anurag — Oval",
    description: "Engineer. I write code (or do I?). 24hrs is never enough.",
    type: "website",
  },
  twitter: {
    card: "summary",
    creator: "@Oval170",
    title: "Anurag — Oval",
    description: "Engineer. I write code (or do I?). 24hrs is never enough.",
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
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
