
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 frosted-glass shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <motion.div 
            className="w-8 h-8 rounded-full bg-gradient-to-br from-mystic-400 to-mystic-600 flex items-center justify-center mr-3"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-6 h-6 rounded-full bg-white/90 dark:bg-cosmic-900/90 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-gradient-to-br from-mystic-500 to-mystic-700"></div>
            </div>
          </motion.div>
          <div>
            <h1 className="text-xl font-medium tracking-tight mystic-text">神秘占卜</h1>
          </div>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-cosmic-700 dark:text-cosmic-200 hover:text-mystic-600 dark:hover:text-mystic-400 transition-colors">
            <div className="text-sm font-medium">关于</div>
          </a>
          <a href="#fortune" className="text-cosmic-700 dark:text-cosmic-200 hover:text-mystic-600 dark:hover:text-mystic-400 transition-colors">
            <div className="text-sm font-medium">占卜</div>
          </a>
          <a href="#faq" className="text-cosmic-700 dark:text-cosmic-200 hover:text-mystic-600 dark:hover:text-mystic-400 transition-colors">
            <div className="text-sm font-medium">常见问题</div>
          </a>
        </nav>
        
        <div className="md:hidden">
          <button className="text-cosmic-700 dark:text-cosmic-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
