"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FinancialAssistanceLoansPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/education/financial-assistance"
          className="inline-flex items-center text-purple-600"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Financial Assistance
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Financial Assistance: Loans
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Loans are a form of financial assistance that must be repaid, usually with interest. They can provide necessary funds for education, business, housing, and other important needs when you don't have immediate access to the required capital.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/4XZIv4__sQA" 
          title="Understanding Loans and Credit" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Types of Loans Available
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            There are various types of loans available to meet different financial needs:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Personal Loans</h3>
              <p>Unsecured loans that can be used for various purposes, from medical emergencies to home renovations.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Typically higher interest rates</li>
                <li>No collateral required</li>
                <li>Flexible usage</li>
                <li>Quick processing</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Education Loans</h3>
              <p>Specifically designed to cover educational expenses, including tuition, books, and living costs.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Lower interest rates</li>
                <li>Moratorium period during study</li>
                <li>Tax benefits available</li>
                <li>Longer repayment periods</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Home Loans</h3>
              <p>Secured loans for purchasing, constructing, or renovating residential property.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Lower interest rates</li>
                <li>Long repayment periods (up to 30 years)</li>
                <li>Tax benefits available</li>
                <li>Property serves as collateral</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Business Loans</h3>
              <p>Loans for starting or expanding a business, purchasing equipment, or managing cash flow.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Various types (term loans, working capital loans)</li>
                <li>May require business plan</li>
                <li>Collateral may be required</li>
                <li>Special schemes for women entrepreneurs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Key Loan Terms to Understand
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-700">Principal:</strong> 
                <p>The original amount borrowed, excluding interest.</p>
              </li>
              <li>
                <strong className="text-purple-700">Interest Rate:</strong> 
                <p>The cost of borrowing, expressed as a percentage of the principal.</p>
              </li>
              <li>
                <strong className="text-purple-700">EMI (Equated Monthly Installment):</strong> 
                <p>The fixed amount paid monthly, including principal and interest.</p>
              </li>
              <li>
                <strong className="text-purple-700">Tenure:</strong> 
                <p>The period over which the loan is to be repaid.</p>
              </li>
              <li>
                <strong className="text-purple-700">Collateral:</strong> 
                <p>Assets pledged as security against the loan.</p>
              </li>
              <li>
                <strong className="text-purple-700">Processing Fee:</strong> 
                <p>One-time fee charged by lenders for processing the loan application.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Factors Affecting Loan Approval
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-700">Credit Score:</strong> 
                <p>A higher score increases chances of approval and better terms.</p>
              </li>
              <li>
                <strong className="text-purple-700">Income and Employment:</strong> 
                <p>Stable income and employment history improve eligibility.</p>
              </li>
              <li>
                <strong className="text-purple-700">Debt-to-Income Ratio:</strong> 
                <p>Lower ratio indicates better ability to manage additional debt.</p>
              </li>
              <li>
                <strong className="text-purple-700">Loan Purpose:</strong> 
                <p>Some purposes are considered more favorably than others.</p>
              </li>
              <li>
                <strong className="text-purple-700">Collateral Value:</strong> 
                <p>For secured loans, the value of collateral affects loan amount.</p>
              </li>
              <li>
                <strong className="text-purple-700">Relationship with Lender:</strong> 
                <p>Existing customers may receive preferential treatment.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Special Loan Programs for Women
        </h2>
        <div className="space-y-6 text-gray-700">
          <p>
            Several financial institutions and government schemes offer special loan programs for women:
          </p>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Pradhan Mantri Mudra Yojana (PMMY)</h3>
            <p className="mb-2">Offers loans up to Rs. 10 lakhs to non-corporate, non-farm small/micro enterprises, with special focus on women entrepreneurs.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Shishu: Loans up to Rs. 50,000</li>
              <li>Kishor: Loans from Rs. 50,001 to Rs. 5 lakhs</li>
              <li>Tarun: Loans from Rs. 5,00,001 to Rs. 10 lakhs</li>
              <li>No collateral required for loans under Shishu and Kishor categories</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Cent Kalyani Scheme</h3>
            <p className="mb-2">Offered by Central Bank of India, this scheme provides loans to women entrepreneurs for small businesses.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Loans up to Rs. 1 crore</li>
              <li>No collateral for loans up to Rs. 10 lakhs</li>
              <li>Concession in interest rate</li>
              <li>No processing fee</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Mahila Udyam Nidhi Scheme</h3>
            <p className="mb-2">Offered by Small Industries Development Bank of India (SIDBI), this scheme supports women entrepreneurs in the small-scale sector.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Loans up to Rs. 10 lakhs</li>
              <li>Interest rate of around 9.5-10.5%</li>
              <li>Repayment period up to 10 years</li>
              <li>Moratorium period of up to 5 years</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Loan Application Process
        </h2>
        <div className="space-y-4 text-gray-700">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Research and compare loans</strong>
              <p>Explore different lenders and loan products to find the best terms for your needs.</p>
            </li>
            <li>
              <strong className="text-purple-700">Check eligibility</strong>
              <p>Ensure you meet the lender's criteria before applying.</p>
            </li>
            <li>
              <strong className="text-purple-700">Gather documentation</strong>
              <p>Prepare identity proof, address proof, income documents, and other required paperwork.</p>
            </li>
            <li>
              <strong className="text-purple-700">Complete application form</strong>
              <p>Fill out the loan application accurately and thoroughly.</p>
            </li>
            <li>
              <strong className="text-purple-700">Submit application and documents</strong>
              <p>Provide all required documentation to the lender.</p>
            </li>
            <li>
              <strong className="text-purple-700">Verification and processing</strong>
              <p>The lender will verify your information and assess your application.</p>
            </li>
            <li>
              <strong className="text-purple-700">Loan approval and disbursement</strong>
              <p>If approved, review the loan agreement before accepting the funds.</p>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Tips for Responsible Borrowing
        </h2>
        <div className="space-y-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Borrow only what you need</strong>
              <p>Avoid taking larger loans than necessary, as this increases your debt burden.</p>
            </li>
            <li>
              <strong className="text-purple-700">Understand all terms and conditions</strong>
              <p>Read the fine print and ask questions about anything you don't understand.</p>
            </li>
            <li>
              <strong className="text-purple-700">Compare offers from multiple lenders</strong>
              <p>Shop around to find the best interest rates and terms.</p>
            </li>
            <li>
              <strong className="text-purple-700">Create a repayment plan</strong>
              <p>Budget for loan repayments and set up automatic payments if possible.</p>
            </li>
            <li>
              <strong className="text-purple-700">Build and maintain good credit</strong>
              <p>Pay bills on time and manage existing debt responsibly to improve future loan options.</p>
            </li>
            <li>
              <strong className="text-purple-700">Consider prepayment options</strong>
              <p>If possible, pay off loans early to reduce interest costs, but check for prepayment penalties.</p>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/financial-assistance/grants"
            className="inline-flex items-center font-medium text-purple-600"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Previous: Grants
          </Link>
        </div>
      </div>
    </div>
  );
} 