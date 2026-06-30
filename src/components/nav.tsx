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
            {/* Squiggly arrow — label above, arrow below, both inside nav */}
            <div style={{ position: "absolute", right: "calc(100% + 6px)", top: "-14px", pointerEvents: "none" }}>
              <span
                style={{
                  display: "block",
                  fontSize: "9px",
                  color: VIOLET,
                  fontFamily: "var(--font-geist-mono)",
                  whiteSpace: "nowrap",
                  marginBottom: "1px",
                  opacity: 0,
                  animation: "fadeIn 0.4s ease 1.6s forwards",
                }}
              >
                click here
              </span>
              <svg
                width="64"
                height="24"
                viewBox="0 0 68 26"
                fill="none"
                stroke={VIOLET}
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ overflow: "visible" }}
              >
                {/* Loop at tail, sweep right to arrowhead */}
                <path
                  d="M 18,20 C 12,22 4,18 2,12 C 0,6 4,0 10,2 C 16,4 18,10 14,14 C 10,18 4,18 6,12 C 8,6 16,2 28,6 C 40,10 52,12 60,10"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  style={{ animation: "squiggleDraw 1.5s cubic-bezier(0.4,0,0.2,1) 0.2s forwards" }}
                />
                <path
                  d="M 60,10 L 56,7 M 60,10 L 56,13"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  style={{ animation: "squiggleDraw 0.25s ease 1.65s forwards" }}
                />
              </svg>
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
