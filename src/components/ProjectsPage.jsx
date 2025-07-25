// src/components/ProjectsPage.jsx
import React from "react";
import ProjectCard from "./ProjectCard";

// Import your images:
import strapsHero from "../assets/List1/full.jpg";
import thumb1 from "../assets/List1/thumb1.jpg";
import thumb2 from "../assets/List1/thumb2.jpg";
import thumb3 from "../assets/List1/thumb3.jpg";
import thumb4 from "../assets/List1/thumb4.jpg";

export default function ProjectsPage() {
  // Define your project data however you like
  const projects = [
    {
      id: "straps",
      year: 2025,
      title: "Straps combines high-end visuals with exceptional moments",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
      heroImage: strapsHero,
      thumbnails: [thumb1, thumb2, thumb3, thumb4],
    },
    // add more projects here...
  ];

  return (
    <section className="bg-black text-white min-h-screen py-16">
      <div className="max-w-screen-xl mx-auto space-y-20">
        {projects.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </section>
  );
}
