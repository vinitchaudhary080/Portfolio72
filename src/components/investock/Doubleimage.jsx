// src/components/projectdetails/projectdummy/ScriptEditorSection.jsx
import React from "react";
import editorImg1 from "../../assets/Investock/advisorymockup.jpg";
import editorImg2 from "../../assets/Investock/portfoliomockups.jpg";

export default function ScriptEditorSection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 sm:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Image Block */}
        <div className="group transition duration-500 ease-in-out transform hover:scale-[1.02] hover:-translate-y-1">
          <img
            src={editorImg1}
            alt="Ceremony Script Editor"
            className="rounded-xl w-full h-auto object-contain shadow-md group-hover:shadow-2xl transition-shadow duration-500"
          />
          {/* <p className="text-center text-gray-400 text-sm mt-4">
            Ceremony Script Editor
          </p> */}
        </div>

        {/* Right Image Block */}
        <div className="group transition duration-500 ease-in-out transform hover:scale-[1.02] hover:-translate-y-1">
          <img
            src={editorImg2}
            alt="Side-by-side view, Vow Builder"
            className="rounded-xl w-full h-auto object-contain shadow-md group-hover:shadow-2xl transition-shadow duration-500"
          />
          {/* <p className="text-center text-gray-400 text-sm mt-4">
            Side-by-side view, Vow Builder
          </p> */}
        </div>
      </div>
    </section>
  );
}
