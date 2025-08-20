// components/projectdummy/Summary.jsx
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
              Nestohub ka mission tha real estate ke fragmented workflows ko unify karna—taaki
              brokers, builders aur buyers ek single ecosystem me seamlessly connect kar sakein,
              inventory ko real-time sync kiya ja sake, visits schedule ho aur leads efficiently
              convert ho. Transparency aur speed badhakar trust aur revenue dono improve karna tha.
            </p>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">My Contributions</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              As Lead UI/UX Designer, maine poora end-to-end experience design kiya: user research
              aur persona development se leke information architecture, role-based dashboards (Broker,
              Builder, Client), inventory & visit scheduling flows, conversion funnel tracking, real-time
              syncing mechanisms, aur responsive web + mobile interface. Wireframes se hi-fi prototypes,
              usability testing, iteration, micro-interactions, notification system, aur design system
              bhi establish kiya gaya taaki consistency aur scalability rahe.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Client */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client / Product</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Nestohub<br />
              Real Estate SaaS Ecosystem<br />
              India / Multi-region
            </p>
            <div className="flex gap-3 mt-3">
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Web</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Mobile</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Broker</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Builder</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">Client</span>
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
