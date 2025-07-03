import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface UseScrollAnimationsProps {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimations = ({
  threshold = 0.1,
  triggerOnce = true,
}: Omit<UseScrollAnimationsProps, 'rootMargin'> = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once: triggerOnce,
  });

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Animation variants for different effects
  const variants = {
    fadeIn: {
      initial: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
      animate: { 
        opacity: isInView ? 1 : 0, 
        y: isInView ? 0 : (prefersReducedMotion ? 0 : 30) 
      },
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.6, 
        ease: "easeOut" as const
      },
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
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.6, 
        ease: "easeOut" as const
      },
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

  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : staggerDelay,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.5, 
        ease: "easeOut" as const
      }
    },
  };

  return {
    ref,
    isInView,
    prefersReducedMotion,
    containerVariants,
    childVariants,
  };
};

// Parallax scroll hook for subtle background movement
export const useParallax = (speed: number = 0.5) => {
  const [offsetY, setOffsetY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    const handleScroll = () => {
      if (!prefersReducedMotion) {
        setOffsetY(window.pageYOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prefersReducedMotion]);

  return prefersReducedMotion ? 0 : offsetY * speed;
}; 