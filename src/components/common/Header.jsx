// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
// import { Menu, X, Download } from 'lucide-react';
import { IconX, IconDownload, IconMenu2 } from '@tabler/icons-react';
import ThemeToggle from './ThemeToggle';
import Button from '../ui/Button';
import { personalInfo } from '../../data/portfolioData.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={
      `fixed top-0 left-0 right-0 z-50 transition-all duration-300
       bg-white/60 dark:bg-gray-800/70 backdrop-blur-lg shadow-md`
    }>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="shrink-0">
            {/* <h1 className="text-2xl font-bold gradient-text">
              {personalInfo.name.split(' ').map(name => name[0]).join('')}
            </h1> */}
            <img src="/android-chrome-512x512.png" className='w-8 sm:w-10'/>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(personalInfo.resume, '_blank')}
              className="inline-flex items-center space-x-2"
            >
              <IconDownload className="w-4 h-4" />
              <span>Resume</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 pb-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="glass-effect rounded-lg mt-2 p-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-md hover:bg-white/10 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/20">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(personalInfo.resume, '_blank')}
                className="w-full justify-center space-x-2"
              >
                <IconDownload className="w-4 h-4" />
                <span>Download Resume</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;