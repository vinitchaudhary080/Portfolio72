// components/projectdummy/Summary.jsx
import React from "react";

export default function Summary() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-12">Problem / Challenge</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        {/* Left Column */}
        <div className="space-y-16 sm:space-y-32">
          {/* Mission */}
          <div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Active traders often face these major pain-points:</h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Scattered workflow:</span>
                  They jump between multiple sites—TradingView for charts, news portals for market updates, broker terminals for order execution.
                </li>
                <li>
                  <span className="text-white font-semibold">Missed opportunities:</span>
                  By spending too much time context-switching, they miss key entry/exit points.
                </li>
                <li>
                  <span className="text-white font-semibold">High learning curve:</span>
                  New traders struggle to combine analysis with strategy building.
                </li>
                  <li>
                  <span className="text-white font-semibold">Inefficient execution:</span>
                  Manual handling increases time taken to test and deploy strategies.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                The challenge was to design a unified, time-saving trading platform that reduces friction and boosts decision-making efficiency.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research & Competitor Study</span>
                Studied platforms like Benchmarked TradingView, Zerodha, Fyers.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structured flow for charts, market overview, insider strategy builder, backtesting, deployment.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                User flows for analysis → strategy → execution.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Created component library with consistent patterns.
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
                Validated flows with traders and iterated on feedback.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Time saving:</span>
                Traders spent <span className="text-white font-semibold">40% less time</span> analyzing compared to multi-tool workflows.
              </li>
              <li>
                <span className="text-white font-semibold">Better decisions:</span>
                 Users reported catching entry/exit points<span className="text-white font-semibold">25% more accurately.</span>
              </li>
              <li>
                <span className="text-white font-semibold">User adoption:</span>
                80% of testers said they would replace their current multi-tool setup with ChartingHQ.
              </li>
              <li>
                <span className="text-white font-semibold">Client feedback:</span>
                “Finally, a trading workspace where everything is in one place—this saves us hours daily.”
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Process & Approach */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Process & Approach</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-4">
              <li>
                <span className="text-white font-semibold">Discovery & Research</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Interviewed 12 active traders (mix of intraday, swing, algo enthusiasts).</li>
                  <li>Identified top frustrations: “too many tabs open”, “slow to switch”, “missed entries”.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Mapped key modules: Dashboard, Charts, Market Overview, Stock Sectors, Insider Strategies, Backtest, Deploy.</li>
                  <li>Designed navigation to minimize clicks (Less then 3 steps to move from chart → execution).</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Sketched flows for chart analysis, strategy creation, backtest.</li>
                  <li>Prioritized reducing steps for order execution.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Designed high-fidelity prototypes in Figma.</li>
                  <li>Created modular dashboard with widgets for charts, watchlists, news.</li>
                  <li>Insider strategy builder with simple drag-and-drop conditions.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Conducted usability tests with 8 traders.</li>
                  <li>Reduced backtesting steps from 6 → 3.</li>
                  <li>Simplified insider strategy builder with pre-set templates.</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">All-in-one dashboard:</span>
                Charts, sectors, market overview integrated in one screen.
              </li>
              <li>
                <span className="text-white font-semibold">Insider Strategy:</span>
                Backtest, and deploy strategies without code.
              </li>
              <li>
                <span className="text-white font-semibold">Backtesting Engine:</span>
                Test strategies on historical data with performance metrics.
              </li>
              <li>
                <span className="text-white font-semibold">Seamless Deployment:</span>
                One-click strategy deployment directly to broker.
              </li>
              <li>
                <span className="text-white font-semibold">Customizable Widgets:</span>
                Traders can personalize dashboard layouts.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only (shown after Solution) */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Time saving:</span>
                Traders spent <span className="text-white font-semibold">40% less time</span> analyzing compared to multi-tool workflows.
              </li>
              <li>
                <span className="text-white font-semibold">Better decisions:</span>
                 Users reported catching entry/exit points<span className="text-white font-semibold">25% more accurately.</span>
              </li>
              <li>
                <span className="text-white font-semibold">User adoption:</span>
                80% of testers said they would replace their current multi-tool setup with ChartingHQ.
              </li>
              <li>
                <span className="text-white font-semibold">Client feedback:</span>
                “Finally, a trading workspace where everything is in one place—this saves us hours daily.”
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
