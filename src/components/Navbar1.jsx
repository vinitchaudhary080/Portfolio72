// src/components/Navbar1.jsx
import React from "react";

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 text-gray-300 font-sans">
      <div className="w-full flex justify-between items-center px-6 pt-6 text-xs sm:text-sm">
        {/* Left */}
        <div className="font-medium tracking-wide">
          Vinitchaudhary
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 tracking-wide">
          <span>©2025</span>
          <span className="cursor-pointer font-medium">MENU</span>
        </div>
      </div>
    </header>
  );
}
