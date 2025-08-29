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
       – BePro – <br />
        Play, Track & Relive Your Cricket Matches <br />
        <div className="mt-12">
         <h3 className="text-sm sm:text-lg font-normal mb-2">BePro is a cricket app built for local players, street cricketers, and stadium-level teams, enabling them to create matches, track scores live, schedule tournaments, and maintain performance records—just like professional cricket.</h3>
          
        </div>

      </h1>
    </section>
  );
}
