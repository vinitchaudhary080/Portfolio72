// src/components/projectdetails/projectdummy/ScriptEditorSection.jsx
import React from "react";
import img from "../../assets/Alpha/iPhone_Mockup_2.webp";
import img2 from "../../assets/Alpha/iMac_on_Table_Mockup_2.webp";
import dashboard from "../../assets/Alpha/phone_mockup_5.webp";
import strategy from "../../assets/Alpha/Dashboard.webp";
import trading from "../../assets/Alpha/Landing Page.webp";

export default function ScriptEditorSection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6 sm:px-20 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Image Block */}
        <div className="group transition duration-500 ease-in-out transform hover:scale-[1.02] hover:-translate-y-1">
          <img
            src={img}
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
            src={img2}
            alt="Side-by-side view, Vow Builder"
            className="rounded-xl w-full h-auto object-contain shadow-md group-hover:shadow-2xl transition-shadow duration-500"
          />
          {/* <p className="text-center text-gray-400 text-sm mt-4">
            Side-by-side view, Vow Builder
          </p> */}
        </div>
      </div>


      <div className="w-full bg-black text-white py-12 ">
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={dashboard}
              alt="Project Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
         <div className="w-full bg-black text-white  ">
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={strategy}
              alt="Project Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

         <div className="w-full bg-black text-white py-12 ">
          <div className="rounded-3xl overflow-hidden transition duration-700 hover:scale-[1.02]">
            <img
              src={trading}
              alt="Project Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

    </section>
  );
}
