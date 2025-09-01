// src/components/WorkCard.jsx
import React from "react";
import "./WorkCard.css";
import { Link } from "react-router-dom";


export default function WorkCard({
  slug,
  path,
  frontImage,
  title,
  author,
  content,
  role,
  result,
  tags = []
}) {
  return (
    <Link
      to={path}
      aria-label={`${title} case study`}
      className="group block rounded-xl overflow-hidden border border-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
    >
      <article>
        {/* Image with overlay */}
        <div className="relative aspect-[16/10] bg-[#0f0f0f]">
          <img
            src={frontImage}
            alt={`${title} – ${author}`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03] motion-reduce:transition-none"
          />

          {/* Hover/Focus detail overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0">
            {role && <p className="text-xs text-gray-100 mb-1">{role}</p>}
            {result && <p className="text-sm text-white/90">{result}</p>}
          </div>
        </div>

        {/* Text block */}
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">
            {content}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="text-xs text-gray-300 border border-gray-700 px-2 py-0.5 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
