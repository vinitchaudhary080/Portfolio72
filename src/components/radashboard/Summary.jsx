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
              Empower traders and analysts with a unified platform for real-time analytics, subscription & tip management, and earnings tracking—streamlining workflows, reducing manual errors, and enabling faster, data-driven decisions.
            </p>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">My Contributions</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              As the UI/UX Designer, I led stakeholder workshops and user interviews to define core workflows, created low- and high-fidelity wireframes & interactive prototypes in Figma for rapid validation, established a modular design system, and collaborated with engineers to integrate data-visualization libraries (Highcharts) into responsive React components—while ensuring accessibility and performance optimizations.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Client */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              ChartingHQ<br />
              Internal Trading Analytics Platform
            </p>
            <div className="flex gap-3 mt-3">
              <a href="https://purple-wren-537479.hostingersite.com/#/raDashboard/RA-Dashboard" target="_blank" rel="noopener noreferrer">
                <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Live</span>
              </a>
              <a href="https://github.com/your-repo/ra-dashboard" target="_blank" rel="noopener noreferrer">
                <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Repo</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Services</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-1">
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
