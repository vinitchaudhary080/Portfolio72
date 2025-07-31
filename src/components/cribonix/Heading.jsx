import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Top Row */}
      <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-10">
        <span className="font-medium">CRIBONIX</span>
        <span className="font-medium">2025</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-5xl">
        Cribonix combines <br />
        strategic insight <br />
        with creative <br />
        excellence
      </h1>
    </section>
  );
}
