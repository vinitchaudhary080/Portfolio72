import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Top Row */}
      {/* <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-10">
        <span className="font-medium">Copartner</span>
        <span className="font-medium">Mobile - App</span>
      </div> */}

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight max-w-5xl">
       – Investock.ai – <br />
        AI-powered Investing Platform with Model Portfolios, Advisory & Baskets <br />
        <div className="mt-12">
         <h3 className="text-sm sm:text-lg font-normal mb-2">A platform designed to help beginners, part-time traders, and professionals invest smarter by connecting directly with brokers and automating the most complex parts of investing—portfolio management, rebalancing, advisory, and execution.</h3>
          
        </div>

      </h1>
    </section>
  );
}
