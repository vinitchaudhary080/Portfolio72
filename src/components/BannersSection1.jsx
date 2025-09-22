// src/components/BannersSection.jsx
import React from "react";
import { FaRegCommentDots } from "react-icons/fa";
import bannerBg from "../assets/banner1.jpg"; // Make sure this path is correct


export default function BannersSection() {
  return (
    <section
      className="w-full text-white relative overflow-hidden py-28 px-6 sm:px-12 flex items-center justify-center"
      style={{
        backgroundImage: `url(${bannerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "right center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Text + CTA */}
      <div className="relative z-10 text-center max-w-3xl">
        <p className="text-sm sm:text-base text-gray-300 italic mb-3">
  “When passion meets purpose, magic happens.”
</p>
<h2 className="text-3xl sm:text-5xl font-light leading-snug mb-8">
  Have a brief? I’ll map scope, risks, and a first sprint plan in 48 hours.
</h2>

        <a
          href="https://wa.me/919138607772"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-medium hover:scale-105 transition"
        >
          <FaRegCommentDots className="text-lg" />
          Discuss your project&nbsp;&rarr;
        </a>
      </div>
    </section>
  );
}
