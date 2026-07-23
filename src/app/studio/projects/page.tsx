import Link from "next/link";
import Nav from "@/components/nav";
import StudioNav from "@/components/studio-nav";
import Footer from "@/components/footer";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Oval Studio",
  description: "Projects, experiments, and startups I've built.",
};

export default function ProjectsPage() {
  return (
    <>
      <Nav />
      <StudioNav />
      <main className="max-w-2xl mx-auto px-6 pb-8">
        <div className="py-10">
          <h1
            className="text-lg font-bold font-mono mb-8"
            style={{ color: "var(--text-1)" }}
          >
            Projects
          </h1>

          <div className="space-y-6">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/studio/${project.slug}`}
                className="block p-4 rounded-lg transition-colors"
                style={{ border: "1px solid var(--border)" }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <p
                    className="text-sm font-bold font-mono"
                    style={{ color: "var(--text-1)" }}
                  >
                    {project.name}
                  </p>
                  <span
                    className="text-xs font-mono"
                    style={{ color: "var(--text-3)" }}
                  >
                    {project.year}
                  </span>
                </div>
                <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>
                  {project.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
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
              </Link>
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
