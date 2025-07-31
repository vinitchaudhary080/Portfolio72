// components/ChartingHQ/Heading.jsx
import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white  pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Top Row */}
      <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-10">
        <span className="font-medium">RA Dashboard</span>
        <span className="font-medium">2025</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-5xl">
        Effortlessly manage<br />
        subscriptions,<br />
        track earnings,<br />
        optimize trades
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-3xl text-base sm:text-lg">
        Centralized analytics and real-time insights for smarter trading decisions—monitor performance, handle user roles, and get actionable tips all in one place.
      </p>

    </section>
  );
}
