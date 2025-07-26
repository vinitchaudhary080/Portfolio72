// src/components/FooterSection.jsx
import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="bg-black text-white px-6 sm:px-20 pt-16 pb-2">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 items-start text-center sm:text-left">
        {/* Email */}
        <a
          href="mailto:hello@boulevard.com"
          className="text-xl sm:text-2xl font-light hover:underline flex justify-center sm:justify-start items-center gap-2"
        >
          vinitchaudhary080@gmail.com{" "}
          <span className="text-lg">↗</span>
        </a>

        {/* Message */}
        <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto sm:mx-0">
          Reach out to Boulevard Studio today and let us help you craft designs
          that elevate your brand to the next level.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end items-center gap-6 text-white text-xl">
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      {/* <div className="flex flex-col sm:flex-row justify-between items-center border-t border-gray-800 pt-6 text-sm text-gray-500 gap-4">
        <p>
          Developed by <span className="text-white">Lucas Gusso</span> | Powered
          by <span className="text-white">Webflow</span>
        </p>

        <div className="flex gap-4 text-white font-light">
          <a href="#" className="hover:underline">License</a>
          <a href="#" className="hover:underline">Style Guide</a>
          <a href="#" className="hover:underline">Changelog</a>
        </div>
      </div> */}
    </footer>
  );
}
