"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function TaxationPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={`text-3xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
        Taxation
      </h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">
          Understanding taxation is essential for effective financial planning. This section covers key tax concepts, deductions, and strategies to optimize your tax situation.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/taxation/income-tax"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Income Tax
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn about income tax basics, tax brackets, and filing requirements.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
        
        <Link 
          href="/education/taxation/deductions"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Tax Deductions
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Discover common tax deductions and credits that can reduce your tax liability.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
      </div>
      
      <div className={`p-6 rounded-lg ${theme === 'public' ? 'bg-accent' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary-dark' : ''}`}>
          Why Understanding Taxation Matters
        </h2>
        <p className="mb-4">
          A solid understanding of taxation can help you:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Minimize your tax liability legally</li>
          <li>Avoid penalties and interest</li>
          <li>Make informed financial decisions</li>
          <li>Plan effectively for major life events</li>
          <li>Prepare for retirement</li>
        </ul>
        <p>
          Check back soon for more detailed information on income tax, deductions, and tax planning strategies.
        </p>
      </div>
    </div>
  );
} 