
import React from "react";

interface ThemeSectionProps {
  id?: string;
  gradient: string;
  children: React.ReactNode;
  className?: string;
}

const ThemeSection: React.FC<ThemeSectionProps> = ({ id, gradient, children, className = "" }) => (
  <section
    id={id}
    className={`
      min-h-screen w-full flex flex-col justify-center items-center py-16 px-4 lg:px-0 scroll-mt-28
      ${gradient} transition-all duration-700 ease-in-out
      ${className}
    `}
    style={{
      scrollSnapAlign: "start",
    }}
  >
    <div className="w-full max-w-4xl glass-morphism p-8 rounded-2xl shadow-xl flex flex-col items-center animate-fade-in">
      {children}
    </div>
  </section>
);

export default ThemeSection;
