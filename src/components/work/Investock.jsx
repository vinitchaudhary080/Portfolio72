// src/components/workpage/Card7.jsx
import React from "react";
import { Link } from "react-router-dom";
import mainImage from "../../assets/Investock/Darkm.webp";

// thumbs
import thumb1 from "../../assets/Investock/loginmockup.webp";
import thumb2 from "../../assets/Investock/advisorymockup.webp";
import thumb3 from "../../assets/Investock/onboardmockup.webp";
import thumb4 from "../../assets/Investock/portfoliomockups.webp";
import thumb5 from "../../assets/Investock/lightmockup.webp";
import thumb6 from "../../assets/Investock/portfoliomockup.webp";
import thumb7 from "../../assets/Investock/Darkm.webp";

export default function Card7() {
  const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7];
  const looped = [...thumbs, ...thumbs];
  const tags = ["Fintech", "Trading", "AI"];
  const caseStudyHref = "/investock/investock-app-design";

  return (
    <article className="px-6 mb-16" aria-labelledby="investock-title">
      <div
        className="
          group relative rounded-2xl overflow-hidden
          border border-white/10 bg-black/50
          shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]
          transition-transform duration-300 hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-white/20
        "
      >
        {/* desktop: 60/40 split; mobile: single col */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
          {/* LEFT IMAGE */}
          <figure className="relative overflow-hidden h-[220px] sm:h-[260px] md:h-auto">
            <img
              src={mainImage}
              alt="Investock.ai — dark mode dashboard hero"
              className="
                absolute inset-0 w-full h-full object-cover
                motion-safe:transition-transform motion-safe:duration-[900ms]
                motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]
                motion-safe:will-change-transform
                group-hover:scale-[1.06]
              "
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(255,255,255,0.25) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.25) 1px,transparent 1px)",
                backgroundSize: "16px 16px",
              }}
              aria-hidden="true"
            />
          </figure>

          {/* RIGHT CONTENT */}
          <div className="relative p-5 sm:p-6 md:p-8 flex flex-col">
            <div className="absolute top-3 right-3 md:top-4 md:right-4">
              <span
                className="
                  px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wide
                  bg-black/40 text-white border border-white/20 backdrop-blur-sm
                  dark:bg-white/10 dark:text-white/80
                "
                aria-label="Project: Investock.ai"
              >
                Investock.ai
              </span>
            </div>

            <h3
              id="investock-title"
              className="text-white text-lg sm:text-xl md:text-2xl font-light leading-snug"
            >
              <Link
                to={caseStudyHref}
                className="hover:underline underline-offset-4"
              >
                Investock.ai
              </Link>
              <br />
              <span className="text-white/90">Trade Smarter, Invest Better</span>
            </h3>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-3">
              Investock.ai is an AI-powered trading and investing platform designed
              for stock and crypto traders. It brings advanced charting, real-time
              market data, strategy building, and backtesting into one place—helping
              traders save time, avoid costly mistakes, and make data-driven decisions
              with confidence.
            </p>

            <p className="mt-3 text-xs text-white/55">
              Product UX • Web & Mobile
            </p>

            {/* TAGS */}
            <div className="mt-4 flex flex-wrap gap-1.5" aria-label="Project tags">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md text-[10px] border border-cyan-400/25 text-cyan-200/90 bg-cyan-500/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-5">
              <Link
                to={caseStudyHref}
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-xl text-sm font-medium
                  border border-white/10 text-white
                  backdrop-blur-sm
                  bg-white/10 hover:bg-white/20
                  hover:scale-105 transition
                  focus:outline-none focus:ring-2 focus:ring-white/30
                "
                aria-label="View Investock.ai case study"
              >
                View Project
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* thumbnails (decorative) */}
            <div className="mt-5 w-full overflow-hidden" aria-hidden="true">
              <div className="flex gap-2 animate-marquee">
                {looped.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-lg flex-shrink-0"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </article>
  );
}
