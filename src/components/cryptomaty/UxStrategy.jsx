// src/components/ux/VennUxStrategy.jsx
import React from "react";
import {
  User,
  Briefcase,
  AlertTriangle,
  Cpu,
  CheckCircle2,
} from "lucide-react";

// OPTIONAL: replace with your real image, or pass via props
import founder from "@/assets/persona/cryptomaty.webp";

export default function VennUxStrategy({
  persona = {
    name: "Aarav Patel",
    role: "Crypto Trader • Learner & Optimizer",
    avatar: founder,
    bio:
      "Explores ready-made strategies, backtests before risking capital, and wants clear PnL insights to learn what works.",
    traits: ["Beginner-friendly", "Data-driven", "Risk-aware", "Mobile-first"],
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

        {/* Grid: big context + 4 small cards */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Big Context Card (2 columns on large screens) */}
          <Card className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Briefcase className="h-4 w-4" />
              <span className="font-semibold">Project Context</span>
            </div>

            {/* three columns inside */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Business Goals */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Business Goals
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Offer a <strong>free</strong> crypto strategy platform to grow adoption.</li>
                  <li>• Reduce user losses via <strong>learn → backtest → deploy</strong> flow.</li>
                  <li>• Build trust with expert-curated templates & clear reporting.</li>
                  <li>• Differentiate from fee-heavy tools (Tradetron, SpeedBot, etc.).</li>
                </ul>
              </div>

              {/* User Needs & Pain Points */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  User Needs &amp; Pain Points
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Beginners need guidance without risking capital.</li>
                  <li>• Pros want faster iteration with pre-tested templates.</li>
                  <li>• Fragmented tools & high fees slow learning.</li>
                  <li>• Lack of transparent PnL & “why it lost” insights.</li>
                </ul>
              </div>

              {/* Technical Capabilities */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Technical Capabilities
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Delta Exchange API for live deployment.</li>
                  <li>• Backtesting engine with historical market data.</li>
                  <li>• RA-curated strategy template library.</li>
                  <li>• Visual analytics: charts, graphs, PnL breakdown.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Persona Card */}
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

          {/* Business Goals — compact card */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-semibold">Business Goals</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Drive adoption with a <strong>free</strong>, education-first platform.</li>
              <li>• Improve retention via clear PnL & report insights.</li>
              <li>• Stand out vs fee-heavy, complex competitors.</li>
            </ul>
          </Card>

          {/* User Needs & Pain Points — compact card */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-semibold">User Needs &amp; Pain Points</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Simple onboarding & template selection.</li>
              <li>• Backtest before deploying live funds.</li>
              <li>• Understand losses with reasoned analytics.</li>
            </ul>
          </Card>

          {/* Technical Capabilities — compact card */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Cpu className="h-4 w-4" />
              <span className="font-semibold">Technical Capabilities</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Delta Exchange integration for execution.</li>
              <li>• Historical backtesting & strategy KPIs.</li>
              <li>• Visual dashboards: ROI, PnL, drawdowns.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Same dark Card primitive used in UxStrategyCards ---------- */
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
      {/* subtle grid like your pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(255,255,255,0.2) 1px,transparent 1px),linear-gradient(rgba(255,255,255,0.2) 1px,transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      {/* soft top-to-bottom fade for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20" />
      {/* content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
