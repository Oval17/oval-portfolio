import Link from "next/link";
import { projects } from "@/lib/data";

const VIOLET = "#a78bfa";

export default function LabPreview() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-8 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-base font-bold" style={{ color: "var(--text-1)" }}>
          My Lab
        </h2>
        <Link
          href="/work"
          className="text-xs font-mono font-medium transition-opacity hover:opacity-70 flex items-center gap-1"
          style={{ color: VIOLET }}
        >
          View all
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={11} height={11}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>

      <div className="space-y-1">
        {featured.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="group flex items-center justify-between py-3 border-b transition-opacity hover:opacity-75"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="flex-1 min-w-0 mr-4">
              <p
                className="text-sm font-mono font-medium mb-0.5 group-hover:text-white transition-colors"
                style={{ color: "var(--text-1)" }}
              >
                {project.name}
              </p>
              <p className="text-xs truncate" style={{ color: "var(--text-2)" }}>
                {project.tagline}
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs font-mono" style={{ color: "var(--text-3)" }}>
                {project.year}
              </span>
              <svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                width={12} height={12}
                className="transition-colors"
                style={{ color: "var(--text-3)" }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
