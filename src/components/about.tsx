"use client";
import { useState } from "react";
import { experience, education } from "@/lib/data";
import { VIOLET } from "@/lib/constants";

export default function About() {
  const [openJobs, setOpenJobs] = useState<Set<number>>(new Set());

  function toggleJob(i: number) {
    setOpenJobs((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  }

  return (
    <section className="py-8">
      {/* Bio */}
      <div className="space-y-3 text-sm leading-[1.8] mb-10" style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}>
        <p>I like to build things.</p>
        <p>Chronically online.</p>
        <p>Away from the screen: cricket and long walks.</p>
        <p>Open to work — drop a mail or message to collaborate.</p>
      </div>

      {/* Work Experience */}
      <h2
        className="text-base font-bold mb-6"
        style={{ color: "var(--text-1)", fontFamily: "var(--font-geist-mono)" }}
      >
        Work Ex.
      </h2>
      <div className="space-y-6 mb-12">
        {experience.map((job, i) => {
          const isOpen = openJobs.has(i);
          return (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>
                    {job.company}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-xs px-1.5 py-0.5 rounded font-mono"
                    style={{
                      background: "rgba(148,97,247,0.1)",
                      color: VIOLET,
                      border: "1px solid rgba(148,97,247,0.2)",
                    }}
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: VIOLET }} />
                    {job.type}
                  </span>
                </div>
                <p className="text-sm font-mono font-medium" style={{ color: "var(--text-1)" }}>
                  {job.period}
                </p>
              </div>

              <button
                onClick={() => toggleJob(i)}
                className="flex items-center gap-1.5 text-left"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
              >
                <p className="text-sm font-mono font-semibold" style={{ color: VIOLET }}>
                  {job.role}
                </p>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  width={11}
                  height={11}
                  style={{
                    color: VIOLET,
                    flexShrink: 0,
                    transition: "transform 0.2s ease",
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>

              <div
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.25s ease",
                }}
              >
                <div style={{ overflow: "hidden" }}>
                  <p
                    className="text-sm leading-relaxed pt-2"
                    style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}
                  >
                    {job.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Education */}
      <h2
        className="text-base font-bold mb-6"
        style={{ color: "var(--text-1)", fontFamily: "var(--font-geist-mono)" }}
      >
        Education
      </h2>
      <div className="space-y-8">
        {education.map((edu, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between mb-1">
              <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>
                {edu.institution}
              </p>
              <p className="text-sm font-mono font-medium" style={{ color: "var(--text-1)" }}>
                {edu.period}
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}>
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
