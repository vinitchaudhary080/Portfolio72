// src/components/WorkCard.jsx
import React from "react";
import "./WorkCard.css";
import { Link } from "react-router-dom";

export default function WorkCard({
  path,
  frontImage,
  title,
  author,
  date,
  readTime,
  content,
}) {
  return (
    <div className="flip-card h-[520px]">
      <div className="flip-card-inner">

        {/* Front */}
        <div className="flip-card-front bg-[#141414] rounded-xl overflow-hidden shadow-md">
          <img
            src={frontImage}
            alt={title}
            className="w-full h-[450px] object-cover"
          />
          <div className="p-4 text-white text-base font-medium leading-snug">
            {title}
          </div>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-black rounded-xl p-6 flex flex-col justify-between text-white shadow-md">
          {/* Author/Date */}
          <div className="flex items-center gap-3 mb-4">
            <div>
              <h4 className="text-sm font-semibold">{author}</h4>
              <p className="text-xs text-gray-400">
                {date} • {readTime}
              </p>
            </div>
          </div>

          {/* Excerpt */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-400 leading-snug">{content}</p>
          </div>

          {/* View Project */}
          <div className="mt-4 underline text-white text-sm font-medium">
            <Link to={path}>View Project</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
