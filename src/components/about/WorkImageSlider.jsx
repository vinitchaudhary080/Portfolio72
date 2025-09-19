// src/components/work/WorkImageSlider.jsx
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

// 👉 your local images
import a1 from "@/assets/aboutworkimg/img1.webp";
import a2 from "@/assets/aboutworkimg/img2.webp";
import a3 from "@/assets/aboutworkimg/img3.webp";
import a4 from "@/assets/aboutworkimg/img4.webp";
import a5 from "@/assets/aboutworkimg/img5.webp";
import a6 from "@/assets/aboutworkimg/img6.webp";
import a7 from "@/assets/aboutworkimg/img7.webp";
import a8 from "@/assets/aboutworkimg/img8.webp";
import a9 from "@/assets/aboutworkimg/img9.webp";
import a10 from "@/assets/aboutworkimg/img10.webp";
import a11 from "@/assets/aboutworkimg/img11.webp";
import a12 from "@/assets/aboutworkimg/img12.webp";
import a13 from "@/assets/aboutworkimg/img13.webp";

export default function WorkImageSlider({
  images = [a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13],
  // apne Work card ke EXACT size pe set karo:
  cardClass = "w-[340px] h-[220px] sm:w-[420px] sm:h-[280px]",
  rounded = "rounded-2xl",
  className = "",
  peekPx = 90,           // left/right side peek padding
  gapPx = 24,            // Tailwind .mr-6 = 24px
  speedPxPerSec = 160,   // 👉 continuous scroll speed (tweak as you like)
}) {
  // build base slides once
  const base = useMemo(() => images.map((src, i) => ({ id: i, src })), [images]);
  // duplicate slides so loop reset is invisible
  const trackSlides = useMemo(() => [...base, ...base], [base]);

  const railRef = useRef(null);
  const [cardW, setCardW] = useState(0);

  // measure a card’s width
  useEffect(() => {
    const measure = () => {
      const el = railRef.current?.querySelector("[data-slide]");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      setCardW(rect.width);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (railRef.current) ro.observe(railRef.current);
    const onR = () => measure();
    window.addEventListener("resize", onR);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onR);
    };
  }, [cardClass, images.length]);

  // --- continuous ticker ---
  const offsetRef = useRef(0);          // current translateX offset (px)
  const rafRef = useRef(null);
  const lastTRef = useRef(0);
  const hoverPauseRef = useRef(false);

  const sequenceWidth = (base.length || 0) * (cardW + gapPx); // width of one sequence

  useEffect(() => {
    if (!sequenceWidth) return;

    const tick = (t) => {
      if (!lastTRef.current) lastTRef.current = t;
      const dt = (t - lastTRef.current) / 1000; // seconds since last frame
      lastTRef.current = t;

      if (!hoverPauseRef.current) {
        // advance
        offsetRef.current += speedPxPerSec * dt;

        // wrap seamlessly when we have scrolled one full sequence
        if (offsetRef.current >= sequenceWidth) {
          offsetRef.current -= sequenceWidth;
        }
      }

      if (railRef.current) {
        railRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTRef.current = 0;
    };
  }, [sequenceWidth, speedPxPerSec]);

  // hover pause
  const onMouseEnter = () => (hoverPauseRef.current = true);
  const onMouseLeave = () => (hoverPauseRef.current = false);

  return (
    <section
      className={`bg-black py-10 sm:py-14 ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="container-xxl">
        <div className="relative overflow-hidden">
          {/* edge fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent" />

          {/* rail (no CSS transition — rAF drives it) */}
          <div
            ref={railRef}
            className="flex items-center will-change-transform"
            style={{
              paddingLeft: `${peekPx}px`,
              paddingRight: `${peekPx}px`,
            }}
          >
            {trackSlides.map((slide, i) => (
              <div
                key={`${slide.id}-${i}`}
                data-slide
                className={`shrink-0 ${cardClass} mr-6 last:mr-0 relative ${rounded} bg-neutral-900`}
              >
                {/* subtle grid pattern */}
                <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />
                </div>

                {/* image */}
                <img
                  src={slide.src}
                  alt={`work ${i}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl select-none"
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
