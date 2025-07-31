// components/projectdummy/Summary.jsx
import React from "react";

export default function Summary() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-12">Summary</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 ">
        {/* Left Column */}
        <div className="space-y-16 sm:space-y-32">
          {/* Mission */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Mission</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Cribonix ka goal hai brands ko digital duniya mein standout karwana by combining strategic marketing insight with clean, conversion-focused design. Website ka purpose tha credibility build karna, services ko clearly communicate karna, aur visitors ko qualified leads mein convert karna.
            </p>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">My Contributions</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Lead UX/UI Designer ke roop mein maine Cribonix ki marketing website ground-up design aur build ki. Kaam mein shamil tha information architecture define karna, visual identity align karna, React + Tailwind CSS se responsive frontend banana, service showcase aur strong CTAs design karna, sticky navigation & smooth scroll implement karna, lead capture form with validation banana, SEO & Open Graph metadata add karna, performance optimizations (image compression, lazy loading), analytics/tracking setup karna, aur accessibility improvements ensure karna. Saath hi microcopy aur brand-consistent tone likhi gayi jo visitor ko engage kare.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16">
          {/* Client */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Cribonix<br />
              Digital Marketing Agency<br />
              Remote / Global
            </p>
            <div className="flex gap-3 mt-3">
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">CR</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">IX</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Services</h3>
            <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base space-y-1">
              <li>Brand Strategy & Positioning</li>
              <li>Digital Marketing Strategy</li>
              <li>UI/UX Design for Campaigns & Landing Pages</li>
              <li>Website Design & Development (React + Tailwind)</li>
              <li>Conversion Rate Optimization (CRO)</li>
              <li>Lead Capture Funnel Design</li>
              <li>SEO & Metadata Implementation</li>
              <li>Performance Optimization</li>
              <li>Content Strategy & Microcopy</li>
              <li>Analytics & Engagement Tracking</li>
              <li>Responsive & Accessible Design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
