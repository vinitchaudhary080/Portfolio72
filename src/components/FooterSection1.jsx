// src/components/FooterSection.jsx
import React from "react";
import { FaLinkedin, FaInstagram, FaBehance } from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white px-6 sm:px-20 py-0">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 items-start text-center sm:text-left">
        {/* Email */}
        <a
          href="mailto:tishakakkar05@gmail.com"
          className="text-xl sm:text-2xl font-light hover:underline flex justify-center sm:justify-start items-center gap-2"
          aria-label="Email Tisha Kakkar"
        >
          tishakakkar050@gmail.com <span className="text-lg">↗</span>
        </a>

        {/* Message */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
          Reach out today and let’s craft designs that elevate your brand to the next level.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end items-center gap-6 text-white text-xl" aria-label="Social links">
          <a href="https://www.linkedin.com/in/tisha-kakkar-55b0a41a0/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          {/* Keep Instagram commented if unused */}
          {/* <a href="https://www.instagram.com/ui_ux.uiigsh=eXpzcDVlaGZoNzVv&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Instagram">
            <FaInstagram />
          </a> */}
          <a href="https://www.behance.net/tishakakkar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400" aria-label="Behance">
            <FaBehance />
          </a>
        </div>
      </div>
    </footer>
  );
}
