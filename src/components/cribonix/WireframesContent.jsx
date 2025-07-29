// src/components/projectdetails/projectdummy/WireframesContent.jsx
import React from "react";

export default function WireframesContent() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-10">Wireframes</h2>

      <div className="space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl">
        <p>
          Once we had a structure in place, we moved onto wireframes where we
          explored how each screen would be laid out. This allowed us to
          quickly sketch out different user flows without having to spend too
          much time thinking about visual design of those screens.
        </p>
        <p>
          The main focus during the initial stages was on onboarding and the
          Ceremony builder, the main tool in the Provenance wedding app, made
          to help you write your ceremony script. This laid the foundation for
          further expansion and paved the way for introduction of additional
          tools.
        </p>
      </div>
    </section>
  );
}
