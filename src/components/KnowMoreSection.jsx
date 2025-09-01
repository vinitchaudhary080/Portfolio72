// src/components/KnowMoreSection.jsx
import React from "react";

export default function KnowMoreSection() {
  return (
    <section className="relative w-full bg-black text-white px-6 sm:px-20 pt-16 pb-32">
  {/* Top Labels */}
  <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300 mb-8 tracking-wide">
    <span>About me</span>
    <span>©2025</span>
  </div>

  {/* Content block (no more full‑screen min‑height) */}
  <div className="mx-auto max-w-3xl space-y-6">
   <p className="text-2xl sm:text-3xl leading-[1.6] font-medium tracking-tight">
 I turn complex, data-heavy ideas into calm, task-first experiences—using lightweight research, crisp IA, and opinionated UI systems—so your team ships faster with fewer reworks.
</p>

    <p className="text-lg text-gray-500 leading-[1.7] tracking-normal">
      Uncover the journeys, ideas, and creative drive that fuel a{' '}
      <span className="text-white font-medium">dynamic and innovative</span>{' '}
      atmosphere, inspiring connections and bringing transformative projects
      to life.
    </p>
  </div>
</section>

  );
}
