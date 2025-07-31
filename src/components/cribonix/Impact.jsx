// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "80%",
      label: "Increase in qualified inquiries from the website",
    },
    {
      value: "3x",
      label: "Improvement in lead conversion rate",
    },
    {
      value: "45%",
      label: "Reduction in bounce rate on service pages",
    },
    {
      value: "Top 5",
      label: "Organic keyword rankings for primary service terms within 4 months",
    },
    {
      value: "60%",
      label: "Faster page load time after performance optimizations",
    },
    {
      value: "4.7/5",
      label: "Average brand trust rating from client feedback survey",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        The redesign and strategic restructuring delivered measurable business outcomes:
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
