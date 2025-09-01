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
  Hi, I’m Vinit Chaudhary<br />
  Senior UX/UI Designer
</h1>

<p className="mt-6 text-base sm:text-xl font-light text-gray-200">
  I partner with high-growth startups and enterprise teams to turn complex,
  data-heavy problems into calm, task-first product experiences that ship.
</p>

<button
  onClick={() => window.open("https://wa.me/918398020076", "_blank")}
  aria-label="Discuss your project with Vinit on WhatsApp"
  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-sm font-medium hover:scale-105 transition mt-10 mx-auto"
>
  <FaComments className="text-lg" />
  Discuss Project&nbsp;&rarr;
</button>


                </div>
            </div>
        </section>
    );
}
