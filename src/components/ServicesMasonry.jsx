// src/components/about/ServicesSection.jsx
import React from "react";
import placeholder from "../assets/Letter.svg"; // agar alag icon/chhota logo chahiye toh yahan replace karo
import UI from "../assets/Icons/Pallete 2.svg";
import BS from "../assets/Icons/Database.svg";
import PD from "../assets/Icons/Laptop Minimalistic.svg";
import UR from "../assets/Icons/Graph.svg";
import DS from "../assets/Icons/Bolt.svg";
import AA from "../assets/Icons/Widget 5.svg";
import WF from "../assets/Icons/Window Frame.svg";
import OP from "../assets/Icons/Document Add.svg";


const SERVICES = [
  {
    title: "UI / UX Design",
    logo: UI,
    desc:
      "I craft user journeys that feel natural and interfaces that delight. From concept to dev-handoff, every screen is designed with usability, accessibility, and scalability in mind—ensuring designs not only look good but perform under real-world conditions.",
  },
  {
    title: "Brand Strategy",
    logo: BS,
    desc:
      "I help businesses define who they are and how they should be perceived. By combining research, storytelling, and design systems, I build brand identities that connect emotionally and stand out in competitive markets.",
  },
  {
    title: "Product Design",
    logo: PD,
    desc:
      "I specialize in translating complex problems into intuitive, high-impact products. From MVPs to enterprise-scale solutions, I focus on functionality, efficiency, and aesthetics that drive measurable business growth.",
  },
  {
    title: "UX Research",
    logo: UR,
    desc:
      "I dig into real user behavior through interviews, usability tests, and data analysis. Insights are then converted into actionable design strategies that reduce friction, increase engagement, and boost retention.",
  },
  {
    title: "Design Systems",
    logo: DS,
    desc:
      "I build scalable, future-proof design systems that empower teams to move faster without losing consistency. Every component and token is documented for seamless collaboration between design and development.",
  },
  {
    title: "Web & Frontend",
    logo: WF,
    desc:
      "I don’t just design—I also bring designs to life. With hands-on expertise in Webflow, Next.js, and Tailwind, I deliver responsive, SEO-friendly, and performance-optimized experiences that score 90+ on Lighthouse.",
  },
  {
    title: "Accessibility",
    logo: AA,
    desc:
      "I design inclusively, making sure every product works seamlessly for everyone. From WCAG compliance to screen reader testing, accessibility is baked into my workflow, not treated as an afterthought.",
  },
  {
    title: "Optimization & CRO",
    logo: OP,
    desc:
      "I refine user flows with data-driven decisions. By analyzing heatmaps, running A/B tests, and optimizing microcopy & layouts, I consistently improve conversions, reduce drop-offs, and maximize ROI.",
  },
];



export default function ServicesSection() {
  return (
    <section className="bg-black py-16 px-6 sm:py-24 sm:px-24">
     
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
    
    </section>
  );
}
