"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

type Theme = 'public' | 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'public',
  toggleTheme: () => {},
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('public');
  const [authError, setAuthError] = useState(false);
  
  // Use the AuthContext at the top level of the component
  const auth = useAuth();
  const currentUser = auth?.currentUser;

  useEffect(() => {
    // Check if we're on the client side
    if (typeof window !== 'undefined') {
      try {
        // Try to get the theme from localStorage
        const savedTheme = localStorage.getItem('theme') as Theme;
        
        if (savedTheme && ['public', 'dark', 'light'].includes(savedTheme)) {
          setTheme(savedTheme);
        } else {
          // If no saved theme, set based on user authentication status
          if (currentUser) {
            // Check user preference in localStorage
            const userTheme = localStorage.getItem('userTheme') as Theme;
            if (userTheme && ['dark', 'light'].includes(userTheme)) {
              setTheme(userTheme);
            } else {
              // Check system preference
              if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
              } else {
                setTheme('light');
              }
            }
          } else {
            // Default to public theme for non-authenticated users
            setTheme('public');
          }
        }
      } catch (error) {
        console.error('Error setting theme:', error);
        setAuthError(true);
        // Set a default theme in case of error
        setTheme('public');
      }
    }
  }, [currentUser]);

  // Update document class when theme changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      try {
        document.documentElement.classList.remove('theme-public', 'theme-dark', 'theme-light');
        document.documentElement.classList.add(`theme-${theme}`);
        
        // Save theme to localStorage
        localStorage.setItem('theme', theme);
        
        // If user is authenticated and theme is not public, save as user preference
        if (currentUser && theme !== 'public') {
          localStorage.setItem('userTheme', theme);
        }
      } catch (error) {
        console.error('Error updating document class:', error);
      }
    }
  }, [theme, currentUser]);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('light');
    } else {
      // If in public theme, toggle to light
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext); 