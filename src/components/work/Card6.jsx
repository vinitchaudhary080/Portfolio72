// src/components/workpage/Card1.jsx
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// main hero (left)
import mainImage from "../../assets/Nestohub/nestoHub1.jpg";

// thumbs (marquee)
import thumb1 from "../../assets/Nestohub/nestoHub1.jpg";
import thumb2 from "../../assets/Nestohub/nestoHub3.jpg";
import thumb3 from "../../assets/Nestohub/nestoHub6.jpg";
import thumb4 from "../../assets/Nestohub/nestoHub9.jpg";
import thumb5 from "../../assets/Nestohub/Cover.png";
import thumb6 from "../../assets/Nestohub/Thumbnail 2.png";
import thumb7 from "../../assets/Nestohub/Cover Sheet.png";

// --- Wave overlay (same as Card7) ---
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
      waveData.forEach((d) => {
        if (Math.random() < 0.01) d.targetValue = Math.random() * 0.7 + 0.1;
        const diff = d.targetValue - d.value;
        d.value += diff * d.speed;
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
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
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
    resize();
    animate();

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} />;
}

export default function Card1() {
  const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7];
  const looped = [...thumbs, ...thumbs];

  // WorkSection जैसा tag style
  const tags = ["Real Estate", "Web", "CRM"];

  return (
    <section className="px-6 mb-16">
      <div
        className="
          group relative rounded-2xl overflow-hidden
          border border-white/10 bg-black/50
          shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]
          transition-transform duration-300 hover:-translate-y-1
          focus:outline-none focus:ring-2 focus:ring-white/20
        "
      >
        {/* desktop: 60/40 split; mobile: single col (image fixed height) */}
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
          {/* LEFT IMAGE */}
          <div className="relative overflow-hidden h-[220px] sm:h-[260px] md:h-auto">
            <img
              src={mainImage}
              alt="NestoHub hero"
              className="
                absolute inset-0 w-full h-full object-cover
                motion-safe:transition-transform motion-safe:duration-[900ms]
                motion-safe:ease-[cubic-bezier(0.22,1,0.36,1)]
                motion-safe:will-change-transform
                group-hover:scale-[1.06]
              "
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/10 to-black/40" />
            <WaveCanvas className="absolute inset-0 w-full h-full mix-blend-screen opacity-30 pointer-events-none" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,rgba(255,255,255,0.25) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.25) 1px,transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative p-5 sm:p-6 md:p-8 flex flex-col">
            {/* badge */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4">
              <span
                className="
                  px-2.5 py-1 rounded-full text-[10px] uppercase tracking-wide
                  bg-black/40 text-white border border-white/20 backdrop-blur-sm
                  dark:bg-white/10 dark:text-white/80
                "
              >
                NestoHub
              </span>
            </div>

            <h3 className="text-white text-lg sm:text-xl md:text-2xl font-light leading-snug">
              Nestohub
              <br />
              <span className="text-white/90">A Real Estate Product</span>
            </h3>

            <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-3">
              List inventory, schedule visits, and convert leads—with real-time sync
              across web and mobile.
            </p>

            <p className="mt-3 text-xs text-white/55">Product UX • Web &amp; Mobile</p>

            {/* TAGS row (same style as WorkSection.jsx) */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md text-[10px] border border-cyan-400/25 text-cyan-200/90 bg-cyan-500/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-5">
              <Link
                to="/nestohub/nestohub-real-estate-product"
                className="
                  inline-flex items-center gap-2
                  px-6 py-3 rounded-xl text-sm font-medium
                  border border-white/10 text-white
                  backdrop-blur-sm
                  bg-white/10 hover:bg-white/20
                  hover:scale-105 transition
                  focus:outline-none focus:ring-2 focus:ring-white/30
                "
              >
                View Project
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* thumbnails marquee */}
            <div className="mt-5 w-full overflow-hidden">
              <div className="flex gap-2 animate-marquee">
                {looped.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Nestohub thumbnail ${i + 1}`}
                    className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-lg flex-shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* faint divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  );
}
