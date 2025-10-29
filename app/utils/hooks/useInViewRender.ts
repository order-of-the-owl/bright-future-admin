'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * Hook that triggers rendering only when the element enters the viewport.
 * 
 * @param threshold - Portion of the element that must be visible before triggering (default: 0.2)
 * @returns [ref, isVisible]
 */
export const useInViewRender = (
  threshold: number = 0.2
): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

