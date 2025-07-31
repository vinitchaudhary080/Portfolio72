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
        Designing the MVP for CoPartner App
      </h1>

      {/* Discovery Block */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Discovery</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          The first phase was centered on understanding both sides of the ecosystem: novice traders who were confused
          about what to buy or sell, and SEBI-registered research analysts who had valuable signals but lacked a scalable,
          trusted delivery mechanism. Through user interviews and journey mapping, key pain points surfaced—signal ambiguity,
          lack of trust, decision paralysis, and analysts' need for credibility and monetization. These insights shaped the
          core design goals: clarity in signal presentation, trust-building, and reducing cognitive load for faster decisions.
        </p>
      </div>

      {/* Planning Block */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Structuring the Platform & User Flows
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          With discovery insights as the foundation, I defined the app’s architecture—outlining distinct user roles (trader vs.
          analyst), subscription and onboarding flows, and the feedback/reputation loop. Detailed user flows and wireframes were
          created for signal consumption, subscription conversion, and analyst credibility display. Information hierarchy was
          optimized to surface high-confidence trade signals, contextual education, and analyst performance without overwhelming
          the user. Multiple iterations of flowcharts ensured each path enabled informed action quickly and consistently.
        </p>
      </div>
    </section>
  );
}
