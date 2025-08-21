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
                  <span className="text-white font-semibold">Generic websites</span>
                   that fail to stand out in a highly competitive industry.
                </li>
                <li>
                  <span className="text-white font-semibold">Cluttered presentation</span>
                  of services that confuse potential clients.
                </li>
                <li>
                  <span className="text-white font-semibold">Low lead generation</span>
                  because of weak CTAs (Call-to-Action) and poor trust elements.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                The challenge was to create a visually appealing, trust-building, and lead-driven agency website that clearly communicates Cribonix’s expertise and convinces clients to engage.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research:</span>
                Analyzing agency websites and understanding client expectations.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structuring services, case studies, and contact flow.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Created page layouts for homepage, services, about, and contact.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Modern visuals with strong typography, brand-aligned color palette, and clean spacing.
              </li>
              <li>
                <span className="text-white font-semibold">Conversion Strategy:</span>
                Designed strategic CTAs and lead-generation forms.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
              Created a<span className="text-white font-semibold">professional brand identity</span>  for Cribonix online.
              </li>
              <li>
              Improved<span className="text-white font-semibold">client conversion rate potential</span>  with strategically placed CTAs.
              </li>
              <li>
              Test users found it<span className="text-white font-semibold">“clear, modern, and easy to navigate”,</span>  aligning with marketing agency standards.
              </li>
              <li>
              The website structure now supports<span className="text-white font-semibold">scalability</span>  for adding future campaigns or case studies.
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
                  <li>Studied competitors like Webchutney, Social Beat, and Kinnect to identify strong/weak points.</li>
                  <li>Gathered insights on how agencies build credibility (case studies, client logos, testimonials).</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Created clear content sections: Hero Section, Services, Portfolio/Case Studies, Testimonials, Contact.</li>
                  <li>Designed flow to guide user from awareness → service understanding → trust → contact.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Low-fidelity wireframes for homepage and service detail pages.</li>
                  <li>Focused on keeping navigation minimal and user-friendly.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Designed high-fidelity prototypes in Figma.</li>
                  <li>Used bold typography, gradient highlights, and clean layouts to give a modern marketing vibe.</li>
                  <li>Added iconography to make services scannable.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  
                  <li>Conducted small feedback sessions with 4 marketers.</li>
                  <li>Optimized CTA placements and increased form visibility.</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
             <li>
                <span className="text-white font-semibold">Impactful Hero Section:</span>
                A strong headline, tagline, and CTA button to instantly grab attention.
              </li>
              <li>
                <span className="text-white font-semibold">Service Showcase:</span>
                Well-structured cards describing Ads, SEO, Social Media, and Branding services.
              </li>
              <li>
                <span className="text-white font-semibold">Case Studies Section:</span>
                Displaying real projects to build trust.
              </li>
              <li>
                <span className="text-white font-semibold">zClient Testimonials & Logos:</span>
                Establish credibility and showcase partnerships.
              </li>
              <li>
                <span className="text-white font-semibold">Conversion-Driven Contact Form:</span>
               Easy to use, strategically placed across multiple sections.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only (shown after Solution) */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
              Created a<span className="text-white font-semibold">professional brand identity</span>  for Cribonix online.
              </li>
              <li>
              Improved<span className="text-white font-semibold">client conversion rate potential</span>  with strategically placed CTAs.
              </li>
              <li>
              Test users found it<span className="text-white font-semibold">“clear, modern, and easy to navigate”,</span>  aligning with marketing agency standards.
              </li>
              <li>
              The website structure now supports<span className="text-white font-semibold">scalability</span>  for adding future campaigns or case studies.
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
