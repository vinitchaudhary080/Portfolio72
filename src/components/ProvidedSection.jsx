// src/components/about/ProvidedSection.jsx
import React from "react";
import UI from "../assets/Icons/Pallete 2.svg";
import BS from "../assets/Icons/Database.svg";
import PD from "../assets/Icons/Laptop Minimalistic.svg";
import UR from "../assets/Icons/Graph.svg";
import DS from "../assets/Icons/Bolt.svg";
import WF from "../assets/Icons/Window Frame.svg";
import AA from "../assets/Icons/Widget 5.svg";
import OP from "../assets/Icons/Document Add.svg";

const ITEMS = [
  {
    icon: UI,
    title: "UI/UX Design",
    desc:
      "Pixel-accurate interfaces with clear hierarchies, robust states, and production-ready specs. Focused on usability, clarity, and speed.",
  },
  {
    icon: BS,
    title: "Brand Strategy",
    desc:
      "Workshops to define positioning, tone, and story. I translate research into a memorable visual + verbal system that scales.",
  },
  {
    icon: PD,
    title: "Product Design",
    desc:
      "From discovery to MVP and beyond—end-to-end flows, rapid prototypes, and measurable product outcomes.",
  },
  {
    icon: UR,
    title: "UX Research",
    desc:
      "Interviews, usability tests, and behavioral analysis. Insights convert directly into roadmaps and design decisions.",
  },
  {
    icon: DS,
    title: "Design Systems",
    desc:
      "Tokens, components, variants, and docs. Keeps design and code in sync so teams ship faster with consistency.",
  },
  {
    icon: WF,
    title: "Web & Frontend",
    desc:
      "Next.js/Tailwind/Webflow builds that are responsive, SEO-friendly, and optimized for performance.",
  },
  {
    icon: AA,
    title: "Accessibility",
    desc:
      "WCAG-aligned patterns—contrast, focus, keyboard nav, ARIA. Accessibility is baked in, not an afterthought.",
  },
  {
    icon: OP,
    title: "Optimization & CRO",
    desc:
      "Funnels, GA4/Hotjar insights, and A/B tests. Iterations that lift conversion and reduce drop-offs.",
  },
];

export default function ProvidedSection() {
  return (
    <section className="bg-black py-16 px-6 sm:py-24 sm:px-24">
     
        {/* optional tiny section label line */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
            Services
          </h2>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Grid exactly like the screenshot spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
          {ITEMS.map((it, idx) => (
            <div key={idx} className="flex flex-col">
              {/* Icon */}
              <div className="mb-6">
                <img
                  src={it.icon}
                  alt={it.title}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl"
                />
              </div>

              {/* Title + paragraph (bold title inline, like Apple) */}
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
  <p className="text-gray-400 text-sm leading-relaxed">{it.desc}</p>
            </div>
          ))}
        </div>
      
    </section>
  );
}
