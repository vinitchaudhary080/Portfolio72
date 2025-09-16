// src/components/ux/UxStrategyCards.jsx
import React from "react";
import { User, Target, Briefcase, AlertTriangle, Cpu, CheckCircle2 } from "lucide-react";
import founder from "@/assets/persona/investock.webp";



export default function UxStrategyCards({
  persona = {
    name: "Aarav Mehta",
    role: "Part-time Investor",
    avatar: founder,
    bio: "Works in finance ops, invests 2–3 hours/week. Wants simple, guided & automated investing.",
    traits: ["Time-constrained", "Risk-aware", "Beginner-friendly UI", "Mobile-first"],
  },
}) {
  return (
    <section id="ux-strategy" className="bg-black text-white py-20 sm:py-28  ">
      <div className="mx-auto w-full px-6 sm:px-20 py-16">
        {/* Heading */}
         <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          Align Business, Users & Tech
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>
        

        {/* Grid (like FeatureListing): big + four small */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Big Context Card */}
          <Card className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Briefcase className="h-4 w-4" />
              <span className="font-semibold">Project Context</span>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* User Goals */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">User Goals</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Easy entry to markets (no jargon).</li>
                  <li>• Guided strategy setup & backtest.</li>
                  <li>• Fewer tools, one unified dashboard.</li>
                  <li>• Real-time alerts & clear next action.</li>
                </ul>
              </div>
              {/* Business Requirements */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">Business Requirements</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Subscriptions & advisory monetization.</li>
                  <li>• Higher activation & retention.</li>
                  <li>• Broker integrations & compliant flows.</li>
                  <li>• Scalable design system & performance.</li>
                </ul>
              </div>
              {/* Challenges */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">Key Challenges</h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Fragmented tool-hopping.</li>
                  <li>• Emotional trading & bad exits.</li>
                  <li>• Cluttered competitor dashboards.</li>
                  <li>• Trust & onboarding clarity.</li>
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
                {/* Avatar */}
                <img
                  src={persona.avatar}
                  alt={persona.name}
                  className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/10"
                  loading="lazy"
                  decoding="async"
                />
                {/* Accent dot */}
                {/* <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-black" /> */}
              </div>
              <div>
                <h3 className="text-base font-medium">{persona.name}</h3>
                <p className="text-xs text-white/60">{persona.role}</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-white/70">{persona.bio}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {persona.traits.map((t, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded-md text-[10px] border border-emerald-400/25 text-emerald-200/90 bg-emerald-500/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </Card>

          {/* Business Goals */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-semibold">Business Goals</span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• AI-powered platform for beginners to pros.</li>
              <li>• Subscription growth via portfolios/advisory.</li>
              <li>• Automated rebalancing & stop-loss systems.</li>
              <li>• Faster execution → higher trading volume.</li>
            </ul>
          </Card>

          {/* User Needs & Pain Points */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-semibold">User Needs &amp; Pain Points</span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Where to start? What to buy? When to exit?</li>
              <li>• Guidance without heavy time investment.</li>
              <li>• Automation to avoid manual daily work.</li>
              <li>• Clean UI; fewer scattered tools.</li>
            </ul>
          </Card>

          {/* Technical Capabilities */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Cpu className="h-4 w-4" />
              <span className="font-semibold">Technical Capabilities</span>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Broker APIs (Upstox, Zerodha, AngelOne).</li>
              <li>• Automated portfolio rebalancing engine.</li>
              <li>• Real-time advisory & basket execution.</li>
              <li>• Analytics dashboards & scalable infra.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small presentational Card w/ dark style ---------- */
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
