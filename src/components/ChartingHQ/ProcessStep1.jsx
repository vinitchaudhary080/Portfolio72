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
        Designing the ChartingHQ MVP
      </h1>

      {/* Discovery Block */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Discovery</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          We began by mapping out traders’ existing workflows—jumping between chart services, broker portals, and analytics tools. Through stakeholder workshops and one-on-one interviews with active traders, we pinpointed core pain points: excessive context switching, inconsistent interfaces, and delayed data updates. A competitive audit of TradingView, MetaTrader, and leading broker dashboards helped define the essential features and interactions for our MVP.
        </p>
      </div>

      {/* Planning Block */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Planning the App Structure</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Synthesizing research insights, I laid out a modular dashboard architecture—chart canvas, watchlist, trade blotter, and P&L tracker—organized into a flexible grid. I created detailed flowcharts for key journeys: setting up multi-chart views, placing orders, and monitoring performance. Low-fidelity wireframes validated the panel resizing and workspace customization before moving into high-fidelity design.
        </p>
      </div>
    </section>
  );
}
