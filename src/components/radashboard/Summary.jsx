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
              Provenance set out to build a company that reimagines the way people think about community, connection, and meaning, starting with how they celebrate major life milestones. With the initial entry wedge being weddings, they were looking to come out of stealth and launch their MVP to the market, and they also needed a marketing website to accompany it.
            </p>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">My Contributions</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              As a Product Designer, I built Provenance's MVP from scratch – I took the web app through all stages of the UX design process and got it ready for launch. I then designed and built a highly effective Webflow website that educates visitors about Provenance's offering and converts them into users and customers. Over the next two years, I worked on countless iterations of their existing offering, and also helped them launch a few new apps.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-16 sm:space-y-32 sm:pl-16"> {/* Shifted Right */}
          {/* Client */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Provenance (Chim3ra, Inc.)<br />
              Los Angeles, CA, US
            </p>
            <div className="flex gap-3 mt-3">
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">cb</span>
              <span className="bg-white text-black px-2 py-1 text-xs font-semibold rounded">in</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Services</h3>
            <ul className="list-disc pl-5 text-gray-300 text-sm sm:text-base space-y-1">
              <li>User Interface Design</li>
              <li>User Experience Design</li>
              <li>User Research & User Flows</li>
              <li>Wireframing</li>
              <li>A/B Testing & CRO</li>
              <li>Web design</li>
              <li>Webflow development</li>
              <li>SEO</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
