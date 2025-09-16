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
import founder from "@/assets/persona/bepro.webp";

export default function VennUxStrategy({
  persona = {
    name: "Rohit Sharma",
    role: "Amateur Cricketer • Team Captain",
    avatar: founder,
    bio:
      "Plays weekend matches with local clubs. Wants an easy way to schedule games, score live, and keep a proper match history.",
    traits: ["Community-driven", "Mobile-first", "Wants live scoring", "Competitive"],
  },
}) {
  return (
    <section id="ux-venn" className="bg-black text-white py-20 sm:py-28">
      <div className="mx-auto w-full px-6 sm:px-20">
        {/* Heading row (same pattern as your other section) */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
            Align Community, Users & Tech
          </h2>
          <div className="flex-1 h-px bg-gray-700" />
        </div>

        {/* Grid: big context + 4 small cards (same layout/visual system) */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Big Context Card (2 columns on large screens) */}
          <Card className="lg:col-span-2">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Briefcase className="h-4 w-4" />
              <span className="font-semibold">Project Context</span>
            </div>

            {/* three columns inside (like your other big card) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Business Goals (from your original Venn) */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Business Goals
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Build a platform for local/street cricketers to feel like pros.</li>
                  <li>• Increase adoption via fun + professional UX.</li>
                </ul>
              </div>

              {/* User Needs & Pain Points */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  User Needs &amp; Pain Points
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Scores remembered verbally / on paper.</li>
                  <li>• Organizing matches & opponents is chaotic.</li>
                  <li>• No digital history or performance ranking.</li>
                </ul>
              </div>

              {/* Technical Capabilities */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white/70">
                  Technical Capabilities
                </h3>
                <ul className="mt-2 space-y-1 text-sm text-white/70 leading-relaxed">
                  <li>• Live digital scoreboard engine.</li>
                  <li>• Match scheduling & invitations.</li>
                  <li>• Player stats & ranking system.</li>
                  <li>• Push notifications for updates.</li>
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

          {/* Business Goals — compact card (kept for parity with your 5-card ask) */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <CheckCircle2 className="h-4 w-4" />
              <span className="font-semibold">Business Goals</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Community growth via delightful, simple UX.</li>
              <li>• Retention through match history & rankings.</li>
              <li>• Sponsorship/league opportunities at scale.</li>
            </ul>
          </Card>

          {/* User Needs & Pain Points — compact card */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-semibold">User Needs &amp; Pain Points</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Easy scheduling & team management.</li>
              <li>• Reliable live scoring (no spreadsheets).</li>
              <li>• Stats that matter: batting/bowling/fielding.</li>
            </ul>
          </Card>

          {/* Technical Capabilities — compact card */}
          <Card>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Cpu className="h-4 w-4" />
              <span className="font-semibold">Technical Capabilities</span>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/70">
              <li>• Cloud storage for match history.</li>
              <li>• Real-time updates & push notifications.</li>
              <li>• Tournament/series modules, toss simulation.</li>
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
