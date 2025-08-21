// src/components/projectdetails/projectdummy/ImageSection.jsx
import React from "react";
import projectImage from "../../assets/Cribonix/cribonix-3.jpg";

export default function ImageSection() {
  return (
    <section className="w-full bg-black px-4 sm:px-20 py-10 ">
     <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Visual Highlights
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>
      
       <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
        <img
          src={projectImage}
          alt="Project Preview"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Title below image */}
      <div className="text-white text-center mt-6">
        {/* <p className="text-center text-gray-400 text-sm mt-4">Wedding App Wireframes</p>
       */}
      </div>
    </section>
  );
}
