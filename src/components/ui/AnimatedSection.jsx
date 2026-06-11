// src/components/ui/AnimatedSection.jsx
import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'slide-up':
          return `${baseClasses} transform translateY-20 opacity-0`;
        case 'slide-down':
          return `${baseClasses} transform -translateY-20 opacity-0`;
        case 'slide-left':
          return `${baseClasses} transform translateX-20 opacity-0`;
        case 'slide-right':
          return `${baseClasses} transform -translateX-20 opacity-0`;
        case 'scale':
          return `${baseClasses} transform scale-95 opacity-0`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} transform translate-0 scale-100 opacity-100`;
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
};

export default AnimatedSection;