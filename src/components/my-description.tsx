"use client";

import { TextRevealCard } from "./text-reveal-card";

export function MyDescription() {
  return (
    <div className="flex items-center justify-center rounded-2xl max-w-xl w-full mt-[4rem]">
      <TextRevealCard
        text="From Concept"
        revealText="To Reality"
        // from concept to production
        // from concept to clickable
        // from problems to solutions
        className="text-center"
      />
    </div>
  );
}
