// src/components/about/TeamManagementSection.jsx
"use client";
import React from "react";

// ---- Replace these with your actual icon files (same style as ProvidedSection) ----
import VisionIcon from "../../assets/Icons/Pallete 2.svg";
import SprintIcon from "../../assets/Icons/vision.svg";
import FeedbackIcon from "../../assets/Icons/feedback.svg";
import PeopleIcon from "../../assets/Icons/people.svg";
import AdaptIcon from "../../assets/Icons/Devices.svg";
import CultureIcon from "../../assets/Icons/calture.svg";

// -----------------------------------------------------------------------------------

const INTRO =
  "I bring structure, clarity, and momentum to the way teams work. I believe good design needs both space to think and systems to move.";

const ITEMS = [
  {
    icon: SprintIcon,
    title: "Vision & Direction",
    desc:
      "I set a clear, purpose-driven design vision that aligns with product and business goals. I help my team see the big picture and stay focused on outcomes, not just outputs.",
  },
  {
    icon: VisionIcon,
    title: "Design Sprints & Standups",
    desc:
      "A sprint-based approach maintains focus and velocity. Daily standups drive transparency and unblock progress. Regular grooming and refinement help us prioritise, spot gaps early, and deliver with confidence.",
  },
  {
    icon: FeedbackIcon,
    title: "Regular Feedback",
    desc:
      "It’s not just about timelines — it’s about creating a rhythm where collaboration thrives, feedback flows, and every designer feels supported to do their best work.",
  },
  {
    icon: PeopleIcon,
    title: "People & Growth",
    desc:
      "I prioritise mentorship and individual growth. I create space for designers to take ownership, experiment confidently, and grow into their best selves.",
  },
  {
    icon: AdaptIcon,
    title: "Adaptability & Evolution",
    desc:
      "We stay flexible and open to change. We continuously reflect on how we work and evolve our process based on what’s working, what’s not, and where we want to go next.",
  },
  {
    icon: CultureIcon,
    title: "Culture & Creativity (my fav)",
    desc:
      "Celebrating wins — however small — keeps us motivated. We nurture curiosity, protect focus time, and create room for playful exploration.",
  },
];

export default function TeamManagementSection() {
  return (
    <section
      id="team-management"
      className="bg-black py-16 px-6 sm:py-24 sm:px-24"
      aria-labelledby="team-heading"
    >
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-8 sm:mb-12">
        <h2
          id="team-heading"
          className="text-white text-base sm:text-lg font-medium whitespace-nowrap"
        >
          Team Management
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Intro line */}
      <p className="max-w-3xl text-gray-300 text-sm sm:text-[15px] leading-relaxed mb-10">
        {INTRO}
      </p>

      {/* Grid list */}
      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
      >
        {ITEMS.map((it, idx) => (
          <li key={idx} role="listitem" aria-label={it.title}>
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

              {/* Icon */}
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
