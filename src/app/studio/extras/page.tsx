import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
import { extras } from "@/lib/data";
import { VIOLET } from "@/lib/constants";
import { StudioIcon } from "@/components/studio-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extras — Oval Studio",
  description: "Other things worth sharing.",
};

export default function ExtrasPage() {
  return (
    <>
      <Nav />
      <StudioNav />
      <main className="max-w-2xl mx-auto px-6 pb-8">
        <div className="py-10">
          <h1
            className="text-lg font-bold font-mono mb-8"
            style={{ color: VIOLET }}
          >
            Extras
          </h1>

          <div className="space-y-4">
            {extras.map((extra) => (
              <a
                key={extra.name}
                href={extra.href}
                target="_blank"
                rel="noopener noreferrer"
                className="studio-card flex items-center justify-between gap-4 p-4 rounded-lg"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <StudioIcon name={extra.icon} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold font-mono mb-0.5" style={{ color: VIOLET }}>
                      {extra.name}
                    </p>
                    <p className="text-sm truncate" style={{ color: "var(--text-2)" }}>
                      {extra.tagline}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 flex flex-wrap justify-end gap-1.5">
                  {extra.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md font-mono whitespace-nowrap"
                      style={{
                        background: "var(--surface)",
                        color: "var(--text-2)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <div className="max-w-2xl mx-auto px-6">
        <Footer />
      </div>
    </>
  );
}
