// src/components/workpage/Card7.jsx
import React from "react";
import { Link } from "react-router-dom";

// main hero (left)
import mainImage from "../../assets/Budgettree/budgetTreeVideo.webp";

// thumbs
import thumb1 from "../../assets/Budgettree/budgetTreeVideo.webp";
import thumb2 from "../../assets/Budgettree/budgetTree1.webp";
import thumb3 from "../../assets/Budgettree/budgetTreeVideo.webp";
import thumb4 from "../../assets/Budgettree/budgetTree1.webp";
import thumb5 from "../../assets/Budgettree/budgetTreeVideo.webp";
import thumb6 from "../../assets/Budgettree/budgetTree1.webp";
import thumb7 from "../../assets/Budgettree/budgetTreeVideo.webp";

export default function Card1() {
  const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7];
  const looped = [...thumbs, ...thumbs];
  const tags = ["Fintech", "Gifting", "Mobile"];

  return (
    <section className="px-6 mb-16">
      <div
        className="
          group relative rounded-2xl overflow-hidden
          border border-white/10 bg-black/50
          shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]
          transition-transform duration-300 hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-white/20
        "
      >
        {/* Layout: 60/40 split on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden h-[220px] sm:h-[260px] md:h-auto">
            <img
              src={mainImage}
              alt="BudgetTree hero"
              className="
                absolute inset-0 w-full h-full object-cover
                motion-safe:transition-transform motion-safe:duration-[900ms]
                motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]
                motion-safe:will-change-transform
                group-hover:scale-[1.06]
              "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(255,255,255,0.25) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.25) 1px,transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative p-5 sm:p-6 md:p-8 flex flex-col">
            {/* Badge */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4">
              <span
                className="
                  px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wide
                  bg-black/40 text-white border border-white/20 backdrop-blur-sm
                "
              >
                BudgetTree
              </span>
            </div>

            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light leading-snug">
              BudgetTree App
              <br />
              <span className="text-white/90">A Finance Product</span>
            </h3>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-3">
              Diwali, birthdays, festivals ya koi bhi special moment — custom digital
              gift cards create karo aur turant bhejo. No physical hassle, sirf
              thoughtful surprise.
            </p>

            <p className="mt-3 text-xs text-white/55">Product • Mobile</p>

            {/* TAGS */}
            <div className="mt-4 flex flex-wrap gap-1.5">
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
                to="/budgettree/budgettree-finance-product"
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
                View Project
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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

            {/* Thumbnails */}
            <div className="mt-5 w-full overflow-hidden">
              <div className="flex gap-2 animate-marquee">
                {looped.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`BudgetTree thumbnail ${i + 1}`}
                    className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-lg flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* bottom divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}
