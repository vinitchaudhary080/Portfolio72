// src/components/about/ServicesSection.jsx
import React from "react";
import placeholder from "../../assets/Letter.svg"; // agar alag icon/chhota logo chahiye toh yahan replace karo
import UI from "../../assets/Icons/Pallete 2.svg";
import BS from "../../assets/Icons/Database.svg";
import PD from "../../assets/Icons/Laptop Minimalistic.svg";
import UR from "../../assets/Icons/Graph.svg";
import DS from "../../assets/Icons/Bolt.svg";
import AA from "../../assets/Icons/Widget 5.svg";
import WF from "../../assets/Icons/Window Frame.svg";
import OP from "../../assets/Icons/Document Add.svg";


const SERVICES = [
  {
    title: "UI / UX Design",
    logo: UI,
    desc: "Design elegant, intuitive interfaces that users understand instantly and enjoy using.",
  },
  {
    title: "Brand Strategy",
    logo: BS,
    desc: "Define your brand’s voice, positioning and visual identity to create emotional resonance.",
  },
  {
    title: "Product Design",
    logo: PD,
    desc: "Take ideas from concept to launch with user-centered products built for scale and clarity.",
  },
  {
    title: "UX Research",
    logo: UR,
    desc: "Ground decisions in real user insights—interviews, testing, and behavioral analysis.",
  },
  {
    title: "Design Systems",
    logo: DS,
    desc: "Create reusable, cohesive systems that keep your product consistent and fast to ship.",
  },
  {
    title: "Web & Frontend",
    logo: WF,
    desc: "Build high-performance responsive experiences (Webflow / modern stacks) optimized for conversion.",
  },
  {
    title: "Accessibility",
    logo: AA,
    desc: "Ensure inclusivity by designing with accessibility best practices from day one.",
  },
  {
    title: "Optimization & CRO",
    logo: OP,
    desc: "Refine user flows and visuals through testing to boost engagement and business outcomes.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 sm:px-12 mt-8 mb-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Section heading with divider */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
            Services
          </h2>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={i}
              className="
                border border-gray-700
                p-8
                lg:min-h-[300px]
                flex flex-col items-center text-center
                transition-all duration-300 ease-in-out
                hover:bg-[#232323]
              "
            >
              <img src={s.logo} alt={s.title} className="h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
