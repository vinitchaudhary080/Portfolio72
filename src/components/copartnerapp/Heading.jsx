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
       – CopartnerApp – <br />
        Stock Market Tips & Market Updates <br />
        <div className="mt-12">
         <h3 className="text-sm sm:text-lg font-normal mb-2">A finance product where professional research analysts and traders share actionable buy/sell tips and market insights, which users can access through a subscription model.</h3>
          
        </div>

      </h1>
    </section>
  );
}
