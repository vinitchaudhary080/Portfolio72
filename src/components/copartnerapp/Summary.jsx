import React from "react";

export default function Summary() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-12">Project Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        {/* Left Column */}
        <div className="space-y-16 sm:space-y-32">
          {/* Mission */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Design a trust-first trading companion that helps novice and retail traders make clear buy/sell decisions by
              surfacing real-time, SEBI-registered analyst insights—reducing confusion, building confidence, and creating a
              scalable subscription-based connection between verified analysts and traders.
            </p>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">My Contributions</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              As the lead UX/UI designer, I owned the end-to-end product experience: conducted user research to identify pain
              points of beginner traders, mapped analyst & trader journeys, and defined information architecture. I designed
              the onboarding flow, subscription system, and the core decision dashboard that visualizes analyst signals,
              portfolio impact, and trust indicators. Built the analyst credibility & feedback loop, crafted micro-interactions
              for clarity, and optimized for responsiveness, accessibility, and conversion. The design emphasizes signal clarity,
              transparency, and user confidence.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Client */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              CoPartner Finance Agency (CoPartner App) <br />
              Fintech platform / Remote
            </p>
            <div className="flex gap-3 mt-3">
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Web App</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">SEBI-Verified</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Services</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-1">
              <li>User Research & Flow Mapping</li>
              <li>Wireframing & Prototyping</li>
              <li>User Interface Design</li>
              <li>High-Fidelity Mockups</li>
              
              <li>Micro-Interactions & Animations</li>
              <li>Usability & A/B Testing</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
