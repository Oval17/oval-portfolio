import Link from "next/link";
import Nav from "@/components/nav";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Work — Anurag",
  description: "Things I've built.",
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <div className="py-10">
          <h1
            className="text-2xl font-bold mb-2"
            style={{ color: "#e8e8e8", letterSpacing: "-0.02em" }}
          >
            Work
          </h1>
          <p className="text-sm mb-10" style={{ color: "#555" }}>
            Things I&apos;ve built, explored, or shipped.
          </p>

          <div className="space-y-px">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group flex items-baseline justify-between py-4 border-b transition-colors"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="flex-1 min-w-0 mr-6">
                  <p
                    className="text-sm font-mono font-medium mb-1 group-hover:text-white transition-colors"
                    style={{ color: "#c8c8c8" }}
                  >
                    {project.name}
                  </p>
                  <p className="text-xs" style={{ color: "#555" }}>
                    {project.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-xs font-mono" style={{ color: "#444" }}>
                    {project.year}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    width={13}
                    height={13}
                    className="transition-colors"
                    style={{ color: "#333" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
