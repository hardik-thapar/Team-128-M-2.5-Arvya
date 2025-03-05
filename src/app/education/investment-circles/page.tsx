"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function InvestmentCirclesPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={`text-3xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
        Investment Circles
      </h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">
          Discover how our investment circles work and their benefits. Investment circles provide a collaborative approach to investing that can help you achieve your financial goals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/investment-circles/how-they-work"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            How They Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn about the structure, operation, and management of investment circles.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
        
        <Link 
          href="/education/investment-circles/benefits"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Benefits
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Discover the advantages of participating in investment circles, including risk sharing and collective wisdom.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
      </div>
      
      <div className={`p-6 rounded-lg ${theme === 'public' ? 'bg-accent' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary-dark' : ''}`}>
          About Our Investment Circles
        </h2>
        <p className="mb-4">
          Investment circles offer numerous advantages:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Pooled resources for greater investment potential</li>
          <li>Shared knowledge and expertise</li>
          <li>Diversification across multiple investments</li>
          <li>Reduced individual risk</li>
          <li>Community support and accountability</li>
          <li>Access to investment opportunities not available to individual investors</li>
        </ul>
        <p>
          Check back soon for more detailed information on how to join or create an investment circle.
        </p>
      </div>
      
      <div className={`mt-10 p-6 rounded-lg border ${theme === 'public' ? 'border-primary-light' : 'border-gray-200 dark:border-gray-700'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary' : ''}`}>
          Join Our Next Investment Circle
        </h2>
        <p className="mb-6">
          We regularly form new investment circles for members interested in collaborative investing. Sign up to be notified when our next investment circle is forming.
        </p>
        <div className="flex justify-center">
          <button 
            className={`px-6 py-3 rounded-md font-medium ${
              theme === 'public' 
                ? 'bg-primary text-white hover:bg-primary-dark' 
                : 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600'
            }`}
          >
            Express Interest
          </button>
        </div>
      </div>
    </div>
  );
} 