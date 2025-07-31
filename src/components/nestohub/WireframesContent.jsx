// src/components/projectdetails/projectdummy/WireframesContent.jsx
import React from "react";

export default function WireframesContent() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16">
      <h2 className="text-3xl sm:text-5xl font-semibold mb-10">
        Project Overview, Problem & Solution
      </h2>

      <div className="space-y-16 text-sm sm:text-base leading-relaxed max-w-4xl">
        {/* Project Overview */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">
            Project Overview
          </h3>
          <p className="text-gray-400 mb-3">
            Nestohub is a real estate ecosystem built to bridge the gap between
            <strong> Brokers</strong>, <strong>Builders</strong>, and <strong>End
            Users</strong> (buyers/renters) by unifying listing management, lead
            conversion, and informational access across web and mobile. The goal
            was to reduce friction, increase transparency, and drive higher
            conversion on property visits and sales/rentals.
          </p>
          <p className="text-gray-400">
            <strong>My Role:</strong> Lead UI/UX Designer — responsible for user
            research, information architecture, flow design, dashboard UX,
            mobile responsiveness, and iterating based on feedback. <br />
            <strong>Platform:</strong> Web dashboard + companion mobile app <br />
            <strong>Primary Users:</strong> Brokers, Builders, Property Seekers
          </p>
        </div>

        {/* Problem */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Problem</h3>
          <div className="space-y-6 text-gray-400">
            <div>
              <h4 className="font-semibold mb-2">Brokers</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Manual coordination of property visits and poor lead visibility.</li>
                <li>Difficulty converting interest to action due to lack of structured follow-up & tracking.</li>
                <li>No single source of truth for available inventory and client journey.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Builders</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Fragmented process for preparing and publishing properties for sale/rent.</li>
                <li>Difficulty managing status (ready, pending, sold/rented) and syncing it with brokers.</li>
                <li>Delays between inventory readiness and market visibility.</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">End Users / Clients</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Confusing entry points: multiple logins, unclear property status, and inconsistent updates.</li>
                <li>Lack of trust due to opaque process and asynchronous communication.</li>
                <li>Difficulty discovering relevant properties or understanding who manages what.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>

          {/* Module A */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">A. Broker Panel</h4>
            <p className="text-gray-400 pl-4">
              <strong>Key features:</strong> Dashboard showing matched properties,
              upcoming visits, and lead funnel stages; visit scheduling with builder
              sync and client notifications; lead conversion tracking with contextual
              property data and follow-up reminders; quick access to property details,
              builder status, and conversion history.
            </p>
          </div>

          {/* Module B */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">B. Builder Panel</h4>
            <p className="text-gray-400 pl-4">
              <strong>Key features:</strong> Inventory creation workflow (add flats/buildings,
              tag sale vs rent, upload assets, set readiness status); visual status indicators
              like “Under Prep”, “Ready to Sell”, “Booked”; auto-sync to broker views when inventory
              changes; ability to push updates (price/change/availability) with audit trail.
            </p>
          </div>

          {/* Module C */}
          <div className="mb-6">
            <h4 className="font-semibold mb-2">C. Unified User Portal & Dashboard</h4>
            <p className="text-gray-400 pl-4">
              <strong>Key features:</strong> Single login for clients to browse, request visits,
              and view progress; role-aware views adapting to whether the user is a broker’s client,
              a builder’s contact, or a general seeker; real-time updates on property status, visit
              confirmations, and next steps; mobile-friendly access for on-the-go decision making.
            </p>
          </div>

          {/* Cross-cutting */}
          <div>
            <h4 className="font-semibold mb-2">Cross-Cutting UX Solutions</h4>
            <ul className="list-disc pl-5 space-y-1 text-gray-400">
              <li>Consistent design system across modules to reduce cognitive load.</li>
              <li>Notification system for visit reminders, inventory updates, and conversion nudges.</li>
              <li>Analytics / KPI surfaces for internal stakeholders (broker performance, builder readiness bottlenecks).</li>
            </ul>
          </div>
        </div>

        {/* Design Process */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Design Process</h3>
          <div className="space-y-6 text-gray-400">
            <div>
              <h4 className="font-semibold mb-2">Discovery & Stakeholder Interviews</h4>
              <p>
                Brokers, builders, and sample clients se baat karke unke workflows aur pain points map kiye gaye.
                “As-is” journeys banayi gayi jahan friction, data mismatch, aur conversion leakage identify huye.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Personas & User Flows</h4>
              <p>
                Personas create kiye gaye: “Performance-driven Broker”, “Efficiency-focused Builder”, aur
                “Information-hungry Client”. Flow diagrams design kiye gaye jo inventory creation → broker
                matching → client visit → conversion path ko cover karte hain.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Information Architecture</h4>
              <p>
                Module separation define ki gayi while ensuring cross-module visibility (e.g., builder status
                broker view mein surfaced). Core actions (schedule visit, update inventory, track lead) ko
                progressive disclosure ke saath prioritize kiya gaya.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Wireframes & Prototypes</h4>
              <p>
                Mid-fidelity wireframes banaye gaye dashboards ke liye, aur unhe hi-fi clickable prototypes
                mein iterate kiya gaya. Focus state clarity, status badges, aur funnel visibility par raha.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Usability Testing</h4>
              <p>
                Real brokers aur builders ke saath core tasks (property listing, visit scheduling, lead conversion)
                test kiye gaye. Feedback collect karke discoverability of next actions aur status clarity improve ki gayi.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Iteration & Visual Polish</h4>
              <p>
                Components responsive banaye gaye (mobile-first), micro-interactions add kiye gaye (hover feedback,
                success toasts), typography hierarchy refine ki gayi, aur accessibility patterns implement kiye gaye.
              </p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Key Features Highlighted</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>Role-based dashboards (Broker / Builder / Client)</li>
            <li>Real-time syncing of property status across stakeholders</li>
            <li>Visit scheduling with automated confirmations</li>
            <li>Lead funnel visibility & conversion tracking</li>
            <li>Inventory management with readiness workflow</li>
            <li>Unified authentication and portal for trust & clarity</li>
            <li>Responsive web + mobile-friendly access</li>
            <li>Notifications, analytics, and action prompts</li>
          </ul>
        </div>

        {/* Challenges & Solutions */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Challenges & How They Were Solved</h3>
          <div className="space-y-4 text-gray-400">
            <div>
              <p>
                <strong>Challenge:</strong> Disconnected data leading to outdated broker info. <br />
                <strong>Solution:</strong> Real-time sync triggers implement kiye gaye from builder updates to broker panels with visual change cues.
              </p>
            </div>
            <div>
              <p>
                <strong>Challenge:</strong> Clients confused about property readiness. <br />
                <strong>Solution:</strong> Clear status badges aur “what’s next” callouts client dashboard par dikhaye gaye.
              </p>
            </div>
            <div>
              <p>
                <strong>Challenge:</strong> Brokers ke paas structured follow-up nahi tha. <br />
                <strong>Solution:</strong> Mini CRM-style reminders aur visit-to-conversion tagging design ki gayi.
              </p>
            </div>
          </div>
        </div>

        {/* Results (Draft) */}
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-4">Results (Draft)</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-400">
            <li>Broker lead-to-visit conversion improved by <strong>[insert %]</strong>.</li>
            <li>Builder listing time dropped from <strong>[X days]</strong> to <strong>[Y hours/days]</strong>.</li>
            <li>Client engagement (dashboard session length) increased by <strong>[metric]</strong>.</li>
            <li>Redundant coordination emails/messages reduced by <strong>[metric or %]</strong>.</li>
            <li>Internal satisfaction (brokers/builders) score: <strong>[quote or rating]</strong>.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
