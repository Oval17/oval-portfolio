import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section className="py-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
      <h2 className="text-xs font-medium tracking-widest uppercase mb-6" style={{ color: "#444" }}>
        Experience
      </h2>
      <div className="space-y-6">
        {experience.map((job, i) => (
          <div key={i} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1">
            <p className="text-sm font-medium" style={{ color: "#d0d0d0" }}>
              {job.company}
            </p>
            <p
              className="text-xs font-mono row-span-2 text-right pt-0.5 whitespace-nowrap"
              style={{ color: "#444" }}
            >
              {job.period}
            </p>
            <p className="text-xs mb-2" style={{ color: "#555" }}>
              {job.role}
            </p>
            <p className="text-sm col-span-2 leading-relaxed" style={{ color: "#666" }}>
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
