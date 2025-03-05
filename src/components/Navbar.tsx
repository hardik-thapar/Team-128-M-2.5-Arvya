"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useUser } from '../middleware/auth';
import Button from './Button';

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (options: any, element: string): any;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [showDevanagari, setShowDevanagari] = useState(false);
  const { theme } = useTheme();
  const user = useUser();
  const [currentLanguage, setCurrentLanguage] = useState('en');
  
  const languages = {
    en: 'English',
    hi: 'हिंदी',
    bn: 'বাংলা',
    te: 'తెలుగు',
    ta: 'தமிழ்',
    mr: 'मराठी',
    gu: 'ગુજરાતી',
    kn: 'ಕನ್ನಡ',
    ml: 'മലയാളം',
    pa: 'ਪੰਜਾਬੀ'
  };

  const changeLanguage = useCallback((languageCode: string) => {
    // Find the Google Translate select element
    const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (select) {
      // Set the value
      select.value = languageCode;
      // Create and dispatch both change and click events
      select.dispatchEvent(new Event('change', { bubbles: true }));
      select.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      
      // Trigger Google Translate
      if (window.google && window.google.translate) {
        const event = new MouseEvent('change', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        select.dispatchEvent(event);
      }
      
      setCurrentLanguage(languageCode);
      
      // Store the selected language in localStorage
      localStorage.setItem('selectedLanguage', languageCode);
    }
  }, []);

  // Load saved language preference
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && languages[savedLanguage as keyof typeof languages]) {
      setCurrentLanguage(savedLanguage);
      // Wait for Google Translate to initialize
      const checkGoogleTranslate = setInterval(() => {
        const select = document.querySelector('.goog-te-combo') as HTMLSelectElement;
        if (select) {
          clearInterval(checkGoogleTranslate);
          changeLanguage(savedLanguage);
        }
      }, 100);

      // Clear interval after 5 seconds if Google Translate doesn't load
      setTimeout(() => clearInterval(checkGoogleTranslate), 5000);
    }
  }, [changeLanguage]);

  useEffect(() => {
    // First, clean up any existing elements and scripts
    const cleanup = () => {
      const existingElements = document.querySelectorAll('#google_translate_element');
      existingElements.forEach(el => el.remove());
      
      const existingScripts = document.querySelectorAll('script[src*="translate.google.com"]');
      existingScripts.forEach(script => script.remove());
      
      if ('googleTranslateElementInit' in window) {
        (window as any).googleTranslateElementInit = undefined;
      }
    };

    // Clean up first
    cleanup();

    // Create and append the translate element
    const translateDiv = document.createElement('div');
    translateDiv.id = 'google_translate_element';
    document.querySelector('.translate-container')?.appendChild(translateDiv);

    // Initialize Google Translate
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,hi,bn,te,ta,mr,gu,kn,ml,pa',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    // Add the script
    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup on unmount
    return cleanup;
  }, []); // Empty dependency array to run only once

  // Logo animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowDevanagari(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isProfileMenuOpen && !target.closest('.profile-menu-container')) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu-container') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.location.href = '/';
  };

  // Get the appropriate navbar background color based on theme
  const getNavbarBgColor = () => {
    if (theme === 'public') {
      return 'bg-white border-b border-primary-light';
    } else if (theme === 'dark') {
      return 'bg-gray-900';
    } else {
      return 'bg-white border-b border-gray-200';
    }
  };

  // Get the appropriate text color based on theme
  const getTextColor = () => {
    if (theme === 'public') {
      return 'text-gray-800';
    } else if (theme === 'dark') {
      return 'text-white';
    } else {
      return 'text-gray-800';
    }
  };

  // Get the appropriate hover color based on theme
  const getHoverColor = () => {
    if (theme === 'public') {
      return 'hover:text-primary';
    } else if (theme === 'dark') {
      return 'hover:text-gray-300';
    } else {
      return 'hover:text-gray-600';
    }
  };

  // Get the appropriate mobile menu background color based on theme
  const getMobileMenuBgColor = () => {
    if (theme === 'public') {
      return 'bg-white border-t border-primary-light';
    } else if (theme === 'dark') {
      return 'bg-gray-800';
    } else {
      return 'bg-white border-t border-gray-200';
    }
  };

  // Get logo text color based on theme
  const getLogoTextColor = () => {
    if (theme === 'public') {
      return 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent';
    } else if (theme === 'dark') {
      return 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent';
    } else {
      return 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent';
    }
  };

  return (
    <nav className={`${getNavbarBgColor()} ${getTextColor()}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="relative w-24 h-8">
            <div className="relative w-full h-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={showDevanagari ? 'devanagari' : 'latin'}
                  initial={{ opacity: 0, y: 10, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -10, rotateX: 90 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.23, 1, 0.32, 1],
                    opacity: { duration: 0.3 }
                  }}
                  className={`absolute left-0 text-xl md:text-2xl font-bold ${getLogoTextColor()} transform-gpu`}
                  style={{ transformOrigin: 'center' }}
                >
                  {showDevanagari ? 'अरव्या' : 'Arvya'}
                </motion.span>
              </AnimatePresence>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex-1 flex items-center space-x-6">
              <Link href="/" className={`${getHoverColor()} transition-colors`}>
                Home
              </Link>
              <Link href="/about" className={`${getHoverColor()} transition-colors`}>
                About
              </Link>
              <Link href="/community" className={`${getHoverColor()} transition-colors`}>
                Community
              </Link>
              <Link href="/contact" className={`${getHoverColor()} transition-colors`}>
                Contact
              </Link>
              <Link href="/education" className={`${getHoverColor()} transition-colors`}>
                Education
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              {user.isLoggedIn ? (
                <div className="relative profile-menu-container">
                  <button 
                    onClick={toggleProfileMenu}
                    className={`flex items-center ${getHoverColor()} transition-colors focus:outline-none`}
                  >
                    {user.name || user.email?.split('@')[0] || 'Account'}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isProfileMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 z-10"
                      >
                        <Link href="/dashboard" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                          Dashboard
                        </Link>
                        <Link href="/dashboard/profile" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                          Profile
                        </Link>
                        <button 
                          onClick={handleLogout}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          Logout
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link href="/auth/signin" className={`${getHoverColor()} transition-colors`}>
                    Sign In
                  </Link>
                  <Link href="/auth/signup">
                    <Button variant="primary" size="sm">Sign Up</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side Elements - Simplified */}
          <div className="flex items-center space-x-4">
            <div className="translate-container"></div>
            <button
              onClick={toggleMenu}
              className="mobile-menu-button md:hidden focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className={`md:hidden mobile-menu-container ${getMobileMenuBgColor()}`}
            >
              <div className="py-4 space-y-2">
                <Link href="/" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Home
                </Link>
                <Link href="/about" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  About
                </Link>
                <Link href="/community" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Community
                </Link>
                <Link href="/contact" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Contact
                </Link>
                <Link href="/education" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                  Education
                </Link>
                
                {user.isLoggedIn ? (
                  <>
                    <Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Dashboard
                    </Link>
                    <Link href="/dashboard/profile" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/auth/signin" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Sign In
                    </Link>
                    <Link href="/auth/signup" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-700">
                      Sign Up
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        /* Minimal required styles */
        .translate-container {
          display: flex;
          align-items: center;
        }

        /* Hide Google Translate attribution */
        .goog-te-banner-frame {
          display: none !important;
        }

        body {
          top: 0 !important;
        }
      `}</style>
    </nav>
  );
};

export default Navbar; 