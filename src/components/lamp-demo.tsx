// src/components/LampDemo.tsx
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { FaRegCommentDots } from "react-icons/fa";

export function LampDemo() {
  return (
    <LampContainer>
      {/* Eyebrow text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
        className="text-sm sm:text-base text-white italic mb-3 text-center px-4"
      >
        “Design meets strategy, and ideas turn real.”
      </motion.p>

      {/* Main heading */}
      <motion.h2
        initial={{ opacity: 0.6, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="
          mt-4 sm:mt-6
          bg-gradient-to-br from-slate-200 to-slate-500
          bg-clip-text text-transparent
          text-xl sm:text-4xl md:text-5xl lg:text-4xl
          font-medium sm:font-normal
          text-center leading-snug sm:leading-tight
          max-w-3xl px-4
        "
      >
        Share your brief → I’ll break down scope, risks, and a sprint roadmap to kick things off-ready in 48 hours.
      </motion.h2>

      {/* CTA button */}
      <motion.a
        href="https://wa.me/919138607772"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-6 py-3 mt-10 mx-auto rounded-xl text-sm font-medium border border-white/10 text-white backdrop-blur-sm bg-white/10 hover:bg-white/20 hover:scale-105 transition focus:outline-none focus:ring-2 focus:ring-white/30"
        aria-label="Discuss your project on WhatsApp"
      >
        <FaRegCommentDots className="text-lg" />
        Discuss your project&nbsp;&rarr;
      </motion.a>
    </LampContainer>
  );
}
