import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Top Row */}
      {/* <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-10">
        <span className="font-medium">Algorooms</span>
        <span className="font-medium">Dashboard</span>
      </div> */}

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-5xl">
       – Algorooms – <br />
        Strategy Creation & Automated Trading Platform <br />
        <div className="mt-12">
         <h3 className="text-sm sm:text-lg font-normal mb-2">A next-gen algo trading platform that enables traders to design, backtest, and deploy their trading strategies seamlessly with their existing brokers.</h3>
          
        </div>

      </h1>
    </section>
  );
}
