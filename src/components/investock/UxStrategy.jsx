// src/components/ux/VennUxStrategy.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function VennUxStrategy() {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  // "stacked" initially; will switch to "row" once and never go back
  const [state, setState] = useState("stacked");
  const playedOnceRef = useRef(false);

  // Trigger the animation once when the section is centered enough
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        const entry = entries[0];
        // When ~55% or more of the section is visible, fire once
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55 && !playedOnceRef.current) {
          playedOnceRef.current = true;
          setState("row");     // go to row state
          obs.disconnect();    // stop observing so it never flips back
        }
      },
      {
        root: null,
        threshold: [0, 0.25, 0.5, 0.55, 0.75, 1],
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Drive framer-motion with our state
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

  // headings visible position before row; then settle to center in row
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
        {/* Business Goals */}
        <motion.div
          custom="top"
          variants={circleVariants}
          initial="stacked"
          animate={controls}
          className="absolute rounded-full shadow-lg flex items-center justify-center text-center
                     bg-gradient-to-b from-[#FFE0D4] to-[#F9BFB0]
                     w-[520px] h-[520px] lg:w-[560px] lg:h-[560px]"
        >
          <div className="px-8 md:px-10 max-w-[420px] flex flex-col items-center justify-center">
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
              <li>Build an AI-powered investing platform that simplifies stock market participation for beginners, part-time investors, and professionals.</li>
              <li>Drive growth through subscriptions to model portfolios, advisory services, and stock baskets.</li>
              <li>Improve user retention by automating rebalancing, stock shuffling, and stop-loss handling—reducing manual workload.</li>
              <li>Differentiate from competitors (Liquide, Univest, Stratzy) by offering a more automated, beginner-friendly, and trustworthy experience.</li>
              <li>Increase trading volume and platform adoption by making investing as easy as “pick &amp; run”.</li>
            </motion.ul>
          </div>
        </motion.div>

        {/* User Needs & Pain Points */}
        <motion.div
          custom="left"
          variants={circleVariants}
          initial="stacked"
          animate={controls}
          className="absolute rounded-full shadow-lg flex items-center justify-center text-center
                     bg-gradient-to-b from-[#E7F8D9] to-[#CBEFB1]
                     w-[520px] h-[520px] lg:w-[560px] lg:h-[560px]"
        >
          <div className="px-8 md:px-10 max-w-[420px] flex flex-col items-center justify-center">
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
              <li>Beginners: Didn’t know how to start, which stocks to buy, when to exit, or how long to hold → felt overwhelmed.</li>
              <li>Part-time investors: Wanted guidance but lacked the time or expertise to actively monitor and rebalance portfolios.</li>
              <li>Full-time traders: Had knowledge but not enough time to manually rebalance and shuffle stocks daily → needed automation.</li>
              <li>Too many fragmented tools (broker apps for execution, websites for advisory, Excel sheets for tracking).</li>
              <li>Emotional trading leading to poor entry/exit timing.</li>
              <li>Existing competitor apps had cluttered dashboards, jargon-heavy UI, and limited automation.</li>
              <li>Users wanted a reliable, simple, and SEBI-registered advisor backed system they could trust.</li>
            </motion.ul>
          </div>
        </motion.div>

        {/* Technical Capabilities */}
        <motion.div
          custom="right"
          variants={circleVariants}
          initial="stacked"
          animate={controls}
          className="absolute rounded-full shadow-lg flex items-center justify-center text-center
                     bg-gradient-to-b from-[#DCEEFF] to-[#BFD9FF]
                     w-[520px] h-[520px] lg:w-[560px] lg:h-[560px]"
        >
          <div className="px-8 md:px-10 max-w-[440px] flex flex-col items-center justify-center">
            <motion.h3
              custom="right"
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
              <li>Broker API integration (Upstox, Zerodha, AngelOne).</li>
              <li>Automated rebalancing engine (portfolio-level stock adjustments).</li>
              <li>Real-time advisory push notifications.</li>
              <li>Basket execution system (multi-stock single order).</li>
              <li>Analytics dashboards for portfolio performance, returns, and risk.</li>
              <li>Scalable cloud-based infra for live data feeds.</li>
            </motion.ul>
          </div>
        </motion.div>
      </div>

      {/* ===== Mobile Version (no animation flip) ===== */}
      <div className="md:hidden w-full max-w-xl mx-auto space-y-10">
        {/* Business Goals */}
        <div className="flex flex-col items-center">
          <div className="rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]
                          bg-gradient-to-b from-[#FFE0D4] to-[#F9BFB0]
                          shadow-md flex items-center justify-center text-center">
            <h3 className="font-semibold text-[#F08A66] text-base sm:text-lg">
              Business Goals
            </h3>
          </div>
          <ul className="mt-4 list-disc pl-5 text-[13px] sm:text-sm text-white/80">
            <li>Build an AI-powered investing platform that simplifies stock market participation for beginners, part-time investors, and professionals.</li>
            <li>Drive growth through subscriptions to model portfolios, advisory services, and stock baskets.</li>
            <li>Improve user retention by automating rebalancing, stock shuffling, and stop-loss handling—reducing manual workload.</li>
            <li>Differentiate from competitors (Liquide, Univest, Stratzy) by offering a more automated, beginner-friendly, and trustworthy experience.</li>
            <li>Increase trading volume and platform adoption by making investing as easy as “pick &amp; run”.</li>
          </ul>
        </div>

        {/* User Needs */}
        <div className="flex flex-col items-center">
          <div className="rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]
                          bg-gradient-to-b from-[#E7F8D9] to-[#CBEFB1]
                          shadow-md flex items-center justify-center text-center">
            <h3 className="font-semibold text-[#60A34F] text-base sm:text-lg">
              User Needs &amp; Pain Points
            </h3>
          </div>
          <ul className="mt-4 list-disc pl-5 text-[13px] sm:text-sm text-white/80">
            <li>Beginners: Didn’t know how to start, which stocks to buy, when to exit, or how long to hold → felt overwhelmed.</li>
            <li>Part-time investors: Wanted guidance but lacked the time or expertise to actively monitor and rebalance portfolios.</li>
            <li>Full-time traders: Had knowledge but not enough time to manually rebalance and shuffle stocks daily → needed automation.</li>
            <li>Too many fragmented tools (broker apps for execution, websites for advisory, Excel sheets for tracking).</li>
            <li>Emotional trading leading to poor entry/exit timing.</li>
            <li>Existing competitor apps had cluttered dashboards, jargon-heavy UI, and limited automation.</li>
            <li>Users wanted a reliable, simple, and SEBI-registered advisor backed system they could trust.</li>
          </ul>
        </div>

        {/* Technical Capabilities */}
        <div className="flex flex-col items-center">
          <div className="rounded-full w-[260px] h-[260px] sm:w-[300px] sm:h-[300px]
                          bg-gradient-to-b from-[#DCEEFF] to-[#BFD9FF]
                          shadow-md flex items-center justify-center text-center">
            <h3 className="font-semibold text-[#3E86E0] text-base sm:text-lg">
              Technical Capabilities
            </h3>
          </div>
          <ul className="mt-4 list-disc pl-5 text-[13px] sm:text-sm text-white/80">
            <li>Broker API integration (Upstox, Zerodha, AngelOne).</li>
            <li>Automated rebalancing engine (portfolio-level stock adjustments).</li>
            <li>Real-time advisory push notifications.</li>
            <li>Basket execution system (multi-stock single order).</li>
            <li>Analytics dashboards for portfolio performance, returns, and risk.</li>
            <li>Scalable cloud-based infra for live data feeds.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
