import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="py-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
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
  );
}
