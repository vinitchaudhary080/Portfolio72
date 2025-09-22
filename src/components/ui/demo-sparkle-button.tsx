"use client";

import { SparkleButton } from "./sparkle-button";
import { FaRegCommentDots } from "react-icons/fa";

export default function DemoSparkleButton() {
  return (
    <div className="min-h-[40vh] bg-black text-white flex items-center justify-center p-6">
      <SparkleButton
        href="https://wa.me/919138607772"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/10 border-white/10"
        sparkles={20}
        duration={2.6}
        glow
      >
        <FaRegCommentDots className="text-base opacity-90" />
        Book a 15-min Call&nbsp;&rarr;
      </SparkleButton>
    </div>
  );
}
