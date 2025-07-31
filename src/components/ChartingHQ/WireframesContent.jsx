// src/components/projectdetails/projectdummy/WireframesContent.jsx
import React from "react";

export default function WireframesContent() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-10">
        Problem & Solution Exploration
      </h2>

      <div className="space-y-12 text-sm sm:text-base leading-relaxed max-w-4xl">
        {/* Problem Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Problem
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Traders were forced to hop between multiple charting platforms (e.g., TradingView), broker portals, and standalone analytics tools to conduct market analysis. This fragmented workflow led to 10–15 context switches per session, increasing cognitive load, causing errors, and slowing down decision-making. On top of that, each tool’s inconsistent UI/UX created confusion and a steep learning curve for new users.
          </p>
        </div>

        {/* Solution Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Solution
          </h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We crafted a unified React-based dashboard that combines live charts, technical indicators, order entry, and P&L tracking into one view. Modular workspaces let traders add, remove, or resize panels—like watchlists, chart canvases, and trade blotters—to match their trading style. Real-time broker API and WebSocket integrations ensure instantaneous data updates. A consistent design system built with Tailwind CSS and a custom component library guarantees visual harmony and predictable interactions. We validated every interaction through three rounds of Figma prototypes and clickable React builds with five active traders, refining layouts, color contrast, and micro-interactions before launch.
          </p>
        </div>
      </div>
    </section>
  );
}
