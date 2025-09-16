// src/components/about/ProvidedSection.jsx
"use client";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import clsx from "clsx";

import UI from "../assets/Icons/Pallete 2.svg";
import BS from "../assets/Icons/Database.svg";
import PD from "../assets/Icons/Laptop Minimalistic.svg";
import UR from "../assets/Icons/Graph.svg";
import DS from "../assets/Icons/Bolt.svg";
import WF from "../assets/Icons/Window Frame.svg";
import AA from "../assets/Icons/Widget 5.svg";
import OP from "../assets/Icons/Document Add.svg";

const ITEMS = [
  { icon: UI, title: "UX/UI Design", desc: "Pixel accurate interfaces with clear hierarchies, robust states, and production-ready specs. Focused on usability, clarity, and speed." },
  { icon: BS, title: "Brand Strategy", desc: "Workshops to define positioning, tone, and story. I translate research into a memorable visual + verbal system that scales." },
  { icon: PD, title: "Product Design", desc: "From discovery to MVP and beyond end-to-end flows, rapid prototypes, and measurable product outcomes." },
  { icon: UR, title: "UX Research", desc: "Interviews, usability tests, and behavioral analysis. Insights convert directly into roadmaps and design decisions." },
  { icon: DS, title: "Design Systems", desc: "Tokens, components, variants, and docs. Keeps design and code in sync so teams ship faster with consistency." },
  { icon: WF, title: "Web & Frontend", desc: "Next.js/Tailwind/Webflow builds that are responsive, SEO-friendly, and optimized for performance." },
  { icon: AA, title: "Accessibility", desc: "WCAG-aligned patterns contrast, focus, keyboard nav, ARIA. Accessibility is baked in, not an afterthought." },
  { icon: OP, title: "Optimization & CRO", desc: "Funnels, GA4/Hotjar insights, and A/B tests. Iterations that lift conversion and reduce drop offs." },
];

export default function ProvidedSection() {
  return (
    <section
      id="services"
      className="bg-black py-16 px-6 sm:py-24 sm:px-24"
      aria-labelledby="services-heading"
    >
      {/* Section heading */}
      <div className="flex items-center gap-4 mb-12">
        <h2 id="services-heading" className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Services
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Grid (semantic list) */}
      <ul
        role="list"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
      >
        {ITEMS.map((it, idx) => (
          <li key={idx} role="listitem" aria-label={it.title}>
            <AnimatedCard delay={idx * 0.05}>
              <div className="relative overflow-hidden rounded-2xl">
                {/* Subtle patterned bg */}
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
                <div className="mb-6 relative z-10">
                  <img
                    src={it.icon}
                    alt={it.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                {/* Title + desc */}
                <h3 className="text-lg font-semibold text-white relative z-10">{it.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-2 relative z-10">{it.desc}</p>
              </div>
            </AnimatedCard>
          </li>
        ))}
      </ul>
    </section>
  );
}

function AnimatedCard({ children, delay = 0.1 }) {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) return <div>{children}</div>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
