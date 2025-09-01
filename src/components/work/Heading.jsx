// components/work/Heading.jsx
import React from "react";

export default function Heading() {
  return (
    <section
      className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center"
      aria-labelledby="work-heading"
    >
      {/* Top Row */}
      <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-10">
        <span className="font-medium">PROJECTS</span>
        <span className="font-medium">2025</span>
      </div>

      {/* Main Heading */}
      <h1 id="work-heading" className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-5xl">
        Work <br />
        High-end visuals, <br />
        exceptional moments
      </h1>

      {/* SR-only helper */}
      <p className="sr-only">
        A curated list of case studies and product work across fintech, e-commerce, real estate, and trading.
      </p>
    </section>
  );
}
