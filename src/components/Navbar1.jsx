// src/components/Navbar1.jsx
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 text-gray-300 font-sans">
      {/* Top bar */}
      <div className="w-full flex justify-between items-center px-6 pt-6 text-xs sm:text-sm">
        <div className="font-medium tracking-wide">Vinitchaudhary</div>
        <div className="flex items-center gap-6 tracking-wide">
          <span>©2025</span>
          <span
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer font-medium"
          >
            MENU
          </span>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-black text-white z-[999] transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside menu
      >
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-6 text-[13px] font-medium">
          <span>START A PROJECT</span>
          <span
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer"
          >
            ✕ CLOSE
          </span>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-10 mt-20 px-6">
          {["Home", "About", "Works", "Contact"].map((label, i) => (
            <a
              key={i}
              href="#"
              className="text-[40px] font-light tracking-tight leading-tight"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* VIEW ALL PAGES */}
        <div className="mt-14 px-6 text-[13px] font-medium tracking-wide">
          VIEW ALL PAGES
        </div>

        {/* Footer bottom: Connect + Social */}
        <div className="mt-auto px-6 py-12 text-xs text-gray-400 grid grid-cols-2 gap-6">
          <div>
            <h4 className="uppercase mb-1 text-white text-[13px]">Connect</h4>
            <p className="leading-relaxed">
              1600 Amphitheatre Parkway<br />
              Mountain View — California
            </p>
          </div>
          <div>
            <h4 className="uppercase mb-1 text-white text-[13px]">Social</h4>
            <p className="leading-relaxed">Instagram<br />LinkedIn</p>
          </div>
        </div>
      </div>
    </header>
  );
}
