// src/components/CounterSection.jsx
import React from "react";

export default function CounterSection() {
  return (
   <section className="w-full bg-black px-6 sm:px-20 py-2 font-sans">
  <div className="grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-3 gap-6">
    {/* Block 1 */}
    <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end">
      <div className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none">
        2024
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg mb-2">
          Years of experience
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          We elevated our design agency to new heights, embracing cutting-edge trends and innovative practices.
        </p>
      </div>
    </div>

    {/* Empty spacer (only shown on desktop) */}
    <div className="hidden sm:block"></div>

    {/* Block 2 */}
    <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end">
      <div className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none">
        137%
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg mb-2">Growth</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          The trust our clients place in our ability to deliver exceptional design solutions.
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
        <h3 className="text-white font-semibold text-lg mb-2">Clients</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Bringing unique challenges that enriched our creative journey and expanded our impact.
        </p>
      </div>
    </div>

    {/* Block 4 */}
    <div className="bg-[#141414] rounded-xl p-8 h-[270px] relative flex flex-col justify-end">
      <div className="absolute top-6 right-6 text-white text-[56px] font-bold leading-none">
        +26
      </div>
      <div>
        <h3 className="text-white font-semibold text-lg mb-2">Awards</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Celebrating our commitment to excellence and innovation.
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
        <h3 className="text-white font-semibold text-lg mb-2">Cases</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Our diverse project experience showcases our ability to tailor bespoke solutions that drive success
        </p>
      </div>
    </div>

    {/* Final empty spacer */}
    <div className="hidden sm:block"></div>
  </div>
</section>
);
}
