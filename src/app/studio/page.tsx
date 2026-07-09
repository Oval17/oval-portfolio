import Nav from "@/components/nav";
import Footer from "@/components/footer";
import StudioHero from "@/components/studio-hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Studio — Anurag",
  description: "Everything I'm working on — projects, experiments, startups.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-8">
        <StudioHero />

        <div
          className="py-20 text-center"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-sm font-mono" style={{ color: "var(--text-3)" }}>
            coming soon.
          </p>
          <p
            className="text-xs font-mono mt-1"
            style={{ color: "var(--text-3)", opacity: 0.5 }}
          >
            building something here.
          </p>
        </div>
      </main>
      <div className="max-w-2xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
}
