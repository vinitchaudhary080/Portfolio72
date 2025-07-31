// components/ChartingHQ/Heading.jsx
import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Top Row */}
      <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-10">
        <span className="font-medium">Alpha Exchange</span>
        <span className="font-medium">2025</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-5xl">
        Alpha Exchange<br />
        Dashboard
      </h1>
      <p className="mt-6 text-lg sm:text-xl max-w-3xl">
        A unified crypto trading interface offering real-time market overviews, modular charts,
        portfolio tracking, and instant trade execution via WebSockets.
      </p>
    </section>
  );
}
