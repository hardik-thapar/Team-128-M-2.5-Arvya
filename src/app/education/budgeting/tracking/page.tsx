"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ExpenseTrackingPage() {
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
        Expense Tracking
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Expense tracking is the process of recording and categorizing your spending to understand where your money goes. It's a crucial component of successful budgeting and financial management.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/4XZIv4__sQA" 
          title="Expense Tracking Methods" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Benefits of Tracking Expenses
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong className="text-purple-700">Increased awareness</strong>
            <p>Tracking expenses makes you more conscious of your spending habits and patterns.</p>
          </li>
          <li>
            <strong className="text-purple-700">Budget adherence</strong>
            <p>It helps you stick to your budget by providing real-time feedback on your spending.</p>
          </li>
          <li>
            <strong className="text-purple-700">Identifying waste</strong>
            <p>You can spot unnecessary expenses and areas where you can cut back.</p>
          </li>
          <li>
            <strong className="text-purple-700">Goal achievement</strong>
            <p>Tracking helps you stay on course to meet your financial goals.</p>
          </li>
          <li>
            <strong className="text-purple-700">Financial planning</strong>
            <p>It provides data for more accurate future budgeting and financial planning.</p>
          </li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Expense Tracking Methods
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong className="text-purple-700">Mobile Apps:</strong> 
              <p>Apps like Wallet, Money Manager, and Spendee offer convenient tracking on the go.</p>
            </li>
            <li>
              <strong className="text-purple-700">Spreadsheets:</strong> 
              <p>Excel or Google Sheets provide customizable tracking solutions.</p>
            </li>
            <li>
              <strong className="text-purple-700">Pen and Paper:</strong> 
              <p>Traditional expense journals or ledgers work well for some people.</p>
            </li>
            <li>
              <strong className="text-purple-700">Banking Apps:</strong> 
              <p>Many banks offer categorization and tracking features.</p>
            </li>
          </ul>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Tips for Successful Tracking
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong className="text-purple-700">Be consistent:</strong> 
              <p>Track expenses daily to avoid forgetting transactions.</p>
            </li>
            <li>
              <strong className="text-purple-700">Use categories:</strong> 
              <p>Categorize expenses to identify spending patterns.</p>
            </li>
            <li>
              <strong className="text-purple-700">Keep receipts:</strong> 
              <p>Save receipts for important purchases and tax purposes.</p>
            </li>
            <li>
              <strong className="text-purple-700">Review regularly:</strong> 
              <p>Set aside time weekly to review your expenses.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          How to Start Tracking Your Expenses
        </h2>
        <ol className="list-decimal pl-6 space-y-3 text-gray-700">
          <li>
            <strong className="text-purple-700">Choose your tracking method</strong>
            <p>Select a method that fits your lifestyle, whether it's an app, spreadsheet, or notebook.</p>
          </li>
          <li>
            <strong className="text-purple-700">Set up expense categories</strong>
            <p>Create categories that make sense for your spending habits (e.g., housing, food, transportation).</p>
          </li>
          <li>
            <strong className="text-purple-700">Record every expense</strong>
            <p>Get in the habit of recording all expenses, no matter how small.</p>
          </li>
          <li>
            <strong className="text-purple-700">Review and analyze</strong>
            <p>Regularly review your spending to identify patterns and areas for improvement.</p>
          </li>
          <li>
            <strong className="text-purple-700">Adjust your budget</strong>
            <p>Use your tracking insights to refine your budget as needed.</p>
          </li>
        </ol>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Common Expense Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
          <div>
            <h4 className="font-semibold text-purple-700">Housing</h4>
            <ul className="list-disc pl-5">
              <li>Rent/Mortgage</li>
              <li>Utilities</li>
              <li>Maintenance</li>
              <li>Property taxes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700">Transportation</h4>
            <ul className="list-disc pl-5">
              <li>Fuel</li>
              <li>Public transit</li>
              <li>Car maintenance</li>
              <li>Insurance</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700">Food</h4>
            <ul className="list-disc pl-5">
              <li>Groceries</li>
              <li>Dining out</li>
              <li>Coffee shops</li>
              <li>Food delivery</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700">Entertainment</h4>
            <ul className="list-disc pl-5">
              <li>Streaming services</li>
              <li>Movies/concerts</li>
              <li>Hobbies</li>
              <li>Subscriptions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700">Health</h4>
            <ul className="list-disc pl-5">
              <li>Insurance</li>
              <li>Medical bills</li>
              <li>Medications</li>
              <li>Fitness</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700">Personal</h4>
            <ul className="list-disc pl-5">
              <li>Clothing</li>
              <li>Personal care</li>
              <li>Education</li>
              <li>Gifts</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Taking Your Expense Tracking to the Next Level
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Once you've mastered basic expense tracking, consider these advanced strategies:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-purple-700">Trend Analysis:</strong> Look for patterns in your spending over time.</li>
            <li><strong className="text-purple-700">Expense Ratios:</strong> Calculate what percentage of your income goes to different categories.</li>
            <li><strong className="text-purple-700">Forecasting:</strong> Use past data to predict future expenses.</li>
            <li><strong className="text-purple-700">Zero-Based Tracking:</strong> Account for every rupee spent and earned.</li>
            <li><strong className="text-purple-700">Cash Flow Management:</strong> Track not just expenses but the timing of income and expenses.</li>
          </ul>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/budgeting/creating"
            className="inline-flex items-center font-medium text-purple-600"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Previous: Creating a Budget
          </Link>
        </div>
      </div>
    </div>
  );
} 