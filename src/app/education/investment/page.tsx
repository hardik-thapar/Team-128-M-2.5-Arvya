"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function InvestmentPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Investment
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Learn about different investment options and strategies to grow your wealth over time. This section covers the fundamentals of investing for beginners and beyond.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/investment/getting-started"
          className="block p-6 rounded-lg shadow-md bg-white border border-purple-200 hover:border-purple-400"
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-800">
            Getting Started
          </h2>
          <p className="text-gray-600 mb-4">
            Learn the basics of investing, including key concepts, setting goals, and creating an investment plan.
          </p>
          <span className="inline-flex items-center text-purple-600">
            Coming soon
          </span>
        </Link>
        
        <Link 
          href="/education/investment/types"
          className="block p-6 rounded-lg shadow-md bg-white border border-purple-200 hover:border-purple-400"
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-800">
            Investment Types
          </h2>
          <p className="text-gray-600 mb-4">
            Explore different investment vehicles, including stocks, bonds, mutual funds, ETFs, and more.
          </p>
          <span className="inline-flex items-center text-purple-600">
            Coming soon
          </span>
        </Link>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Why Investing Matters
        </h2>
        <p className="mb-4 text-gray-700">
          Investing is essential for:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
          <li>Building wealth over time</li>
          <li>Beating inflation and maintaining purchasing power</li>
          <li>Achieving long-term financial goals</li>
          <li>Generating passive income</li>
          <li>Preparing for retirement</li>
          <li>Creating financial security</li>
        </ul>
        <p className="text-gray-700">
          Check back soon for more detailed information on investment strategies and options.
        </p>
      </div>
    </div>
  );
} 