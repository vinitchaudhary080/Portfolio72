// components/projectdummy/Summary.jsx
import React from "react";

export default function Summary() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-12">Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        {/* Left Column */}
        <div className="space-y-16 sm:space-y-32">
          {/* Mission */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Enable people to create, personalize, and send digital gift cards for festivals,
              birthdays, and special moments—in under 90 seconds—removing the friction of traditional gifting while keeping it thoughtful and shareable.
            </p>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">My Contributions</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              As the lead product & UX designer, I owned the end-to-end experience of BudgetTree:
              defined user personas and occasion-based journeys, designed the gift creation funnel,
              built reusable templates, crafted the share & redeem flows, and optimized for mobile-first
              usage. I also structured the onboarding, implemented micro-interactions for feedback,
              and set up instrumentation for tracking conversion and engagement. Iterated based on
              usability testing and early user feedback to reduce time-to-send and increase clarity.
            </p>
          </div>

          {/* Outcome */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Outcome</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Early users were able to create and send personalized gift cards quickly, with a streamlined
              flow that cut down decision friction. Initial metrics showed strong engagement on occasion
              campaigns, high shareability, and repeat usage. The experience delivered meaningful emotional
              value while keeping the interface lightweight and fast. (Replace with real numbers: conversion
              rate, average gift value, repeat/referral rate, etc.)
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Client */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              BudgetTree (self-initiated / product prototype)<br />
              Remote / India
            </p>
            <div className="flex gap-3 mt-3">
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Product Design</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">UX Strategy</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Services</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-1">
              <li>User Research & Flow Mapping</li>
              <li>Wireframing & Prototyping</li>
              <li>User Interface Design</li>
              <li>High-Fidelity Mockups</li>
              
              <li>Micro-Interactions & Animations</li>
              <li>Usability & A/B Testing</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
