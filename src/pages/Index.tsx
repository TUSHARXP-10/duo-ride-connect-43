// Main Duo multi-theme landing/scroll experience

import React from "react";
import ThemeSection from "@/components/ThemeSection";
import { Hero3D, Vehicle3D } from "@/components/Hero3D";
import { Users, MapPin, ArrowDown, ArrowRight } from "lucide-react";

export default function Index() {
  return (
    <main className="w-full min-h-screen bg-[#F1F0FB] text-[#222] scroll-smooth" style={{ scrollSnapType: "y mandatory" }}>
      {/* NAV (fixed, scrolls to sections) */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-30 flex gap-4 bg-white/80 backdrop-blur border border-white/40 rounded-full px-8 py-3 mt-4 shadow-lg glass-morphism">
        {[
          { label: "Welcome", href: "#welcome" },
          { label: "Register", href: "#register" },
          { label: "Book", href: "#book" },
          { label: "Wallet", href: "#wallet" },
          { label: "Admin", href: "#admin" },
        ].map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-[#6E59A5] font-semibold px-2 story-link"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Section 1: Welcome & Brand */}
      <ThemeSection id="welcome" theme="purple">
        <Hero3D />
        <h1 className="text-5xl font-black bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] bg-clip-text text-transparent mb-4 animate-fade-in">
          DUO: India’s Ride-Sharing Revolution
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-2xl">Affordable, sustainable, and social rides for everyone. <span className="bg-[#FEF7CD]/40 rounded px-2">Bike, scooter, or car—get there together.</span></p>
        <a
          href="#register"
          className="flex gap-2 items-center px-6 py-3 rounded-xl font-semibold bg-[#9b87f5] text-white shadow-lg hover:scale-105 transition hover:bg-[#7E69AB] animate-fade-in"
        >
          Get Started
          <ArrowDown size={20} />
        </a>
      </ThemeSection>

      {/* Section 2: Register/KYC */}
      <ThemeSection id="register" theme="peach">
        <Vehicle3D type="users" />
        <h2 className="text-3xl font-bold mb-2 text-[#f97316]">Register & Verify in Minutes</h2>
        <p className="text-lg text-gray-700 mb-4">Sign up instantly with your phone number. <br />Complete KYC (license, RC) and join India’s safest ride network.</p>
        <form
          onSubmit={e => { e.preventDefault(); alert("Demo only, OTP flow coming soon!"); }}
          className="w-full max-w-sm flex flex-col items-center gap-4"
        >
          <input
            type="tel"
            required
            placeholder="Enter your mobile number"
            className="py-2 px-4 rounded-lg border-2 border-[#FFD1BA] bg-white/40 focus:ring-[#F97316] focus:border-[#FFA99F] text-lg outline-none w-full"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#FFA99F] text-white font-semibold text-lg hover:bg-[#F97316] transition"
          >
            Get OTP
          </button>
        </form>
      </ThemeSection>

      {/* Section 3: Book & Pool */}
      <ThemeSection id="book" theme="mint">
        <div className="flex flex-col items-center">
          <Vehicle3D type="bike" />
          <Vehicle3D type="car" />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-[#94C41A]">Book a Ride, Pool & Save</h2>
        <p className="text-lg text-gray-700 max-w-md mb-4">Instant or advance. One-way or pool. Duo’s smart match means up to 15% detour—never far, always fair.<br />Pay <span className="bg-[#FDE1D3] rounded px-2">₹20–₹25/km</span> &mdash; way cheaper than autos.</p>
        <div className="flex gap-2">
          <a href="#wallet" className="px-5 py-2 rounded-lg bg-[#94C41A] text-white font-semibold hover:bg-[#0EA5E9] transition flex items-center gap-2">
            Next
            <ArrowRight size={17} />
          </a>
        </div>
      </ThemeSection>

      {/* Section 4: Wallet & Payment */}
      <ThemeSection id="wallet" theme="pink">
        <Vehicle3D type="car" />
        <h2 className="text-3xl font-bold mb-2 text-[#FF719A]">Secure Wallet & Instant Pay</h2>
        <p className="text-lg text-gray-700 mb-4">Pay with UPI or in-app Duo Wallet via Razorpay/Paytm.<br />Drivers track earnings, payouts, and 2% Duo commission in real time.</p>
        <div className="flex space-x-8 mt-2">
          <div className="flex flex-col items-center">
            <span className="font-black text-2xl text-[#F97316]">2%</span>
            <span className="text-xs text-gray-600">Commission only</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-black text-2xl text-[#8B5CF6]">₹1950</span>
            <span className="text-xs text-gray-600">Avg. monthly earning</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-black text-2xl text-[#0EA5E9]">UPI, Paytm, Wallet</span>
            <span className="text-xs text-gray-600">Payout options</span>
          </div>
        </div>
      </ThemeSection>

      {/* Section 5: Admin/Analytics (keep this section visually as a footer, but themed as mint/purple for separation) */}
      <ThemeSection id="admin" theme="purple">
        <Users size={60} className="text-[#0EA5E9] animate-bounce mb-2" />
        <h2 className="text-3xl font-bold mb-2 text-[#0EA5E9]">Duo Admin & Analytics</h2>
        <p className="text-lg text-gray-700 max-w-xl mb-6">
          Duo brings you full control: manage users, trips, KYC, stats, support, and payouts. <br />
          <span className="bg-[#D3E4FD]/80 px-2 rounded">Your rides. Your data. Your safety—always.</span>
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center">
          <div className="bg-white/60 rounded-xl px-6 py-4 shadow-lg flex-1 mb-2">
            <div className="text-lg font-bold flex items-center gap-2 text-[#7E69AB] mb-1">
              <MapPin size={18} />
              27,153 trips completed
            </div>
            <div className="text-[#7E69AB] text-sm">and growing daily</div>
          </div>
          <div className="bg-white/60 rounded-xl px-6 py-4 shadow-lg flex-1 mb-2">
            <div className="text-lg font-bold flex items-center gap-2 text-[#F97316] mb-1">
              <Users size={18} />
              8,837 registered users
            </div>
            <div className="text-[#F97316] text-sm">join the Duo ride</div>
          </div>
        </div>
      </ThemeSection>

      {/* Footer (neutral style) */}
      <footer className="relative w-full py-10 pb-5 flex flex-col items-center text-sm text-gray-400 bg-white/0">
        <span>
          &copy; {new Date().getFullYear()} Duo · Built by the community for India
        </span>
        <div className="flex gap-2 mt-2">
          <a href="#welcome" className="text-gray-400 hover:underline text-xs">Back to Top</a>
        </div>
      </footer>
    </main>
  );
}
