"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

type SparkleButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  /** number of sparkles live at a time */
  sparkles?: number;
  /** seconds for a single sparkle cycle */
  duration?: number;
  /** extra dense glow on hover */
  glow?: boolean;
  /** full width on mobile? */
  fullWidth?: boolean;
};

type Dot = { id: number; x: number; y: number; size: number };

function randDot(id: number): Dot {
  return {
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.6, // px scaling (0.6–2.1)
  };
}

export function SparkleButton({
  children,
  className,
  onClick,
  href,
  target,
  rel,
  sparkles = 18,
  duration = 2.4,
  glow = true,
  fullWidth = false,
}: SparkleButtonProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  useEffect(() => {
    setDots(Array.from({ length: sparkles }, (_, i) => randDot(i)));
  }, [sparkles]);

  const respawn = (id: number) => {
    setDots((prev) => prev.map((d) => (d.id === id ? randDot(id) : d)));
  };

  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium " +
    "border border-white/10 text-white bg-white/10 backdrop-blur-sm " +
    "transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/30";

  const glowRing =
    "pointer-events-none absolute inset-0 rounded-xl ring-0 ring-transparent " +
    "hover:ring-8 hover:ring-white/10 transition-[box-shadow,ring] duration-300";

  const ButtonInner = (
    <>
      {/* sparkle layer */}
      <div className="pointer-events-none absolute inset-0 overflow-clip">
        {dots.map((d) => (
          <motion.span
            key={`${d.id}-${d.x}-${d.y}`}
            className="absolute"
            style={{ top: `${d.y}%`, left: `${d.x}%` }}
            animate={{ opacity: [0, 0.9, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration, delay: Math.random() * duration, repeat: 0 }}
            onAnimationComplete={() => respawn(d.id)}
          >
            <span
              className="block rounded-full dark:bg-white bg-black"
              style={{ width: `${d.size}px`, height: `${d.size}px` }}
            />
          </motion.span>
        ))}
      </div>

      {/* glow ring */}
      {glow && <span className={glowRing} />}

      {/* content */}
      <span className="relative z-10">{children}</span>
    </>
  );

  // Anchor or Button — both supported
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={clsx(base, fullWidth && "w-full", className)}
      >
        {ButtonInner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={clsx(base, fullWidth && "w-full", className)}>
      {ButtonInner}
    </button>
  );
}
