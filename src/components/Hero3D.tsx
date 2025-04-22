
import React from "react";
import { CarFront, Bike, Users, MapPin } from "lucide-react";

// Rotating cube (CSS) for landing, use lucide icons for themed sections.
const RotatingCube = () => (
  <div className="relative w-32 h-32 flex items-center justify-center mb-6">
    <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect
          x="15"
          y="15"
          width="70"
          height="70"
          rx="18"
          fill="url(#duograd1)"
          stroke="#8B5CF6"
          strokeWidth="5"
        />
        <defs>
          <linearGradient id="duograd1" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E5DEFF" />
            <stop offset="1" stopColor="#9b87f5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <svg width="64" height="64" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="12" fill="#fff8" />
      </svg>
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <CarFront size={48} className="text-[#8B5CF6]" />
    </div>
  </div>
);

export const Vehicle3D = ({ type }: { type: "car" | "bike" | "users" }) => (
  <div className="mb-4">
    {type === "car" && <CarFront size={60} className="text-[#8B5CF6] drop-shadow-lg animate-bounce" />}
    {type === "bike" && <Bike size={60} className="text-[#F97316] drop-shadow-lg animate-bounce" />}
    {type === "users" && <Users size={60} className="text-[#0EA5E9] drop-shadow-lg animate-bounce" />}
  </div>
);

export const Hero3D = RotatingCube;
