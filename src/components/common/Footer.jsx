import React from 'react';
// import { GitBranchIcon, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import { IconBrandGithub,IconBrandLinkedin,IconBrandX,IconMail,IconPhone,IconMapPin,IconHeart } from '@tabler/icons-react';
import { personalInfo } from '../../data/portfolioData.js';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: personalInfo.social.github, 
      icon: IconBrandGithub,
      color: 'hover:text-gray-600 dark:hover:text-gray-300'
    },
    { 
      name: 'LinkedIn', 
      url: personalInfo.social.linkedin, 
      icon: IconBrandLinkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    { 
      name: 'Mail', 
      url: `mailto:${personalInfo.email}`, 
      icon: IconMail,
      color: 'hover:text-blue-400 dark:hover:text-blue-300'
    }
  ];

  const contactInfo = [
    { 
      icon: IconMail, 
      text: personalInfo.email, 
      href: `mailto:${personalInfo.email}`,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    { 
      icon: IconPhone, 
      text: personalInfo.phone, 
      href: `tel:${personalInfo.phone}`,
      color: 'hover:text-green-600 dark:hover:text-green-400'
    },
    { 
      icon: IconMapPin, 
      text: personalInfo.location, 
      href: '#',
      color: 'hover:text-red-600 dark:hover:text-red-400'
    }
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* <h3 className="text-2xl font-bold gradient-text">
                {personalInfo.name.split(' ').map(name => name[0]).join('')}
              </h3> */}
              <img src="/android-chrome-512x512.png" className='w-8 sm:w-10'/>
              <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-200 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(`#${item.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Get In Touch
            </h4>
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={`flex items-center space-x-3 text-gray-600 dark:text-gray-400 transition-colors duration-200 ${contact.color}`}
                >
                  <contact.icon className="w-4 h-4 shrink-0" />
                  <span className="text-sm">{contact.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm text-gray-600 dark:text-gray-400">
              <span>Made with</span>
              <IconHeart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 