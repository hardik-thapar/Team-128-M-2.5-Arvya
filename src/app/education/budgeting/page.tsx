"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function BudgetingPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className={`text-3xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
        Budgeting
      </h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">
          Budgeting is the foundation of financial success. Learn how to create and maintain a budget that works for your financial goals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/budgeting/creating"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Creating a Budget
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Learn step-by-step how to create a personalized budget that aligns with your financial goals.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
        
        <Link 
          href="/education/budgeting/tracking"
          className={`block p-6 rounded-lg shadow-md ${
            theme === 'public' 
              ? 'border border-primary-light hover:border-primary' 
              : 'bg-white dark:bg-gray-800 hover:shadow-lg'
          }`}
        >
          <h2 className={`text-xl font-semibold mb-3 ${theme === 'public' ? 'text-primary' : ''}`}>
            Expense Tracking
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Discover effective methods and tools for tracking your expenses and staying on budget.
          </p>
          <span className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}>
            Coming soon
          </span>
        </Link>
      </div>
      
      <div className={`p-6 rounded-lg ${theme === 'public' ? 'bg-accent' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary-dark' : ''}`}>
          Why Budgeting Matters
        </h2>
        <p className="mb-4">
          A well-planned budget helps you:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Take control of your finances</li>
          <li>Reduce financial stress</li>
          <li>Identify spending patterns</li>
          <li>Save for important goals</li>
          <li>Avoid unnecessary debt</li>
          <li>Plan for the future</li>
        </ul>
        <p>
          Check back soon for more detailed information on creating and maintaining a budget that works for you.
        </p>
      </div>
    </div>
  );
} 