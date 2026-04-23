import Nav from "@/components/nav";
import { experience, skills, personal } from "@/lib/data";

export const metadata = {
  title: "Resume — Anurag",
};

export default function ResumePage() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <div className="py-10">
          <div className="flex items-start justify-between mb-8">
            <div>
              <h1
                className="text-2xl font-bold mb-1"
                style={{ color: "#e8e8e8", letterSpacing: "-0.02em" }}
              >
                {personal.name}
              </h1>
              <p className="text-sm font-mono" style={{ color: "#555" }}>
                @{personal.handle} · {personal.email}
              </p>
            </div>
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-colors hover:text-[#888]"
              style={{ color: "#555" }}
            >
              github.com/Oval17 ↗
            </a>
          </div>

          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

          <section className="py-8">
            <h2 className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: "#444" }}>
              Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job, i) => (
                <div key={i}>
                  <div className="flex items-baseline justify-between mb-0.5">
                    <p className="text-sm font-medium" style={{ color: "#d0d0d0" }}>
                      {job.company}
                    </p>
                    <p className="text-xs font-mono" style={{ color: "#444" }}>
                      {job.period}
                    </p>
                  </div>
                  <p className="text-xs mb-2" style={{ color: "#555" }}>
                    {job.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "#666" }}>
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div style={{ height: "1px", background: "rgba(255,255,255,0.07)" }} />

          <section className="py-8">
            <h2 className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "#444" }}>
              Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-2.5 py-1 rounded-md"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    color: "#666",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
