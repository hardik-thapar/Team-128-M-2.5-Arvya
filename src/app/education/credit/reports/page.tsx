"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CreditReportsPage() {
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
        Understanding Credit Reports
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          A credit report is a detailed summary of your credit history, prepared by a credit bureau. It contains information about your credit accounts, payment history, and other financial details that lenders use to assess your creditworthiness.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/R9nTAEogFu0" 
          title="Understanding Credit Reports" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          What's in Your Credit Report
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Credit reports in India typically contain the following information:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Personal Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>Date of birth</li>
                <li>PAN number</li>
                <li>Contact information</li>
                <li>Employment details</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Account Information</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Types of accounts (credit cards, loans)</li>
                <li>Account opening dates</li>
                <li>Credit limits or loan amounts</li>
                <li>Current balances</li>
                <li>Payment status</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Payment History</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Monthly payment records</li>
                <li>Late payments</li>
                <li>Defaults</li>
                <li>Settlements</li>
                <li>Charge-offs</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Credit Inquiries</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Hard inquiries (when you apply for credit)</li>
                <li>Soft inquiries (when you check your own credit)</li>
                <li>Date of inquiry</li>
                <li>Name of inquiring institution</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            How to Get Your Credit Report
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              In India, you can obtain your credit report through several channels:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-purple-700">Free Annual Report:</strong> 
                <p>You're entitled to one free credit report per year from each credit bureau.</p>
              </li>
              <li>
                <strong className="text-purple-700">Credit Bureau Websites:</strong> 
                <p>Visit the websites of CIBIL, Experian, Equifax, or CRIF High Mark.</p>
              </li>
              <li>
                <strong className="text-purple-700">Banking Partners:</strong> 
                <p>Some banks offer free credit reports to their customers.</p>
              </li>
              <li>
                <strong className="text-purple-700">Third-Party Services:</strong> 
                <p>Websites like Paisabazaar and BankBazaar offer free credit reports.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Reading Your Credit Report
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              Understanding the information in your credit report is crucial:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-purple-700">Account Status:</strong> 
                <p>"Current" means the account is in good standing, while "Delinquent" indicates late payments.</p>
              </li>
              <li>
                <strong className="text-purple-700">Payment Status:</strong> 
                <p>Look for codes like "STD" (Standard/Regular) or "SMA" (Special Mention Account) which indicates late payments.</p>
              </li>
              <li>
                <strong className="text-purple-700">DPD (Days Past Due):</strong> 
                <p>Indicates how many days a payment is overdue.</p>
              </li>
              <li>
                <strong className="text-purple-700">Asset Classification:</strong> 
                <p>Accounts may be classified as Standard, Substandard, Doubtful, or Loss.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Disputing Errors on Your Credit Report
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            If you find errors in your credit report, you have the right to dispute them:
          </p>
          
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Identify the errors</strong>
              <p>Review your report carefully and note any inaccuracies.</p>
            </li>
            <li>
              <strong className="text-purple-700">Gather supporting documents</strong>
              <p>Collect evidence that proves the information is incorrect.</p>
            </li>
            <li>
              <strong className="text-purple-700">Contact the credit bureau</strong>
              <p>File a dispute online, by mail, or by phone with the credit bureau that issued the report.</p>
            </li>
            <li>
              <strong className="text-purple-700">Contact the information provider</strong>
              <p>Notify the lender or creditor that reported the incorrect information.</p>
            </li>
            <li>
              <strong className="text-purple-700">Follow up</strong>
              <p>The bureau must investigate within 30 days and notify you of the results.</p>
            </li>
            <li>
              <strong className="text-purple-700">Request an updated report</strong>
              <p>If changes are made, ask for a new copy of your credit report.</p>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Difference Between Credit Report and Credit Score
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">Credit Report</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Detailed record of your credit history</li>
              <li>Contains personal and account information</li>
              <li>Shows payment history and credit inquiries</li>
              <li>Qualitative assessment</li>
              <li>Used by lenders to evaluate creditworthiness</li>
            </ul>
          </div>
          
          <div className="p-4 bg-purple-50 rounded-lg">
            <h3 className="font-semibold text-purple-700 mb-2">Credit Score</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Numerical representation of creditworthiness</li>
              <li>Typically ranges from 300 to 900</li>
              <li>Calculated based on information in credit report</li>
              <li>Quantitative assessment</li>
              <li>Quick reference for lenders to assess risk</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Tips for Maintaining a Good Credit Report
        </h2>
        <div className="space-y-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Pay all bills on time</strong>
              <p>Late payments can stay on your report for up to 7 years.</p>
            </li>
            <li>
              <strong className="text-purple-700">Keep credit card balances low</strong>
              <p>High utilization can negatively impact your credit report.</p>
            </li>
            <li>
              <strong className="text-purple-700">Don't apply for too much credit at once</strong>
              <p>Multiple inquiries in a short period can raise red flags.</p>
            </li>
            <li>
              <strong className="text-purple-700">Regularly check your credit report</strong>
              <p>Monitor for errors and signs of identity theft.</p>
            </li>
            <li>
              <strong className="text-purple-700">Maintain a diverse credit mix</strong>
              <p>Having different types of credit accounts can positively impact your report.</p>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/credit/scores"
            className="inline-flex items-center font-medium text-purple-600"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Previous: Credit Scores
          </Link>
        </div>
      </div>
    </div>
  );
} 