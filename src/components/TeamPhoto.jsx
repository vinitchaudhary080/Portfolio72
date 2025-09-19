// src/components/gallery/LatestCreationsStatic.jsx
"use client";
import React from "react";

// 👉 Your local images
import a1 from "@/assets/aboutworkimg/img1.webp";
import a2 from "@/assets/aboutworkimg/img2.webp";
import a3 from "@/assets/aboutworkimg/img10.webp";
import a4 from "@/assets/aboutworkimg/img4.webp";
import a5 from "@/assets/aboutworkimg/img5.webp";
import a6 from "@/assets/aboutworkimg/img6.webp";

const SOURCE = [a1, a2, a3, a4, a5, a6];

export default function LatestCreationsStatic({
  cardSizeClass = "size-72", // tailwind: both w & h
  roundedClass = "rounded-lg",
  gapClass = "gap-6",
  className = "",
}) {
  return (
    <section
      className={`w-full bg-black px-6 sm:px-20 py-2 ${className}`}
    >
      {/* 6-card gallery */}
      <div
        className={`flex flex-wrap items-center justify-center mt-6 ${gapClass} max-w-10xl mx-auto`}
      >
        {SOURCE.map((src, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden ${roundedClass} bg-neutral-900/30`}
          >
            <img
              src={src}
              alt={`work-${idx}`}
              className={`${cardSizeClass} object-cover object-center block`}
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
