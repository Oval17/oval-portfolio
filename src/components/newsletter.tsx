"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="py-8 border-t" style={{ borderColor: "var(--border)" }}>
      <h2 className="text-base font-bold mb-1" style={{ color: "var(--text-1)" }}>
        Stay Connected
      </h2>
      <p className="text-sm mb-5" style={{ color: "var(--text-2)" }}>
        New posts, project updates, and things I find interesting — straight to your inbox.
      </p>

      {submitted ? (
        <p className="text-sm font-mono" style={{ color: "var(--text-2)" }}>
          ✓ You&apos;re in. I&apos;ll be in touch.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2 flex-col sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 text-sm px-3 py-2 rounded-md outline-none transition-colors font-mono"
            style={{
              background: "var(--surface)",
              color: "var(--text-1)",
              border: "1px solid var(--border)",
            }}
            onFocus={(e) => (e.currentTarget.style.borderColor = "var(--text-3)")}
            onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md text-sm font-medium transition-opacity hover:opacity-90"
            style={{
              background: "var(--text-1)",
              color: "var(--bg)",
            }}
          >
            Subscribe
          </button>
        </form>
      )}
      <p className="text-xs mt-3" style={{ color: "var(--text-3)" }}>
        No spam. Unsubscribe anytime.
      </p>
    </section>
  );
}
