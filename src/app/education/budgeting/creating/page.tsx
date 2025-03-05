"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CreatingBudgetPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/education/budgeting"
          className="inline-flex items-center text-purple-600"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Budgeting
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Creating a Budget
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          A budget is a financial plan that helps you track your income, expenses, and savings goals. Creating a budget is the first step toward financial stability and achieving your financial goals.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/KNk_ZJB92SY" 
          title="Budgeting Basics" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Steps to Create a Budget
        </h2>
        <ol className="list-decimal pl-6 space-y-4 text-gray-700">
          <li>
            <strong className="text-purple-700">Calculate your total income</strong>
            <p>Start by determining your total monthly income after taxes. Include all sources of income such as salary, freelance work, side hustles, and passive income.</p>
          </li>
          <li>
            <strong className="text-purple-700">Track your expenses</strong>
            <p>List all your monthly expenses, including fixed expenses (rent, utilities, loan payments) and variable expenses (groceries, entertainment, dining out).</p>
          </li>
          <li>
            <strong className="text-purple-700">Categorize your spending</strong>
            <p>Group your expenses into categories like housing, transportation, food, entertainment, and savings to better understand your spending patterns.</p>
          </li>
          <li>
            <strong className="text-purple-700">Set financial goals</strong>
            <p>Define short-term and long-term financial goals, such as building an emergency fund, paying off debt, or saving for a major purchase.</p>
          </li>
          <li>
            <strong className="text-purple-700">Create your budget plan</strong>
            <p>Allocate specific amounts to each spending category based on your income and financial goals. Consider using the 50/30/20 rule: 50% for needs, 30% for wants, and 20% for savings and debt repayment.</p>
          </li>
          <li>
            <strong className="text-purple-700">Monitor and adjust</strong>
            <p>Regularly review your budget and make adjustments as needed. Life changes, and your budget should evolve with it.</p>
          </li>
        </ol>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Popular Budgeting Methods
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong className="text-purple-700">Zero-Based Budget:</strong> Every rupee has a job</li>
            <li><strong className="text-purple-700">50/30/20 Budget:</strong> Needs, wants, and savings</li>
            <li><strong className="text-purple-700">Envelope System:</strong> Cash-based budgeting</li>
            <li><strong className="text-purple-700">Pay Yourself First:</strong> Prioritize savings</li>
            <li><strong className="text-purple-700">Values-Based Budget:</strong> Align spending with values</li>
          </ul>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Budgeting Tools
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong className="text-purple-700">Spreadsheets:</strong> Excel or Google Sheets</li>
            <li><strong className="text-purple-700">Budgeting Apps:</strong> YNAB, Mint, EveryRupee</li>
            <li><strong className="text-purple-700">Banking Apps:</strong> Many offer built-in budgeting features</li>
            <li><strong className="text-purple-700">Pen and Paper:</strong> Traditional budgeting method</li>
            <li><strong className="text-purple-700">Expense Trackers:</strong> Apps that automatically categorize expenses</li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Common Budgeting Challenges
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Creating a budget is one thing, but sticking to it can be challenging. Here are some common obstacles and how to overcome them:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-purple-700">Irregular Income:</strong> Create a budget based on your lowest income month and save extra during better months.</li>
            <li><strong className="text-purple-700">Unexpected Expenses:</strong> Build an emergency fund to cover unexpected costs.</li>
            <li><strong className="text-purple-700">Impulse Spending:</strong> Implement a 24-hour rule before making non-essential purchases.</li>
            <li><strong className="text-purple-700">Budget Fatigue:</strong> Include some fun money in your budget to avoid feeling deprived.</li>
            <li><strong className="text-purple-700">Lack of Motivation:</strong> Set clear financial goals to stay motivated.</li>
          </ul>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/budgeting/tracking"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Next: Expense Tracking
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 