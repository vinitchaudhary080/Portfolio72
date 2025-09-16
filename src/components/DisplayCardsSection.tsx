"use client";

import * as React from "react";
import DisplayCards from "./ui/display-cards";
import { Sparkles, Star, Zap } from "lucide-react";

export default function DisplayCardsSection() {
  const cards = [
    {
      icon: <Star className="w-4 h-4 text-yellow-300" />,
      title: "Featured",
      description: "Selected case study",
      date: "Updated today",
      titleClassName: "text-yellow-300",
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:rounded-xl before:outline before:outline-1 before:outline-white/10 before:h-[100%] before:content-[''] before:bg-black/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Zap className="w-4 h-4 text-blue-300" />,
      title: "Popular",
      description: "Trending this week",
      date: "2 days ago",
      titleClassName: "text-blue-300",
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:rounded-xl before:outline before:outline-1 before:outline-white/10 before:h-[100%] before:content-[''] before:bg-black/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-pink-300" />,
      title: "New",
      description: "Latest updates & features",
      date: "Just now",
      titleClassName: "text-pink-300",
      className:
        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
    
  ];

  return (
    <section className="w-full bg-black px-6 sm:px-20 py-32 min-h-[80vh]">

      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Highlights
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      <div className="flex items-center justify-center">
        <DisplayCards cards={cards} />
      </div>
    </section>
  );
}
