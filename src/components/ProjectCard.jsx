// src/components/ProjectCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  year,
  title,
  description,
  heroImage,
  thumbnails = []
}) {
  return (
    <div className="rounded-3xl overflow-hidden bg-gray-800 shadow-lg">
      <div className="flex flex-col lg:flex-row">
        {/* Left: Hero image */}
        <div className="w-full lg:w-2/3 h-64 lg:h-auto">
          <img
            src={heroImage}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Info panel */}
        <div className="w-full lg:w-1/3 bg-gray-600 p-8 flex flex-col justify-between space-y-6">
          <div>
            <p className="text-xs text-gray-300">©{year}</p>
            <h3 className="text-2xl font-semibold mt-2 leading-snug">{title}</h3>
            <p className="mt-4 text-gray-200 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* View Project button */}
          <Link
            to={`/projects/${id}`}
            className="inline-block bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition"
          >
            View Project
          </Link>

          {/* Thumbnail row */}
          <div className="flex items-center space-x-4 overflow-x-auto pt-4">
            {thumbnails.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-16 h-16 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
