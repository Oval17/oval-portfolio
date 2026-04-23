import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-base font-semibold mb-4" style={{ color: "#e8e8e8" }}>
        things I built
      </h2>
      <div className="space-y-3">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between gap-3 py-3 border-b transition-colors"
            style={{ borderColor: "rgba(255,255,255,0.05)" }}
          >
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-medium font-mono mb-1 group-hover:text-white transition-colors"
                style={{ color: "#d0d0d0" }}
              >
                {project.name}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#555" }}>
                {project.description}
              </p>
            </div>
            <ArrowUpRight
              size={14}
              className="flex-shrink-0 mt-0.5 transition-colors"
              style={{ color: "#333" }}
            />
          </a>
        ))}
      </div>
    </section>
  );
}
