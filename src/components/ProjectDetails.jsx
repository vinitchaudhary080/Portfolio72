// src/pages/ProjectDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function ProjectDetails() {
  const { projectId } = useParams();

  const projectData = {
    straps: {
      title: "Straps combines high-end visuals with exceptional moments",
      year: "2025",
      company: "STRAPS",
    },
    // yaha aur projects add karte jao
    boulevard: {
      title: "Boulevard builds timeless brand identities",
      year: "2024",
      company: "BOULEVARD",
    },
  };

  const project = projectData[projectId];

  if (!project) return <div className="text-white p-10">Project Not Found</div>;

  return (
    <div className="min-h-screen bg-black text-white  px-6 py-10">
      <div className="flex justify-between items-center text-xs mb-6">
        <span>{project.company}</span>
        <span>{project.year}</span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-semibold max-w-5xl leading-tight">
        {project.title}
      </h1>

      {/* Add your image or content below */}
      <div className="mt-12 w-full rounded-2xl overflow-hidden">
        <img
          src={`/assets/${projectId}.jpg`}
          alt={project.company}
          className="w-full object-cover"
        />
      </div>
    </div>
  );
}
