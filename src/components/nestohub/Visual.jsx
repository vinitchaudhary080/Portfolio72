// src/components/projectdetails/projectdummy/ProcessStep1.jsx
import React from "react";
import projectImage from "../../assets/Nestohub/nestoHub6.webp";
import projectImage1 from "../../assets/Nestohub/nestoHub9.webp";
import projectImage2 from "../../assets/Nestohub/Productflow.jpg";

export default function ProcessStep1() {
  return (
    <section className="bg-black text-white px-6 sm:px-20 py-20 ">
      {/* Heading Line like "Work Samples" style */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Visual Highlights
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Images Wrapper with spacing */}
      <div className="space-y-12">
        {/* Product Flow */}
        <div>
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={projectImage2}
              alt="Product Flow"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Product Flow</p>
        </div>

        {/* Wireframe */}
        <div>
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={projectImage}
              alt="Wireframe"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* <p className="text-center text-gray-400 text-sm mt-4">Wireframe</p> */}
        </div>

        <div>
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={projectImage1}
              alt="Wireframe"
              className="w-full h-auto object-cover"
            />
          </div>
          {/* <p className="text-center text-gray-400 text-sm mt-4">Wireframe</p> */}
        </div>
      </div>
    </section>
  );
}
