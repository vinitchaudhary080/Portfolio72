// src/components/projectdetails/projectdummy/ProcessStep1.jsx
import React from "react";

export default function ProcessStep1() {
  return (
    <section className="bg-black text-white px-6 sm:px-20 py-20 ">
      {/* Heading Line like "Work Samples" style */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          THE PROCESS
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold mb-12">
        Designing the Algo Strategy Builder
      </h1>

      {/* Discovery & Research */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Discovery & Research
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Conducted in-depth interviews with novice and expert algo traders to map out their workflows, pain points, and tool fragmentation. Identified key needs around rapid strategy iteration and error-free backtesting.
        </p>
      </div>

      {/* Ideation & Information Architecture */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Ideation & Information Architecture
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Synthesized research insights into a drag-and-drop strategy builder concept. Crafted user flows, wireframes, and site maps to define a step-by-step process for rule creation, risk configuration, and backtest reporting.
        </p>
      </div>
    </section>
  );
}
