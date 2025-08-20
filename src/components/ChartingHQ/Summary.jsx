// components/projectdummy/Summary.jsx
import React from "react";

export default function Summary() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-12">Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        {/* Left Column */}
        <div className="space-y-16 sm:space-y-32">
          {/* Mission */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              ChartingHQ’s mission is to empower traders by consolidating fragmented tools into one unified platform. Traders can now access live charts, technical indicators, order entry and P&L tracking—all in a single, customizable dashboard—reducing context switches and speeding up decision-making.
            </p>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">My Contributions</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              As Lead UI/UX Designer, I owned the end-to-end workflow: conducted user research and trader interviews, crafted wireframes and interactive prototypes in Figma, and developed high-fidelity React components styled with Tailwind CSS. I built a modular design system, integrated real-time broker APIs via WebSockets, and ran iterative usability tests with active traders—refining layouts, micro-interactions, and performance optimizations for launch.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Client */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              ChartingHQ (Stealth Fintech Startup)<br />
              Remote / India
            </p>
            <div className="flex gap-3 mt-3">
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">React</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Tailwind CSS</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Services</h3>
            <ul className="text-gray-400 list-disc pl-5  text-sm sm:text-base space-y-1">
            <li>User Research & Flow Mapping</li>
              <li>Wireframing & Prototyping</li>
              <li>User Interface Design</li>
              <li>High-Fidelity Mockups</li>
              
              <li>Micro-Interactions & Animations</li>
              <li>Usability & A/B Testing</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
