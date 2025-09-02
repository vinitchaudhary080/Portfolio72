// src/components/projectdetails/projectdummy/ProcessStep1.jsx
import React from "react";
import editorImg1 from "../../assets/Investock/Investockflow.jpg";
import editorImg2 from "../../assets/Investock/portfoliomockup.jpg";
import editorImg3 from "../../assets/Investock/onboardmockup.jpg";

export default function ProcessStep1() {
  return (
    <section className="bg-black text-white px-6 sm:px-20 py-20">
      {/* Heading Line like "Work Samples" style */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Visual Highlights
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Images Wrapper with consistent spacing */}
      <div className="space-y-12">
        {/* Onboarding Mockup */}
        <div>
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={editorImg1}
              alt="Onboarding Mockup"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Product Flow</p>
        </div>

        {/* Portfolio Mockup */}
        <div>
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={editorImg2}
              alt="Portfolio Mockup"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Portfolio Mockup */}
        <div>
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={editorImg3}
              alt="Portfolio Mockup"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
