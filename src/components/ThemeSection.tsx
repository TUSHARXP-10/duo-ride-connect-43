
import React from "react";

// ThemeType for clarity and extension
type ThemeType = "purple" | "peach" | "mint" | "pink";

interface ThemeSectionProps {
  id?: string;
  theme: ThemeType;
  children: React.ReactNode;
  className?: string;
}

const themeConfig: Record<ThemeType, {
  bg: string;
  overlay?: React.ReactNode;
}> = {
  purple: {
    bg: "bg-gradient-to-b from-[#E5DEFF] via-[#9b87f5]/30 to-[#F1F0FB]",
    overlay: (
      <svg className="absolute left-0 right-0 top-0 -z-1 w-full h-full pointer-events-none" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="purpleWaves" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#6E59A5" stopOpacity="0.12" />
          </linearGradient>
        </defs>
        <path fill="url(#purpleWaves)" fillOpacity="1" d="M0,96L40,128C80,160,160,224,240,229.3C320,235,400,181,480,186.7C560,192,640,256,720,272C800,288,880,256,960,240C1040,224,1120,224,1200,197.3C1280,171,1360,117,1400,90.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"/>
      </svg>
    )
  },
  peach: {
    bg: "bg-gradient-to-tr from-[#FDE1D3] via-[#FFDEE2] to-[#FFD1BA]",
    overlay: (
      <svg className="absolute right-0 -top-12 w-[650px] h-[400px] pointer-events-none opacity-70" viewBox="0 0 600 400">
        <ellipse cx="300" cy="200" rx="280" ry="120" fill="#FFA99F" fillOpacity="0.15" />
        <ellipse cx="360" cy="140" rx="240" ry="100" fill="#F97316" fillOpacity="0.10" />
      </svg>
    )
  },
  mint: {
    bg: "bg-gradient-to-br from-[#D3E4FD] via-[#F2FCE2] to-[#FEF7CD]",
    overlay: (
      <svg className="absolute left-0 bottom-0 w-full h-44 pointer-events-none" viewBox="0 0 1440 160">
        <defs>
          <linearGradient id="mintWave" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#BFFFCF" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#F2FCE2" stopOpacity="0.18" />
          </linearGradient>
        </defs>
        <path fill="url(#mintWave)" d="M0,128L48,112C96,96,192,64,288,58.7C384,53,480,75,576,101.3C672,128,768,160,864,170.7C960,181,1056,171,1152,138.7C1248,107,1344,53,1392,26.7L1440,0V160H0Z" />
      </svg>
    )
  },
  pink: {
    bg: "bg-gradient-to-tl from-[#FFE29F] via-[#FFA99F] to-[#FF719A]",
    overlay: (
      <svg className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-40 pointer-events-none" viewBox="0 0 700 160">
        <circle cx="350" cy="80" r="80" fill="#FF719A" fillOpacity="0.16" />
        <ellipse cx="500" cy="40" rx="120" ry="40" fill="#D946EF" fillOpacity="0.12" />
      </svg>
    )
  },
};

const sectionConnector: Record<ThemeType, React.ReactNode> = {
  purple: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,50 Q300,110 800,40 T1600,60 L1600,100 L0,100Z" fill="#FFDEE2" fillOpacity="0.30" />
      </svg>
    </div>
  ),
  peach: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,70 Q400,10 900,70 T1600,60 L1600,100 L0,100Z" fill="#F2FCE2" fillOpacity="0.22" />
      </svg>
    </div>
  ),
  mint: (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[96vw] h-24 flex items-end z-10 pointer-events-none">
      <svg width="100%" height="100%" viewBox="0 0 1600 100" preserveAspectRatio="none" fill="none">
        <path d="M0,40 Q350,120 850,55 T1600,80 L1600,100 L0,100Z" fill="#FF719A" fillOpacity="0.17" />
      </svg>
    </div>
  ),
  pink: null, // Last section has no connector
};

const ThemeSection: React.FC<ThemeSectionProps> = ({ id, theme, children, className = "" }) => {
  const { bg, overlay } = themeConfig[theme];

  return (
    <section
      id={id}
      className={`
        relative min-h-screen w-full flex flex-col justify-center items-center py-20 px-4 lg:px-0 scroll-mt-28
        ${bg} transition-all duration-700 ease-in-out ${className}
      `}
      style={{
        scrollSnapAlign: "start",
      }}
    >
      {/* 3D Animated Background, unique per theme */}
      {overlay && overlay}

      {/* Interior content */}
      <div className="w-full max-w-4xl glass-morphism p-10 rounded-3xl shadow-2xl flex flex-col items-center animate-fade-in bg-white/80 backdrop-blur-lg relative z-20">
        {children}
      </div>

      {/* Connecting Curve/liner to blend themes */}
      {sectionConnector[theme]}
    </section>
  );
};

export default ThemeSection;
