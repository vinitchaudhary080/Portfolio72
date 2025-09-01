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
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Investing in the stock market is exciting but difficult:</h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Beginners:</span>
                  Don’t know where to start or which stocks to pick.
                </li>
                <li>
                  <span className="text-white font-semibold">Part-time investors:</span>
                  Lack structured strategies and discipline.
                </li>
                <li>
                  <span className="text-white font-semibold">Professional traders:</span>
                  Don’t have the time to rebalance portfolios daily or track dozens of trades.
                </li>
                <li>
                  <span className="text-white font-semibold">Manual processes:</span>
                  Missed opportunities, emotional bias, and poor returns.
                </li>
                <li>
                  <span className="text-white font-semibold">Competitors like Liquide, Univest, Stratzy exist, but they:</span>
                 Focus heavily on generic advice (less personalization).
                  <li>
                  
                 Lack seamless automation (users still manage rebalancing manually).
                </li>
                 <li>
                  
                 UX/UI is cluttered and overwhelming for new users.
                </li>
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                Investock.ai solves these by combining automation, expert advisory, and ready-to-use model portfolios in one platform.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research & Competitor Benchmarking:</span>
                Study (Studied Liquide, Univest, Stratzy)
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structured flows for Model Portfolio, Advisory, and Basket modules.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Designed onboarding, broker connection, investment flows.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
               Created modern, professional finance UI with high clarity and trust-building elements.
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
               Validated simplicity of flows with beginners and part-time traders.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Beginner-friendly:</span>
                Reduced investing barrier for first-timers; users could start in less 10 minutes.
              </li>
              <li>
                <span className="text-white font-semibold">Time saving:</span>
                Professionals saved hours/week on rebalancing & manual stock tracking.
              </li>
              <li>
                <span className="text-white font-semibold">Better retention:</span>
                Testers said the automation + advisory mix gave more confidence than competitor apps.
              </li>
              <li>
                <span className="text-white font-semibold">Competitive Edge:</span>
                Cleaner UI, more automation, and expert-backed strategies compared to Liquide/Univest/Stratzy.
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
                  <li>Interviewed 12 users (4 beginners, 5 part-time, 3 professionals).</li>
                  <li>Found frustrations: scoring confusion, lack of team organization, and no digital history.</li>
                  
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <span className="text-white font-semibold">Three main modules:</span>
                  <li>Model Portfolio: Expert-created strategies (SEBI registered RAs).</li>
                  <li>Advisory: Stock-specific buy/sell calls with entry, stop loss, and targets.</li>
                  <li>Basket: Predefined stock baskets with automated execution.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Designed beginner-friendly onboarding with broker login integration.</li>
                  <li>Flows for selecting strategies, adding to portfolio, and letting automation take over.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Built high-fidelity Figma prototypes.</li>
                  <li>Finance-focused color scheme → trust (blue tones), growth (green), caution (red).</li>
                  <li>Minimal dashboards to reduce learning curve.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Conducted usability testing with 10 participants.</li>
                  <li>Simplified portfolio screens (removed jargon).</li>
                  <li>Added performance tracking graphs after feedback.</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Model Portfolio:</span>
                Users can subscribe to SEBI-registered advisors’ strategies. Once activated, Investock.ai handles rebalancing, stock shuffling, stop loss, and trade execution automatically.
              </li>
              <li>
                <span className="text-white font-semibold">Advisory Module:</span>
                Provides expert recommendations on which stock to buy, when to enter, target prices, stop-loss levels, and holding periods.
              </li>
              <li>
                <span className="text-white font-semibold">Basket Investing:</span>
               Curated baskets of multiple stocks (sectoral, thematic, or risk-based). Users just pick a basket → the system manages entry, exit, and tracking automatically.
              </li>
              <li>
                <span className="text-white font-semibold">Seamless Broker Integration:</span>
               Connect your existing trading account → Investock.ai executes directly on your behalf.
              </li>
              <li>
                <span className="text-white font-semibold">Performance Tracking:</span>
               Dashboards showing returns, risk metrics, and rebalancing history.
              </li>
              
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only (shown after Solution) */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
             <li>
                <span className="text-white font-semibold">Beginner-friendly:</span>
                Reduced investing barrier for first-timers; users could start in less 10 minutes.
              </li>
              <li>
                <span className="text-white font-semibold">Time saving:</span>
                Professionals saved hours/week on rebalancing & manual stock tracking.
              </li>
              <li>
                <span className="text-white font-semibold">Better retention:</span>
                Testers said the automation + advisory mix gave more confidence than competitor apps.
              </li>
              <li>
                <span className="text-white font-semibold">Competitive Edge:</span>
                Cleaner UI, more automation, and expert-backed strategies compared to Liquide/Univest/Stratzy.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
