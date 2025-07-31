// components/Nestohub/Heading.jsx
import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-12 sm:py-16 px-6 flex flex-col justify-center items-center text-center min-h-screen">
      {/* Top Row / Micro labels */}
      <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs sm:text-sm uppercase tracking-wider mb-8 max-w-7xl">
        <span className="font-semibold text-lg">Nestohub</span>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <span className="font-medium">Broker</span>
          <span className="font-medium">Builder</span>
          <span className="font-medium">Client</span>
        </div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-4xl">
        Unified real estate ecosystem <br className="hidden md:block" />
        for <span className="font-semibold">Brokers</span>,{" "}
        <span className="font-semibold">Builders</span> &amp;{" "}
        <span className="font-semibold">Buyers</span>
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-base sm:text-lg max-w-2xl">
        List inventory, schedule visits, and convert leads—with real-time sync across web and mobile.
      </p>

      
    </section>
  );
}
