"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
        >
          <p className="text-xs font-medium tracking-widest uppercase text-[#555] mb-8">
            experience
          </p>
          <div className="space-y-px">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  ease: "easeOut" as const,
                  delay: i * 0.1,
                }}
                className="group py-5 border-b border-white/[0.05] last:border-none"
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="text-sm font-medium text-[#e8e8e8]">
                      {job.role}
                    </h3>
                    <p className="text-sm text-[#666] mt-0.5">
                      {job.company}
                      {job.org && (
                        <span className="text-[#555]"> · {job.org}</span>
                      )}
                    </p>
                  </div>
                  <span className="text-xs text-[#555] whitespace-nowrap font-mono pt-0.5">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm text-[#666] leading-relaxed mb-3">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md text-[#666] bg-white/[0.04] border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
