// src/components/projectdetails/projectdummy/ProcessStep1.jsx
import React from "react";

export default function ProcessStep1() {
  return (
    <section className="bg-black text-white px-6 sm:px-20 py-20 ">
      {/* Heading Line like "Work Samples" style */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          THE PROCESS 
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold mb-12">
        Rebuilding Cribonix’s Digital Front Door
      </h1>

      {/* Discovery Block */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Discovery</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Sabse pehle stakeholder ke saath deep alignment kiya — Cribonix ke brand positioning, core services, target client personas (startups, small businesses, service-based brands) aur unki current pain points samjhi. Existing website aur competitor landscape ka audit kiya to identify gaps in clarity, trust signal, aur lead flow. Primary goals define kiye: qualified leads badaana, value proposition ko crisp communicate karna, aur brand credibility establish karna.
        </p>
      </div>

      {/* Planning Block */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Structuring the Website & Conversion Funnel
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Insights ke basis par information architecture banayi gayi — user journeys map kiye gaye for potential clients vs returning visitors. Homepage funnel design kiya: clear USP hero, service breakdown, trust-building elements (testimonials / impact), aur multiple entry points to contact. Wireframes aur sitemap create kiye gaye to define hierarchy, navigation flow, aur conversion paths; form placement aur microcopy ko optimize kiya gaya taaki friction kam ho aur engagement badhe. Success metrics (lead rate, bounce reduction, session depth) pe early alignment hua.
        </p>
      </div>
    </section>
  );
}
