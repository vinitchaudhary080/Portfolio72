// src/components/ux/VennUxStrategy.jsx
import React from "react";
import { User, Briefcase, AlertTriangle, Cpu, CheckCircle2 } from "lucide-react";
import founder from "@/assets/persona/nestohub.webp"; // <- real-estate persona image ka path yahan update kar sakte ho

export default function VennUxStrategy({
  persona = {
    name: "Amit Yadav",
    role: "Independent Broker • NCR",
    avatar: founder,
    bio: "Daily site visits, leads chahiye; fast listing, loan tie-ups aur simple CRM chahta hai.",
    traits: ["Leads-focused", "On-the-go", "Wants loan facilitation", "Easy CRM", "Trust & verification"],
  },
}) {
  return (
    <section id="ux-venn" className="bg-black text-white py-20 sm:py-28">
      <div className="mx-auto w-full px-6 sm:px-20">
        {/* Heading */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
            Align Business, Users & Tech
          </h2>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Grid: 1 big + 4 small (total 5 cards) */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* 1) Big Project Context (spans 2 cols on lg) */}
          <Card className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Briefcase className="h-4 w-4" />
              <span className="font-semibold">Project Context</span>
            </div>

            {/* Inner 3-col layout like FeatureListing */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Business Goals */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Business Goals
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Buyers–Builders–Brokers ecosystem build karna.</li>
                  <li>• Brokerage & loan facilitation se monetization.</li>
                  <li>• Verified listings & faster deal closures.</li>
                </ul>
              </div>

              {/* User Needs & Pain Points */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  User Needs &amp; Pain Points
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Buyers: plots/commercial dhoondhna mushkil; trust issues.</li>
                  <li>• Builders: digital reach & qualified leads chahiye.</li>
                  <li>• Brokers: unified CRM + loan workflow ki kamhi.</li>
                </ul>
              </div>

              {/* Technical Capabilities */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Technical Capabilities
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Multi-role auth (Buyer/Builder/Broker).</li>
                  <li>• Powerful search & advanced filters.</li>
                  <li>• Loan APIs with partner banks.</li>
                  <li>• Broker CRM (leads, pipeline, commission tracking).</li>
                  <li>• Secure docs & property verification.</li>
                </ul>
              </div>
            </div>
          </Card>

          {/* 2) Persona */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <User className="h-4 w-4" />
              <span className="font-semibold">User Persona</span>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <img
                src={persona.avatar}
                alt={persona.name}
                className="h-14 w-14 rounded-xl object-cover ring-1 ring-white/10"
                loading="lazy"
                decoding="async"
              />
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
              <li>• Deal velocity & conversion badhana.</li>
              <li>• Verified inventory se trust build karna.</li>
              <li>• Cross-sell loans & allied services.</li>
            </ul>
          </Card>

          {/* 4) User Needs & Pain Points — compact */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-semibold">User Needs &amp; Pain Points</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Clean search, map view & verified docs.</li>
              <li>• Lead routing, reminders & follow-ups.</li>
              <li>• Loan pre-approval & status visibility.</li>
            </ul>
          </Card>

          {/* 5) Technical Capabilities — compact */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Cpu className="h-4 w-4" />
              <span className="font-semibold">Technical Capabilities</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Role-based access + audit logs.</li>
              <li>• Lead CRM, tasks & commission ledger.</li>
              <li>• Bank APIs, KYC & secure document vault.</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* ---------- Shared dark Card primitive ---------- */
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
