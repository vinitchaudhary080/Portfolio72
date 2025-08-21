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
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Organizations often face challenges with employee gifting:</h3>
              <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
                <li>
                  <span className="text-white font-semibold">Traditional gifting limitations:</span>
                  Physical gifts or vouchers are difficult to manage, track, and customize.
                </li>
                <li>
                  <span className="text-white font-semibold">Lack of personalization:</span>
                  Employees receive generic gifts that don’t match their preferences.
                </li>
                <li>
                  <span className="text-white font-semibold">Operational hassle:</span>
                  HR/admin teams spend a lot of time coordinating with vendors, tracking distribution, and managing budgets.
                </li>
              </ul>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed mt-4">
                The challenge was to design a simple, scalable, and digital-first platform for employee gifting that saves time, reduces manual work, and improves employee satisfaction.

              </p>
            </div>
          </div>

          {/* My Contributions */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Role & Contribution</h3>
            <ul className="text-gray-400 text-sm sm:text-base leading-relaxed list-disc pl-5 space-y-3">
              <li>
                <span className="text-white font-semibold">UX Research & Competitive Analysis:</span>
                Understanding HR/admin workflows and employee expectations.
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture (IA):</span>
                Structured modules for voucher creation, distribution, redemption, and analytics.
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing & Prototyping:</span>
                Designed easy flows for HR managers and employees.
              </li>
              <li>
                <span className="text-white font-semibold">UI Design & Design System:</span>
                Clean, modern design with intuitive navigation.
              </li>
              <li>
                <span className="text-white font-semibold">Usability Testing:</span>
                Validated ease of voucher creation and redemption with test users.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Desktop only (under My Role & Contribution) */}
          <div className="hidden lg:block">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Time savings:</span>
                Reduced HR workload by 50% compared to manual gifting.
              </li>
              <li>
                <span className="text-white font-semibold">Employee satisfaction:</span>
               85% of employees preferred digital vouchers over physical gifts.
              </li>
              <li>
                <span className="text-white font-semibold">Transparency:</span>
                HR teams gained better visibility into gifting budgets and redemption stats.
              </li>
              <li>
                <span className="text-white font-semibold">Positive feedback:</span>
                “Budgettre makes corporate gifting hassle-free and personalized—our employees loved it!”
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
                  <li>Interviewed 5 HR managers and 10 employees to understand pain-points.</li>
                  <li>Analyzed existing solutions like Amazon Vouchers, Sodexo, and GiftCards to identify gaps.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Information Architecture:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Admin/HR → Create vouchers, allocate budgets, distribute to employees, track usage.</li>
                  <li>Employees → Receive vouchers, redeem them at partner stores, track balance.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Wireframing:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Created low-fidelity wireframes focusing on reducing admin workload.</li>
                  <li>Simple card-based UI for vouchers with status (active, redeemed, expired).</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Prototyping & UI Design:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Developed high-fidelity prototypes in Figma.</li>
                  <li>Used a clean corporate color scheme to appeal to enterprise users.</li>
                  <li>Focused on minimal clicks → voucher creation in under 3 steps.</li>
                </ul>
              </li>
              <li>
                <span className="text-white font-semibold">Testing & Iteration:</span>
                <ul className="list-disc pl-5 space-y-1 mt-2">
                  <li>Tested with HR professionals and employees.</li>
                  <li>Simplified voucher distribution flow after feedback.</li>
                  <li>Added filters (occasion, budget, validity) for better management.</li>
                </ul>
              </li>
            </ul>
          </div>


          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Solution</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
              <li>
                <span className="text-white font-semibold">Easy Voucher Creation:</span>
               HR/admins can create gift vouchers in a few clicks.
              </li>
              <li>
                <span className="text-white font-semibold">Personalized Distribution:</span>
                Vouchers can be customized by occasion (festivals, birthdays, rewards).
              </li>
              <li>
                <span className="text-white font-semibold">Employee-Friendly Redemption:</span>
                Employees can easily redeem vouchers at partner outlets or online stores.
              </li>
              <li>
                <span className="text-white font-semibold">Budget Control & Analytics:</span>
                Real-time tracking of spending, redemption, and unused vouchers.
              </li>
              <li>
                <span className="text-white font-semibold">Scalable & Secure:</span>
                Supports large organizations with hundreds of employees.
              </li>
            </ul>
          </div>

          {/* Outcome & Impact — Mobile only (shown after Solution) */}
          <div className="lg:hidden mt-8">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Outcome & Impact</h3>
            <ul className="list-disc pl-5 text-gray-400 text-sm sm:text-base space-y-3">
            <li>
                <span className="text-white font-semibold">Time savings:</span>
                Reduced HR workload by 50% compared to manual gifting.
              </li>
              <li>
                <span className="text-white font-semibold">Employee satisfaction:</span>
               85% of employees preferred digital vouchers over physical gifts.
              </li>
              <li>
                <span className="text-white font-semibold">Transparency:</span>
                HR teams gained better visibility into gifting budgets and redemption stats.
              </li>
              <li>
                <span className="text-white font-semibold">Positive feedback:</span>
                “Budgettre makes corporate gifting hassle-free and personalized—our employees loved it!”
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
