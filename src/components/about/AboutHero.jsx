import React from "react";
import { FaComments } from "react-icons/fa";
import bgImage from "../../assets/about-hero-bg.jpg";

export default function AboutHero() {
  return (
    <section className="bg-black py-16 px-6 sm:py-24 sm:px-24">
      <div
        className="relative w-full min-h-[60vh] bg-cover bg-center flex items-center justify-center rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Centered content */}
        <div className="relative z-10 max-w-5xl text-white text-center p-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight">
            This is where we get in touch <br />
            and discuss your ideas!
          </h1>

          <p className="mt-6 text-base sm:text-xl font-light text-gray-200">
            Founded in 2023, a branding agency is a firm that specializes in creating <br className="hidden sm:block" />
            and launching brands, and rebranding. The role of a branding agency
          </p>

          <button className="mt-10 bg-white text-black px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition-all mx-auto">
            <FaComments className="text-lg" />
            Discuss Project
          </button>
        </div>
      </div>
    </section>
  );
}
