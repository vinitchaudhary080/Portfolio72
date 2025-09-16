// src/components/ux/VennUxStrategy.jsx
import React from "react";
import { User, Briefcase, AlertTriangle, Cpu, CheckCircle2 } from "lucide-react";

// Persona image (path update kar sakte ho)
import founder from "@/assets/persona/chartinghq.webp"; // <-- replace if needed

export default function VennUxStrategy({
  persona = {
    name: "Arjun Patel",
    role: "Part-time Stock Trader",
    avatar: founder,
    bio: "Charts dekhta hai, simple setup chahie, clear PnL aur quick execution.",
    traits: ["Time-constrained", "No-code strategy", "One dashboard", "Real-time alerts"],
  },
}) {
  return (
    <section id="ux-venn" className="bg-black text-white py-20 sm:py-28">
      <div className="mx-auto w-full px-6 sm:px-20">
        {/* Heading row */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
            Align Business, Users & Tech
          </h2>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* 5-card grid: 1 big + 4 small */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* 1) Big Context (2 columns on lg) */}
          <Card className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Briefcase className="h-4 w-4" />
              <span className="font-semibold">Project Context</span>
            </div>

            {/* inner 3-column layout (FeatureListing style) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Business Goals */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Business Goals
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Charts, market overview, strategies & deployment — one app.</li>
                  <li>• Activation/retention ↑ by saving trader time & context-switching.</li>
                  <li>• Monetize via pro features, templates & subscriptions.</li>
                </ul>
              </div>

              {/* User Needs & Pain Points */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  User Needs &amp; Pain Points
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• TradingView/news/broker apps ke beech hopping.</li>
                  <li>• No-code strategy builder aur backtest ki kami.</li>
                  <li>• Entry/exit miss due to manual tracking.</li>
                </ul>
              </div>

              {/* Technical Capabilities */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Technical Capabilities
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Advanced charting (TV libs/ChartIQ) with drawings/indicators.</li>
                  <li>• Live market data feeds (e.g., NSE/BSE/Finnhub).</li>
                  <li>• Backtesting on historical data + metrics.</li>
                  <li>• Broker APIs for live execution & baskets.</li>
                  <li>• Real-time alerts & PnL analytics.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* 2) Persona Card */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <User className="h-4 w-4" />
              <span className="font-semibold">User Persona</span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="relative">
                <img
                  src={persona.avatar}
                  alt={persona.name}
                  className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/10"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div>
                <h3 className="text-base font-medium">{persona.name}</h3>
                <p className="text-xs text-white/60">{persona.role}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70">{persona.bio}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {persona.traits?.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md text-[10px] border border-emerald-400/25 text-emerald-200/90 bg-emerald-500/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>

          {/* 3) Business Goals — compact */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-semibold">Business Goals</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Time-to-trade ↓, conversion & retention ↑.</li>
              <li>• Pro tooling & templates se upsell.</li>
              <li>• Trust via transparent fees & clear states.</li>
            </ul>
          </Card>

          {/* 4) User Needs & Pain Points — compact */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-semibold">User Needs &amp; Pain Points</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Fewer clicks to place/exit trades.</li>
              <li>• Clear PnL snapshot & alerts.</li>
              <li>• Unified dashboard; no app-hopping.</li>
            </ul>
          </Card>

          {/* 5) Technical Capabilities — compact */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Cpu className="h-4 w-4" />
              <span className="font-semibold">Technical Capabilities</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• WebSockets for live prices/orders.</li>
              <li>• Broker auth & risk controls.</li>
              <li>• Scalable infra for peak hours.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Dark Card primitive (shared style) ---------- */
function Card({ className = "", children }) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]",
        "p-6 sm:p-7",
        "transition-transform duration-300 hover:-translate-y-0.5",
        className,
      ].join(" ")}
    >
      {/* subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      {/* soft fade */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
