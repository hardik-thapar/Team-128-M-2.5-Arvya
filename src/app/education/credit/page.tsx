"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function CreditPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={`text-3xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
        Credit
      </h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">
          Understanding credit is essential for your financial health. Learn about credit scores, reports, and strategies to build and maintain good credit.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/credit/scores"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Credit Scores
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn what makes up your credit score, how it's calculated, and why it matters.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
        
        <Link 
          href="/education/credit/building"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Building Credit
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Discover strategies for building and improving your credit score over time.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
      </div>
      
      <div className={`p-6 rounded-lg ${theme === 'public' ? 'bg-accent' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary-dark' : ''}`}>
          Why Credit Matters
        </h2>
        <p className="mb-4">
          Good credit can help you:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Qualify for loans and credit cards with better terms</li>
          <li>Secure lower interest rates</li>
          <li>Rent an apartment more easily</li>
          <li>Pay lower insurance premiums</li>
          <li>Get approved for higher credit limits</li>
          <li>Avoid security deposits on utilities</li>
        </ul>
        <p>
          Check back soon for more detailed information on understanding, building, and maintaining good credit.
        </p>
      </div>
    </div>
  );
} 