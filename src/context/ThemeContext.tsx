"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useAuth } from './AuthContext';

type Theme = 'light' | 'dark' | 'public';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);
  const { currentUser } = useAuth();

  useEffect(() => {
    setMounted(true);
    
    // If user is not logged in, use public theme
    if (!currentUser) {
      setThemeState('public');
      return;
    }
    
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // If no saved preference, check system preference
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setThemeState(prefersDark ? 'dark' : 'light');
    } else {
      setThemeState(savedTheme);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!mounted) return;
    
    // Update the document class when theme changes
    document.documentElement.classList.remove('dark', 'light', 'public');
    document.documentElement.classList.add(theme);
    
    // Only save preference to localStorage if user is logged in
    if (currentUser) {
      localStorage.setItem('theme', theme);
    }
  }, [theme, mounted, currentUser]);

  const toggleTheme = () => {
    // Only toggle between light and dark, not public
    setThemeState(prevTheme => {
      if (prevTheme === 'public') return 'light';
      return prevTheme === 'light' ? 'dark' : 'light';
    });
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context;
}; 