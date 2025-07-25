// src/components/Navbar1.jsx
import React from "react";

export default function Navbar({ onMenuClick }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white ">
      <div className="w-full flex justify-between items-center px-6 py-4 text-xs sm:text-sm backdrop-blur-md bg-transparent">
        {/* Left - Brand Name */}
        <div className="font-semibold tracking-widest text-white uppercase">
          Boulevard
        </div>

    

        {/* Right - Cart and Menu */}
        <div className="flex items-center gap-6 text-white">
          <span className="tracking-wide text-sm">©2025</span>
          <span className="tracking-wide text-sm">CART 🛒</span>
          <button
            onClick={onMenuClick}
            className="font-semibold tracking-wide text-sm"
          >
            MENU
          </button>
        </div>
      </div>
    </header>
  );
}
