"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function MoneyManagementPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/education/basic-financial-education"
          className="inline-flex items-center text-purple-600"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Basic Financial Education
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Money Management
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Effective money management is the foundation of financial success. Learn practical strategies for managing your finances and achieving your financial goals.
        </p>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Key Money Management Principles
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li><strong className="text-purple-700">Track Your Spending:</strong> Know where your money goes</li>
          <li><strong className="text-purple-700">Create a Budget:</strong> Plan your income and expenses</li>
          <li><strong className="text-purple-700">Build Emergency Savings:</strong> Prepare for unexpected expenses</li>
          <li><strong className="text-purple-700">Reduce Debt:</strong> Minimize high-interest debt</li>
          <li><strong className="text-purple-700">Set Financial Goals:</strong> Define what you want to achieve</li>
          <li><strong className="text-purple-700">Automate Your Finances:</strong> Use technology to stay consistent</li>
        </ul>
      </div>
      
      <div className="space-y-8 mb-10">
        <section>
          <h2 className="text-2xl font-bold mb-4 text-purple-800">
            Coming Soon
          </h2>
          <p className="mb-4 text-gray-700">
            We're currently developing comprehensive content for this section. Check back soon for detailed information on:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Creating and maintaining a personal budget</li>
            <li>Tracking expenses effectively</li>
            <li>Setting up financial systems</li>
            <li>Managing cash flow</li>
            <li>Prioritizing spending and saving</li>
            <li>Using digital tools for money management</li>
          </ul>
        </section>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Why Money Management Matters
        </h2>
        <p className="mb-4 text-gray-700">
          Good money management helps you:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
          <li>Reduce financial stress</li>
          <li>Avoid unnecessary debt</li>
          <li>Build wealth over time</li>
          <li>Achieve your financial goals</li>
          <li>Prepare for emergencies</li>
          <li>Make informed financial decisions</li>
        </ul>
        <div className="mt-6">
          <Link 
            href="/education/basic-financial-education/literacy"
            className="inline-flex items-center font-medium text-purple-600"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Previous: Financial Literacy
          </Link>
        </div>
      </div>
    </div>
  );
} 