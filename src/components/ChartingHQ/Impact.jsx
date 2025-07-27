// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "1554%",
      label: "Increase in monthly organic search traffic in 8 months",
    },
    {
      value: "10x",
      label: "Increase in user adoption of one of their tools",
    },
    {
      value: "0 to 100.000+",
      label: "Couples using their wedding app",
    },
    {
      value: "63.9%",
      label: "Increase in purchase conversion rate",
    },
    {
      value: "66%",
      label: "Increase in sign up conversion rate",
    },
    {
      value: "70+",
      label: "Net Promoter Score (NPS)",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        Both the initial launch and further iterations produced great results:
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
