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
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Traditional traders face multiple challenges:</h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">For Buyers:</span>
                  While rental listings are easy to find, plots, commercial spaces, or large properties are difficult to discover on a single trusted platform.
                </li>
                <li>
                  <span className="text-white font-semibold">For Builders:</span>
                  They often lack a streamlined digital channel to showcase and sell/rent their projects at scale.
                </li>
                <li>
                  <span className="text-white font-semibold">For Brokers:</span>
                  Brokers struggle to manage client needs, property listings, and loan approvals in one place, which delays deals and limits trust.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                The challenge was to create a multi-user platform that simplifies the property ecosystem by connecting all three stakeholders—buyers, builders, and brokers—while also offering loan assistance.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research & Market Study:</span>
                Understanding pain points of all three stakeholders.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Designing separate but connected journeys for buyers, builders, and brokers.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Building flows for property search, listing, negotiation, and loan requests.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Created a scalable and professional real estate design system.
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
                Validated flows with sample users from each stakeholder group.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Time saved:</span>
                Buyers found relevant properties <span className="text-white font-semibold">35% faster</span> compared to using multiple apps.
              </li>
              <li>
                <span className="text-white font-semibold">Builder adoption:</span>
                Provided builders with a structured platform to digitally showcase projects.
              </li>
              <li>
                <span className="text-white font-semibold">Broker efficiency:</span>
                Brokers could manage deals and loan approvals in one place, increasing <span className="text-white font-semibold">deal closure speed by 40%.</span>
              </li>
              <li>
                <span className="text-white font-semibold">Positive feedback:</span>
                “Nestohub feels like a complete ecosystem—it reduces the hassle of juggling between apps and people.”
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
                  <li>Interviewed <span className="text-white font-semibold">8 property buyers, 4 builders, and 5 brokers </span>to identify their needs.</li>
                  <li>Studied competitors like 99acres, MagicBricks, and Housing.com to uncover gaps.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Designed three tailored modules:</li>
                  <li><span className="text-white font-semibold">Buyer Flow </span>Search, filter, shortlist, apply for loan, contact broker.</li>
                  <li><span className="text-white font-semibold">Builder Flow </span>Add projects, set availability (rent/sell), manage listings.</li>
                  <li><span className="text-white font-semibold">Broker Flow </span>Match buyers with builders, close deals, manage commissions, handle loan approvals.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Created low-fidelity wireframes for property discovery, project listing, and broker dashboards.</li>
                  <li>Mapped user journeys with loan application embedded.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>High-fidelity prototypes in Figma with clean layouts, intuitive filters, and detailed property cards.</li>
                  <li>Designed dashboards for brokers and builders to manage deals easily.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Conducted <span className="text-white font-semibold">usability testing with 6 participants </span>(2 from each group).</li>
                  <li>Simplified loan request flow after users found it lengthy.</li>
                  <li>Improved property card design to highlight key details (price, type, location, availability).</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Unified Property Ecosystem:</span>
                One app for buyers, builders, and brokers.
              </li>
              <li>
                <span className="text-white font-semibold">Advanced Property Search:</span>
               Filters for property type (flat, plot, commercial), budget, and location.
              </li>
              <li>
                <span className="text-white font-semibold">Loan Assistance Integration:</span>
                Brokers assist in getting loan approvals directly inside the platform.
              </li>
              <li>
                <span className="text-white font-semibold">Builder Dashboard:</span>
                Builders can list, showcase, and manage their projects digitally.
              </li>
              <li>
                <span className="text-white font-semibold">Broker Tools:</span>
                Brokers can match users with builders, close deals, and track commissions.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only (shown after Solution) */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Time saved:</span>
                Buyers found relevant properties <span className="text-white font-semibold">35% faster</span> compared to using multiple apps.
              </li>
              <li>
                <span className="text-white font-semibold">Builder adoption:</span>
                Provided builders with a structured platform to digitally showcase projects.
              </li>
              <li>
                <span className="text-white font-semibold">Broker efficiency:</span>
                Brokers could manage deals and loan approvals in one place, increasing <span className="text-white font-semibold">deal closure speed by 40%.</span>
              </li>
              <li>
                <span className="text-white font-semibold">Positive feedback:</span>
                “Nestohub feels like a complete ecosystem—it reduces the hassle of juggling between apps and people.”
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
