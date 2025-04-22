
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import useInView3D, { InView3DOptions } from "@/components/useInView3D";

type ThemeType = "purple" | "peach" | "mint" | "pink" | "auto";

interface ThemeSectionProps {
  id?: string;
  theme: ThemeType;
  children: React.ReactNode;
  className?: string;
  animationOptions?: InView3DOptions;
}

interface ThemeConfig {
  bg: string;
  darkBg?: string;
  overlay?: React.ReactNode;
  border?: string;
}

const themeConfig: Record<ThemeType, ThemeConfig> = {
  purple: {
    bg: "bg-gradient-to-br from-[#220057] via-[#6e59a5]/70 to-[#9b87f5]/80",
    darkBg: "dark:bg-gradient-to-br dark:from-[#15062d] dark:via-[#2e263d]/90 dark:to-[#3b2e5e]/90",
    overlay: (
      <svg className="absolute left-0 top-0 w-full h-full -z-1 pointer-events-none" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="purpleWaves" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a084eb" stopOpacity="0.13" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <path fill="url(#purpleWaves)" d="M0,128L36.6,117.3C73.2,107,146,85,218,85.3C290,85,363,107,436,133.3C508,160,581,192,653,181.3C726,171,798,117,871,112C943,107,1016,149,1089,149.3C1161,149,1234,107,1307,128C1379,149,1452,235,1515,256L1518,320L0,320Z"/>
      </svg>
    ),
    border: "border-[#5325a0]/60 dark:border-purple-900/40"
  },
  peach: {
    bg: "bg-gradient-to-tr from-[#ffd7b5] via-[#ffa06b]/80 to-[#ff7171]/80",
    darkBg: "dark:bg-gradient-to-tr dark:from-[#472d20] dark:via-[#583f35]/90 dark:to-[#5e3939]/90",
    overlay: (
      <svg className="absolute right-0 top-0 w-5/12 h-3/4 opacity-80 pointer-events-none" viewBox="0 0 400 350">
        <ellipse cx="200" cy="170" rx="180" ry="100" fill="#FF719A" fillOpacity="0.12" />
        <ellipse cx="260" cy="110" rx="110" ry="60" fill="#FFA06B" fillOpacity="0.17" />
      </svg>
    ),
    border: "border-[#FF9E69]/60 dark:border-orange-900/40"
  },
  mint: {
    bg: "bg-gradient-to-bl from-[#cde4b5] via-[#9af8e2]/80 to-[#6fcf97]/90",
    darkBg: "dark:bg-gradient-to-bl dark:from-[#2a3825] dark:via-[#1b4035]/90 dark:to-[#1b4028]/90",
    overlay: (
      <svg className="absolute left-0 bottom-0 w-full h-44 pointer-events-none" viewBox="0 0 1440 160">
        <defs>
          <linearGradient id="mintWave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#AEE9D1" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#E2FFC7" stopOpacity="0.22" />
          </linearGradient>
        </defs>
        <path fill="url(#mintWave)" d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,75,576,101.3C672,128,768,160,864,170.7C960,181,1056,171,1152,138.7C1248,107,1344,53,1392,26.7L1440,0V160H0Z" />
      </svg>
    ),
    border: "border-[#50cfa0]/50 dark:border-green-900/40"
  },
  pink: {
    bg: "bg-gradient-to-tl from-[#FFE2F2] via-[#FFA0CB]/90 to-[#FF719A]/80",
    darkBg: "dark:bg-gradient-to-tl dark:from-[#402b38] dark:via-[#4d2d40]/90 dark:to-[#592637]/90",
    overlay: (
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-40 pointer-events-none" viewBox="0 0 700 160">
        <circle cx="350" cy="80" r="80" fill="#FF719A" fillOpacity="0.17" />
        <ellipse cx="500" cy="40" rx="110" ry="35" fill="#EC4899" fillOpacity="0.10" />
      </svg>
    ),
    border: "border-[#EE78A7]/50 dark:border-pink-900/40"
  },
  auto: {
    bg: "bg-gradient-to-br from-[#FDF6B2] via-[#FFD600]/90 to-[#FFAB00]/60",
    darkBg: "dark:bg-gradient-to-br dark:from-[#3d3926] dark:via-[#5e4f00]/90 dark:to-[#593d00]/90",
    overlay: (
      <svg className="absolute right-0 top-0 w-4/12 h-3/4 opacity-70 pointer-events-none" viewBox="0 0 420 220">
        <rect x="20" y="40" width="380" height="80" rx="40" fill="#FFD600" fillOpacity="0.12" />
        <ellipse cx="330" cy="90" rx="60" ry="28" fill="#FFAB00" fillOpacity="0.18" />
      </svg>
    ),
    border: "border-[#FFD600]/70 dark:border-yellow-900/40"
  }
};

const sectionConnector: Record<ThemeType, React.ReactNode> = {
  purple: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none transform-gpu">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,50 Q300,110 800,40 T1600,60 L1600,100 L0,100Z" fill="#FFD7B5" fillOpacity="0.33" />
      </svg>
    </div>
  ),
  peach: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none transform-gpu">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,70 Q400,10 900,70 T1600,60 L1600,100 L0,100Z" fill="#CDE4B5" fillOpacity="0.28" />
      </svg>
    </div>
  ),
  mint: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none transform-gpu">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,40 Q350,120 850,55 T1600,80 L1600,100 L0,100Z" fill="#FFA0CB" fillOpacity="0.17" />
      </svg>
    </div>
  ),
  pink: null,
  auto: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-20 flex items-end z-10 pointer-events-none transform-gpu">
      <svg width="100%" height="100%" viewBox="0 0 1600 80" preserveAspectRatio="none" fill="none">
        <path d="M0,40 Q400,90 900,30 T1600,70 L1600,80 L0,80Z" fill="#FDE1D3" fillOpacity="0.18" />
      </svg>
    </div>
  )
};

const ThemeParticles = ({ theme, count = 20 }: { theme: ThemeType; count?: number }) => {
  const particleColors: Record<ThemeType, string[]> = {
    purple: ['#9b87f5', '#5325a0', '#7E69AB'],
    peach: ['#ff9a76', '#ffd7b5', '#ff7171'],
    mint: ['#6fcf97', '#9af8e2', '#cde4b5'],
    pink: ['#FFA0CB', '#FF719A', '#FFE2F2'],
    auto: ['#FFD600', '#FFAB00', '#FDF6B2']
  };

  const colors = particleColors[theme];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 40 + 10;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = Math.random() * 20 + 15;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        return (
          <div 
            key={i}
            className="absolute rounded-full opacity-20 transform-gpu blur-md"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              left: `${posX}%`,
              top: `${posY}%`,
              animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`
            }}
          />
        );
      })}
    </div>
  );
};

const ThemeSection: React.FC<ThemeSectionProps> = ({
  id,
  theme,
  children,
  className = "",
  animationOptions
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { isInView, animValues } = useInView3D(ref, {
    threshold: 0.25,
    rotateX:
      theme === "purple" ? 25 :
      theme === "peach" ? 20 :
      theme === "mint" ? 22 :
      theme === "auto" ? 21 :
      18,
    translateY:
      theme === "purple" ? 40 :
      theme === "peach" ? 35 :
      theme === "mint" ? 38 :
      theme === "auto" ? 34 :
      30,
    scale: 0.92,
    blur: 8,
    ...animationOptions
  });

  const { bg, overlay, border } = themeConfig[theme];
  const transitionDuration =
    theme === "purple" ? "duration-1000" :
    theme === "peach" ? "duration-900" :
    theme === "mint" ? "duration-800" :
    theme === "auto" ? "duration-700" :
    "duration-700";

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        `theme-section-3d relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-4 lg:px-0 scroll-mt-16
        ${bg} ${themeConfig[theme].darkBg || ''} transition-all ${transitionDuration} ease-out will-change-transform will-change-opacity ${className}`,
        isInView ? "animate-3d-in" : "opacity-0 pointer-events-none"
      )}
      style={{
        scrollSnapAlign: "start",
        transform: !isInView ?
          `perspective(1600px) rotateX(${animValues.rotateX}deg) translateY(${animValues.translateY}px) scale(${animValues.scale})` :
          "none",
        filter: !isInView ? `blur(${animValues.blur}px)` : "none"
      }}
    >
      <ThemeParticles theme={theme} />
      {overlay && overlay}
      <div className={cn(
        `w-full max-w-4xl glass-morphism p-10 rounded-3xl shadow-2xl flex flex-col items-center bg-white/80 dark:bg-slate-800/70 backdrop-blur-lg relative z-20 border transform-gpu transition-all
        ${border} ${transitionDuration}`,
        isInView ? "scale-100 translate-y-0 opacity-100" : "scale-95 translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: "100ms", fontFamily: "Playfair Display, serif" }}>
        {children}
      </div>
      <div className={cn(
        "transition-all duration-1000",
        isInView ? "opacity-100" : "opacity-0"
      )}
      style={{ transitionDelay: "300ms" }}>
        {sectionConnector[theme]}
      </div>
    </section>
  );
};

// Add keyframe for shine effect in theme toggle button
if (typeof document !== "undefined") {
  if (!document.querySelector("@keyframes shine")) {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes shine {
        from {
          transform: translateX(-200%);
        }
        to {
          transform: translateX(200%);
        }
      }
    `;
    document.head.appendChild(style);
  }
}

export default ThemeSection;
