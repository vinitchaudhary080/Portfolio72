// src/components/projectdetails/projectdummy/ProcessStep1.jsx
import React from "react";

export default function ProcessStep1() {
  return (
    <section className="bg-black text-white px-6 sm:px-20 py-20 ">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          THE PROCESS 
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold mb-12">
        Defining Vision & Discovery
      </h1>

      {/* User Research Block */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          User Research & Pain Points
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Conducted in‐depth interviews and surveys with both beginner and professional crypto traders to surface their top frustrations:
          fragmented trading tools, delayed price updates, and information overload. Synthesized these insights into a clear set of user needs and success metrics.
        </p>
      </div>

      {/* Flow Mapping & Wireframing Block */}
      <div className="mb-16">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Flow Mapping & Wireframing
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Mapped core user journeys—market monitoring, order placement, portfolio review, and alerts—and created low‐fidelity wireframes to validate layout and hierarchy.
          Iterated quickly based on usability feedback to ensure a seamless, intuitive navigation structure.
        </p>
      </div>

      
      
    </section>
  );
}
