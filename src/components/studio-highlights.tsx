"use client";
import Link from "next/link";
import { VIOLET } from "@/lib/constants";

function HighlightLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="transition-opacity hover:opacity-70"
      style={{ color: VIOLET, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: "3px" }}
    >
      {children}
    </Link>
  );
}

export default function StudioHighlights({ revealed }: { revealed: boolean }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-geist-mono)",
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(14px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      <div
        style={{
          background: "var(--bg)",
          border: `1px solid ${VIOLET}30`,
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: `0 0 24px ${VIOLET}14, inset 0 0 12px ${VIOLET}06`,
        }}
      >
        {/* title bar */}
        <div
          style={{
            background: `${VIOLET}12`,
            borderBottom: `1px solid ${VIOLET}20`,
            padding: "7px 14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: `${VIOLET}40`, display: "inline-block" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: `${VIOLET}28`, display: "inline-block" }} />
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: `${VIOLET}18`, display: "inline-block" }} />
          <span
            style={{
              marginLeft: "auto",
              fontSize: "9px",
              letterSpacing: "0.12em",
              color: VIOLET,
              opacity: 0.45,
            }}
          >
            highlights — zsh — 80×24
          </span>
        </div>

        {/* body */}
        <div style={{ padding: "22px 24px", fontSize: "15px", lineHeight: "1.85" }}>
          <div style={{ color: "var(--text-2)", fontSize: "12px", marginBottom: "10px" }}>
            $ cat focus.md
          </div>
          <p style={{ color: "var(--text-1)", marginBottom: "22px" }}>
            Deep in{" "}
            <span style={{ color: VIOLET, fontWeight: 600 }}>math, ML, and deep learning</span>{" "}
            right now — first principles over tutorials.
          </p>

          <p style={{ marginBottom: "22px" }}>
            <HighlightLink href="/studio/projects">→ see the projects I&apos;m building</HighlightLink>
          </p>

          <div style={{ color: "var(--text-2)", fontSize: "12px", marginBottom: "8px" }}>
            $ cat currently-reading.md
          </div>
          <p style={{ margin: 0 }}>
            Currently reading <HighlightLink href="/studio/books">Ikigai</HighlightLink>.
          </p>
        </div>
      </div>
    </div>
  );
}
