import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Top Row */}
      <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-10">
        <span className="font-medium">Cribonix</span>
        <span className="font-medium">Website</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-5xl">
       – Cribonix – <br />
        Digital Marketing Agency Website <br />
        <div className="mt-12">
         <h3 className="text-sm sm:text-lg font-normal mb-2">A modern and conversion-focused website designed for Cribonix, a marketing agency that provides end-to-end digital marketing services such as advertising campaigns, SEO, social media, and branding solutions.</h3>
          
        </div>

      </h1>
    </section>
  );
}
