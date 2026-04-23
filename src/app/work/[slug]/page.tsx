import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/nav";
import { projects } from "@/lib/data";
import type { Metadata } from "next";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: `${project.name} — Anurag`, description: project.tagline };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <div className="py-10">
          <Link href="/work" className="inline-flex items-center gap-1.5 text-xs mb-8 transition-opacity hover:opacity-70"
            style={{ color: "var(--text-2)" }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={12} height={12}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
            Work
          </Link>

          <div className="flex items-center gap-3 mb-1.5">
            <h1 className="text-xl font-bold font-mono" style={{ color: "var(--text-1)", letterSpacing: "-0.01em" }}>
              {project.name}
            </h1>
            <span className="text-xs font-mono" style={{ color: "var(--text-3)" }}>{project.year}</span>
          </div>
          <p className="text-sm mb-3" style={{ color: "var(--text-2)" }}>{project.tagline}</p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-2 py-0.5 rounded-md font-mono"
                style={{ background: "var(--surface)", color: "var(--text-2)", border: "1px solid var(--border)" }}>
                {tag}
              </span>
            ))}
          </div>

          <div className="text-sm leading-[1.9] space-y-4" style={{ color: "var(--text-2)" }}>
            {project.description.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <a href={project.href} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
              style={{ color: "var(--text-1)" }}>
              <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
