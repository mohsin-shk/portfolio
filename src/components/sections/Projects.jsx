import React, { useState } from 'react';
// import { ExternalLink, Github, Eye, Code, Star } from 'lucide-react';
import { IconExternalLink, IconBrandGithub, IconEye, IconCode, IconStar } from '@tabler/icons-react';
import AnimatedSection from '../ui/AnimatedSection';
import Button from '../ui/Button';
import { projects } from '../../data/portfolioData.js';

const Projects = () => {
  const [filter, setFilter] = useState('featured');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { key: 'featured', label: 'Featured' },
    { key: 'fullstack', label: 'Full Stack' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'all', label: 'All Projects' },
  ];

  const getFilteredProjects = () => {
    if (filter === 'all') return projects;
    if (filter === 'featured') return projects.filter(project => project.featured);
    if (filter === 'frontend') return projects.filter(project => 
      project.technologies.some(tech => ['React', 'Next.js', 'HTML5', 'CSS3'].includes(tech))
    );
    if (filter === 'fullstack') return projects.filter(project => 
      project.technologies.some(tech => ['Node.js', 'Express', 'MongoDB', 'MySQL'].includes(tech))
    );
    return projects;
  };

  const getTechnologyColor = (tech) => {
    const colors = {
      'React': 'bg-blue-500',
      'HTML':'bg-gray-400',
      'Flask':'bg-purple-600',
      'Web3':'bg-yellow-600',
      'CSS':'bg-purple-400',
      'Smart-Contract':'bg-black',
      'Python':'bg-blue-400',
      'Jupyter':'bg-orange-400',
      'Javascript':'bg-yellow-400',
      'Node.js': 'bg-green-500',
      'MongoDB': 'bg-green-600',
      'Express': 'bg-red-500',
      'Next.js': 'bg-black dark:bg-white',
      'Redux': 'bg-purple-500',
      'Tailwind CSS': 'bg-cyan-500',
      'TypeScript': 'bg-blue-600',
      'Open AI':'bg-black',
      'Vector DB':'bg-pink-400',
      'RAG':'bg-orange-400'
    };
    return colors[tech] || 'bg-gray-500';
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection animation="fade-in" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          {/* <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge 
            and showcases different aspects of my development skills.
          </p> */}
        </AnimatedSection>

        {/* Filter Buttons */}
        <AnimatedSection animation="slide-up" delay={200} className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterOption) => (
              <button
                key={filterOption.key}
                onClick={() => setFilter(filterOption.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === filterOption.key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getFilteredProjects().map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="scale"
              delay={index * 100}
              className="group h-full"
            >
              <div
                className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-1 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        <IconStar className="w-4 h-4 fill-current" />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-4">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="bg-white text-gray-900 hover:bg-gray-100"
                      >
                        <IconEye className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        className="bg-gray-900 text-white hover:bg-gray-800"
                      >
                        <IconBrandGithub className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-col grow p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getTechnologyColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-500 text-white">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <IconExternalLink className="w-4 h-4" />
                        <span>Live</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                      >
                        <IconCode className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                    
                    {/* Project ID Badge */}
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                      #{project.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to Action */}
        {/* <AnimatedSection animation="fade-in" delay={600} className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Get In Touch
            </Button>
          </div>
        </AnimatedSection> */}
      </div>
    </section>
  );
};

export default Projects;
