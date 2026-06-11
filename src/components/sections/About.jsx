// src/components/sections/About.jsx
import React, { useState, useEffect, useRef } from 'react';
// import { Code, Coffee, Users, Award } from 'lucide-react';
import { IconCode, IconCoffee, IconUsers, IconAward } from '@tabler/icons-react';
import AnimatedSection from '../ui/AnimatedSection';
import { personalInfo, stats, experience } from '../../data/portfolioData.js';

const CounterAnimation = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(end * progress));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative solutions
          </p> */}
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Content */}
          <AnimatedSection animation="slide-right" className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                I'm a passionate Full Stack Developer with over 1+  hands-on experience building scalable, high-performance web applications using React, Node.js, MongoDB and Express.js. My journey in web development started
                with a curiosity about how websites work, and it has evolved into a deep passion for
                creating seamless user experiences.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                I specialize in React.js for frontend development and Node.js for backend services,
                with extensive experience in MongoDB and modern JavaScript frameworks. I'm always
                eager to learn new technologies and stay updated with the latest industry trends.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
                <IconCode className="w-5 h-5" />
                <span className="font-medium">Clean Code Advocate</span>
              </div>
              <div className="flex items-center space-x-2 text-green-600 dark:text-green-400">
                <IconUsers className="w-5 h-5" />
                <span className="font-medium">Team Collaborator</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-600 dark:text-purple-400">
                <IconAward className="w-5 h-5" />
                <span className="font-medium">Problem Solver</span>
              </div>
            </div>
          </AnimatedSection>

          {/* Stats Grid */}
          <AnimatedSection animation="slide-left" className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="skill-card text-center group hover:scale-105 transition-transform duration-300 bg-white dark:bg-gray-800 rounded-xl p-6 shadow"
              >
                <CounterAnimation
                  end={stat.value}
                  suffix={stat.suffix}
                />
                <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </AnimatedSection>
        </div>

        {/* Experience Timeline */}
        <AnimatedSection animation="fade-in" className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Professional Experience
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-linear-to-b from-blue-500 to-purple-600"></div>
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <AnimatedSection
                  key={index}
                  animation="slide-up"
                  delay={index * 200}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                    }`}>
                    <div className="skill-card group hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.position}
                        </h4>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {exp.duration}
                        </span>
                      </div>
                      <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </h5>
                      {/* <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {exp.description}
                      </p> */}
                      <ul className="text-gray-600 dark:text-gray-400 mb-4 list-disc pl-5 space-y-2 text-sm md:text-base">
                        {exp.description.map((point, i) => (
                          <li key={i} className="leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;