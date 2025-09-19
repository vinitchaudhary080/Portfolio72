// src/components/about/DesignApproachSection.jsx
"use client";
import React from "react";

// --- Use your existing icons (from ProvidedSection assets) ---
import DiscoverIcon from "../../assets/abouticons/search.svg";               // Discover Needs
import DefineIcon from "../../assets/abouticons/define.svg";      // Define
import IdeateIcon from "../../assets/abouticons/idea.svg";                    // Ideate
import DesignIcon from "../../assets/abouticons/design.svg";      // Design
import PrototypeIcon from "../../assets/abouticons/prototype.svg";          // Prototype & Test
import CollaborateIcon from "../../assets/abouticons/coll.svg";                // Collaborate & Ship
import ReflectIcon from "../../assets/abouticons/Refresh.svg";                   // Reflect & Iterate
// --------------------------------------------------------------

const INTRO =
  "Every great product starts with curiosity and empathy. My process is flexible but rooted in principles balancing user needs, business goals, and craft. Here’s how I typically bring ideas to life:";

const ITEMS = [
  {
    no: "01",
    icon: DiscoverIcon,
    title: "Discover Needs",
    desc:
      "I begin with understanding the problem—through user research, stakeholder conversations, and market scans. This phase is all about asking the right questions.",
  },
  {
    no: "02",
    icon: DefineIcon,
    title: "Define",
    desc:
      "I synthesise insights into clear problem statements, user personas, and journey maps. It aligns everyone on what we’re solving and why.",
  },
  {
    no: "03",
    icon: IdeateIcon,
    title: "Ideate",
    desc:
      "Time to explore. I sketch, wireframe, and brainstorm multiple directions testing early hypotheses before jumping into detailed design.",
  },
  {
    no: "04",
    icon: DesignIcon,
    title: "Design",
    desc:
      "I craft high-fidelity UI with a focus on clarity, usability, and delight—ensuring it aligns with brand and accessibility standards.",
  },
  {
    no: "05",
    icon: PrototypeIcon,
    title: "Prototype & Test",
    desc:
      "Clickable prototypes help validate flows and micro-interactions. I test with real users (and internally), iterating based on feedback.",
  },
  {
    no: "06",
    icon: CollaborateIcon,
    title: "Collaborate & Ship",
    desc:
      "Working closely with engineers and PMs, I refine details, document specs, and ensure the final build matches the vision. No pixels left behind.",
  },
  {
    no: "07",
    icon: ReflectIcon,
    title: "Reflect & Iterate",
    desc:
      "Post-launch, I track usage, gather feedback, and continuously optimise because good design is never really done.",
  },
];

export default function DesignApproachSection() {
  return (
    <section
      id="design-approach"
      className="bg-black py-16 px-6 sm:py-24 sm:px-24"
      aria-labelledby="design-approach-heading"
    >
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <h2
          id="design-approach-heading"
          className="text-white text-base sm:text-lg font-medium whitespace-nowrap"
        >
          My Design Approach
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Intro */}
      <p className="max-w-3xl text-gray-300 text-sm sm:text-[15px] leading-relaxed mb-10">
        {INTRO}
      </p>

      {/* Grid list (static, no animation) */}
      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
      >
        {ITEMS.map((it) => (
          <li key={it.no} role="listitem" aria-label={it.title}>
            <div className="relative overflow-hidden ">
              {/* subtle grid pattern bg */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "22px 22px",
                  }}
                />
              </div>

              {/* Icon + number */}
              <div className="relative z-10 mb-6 flex items-center gap-4">
                <img
                  src={it.icon}
                  alt={it.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
                
              </div>

              {/* Title + desc */}
              <h3 className="text-lg font-semibold text-white relative z-10">
                {it.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-2 relative z-10">
                {it.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
