// src/components/sections/Hero.jsx
import React, { useState, useEffect } from 'react';
// import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { IconChevronDown, IconBrandGithub, IconBrandLinkedin, IconMail, IconMapPin } from '@tabler/icons-react';
import Button from '../ui/Button';
import AnimatedSection from '../ui/AnimatedSection';
import { personalInfo } from '../../data/portfolioData.js';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    'Full Stack Developer',
    'Frontend React Developer',
    'Backend Developer',
    'MERN Stack Developer',
    'Node.js Developer'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentTitle.length) {
          setDisplayedText(currentTitle.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, titles]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[80vh] pt-32 pb-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-pink-500/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-indigo-500/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection animation="fade-in" className="space-y-8">
          {/* Profile Image */}
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-linear-to-r from-blue-500 to-purple-600 p-1 animate-glow">
              {/* <img
                src="https://avatars.githubusercontent.com/u/112957650?v=4"
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
              /> */}
              <img
                src="/portfolio_hero.jpeg"
                alt={personalInfo.name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 animate-pulse"></div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{' '}
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            
            <div className="h-16 md:h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-300">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
              <IconMapPin className="w-5 h-5" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-8">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="group"
            >
              <span>View My Work</span>
              <IconChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6 pt-8">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
            >
              <IconBrandGithub className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
            >
              <IconBrandLinkedin className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 hover:scale-110 transition-all duration-300 group"
            >
              <IconMail className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <AnimatedSection
        animation="fade-in"
        delay={1000}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-8 md:bottom-4 z-20"
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
        >
          <span className="text-sm">Scroll Down</span>
          <IconChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
        </button>
      </AnimatedSection>
    </section>
  );
};

export default Hero;