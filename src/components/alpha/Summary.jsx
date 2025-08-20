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
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">The crypto trading landscape is often:</h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Overwhelming for new users:</span>
                  with cluttered interfaces and technical jargon.
                </li>
                <li>
                  <span className="text-white font-semibold">Cumbersome for experienced traders:</span>
                  who need fast execution and reliable data.
                </li>
                <li>
                  <span className="text-white font-semibold">Scattered experiences:</span>
                  where portfolio, trading, and market analytics exist in separate apps.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                This created a need for a unified, intuitive, and reliable crypto trading experience that balances simplicity with powerful trading features.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research & Competitive Analysis:</span>
                understanding both novice & pro crypto traders.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structuring navigation for market, trade, portfolio, and account modules.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Building intuitive flows for onboarding, trading, and portfolio tracking.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Clean, scalable, crypto-focused visuals with responsive layouts.
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
                Validating ease of use with both first-time crypto users and advanced traders.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Reduced Cognitive Load:</span>
                <span className="text-white font-semibold">30% faster onboarding</span> compared to competitor flows.
              </li>
              <li>
                <span className="text-white font-semibold">Higher Adoption:</span>
                <span className="text-white font-semibold">70% of test users</span> described the platform as “much easier than Binance for quick trades.
              </li>
              <li>
                <span className="text-white font-semibold">Positive Feedback:</span>
                Increased trust & confidence due to transparent design and simple navigation.
              </li>
              <li>
                <span className="text-white font-semibold">Enhanced adoption:</span>
                beginners could place their first trade within 10 minutes of signup.
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
                  <li>Surveyed 15 traders (mix of beginners & pros) to map challenges.</li>
                  <li>Benchmarked leading platforms (Binance, Coinbase, WazirX) to identify usability gaps.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Created a simple 4-module navigation: Markets, Trade, Portfolio, Account.</li>
                  <li>Ensured beginners could start trading in lase 3 clicks.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Low-fidelity sketches → mid-fidelity prototypes.</li>
                  <li>Focused on drag-and-drop interactions for easy strategy setup.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Developed high-fidelity prototypes in Figma.</li>
                  <li>Focused on reducing the learning curve by using familiar design patterns.</li>
                  <li>Clean UI with card-based market listings, quick buy/sell CTAs.</li>
                  <li>Intuitive color coding for gains/losses (green/red).</li>
                  <li>Responsive design for web + mobile.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Usability tested with 10 participants.</li>
                  <li>Simplified trade confirmation steps from 5 → 3 clicks.</li>
                  <li>Added portfolio performance graphs after feedback.</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">One-click trading:</span>
                Quick buy/sell buttons right from market cards.
              </li>
              <li>
                <span className="text-white font-semibold">Portfolio dashboard:</span>
                Visual graphs showing asset allocation, profit/loss, and growth trends.
              </li>
              <li>
                <span className="text-white font-semibold">Market insights:</span>
                Live prices, trending coins, and watchlist features.
              </li>
              <li>
                <span className="text-white font-semibold">Seamless onboarding:</span>
                Easy KYC flow + wallet setup.
              </li>
              <li>
                <span className="text-white font-semibold">Cross-platform consistency:</span>
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
                <span className="text-white font-semibold">30% faster onboarding</span> compared to competitor flows.
              </li>
              <li>
                <span className="text-white font-semibold">Higher Adoption:</span>
                <span className="text-white font-semibold">70% of test users</span> described the platform as “much easier than Binance for quick trades.
              </li>
              <li>
                <span className="text-white font-semibold">Positive Feedback:</span>
                Increased trust & confidence due to transparent design and simple navigation.
              </li>
              <li>
                <span className="text-white font-semibold">Enhanced adoption:</span>
                beginners could place their first trade within 10 minutes of signup.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
