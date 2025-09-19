import React from "react";

export default function WorkSection() {
  return (
    <section
      id="about-content"
      className="bg-black py-16 px-6 sm:py-24 sm:px-24"
      aria-labelledby="about-content-heading"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Row 1: Headline */}
        <h1
          id="about-content-heading"
          className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight max-w-3xl text-left"
        >
          <span className="block">Designing Success</span>
          <span className="block text-gray-300">
            See how I have turned ideas into reality.
          </span>
        </h1>

        {/* Row 2: Subtext + Button (aligned under the heading, left-start) */}
        <div className="mt-8 sm:mt-10 max-w-3xl">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Dive into the stories of successful project deliveries that made a difference.
          </p>

          {/* Button just below paragraph */}
          <div className="mt-6">
            <a
              href="/works"
              aria-label="View my selected work"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-xl text-sm font-medium
                border border-white/10 text-white
                backdrop-blur-sm
                bg-white/10 hover:bg-white/20
                hover:scale-105 transition
                focus:outline-none focus:ring-2 focus:ring-white/30
              "
            >
              Discover What I’ve Built&nbsp;→
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
