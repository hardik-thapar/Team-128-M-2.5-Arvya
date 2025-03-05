"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CreditScoresPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/education/credit"
          className="inline-flex items-center text-purple-600"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Credit
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Understanding Credit Scores
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          A credit score is a numerical expression based on a statistical analysis of a person's credit files, representing the creditworthiness of an individual. Lenders use credit scores to evaluate the potential risk of lending money to consumers.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/bv9xk62c6mE" 
          title="Understanding Credit Scores" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          What Makes Up Your Credit Score
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Credit scores in India typically range from 300 to 900, with higher scores indicating better creditworthiness. Your credit score is influenced by several factors:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Payment History (35%)</h3>
              <p>Your track record of paying bills on time. Late payments, defaults, and bankruptcies can significantly lower your score.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Credit Utilization (30%)</h3>
              <p>The ratio of your current debt to your available credit. Lower utilization rates are better for your score.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Length of Credit History (15%)</h3>
              <p>How long you've had credit accounts. Longer credit histories generally improve your score.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Credit Mix (10%)</h3>
              <p>The variety of credit accounts you have, such as credit cards, loans, and mortgages.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">New Credit (10%)</h3>
              <p>Recent credit inquiries and newly opened accounts. Too many new accounts in a short period can lower your score.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Credit Score Ranges
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong className="text-purple-700">Excellent (750-900):</strong> 
              <p>You'll qualify for the best interest rates and terms on loans and credit cards.</p>
            </li>
            <li>
              <strong className="text-purple-700">Good (700-749):</strong> 
              <p>You'll likely be approved for most loans with competitive rates.</p>
            </li>
            <li>
              <strong className="text-purple-700">Fair (650-699):</strong> 
              <p>You may be approved for loans but with higher interest rates.</p>
            </li>
            <li>
              <strong className="text-purple-700">Poor (600-649):</strong> 
              <p>You might struggle to get approved for unsecured credit.</p>
            </li>
            <li>
              <strong className="text-purple-700">Bad (300-599):</strong> 
              <p>You'll have difficulty getting approved for most types of credit.</p>
            </li>
          </ul>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Why Your Credit Score Matters
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <strong className="text-purple-700">Loan Approval:</strong> 
              <p>Higher scores increase your chances of loan approval.</p>
            </li>
            <li>
              <strong className="text-purple-700">Interest Rates:</strong> 
              <p>Better scores qualify you for lower interest rates, saving you money.</p>
            </li>
            <li>
              <strong className="text-purple-700">Housing:</strong> 
              <p>Landlords may check your credit before approving a rental application.</p>
            </li>
            <li>
              <strong className="text-purple-700">Employment:</strong> 
              <p>Some employers check credit as part of background screening.</p>
            </li>
            <li>
              <strong className="text-purple-700">Insurance Premiums:</strong> 
              <p>In some countries, credit scores can affect insurance rates.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          How to Improve Your Credit Score
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Improving your credit score takes time and discipline, but it's achievable with these strategies:
          </p>
          
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Pay bills on time</strong>
              <p>Set up automatic payments or reminders to avoid late payments.</p>
            </li>
            <li>
              <strong className="text-purple-700">Reduce credit utilization</strong>
              <p>Try to keep your credit card balances below 30% of your credit limits.</p>
            </li>
            <li>
              <strong className="text-purple-700">Don't close old accounts</strong>
              <p>Keeping older accounts open helps maintain a longer credit history.</p>
            </li>
            <li>
              <strong className="text-purple-700">Limit new credit applications</strong>
              <p>Each application can result in a hard inquiry, which can temporarily lower your score.</p>
            </li>
            <li>
              <strong className="text-purple-700">Check your credit report regularly</strong>
              <p>Review for errors and dispute any inaccuracies you find.</p>
            </li>
            <li>
              <strong className="text-purple-700">Diversify your credit mix</strong>
              <p>Having different types of credit accounts can positively impact your score.</p>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Credit Bureaus in India
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            In India, there are four main credit bureaus that collect and maintain credit information:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">CIBIL</h3>
              <p>The Credit Information Bureau (India) Limited is the oldest and most widely used credit bureau in India.</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">Experian</h3>
              <p>A global information services company that provides credit reports and scores in India.</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">Equifax</h3>
              <p>An international credit bureau that operates in India in partnership with local financial institutions.</p>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-700 mb-2">CRIF High Mark</h3>
              <p>A credit bureau that specializes in microfinance and rural lending data in addition to traditional credit information.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Common Credit Score Myths
        </h2>
        <div className="space-y-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Myth: Checking your own credit lowers your score</strong>
              <p>Fact: Checking your own credit is considered a "soft inquiry" and doesn't affect your score.</p>
            </li>
            <li>
              <strong className="text-purple-700">Myth: Closing credit cards improves your score</strong>
              <p>Fact: Closing accounts can actually hurt your score by reducing your available credit and shortening your credit history.</p>
            </li>
            <li>
              <strong className="text-purple-700">Myth: You only have one credit score</strong>
              <p>Fact: You have multiple credit scores from different bureaus, and lenders may use different scoring models.</p>
            </li>
            <li>
              <strong className="text-purple-700">Myth: Having no debt gives you a perfect score</strong>
              <p>Fact: Having and responsibly managing some debt shows lenders you can handle credit.</p>
            </li>
            <li>
              <strong className="text-purple-700">Myth: Income affects your credit score</strong>
              <p>Fact: Your income isn't directly factored into your credit score calculation.</p>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/credit/reports"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Next: Credit Reports
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 