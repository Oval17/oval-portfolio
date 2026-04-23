"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/data";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="mb-12">
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
            style={{ color: "#f0f0f0", letterSpacing: "-0.02em" }}
          >
            hi, {personal.name.toLowerCase()} here
          </h1>
          <p className="text-sm" style={{ color: "#555" }}>
            {personal.tagline}
          </p>
        </div>

        <div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 flex items-center justify-center text-xl font-bold"
          style={{ background: "#1a1a1a", color: "#444", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {mounted ? "Ov" : null}
        </div>
      </div>
    </section>
  );
}
