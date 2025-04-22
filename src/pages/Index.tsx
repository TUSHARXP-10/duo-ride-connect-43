
// Main Duo multi-theme landing/scroll experience with enhanced 3D animations

import React, { useEffect, useState } from "react";
import ThemeSection from "@/components/ThemeSection";
import { Hero3D, Vehicle3D } from "@/components/Hero3D";
import { Users, MapPin, ArrowDown, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useTheme } from "@/components/theme-provider";

export default function Index() {
  const [activeSection, setActiveSection] = useState("welcome");
  const [scrolling, setScrolling] = useState(false);
  const { theme } = useTheme();

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolling state for animation throttling
      if (!scrolling) {
        setScrolling(true);
        setTimeout(() => setScrolling(false), 200);
      }
      
      // Detect which section is in view
      const sections = ["welcome", "register", "book", "mitre", "wallet", "admin"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If element is mostly in viewport
          if (rect.top <= 100 && rect.bottom >= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolling]);

  // Smooth scroll function for navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#FDF6F3] dark:bg-slate-900 text-[#222] dark:text-slate-100 scroll-smooth relative overflow-hidden" style={{ scrollSnapType: "y mandatory" }}>
      {/* Fixed background gradient */}
      <div className={`fixed inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-slate-900 to-slate-800' : 'bg-gradient-to-b from-[#FDF6F3] to-[#E5DEFF]'} -z-10 pointer-events-none`}></div>
      
      {/* Floating 3D particles in background */}
      <div className="fixed inset-0 -z-5 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => {
          const size = Math.random() * 60 + 20;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = Math.random() * 20 + 40;
          const delay = Math.random() * 20;
          const opacity = Math.random() * 0.07 + 0.02;
          const hue = Math.floor(Math.random() * 360);
          
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                backgroundColor: `hsla(${hue}, 70%, 70%, ${opacity})`,
                animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
              }}
            ></div>
          );
        })}
      </div>

      {/* NAV (fixed, scrolls to sections) */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur border border-white/40 dark:border-slate-700/40 rounded-full px-8 py-3 mt-4 shadow-lg glass-morphism transform-gpu transition-all duration-500 hover:shadow-xl">
        {[
          { label: "Welcome", href: "#welcome" },
          { label: "Register", href: "#register" },
          { label: "Book", href: "#book" },
          { label: "Mitre", href: "#mitre" },
          { label: "Wallet", href: "#wallet" },
          { label: "Admin", href: "#admin" },
        ].map((item) => {
          const isActive = activeSection === item.href.substring(1);
          return (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href.substring(1))}
              className={`
                relative font-semibold font-premium px-3 py-1 transition-all duration-300 
                ${isActive 
                  ? "text-white" 
                  : "text-[#7C4D03] dark:text-slate-300 hover:text-[#FFD600] dark:hover:text-yellow-300"}
              `}
            >
              <span 
                className={`
                  absolute inset-0 rounded-full transition-all duration-300 transform-gpu -z-10
                  ${isActive 
                    ? "bg-gradient-to-r from-[#FFD600] to-[#FFAB00] opacity-100 scale-100" 
                    : "opacity-0 scale-50"}
                `}
              ></span>
              {item.label}
            </button>
          );
        })}
        
        {/* Add theme toggle button */}
        <div className="ml-2 border-l border-slate-300/50 dark:border-slate-700/50 pl-2">
          <ThemeToggle />
        </div>
      </nav>

      {/* Section 1: Welcome */}
      <ThemeSection id="welcome" theme="purple" animationOptions={{ once: true, delay: 100 }}>
        <Hero3D />
        <h1 className="text-5xl font-black bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] bg-clip-text text-transparent mb-4 font-premium animate-[fadeScaleIn_1s_ease-out]">
          DUO: India's Ride-Sharing Revolution
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl font-playfair animate-[fadeSlideUp_1s_ease-out_0.3s_both]">
          Affordable, sustainable, and social rides for everyone. 
          <span className="bg-[#FEF7CD]/60 dark:bg-[#FEF7CD]/20 rounded px-2 ml-1">Bike, scooter, or car—get there together.</span>
        </p>
        <a
          href="#register"
          onClick={(e) => { e.preventDefault(); scrollToSection("register"); }}
          className="flex gap-2 items-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB] text-white shadow-lg hover:scale-105 transition hover:from-[#7E69AB] hover:to-[#8B5CF6] animate-[fadeSlideUp_1s_ease-out_0.5s_both] relative overflow-hidden group font-premium"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-200%] group-hover:animate-[shine_1.5s_ease-in-out]"></span>
          Get Started
          <ArrowDown size={20} className="group-hover:animate-bounce" />
        </a>
      </ThemeSection>

      {/* Section 2: Register/KYC */}
      <ThemeSection id="register" theme="peach" animationOptions={{ rotateX: 18, translateY: 35 }}>
        <Vehicle3D type="users" />
        <h2 className="text-3xl font-bold mb-2 text-[#fa8f2e] font-premium animate-[rotateIn_0.8s_ease-out_both]">Register & Verify in Minutes</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-playfair animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
          Sign up instantly with your phone number.<br />
          Complete KYC (license, RC) and join India's safest ride network.
        </p>
        <form
          onSubmit={e => { e.preventDefault(); alert("Demo only, OTP flow coming soon!"); }}
          className="w-full max-w-sm flex flex-col items-center gap-4 animate-[fadeScaleIn_0.8s_ease-out_0.4s_both]"
        >
          <input
            type="tel"
            required
            placeholder="Enter your mobile number"
            className="py-2 px-4 rounded-lg border-2 border-[#FFD1BA] dark:border-[#FFD1BA]/50 bg-white/40 dark:bg-slate-700/40 focus:ring-[#F97316] focus:border-[#FFA99F] text-lg outline-none w-full transition-all duration-300 focus:scale-105"
          />
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-[#FFA99F] text-white font-semibold text-lg hover:bg-[#F97316] transition-all duration-300 hover:shadow-lg hover:scale-105 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:animate-[pulse_2s_infinite] rounded-lg"></span>
            Get OTP
          </button>
        </form>
      </ThemeSection>

      {/* Section 3: Book & Pool */}
      <ThemeSection id="book" theme="mint" animationOptions={{ rotateX: 22, translateY: 38 }}>
        <div className="flex flex-col md:flex-row items-center gap-8 animate-[fadeScaleIn_0.8s_ease-out_both]">
          <Vehicle3D type="bike" />
          <Vehicle3D type="car" />
        </div>
        <h2 className="text-3xl font-bold mb-2 text-[#6fcf97] font-premium animate-[rotateIn_0.8s_ease-out_0.2s_both]">Book a Ride, Pool & Save</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-md mb-4 font-playfair animate-[fadeSlideUp_0.8s_ease-out_0.4s_both]">
          Instant or advance. One-way or pool. Duo's smart match with up to 15% detour.<br />
          Pay <span className="bg-[#FDE1D3] dark:bg-[#FDE1D3]/30 rounded px-2">₹20–₹25/km</span> — way cheaper than autos.
        </p>
        <div className="flex gap-2 animate-[fadeSlideUp_0.8s_ease-out_0.6s_both]">
          <a 
            href="#wallet" 
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection("wallet"); 
            }}
            className="px-5 py-2 rounded-lg bg-[#94C41A] text-white font-semibold hover:bg-[#0EA5E9] transition-all duration-500 flex items-center gap-2 hover:gap-3 hover:px-6 hover:shadow-lg"
          >
            Next
            <ArrowRight size={17} className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </ThemeSection>

      {/* Section 4: Mitre Rides By Auto */}
      <ThemeSection id="mitre" theme="auto" animationOptions={{ rotateX: 21, translateY: 34 }}>
        <Vehicle3D type="taxi" />
        <h2 className="text-3xl font-extrabold mb-3 text-[#FFD600] font-premium animate-[rotateIn_0.85s_ease-out_both] drop-shadow-lg">Mitre Rides by Auto</h2>
        <p className="text-lg text-[#7C4D03] dark:text-gray-300 font-playfair mb-4 animate-[fadeSlideUp_0.85s_ease-out_0.18s_both]">
          Experience budget-friendly and comfortable auto rides around your city.<br />
          Why pay more? Our <span className="bg-[#FFF9C4]/80 dark:bg-[#FFF9C4]/20 rounded px-2">Mitre Rides by Auto</span> offer fixed fares,
          <strong className="ml-1 text-[#FFAB00]">friendly drivers</strong>, and transparent trips!
        </p>
        <div className="w-full max-w-xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 animate-[fadeScaleIn_0.9s_ease-out_both]">
          <div className="text-center bg-[#FFF8E1]/60 dark:bg-[#FFF8E1]/10 rounded-2xl py-6 px-4 border border-[#FFD600]/40 dark:border-[#FFD600]/20 shadow">
            <span className="block text-xl font-black mb-1 text-[#FFD600] font-premium">₹15/km</span>
            <span className="text-sm text-[#B36A09] dark:text-yellow-300 font-semibold">Best City Rate</span>
          </div>
          <div className="text-center bg-[#FFE082]/60 dark:bg-[#FFE082]/10 rounded-2xl py-6 px-4 border border-[#FFD600]/50 dark:border-[#FFD600]/20 shadow">
            <span className="block text-xl font-black mb-1 text-[#7C4D03] dark:text-yellow-200 font-premium">4.9★</span>
            <span className="text-sm text-[#B36A09] dark:text-yellow-300 font-semibold">Trusted Drivers</span>
          </div>
          <div className="text-center bg-[#FFD54F]/60 dark:bg-[#FFD54F]/10 rounded-2xl py-6 px-4 border border-[#FFD600]/30 dark:border-[#FFD600]/20 shadow col-span-2 md:col-span-1">
            <span className="block text-xl font-black mb-1 text-[#FFAB00] dark:text-yellow-200 font-premium">Call/Book Instantly</span>
            <span className="text-sm text-[#B36A09] dark:text-yellow-300 font-semibold">No Surge Pricing</span>
          </div>
        </div>
      </ThemeSection>

      {/* Section 5: Wallet & Payment */}
      <ThemeSection id="wallet" theme="pink" animationOptions={{ rotateX: 18, translateY: 30 }}>
        <Vehicle3D type="car" />
        <h2 className="text-3xl font-bold mb-2 text-[#FF719A] font-premium animate-[rotateIn_0.8s_ease-out_both]">Secure Wallet & Instant Pay</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 font-playfair animate-[fadeSlideUp_0.8s_ease-out_0.2s_both]">
          Pay with UPI or in-app Duo Wallet via Razorpay/Paytm.<br />
          Drivers track earnings, payouts, and 2% Duo commission in real time.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-2">
          {[
            { value: "2%", label: "Commission only", color: "text-[#F97316] dark:text-orange-400", delay: 0.3 },
            { value: "₹1950", label: "Avg. monthly earning", color: "text-[#8B5CF6] dark:text-purple-400", delay: 0.4 },
            { value: "UPI, Paytm, Wallet", label: "Payout options", color: "text-[#0EA5E9] dark:text-blue-400", delay: 0.5 }
          ].map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-xl border border-white/30 dark:border-slate-700/30 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform-gpu"
              style={{ animation: `fadeScaleIn 0.8s ease-out ${item.delay}s both` }}
            >
              <span className={`font-black text-2xl ${item.color}`}>{item.value}</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">{item.label}</span>
            </div>
          ))}
        </div>
      </ThemeSection>

      {/* Section 6: Admin/Analytics */}
      <ThemeSection id="admin" theme="purple" animationOptions={{ rotateX: 25, translateY: 40 }}>
        <Users size={60} className="text-[#0EA5E9] dark:text-blue-400 mb-2 animate-[fadeScaleIn_0.8s_ease-out_both]" />
        <h2 className="text-3xl font-bold mb-2 text-[#0EA5E9] dark:text-blue-400 font-premium animate-[rotateIn_0.8s_ease-out_0.2s_both]">Duo Admin & Analytics</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mb-6 font-playfair animate-[fadeSlideUp_0.8s_ease-out_0.4s_both]">
          Duo gives you full control: manage users, trips, KYC, stats, support, and payouts.<br />
          <span className="bg-[#D3E4FD]/80 dark:bg-[#D3E4FD]/20 px-2 rounded">Your rides. Your data. Your safety—always.</span>
        </p>
        <div className="w-full flex flex-col md:flex-row gap-8 justify-center items-center">
          {[
            {
              icon: <MapPin size={18} />,
              value: "27,153 trips completed",
              subtext: "and growing daily",
              color: "text-[#7E69AB] dark:text-purple-400",
              delay: 0.5
            },
            {
              icon: <Users size={18} />,
              value: "8,837 registered users",
              subtext: "join the Duo ride",
              color: "text-[#F97316] dark:text-orange-400",
              delay: 0.6
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white/60 dark:bg-slate-800/60 rounded-xl px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex-1 mb-2 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 transform-gpu"
              style={{ animation: `fadeScaleIn 0.8s ease-out ${item.delay}s both` }}
            >
              <div className={`text-lg font-bold flex items-center gap-2 ${item.color} mb-1`}>
                {item.icon}
                {item.value}
              </div>
              <div className={item.color}>{item.subtext}</div>
            </div>
          ))}
        </div>
      </ThemeSection>

      {/* Footer */}
      <footer className="relative w-full py-10 pb-5 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400 bg-white/10 dark:bg-slate-800/10 backdrop-blur-sm border-t border-white/20 dark:border-slate-700/20 font-playfair">
        <div className="animate-[float_5s_ease-in-out_infinite_alternate] transform-gpu">
          <span className="bg-gradient-to-r from-[#9b87f5] to-[#8B5CF6] bg-clip-text text-transparent font-bold">
            &copy; {new Date().getFullYear()} Duo · Built by the community for India
          </span>
          <div className="flex gap-2 mt-2 justify-center">
            <a 
              href="#welcome" 
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection("welcome"); 
              }}
              className="text-gray-400 hover:text-[#8B5CF6] dark:hover:text-purple-400 hover:underline text-xs transition-colors"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
