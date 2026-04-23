import { experience } from "@/lib/data";

export default function About() {
  return (
    <section className="py-8">
      {/* Bio */}
      <div className="space-y-3 text-sm leading-[1.85] mb-10" style={{ color: "var(--text-2)", fontFamily: "var(--font-geist-mono)" }}>
        <p>
          I&apos;m Anurag — an engineer from India who got into code by breaking things and slowly figuring out how to put them back together.
        </p>
        <p>
          I like working across the stack — sometimes writing C close to the metal, sometimes building 3D web apps with WebGL, sometimes wiring up AI tools. The common thread is curiosity, not the language.
        </p>
        <p>
          Currently interning at <span style={{ color: "var(--text-1)" }}>TELUS Digital AI</span>, where I work on developer-facing AI products. Before that, <span style={{ color: "var(--text-1)" }}>GSoC 2024</span> with SugarLabs — open source, education software, a lot of Python.
        </p>
        <p>
          Outside of work I make videos on <a href="https://youtube.com/@ovalcodes" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-1)", textDecoration: "underline", textDecorationColor: "var(--border)", textUnderlineOffset: "3px" }}>YouTube</a> when something&apos;s worth documenting. I&apos;m also trying to write more — that&apos;s what the blog is for.
        </p>
      </div>

      {/* Experience — no heading, flows directly from bio */}
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
            <p className="text-xs mb-2" style={{ color: "var(--text-3)", fontFamily: "var(--font-geist-mono)" }}>
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
