// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "40%",
      label: "Increase in mobile user adoption within the first 30 days",
    },
    {
      value: "30%",
      label: "Increase in average session length per user",
    },
    {
      value: "20%",
      label: "Faster trade execution time via the app",
    },
    {
      value: "25%",
      label: "Improvement in 7-day retention rate",
    },
    {
      value: "50%",
      label: "Drop in support tickets related to navigation & latency",
    },
    {
      value: "4.8 / 5",
      label: "Average user satisfaction rating in app store reviews",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">App Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        Key results from our post-launch analytics, showing how the mobile app boosted engagement,
        performance, and overall user satisfaction:
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
