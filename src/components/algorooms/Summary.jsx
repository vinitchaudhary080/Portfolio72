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
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Traditional traders face multiple challenges:</h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Manual limitations:</span>
                  They cannot efficiently track multiple markets or trades simultaneously.
                </li>
                <li>
                  <span className="text-white font-semibold">Missed opportunities:</span>
                  Human errors and emotional bias often lead to late entries/exits.
                </li>
                <li>
                  <span className="text-white font-semibold">Complex workflows:</span>
                  Traders rely on separate tools for charting, strategy building, and execution.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                This fragmented process results in inefficiency, higher risks, and reduced profitability.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research & Competitive Analysis:</span>
                Studied platforms like TradingView, Zerodha Streak, and AlgoTrader to identify gaps.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structured seamless flows for strategy creation, backtesting, and live deployment.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Designed user flows covering onboarding → strategy builder → backtest → deployment.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Built a scalable component library with dark/light mode themes tailored for traders.
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
                Conducted sessions with active retail traders & algo enthusiasts to validate user flows.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Reduced Cognitive Load:</span>
                Traders were able to design & deploy strategies in <span className="text-white font-semibold">40% fewer steps</span> compared to competitors.
              </li>
              <li>
                <span className="text-white font-semibold">Higher Adoption:</span>
                <span className="text-white font-semibold">70% of test users</span> preferred Algorooms over manual trading due to its simplicity and seamless workflow.
              </li>
              <li>
                <span className="text-white font-semibold">Positive Feedback:</span>
                “It feels like TradingView + AlgoTrader combined, but 10x easier to use.”
              </li>
              <li>
                <span className="text-white font-semibold">Business Impact:</span>
                Boosted user confidence → improved retention and recurring engagement.
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
                <span className="text-white font-semibold">Research & Discovery:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Conducted interviews with 10+ active traders to understand daily pain points.</li>
                  <li>Analyzed existing platforms to find missing UX opportunities (e.g., seamless backtesting flow).</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Designed modular sections — Strategy Builder, Backtest Engine, Live Deployment, and Analytics Dashboard.</li>
                  <li>Prioritized reducing the learning curve for first-time algo traders.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Created low-fidelity flows to simplify “create strategy → set conditions → run backtest”.</li>
                  <li>Focused on drag-and-drop interactions for easy strategy setup.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Developed high-fidelity prototypes in Figma.</li>
                  <li>Implemented a dark-mode UI for long trading sessions with clear typography and contrast.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Ran usability tests with 6 traders.</li>
                  <li>Optimized flows (reduced backtest setup from 6 steps → 3 steps).</li>
                  <li>Simplified deployment confirmation to build trust in automation.</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Unified Experience:</span>
                Strategy creation, testing, and execution — all in one seamless platform.
              </li>
              <li>
                <span className="text-white font-semibold">Drag-and-Drop Strategy Builder:</span>
                Allows traders to create strategies without writing a single line of code.
              </li>
              <li>
                <span className="text-white font-semibold">One-Click Backtesting:</span>
                Instantly test strategies against historical market data.
              </li>
              <li>
                <span className="text-white font-semibold">Live Deployment with Broker Integration:</span>
                Connects directly with multiple brokers for automated execution.
              </li>
              <li>
                <span className="text-white font-semibold">Performance Analytics:</span>
                Real-time dashboards to track profit/loss, success ratio, and risk metrics.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only (shown after Solution) */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Reduced Cognitive Load:</span>
                Traders were able to design & deploy strategies in <span className="text-white font-semibold">40% fewer steps</span> compared to competitors.
              </li>
              <li>
                <span className="text-white font-semibold">Higher Adoption:</span>
                <span className="text-white font-semibold">70% of test users</span> preferred Algorooms over manual trading due to its simplicity and seamless workflow.
              </li>
              <li>
                <span className="text-white font-semibold">Positive Feedback:</span>
                “It feels like TradingView + AlgoTrader combined, but 10x easier to use.”
              </li>
              <li>
                <span className="text-white font-semibold">Business Impact:</span>
                Boosted user confidence → improved retention and recurring engagement.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
