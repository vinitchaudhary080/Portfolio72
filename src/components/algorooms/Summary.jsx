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
              Algorooms Dashboard aims to empower traders of all levels by unifying strategy design, backtesting, and live deployment into a single intuitive interface—minimizing manual workflows and accelerating the path from idea to execution.
            </p>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">My Contributions</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              As Lead UI/UX Designer, I architected the drag-and-drop strategy builder, crafted detailed backtest result visualizations, and designed real-time monitoring modules. I collaborated closely with developers to implement a responsive React & Tailwind CSS component library, ensuring fast load times and seamless user interactions across devices.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Client */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Algorooms, Inc.<br />
              Fintech Startup (Remote)
            </p>
            <div className="flex gap-3 mt-3">
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Website</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">LinkedIn</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Services</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-1">
              <li>User Research & Personas</li>
              <li>Information Architecture</li>
              <li>Interaction & Visual Design</li>
              <li>Data Visualization & Dashboards</li>
              <li>Responsive Web Design</li>
              <li>React & Tailwind CSS Development</li>
              <li>Component Library & Design System</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
