import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section className="mb-12">
      <h2 className="text-base font-semibold mb-4" style={{ color: "#e8e8e8" }}>
        skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="text-xs px-3 py-1.5 rounded-full font-medium"
            style={{
              background: "#1a1a1a",
              color: "#888",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {skill.toLowerCase()}
          </span>
        ))}
      </div>
    </section>
  );
}
