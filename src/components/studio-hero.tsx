"use client";
import { useEffect, useState } from "react";
import { VIOLET } from "@/lib/constants";

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

export default function StudioHero() {
  const { rendered, done } = useTypingSequence(LINES);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => setShowTitle(true), 400);
    return () => clearTimeout(t);
  }, [done]);

  const activeLine = rendered.length - 1;
  const activeLineComplete =
    rendered[activeLine] !== undefined &&
    rendered[activeLine].length === LINES[activeLine]?.length;

  return (
    <div className="py-10" style={{ fontFamily: "var(--font-geist-mono)" }}>

      {/* ── Terminal window ── */}
      <div
        style={{
          border: `1px solid ${VIOLET}30`,
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: `0 0 24px ${VIOLET}14, inset 0 0 12px ${VIOLET}06`,
          marginBottom: "40px",
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

      {/* ── ASCII cyberpunk title ── */}
      <div
        style={{
          opacity: showTitle ? 1 : 0,
          transform: showTitle ? "translateY(0)" : "translateY(14px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          textAlign: "center",
        }}
      >
        <div
          style={{
            color: VIOLET,
            opacity: 0.38,
            fontSize: "10px",
            letterSpacing: "0.1em",
            marginBottom: "12px",
            userSelect: "none",
          }}
        >
          {"──·──────────────────────────────────────·──"}
        </div>

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
          }}
        >
          OVAL STUDIO
        </h1>

        <div
          style={{
            color: VIOLET,
            opacity: 0.38,
            fontSize: "10px",
            letterSpacing: "0.1em",
            marginTop: "12px",
            userSelect: "none",
          }}
        >
          {"──·──────────────────────────────────────·──"}
        </div>

        <p
          style={{
            marginTop: "18px",
            color: VIOLET,
            opacity: 0.5,
            fontSize: "11px",
            letterSpacing: "0.18em",
          }}
        >
          {"// projects · experiments · startups"}
        </p>
      </div>
    </div>
  );
}
