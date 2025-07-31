// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "40%",
      label: "Increase in monthly user adoption within first 30 days",
    },
    {
      value: "30%",
      label: "Increase in average session duration",
    },
    {
      value: "20%",
      label: "Reduction in order execution time",
    },
    {
      value: "25%",
      label: "Increase in retention rate over 3 months",
    },
    {
      value: "50%",
      label: "Reduction in support tickets on navigation & data delays",
    },
    {
      value: "4.7 / 5",
      label: "Average satisfaction score from user surveys",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        Key post-launch metrics demonstrating enhanced engagement, efficiency, and user satisfaction:
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
    </section>
  );
}
