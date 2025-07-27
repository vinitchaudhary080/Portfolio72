// src/components/projectdetails/projectdummy/ProcessStep1.jsx
import React from "react";

export default function ProcessStep1() {
  return (
    <section className="bg-black text-white px-6 sm:px-20 py-20 ">
      {/* Heading Line like "Work Samples" style */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          THE PROCESS – STEP 1
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold mb-12">
        Designing the MVP
      </h1>

      {/* Discovery Block */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Discovery</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          The first step was to get acquainted with the team’s vision and the plans
          they had for the product. Weddings are very complex by nature and for that
          reason getting alignment before starting any design work was crucial. To tackle
          this complexity, we decided to focus only on the ceremony and not try to tackle
          all aspects of a wedding.
        </p>
      </div>

      {/* Planning Block */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Planning the App Structure</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          After we identified the key areas to focus on, I moved onto devising the app structure
          and what the user flows would look like for different user roles. Those different roles
          needed to have different levels of access to the tools and information regarding the wedding,
          meaning they would have a slightly different user flow so I ended up creating a lot of flow charts.
        </p>
      </div>
    </section>
  );
}
