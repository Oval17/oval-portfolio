"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const violetTheme = {
  dark: ["#1a1f27", "#3b1f6e", "#5b2d9e", "#7c3aed", "#a78bfa"],
  light: ["#f5f3ff", "#ddd6fe", "#a78bfa", "#7c3aed", "#5b21b6"],
};

export default function GithubActivity() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="py-8 border-t" style={{ borderColor: "var(--border)" }}>
      <h2 className="text-base font-bold mb-6" style={{ color: "var(--text-1)" }}>
        GitHub Activity
      </h2>
      <div className="overflow-x-auto">
        {mounted && (
          <GitHubCalendar
            username="Oval17"
            theme={violetTheme}
            colorScheme={theme === "dark" ? "dark" : "light"}
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
