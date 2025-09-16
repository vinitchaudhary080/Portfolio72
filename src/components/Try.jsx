// src/components/Hero.tsx
"use client";
import React from "react";
import { Link } from "react-router-dom";
import { SparklesCore } from "@/components/ui/sparkles";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function Hero() {
  // avoid referencing window at render time
  const [density, setDensity] = React.useState(500);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setDensity(window.innerWidth > 768 ? 900 : 500);
    }
  }, []);

  return (
    <section
      className="
        relative bg-black min-h-screen 
        flex flex-col items-center justify-center 
        overflow-hidden px-4 py-12 sm:px-6
        lg:mt-16
        xl:mt-20
      "
      aria-labelledby="hero-heading"
    >
      <p className="text-white/70 italic text-xs sm:text-sm tracking-wide mb-3 z-10 text-center">
        Hello, I’m Vinit Chaudhary
      </p>

      <h1
        id="hero-heading"
        className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent 
        text-2xl sm:text-4xl lg:text-6xl 
        font-bold text-center z-10 max-w-2xl sm:max-w-3xl leading-snug sm:leading-tight"
      >
        I design human-centered product interfaces that move the metrics.
      </h1>

      <div className="relative mt-4 sm:mt-6 w-full max-w-[92vw] sm:w-[36rem] lg:w-[42rem]">
        <div className="relative h-0.5 w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-pulse" />
          <div className="absolute -inset-x-8 -top-1 h-2 blur-md bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-60" />
          <div className="absolute left-1/2 -translate-x-1/2 -top-0.5 w-12 sm:w-20 h-1.5 sm:h-2 blur-lg bg-sky-400 opacity-90" />
        </div>

        <div className="relative mt-6 h-24 sm:h-32 lg:h-40" aria-hidden="true">
          <SparklesCore
            background="transparent"
            minSize={0.3}
            maxSize={0.8}
            particleDensity={density}
            particleColor="#FFFFFF"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(250px_150px_at_top,transparent_15%,white)] sm:[mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
        </div>
      </div>

      <div className="relative z-10 mt-6 sm:mt-8 max-w-md sm:max-w-xl text-center">
        <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed mb-4 sm:mb-6">
          As a Senior UX/UI Designer, I partner with brands to transform ideas into
          seamless digital experiences that engage users and elevate your business.
        </p>

        <span className="relative inline-block rounded-xl">
          <GlowingEffect spread={36} glow={true} disabled={false} proximity={56} inactiveZone={0.02} borderWidth={2} variant="white" className="transition-opacity duration-300" />
          <Link
            to="/works"
            aria-label="View my selected work"
            className="
              inline-flex items-center gap-2
              rounded-xl border border-white/10
              px-5 py-3 text-sm font-light tracking-tight
              text-white backdrop-blur-sm
              bg-white/10 hover:bg-white/20
              transition-colors duration-300
              focus:outline-none focus:ring-2 focus:ring-white/30
            "
          >
            Discover What I’ve Built&nbsp;→
          </Link>
        </span>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
    </section>
  );
}
