"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function GovernmentSchemesPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={`text-3xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
        Government Schemes
      </h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">
          Explore government programs and initiatives focused on financial support, particularly those aimed at women in finance and small businesses.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/government-schemes/women-finance"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Women in Finance
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Discover government programs specifically designed to support women's financial independence and business ventures.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
        
        <Link 
          href="/education/government-schemes/small-business"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Small Business
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn about government initiatives that support small businesses through grants, loans, and other resources.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
      </div>
      
      <div className={`p-6 rounded-lg ${theme === 'public' ? 'bg-accent' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary-dark' : ''}`}>
          Benefits of Government Schemes
        </h2>
        <p className="mb-4">
          Government financial programs can provide:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Low-interest or interest-free loans</li>
          <li>Grants that don't require repayment</li>
          <li>Tax incentives and deductions</li>
          <li>Business development resources</li>
          <li>Mentorship and training opportunities</li>
          <li>Networking and market access</li>
        </ul>
        <p>
          Check back soon for more detailed information on government schemes and how to apply for them.
        </p>
      </div>
    </div>
  );
} 