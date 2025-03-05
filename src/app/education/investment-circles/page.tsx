"use client";

import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function InvestmentCirclesPage() {
  const { theme } = useTheme();
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Investment Circles
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Discover how our investment circles work and their benefits. Investment circles provide a collaborative approach to investing that can help you achieve your financial goals.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <Link 
          href="/education/investment-circles/how-they-work"
          className="block p-6 rounded-lg shadow-md bg-white border border-purple-200 hover:border-purple-400"
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-800">
            How They Work
          </h2>
          <p className="text-gray-600 mb-4">
            Learn about the structure, operation, and management of investment circles.
          </p>
          <span className="inline-flex items-center text-purple-600">
            Coming soon
          </span>
        </Link>
        
        <Link 
          href="/education/investment-circles/benefits"
          className="block p-6 rounded-lg shadow-md bg-white border border-purple-200 hover:border-purple-400"
        >
          <h2 className="text-xl font-semibold mb-3 text-purple-800">
            Benefits
          </h2>
          <p className="text-gray-600 mb-4">
            Discover the advantages of participating in investment circles, including risk sharing and collective wisdom.
          </p>
          <span className="inline-flex items-center text-purple-600">
            Coming soon
          </span>
        </Link>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          About Our Investment Circles
        </h2>
        <p className="mb-4 text-gray-700">
          Investment circles offer numerous advantages:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-700">
          <li>Pooled resources for greater investment potential</li>
          <li>Shared knowledge and expertise</li>
          <li>Diversification across multiple investments</li>
          <li>Reduced individual risk</li>
          <li>Community support and accountability</li>
          <li>Access to investment opportunities not available to individual investors</li>
        </ul>
        <p className="text-gray-700">
          Check back soon for more detailed information on how to join or create an investment circle.
        </p>
      </div>
      
      <div className="mt-10 p-6 rounded-lg border border-purple-200 bg-white">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Join Our Next Investment Circle
        </h2>
        <p className="mb-6 text-gray-700">
          We regularly form new investment circles for members interested in collaborative investing. Sign up to be notified when our next investment circle is forming.
        </p>
        <div className="flex justify-center">
          <button 
            className="px-6 py-3 rounded-md font-medium bg-purple-700 text-white hover:bg-purple-800"
          >
            Express Interest
          </button>
        </div>
      </div>
    </div>
  );
} 