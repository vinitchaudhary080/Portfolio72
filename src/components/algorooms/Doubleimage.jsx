// src/components/projectdetails/projectdummy/ScriptEditorSection.jsx
import React, { useMemo, useState, useEffect, useRef } from "react";
import login from "../../assets/Algorooms/login.webp";
import dashboard from "../../assets/Algorooms/dashboard.webp";
import notification from "../../assets/Algorooms/notification.webp";
import createstrategy from "../../assets/Algorooms/createstrategy.webp";
import mystrategy from "../../assets/Algorooms/mystrategy.webp";
import backtest from "../../assets/Algorooms/backtest.webp";

export default function ScriptEditorSection() {
  const images = useMemo(
    () => [login, dashboard, notification, createstrategy, mystrategy, backtest],
    []
  );

  // Overlapping pairs for desktop: [0,1], [1,2], ..., [n-1,0]
  const pairSlides = useMemo(() => {
    const n = images.length;
    if (n === 0) return [];
    if (n === 1) return [[images[0], images[0]]];
    return Array.from({ length: n }, (_, i) => [images[i], images[(i + 1) % n]]);
  }, [images]);

  // Singles for mobile: [0], [1], ..., [n-1]
  const singleSlides = images; // same order

  const [index, setIndex] = useState(0);
  const intervalMs = 4000;

  const goPrev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const goNext = () => setIndex((i) => (i + 1) % images.length);

  // autoplay with pause on hover & when tab hidden
  const hoverRef = useRef(false);
  useEffect(() => {
    if (images.length < 2) return;
    const tick = () => {
      if (hoverRef.current) return;
      if (document.hidden) return;
      setIndex((i) => (i + 1) % images.length);
    };
    const id = setInterval(tick, intervalMs);
    return () => clearInterval(id);
  }, [images.length]);

  // swipe support (mobile)
  const startX = useRef(null);
  const onTouchStart = (e) => (startX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX.current == null) return;
    const diff = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(diff) > 50) diff > 0 ? goPrev() : goNext();
    startX.current = null;
  };

  return (
    <section className="w-full bg-black text-white py-12 px-6 sm:px-12">
      <div
        className="relative"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* ===== Mobile track: SINGLE image per slide ===== */}
        <div className="overflow-hidden rounded-2xl md:hidden">
          <div
            className="whitespace-nowrap transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {singleSlides.map((src, sIdx) => (
              <div key={sIdx} className="inline-block align-top w-full" style={{ whiteSpace: "normal" }}>
                <div className="rounded-2xl overflow-hidden shadow-md bg-[#141414]">
                  <img
                    src={src}
                    alt={`Slide ${sIdx + 1}`}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Desktop track: OVERLAPPING PAIRS per slide ===== */}
        <div className="overflow-hidden rounded-2xl hidden md:block">
          <div
            className="whitespace-nowrap transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {pairSlides.map((pair, sIdx) => (
              <div key={sIdx} className="inline-block align-top w-full" style={{ whiteSpace: "normal" }}>
                <div className="grid grid-cols-2 gap-6">
                  {pair.map((src, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden shadow-md bg-[#141414]">
                      <img
                        src={src}
                        alt={`Slide ${sIdx + 1} - Image ${i + 1}`}
                        className="w-full h-auto object-contain rounded-xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur px-3 py-2 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              aria-label="Next"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur px-3 py-2 rounded-full"
            >
              ›
            </button>
          </>
        )}

        {/* dots (use total images so both modes stay in sync) */}
        {images.length > 1 && (
          <div className="mt-6 flex items-center justify-center gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
