// src/components/ScrollCard.jsx
import React, { useRef, useState, useEffect } from "react";

export default function ScrollCard({ children }) {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transform 
        ${inView ? "scale-100 opacity-100" : "scale-90 opacity-0"} 
        transition-all duration-700 ease-out
      `}
    >
      {children}
    </div>
  );
}
