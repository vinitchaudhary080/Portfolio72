// src/components/ux/VennUxStrategy.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function VennUxStrategy() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const [state, setState] = useState("stacked");
  const playedOnceRef = useRef(false); // run the animation only once

  // Animate ONCE when the section is mostly in view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        if (
          entry.isIntersecting &&
          entry.intersectionRatio >= 0.55 &&
          !playedOnceRef.current
        ) {
          playedOnceRef.current = true;
          setState("row");
          obs.disconnect(); // stop observing so it never flips back
        }
      },
      { threshold: [0, 0.25, 0.5, 0.55, 0.75, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    controls.start(state);
  }, [state, controls]);

  // desktop animation tuning
  const ROW_OFFSET = 420;
  const ROW_SCALE = 0.88;
  const SPRING = { type: "spring", stiffness: 120, damping: 18 };

  const circleVariants = {
    stacked: (pos) => ({
      x: pos === "left" ? -80 : pos === "right" ? 80 : 0,
      y: pos === "top" ? -80 : 60,
      scale: 1,
      transition: SPRING,
    }),
    row: (pos) => ({
      x: pos === "left" ? -ROW_OFFSET : pos === "right" ? ROW_OFFSET : 0,
      y: 0,
      scale: ROW_SCALE,
      transition: SPRING,
    }),
  };

  // headings visible pre-animation, then centered in row
  const headingVariants = {
    stacked: (which) => ({
      x: which === "left" ? -140 : 0,
      y: which === "top" ? -160 : 0,
      opacity: 1,
      transition: { duration: 0.35 },
    }),
    row: { x: 0, y: 0, opacity: 1, transition: { duration: 0.35 } },
  };

  const listVariants = {
    stacked: { opacity: 0, y: 8, transition: { duration: 0.25 } },
    row: { opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.45 } },
  };

  return (
    <section className="w-full text-[#1a1a1a] px-6 sm:px-10 lg:px-16 py-28 flex flex-col items-center">
      {/* ===== Desktop / Tablet (animated once) ===== */}
      <div
        ref={sectionRef}
        className="relative hidden md:flex w-full max-w-7xl h-[760px] lg:h-[820px] items-center justify-center"
      >
        {/* Business Goals (TOP circle) */}
        <motion.div
          custom="top"
          variants={circleVariants}
          initial="stacked"
          animate={controls}
          className="absolute rounded-full shadow-lg flex items-center justify-center text-center
                     bg-gradient-to-b from-[#FFE0D4] to-[#F9BFB0]
                     w-[520px] h-[520px] lg:w-[560px] lg:h-[560px]"
        >
          <div className="px-8 md:px-10 max-w-[420px] relative flex flex-col items-center justify-center">
            <motion.h3
              custom="top"
              variants={headingVariants}
              initial="stacked"
              animate={controls}
              className="font-semibold text-[#F08A66] text-lg md:text-xl"
            >
              Business Goals
            </motion.h3>
            <motion.ul
              variants={listVariants}
              initial="stacked"
              animate={controls}
              className="list-disc pl-5 text-xs md:text-sm text-[#2B2B2B]/85 text-left mt-4 space-y-2"
            >
              <li>Build a platform for local/street cricketers to feel like professionals.</li>
              <li>Increase community adoption through fun + professional UX.</li>
            </motion.ul>
          </div>
        </motion.div>

        {/* User Needs (LEFT circle) */}
        <motion.div
          custom="left"
          variants={circleVariants}
          initial="stacked"
          animate={controls}
          className="absolute rounded-full shadow-lg flex items-center justify-center text-center
                     bg-gradient-to-b from-[#E7F8D9] to-[#CBEFB1]
                     w-[520px] h-[520px] lg:w-[560px] lg:h-[560px]"
        >
          <div className="px-8 md:px-10 max-w-[420px] relative flex flex-col items-center justify-center">
            <motion.h3
              custom="left"
              variants={headingVariants}
              initial="stacked"
              animate={controls}
              className="font-semibold text-[#60A34F] text-lg md:text-xl"
            >
              User Needs &amp; Pain Points
            </motion.h3>
            <motion.ul
              variants={listVariants}
              initial="stacked"
              animate={controls}
              className="list-disc pl-5 text-xs md:text-sm text-[#2B2B2B]/85 text-left mt-4 space-y-2"
            >
              <li>Local players only remembered scores verbally/on paper.</li>
              <li>Organizing matches &amp; opponents was chaotic.</li>
              <li>No digital history or performance ranking.</li>
            </motion.ul>
          </div>
        </motion.div>

        {/* Technical Capabilities (RIGHT circle) */}
        <motion.div
          custom="right"
          variants={circleVariants}
          initial="stacked"
          animate={controls}
          className="absolute rounded-full shadow-lg flex items-center justify-center text-center
                     bg-gradient-to-b from-[#DCEEFF] to-[#BFD9FF]
                     w-[520px] h-[520px] lg:w-[560px] lg:h-[560px]"
        >
          <div className="px-8 md:px-10 max-w-[440px] relative flex flex-col items-center justify-center">
            <motion.h3
              custom="center"
              variants={headingVariants}
              initial="stacked"
              animate={controls}
              className="font-semibold text-[#3E86E0] text-lg md:text-xl"
            >
              Technical Capabilities
            </motion.h3>
            <motion.ul
              variants={listVariants}
              initial="stacked"
              animate={controls}
              className="list-disc pl-5 text-xs md:text-sm text-[#2B2B2B]/85 text-left mt-4 space-y-2"
            >
              <li>Digital scoreboard engine with live sync.</li>
              <li>Match scheduling &amp; invitations (Quick match, tournament, series).</li>
              <li>Toss simulation module.</li>
              <li>Player performance tracking &amp; ranking system.</li>
              <li>Cloud storage for match history &amp; team records.</li>
              <li>Push notifications for live score updates.</li>
            </motion.ul>
          </div>
        </motion.div>
      </div>

      {/* ===== Mobile (single column, no row animation) ===== */}
      <div className="md:hidden w-full max-w-xl mx-auto space-y-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]
                          bg-gradient-to-b from-[#FFE0D4] to-[#F9BFB0]
                          shadow-md flex items-center justify-center text-center">
            <h3 className="font-semibold text-[#F08A66] text-base sm:text-lg">
              Business Goals
            </h3>
          </div>
          <ul className="mt-4 list-disc pl-5 text-[13px] sm:text-sm text-white/80">
            <li>Build a platform for local/street cricketers to feel like professionals.</li>
            <li>Increase community adoption through fun + professional UX.</li>
          </ul>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]
                          bg-gradient-to-b from-[#E7F8D9] to-[#CBEFB1]
                          shadow-md flex items-center justify-center text-center">
            <h3 className="font-semibold text-[#60A34F] text-base sm:text-lg">
              User Needs &amp; Pain Points
            </h3>
          </div>
          <ul className="mt-4 list-disc pl-5 text-[13px] sm:text-sm text-white/80">
            <li>Local players only remembered scores verbally/on paper.</li>
            <li>Organizing matches &amp; opponents was chaotic.</li>
            <li>No digital history or performance ranking.</li>
          </ul>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]
                          bg-gradient-to-b from-[#DCEEFF] to-[#BFD9FF]
                          shadow-md flex items-center justify-center text-center">
            <h3 className="font-semibold text-[#3E86E0] text-base sm:text-lg">
              Technical Capabilities
            </h3>
          </div>
          <ul className="mt-4 list-disc pl-5 text-[13px] sm:text-sm text-white/80">
            <li>Digital scoreboard engine with live sync.</li>
            <li>Match scheduling &amp; invitations (Quick match, tournament, series).</li>
            <li>Toss simulation module.</li>
            <li>Player performance tracking &amp; ranking system.</li>
            <li>Cloud storage for match history &amp; team records.</li>
            <li>Push notifications for live score updates.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
