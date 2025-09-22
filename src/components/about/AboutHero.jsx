import React from "react";
import { FaComments } from "react-icons/fa";
import contactVideo from "../../assets/contact-bg.mp4"; // <-- video import

export default function AboutHero() {
  return (
    <section className="bg-black py-16 px-6 sm:py-24 sm:px-24">
      <div className="relative w-full min-h-[60vh] flex items-center justify-center rounded-xl overflow-hidden">
        {/* Video background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={contactVideo}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        {/* Centered content */}
        <div className="relative z-10 max-w-5xl text-white text-center p-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight">
            Hi, I’m Tisha Kakkar<br />
            UX/UI Designer
          </h1>

          <p className="mt-6 text-base sm:text-xl font-light text-gray-200">
            I partner with high growth startups and enterprise teams to turn
            complex, data heavy problems into calm, task first product
            experiences that ship.
          </p>

          <button
            onClick={() => window.open("https://wa.me/919138607772", "_blank")}
            aria-label="Discuss your project with Tisha on WhatsApp"
            className="
              inline-flex items-center gap-2
              px-6 py-3 mt-10 mx-auto
              rounded-xl text-sm font-medium
              border border-white/10 text-white
              backdrop-blur-sm
              bg-white/10 hover:bg-white/20
              hover:scale-105 transition
              focus:outline-none focus:ring-2 focus:ring-white/30
            "
          >
            <FaComments className="text-base opacity-90" />
            Discuss Project&nbsp;&rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
