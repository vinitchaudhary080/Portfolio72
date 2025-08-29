// src/components/CounterSection.jsx
import React from "react";

export default function CounterSection() {
  return (
    <section className="w-full bg-black px-6 sm:px-20 py-2 ">
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-6">
        {/* Block 1 */}
        <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end">
          <div className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none">
            2025
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              5+ Years Designing
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I’m a Senior UX/UI Designer focused on fintech dashboards, design
              systems, and conversion-driven product UX. Obsessed with clarity,
              speed, and real business impact.
            </p>
          </div>
        </div>

        {/* Empty spacer (only shown on desktop) */}
        <div className="hidden sm:block"></div>

        {/* Block 2 */}
        <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end">
          <div className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none">
            40%
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Measured Impact</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Through cleaner IA and task flows, I’ve delivered double-digit
              lifts in adoption and task completion—while reducing cognitive load
              for power users.
            </p>
          </div>
        </div>

        {/* Empty spacer */}
        <div className="hidden sm:block"></div>

        {/* Block 3 */}
        <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end">
          <div className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none">
            +30
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Clients & Teams</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Worked with startups and product teams across India, UAE, US & AU.
              Strong collaboration with founders, PMs, and engineers in remote setups.
            </p>
          </div>
        </div>

        {/* Block 4 */}
        <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end">
          <div className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none">
            +26
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              Design Sprints & Workshops
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Led focused UX sprints—mapping user journeys, prioritizing pain
              points, and prototyping solutions that teams could ship fast.
            </p>
          </div>
        </div>

        {/* Empty spacer */}
        <div className="hidden sm:block"></div>

        {/* Block 5 */}
        <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end">
          <div className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none">
            +56
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">Projects Shipped</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              From MVPs to growth revamps—case studies covering IA, wireframes,
              UI, and design systems with measurable outcomes.
            </p>
          </div>
        </div>

        {/* Final empty spacer */}
        <div className="hidden sm:block"></div>
      </div>
    </section>
  );
}
