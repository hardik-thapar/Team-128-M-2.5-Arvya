"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function FinancialLiteracyPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/education/basic-financial-education"
          className={`inline-flex items-center ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Basic Financial Education
        </Link>
      </div>
      
      <h1 className={`text-3xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
        Financial Literacy
      </h1>
      
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">
          Financial literacy is the ability to understand and effectively use various financial skills, including personal financial management, budgeting, and investing.
        </p>
      </div>
      
      <div className={`p-6 rounded-lg mb-8 ${theme === 'public' ? 'bg-accent' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary-dark' : ''}`}>
          Core Components of Financial Literacy
        </h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Budgeting:</strong> Creating and maintaining a plan for your money</li>
          <li><strong>Saving:</strong> Setting aside money for future needs and goals</li>
          <li><strong>Debt Management:</strong> Understanding and managing loans and credit</li>
          <li><strong>Investing:</strong> Growing your money through various investment vehicles</li>
          <li><strong>Insurance:</strong> Protecting yourself and your assets from financial risks</li>
          <li><strong>Retirement Planning:</strong> Preparing financially for your later years</li>
        </ul>
      </div>
      
      <div className="space-y-8 mb-10">
        <section>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary' : ''}`}>
            Understanding Financial Statements
          </h2>
          <p className="mb-4">
            Financial statements are formal records of your financial activities. The three main personal financial statements are:
          </p>
          
          <div className={`p-6 rounded-lg border mb-4 ${theme === 'public' ? 'border-primary-light' : 'border-gray-200 dark:border-gray-700'}`}>
            <h3 className="text-xl font-semibold mb-2">Income Statement</h3>
            <p>
              An income statement shows your income and expenses over a specific period. It helps you understand where your money comes from and where it goes.
            </p>
            <div className="mt-3">
              <strong>Key components:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Income sources (salary, investments, etc.)</li>
                <li>Expenses (fixed and variable)</li>
                <li>Net income (income minus expenses)</li>
              </ul>
            </div>
          </div>
          
          <div className={`p-6 rounded-lg border mb-4 ${theme === 'public' ? 'border-primary-light' : 'border-gray-200 dark:border-gray-700'}`}>
            <h3 className="text-xl font-semibold mb-2">Balance Sheet</h3>
            <p>
              A balance sheet provides a snapshot of your financial position at a specific point in time, showing what you own (assets) and what you owe (liabilities).
            </p>
            <div className="mt-3">
              <strong>Key components:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Assets (cash, investments, property, etc.)</li>
                <li>Liabilities (loans, credit card debt, etc.)</li>
                <li>Net worth (assets minus liabilities)</li>
              </ul>
            </div>
          </div>
          
          <div className={`p-6 rounded-lg border ${theme === 'public' ? 'border-primary-light' : 'border-gray-200 dark:border-gray-700'}`}>
            <h3 className="text-xl font-semibold mb-2">Cash Flow Statement</h3>
            <p>
              A cash flow statement tracks the movement of cash in and out of your accounts over time, helping you understand your liquidity.
            </p>
            <div className="mt-3">
              <strong>Key components:</strong>
              <ul className="list-disc pl-6 mt-2">
                <li>Operating activities (day-to-day income and expenses)</li>
                <li>Investing activities (buying/selling assets)</li>
                <li>Financing activities (loans, debt payments)</li>
              </ul>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary' : ''}`}>
            Financial Literacy Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-5 rounded-lg ${theme === 'public' ? 'bg-white border border-primary-light' : 'bg-white dark:bg-gray-800 shadow-md'}`}>
              <h3 className="text-lg font-semibold mb-3">Numeracy</h3>
              <p>
                Basic math skills for calculating interest, comparing prices, and understanding percentages.
              </p>
            </div>
            
            <div className={`p-5 rounded-lg ${theme === 'public' ? 'bg-white border border-primary-light' : 'bg-white dark:bg-gray-800 shadow-md'}`}>
              <h3 className="text-lg font-semibold mb-3">Critical Thinking</h3>
              <p>
                Ability to evaluate financial information and make informed decisions.
              </p>
            </div>
            
            <div className={`p-5 rounded-lg ${theme === 'public' ? 'bg-white border border-primary-light' : 'bg-white dark:bg-gray-800 shadow-md'}`}>
              <h3 className="text-lg font-semibold mb-3">Research</h3>
              <p>
                Finding and comparing financial products and services to get the best deals.
              </p>
            </div>
            
            <div className={`p-5 rounded-lg ${theme === 'public' ? 'bg-white border border-primary-light' : 'bg-white dark:bg-gray-800 shadow-md'}`}>
              <h3 className="text-lg font-semibold mb-3">Self-Control</h3>
              <p>
                Managing impulses to spend and maintaining discipline with financial plans.
              </p>
            </div>
          </div>
        </section>
      </div>
      
      <div className={`p-6 rounded-lg ${theme === 'public' ? 'bg-accent' : 'bg-gray-50 dark:bg-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'public' ? 'text-primary-dark' : ''}`}>
          Steps to Improve Your Financial Literacy
        </h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong>Read financial books and articles</strong> to expand your knowledge</li>
          <li><strong>Take financial courses</strong> online or in your community</li>
          <li><strong>Follow financial experts</strong> on social media and blogs</li>
          <li><strong>Practice budgeting</strong> and track your expenses</li>
          <li><strong>Use financial tools and apps</strong> to manage your money</li>
          <li><strong>Consult with financial professionals</strong> for personalized advice</li>
          <li><strong>Teach others</strong> what you learn to reinforce your understanding</li>
        </ol>
        <div className="mt-6">
          <Link 
            href="/education/basic-financial-education/money-management"
            className={`inline-flex items-center font-medium ${theme === 'public' ? 'text-primary' : 'text-blue-600 dark:text-blue-400'}`}
          >
            Next: Money Management
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 