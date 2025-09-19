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
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Crypto trading is exciting but risky users face common issues:
              </h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Lack of tested strategies:</span>
                  Beginners don’t know how to start, which strategy to trust, or when to enter/exit.
                </li>
                <li>
                  <span className="text-white font-semibold">Complex, costly tools:</span>
                  Platforms like Tradetron, Myalgomate, CoinSwitch Pro, and SpeedBot can feel complex and fee-heavy.
                </li>
                <li>
                  <span className="text-white font-semibold">Fragmented workflow:</span>
                  Advisory, backtesting, execution, and reporting are scattered across multiple apps.
                </li>
                <li>
                  <span className="text-white font-semibold">No post-trade clarity:</span>
                  Traders rarely get transparent, visual reports on why a strategy won or lost.
                </li>
                <li>
                  <span className="text-white font-semibold">Trust & learning barrier:</span>
                  Lack of a free, education-first platform increases fear of loss and slows adoption.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                <span className="text-white font-semibold">Cryptomaty</span> solves these by offering expert-curated strategy templates,
                free backtesting, one-click deployment via Delta Exchange, and visual analytics to help users learn and improve.
              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research:</span>
                Interviewed beginners and experienced crypto traders; benchmarked Tradetron, Myalgomate, CoinSwitch Pro, SpeedBot.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structured flows for Strategy Templates, Backtesting, Deployment, and Reporting/Analytics.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Designed beginner-friendly onboarding, strategy selection, and one-click deploy via Delta Exchange.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Built a clean, data-first crypto UI with high legibility and clear color semantics (PnL, risk).
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
                Validated backtesting comprehension and report readability with representative users.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Education-first adoption:</span>
                Beginners could learn safely with free backtests before risking real capital.
              </li>
              <li>
                <span className="text-white font-semibold">Cost advantage:</span>
                Zero platform fees lowered entry barriers compared to paid competitors.
              </li>
              <li>
                <span className="text-white font-semibold">Time saved for pros:</span>
                Templates + concise reports accelerated strategy iteration and optimization.
              </li>
              <li>
                <span className="text-white font-semibold">Transparency:</span>
                Visual PnL and reason-based insights clarified why strategies won or lost.
              </li>
              <li>
                <span className="text-white font-semibold">Trust & stickiness:</span>
                Clear UX + expert-curated templates improved confidence and retention.
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
                  <li>Spoke with beginners and experienced traders to map learning and execution gaps.</li>
                  <li>Identified top blockers: cost, complexity, fragmented tools, and lack of post-trade insights.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Core modules: Strategy Templates, Backtesting, Deployment, Reporting & Visual Analytics.</li>
                  <li>Clear, linear flow: Choose Template → Backtest → Deploy (Delta) → Review Reports.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Low-fidelity user journeys for onboarding, template library, and backtest setup.</li>
                  <li>Focused on reducing cognitive load with plain-language labels and defaults.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>High-fidelity Figma prototypes with data-dense yet readable layouts.</li>
                  <li>Consistent visual grammar for signals: green (profit), red (loss), amber (risk/warning).</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Simplified report screens into charts + PnL breakdown + “what went wrong” insights.</li>
                  <li>Refined template cards with key stats to speed selection and comparison.</li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Expert Strategy Templates:</span>
                Curated by research analysts; ready to try without coding.
              </li>
              <li>
                <span className="text-white font-semibold">Free Backtesting:</span>
                Run historical tests to understand potential PnL before deploying.
              </li>
              <li>
                <span className="text-white font-semibold">One-Click Deployment (Delta Exchange):</span>
                Seamless live execution once a strategy passes your checks.
              </li>
              <li>
                <span className="text-white font-semibold">Reporting & Analytics:</span>
                Visual dashboards (charts, graphs, ROI, PnL breakdowns) plus insights on loss reasons.
              </li>
              <li>
                <span className="text-white font-semibold">Learning-first & Free:</span>
                No platform fees—lowering barriers so users can test, learn, and grow.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Education-first adoption:</span>
                Beginners learned with backtests before risking capital.
              </li>
              <li>
                <span className="text-white font-semibold">Cost advantage:</span>
                Zero fees vs paid competitors improved trial and adoption.
              </li>
              <li>
                <span className="text-white font-semibold">Faster iteration:</span>
                Pros optimized strategies quicker with concise visual reports.
              </li>
              <li>
                <span className="text-white font-semibold">Clarity:</span>
                PnL + “why it happened” insights increased trust and retention.
              </li>
              <li>
                <span className="text-white font-semibold">Differentiation:</span>
                Simpler UX and education focus vs complex, fee-heavy tools.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
