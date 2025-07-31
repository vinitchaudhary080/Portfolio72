// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "78%",
      label: "Average analyst signal accuracy (hit rate) against targets",
    },
    {
      value: "3x",
      label: "Growth in paid subscribers in first 6 months",
    },
    {
      value: "45%",
      label: "Reduction in average trade decision time for users",
    },
    {
      value: "60%",
      label: "Free-to-paid conversion rate on analyst subscriptions",
    },
    {
      value: "85%",
      label: "Monthly active user retention rate",
    },
    {
      value: "9.1 / 10",
      label: "Average user satisfaction score from feedback",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        Initial launch and subsequent iterations created measurable outcomes in user confidence, subscription growth,
        and engagement—turning uncertainty into informed action. (Replace placeholders below with real metrics.)
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
