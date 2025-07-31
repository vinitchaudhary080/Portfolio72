import React from "react";

export default function Heading() {
  return (
    <section className="bg-black text-white pt-24 pb-8 sm:py-12 px-4 sm:min-h-screen flex flex-col justify-center items-center text-center">
      {/* Top Row */}
      <div className="w-full flex justify-between items-center text-xs sm:text-sm tracking-wide px-4 sm:px-20 mb-6">
        <span className="font-medium uppercase">BudgetTree</span>
        <span className="font-medium">2025</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold leading-tight max-w-4xl">
        Gifting ko bana do<br />
        personal aur instant
      </h1>

      {/* Subheading */}
      <p className="mt-6 text-base sm:text-lg max-w-2xl font-light">
        Diwali, birthdays, festivals ya koi bhi special moment — custom digital gift cards create karo aur turant bhejo. No physical hassle, sirf thoughtful surprise.
      </p>

      
    </section>
  );
}
