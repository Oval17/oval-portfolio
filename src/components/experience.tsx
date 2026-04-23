import { experience } from "@/lib/data";

const logoColors: Record<string, { bg: string; text: string }> = {
  "TELUS Digital AI": { bg: "#4B3F72", text: "#c9b8ff" },
  "Google Summer of Code": { bg: "#1a3a2a", text: "#5fcf8a" },
};

export default function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-base font-semibold mb-4" style={{ color: "#e8e8e8" }}>
        cool places I worked at
      </h2>
      <div className="space-y-4">
        {experience.map((job, i) => {
          const colors = logoColors[job.company] || { bg: "#1a1a1a", text: "#888" };
          const initials = job.company
            .split(" ")
            .slice(0, 2)
            .map((w) => w[0])
            .join("");
          return (
            <div key={i} className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
                style={{ background: colors.bg, color: colors.text }}
              >
                {initials}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium" style={{ color: "#e0e0e0" }}>
                  {job.company}
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#555" }}>
                  {job.role.toLowerCase()}
                  {job.org ? ` · ${job.org}` : ""}
                </p>
              </div>
              <span className="text-xs flex-shrink-0 font-mono" style={{ color: "#444" }}>
                {job.period}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
