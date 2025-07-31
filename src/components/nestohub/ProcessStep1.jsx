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
        Designing the Unified Real Estate Ecosystem
      </h1>

      {/* Discovery Block */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Discovery</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Sabse pehle maine brokers, builders, aur end-clients ke saath interviews kiye taaki
          unke current workflows, pain points, aur coordination gaps ko samajh sakoon. Real estate
          operations fragmented the — brokers leads track nahi kar pa rahe the, builders inventory
          publish karne mein delays face kar rahe the, aur clients ko property status aur visit
          information clearly nahi mil rahi thi. Personas banaye gaye: performance-driven broker,
          efficiency-focused builder, aur information-seeking client. In interviews se “as-is”
          journey map banaayi gayi, jahan friction, data mismatch, aur conversion leakage identify kiye
          gaye.
        </p>
      </div>

      {/* Planning Block */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Structuring Role-Based Flows & Architecture
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Discovery ke insights ke baad product ki architecture design ki — teen primary roles ke
          liye alag-alag dashboards aur flows define kiye gaye: Broker, Builder, aur Client. Role-aware
          user flows banaye gaye jisme brokers ke liye lead-to-visit funnel, builders ke liye inventory
          readiness workflow, aur clients ke liye property exploration aur visit scheduling cover hua.
          Flow diagrams create karke core tasks ko prioritize kiya gaya (inventory publish karna,
          visit schedule karna, status sync karna, conversion track karna) aur real-time synchronization
          mechanism ka decision liya gaya taaki builder updates brokers aur clients tak turant pahunch
          jayein. Web + mobile responsiveness ko early stage se plan kiya gaya taaki on-the-go access
          seamless ho.
        </p>
      </div>
    </section>
  );
}
