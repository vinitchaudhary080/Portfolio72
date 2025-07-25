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
                        <button
                            className="
    relative overflow-hidden group
    bg-white text-black
    px-6 py-3 rounded-md
    text-xs sm:text-sm font-medium

    transition-colors duration-200 ease-in-out
    hover:bg-gray-100
  "
                        >
                            Book a 15‑min call

                            {/* top‑left */}
                            <span
                                className="
      absolute w-2 h-2
      top-2 left-2
      border-t-2 border-l-2 border-black
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
                            />

                            {/* top‑right */}
                            <span
                                className="
      absolute w-2 h-2
      top-2 right-2
      border-t-2 border-r-2 border-black
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
                            />

                            {/* bottom‑left */}
                            <span
                                className="
      absolute w-2 h-2
      bottom-2 left-2
      border-b-2 border-l-2 border-black
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
                            />

                            {/* bottom‑right */}
                            <span
                                className="
      absolute w-2 h-2
      bottom-2 right-2
      border-b-2 border-r-2 border-black
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
                            />
                        </button>




                        {/* Secondary link-style button */}
                        <button className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200">
                            We are available for work
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
