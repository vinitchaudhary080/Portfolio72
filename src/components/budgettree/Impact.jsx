// src/components/projectdetails/projectdummy/Impact.jsx
import React from "react";

export default function Impact() {
  const data = [
    {
      value: "1 min",
      label: "Average gift card creation time",
    },
    {
      value: "72%",
      label: "Send-to-purchase conversion rate",
    },
    {
      value: "89%",
      label: "Redemption rate of sent gift cards",
    },
    {
      value: "35%",
      label: "Users returning within 30 days to send another gift",
    },
    {
      value: "1.7x",
      label: "Viral share multiplier per gift (forwarded organically)",
    },
    {
      value: "₹1,200",
      label: "Average gift value",
    },
    {
      value: "45%",
      label: "Engagement uplift during festival campaigns",
    },
    {
      value: "68",
      label: "Net Promoter Score (NPS)",
    },
  ];

  return (
    <section className="bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-6">Impact</h2>
      <p className="text-gray-400 text-base sm:text-lg mb-16 max-w-4xl">
        BudgetTree ke initial launches aur occasion-driven campaigns se yeh measurable
        results mile—user friction kam hua, repeat usage bada, aur gifting experience
        zyada personalized aur shareable ban gaya. (Numbers ko apne real analytics se
        replace karo.) 
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
