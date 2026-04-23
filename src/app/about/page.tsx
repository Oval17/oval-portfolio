import Image from "next/image";
import Nav from "@/components/nav";
import { personal, experience, skills } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Anurag",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="max-w-2xl mx-auto px-6 pb-24">
        <div className="py-10">
          {/* Header */}
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/avatar.png" alt="Anurag" width={64} height={64} className="w-full h-full object-cover" style={{ imageRendering: "pixelated" }} />
            </div>
            <div>
              <h1 className="text-xl font-bold" style={{ color: "var(--text-1)", fontFamily: "var(--font-geist-mono)" }}>
                {personal.name} ({personal.handle})
              </h1>
              <p className="text-sm" style={{ color: "var(--text-2)" }}>{personal.location} · {personal.email}</p>
            </div>
          </div>

          <div style={{ height: "1px", background: "var(--border)", marginBottom: "2rem" }} />

          {/* Bio */}
          <div className="space-y-4 text-sm leading-[1.85] mb-10" style={{ color: "var(--text-2)" }}>
            <p>I&apos;m Anurag — an engineer from India who got into code by breaking things and slowly figuring out how to put them back together. That&apos;s still more or less how I work.</p>
            <p>I like working across the stack — sometimes writing C close to the metal, sometimes building 3D interfaces with WebGL, sometimes gluing AI tools together. The thread is curiosity, not the language.</p>
            <p>When I&apos;m not coding I make videos on <a href={personal.social.youtube} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-1)", textDecoration: "underline", textDecorationColor: "var(--border)", textUnderlineOffset: "3px" }}>YouTube</a>. Trying to write more too — that&apos;s what the blog is for.</p>
          </div>

          {/* Experience */}
          <h2 className="text-xs font-medium tracking-widest uppercase mb-5" style={{ color: "var(--text-3)" }}>Experience</h2>
          <div className="space-y-7 mb-10">
            {experience.map((job, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between mb-1">
                  <p className="text-sm font-semibold" style={{ color: "var(--text-1)" }}>{job.company}</p>
                  <p className="text-xs font-mono" style={{ color: "var(--text-3)" }}>{job.period}</p>
                </div>
                <p className="text-xs mb-2 font-mono" style={{ color: "var(--text-3)" }}>{job.role}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-2)" }}>{job.description}</p>
              </div>
            ))}
          </div>

          {/* Stack */}
          <h2 className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: "var(--text-3)" }}>Stack</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="text-xs px-2.5 py-1 rounded-md font-mono"
                style={{ background: "var(--surface)", color: "var(--text-2)", border: "1px solid var(--border)" }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
