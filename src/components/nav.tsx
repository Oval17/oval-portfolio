"use client";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const VIOLET = "#9461f7";

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = theme === "dark";

  return (
    <header>
      <nav className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight transition-opacity hover:opacity-70"
          style={{ color: "var(--text-1)", fontFamily: "var(--font-geist-mono)" }}
        >
          Oval<span style={{ color: VIOLET }}>.</span>
        </Link>
        <div className="flex items-center gap-5">
          <div style={{ position: "relative" }}>
            <Link
              href="/studio"
              className="text-sm font-semibold transition-opacity hover:opacity-70"
              style={{ color: "var(--text-1)" }}
            >
              My Studio
            </Link>
            {/* Floating label + simple arrow */}
            <div style={{ position: "absolute", right: "calc(100% + 10px)", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", animation: "floatUpDown 2s ease-in-out infinite" }}>
                <span style={{
                  fontSize: "16px",
                  color: VIOLET,
                  fontFamily: "'Caveat', cursive",
                  whiteSpace: "nowrap",
                  fontWeight: 500,
                  lineHeight: 1,
                }}>
                  click here
                </span>
                <svg width="28" height="14" viewBox="0 0 28 14" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M 1,11 C 4,4 14,1 24,7" stroke={VIOLET} strokeWidth="2" fill="none" />
                  <path d="M 24,7 L 20,4 M 24,7 L 22,11" stroke={VIOLET} strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-opacity hover:opacity-70"
              style={{ color: VIOLET }}
            >
              {isDark ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} width={17} height={17}>
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} width={17} height={17}>
                  <path strokeLinecap="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </nav>
      <div className="max-w-2xl mx-auto px-6">
        <div style={{ height: "1px", background: "var(--border)" }} />
      </div>
    </header>
  );
}
