"use client";
import { useEffect, useState } from "react";
import { VIOLET } from "@/lib/constants";
import StudioNav from "@/components/studio-nav";

const LINES = [
  "$ oval_studio --init",
  "checking deps ················· [✓]",
  "loading workspace ············· [✓]",
  "compiling assets ·············· [✓]",
  "status ── building in public",
];

const CHAR_SPEED = 12;   // ms per character
const LINE_GAP   = 80;   // ms pause between lines

function useTypingSequence(lines: string[]) {
  const [rendered, setRendered] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        for (let c = 0; c <= line.length; c++) {
          if (cancelled) return;
          setRendered((prev) => {
            const next = [...prev];
            next[i] = line.slice(0, c);
            return next;
          });
          await new Promise((r) => setTimeout(r, CHAR_SPEED));
        }
        await new Promise((r) => setTimeout(r, LINE_GAP));
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => { cancelled = true; };
  }, []);

  return { rendered, done };
}

const FADE_OUT_MS = 600;

export default function StudioHero({ onRevealed }: { onRevealed?: () => void }) {
  const { rendered, done } = useTypingSequence(LINES);
  const [terminalFading, setTerminalFading] = useState(false);
  const [terminalGone, setTerminalGone] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setTerminalFading(true), 500);
    return () => clearTimeout(t);
  }, [done]);

  useEffect(() => {
    if (!terminalFading) return;
    const t = setTimeout(() => setTerminalGone(true), FADE_OUT_MS);
    return () => clearTimeout(t);
  }, [terminalFading]);

  useEffect(() => {
    if (!terminalGone) return;
    const t = setTimeout(() => setShowTitle(true), 30);
    return () => clearTimeout(t);
  }, [terminalGone]);

  useEffect(() => {
    if (!showTitle) return;
    onRevealed?.();
  }, [showTitle, onRevealed]);

  const activeLine = rendered.length - 1;
  const activeLineComplete =
    rendered[activeLine] !== undefined &&
    rendered[activeLine].length === LINES[activeLine]?.length;

  return (
    <div className="py-10" style={{ fontFamily: "var(--font-geist-mono)" }}>
      {/* ── Terminal window ── */}
      {!terminalGone && (
        <div
          style={{
            background: "var(--bg)",
            border: `1px solid ${VIOLET}30`,
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: `0 0 24px ${VIOLET}14, inset 0 0 12px ${VIOLET}06`,
            marginBottom: "40px",
            opacity: terminalFading ? 0 : 1,
            transform: terminalFading ? "translateY(-10px) scale(0.98)" : "none",
            transition: `opacity ${FADE_OUT_MS}ms ease, transform ${FADE_OUT_MS}ms ease`,
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
              oval_studio — zsh — 80×24
            </span>
          </div>

          {/* terminal body */}
          <div style={{ padding: "16px 20px", minHeight: "140px" }}>
            {rendered.map((text, i) => {
              const isFirst = i === 0;
              const isLast  = i === LINES.length - 1;
              return (
                <div
                  key={i}
                  style={{
                    fontSize: "12px",
                    lineHeight: "1.7",
                    color: isFirst
                      ? "var(--text-2)"
                      : isLast
                      ? VIOLET
                      : "var(--text-2)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span>{text}</span>
                  {/* blinking cursor only on the actively-typing line */}
                  {i === activeLine && !activeLineComplete && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "7px",
                        height: "13px",
                        background: VIOLET,
                        marginLeft: "1px",
                        animation: "blink 0.75s step-end infinite",
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                  {/* idle cursor after last line is done */}
                  {done && i === LINES.length - 1 && (
                    <span
                      style={{
                        display: "inline-block",
                        width: "7px",
                        height: "13px",
                        background: VIOLET,
                        marginLeft: "1px",
                        animation: "blink 1.1s step-end infinite",
                        opacity: 0.6,
                        verticalAlign: "middle",
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Title ── */}
      {terminalGone && (
        <div
          style={{
            opacity: showTitle ? 1 : 0,
            transform: showTitle ? "translateY(0)" : "translateY(14px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
            textAlign: "center",
          }}
        >
          <h1
            className={showTitle ? "studio-title" : ""}
            style={{
              color: VIOLET,
              fontSize: "clamp(18px, 5vw, 42px)",
              letterSpacing: "0.12em",
              lineHeight: 1.4,
              margin: 0,
              fontFamily: "var(--font-press-start)",
              fontWeight: 400,
              marginBottom: "28px",
            }}
          >
            OVAL STUDIO
          </h1>

          <StudioNav />
        </div>
      )}
    </div>
  );
}
