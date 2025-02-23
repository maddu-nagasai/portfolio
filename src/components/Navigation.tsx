import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Github, Linkedin } from 'lucide-react';

interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation = ({ darkMode, toggleDarkMode }: NavigationProps) => {
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <a href="#" className="hover:scale-110 transition-transform inline-block">NAGA SAI</a>
          </motion.h1>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:scale-110 transform"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <a
              href="https://github.com/maddu-nagasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:scale-110 transform"
            >
              <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/maddu-nagasai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors hover:scale-110 transform"
            >
              <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;