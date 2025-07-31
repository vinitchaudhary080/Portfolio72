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
          <div className="text-gray-400 space-y-4">
            <p>
              Traders were juggling multiple tools and spreadsheets to design, test, and launch algorithmic strategies—leading to manual data errors, slow iteration cycles, and a frustrating user experience.
            </p>
            <p>
              Backtests could take hours or even days on legacy systems, delaying insights and eroding confidence.
            </p>
            <p>
              Non-technical users struggled with code-based interfaces, limiting adoption of algo trading.
            </p>
          </div>
        </div>

        {/* Solution Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Solution
          </h3>
          <ul className="list-disc pl-5 text-gray-400 space-y-3">
            <li>
              <strong>Unified Web Dashboard:</strong> Built a single-page React app where users visually assemble strategies via drag-and-drop blocks (entry/exit rules, risk settings, indicators)—no coding required.
            </li>
            <li>
              <strong>High-Speed Backtesting Engine:</strong> Integrated a parallelized backtester that crunches years of historical data in minutes, with clear P&L charts and drawdown reports.
            </li>
            <li>
              <strong>One-Click Deployment:</strong> Connected directly to brokerage APIs so strategies move seamlessly from “Test” to “Live” mode, with real-time performance monitoring and customizable alerts.
            </li>
            <li>
              <strong>Intuitive UI/UX:</strong> Employed Tailwind CSS for responsive layouts, contextual tooltips, and theme support—making complex data approachable for both novice and expert traders.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
