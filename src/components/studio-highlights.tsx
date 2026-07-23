"use client";
import { VIOLET } from "@/lib/constants";

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
        <div style={{ padding: "16px 20px", fontSize: "12px", lineHeight: "1.7" }}>
          <div style={{ color: "var(--text-2)" }}>$ cat highlights.txt</div>
          <div style={{ color: VIOLET }}>coming soon...</div>
        </div>
      </div>
    </div>
  );
}
