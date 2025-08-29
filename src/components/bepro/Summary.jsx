// components/projectdummy/Summary.jsx
import React from "react";

export default function Summary() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-12">Problem / Challenge</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        {/* Left Column */}
        <div className="space-y-16 sm:space-y-32">
          {/* Mission */}
          <div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Cricket is played everywhere—from stadiums to streets—but players face common issues:</h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">No digital scorekeeping:</span>
                  Scores and match details often stay in memory or paper, visible only to players.
                </li>
                <li>
                  <span className="text-white font-semibold">Lack of live updates:</span>
                  Friends or family not present at the ground cannot follow the game.
                </li>
                <li>
                  <span className="text-white font-semibold">Difficulty organizing matches:</span>
                  Finding opponent teams, managing players, and scheduling is often chaotic.
                </li>
                <li>
                  <span className="text-white font-semibold">No performance history:</span>
                  Players cannot track their past records, stats, or rankings over time.
                </li>
                <li>
                  <span className="text-white font-semibold">Competitors (CricHeroes, Cricbuzz, Crex):</span>
                  exist, but their UI is complex and less engaging for casual/local players.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                BePro solves these by providing a simple, engaging, and professional cricketing experience for everyone.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research:</span>
                Interviewed local/stadium players to identify problems in scoring and organizing.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structured flows for match creation, scoring, scheduling, and performance tracking.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Designed match formats, team creation, toss, and live scoring flows.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Attractive, easy-to-use design to differentiate from competitors.
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
                Validated flows with real cricket enthusiasts for simplicity and clarity.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Score visibility:</span>
                Friends & family could follow matches live from home, like watching a pro game.
              </li>
              <li>
                <span className="text-white font-semibold">Time saved:</span>
                Match creation & scheduling reduced from 10–15 mins → under 2 mins.
              </li>
              <li>
                <span className="text-white font-semibold">Performance awareness:</span>
                Players now track records & rankings, motivating them to improve.
              </li>
              <li>
                <span className="text-white font-semibold">User love:</span>
                Testers called it “CricHeroes made simple and fun”.
              </li>
               <li>
                <span className="text-white font-semibold">Competitive advantage:</span>
                Cleaner UI, beginner-friendly UX, and faster onboarding than competitors.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Process & Approach */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Process & Approach</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-4">
              <li>
                <span className="text-white font-semibold">Research & Discovery:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Observed 6 local teams & spoke with 12 cricket enthusiasts.</li>
                  <li>Found frustrations: scoring confusion, lack of team organization, and no digital history.</li>
                  
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Core modules: Create Team, Schedule Match, Toss, Live Scoreboard, Tournament Series, Performance Tracking.</li>
                  <li>Designed to mirror professional cricket apps but with a simpler UX.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Low-fidelity flows for team creation, toss, and live scoring.</li>
                  <li>Focused on reducing steps → match setup in less than 2 minutes.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Created high-fidelity prototypes in Figma.</li>
                  <li>Used cricket-inspired theme (greens, whites, sporty visuals).</li>
                  <li>Emphasized fun + professional balance (casual players + serious players both feel comfortable).</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Tested prototypes with 8 players across different age groups.</li>
                  <li>Simplified navigation tabs → Home | Matches | Teams | Stats | Profile.</li>
                  <li>Added player ranking system after repeated user requests.</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Digital Scoreboard:</span>
                Keep live match updates accessible to both players and remote viewers.
              </li>
              <li>
                <span className="text-white font-semibold">Team Creation & Match Formats:</span>
                Quick match, challenge match, triangular series, or tournaments.
              </li>
              <li>
                <span className="text-white font-semibold">Scheduling Feature:</span>
                Organize games in advance, invite opponents, and reduce last-minute chaos.
              </li>
              <li>
                <span className="text-white font-semibold">Toss Simulation:</span>
                Professional match-like experience before every game.
              </li>
              <li>
                <span className="text-white font-semibold">Performance Tracking & Rankings:</span>
               Stats like runs, wickets, win/loss history, and player ranking.
              </li>
               <li>
                <span className="text-white font-semibold">Multiple Teams Management:</span>
               Users can create and manage multiple teams simultaneously.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only (shown after Solution) */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Score visibility:</span>
                Friends & family could follow matches live from home, like watching a pro game.
              </li>
              <li>
                <span className="text-white font-semibold">Time saved:</span>
                Match creation & scheduling reduced from 10–15 mins → under 2 mins.
              </li>
              <li>
                <span className="text-white font-semibold">Performance awareness:</span>
                Players now track records & rankings, motivating them to improve.
              </li>
              <li>
                <span className="text-white font-semibold">User love:</span>
                Testers called it “CricHeroes made simple and fun”.
              </li>
               <li>
                <span className="text-white font-semibold">Competitive advantage:</span>
                Cleaner UI, beginner-friendly UX, and faster onboarding than competitors.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
