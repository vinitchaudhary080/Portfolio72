import React from "react";

export default function AboutContent() {
  return (
    <section
      id="about-content"
      className="
  bg-black 
  px-6 sm:px-10 md:px-20 
  py-16 md:py-24 
  mt-8 sm:mt-0
"

      aria-labelledby="about-content-heading"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Row 1: Headline */}
        <h1
          id="about-content-heading"
          className="text-white text-4xl sm:text-5xl md:text-6xl font-light leading-tight max-w-3xl"
        >
          <span className="block">How it started → How it’s going</span>
          <span className="block text-gray-300">
            From Gurugram Streets to Design Sprints
          </span>
        </h1>

        {/* Row 2: Subtext + Buttons */}
        <div className="mt-12 max-w-3xl">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Born and raised in Gurugram’s fast-moving energy, my journey into design
            began with a curiosity for how technology shapes everyday life. Unlike a
            traditional art school path, I carved my way through self-learning,
            freelancing, and hands-on projects starting as a graphic designer before
            quickly realizing my true passion lay in crafting digital products.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-6">
            In <span className="font-medium text-white">2020</span>, stepping into product
            design transformed everything. I began working with fintech startups, trading
            platforms, and SaaS dashboards where speed, scale, and usability matter the
            most. What started as curiosity soon became an obsession: designing not just
            for looks, but for clarity, performance, and measurable business impact.
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-6">
            Since then, I’ve been learning every day, building systems, and helping
            startups transform complex ideas into simple, meaningful user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col gap-4 mt-10 md:flex-row md:gap-6">
            {/* Primary CTA */}
            <a
              href="https://wa.me/919138607772"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 15-minute call on WhatsApp"
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
              Hire Me&nbsp;&rarr;
            </a>

            {/* Secondary (informational) */}
            <button
              type="button"
              className="text-gray-400 text-sm font-medium hover:text-white transition-colors duration-200"
              aria-label="Currently available for work"
            >
              I'm available for work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
