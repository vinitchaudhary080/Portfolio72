// src/components/projectdetails/projectdummy/WireframesContent.jsx
import React from "react";

export default function WireframesContent() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-10">
        Problem & Solution Exploration
      </h2>

      <div className="space-y-12  text-sm sm:text-base leading-relaxed max-w-4xl">
        {/* Problem Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Problem
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
            Traders were overwhelmed by cluttered interfaces and disjointed tools,
            struggling to prioritize critical data—like live price feeds and open orders—
            across multiple platforms. This led to slow decision-making and missed opportunities.
          </p>
        </div>

        {/* Solution Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Solution
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
            Crafted low-fidelity wireframes to prototype a unified, modular dashboard.
            We tested various layouts to surface essential insights up front, streamlined
            onboarding and trade flows, and used quick feedback loops to validate each
            interaction before moving to high-fidelity design and real-time data integration.
          </p>
        </div>
      </div>
    </section>
  );
}
