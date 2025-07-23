// src/components/KnowMoreSection.jsx
import React from "react";

export default function KnowMoreSection() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white font-sans px-6 sm:px-20 py-10">
      {/* Top Labels */}
      <div className="flex justify-between items-center text-xs sm:text-sm text-gray-300 mb-10 tracking-wide">
        <span>PREMIUM AGENCY TEMPLATE</span>
        <span>©2025</span>
      </div>

      {/* Vertically centered content */}
      <div className="flex items-center justify-center h-[80vh]">
        <div className="max-w-3xl space-y-10">
          <p className="font-sans text-2xl sm:text-3xl leading-[1.6] font-medium tracking-tight">
            Discover the stories, moments, and shared vision that shape a
            collaborative and vibrant space at our agency, where design thrives
            and bold concepts turn into reality.
          </p>

          <p className=" font-sans text-lg text-gray-500 leading-[1.7] tracking-normal">
            Uncover the journeys, ideas, and creative drive that fuel a{" "}
            <span className="text-white font-medium font-sans">
              dynamic and innovative
            </span>{" "}
            atmosphere, inspiring connections and bringing transformative
            projects to life.
          </p>
        </div>
      </div>
    </section>
  );
}
