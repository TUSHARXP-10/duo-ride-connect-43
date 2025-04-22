
import React, { useEffect, useRef, useState } from "react";
import { CarFront, Bike, Users, MapPin } from "lucide-react";

// Rotating 3D cube with animation
const RotatingCube = () => {
  const cubeRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  
  // Track mouse movement to create interactive rotation effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cubeRef.current) return;
      const { clientX, clientY } = e;
      const { width, height } = cubeRef.current.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;
      
      // Calculate rotation based on mouse position relative to center
      const newRotateY = ((clientX - centerX) / centerX) * 25;
      const newRotateX = ((clientY - centerY) / centerY) * 25;
      
      // Apply with smoothing
      setRotateY(newRotateY);
      setRotateX(-newRotateX);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={cubeRef}
      className="relative w-40 h-40 flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110"
      style={{ transformStyle: 'preserve-3d', transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
    >
      {/* Cube faces */}
      <div className="absolute w-full h-full animate-[spin_12s_linear_infinite]">
        <div 
          className="absolute w-full h-full transform-gpu"
          style={{ 
            transformStyle: 'preserve-3d', 
            transform: 'translateZ(0)'
          }}
        >
          {/* Front face */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] rounded-xl border-2 border-white/20 shadow-lg transform-gpu" style={{ transform: 'translateZ(70px)' }}>
            <CarFront size={48} className="text-white drop-shadow-md" />
          </div>
          
          {/* Back face */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#ff7171] to-[#ffa06b] rounded-xl border-2 border-white/20 shadow-lg transform-gpu" style={{ transform: 'translateZ(-70px) rotateY(180deg)' }}>
            <Bike size={48} className="text-white drop-shadow-md" />
          </div>
          
          {/* Left face */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#6fcf97] to-[#9af8e2] rounded-xl border-2 border-white/20 shadow-lg transform-gpu" style={{ transform: 'translateX(-70px) rotateY(-90deg)' }}>
            <MapPin size={48} className="text-white drop-shadow-md" />
          </div>
          
          {/* Right face */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#FF719A] to-[#FFA0CB] rounded-xl border-2 border-white/20 shadow-lg transform-gpu" style={{ transform: 'translateX(70px) rotateY(90deg)' }}>
            <Users size={48} className="text-white drop-shadow-md" />
          </div>
          
          {/* Top face */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8B5CF6] to-[#D6BCFA] rounded-xl border-2 border-white/20 shadow-lg transform-gpu" style={{ transform: 'translateY(-70px) rotateX(90deg)' }}>
            <div className="text-2xl font-bold text-white drop-shadow-md">DUO</div>
          </div>
          
          {/* Bottom face */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#220057] to-[#5325a0] rounded-xl border-2 border-white/20 shadow-lg transform-gpu" style={{ transform: 'translateY(70px) rotateX(-90deg)' }}>
            <div className="text-xl font-bold text-white drop-shadow-md">2%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Vehicle3DFloat = ({ type, delay = 0 }: { type: "car" | "bike" | "users"; delay?: number }) => {
  const iconRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  
  const iconColor = 
    type === "car" ? "text-[#8B5CF6]" :
    type === "bike" ? "text-[#F97316]" :
    "text-[#0EA5E9]";
  
  const shadowColor = 
    type === "car" ? "drop-shadow-[0_10px_15px_rgba(139,92,246,0.3)]" :
    type === "bike" ? "drop-shadow-[0_10px_15px_rgba(249,115,22,0.3)]" :
    "drop-shadow-[0_10px_15px_rgba(14,165,233,0.3)]";
    
  return (
    <div 
      ref={iconRef}
      className={`
        relative mb-4 transform-gpu transition-all duration-700 ease-in-out
        ${hover ? 'scale-110' : 'scale-100'}
      `}
      style={{ 
        animationDelay: `${delay}s`,
        animation: 'float 5s ease-in-out infinite alternate'
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className={`relative p-6 ${hover ? 'animate-[pulse_1.5s_ease-in-out_infinite]' : ''}`}>
        {type === "car" && <CarFront size={60} className={`${iconColor} ${shadowColor}`} />}
        {type === "bike" && <Bike size={60} className={`${iconColor} ${shadowColor}`} />}
        {type === "users" && <Users size={60} className={`${iconColor} ${shadowColor}`} />}
        
        {/* Glow effect on hover */}
        <div className={`
          absolute inset-0 rounded-full bg-current opacity-0 transition-opacity duration-300 blur-xl -z-10
          ${hover ? 'opacity-20' : 'opacity-0'}
          ${iconColor}
        `}></div>
      </div>
      
      {/* Reflection */}
      <div className={`
        absolute -bottom-10 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full
        transform-gpu scale-x-75 opacity-20 blur-sm
        ${iconColor}
      `}></div>
    </div>
  );
};

export const Vehicle3D = ({ type }: { type: "car" | "bike" | "users" }) => (
  <Vehicle3DFloat type={type} delay={Math.random()} />
);

export const Hero3D = RotatingCube;
