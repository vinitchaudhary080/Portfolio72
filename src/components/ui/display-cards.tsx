"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import { Sparkles } from "lucide-react";

export interface DisplayCardProps {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  date?: string;
  iconClassName?: string;
  titleClassName?: string;
}

function DisplayCard({
  className,
  icon = <Sparkles className="w-4 h-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}: DisplayCardProps) {
  return (
    <div
      className={cn(
        // card base
        "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between",
        "rounded-xl border-2 bg-neutral-900/70 px-4 py-3 backdrop-blur-sm",
        // glossy sweep on hover
        "transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem]",
        "after:bg-gradient-to-l after:from-black after:to-transparent after:content-['']",
        // subtle theme-ish states
        "border-white/10 hover:border-white/20 hover:bg-neutral-900",
        // layout helpers for children
        "[&>*]:flex [&>*]:items-center [&>*]:gap-2",
        className
      )}
    >
      <div>
        <span className="relative inline-block rounded-full bg-blue-800 p-1">
          {icon}
        </span>
        <p className={cn("text-lg font-medium", titleClassName)}>{title}</p>
      </div>

      <p className="whitespace-nowrap text-lg">{description}</p>
      <p className="text-neutral-400">{date}</p>
    </div>
  );
}

export interface DisplayCardsProps {
  cards?: DisplayCardProps[];
}

/**
 * Stacks 3 cards in a single grid area ([grid-template-areas:'stack'])
 * and uses translate/skew + grayscale on the lower cards.
 */
export default function DisplayCards({ cards }: DisplayCardsProps) {
  const defaultCards: DisplayCardProps[] = [
    {
      className:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:rounded-xl before:outline before:outline-1 before:outline-white/10 before:h-[100%] before:content-[''] before:bg-black/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className:
        "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:rounded-xl before:outline before:outline-1 before:outline-white/10 before:h-[100%] before:content-[''] before:bg-black/50 grayscale hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
    },
    {
      className:
        "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
    },
  ];

  const displayCards = cards ?? defaultCards;

  return (
    <div className="grid place-items-center opacity-100 animate-in fade-in-0 duration-700 [grid-template-areas:'stack']">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}
