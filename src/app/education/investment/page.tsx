"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function InvestmentPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={`text-3xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
        Investment
      </h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">
          Learn about different investment options and strategies to grow your wealth over time. This section covers the fundamentals of investing for beginners and beyond.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/investment/getting-started"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Getting Started
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn the basics of investing, including key concepts, setting goals, and creating an investment plan.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
        
        <Link 
          href="/education/investment/types"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Investment Types
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Explore different investment vehicles, including stocks, bonds, mutual funds, ETFs, and more.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
      </div>
      
      <div className={`p-6 rounded-lg ${theme === 'public' ? 'bg-accent' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary-dark' : ''}`}>
          Why Investing Matters
        </h2>
        <p className="mb-4">
          Investing is essential for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Building wealth over time</li>
          <li>Beating inflation and maintaining purchasing power</li>
          <li>Achieving long-term financial goals</li>
          <li>Generating passive income</li>
          <li>Preparing for retirement</li>
          <li>Creating financial security</li>
        </ul>
        <p>
          Check back soon for more detailed information on investment strategies and options.
        </p>
      </div>
    </div>
  );
} 