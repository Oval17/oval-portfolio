"use client";

import {
  SiTypescript, SiJavascript, SiPython, SiReact, SiNextdotjs,
  SiNodedotjs, SiTailwindcss, SiThreedotjs, SiCplusplus,
  SiRaspberrypi, SiArduino, SiGit, SiLinux, SiPostgresql, SiMongodb,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const row1 = [
  { name: "TypeScript", Icon: SiTypescript, color: "#3178c6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#f7df1e" },
  { name: "Python", Icon: SiPython, color: "#4b8bbe" },
  { name: "React", Icon: SiReact, color: "#61dafb" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#68a063" },
  { name: "TailwindCSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Three.js", Icon: SiThreedotjs, color: "#ffffff" },
  { name: "C / C++", Icon: SiCplusplus, color: "#6295cb" },
];

const row2 = [
  { name: "Raspberry Pi", Icon: SiRaspberrypi, color: "#c51a4a" },
  { name: "Arduino", Icon: SiArduino, color: "#00979d" },
  { name: "Linux", Icon: SiLinux, color: "#f5c518" },
  { name: "Git", Icon: SiGit, color: "#f05032" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47a248" },
  { name: "Claude AI", Icon: VscCode, color: "#cc785c" },
  { name: "IoT", Icon: VscCode, color: "#a78bfa" },
];

function Pill({ name, Icon, color }: { name: string; Icon: React.ElementType; color: string }) {
  return (
    <span
      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap flex-shrink-0"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        color: "var(--text-2)",
      }}
    >
      <Icon size={14} style={{ color, flexShrink: 0 }} />
      {name}
    </span>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof row1; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-2.5"
        style={{
          width: "max-content",
          animation: `marquee${reverse ? "-reverse" : ""} ${items.length * 3.5}s linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <Pill key={i} name={item.name} Icon={item.Icon} color={item.color} />
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="py-8 border-t" style={{ borderColor: "var(--border)" }}>
      <h2
        className="text-xs font-medium tracking-widest uppercase mb-5"
        style={{ color: "var(--text-3)" }}
      >
        Tools &amp; Stack
      </h2>
      <div className="flex flex-col gap-3 -mx-6 px-0">
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
