// src/components/Navbar1.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"; // adjust path if needed

export default function Navbar1({ onMenuClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-gray-200">
      <div className="flex justify-between items-center px-6 py-6 text-xs sm:text-sm bg-black/40 backdrop-blur-sm">
        {/* Logo instead of text */}
        <Link to="/" className="flex items-center" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Tishakakkar Logo"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        <nav aria-label="Primary" className="flex items-center gap-6 tracking-wide">
          <span>©2025</span>
          {/* button for a11y; styles keep it visually identical */}
          <button
            type="button"
            aria-label="Open menu"
            aria-controls="main-slide-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer font-medium"
          >
            MENU
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[998]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        id="main-slide-menu"
        className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-black text-white z-[999]
                    transition-transform duration-500 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex justify-between items-center px-6 py-6 text-[13px] font-medium">
          <span>START A PROJECT</span>
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="cursor-pointer"
            aria-label="Close menu"
          >
            ✕ CLOSE
          </button>
        </div>

        <nav className="flex flex-col gap-10 mt-20 px-6" aria-label="Menu links">
          <Link to="/" className="animated-underline text-[40px] font-light transition-colors" onClick={() => setIsMenuOpen(false)}>Main</Link>
          <Link to="/about" className="animated-underline text-[40px] font-light transition-colors" onClick={() => setIsMenuOpen(false)}>Who I Am</Link>
          <Link to="/works" className="animated-underline text-[40px] font-light transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</Link>
          <Link to="/contact" className="animated-underline text-[40px] font-light transition-colors" onClick={() => setIsMenuOpen(false)}>Say Hello</Link>
        </nav>

        <div className="mt-auto px-6 py-12 text-xs text-gray-400 grid grid-cols-2 gap-6">
          <div>
            <h4 className="uppercase mb-1 text-white text-[13px]">Connect</h4>
            <address className="not-italic leading-relaxed">
              Gurugram <br />
              Haryana 122013, India
            </address>
          </div>
          <div>
            <h4 className="uppercase mb-1 text-white text-[13px]">Social</h4>
            <p className="leading-relaxed space-y-2 text-gray-400">
              <a
                href="https://www.behance.net/tishakakkar"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Behance profile"
              >
                Behance
              </a>
              <br />
              <a
                href="https://www.linkedin.com/in/tisha-kakkar-55b0a41a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn profile"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
