import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="py-6 border-t" style={{ borderColor: "var(--border)" }}>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-2.5 py-1 rounded-md font-mono"
            style={{
              background: "var(--surface)",
              color: "var(--text-2)",
              border: "1px solid var(--border)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
