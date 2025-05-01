import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import { useScrollPosition } from '../hooks/useScrollPosition';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { hasScrolled } = useScrollPosition();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  const navbarVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 20 
      } 
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300, 
        damping: 30 
      }
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 90 },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 ${
        hasScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      } transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            className="text-xl font-bold text-gray-900 dark:text-white"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            Leon<span className="text-sky-600 dark:text-sky-400">Shimizu</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-gray-600 hover:text-sky-600 dark:text-gray-300 dark:hover:text-sky-400 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <DarkModeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <DarkModeToggle />
            <motion.button
              className="ml-4 p-2 text-gray-600 dark:text-gray-300"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              variants={iconVariants}
              animate={isOpen ? 'open' : 'closed'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-white dark:bg-gray-900 md:hidden pt-24"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <nav className="flex flex-col items-center space-y-8 py-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-xl text-gray-800 hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;