"use client";
import Link from "next/link";
import { VIOLET } from "@/lib/constants";
import { books, posts, projects } from "@/lib/data";

const latestPost = posts[0];
const reading = books.filter((book) => book.status === "reading");

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

function Section({ command, last, children }: { command: string; last?: boolean; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: last ? 0 : "22px" }}>
      <div style={{ color: "var(--text-2)", fontSize: "12px", marginBottom: "8px" }}>
        $ {command}
      </div>
      <div style={{ color: "var(--text-1)" }}>{children}</div>
    </div>
  );
}

function Arrow() {
  return <span style={{ color: "var(--text-3)", marginRight: "8px" }}>→</span>;
}

function Sep() {
  return <span style={{ color: "var(--text-3)" }}> · </span>;
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
          <Section command="cat focus.md">
            Shipping{" "}
            <span style={{ color: VIOLET, fontWeight: 600 }}>apps, web apps &amp; personalised software</span>,
            building{" "}
            <span style={{ color: VIOLET, fontWeight: 600 }}>finance bots</span>,
            orchestrating{" "}
            <span style={{ color: VIOLET, fontWeight: 600 }}>agentic workflows</span>, and{" "}
            <span style={{ color: VIOLET, fontWeight: 600 }}>consulting</span>{" "}
            for teams working with AI.
          </Section>

          <Section command="cat currently-reading.md">
            <Arrow />
            {reading.map((book, i) => (
              <span key={book.title}>
                {i > 0 && <Sep />}
                <HighlightLink href="/studio/books">{book.title}</HighlightLink>
              </span>
            ))}
          </Section>

          {latestPost && (
            <Section command="cat latest-post.md">
              <Arrow />
              <HighlightLink href={`/studio/blog/${latestPost.slug}`}>{latestPost.title}</HighlightLink>
            </Section>
          )}

          <Section command="ls extras/" last>
            <Arrow />
            {projects.map((project, i) => (
              <span key={project.name}>
                {i > 0 && <Sep />}
                <HighlightLink href="/studio/extras">{project.name}</HighlightLink>
              </span>
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
}
