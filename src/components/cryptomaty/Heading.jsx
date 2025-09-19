import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-5xl">
        – Cryptomaty – <br />
        Backtest, Deploy & Learn Crypto Strategies — Free
      </h1>

      {/* Subheading */}
      <p className="mt-6 sm:mt-8 text-sm sm:text-lg font-normal max-w-4xl text-white/90">
        Cryptomaty is a crypto trading platform for beginners and experienced traders. 
        Explore expert-created strategy templates, <strong>backtest</strong> them on historical data, and 
        <strong> deploy</strong> live via <strong>Delta Exchange</strong>. Track performance with visual analytics—charts, graphs, and PnL breakdowns—
        to understand what’s working and why. Completely <strong>free</strong> so you can learn, test, and grow with confidence.
      </p>
    </section>
  );
}
