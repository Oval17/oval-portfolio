import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
import { extras } from "@/lib/data";
import { VIOLET } from "@/lib/constants";
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

          <div className="space-y-6">
            {extras.map((extra) => (
              <a
                key={extra.name}
                href={extra.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-lg transition-colors"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <p
                    className="text-sm font-bold font-mono"
                    style={{ color: VIOLET }}
                  >
                    {extra.name}
                  </p>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>
                  {extra.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {extra.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md font-mono"
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
