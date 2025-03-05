"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FinancialAssistanceGrantsPage() {
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
        Financial Assistance: Grants
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Grants are financial awards that typically don't need to be repaid, making them one of the most desirable forms of financial assistance. They are provided by government agencies, non-profit organizations, foundations, and corporations to support individuals, businesses, and community initiatives.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/KNk_ZJB92SY" 
          title="Understanding Financial Grants" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Types of Grants Available in India
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            There are various types of grants available to women in India, each designed to address specific needs:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Education Grants</h3>
              <p>Financial assistance for pursuing education at various levels, from primary to higher education and professional courses.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Post-Matric Scholarship for Minorities</li>
                <li>National Scholarship Portal Schemes</li>
                <li>Maulana Azad National Fellowship</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Business Grants</h3>
              <p>Financial support for women entrepreneurs to start or expand their businesses.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Mudra Yojana (Shishu, Kishor, Tarun)</li>
                <li>Stand-Up India Scheme</li>
                <li>Mahila Udyam Nidhi Scheme</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Healthcare Grants</h3>
              <p>Financial assistance for medical treatments, health insurance, and healthcare initiatives.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Ayushman Bharat Yojana</li>
                <li>Rashtriya Swasthya Bima Yojana</li>
                <li>Janani Suraksha Yojana</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Housing Grants</h3>
              <p>Financial support for housing needs, including home purchase, construction, and renovation.</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Pradhan Mantri Awas Yojana</li>
                <li>Credit Linked Subsidy Scheme</li>
                <li>Indira Awaas Yojana</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Eligibility Criteria for Grants
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              While eligibility criteria vary by grant program, common requirements include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-purple-700">Income Level:</strong> 
                <p>Many grants are targeted at low-income individuals or families.</p>
              </li>
              <li>
                <strong className="text-purple-700">Gender:</strong> 
                <p>Some grants are specifically designed for women.</p>
              </li>
              <li>
                <strong className="text-purple-700">Age:</strong> 
                <p>Certain grants have age restrictions or preferences.</p>
              </li>
              <li>
                <strong className="text-purple-700">Education:</strong> 
                <p>Educational qualifications may be required for certain grants.</p>
              </li>
              <li>
                <strong className="text-purple-700">Purpose:</strong> 
                <p>The intended use of funds must align with the grant's purpose.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Application Process
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              The grant application process typically involves these steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong className="text-purple-700">Research:</strong> 
                <p>Identify grants that match your needs and eligibility.</p>
              </li>
              <li>
                <strong className="text-purple-700">Documentation:</strong> 
                <p>Gather required documents (ID proof, income certificates, etc.).</p>
              </li>
              <li>
                <strong className="text-purple-700">Application Form:</strong> 
                <p>Complete the application form accurately and thoroughly.</p>
              </li>
              <li>
                <strong className="text-purple-700">Proposal/Statement:</strong> 
                <p>Write a clear statement of purpose or proposal if required.</p>
              </li>
              <li>
                <strong className="text-purple-700">Submission:</strong> 
                <p>Submit your application before the deadline.</p>
              </li>
              <li>
                <strong className="text-purple-700">Follow-up:</strong> 
                <p>Track your application and respond to any requests for additional information.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Featured Grant Programs for Women
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Annapurna Scheme</h3>
            <p className="mb-2">This scheme provides financial assistance to women in food catering business.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Loan amount up to Rs. 50,000</li>
              <li>Interest rate of 4% per annum</li>
              <li>Repayment period of 3 years</li>
              <li>No collateral required</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Stree Shakti Package</h3>
            <p className="mb-2">Offered by State Bank of India, this package supports women entrepreneurs.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Interest concession of 0.05% on loans</li>
              <li>No processing fee for loans up to Rs. 5 lakhs</li>
              <li>Simplified loan procedures</li>
              <li>Entrepreneurship development programs</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Dena Shakti Scheme</h3>
            <p className="mb-2">Provided by Dena Bank, this scheme supports women in agriculture, manufacturing, and other sectors.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Loans up to Rs. 20 lakhs</li>
              <li>Concession in interest rate</li>
              <li>Support for various business sectors</li>
              <li>Flexible repayment options</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Tips for Successful Grant Applications
        </h2>
        <div className="space-y-4 text-gray-700">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Read guidelines carefully</strong>
              <p>Understand all requirements and eligibility criteria before applying.</p>
            </li>
            <li>
              <strong className="text-purple-700">Prepare a strong proposal</strong>
              <p>Clearly articulate your needs, goals, and how the grant will help you achieve them.</p>
            </li>
            <li>
              <strong className="text-purple-700">Gather all documentation</strong>
              <p>Ensure all required documents are complete, accurate, and up-to-date.</p>
            </li>
            <li>
              <strong className="text-purple-700">Meet deadlines</strong>
              <p>Submit your application well before the deadline to avoid last-minute issues.</p>
            </li>
            <li>
              <strong className="text-purple-700">Follow up</strong>
              <p>Check on your application status and respond promptly to any requests for additional information.</p>
            </li>
            <li>
              <strong className="text-purple-700">Seek assistance</strong>
              <p>Don't hesitate to ask for help from grant officers or organizations that assist with applications.</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Resources for Finding Grants
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Here are some resources to help you find grants that match your needs:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-purple-700">National Portal of India:</strong> Official government portal with information on various schemes.</li>
            <li><strong className="text-purple-700">MyGov Portal:</strong> Platform for citizen engagement with government initiatives.</li>
            <li><strong className="text-purple-700">Ministry of Women and Child Development:</strong> Information on schemes specifically for women.</li>
            <li><strong className="text-purple-700">State Government Websites:</strong> Information on state-specific grant programs.</li>
            <li><strong className="text-purple-700">NGO Partnerships:</strong> Many NGOs offer grants or help connect individuals with grant opportunities.</li>
          </ul>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/financial-assistance/loans"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Next: Loans
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 