// src/components/projectdetails/projectdummy/WireframesContent.jsx
import React from "react";

export default function WireframesContent() {
  return (
    <section className="w-full bg-black text-white px-6 sm:px-20 py-16 ">
      <div className="max-w-4xl">
        <h2 className="text-3xl sm:text-5xl font-semibold mb-4">BudgetTree</h2>
        <p className="text-xl sm:text-2xl font-light mb-8">
          Gifts that feel personal, built in seconds — for Diwali, birthdays, festivals, ya koi bhi special moment.
        </p>

        <div className="space-y-12 text-sm sm:text-base leading-relaxed">
          {/* Overview */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">Overview</h3>
            <p className="text-gray-400">
              BudgetTree ek digital gifting experience hai jahan users customized gift cards bana ke,
              purchase karke, aur direct send karke apne loved ones ko occasion-specific gifts de sakte hain —
              chahe woh Diwali ho, birthday ho, ya koi bhi celebration. Sender apne hisaab se gift design,
              amount set, message add aur easily share kar sakta hai.
            </p>
          </div>

          {/* Problem */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">Problem</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                Log festivals ya special occasions par personalized aur flexible gifting chahte hain, lekin
                physical gifts ya generic options time-consuming, impersonal, ya inconvenient hote hain.
              </li>
              <li>
                Gift dene wale ko customization, timely delivery, aur budget control mein friction hota hai.
              </li>
              <li>
                Recipients ko aise gifts chahiye jo unke convenience ke hisaab se redeem ho saken (fixed product nahi).
              </li>
              <li>
                Traditional gifting mein tracking, follow-up, aur repeat usage ka smooth system nahi hota.
              </li>
            </ul>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">Solution</h3>
            <p className="text-gray-400 mb-4">
              Humne BudgetTree banaya — ek lightweight web platform jahan gifting flow ko simple aur fast banaya gaya:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>
                Users asaani se occasion choose karte hain (Diwali, birthday, etc.) aur pre-designed templates se
                gift card personalize karte hain (message, amount, design).
              </li>
              <li>
                Instant creation flow: occasion select → customize → amount set → payment & send. Poora process
                3-4 steps mein, under 90 seconds.
              </li>
              <li>
                Multiple send options: Link, email, QR code ya direct share for seamless delivery.
              </li>
              <li>
                Ready-to-gift pre-made cards jo turant bheje ja sakte hain without extra customization.
              </li>
              <li>
                Budget control: Sender amount set karke thoughtful gift de sakta hai jo receiver ke liye flexible ho.
              </li>
              <li>
                Mobile-first, simple UI with real-time preview to reduce cognitive load and speed up creation.
              </li>
              <li>
                Guided creation, minimal fields, progress feedback aur celebratory micro-interactions se
                friction aur uncertainty dono kam hote hain.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
