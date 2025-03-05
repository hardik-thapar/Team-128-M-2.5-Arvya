"use client";

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme();
  
  // Get the appropriate footer background and text colors based on theme
  const getFooterClasses = () => {
    if (theme === 'public') {
      return 'bg-white border-t border-primary-light text-gray-800';
    } else if (theme === 'dark') {
      return 'bg-gray-800 text-white';
    } else {
      return 'bg-gray-800 text-white';
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <Navbar />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className={`p-4 ${getFooterClasses()}`}>
        <div className="container mx-auto text-center">
          <p className={theme === 'public' ? 'text-primary-dark' : ''}>&copy; {new Date().getFullYear()} Arvya. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Layout; 