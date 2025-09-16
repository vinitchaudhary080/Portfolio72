// src/components/effects/StarlineHero.jsx
import React, { useEffect, useId, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// small util
const cn = (...a) => a.filter(Boolean).join(" ");

function usePRM() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setReduced(mq.matches);
    on(); mq.addEventListener?.("change", on);
    return () => mq.removeEventListener?.("change", on);
  }, []);
  return reduced;
}

/**
 * StarlineHero
 * Props:
 *  - title: string (heading text)
 *  - lineColor: CSS color for glow (default sky)
 *  - particleColor: CSS color for stars (default #ffffff)
 *  - density: number (stars count)
 *  - className: wrapper (set height, etc.)
 */
export default function StarlineHero({
  title = "Acme",
  lineColor = "#38bdf8",       // tailwind sky-400
  particleColor = "#ffffff",
  density = 180,
  className = "h-[60vh] sm:h-screen",
}) {
  const [ready, setReady] = useState(false);
  const pid = useId();
  const prm = usePRM();

  // init tsparticles once
  useEffect(() => {
    let alive = true;
    initParticlesEngine(async (engine) => { await loadSlim(engine); })
      .then(() => alive && setReady(true));
    return () => { alive = false; };
  }, []);

  const options = useMemo(() => {
    const d = prm ? Math.max(60, Math.floor(density * 0.5)) : density;
    return {
      fullScreen: { enable: false },
      detectRetina: true,
      fpsLimit: prm ? 30 : 60,
      background: { color: { value: "transparent" } },
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false }, resize: true },
      },
      particles: {
        number: { value: d, density: { enable: true, area: 800 } },
        color: { value: particleColor },
        shape: { type: "circle" },
        size: { value: { min: 0.4, max: 1.4 } },
        opacity: {
          value: { min: 0.15, max: 0.8 },
          animation: { enable: !prm, speed: 2.2, startValue: "random", sync: false },
        },
        move: {
          enable: !prm,
          direction: "bottom",     // fall downwards (like in your reference)
          speed: 0.35,             // subtle
          random: false,
          straight: false,
          outModes: { default: "out" },
        },
        links: { enable: false },
        collisions: { enable: false },
      },
    };
  }, [particleColor, density, prm]);

  return (
    <section className={cn("relative w-full bg-black flex flex-col items-center justify-center text-center", className)}>
      {/* Title */}
      <h1 className="text-white text-4xl sm:text-7xl font-light tracking-tight">
        {title}
      </h1>

      {/* Thin glow line just below the text */}
      <div className="relative w-[72vw] max-w-[680px] mt-3 h-[2px]">
        {/* core line */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${lineColor} 50%, rgba(0,0,0,0) 100%)`,
          }}
        />
        {/* soft glow */}
        <div
          className="absolute -inset-x-10 -top-[6px] h-[10px] blur-md opacity-70"
          style={{
            background: `linear-gradient(90deg, rgba(0,0,0,0) 0%, ${lineColor} 50%, rgba(0,0,0,0) 100%)`,
          }}
        />
        {/* tiny highlight at center */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-[2px] w-14 h-[6px] blur-[6px] opacity-90"
          style={{ background: lineColor }}
        />
      </div>

      {/* Particle field only BELOW the line */}
      <div className="relative mt-6 w-full max-w-5xl h-52 sm:h-60">
        {/* particles */}
        <div className="absolute inset-0">
          {ready && (
            <Particles id={pid} options={options} className="w-full h-full" />
          )}
        </div>

        {/* fade mask so stars softly disappear at bottom */}
        <div className="pointer-events-none absolute inset-0 bg-black
          [mask-image:linear-gradient(to_bottom, rgba(0,0,0,1)_0%, rgba(0,0,0,1)_10%, rgba(0,0,0,0)_100%)]" />
      </div>
    </section>
  );
}
