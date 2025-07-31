// src/components/projectdetails/projectdummy/WireframesContent.jsx
import React from "react";

export default function WireframesContent() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-4">
        Case Study: CoPartner App
      </h2>
      <p className="text-gray-400 mb-10 max-w-2xl">
        Empowering novice traders with verified SEBI-registered research insights so they know what to buy and what to sell with confidence.
      </p>

      <div className="space-y-16 text-sm sm:text-base leading-relaxed max-w-4xl">
        {/* Problem Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Problem</h3>
          <p className="text-gray-400 mb-4">
            Retail and beginner traders face three core challenges: information overload from fragmented sources, lack of trustworthy signals, and analysis paralysis. They often don’t know what to buy or sell, and conflicting/unverified advice makes decision-making stressful. On the other side, SEBI-registered research analysts possess high-quality insights but lack a scalable, credible channel to deliver those signals and build reputation.
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-1">
            <li>Users unsure about real buy/sell decisions amid market noise.</li>
            <li>Conflicting or unverified advice leads to mistrust and hesitation.</li>
            <li>No unified, simple interface to consume analyst insights clearly.</li>
            <li>Analysts lack a structured, trustable system for monetization and credibility display.</li>
          </ul>
        </div>

        {/* Solution Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution / Approach</h3>
          <p className="text-gray-400 mb-6">
            CoPartner App was designed as a trust-first trading companion that bridges verified SEBI research analysts with novice traders through clear, subscription-based signal delivery and feedback-driven reputation mechanics.
          </p>

          {/* Feature list */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                Verified Analyst Profiles
              </h4>
              <p className="text-gray-400">
                Curated directory of SEBI-registered analysts with credibility indicators—past performance summaries, ratings, and trust signals—so traders know whose advice they’re acting on.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                Subscription Model
              </h4>
              <p className="text-gray-400">
                Traders subscribe to chosen analysts to receive real-time buy/sell recommendations including entry, target, stop-loss, risk level, and time horizon—packaged in a predictable cadence.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                Decision Dashboard
              </h4>
              <p className="text-gray-400">
                Unified view combining active signals, portfolio impact, alert notifications, and analyst performance to help users act quickly with context and confidence.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                Signal Clarity
              </h4>
              <p className="text-gray-400">
                Each recommendation is broken down into simple actionable pieces: what to do, why it matters, associated risk, and expected time frame—reducing cognitive load and ambiguity.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                New Trader Onboarding & Education
              </h4>
              <p className="text-gray-400">
                Contextual explainers and risk-management tips help beginners interpret signals correctly and build trading literacy over time.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                Feedback & Reputation Loop
              </h4>
              <p className="text-gray-400">
                Traders can rate analyst calls, creating a visible reputation system that rewards accuracy and helps future subscribers choose high-quality signal providers.
              </p>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-semibold mb-1">
                Trust & Conversion Enhancers
              </h4>
              <p className="text-gray-400">
                Testimonials, transparent past performance, and secure subscription gating reinforce credibility and reduce friction in conversion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
