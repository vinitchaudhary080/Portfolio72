import clsx from "clsx";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

type SparkleCardProps = {
  children: React.ReactNode;
  className?: string;
  /** Number of sparkles */
  sparkles?: number;
  /** Duration of one sparkle cycle */
  duration?: number;
};

type Sparkle = { id: number; x: number; y: number };

function getRandomSparkle(id: number): Sparkle {
  return { id, x: Math.random() * 100, y: Math.random() * 100 };
}

export function SparkleCard({
  children,
  className,
  sparkles = 15,
  duration = 3,
}: SparkleCardProps) {
  const [dots, setDots] = useState<Sparkle[]>([]);

  useEffect(() => {
    setDots(Array.from({ length: sparkles }, (_, i) => getRandomSparkle(i)));
  }, [sparkles]);

  const respawnSparkle = (id: number) => {
    setDots((prev) => prev.map((d) => (d.id === id ? getRandomSparkle(id) : d)));
  };

  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-2xl border border-border p-6 bg-background shadow-md",
        className
      )}
    >
      <div className="absolute inset-0 pointer-events-none">
        {dots.map((dot) => (
          <motion.span
            key={dot.id + "-" + dot.x + "-" + dot.y}
            className="absolute"
            style={{ top: `${dot.y}%`, left: `${dot.x}%` }}
            animate={{ opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration, repeat: 0, delay: Math.random() * duration }}
            onAnimationComplete={() => respawnSparkle(dot.id)}
          >
            <span className="block w-0.5 h-0.5 rounded-full bg-black dark:bg-white" />
          </motion.span>
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
