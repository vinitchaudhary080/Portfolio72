// src/components/WorksSection.jsx
import React from "react";
import WorkCard from "./WorkCard";
import img1 from "../assets/ChartingHQ/project1.jpg";
import img2 from "../assets/Alpha/MacBook_Mockup_3.jpg";
import img3 from "../assets/RaDashboard/radashnew2.png";

export default function WorksSection() {
  const posts = [
    {
      slug: "ChartingHQ Dashboard",
      path: "/chartinghq/ChartingHQ Dashboard",
      frontImage: img1,
      title: "ChartingHQ Dashboard",
      author: "ChartingHQ",
      date: "April 10, 2025",
      readTime: "2 min",
      content: "In a world where digital experiences shape our daily interactions…",
    },
    {
      slug: "Alpha Exchange",
      path: "/alpha/Alpha Exchange",
      frontImage: img2,
      title: "Alpha Exchange Dashboard & Website",
      author: "Sarah Lin",
      date: "Mar 2, 2025",
      readTime: "6 min",
      content: "High-end branding is not just about aesthetics; it’s about storytelling…",
    },
    {
      slug: "RA-Dashboard",
      path: "/radashboard/Radashboard", // or change to a 3rd route if you have one
      frontImage: img3,
      title: "Redesign RA-Dashboard",
      author: "Alex Cho",
      date: "Jan 15, 2025",
      readTime: "5 min",
      content: "Merging design with emerging tech like AI and AR has transformed…",
    },
  ];

  return (
    <section className="w-full bg-black px-6 sm:px-20 py-20">
      {/* Heading + divider */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Work Samples
        </h2>
        <div className="flex-1 h-px bg-gray-700" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, idx) => (
          <WorkCard key={idx} {...post} />
        ))}
      </div>
    </section>
  );
}
