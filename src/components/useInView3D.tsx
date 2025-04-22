
import { useState, useEffect, useRef } from "react";

export interface InView3DOptions {
  threshold?: number;
  margin?: string;
  once?: boolean;
  delay?: number;
  rotateX?: number;
  translateY?: number;
  scale?: number;
  blur?: number;
}

export default function useInView3D(
  ref: React.RefObject<HTMLElement>, 
  options: InView3DOptions = {}
) {
  const [isInView, setIsInView] = useState(false);
  const alreadyVisible = useRef(false);
  
  const {
    threshold = 0.36,
    margin = "0px 0px -20% 0px",
    once = true,
    delay = 0,
    rotateX = 21,
    translateY = 32,
    scale = 0.95,
    blur = 6
  } = options;

  useEffect(() => {
    if (!ref.current) return;
    
    // If we've already made this visible and once is true, don't re-observe
    if (once && alreadyVisible.current) {
      setIsInView(true);
      return;
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      
      if (entry.isIntersecting) {
        if (delay) {
          setTimeout(() => {
            setIsInView(true);
            alreadyVisible.current = true;
          }, delay);
        } else {
          setIsInView(true);
          alreadyVisible.current = true;
        }
      } else if (!once) {
        setIsInView(false);
      }
    };

    const observer = new window.IntersectionObserver(
      handleIntersection,
      {
        threshold,
        rootMargin: margin,
      }
    );
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [ref, threshold, margin, once, delay]);

  // Get animation style values for custom animations
  const getAnimationValues = () => ({
    rotateX,
    translateY,
    scale,
    blur
  });

  return { isInView, animValues: getAnimationValues() };
}
