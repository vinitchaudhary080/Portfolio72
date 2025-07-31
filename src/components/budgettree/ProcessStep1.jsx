// src/components/projectdetails/projectdummy/ProcessStep1.jsx
import React from "react";

export default function ProcessStep1() {
  return (
    <section className="bg-black text-white px-6 sm:px-20 py-20 ">
      {/* Heading Line like "Work Samples" style */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-white text-base sm:text-lg font-medium whitespace-nowrap">
          THE PROCESS
        </h2>
        <div className="flex-1 h-px bg-gray-700"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-semibold mb-12">
        Designing the Digital Gifting 
      </h1>

      {/* Discovery Block */}
      <div className="mb-10">
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Discovery</h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Pehle step mein maine gifting ke existing pain points samjhe — log festivals, birthdays,
          aur special moments par personalized aur instant gifts chahte hain, lekin physical options
          slow hote hain aur generic solutions emotional connection nahi de paate. User interviews aur
          competitive analysis se yeh clear hua ki “speed”, “customization”, aur “shareability” sabse
          zyada important hai. Iss insight se humne ek lightweight digital gift card experience define
          karne ka decision liya jo 90 seconds ke andar ban kar bhejne layak ho.
        </p>
      </div>

      {/* Funnel & Structure Block */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">
          Mapping the Gift Creation Funnel
        </h3>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-4xl">
          Discovery ke baad core user flows ko structure kiya gaya. Sender ka flow simplified rakha gaya:
          occasion select karna → template personalize karna (message + amount) → payment → share karna
          via link / QR / email. Recipient ke liye redeem flow bhi intuitive banaya gaya jahan woh directly
          gift open karke apni preferred option choose kar sake. Roles ko clear define karke funnel ke har
          step par friction kam kiya gaya, aur real-time preview + progress feedback add karke confidence aur
          speed dono badhaye gaye.
        </p>
      </div>
    </section>
  );
}
