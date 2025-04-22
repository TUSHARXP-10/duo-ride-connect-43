
import { useState, useEffect } from "react";

export default function useInView3D(ref: React.RefObject<HTMLElement>, margin = "0px 0px -20% 0px") {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.36,
        rootMargin: margin,
      }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, margin]);

  return isInView;
}
