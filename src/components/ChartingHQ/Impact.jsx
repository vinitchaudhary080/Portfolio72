// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "70%",
      label: "Reduction in context switches per trading session",
    },
    {
      value: "67%",
      label: "Faster view setup time (from 12 to 4 minutes)",
    },
    {
      value: "80%",
      label: "Beta users rating dashboard as “very intuitive”",
    },
    {
      value: "90%",
      label: "Adoption rate within two weeks of launch",
    },
    {
      value: "15 min",
      label: "Average time saved per session",
    },
    {
      value: "100+",
      label: "Active traders onboarded in the first month",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        Early launch metrics and user feedback highlights:
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
