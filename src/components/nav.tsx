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
                  fontSize: "10px",
                  color: "#ffffff",
                  fontFamily: "var(--font-geist-mono)",
                  whiteSpace: "nowrap",
                  textShadow: "0 1px 6px rgba(0,0,0,0.55)",
                  letterSpacing: "0.02em",
                }}>
                  click here
                </span>
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="0" y1="5" x2="15" y2="5" stroke="#ffffff" strokeWidth="2" style={{ filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.45))" }} />
                  <polyline points="11,1 15,5 11,9" stroke="#ffffff" strokeWidth="2" />
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
