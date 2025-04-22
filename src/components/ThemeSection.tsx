
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import useInView3D from "@/components/useInView3D";

type ThemeType = "purple" | "peach" | "mint" | "pink";

interface ThemeSectionProps {
  id?: string;
  theme: ThemeType;
  children: React.ReactNode;
  className?: string;
}

const themeConfig: Record<ThemeType, { bg: string; overlay?: React.ReactNode; border?: string }> = {
  purple: {
    bg: "bg-gradient-to-br from-[#220057] via-[#6e59a5]/70 to-[#9b87f5]/80",
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
    border: "border-[#5325a0]/60"
  },
  peach: {
    bg: "bg-gradient-to-tr from-[#ffd7b5] via-[#ffa06b]/80 to-[#ff7171]/80",
    overlay: (
      <svg className="absolute right-0 top-0 w-5/12 h-3/4 opacity-80 pointer-events-none" viewBox="0 0 400 350">
        <ellipse cx="200" cy="170" rx="180" ry="100" fill="#FF719A" fillOpacity="0.12" />
        <ellipse cx="260" cy="110" rx="110" ry="60" fill="#FFA06B" fillOpacity="0.17" />
      </svg>
    ),
    border: "border-[#FF9E69]/60"
  },
  mint: {
    bg: "bg-gradient-to-bl from-[#cde4b5] via-[#9af8e2]/80 to-[#6fcf97]/90",
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
    border: "border-[#50cfa0]/50"
  },
  pink: {
    bg: "bg-gradient-to-tl from-[#FFE2F2] via-[#FFA0CB]/90 to-[#FF719A]/80",
    overlay: (
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-40 pointer-events-none" viewBox="0 0 700 160">
        <circle cx="350" cy="80" r="80" fill="#FF719A" fillOpacity="0.17" />
        <ellipse cx="500" cy="40" rx="110" ry="35" fill="#EC4899" fillOpacity="0.10" />
      </svg>
    ),
    border: "border-[#EE78A7]/50"
  }
};

const sectionConnector: Record<ThemeType, React.ReactNode> = {
  purple: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,50 Q300,110 800,40 T1600,60 L1600,100 L0,100Z" fill="#FFD7B5" fillOpacity="0.33" />
      </svg>
    </div>
  ),
  peach: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,70 Q400,10 900,70 T1600,60 L1600,100 L0,100Z" fill="#CDE4B5" fillOpacity="0.28" />
      </svg>
    </div>
  ),
  mint: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,40 Q350,120 850,55 T1600,80 L1600,100 L0,100Z" fill="#FFA0CB" fillOpacity="0.17" />
      </svg>
    </div>
  ),
  pink: null,
};

const ThemeSection: React.FC<ThemeSectionProps> = ({ id, theme, children, className = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  // InView triggers animate-3d-in class when visible
  const isInView = useInView3D(ref);

  const { bg, overlay, border } = themeConfig[theme];

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        `theme-section-3d relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-4 lg:px-0 scroll-mt-28
        ${bg} transition-all duration-700 ease-in-out ${className}`,
        isInView ? "animate-3d-in" : "opacity-0 translate-y-20 scale-[0.97] rotate-x-12 pointer-events-none"
      )}
      style={{ scrollSnapAlign: "start" }}
    >
      {/* 3D Animated Background */}
      {overlay && overlay}
      {/* Interior */}
      <div className={cn(
        `w-full max-w-4xl glass-morphism p-10 rounded-3xl shadow-2xl flex flex-col items-center bg-white/80 backdrop-blur-lg relative z-20 border`,
        border,
        `duration-700 transition-all`
      )}>
        {children}
      </div>
      {/* Curve */}
      {sectionConnector[theme]}
    </section>
  );
};

export default ThemeSection;
