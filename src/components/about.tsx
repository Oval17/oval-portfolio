import { experience, education } from "@/lib/data";

const VIOLET = "#9461f7";

export default function About() {
  return (
    <section className="py-8">
      {/* Bio */}
      <div className="space-y-3 text-sm leading-[1.8] mb-10" style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}>
        <p>
          I like to build things.
        </p>
        <p>
          Chronically online.
        </p>
        <p>
          Away from the screen: cricket and long walks.
        </p>
        <p>
          Open to work — drop a mail or message to collaborate.
        </p>
      </div>

      {/* Work Experience */}
      <p
        className="text-base font-bold mb-6"
        style={{ color: "var(--text-1)", fontFamily: "var(--font-geist-mono)" }}
      >
        Work Ex.
      </p>
      <div className="space-y-8 mb-12">
        {experience.map((job, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between mb-1">
              <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>
                {job.company}
              </p>
              <p className="text-sm font-mono font-medium" style={{ color: VIOLET }}>
                {job.period}
              </p>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-sm font-mono font-semibold" style={{ color: "var(--text-2)" }}>
                {job.role}
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
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
              {job.description}
            </p>
          </div>
        ))}
      </div>

      {/* Education */}
      <p
        className="text-base font-bold mb-6"
        style={{ color: "var(--text-1)", fontFamily: "var(--font-geist-mono)" }}
      >
        Education
      </p>
      <div className="space-y-8">
        {education.map((edu, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between mb-1">
              <p className="text-base font-semibold" style={{ color: "var(--text-1)" }}>
                {edu.institution}
              </p>
              <p className="text-sm font-mono font-medium" style={{ color: VIOLET }}>
                {edu.period}
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
