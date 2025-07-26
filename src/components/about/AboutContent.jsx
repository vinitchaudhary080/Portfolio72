// src/components/about/AboutContent.jsx
import React from "react";

export default function AboutContent() {
    return (
        <section className="bg-black px-6 sm:px-10 md:px-20 py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto">
                {/* Row 1: Headline */}
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight max-w-3xl">
                    We’re proud to showcase a portfolio of projects that redefine the
                    possibilities of design, bringing together functionality and aesthetic
                    brilliance.
                </h1>

                {/* Row 2: Subtext + Buttons */}
                <div className="mt-16 flex flex-col items-start">
                    {/* Paragraph shifts right on md+ */}
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl md:ml-96">
                        Founded in 2023, a branding agency is a firm that specializes in
                        creating and launching brands, and rebranding. The role of a branding
                        agency is to create, plan, measure and manage branding strategies for
                        clients, including support in
                    </p>

                    {/* Buttons: stacked on mobile, row on md+ */}
                    <div className="flex flex-col gap-4 mt-8 md:ml-96 md:flex-row md:gap-6">
                        {/* Primary Button with lift & shadow on hover */}
                         <a
      href="https://wa.me/918398020076"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-2
        bg-white text-black
        px-6 py-3 rounded-xl text-sm font-medium
        hover:scale-105 transition
      "
    >
      
      Book a 15-min Call
    </a>




                        {/* Secondary link-style button */}
                        <button className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200">
                            I'm available for work
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
