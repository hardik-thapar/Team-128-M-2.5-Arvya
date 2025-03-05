"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FinancialInclusionSchemesPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/education/government-schemes"
          className="inline-flex items-center text-purple-600"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Government Schemes
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Financial Inclusion Schemes
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Financial inclusion is the process of ensuring access to appropriate financial products and services needed by vulnerable groups at an affordable cost in a fair and transparent manner. The Government of India has launched various schemes to promote financial inclusion and provide banking services to the unbanked population.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/KSEojtRAoHw" 
          title="Financial Inclusion in India" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Key Financial Inclusion Schemes
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Pradhan Mantri Jan Dhan Yojana (PMJDY)</h3>
            <p className="mb-2">A national mission for financial inclusion to ensure access to financial services, namely, banking, savings & deposit accounts, remittance, credit, insurance, and pension in an affordable manner.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Basic savings bank account with no minimum balance requirement</li>
              <li>RuPay debit card with ₹1 lakh accident insurance cover</li>
              <li>Overdraft facility up to ₹10,000 for eligible account holders</li>
              <li>Direct Benefit Transfer (DBT) for government subsidies</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Pradhan Mantri Suraksha Bima Yojana (PMSBY)</h3>
            <p className="mb-2">An accident insurance scheme offering accidental death and disability cover for death or disability due to an accident.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Annual premium of just ₹12</li>
              <li>Accident insurance cover of ₹2 lakh</li>
              <li>Available to people in the age group 18 to 70 years</li>
              <li>Renewable on an annual basis</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)</h3>
            <p className="mb-2">A life insurance scheme that offers coverage for death due to any reason.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Annual premium of ₹330</li>
              <li>Life insurance cover of ₹2 lakh</li>
              <li>Available to people in the age group 18 to 50 years</li>
              <li>Term insurance coverage till the age of 55</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Atal Pension Yojana (APY)</h3>
            <p className="mb-2">A pension scheme primarily focused on workers in the unorganized sector.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Guaranteed minimum monthly pension of ₹1,000 to ₹5,000</li>
              <li>Government co-contribution of 50% of the total contribution or ₹1,000 per annum, whichever is lower</li>
              <li>Available to citizens aged 18-40 years</li>
              <li>Pension payment begins at the age of 60</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Banking Schemes
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-700">Pradhan Mantri Mudra Yojana (PMMY):</strong> 
                <p>Provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises through three categories: Shishu (up to ₹50,000), Kishore (₹50,001 to ₹5 lakh), and Tarun (₹5,00,001 to ₹10 lakh).</p>
              </li>
              <li>
                <strong className="text-purple-700">Stand-Up India:</strong> 
                <p>Facilitates bank loans between ₹10 lakh and ₹1 crore to at least one Scheduled Caste/Scheduled Tribe borrower and one woman borrower per bank branch for setting up greenfield enterprises.</p>
              </li>
              <li>
                <strong className="text-purple-700">Sukanya Samriddhi Yojana:</strong> 
                <p>A small deposit scheme for the girl child with higher interest rates and tax benefits to encourage parents to save for their daughter's education and marriage expenses.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Digital Financial Inclusion Initiatives
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-700">Bharat Interface for Money (BHIM):</strong> 
                <p>A mobile app developed by the National Payments Corporation of India (NPCI) based on the Unified Payment Interface (UPI) for digital payments.</p>
              </li>
              <li>
                <strong className="text-purple-700">RuPay:</strong> 
                <p>India's domestic card payment network offering a cost-effective alternative to international card schemes, enhancing financial inclusion by reducing dependency on cash.</p>
              </li>
              <li>
                <strong className="text-purple-700">Digital India:</strong> 
                <p>A campaign to ensure government services are made available to citizens electronically by improved online infrastructure and by increasing Internet connectivity.</p>
              </li>
              <li>
                <strong className="text-purple-700">Unified Payments Interface (UPI):</strong> 
                <p>A system that powers multiple bank accounts into a single mobile application, merging several banking features, seamless fund routing & merchant payments.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Benefits of Financial Inclusion
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Financial inclusion offers numerous benefits to individuals, communities, and the economy as a whole:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Economic Growth</h3>
              <p>By bringing more people into the formal financial system, financial inclusion contributes to economic growth through increased savings, investments, and access to credit for productive purposes.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Poverty Reduction</h3>
              <p>Access to financial services helps vulnerable groups manage financial risks, build assets, and invest in education and health, leading to reduced poverty and inequality.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Women Empowerment</h3>
              <p>Financial inclusion empowers women by giving them control over their finances, enabling them to save, invest, and build businesses, thereby promoting gender equality.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Formalization of Economy</h3>
              <p>By encouraging digital transactions and reducing cash dependency, financial inclusion helps formalize the economy, reduce corruption, and increase tax compliance.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          How to Access Financial Inclusion Schemes
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Accessing financial inclusion schemes is straightforward. Here's how you can benefit from these initiatives:
          </p>
          
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Visit your nearest bank branch</strong>
              <p>Approach any bank branch with valid identity and address proof documents like Aadhaar, PAN card, voter ID, or driving license.</p>
            </li>
            <li>
              <strong className="text-purple-700">Open a basic savings account</strong>
              <p>Fill out the account opening form and submit it along with the required documents to open a Jan Dhan account with zero balance.</p>
            </li>
            <li>
              <strong className="text-purple-700">Enroll in insurance schemes</strong>
              <p>Ask your bank to enroll you in PMSBY and PMJJBY by filling out the enrollment forms and authorizing auto-debit of premiums from your account.</p>
            </li>
            <li>
              <strong className="text-purple-700">Register for pension scheme</strong>
              <p>Fill out the APY registration form at your bank branch or use the online portal to enroll in the pension scheme.</p>
            </li>
            <li>
              <strong className="text-purple-700">Apply for loans</strong>
              <p>Approach your bank with a business plan and required documents to apply for loans under PMMY or Stand-Up India schemes.</p>
            </li>
          </ol>
          
          <p className="mt-4">
            You can also access these schemes through:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Business Correspondents (BCs) in rural areas</li>
            <li>Common Service Centers (CSCs)</li>
            <li>Mobile banking applications</li>
            <li>Online banking portals</li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Success Stories and Impact
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Financial inclusion initiatives have made significant impacts across India:
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">PMJDY Achievement</h3>
              <p>Over 45 crore Jan Dhan accounts have been opened with deposits exceeding ₹1.5 lakh crore, bringing millions of previously unbanked individuals into the formal financial system.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Direct Benefit Transfer Success</h3>
              <p>The government has transferred over ₹17 lakh crore directly to beneficiaries' accounts through DBT, eliminating leakages and ensuring that benefits reach the intended recipients.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">MUDRA Yojana Impact</h3>
              <p>More than 30 crore loans amounting to over ₹15 lakh crore have been sanctioned under PMMY, supporting small entrepreneurs and creating employment opportunities.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Digital Payments Revolution</h3>
              <p>UPI transactions have grown exponentially, with over 5 billion transactions per month, making India one of the world's fastest-growing digital payment markets.</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/government-schemes/women-empowerment"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Previous: Women Empowerment
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 