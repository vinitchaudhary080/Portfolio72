// src/components/workpage/Card1.jsx
import React from "react";
import { Link } from "react-router-dom";

// big hero image on the left
import mainImage from "../../assets/List2/full.jpg";

// small thumbnails underneath
import thumb1 from "../../assets/List2/thumb1.jpg";
import thumb2 from "../../assets/List2/thumb2.jpg";
import thumb3 from "../../assets/List2/thumb3.jpg";
import thumb4 from "../../assets/List2/thumb4.jpg";
import thumb5 from "../../assets/List2/thumb5.jpg";
import thumb6 from "../../assets/List2/thumb6.jpg";
import thumb7 from "../../assets/List2/thumb7.jpg";

export default function Card1() {
  // duplicate the array so the marquee can loop seamlessly
  const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7];
  const looped = [...thumbs, ...thumbs];

  return (
    <div className="md:px-6 px-6 sm:px-20 mb-16">
    <div className="relative overflow-hidden rounded-xl">
      {/* full-size bg image */}
      <img
        src={mainImage}
        alt="Straps project hero"
        className="w-full h-[550px] object-cover"
      />

      {/* blurred overlay card */}
      <div
        className="
          absolute 
            top-32 bottom-4 left-4 right-4 
            md:top-32 md:bottom-4 md:right-4 md:left-auto 
            max-w-full md:max-w-md 
            bg-black/40 backdrop-blur-sm 
            rounded-xl p-6 
            flex flex-col justify-between
          "
      >
        <div>
          <p className="text-xs text-gray-300 mb-2">©2025</p>
          <h3 className="text-2xl sm:text-3xl font-light text-white mb-4 leading-tight">
            Straps combines high‑end visuals
            <br className="hidden sm:block" />
            with exceptional moments
          </h3>
          <p className="text-gray-300 text-sm mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
        </div>

        {/* View project button */}
        <Link
          to="/project/straps"
          className="
            inline-block bg-white text-black
            px-8 py-4 rounded-md  text-base font-medium 
            hover:bg-gray-100 transition transition-shadow hover:shadow-md
          "
        >
          View Project
        </Link>

        {/* Auto‑scrolling thumbnail marquee */}
        <div className="mt-4 w-full overflow-hidden">
          <div className="flex space-x-2 animate-marquee">
            {looped.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="h-16 w-16 object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>  
  );
}
