// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "80%",
      label: "Reduction in backtest iteration time",
    },
    {
      value: "12x",
      label: "Faster backtest processing (from hours to minutes)",
    },
    {
      value: "60%",
      label: "Reduction in onboarding time",
    },
    {
      value: "92%",
      label: "User satisfaction rating",
    },
    {
      value: "25%",
      label: "Increase in trial-to-paid conversion",
    },
    {
      value: "200+",
      label: "Strategies deployed in first month",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        Key outcomes after launch:
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
