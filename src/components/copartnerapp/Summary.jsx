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
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">New traders face multiple hurdles:</h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Lack of knowledge:</span>
                  They don’t know what to buy/sell, when to enter, or how long to hold.
                </li>
                <li>
                  <span className="text-white font-semibold">Information overload:</span>
                  Too many random tips on social media without credibility.
                </li>
                <li>
                  <span className="text-white font-semibold">No structured guidance:</span>
                  Beginners struggle without proper analysis or risk management.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                The challenge was to build a reliable platform where verified research analysts can publish trading tips, and users can subscribe to access structured, trustworthy market guidance.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research:</span>
                Studied user needs of beginner traders and research analysts.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structured flows for subscription, content delivery, and notifications.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Designed onboarding, subscription journey, and tips feed.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Created a scalable design library with finance-specific patterns.
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
                Validated simplicity of subscription and tips access with real users.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Improved trust:</span>
                Users found tips more reliable than social media sources.
              </li>
              <li>
                <span className="text-white font-semibold">Onboarding speed:</span>
                70% of testers completed subscription and accessed tips in under 5 minutes.
              </li>
              <li>
                <span className="text-white font-semibold">Positive Feedback:</span>
                Finally, a single platform to get structured and verified trading tips.”
              </li>
              <li>
                <span className="text-white font-semibold">Analyst adoption:</span>
                Research providers found it easy to publish and monetize their content.
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
                  <li>Interviewed 10 beginner traders to understand their struggles with market entry.</li>
                  <li>Collected insights from 3 research analysts about how they deliver tips and analysis.</li>
                  <li>Identified top needs: <span className="text-white font-semibold">credibility, simplicity, and timely updates.</span></li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Key modules: Onboarding, Subscription Plans, Tips Feed, Market Updates, Account Dashboard.</li>
                  <li>Designed notification triggers for new tips and urgent market updates.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Created low-fidelity wireframes for subscription selection → payment → tip feed.</li>
                  <li>Focused on a clean, card-based layout for tips (stock name, buy/sell, holding period, target).</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Built high-fidelity prototypes in Figma.</li>
                  <li>Finance-friendly color scheme: green for gains, red for sell signals, blue for insights.</li>
                  <li>Clear emphasis on actionable info with minimal distractions.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Tested prototypes with 8 beginner users.</li>
                  <li>Simplified subscription flow from 5 steps → 3 steps.</li>
                  <li>Added quick filters (By Sector, By Analyst, By Risk Level).</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Subscription-based access:</span>
                Users subscribe to verified analysts/research providers.
              </li>
              <li>
                <span className="text-white font-semibold">Tips Feed:</span>
                Clean, card-style tips (stock, buy/sell, entry point, target, holding duration).
              </li>
              <li>
                <span className="text-white font-semibold">Market Updates Section:</span>
                Daily insights and trending stocks shared by analysts.
              </li>
              <li>
                <span className="text-white font-semibold">Notifications:</span>
                Real-time alerts for new tips and important updates.
              </li>
              <li>
                <span className="text-white font-semibold">Simple UI for Beginners:</span>
                Easy onboarding and intuitive design for first-time traders.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only (shown after Solution) */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Improved trust:</span>
                Users found tips more reliable than social media sources.
              </li>
              <li>
                <span className="text-white font-semibold">Onboarding speed:</span>
                70% of testers completed subscription and accessed tips in under 5 minutes.
              </li>
              <li>
                <span className="text-white font-semibold">Positive Feedback:</span>
                Finally, a single platform to get structured and verified trading tips.”
              </li>
              <li>
                <span className="text-white font-semibold">Analyst adoption:</span>
                Research providers found it easy to publish and monetize their content.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
