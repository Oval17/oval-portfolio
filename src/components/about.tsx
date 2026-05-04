import { experience } from "@/lib/data";

export default function About() {
  return (
    <section className="py-8">
      {/* Bio */}
      <div className="space-y-4 text-sm leading-[1.8] mb-10" style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}>
        <p>
          Chronically online, perpetually curious. Most hours go into writing code, reviewing code,
          breaking things, and occasionally shipping something that actually works.
        </p>
        <p>
          I live mostly in TypeScript and JavaScript, but hardware pulls me in too —
          IoT, Raspberry Pi, things that blink and beep. Lately deep in AI and agentic systems,
          which feels like the most interesting corner of software right now. Building things that
          think, not just things that run.
        </p>
        <p>
          Away from the screen: cricket and long walks. Balance, or something like it.
        </p>
      </div>

      {/* Experience — flows directly, no heading */}
      <div className="space-y-7">
        {experience.map((job, i) => (
          <div key={i}>
            <div className="flex items-baseline justify-between mb-1">
              <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>
                {job.company}
              </p>
              <p className="text-xs font-mono" style={{ color: "var(--text-3)" }}>
                {job.period}
              </p>
            </div>
            <p className="text-xs mb-2 font-mono" style={{ color: "var(--text-3)" }}>
              {job.role}
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
