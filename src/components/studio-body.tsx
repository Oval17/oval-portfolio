"use client";
import { useState, useCallback } from "react";
import StudioHero from "@/components/studio-hero";
import StudioHighlights from "@/components/studio-highlights";

export default function StudioBody() {
  const [revealed, setRevealed] = useState(false);
  const onRevealed = useCallback(() => setRevealed(true), []);

  return (
    <>
      <StudioHero onRevealed={onRevealed} />
      <StudioHighlights revealed={revealed} />
    </>
  );
}
