// src/components/CounterSection.jsx
import React from "react";
import { GlowingEffect } from "@/components/ui/glowing-effect"; // if '@' alias not set, use: "../components/ui/glowing-effect"

export default function CounterSection() {
  return (
    <section className="w-full bg-black px-6 sm:px-20 py-2" aria-labelledby="impact-heading">
      <h2 id="impact-heading" className="sr-only">Impact at a glance</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-6">
        {/* Block 1 */}
        <div className="relative group rounded-xl">
          {/* Glow overlay (pointer-events none) */}
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
            className="transition-opacity duration-300"
          />
          {/* Card body */}
          <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end border border-white/10">
            <div
              className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none"
              aria-hidden="true"
            >
              5+
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                5+ yrs | 30+ products shipped
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                From fintech to e-commerce & real estate: research lite to systemized UI,
                with dev-ready states that cut rework and speed releases.
              </p>
            </div>
          </div>
        </div>

        {/* Empty spacer (only shown on desktop) */}
        <div className="hidden sm:block" />

        {/* Block 2 */}
        <div className="relative group rounded-xl">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
            className="transition-opacity duration-300"
          />
          <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end border border-white/10">
            <div
              className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none"
              aria-hidden="true"
            >
              +40%
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                +40% adoption in 30 days
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Cleaner IA and task first flows lifted adoption and task completion
                while reducing cognitive load for power users.
              </p>
            </div>
          </div>
        </div>

        {/* Empty spacer */}
        <div className="hidden sm:block" />

        {/* Block 3 */}
        <div className="relative group rounded-xl">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
            className="transition-opacity duration-300"
          />
          <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end border border-white/10">
            <div
              className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none"
              aria-hidden="true"
            >
              30+
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                30+ clients across 4 regions
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Startups and product teams in India, UAE, US & AU.
                Strong async collaboration with founders, PMs, and engineers.
              </p>
            </div>
          </div>
        </div>

        {/* Block 4 */}
        <div className="relative group rounded-xl">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
            className="transition-opacity duration-300"
          />
          <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end border border-white/10">
            <div
              className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none"
              aria-hidden="true"
            >
              26
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                26 sprints | 0→V1 in weeks
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Journey mapping, pain prioritization, and testable prototypes 
                engineering ready in weeks.
              </p>
            </div>
          </div>
        </div>

        {/* Empty spacer */}
        <div className="hidden sm:block" />

        {/* Block 5 */}
        <div className="relative group rounded-xl">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={2}
            className="transition-opacity duration-300"
          />
          <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end border border-white/10">
            <div
              className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none"
              aria-hidden="true"
            >
              56
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">
                56 launches | cleaner handoffs
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                From MVP to growth IA, wireframes, UI, and design systems with
                state-rich specs that cut rework.
              </p>
            </div>
          </div>
        </div>

        {/* Final empty spacer */}
        <div className="hidden sm:block" />
      </div>
    </section>
  );
}
