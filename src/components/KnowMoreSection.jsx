// src/components/KnowMoreSection.jsx
import React from "react";

export default function KnowMoreSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-black text-white px-6 sm:px-20 pt-16 pb-32"
      aria-labelledby="about-heading"
    >
     
      <div className="mx-auto max-w-3xl space-y-6">
        {/* badge-style micro heading */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-gray-300">
          <span id="about-heading">From Complexity to Clarity</span>
        </div>

        {/* main statement */}
        <p className="text-2xl sm:text-3xl leading-[1.6] font-medium tracking-tight">
          I turn complex, data-heavy ideas into calm, task-first experiences with lightweight
          research, clear information architecture, and opinionated UI systems—so teams ship
          faster with fewer reworks.
        </p>

        {/* support line */}
        <p className="text-lg text-gray-500 leading-[1.7] tracking-normal">
          Guided by curiosity and craft, I build a{" "}
          <span className="text-white font-medium">dynamic, innovative</span> environment where
          ideas connect and transformative projects come to life.
        </p>
      </div>
    </section>
  );
}
