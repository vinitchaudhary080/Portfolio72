// src/components/ScrollHero.jsx
import React, { useRef, useEffect, useState } from "react";

export default function ScrollHero({ src, children }) {
  const heroRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowH = window.innerHeight;
      // progress 0 → 1 over one viewport
      const p = Math.min(scrollY / windowH, 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // grow from 50% → 100%
  const sizePct = 50 + progress * 50;
  // only sticky while growing
  const isSticky = progress < 1;

  return (
    <section
      ref={heroRef}
      className="bg-black"
      style={{
        position: isSticky ? "sticky"  : "relative",
        top:      isSticky ? 0         : undefined,
        height:   "100vh",            // <-- always full‐height
        overflow: isSticky ? "hidden" : "visible",
        zIndex:   isSticky ? 0       : undefined,
      }}
    >
      <div
        style={{
          width:           `${sizePct}%`,
          height:          `${sizePct}%`,
          backgroundImage: `url(${src})`,
          backgroundSize:  "cover",
          backgroundPosition: "center",
          margin:          "auto",
          transition:      "width 1.0s ease-out, height 1.0s ease-out",
        }}
      >
        {children && (
          <div
            style={{
              position:    "absolute",
              top:         "50%",
              left:        "50%",
              transform:   "translate(-50%, -50%)",
              color:       "white",
              textAlign:   "center",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
