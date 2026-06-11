import React from 'react';

const Card = ({ children, className = '', variant = 'default', shadow = 'md', rounded = 'lg', hoverEffect = 'none' }) => {
  const baseClasses = 'transition-all duration-300';

  const variants = {
    default: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    gradient: 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700',
    outline: 'bg-transparent border-2 border-gray-300 dark:border-gray-600',
  };

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const roundness = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  const hoverEffects = {
    none: '',
    lift: 'hover:-translate-y-1',
    shadow: 'hover:shadow-xl',
    liftAndShadow: 'hover:-translate-y-1 hover:shadow-xl',
    glow: 'hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] dark:hover:shadow-[0_0_15px_rgba(96,165,250,0.4)]',
  };

  const classes = [
    baseClasses,
    variants[variant],
    shadows[shadow],
    roundness[rounded],
    hoverEffects[hoverEffect],
    className,
  ].join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-4 md:p-6 ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-4 md:p-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

export default Card; 