"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function BasicFinancialEducationPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Basic Financial Education
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Understanding the basics of finance is essential for making informed decisions about your money. 
          This section covers fundamental concepts that form the foundation of financial literacy.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/basic-financial-education/literacy"
          className="block p-6 rounded-lg shadow-md bg-white border border-purple-200 hover:border-purple-400"
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-800">
            Financial Literacy
          </h2>
          <p className="text-gray-600 mb-4">
            Learn the core concepts of financial literacy, including budgeting, saving, and understanding financial statements.
          </p>
          <span className="inline-flex items-center text-purple-600">
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </Link>
        
        <Link 
          href="/education/basic-financial-education/money-management"
          className="block p-6 rounded-lg shadow-md bg-white border border-purple-200 hover:border-purple-400"
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-800">
            Money Management
          </h2>
          <p className="text-gray-600 mb-4">
            Discover practical strategies for managing your money effectively, including tracking expenses and setting financial goals.
          </p>
          <span className="inline-flex items-center text-purple-600">
            Read more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
        </Link>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Why Financial Literacy Matters
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Financial literacy is the foundation of financial well-being. When you understand how money works, you can make better decisions about:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>How to budget and save effectively</li>
            <li>Managing debt responsibly</li>
            <li>Planning for future financial needs</li>
            <li>Protecting yourself from financial fraud</li>
            <li>Building wealth over time</li>
          </ul>
          <p>
            Studies show that individuals with higher financial literacy tend to save more, invest wisely, manage debt better, and plan more effectively for retirement.
          </p>
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-purple-800">
          Key Financial Concepts
        </h2>
        
        <div className="space-y-6">
          <div className="p-6 rounded-lg border border-purple-200 bg-white">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Income and Expenses</h3>
            <p className="text-gray-700">
              Understanding the difference between income (money coming in) and expenses (money going out) is fundamental to financial management. Tracking both helps you create a sustainable budget.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-purple-200 bg-white">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Assets and Liabilities</h3>
            <p className="text-gray-700">
              Assets are things you own that have value (like investments or property), while liabilities are debts you owe. Building assets while minimizing liabilities is key to growing wealth.
            </p>
          </div>
          
          <div className="p-6 rounded-lg border border-purple-200 bg-white">
            <h3 className="text-xl font-semibold mb-3 text-purple-700">Compound Interest</h3>
            <p className="text-gray-700">
              Compound interest is interest calculated on both the initial principal and the accumulated interest. It's a powerful concept that can work for you (in investments) or against you (in debt).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 