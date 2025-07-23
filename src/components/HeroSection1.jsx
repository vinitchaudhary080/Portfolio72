// src/components/HeroSection1.jsx
import React from 'react';
import image from "../assets/image.jpg";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center text-white font-sans"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Left Middle */}
      <div className="absolute top-1/2 left-6 -translate-y-1/2 text-xs sm:text-sm text-gray-300 font-medium tracking-wide">
        LOS ANGELES BASED
      </div>

      {/* Right Middle */}
      <div className="absolute top-1/2 right-6 -translate-y-1/2 text-xs sm:text-sm text-gray-300 font-medium tracking-wide">
        CREATIVE DIRECTOR
      </div>

      {/* Center Branding */}
      <div className="flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Vinit Chaudhary<sup className="text-sm">®</sup>
        </h1>
      </div>

      {/* Learn More */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-xs sm:text-sm text-gray-300 font-medium opacity-90">
        / Learn more about us ↓
      </div>
    </section>
  );
}
