// src/components/ChartingHQ/ImageSection.jsx
import React from "react";
import projectVideo from "../../assets/Cribonix/cribonixVideo.mp4";

export default function ImageSection() {
  return (
    <section className="w-full bg-black px-4 sm:px-20 py-10">
      <div className="rounded-3xl overflow-hidden">
        <video
          src={projectVideo}
          className="w-full h-auto object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}
