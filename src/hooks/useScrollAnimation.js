import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation
 * Returns a ref and a boolean indicating if the element is in the viewport.
 * @param {Object} options - Intersection Observer options (root, rootMargin, threshold)
 * @returns {[ref, isVisible]}
 */
export default function useScrollAnimation(options = { threshold: 0.1 }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) observer.unobserve(ref.current);
      observer.disconnect();
    };
  }, [ref, options]);

  return [ref, isVisible];
} 