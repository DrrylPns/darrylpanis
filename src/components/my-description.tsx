"use client";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./text-reveal-card";

export function MyDescription() {
  return (
    <div className="flex items-center justify-center rounded-2xl max-w-xl w-full mt-[4rem]">
      <TextRevealCard
        text="From Problems"
        revealText="To Solutions"
        className="text-center"
      />
    </div>
  );
}
