import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
import ProjectCard from "@/components/project-card";
import { extras, projects } from "@/lib/data";
import { VIOLET } from "@/lib/constants";
import { StudioIcon } from "@/components/studio-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extras — Oval Studio",
  description: "A Chrome extension and the mini projects I've built.",
};

export default function ExtrasPage() {
  return (
    <>
      <Nav />
      <StudioNav />
      <main className="relative max-w-2xl mx-auto px-6 pb-8">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "radial-gradient(circle, var(--dot-color, rgba(0,0,0,0.12)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="py-10">
          <h1
            className="text-lg font-bold font-mono mb-8"
            style={{ color: VIOLET }}
          >
            Extras
          </h1>

          <h2
            className="text-sm font-bold font-mono mb-4"
            style={{ color: VIOLET }}
          >
            Mini projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <h2
            className="text-sm font-bold font-mono mt-10 mb-4"
            style={{ color: VIOLET }}
          >
            Chrome extension
          </h2>

          <div className="space-y-4">
            {extras.map((extra) => (
              <a
                key={extra.name}
                href={extra.href}
                target="_blank"
                rel="noopener noreferrer"
                className="studio-card flex flex-wrap items-start gap-x-4 gap-y-2 p-4 rounded-lg"
                style={{ border: "1px solid var(--border)", background: "var(--bg)" }}
              >
                <div className="flex items-start gap-3 flex-1 min-w-[180px]">
                  <StudioIcon name={extra.icon} />
                  <div className="min-w-0">
                    <p className="text-sm font-bold font-mono mb-0.5" style={{ color: VIOLET }}>
                      {extra.name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--text-2)" }}>
                      {extra.tagline}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 self-center ml-auto flex flex-wrap justify-end gap-1.5">
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
