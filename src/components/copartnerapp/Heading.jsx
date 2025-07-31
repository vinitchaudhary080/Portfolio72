import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Top Row */}
      <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-6">
        <span className="font-medium">CoPartner Application</span>
        <span className="font-medium">2025</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-7xl font-semibold leading-tight max-w-4xl">
        Know what to buy. <br />
        Know when to sell.
      </h1>

      {/* Subheading */}
      <p className="mt-4 text-base sm:text-lg max-w-2xl font-light">
        Real-time SEBI-verified research signals from trusted analysts.
      </p>
    </section>
  );
}
