// src/components/sections/Skills.jsx
import React, { useState, useEffect, useRef } from 'react';
// import { Monitor, Server, Settings } from 'lucide-react';
import { IconDeviceDesktop, IconServer, IconSettings } from '@tabler/icons-react';
import AnimatedSection from '../ui/AnimatedSection';
import { skills } from '../../data/portfolioData.js';

const SkillProgressBar = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          setTimeout(() => {
            setProgress(skill.level);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, skill.level, delay]);

  return (
    <div ref={ref} className="skill-card group hover:scale-105 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">{skill.icon}</span>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </h4>
        </div>
        <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, icon: Icon, skills, delay = 0 }) => {
  return (
    <AnimatedSection animation="slide-up" delay={delay} className="space-y-6">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <SkillProgressBar
            key={skill.name}
            skill={skill}
            delay={delay + (index * 100)}
          />
        ))}
      </div>
    </AnimatedSection>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const tabs = [
    { id: 'frontend', label: 'Frontend', icon: IconDeviceDesktop },
    { id: 'backend', label: 'Backend', icon: IconServer },
    { id: 'tools', label: 'Tools & DevOps', icon: IconSettings }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p> */}
        </AnimatedSection>

        {/* Mobile Tab Navigation */}
        <div className="md:hidden mb-8">
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 py-2 px-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-12">
          <SkillCategory
            title="Frontend Development"
            icon={IconDeviceDesktop}
            skills={skills.frontend}
            delay={0}
          />
          <SkillCategory
            title="Backend Development"
            icon={IconServer}
            skills={skills.backend}
            delay={200}
          />
          <SkillCategory
            title="Tools & DevOps"
            icon={IconSettings}
            skills={skills.tools}
            delay={400}
          />
        </div>

        {/* Mobile Single Column Layout */}
        <div className="md:hidden">
          {activeTab === 'frontend' && (
            <SkillCategory
              title="Frontend Development"
              icon={IconDeviceDesktop}
              skills={skills.frontend}
              delay={0}
            />
          )}
          {activeTab === 'backend' && (
            <SkillCategory
              title="Backend Development"
              icon={IconServer}
              skills={skills.backend}
              delay={0}
            />
          )}
          {activeTab === 'tools' && (
            <SkillCategory
              title="Tools & DevOps"
              icon={IconSettings}
              skills={skills.tools}
              delay={0}
            />
          )}
        </div>

        {/* Skill Summary */}
        {/* <AnimatedSection animation="fade-in" delay={600} className="mt-20">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technology evolves rapidly, and I'm committed to staying current with the latest 
              trends and best practices. I regularly explore new frameworks, attend tech conferences, 
              and contribute to open-source projects to sharpen my skills and give back to the community.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {['React 18', 'Node.js 20', 'TypeScript', 'Next.js 14', 'MongoDB Atlas', 'AWS'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform duration-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
};

export default Skills;