// src/components/WorkCardFX.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function WaveCanvas({ className }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let time = 0;
    const waveData = Array.from({ length: 8 }).map(() => ({
      value: Math.random() * 0.5 + 0.1,
      targetValue: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
    }));

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    function resize() {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function updateWaveData() {
      waveData.forEach((data) => {
        if (Math.random() < 0.01) data.targetValue = Math.random() * 0.7 + 0.1;
        const diff = data.targetValue - data.value;
        data.value += diff * data.speed;
      });
    }

    function draw() {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      waveData.forEach((data, i) => {
        const freq = data.value * 7;
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
          const nx = (x / width) * 2 - 1;
          const px = nx + i * 0.04 + freq * 0.03;
          const py =
            Math.sin(px * 10 + time) *
            Math.cos(px * 2) *
            freq *
            0.1 *
            ((i + 1) / 8);
          const y = (py + 1) * (height / 2);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const intensity = Math.min(1, freq * 0.3);
        const r = 79 + intensity * 100;
        const g = 70 + intensity * 130;
        const b = 229;
        ctx.lineWidth = 1 + i * 0.3;
        ctx.strokeStyle = `rgba(${r},${g},${b},0.25)`;
        ctx.shadowColor = `rgba(${r},${g},${b},0.2)`;
        ctx.shadowBlur = 3;
        ctx.stroke();
        ctx.shadowBlur = 0;
      });
    }

    function animate() {
      time += 0.02;
      updateWaveData();
      draw();
      rafRef.current = requestAnimationFrame(animate);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    resize();
    if (!prefersReduced) animate();
    else draw();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}

export default function WorkCardFX({
  path,
  frontImage,
  title,
  author,
  content,
  role,
  result,
  tags = [],
}) {
  return (
    <Link
      to={path}
      className="
        group relative rounded-2xl overflow-hidden
        border border-white/10 bg-black/50
        shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]
        transition-transform duration-300 hover:-translate-y-1
        focus:outline-none focus:ring-2 focus:ring-white/20
      "
    >
      {/* Top media area (image + animated wave overlay) */}
      <div className="relative h-48 sm:h-56 md:h-56 overflow-hidden">
        {/* Project image (soft zoom on hover) */}
        {frontImage ? (
          <img
            src={frontImage}
            alt={title}
            className="
              absolute inset-0 w-full h-full object-cover
              motion-safe:transition-transform motion-safe:duration-[900ms]
              motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]
              motion-safe:will-change-transform
              group-hover:scale-[1.06]
            "
          />
        ) : (
          <div
            className="
              absolute inset-0 bg-gradient-to-br from-indigo-700/40 via-purple-700/30 to-sky-600/30
              motion-safe:transition-transform motion-safe:duration-[900ms]
              motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]
              motion-safe:will-change-transform
              group-hover:scale-[1.06]
            "
          />
        )}

        {/* Soft overlay to ensure text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />

        {/* Animated wave visualizer */}
        <WaveCanvas className="absolute inset-0 w-full h-full mix-blend-screen opacity-30 pointer-events-none" />

        {/* Subtle animated grid */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(90deg,rgba(255,255,255,0.25) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.25) 1px,transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* top-right badge — contrast-friendly */}
        <div className="absolute top-3 right-3">
          <span
            className="
              px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wide
              bg-black/40 text-white border border-white/20 backdrop-blur-sm
              dark:bg-white/10 dark:text-white/80
            "
          >
            {author}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-white text-base sm:text-lg font-medium">{title}</h3>

        {role && <p className="text-white/60 text-xs mt-1 mb-2">{role}</p>}

        {content && (
          <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{content}</p>
        )}

        {/* tags + CTA row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((t, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded-md text-[10px] border border-cyan-400/25 text-cyan-200/90 bg-cyan-500/10"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center text-white-800 text-xs font-medium group-hover:text-cyan-200 transition-colors">
            View
            <svg
              className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        {result && <div className="mt-3 text-[11px] text-white/55">{result}</div>}
      </div>

      {/* Outer glow on hover */}
      <span
        className="
          pointer-events-none absolute inset-0 rounded-2xl
          ring-0 ring-transparent group-hover:ring-4 group-hover:ring-white/10
          transition-[box-shadow,ring] duration-300
        "
      />
    </Link>
  );
}
