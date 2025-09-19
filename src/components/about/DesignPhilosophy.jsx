// src/components/KnowMoreSection.jsx
import React from "react";

export default function KnowMoreSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-black text-white px-6 sm:px-20 pt-16 pb-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl space-y-12">
        {/* --- Design Philosophy --- */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-gray-300">
            <span id="about-heading">Design Philosophy</span>
          </div>

          <p className="text-2xl sm:text-3xl leading-[1.6] font-medium tracking-tight">
            I believe in simplicity that enhances usability and scalability. My design approach blends
            minimalist, futuristic UI with user-centered thinking — creating products that evolve with
            startups, <span className="text-gray-200">fintech platforms</span>, and
            <span className="text-gray-200"> SaaS businesses</span>.
          </p>

          <p className="text-lg text-gray-500 leading-[1.7]">
            I turn complex, data-heavy ideas into calm, task-first experiences using lightweight
            research, crisp IA, and opinionated UI systems — so teams ship faster with fewer reworks.
          </p>
        </div>

        {/* --- Leadership --- */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] tracking-wide text-gray-300">
            <span>Leadership</span>
          </div>

          <p className="text-2xl sm:text-3xl leading-[1.6] font-medium tracking-tight">
            I lead with <span className="text-gray-200">trust</span> and{" "}
            <span className="text-gray-200">collaboration</span>, shaping a culture where design teams
            share knowledge, experiment with confidence, and deliver impactful digital experiences.
          </p>

          <p className="text-lg text-gray-500 leading-[1.7]">
            My leadership style encourages open communication, continuous learning, and a balance of
            creativity with accountability — ensuring every project moves forward with clarity and impact.
          </p>
        </div>
      </div>

      {/* Subtle grid bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, black 70%, transparent 100%)",
          backgroundImage:
            "linear-gradient(to right, #6b72801a 1px, transparent 1px), linear-gradient(to bottom, #6b72801a 1px, transparent 1px)",
          backgroundSize: "54px 54px",
        }}
      />
    </section>
  );
}
