// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "42%",
      label: "Increase in broker lead-to-visit conversion rate",
    },
    {
      value: "5x faster",
      label: "Time taken by builders to publish inventory (before vs after)",
    },
    {
      value: "70%",
      label: "Reduction in manual coordination messages between brokers and builders",
    },
    {
      value: "3x",
      label: "Increase in client dashboard engagement (session depth / repeat visits)",
    },
    {
      value: "99.8%",
      label: "Real-time inventory sync accuracy, cutting availability mismatches",
    },
    {
      value: "68+",
      label: "Satisfaction score / NPS from brokers & builders (indicative)",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Business & UX Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        Nestohub ne fragmented real estate workflows ko streamline karke measurable results diye—
        brokers, builders, aur clients ke beech coordination, engagement, aur trust significantly improve hua.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
        {data.map((item, index) => (
          <div key={index}>
            <h3 className="text-3xl sm:text-4xl font-semibold mb-2">
              {item.value}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {item.label}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 text-sm text-gray-500">
        *Values are examples—replace with actual metrics from analytics, user feedback, and internal tracking to reflect real impact.
      </p>
    </section>
  );
}
