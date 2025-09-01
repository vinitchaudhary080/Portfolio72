// src/components/about/AboutContent.jsx
import React from "react";

export default function AboutContent() {
    return (
        <section className="bg-black px-6 sm:px-10 md:px-20 py-16 md:py-24">
            <div className="max-w-screen-xl mx-auto">
                {/* Row 1: Headline */}
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight max-w-3xl">
                    <span className="block">Insights → Interfaces → Impact</span>
                    <span className="block text-gray-300">How I turn ideas into usable products.</span>
                </h1>




                {/* Row 2: Subtext + Buttons */}
                <div className="mt-16 flex flex-col items-end">
                    {/* Paragraph shifts right on md+ */}
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl md:ml-96">
                        I blend lightweight research, crisp IA, and opinionated UI systems to reduce
                        cognitive load and speed up releases. From discovery to dev-handoff, I document
                        decisions, design for edge states, and keep specs production-ready so your team
                        ships faster with fewer regressions.
                    </p>


                </div>
                <div className="mr-44 flex flex-col items-end md:mr-64">
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

                            Book a 15-min Call&nbsp;&rarr;
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
