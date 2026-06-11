// src/utils/constants.js

// Animation durations and delays
export const ANIMATION = {
  DURATION_FAST: 300,
  DURATION_NORMAL: 700,
  DURATION_SLOW: 1200,
  DELAY_SHORT: 100,
  DELAY_MEDIUM: 300,
  DELAY_LONG: 600,
};

// Responsive breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
};

// Section IDs for navigation and scroll
export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
};

// Theme color palette (can be used for custom JS logic)
export const THEME_COLORS = {
  PRIMARY: '#2563eb', // Tailwind blue-600
  SECONDARY: '#7c3aed', // Tailwind purple-600
  ACCENT: '#f59e42', // Tailwind orange-400
  DARK: '#18181b', // Tailwind zinc-900
  LIGHT: '#f9fafb', // Tailwind gray-50
};

// Example: Social icon mapping (for dynamic rendering)
export const SOCIAL_ICONS = {
  github: 'Github',
  linkedin: 'Linkedin',
  twitter: 'Twitter',
}; 