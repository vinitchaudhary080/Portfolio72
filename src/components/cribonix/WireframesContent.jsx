// src/components/projectdetails/projectdummy/WireframesContent.jsx
import React from "react";

export default function WireframesContent() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-10">
        Problem & Solution Exploration
      </h2>

      <div className="space-y-12 text-sm sm:text-base leading-relaxed max-w-4xl">
        {/* Problem Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Problem
          </h3>
          <ul className="list-disc pl-5 space-y-3 text-gray-400">
            <li>
              <strong>Outdated Online Presence:</strong> Pehli website cluttered thi, responsive nahi thi, aur services clearly communicate nahi ho rahi thi — jiski wajah se brand ka professionalism weak lag raha tha.
            </li>
            <li>
              <strong>Low Lead Generation:</strong> Visitors ko value samajhne aur contact form tak pahunchne mein friction tha, jiski wajah se qualified inquiries kam aa rahi thi.
            </li>
            <li>
              <strong>Brand Inconsistency:</strong> Color palette, typography, aur imagery mein coherence nahi thi, jisse trust aur recognition build karna mushkil ho raha tha.
            </li>
          </ul>
        </div>

        {/* Solution Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Solution
          </h3>
          <div className="text-gray-400 space-y-4">
            <p>
              <strong>Modern UI/UX Redesign:</strong> React + Tailwind CSS se clean, minimal aur fully responsive layout banaya gaya. Hero section mein clear headline (“Grow Your Brand with Cribonix”) aur strong call-to-action dala gaya taaki value proposition turant samajh aaye.
            </p>
            <p>
              <strong>Service-Focused Structure:</strong> Core services ko visually cards aur icons ke zariye highlight kiya, aur “How We Work” / “Why Choose Us” jaise modular sections se user ko step-by-step process samjhaya gaya — clarity aur trust dono badhe.
            </p>
            <p>
              <strong>Seamless Navigation & Engagement:</strong> Sticky navbar with smooth scroll aur active-section highlight implement kiya gaya. Contact form har important touchpoint par accessible rakha gaya with inline validation to reduce friction.
            </p>
            <p>
              <strong>Performance & SEO Optimization:</strong> Images ko WebP/optimized format mein convert karke lazy-loading enable kiya; semantic HTML, meta tags, aur Open Graph tags add karke discoverability aur shareability improve ki gayi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
