"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-[#555] mb-8">
            projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((project, i) => (
              <motion.a
                key={i}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  ease: "easeOut" as const,
                  delay: i * 0.08,
                }}
                className="group relative p-5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-medium text-[#d8d8d8] group-hover:text-[#e8e8e8] transition-colors font-mono">
                    {project.name}
                  </h3>
                  <ArrowUpRight
                    size={14}
                    className="text-[#444] group-hover:text-[#888] transition-colors flex-shrink-0 mt-0.5"
                  />
                </div>
                <p className="text-xs text-[#666] leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md text-[#555] bg-white/[0.03] border border-white/[0.05]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
