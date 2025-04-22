
import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import useInView3D, { InView3DOptions } from "@/components/useInView3D";

interface ThemeSectionProps {
  id: string;
  theme: "purple" | "peach" | "mint" | "auto" | "pink" | "blue";
  children: React.ReactNode;
  animationOptions?: InView3DOptions;
  className?: string;
}

/**
 * ThemeSection - Themed section container with 3D scroll effects
 */
const ThemeSection: React.FC<ThemeSectionProps> = ({ 
  id, 
  theme = "purple", 
  children,
  animationOptions,
  className 
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { inView, scrollYProgress, style: animationStyle } = useInView3D(ref, animationOptions);

  // Theme-based styles
  const bgGradient = 
    theme === "purple" ? "from-[#F6EDFF] to-[#F1EBFF] dark:from-slate-900 dark:to-slate-800" :
    theme === "peach" ? "from-[#FFF3EA] to-[#FFECD8] dark:from-slate-900 dark:to-slate-800" :
    theme === "mint" ? "from-[#EAFFF4] to-[#E1FFEF] dark:from-slate-900 dark:to-slate-800" :
    theme === "auto" ? "from-[#FFFCE6] to-[#FFF9C4] dark:from-slate-900 dark:to-slate-800" :
    theme === "pink" ? "from-[#FFF1F7] to-[#FFE4F0] dark:from-slate-900 dark:to-slate-800" :
    "from-[#EDF5FF] to-[#E5EEFF] dark:from-slate-900 dark:to-slate-800"; // Blue default

  const shadowColor = 
    theme === "purple" ? "shadow-purple-200/50 dark:shadow-purple-900/20" :
    theme === "peach" ? "shadow-orange-200/50 dark:shadow-orange-900/20" :
    theme === "mint" ? "shadow-green-200/50 dark:shadow-green-900/20" :
    theme === "auto" ? "shadow-yellow-200/50 dark:shadow-yellow-900/20" :
    theme === "pink" ? "shadow-pink-200/50 dark:shadow-pink-900/20" :
    "shadow-blue-200/50 dark:shadow-blue-900/20"; // Blue default

  const innerGlow = 
    theme === "purple" ? "bg-[#E9DFFF]/50 dark:bg-purple-900/10" :
    theme === "peach" ? "bg-[#FFEAD8]/50 dark:bg-orange-900/10" :
    theme === "mint" ? "bg-[#D9FFEA]/50 dark:bg-green-900/10" :
    theme === "auto" ? "bg-[#FFF7D6]/50 dark:bg-yellow-900/10" :
    theme === "pink" ? "bg-[#FFE0ED]/50 dark:bg-pink-900/10" :
    "bg-[#DCE9FF]/50 dark:bg-blue-900/10"; // Blue default

  // Duration based on theme for staggered animations
  const animDuration = 
    theme === "purple" ? "duration-500" :
    theme === "peach" ? "duration-600" :
    theme === "mint" ? "duration-800" :
    theme === "auto" ? "duration-700" :
    "duration-700";

  // Add keyframe for shine effect in theme toggle button
  useEffect(() => {
    if (typeof document !== "undefined") {
      // Check if the style exists already to avoid duplicates
      const existingStyle = document.getElementById("shine-keyframe-style");
      if (!existingStyle) {
        const style = document.createElement("style");
        style.id = "shine-keyframe-style";
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
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "relative min-h-screen w-full flex flex-col items-center justify-center py-20 md:py-28 px-6 overflow-hidden bg-gradient-to-b",
        bgGradient,
        className
      )}
      style={{ scrollSnapAlign: "start" }}
    >
      {/* Background inner glow */}
      <div 
        className={cn(
          "absolute inset-x-0 top-1/4 h-1/2 rounded-full blur-3xl -z-10",
          innerGlow
        )}
      />

      {/* Content card with 3D effect */}
      <div 
        className={cn(
          "relative max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10 p-2",
          shadowColor,
          animDuration
        )}
        style={animationStyle}
      >
        {children}
      </div>
    </section>
  );
};

export default ThemeSection;
