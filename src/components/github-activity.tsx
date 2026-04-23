"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GithubActivity() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const colorScheme = theme === "dark" ? "dark" : "light";

  return (
    <section className="py-8 border-t" style={{ borderColor: "var(--border)" }}>
      <h2 className="text-base font-bold mb-6" style={{ color: "var(--text-1)" }}>
        GitHub Activity
      </h2>
      <div className="overflow-x-auto">
        {mounted && (
          <GitHubCalendar
            username="Oval17"
            colorScheme={colorScheme}
            fontSize={11}
            blockSize={11}
            blockMargin={3}
            style={{ fontFamily: "var(--font-geist-mono)" }}
          />
        )}
      </div>
    </section>
  );
}
