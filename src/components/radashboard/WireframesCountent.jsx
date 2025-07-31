// src/components/projectdetails/projectdummy/WireframesContent.jsx
import React from "react";

export default function WireframesContent() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-10">
        Problem & Solution Exploration
      </h2>

      <div className="space-y-12 text-sm sm:text-base leading-relaxed max-w-4xl">
        {/* Problem Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Problem
          </h3>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
            <li>
              Traders aur analysts ke liye data aur insights multiple jagah (emails, Excel, alag-alag tools) pe bikhre hue the.
            </li>
            <li>
              Iski wajah se analysis mein bahut time lagta tha.
            </li>
            <li>
              Manual processes se errors badhte the.
            </li>
            <li>
              Decision making slow aur inconsistent hoti thi.
            </li>
          </ul>
        </div>

        {/* Solution Block */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Solution
          </h3>
          <p className="text-gray-400 mb-4">
            RA-Dashboard develop kiya—ek single-pane interface jahan sab kuch ho:
          </p>
          <ul className="list-disc pl-5 text-gray-400 space-y-2">
            <li>
              <strong>Subscription & Tips Management:</strong> Users apne paid content subscriptions aur real-time trading tips ek hi jagah dekh sakte hain.
            </li>
            <li>
              <strong>Earnings Tracker:</strong> Daily/weekly/monthly P&L charts, breakdown by strategy, alerts for profit/loss thresholds.
            </li>
            <li>
              <strong>User Management:</strong> Roles & permissions, activity logs, quick search/filter for user segments.
            </li>
            <li>
              <strong>Real-Time Analytics Widgets:</strong> Customizable charts (line, bar, pie), drill-down filters, export to CSV/PDF.
            </li>
            <li>
              <strong>Intuitive UI:</strong> Clean dashboard cards with hover-effects, sticky sidebar for quick navigation, dark/light mode toggle for comfort.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
