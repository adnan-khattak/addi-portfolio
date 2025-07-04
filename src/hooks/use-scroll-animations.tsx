import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { useInView } from '@/lib/framer-motion';

interface UseScrollAnimationsProps {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

// Global reduced motion state to avoid multiple listeners
let globalPrefersReducedMotion: boolean | null = null;
const motionListeners = new Set<(value: boolean) => void>();

const initializeMotionDetection = () => {
  if (globalPrefersReducedMotion !== null) return;
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  globalPrefersReducedMotion = mediaQuery.matches;
  
  const handleChange = (event: MediaQueryListEvent) => {
    globalPrefersReducedMotion = event.matches;
    motionListeners.forEach(listener => listener(event.matches));
  };
  
  mediaQuery.addEventListener('change', handleChange);
  
  // Cleanup function
  return () => {
    mediaQuery.removeEventListener('change', handleChange);
  };
};

export const useScrollAnimations = ({
  threshold = 0.1,
  triggerOnce = true,
}: Omit<UseScrollAnimationsProps, 'rootMargin'> = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    globalPrefersReducedMotion ?? false
  );

  useEffect(() => {
    initializeMotionDetection();
    
    if (globalPrefersReducedMotion !== null) {
      setPrefersReducedMotion(globalPrefersReducedMotion);
    }
    
    const listener = (value: boolean) => setPrefersReducedMotion(value);
    motionListeners.add(listener);
    
    return () => {
      motionListeners.delete(listener);
    };
  }, []);

  // Memoize animation variants to prevent unnecessary re-calculations
  const variants = useMemo(() => {
    const commonTransition = { 
      duration: prefersReducedMotion ? 0.1 : 0.6, 
      ease: "easeOut" as const
    };

    return {
      fadeIn: {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
        animate: { 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : (prefersReducedMotion ? 0 : 30) 
        },
        transition: commonTransition,
      },
      slideUp: {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 50 },
        animate: { 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : (prefersReducedMotion ? 0 : 50) 
        },
        transition: { 
          duration: prefersReducedMotion ? 0.1 : 0.8, 
          ease: "easeOut" as const
        },
      },
      slideLeft: {
        initial: { opacity: 0, x: prefersReducedMotion ? 0 : 50 },
        animate: { 
          opacity: isInView ? 1 : 0, 
          x: isInView ? 0 : (prefersReducedMotion ? 0 : 50) 
        },
        transition: { 
          duration: prefersReducedMotion ? 0.1 : 0.7, 
          ease: "easeOut" as const
        },
      },
      slideRight: {
        initial: { opacity: 0, x: prefersReducedMotion ? 0 : -50 },
        animate: { 
          opacity: isInView ? 1 : 0, 
          x: isInView ? 0 : (prefersReducedMotion ? 0 : -50) 
        },
        transition: { 
          duration: prefersReducedMotion ? 0.1 : 0.7, 
          ease: "easeOut" as const
        },
      },
      scale: {
        initial: { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 },
        animate: { 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : (prefersReducedMotion ? 1 : 0.8) 
        },
        transition: commonTransition,
      },
      stagger: {
        initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
        animate: { 
          opacity: isInView ? 1 : 0, 
          y: isInView ? 0 : (prefersReducedMotion ? 0 : 20) 
        },
        transition: { 
          duration: prefersReducedMotion ? 0.1 : 0.5, 
          ease: "easeOut" as const
        },
      },
    };
  }, [isInView, prefersReducedMotion]);

  return {
    ref,
    isInView,
    prefersReducedMotion,
    variants,
  };
};

// Stagger container for multiple elements
export const useStaggeredAnimations = (
  childrenCount: number,
  staggerDelay: number = 0.1
) => {
  const { ref, isInView, prefersReducedMotion } = useScrollAnimations();

  const containerVariants = useMemo(() => ({
    animate: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  }), [prefersReducedMotion, staggerDelay]);

  const childVariants = useMemo(() => ({
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.5, 
        ease: "easeOut" as const
      }
    },
  }), [prefersReducedMotion]);

  return {
    ref,
    isInView,
    prefersReducedMotion,
    containerVariants,
    childVariants,
  };
};

// Optimized parallax scroll hook with throttling
export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    globalPrefersReducedMotion ?? false
  );

  const handleScroll = useCallback(() => {
    if (!prefersReducedMotion) {
      setOffsetY(window.pageYOffset);
    }
  }, [prefersReducedMotion]);

  useEffect(() => {
    initializeMotionDetection();
    
    if (globalPrefersReducedMotion !== null) {
      setPrefersReducedMotion(globalPrefersReducedMotion);
    }
    
    const listener = (value: boolean) => setPrefersReducedMotion(value);
    motionListeners.add(listener);

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });

    return () => {
      motionListeners.delete(listener);
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [handleScroll]);

  return prefersReducedMotion ? 0 : offsetY * speed;
}; 