import Nav from "@/components/nav";
import Footer from "@/components/footer";
import StudioBody from "@/components/studio-body";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Studio — Anurag",
  description: "Everything I'm working on — projects, experiments, startups.",
};

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="relative flex-1 max-w-2xl w-full mx-auto px-6 pb-8">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "radial-gradient(circle, var(--dot-color, rgba(0,0,0,0.12)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <StudioBody />
      </main>
      <div className="max-w-2xl mx-auto px-6 w-full">
        <Footer />
      </div>
    </div>
  );
}
