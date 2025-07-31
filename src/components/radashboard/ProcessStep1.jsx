// src/components/projectdetails/projectdummy/ProcessStep1.jsx
import React from "react";

export default function ProcessStep1() {
  return (
    <section className="bg-black text-white px-6 sm:px-20 py-20 ">
      {/* Heading Line */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          THE PROCESS
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold mb-12">
        Designing the RA Dashboard
      </h1>

      {/* Discovery Block */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Discovery</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          We kicked off with stakeholder interviews and a survey of traders and analysts to map out their workflows. Key pain points emerged around scattered data sources, manual tip delivery, and complex earnings calculations. From there, we defined our MVP scope: real-time insights, subscription & tip management, earnings tracking, and user roles—all within a unified interface.
        </p>
      </div>

      {/* Planning Block */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Planning the App Architecture
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          With core features identified, I sketched the information architecture and detailed user flows for each persona (trader, analyst, admin). I created flowcharts illustrating data pipelines (subscriptions → tips → P&L) and wireframes for dashboard modules. This structured blueprint ensured alignment before moving into high-fidelity design.
        </p>
      </div>
    </section>
  );
}
