"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TaxDeductionsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/education/taxation"
          className="inline-flex items-center text-purple-600"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Taxation
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Tax Deductions and Exemptions in India
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Tax deductions and exemptions are provisions in the Income Tax Act that allow taxpayers to reduce their taxable income, thereby lowering their tax liability. Understanding these provisions is crucial for effective tax planning and maximizing your savings.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/Rl9Lw_Xij-Y" 
          title="Understanding Tax Deductions in India" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Difference Between Tax Deductions and Exemptions
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Before diving into specific provisions, it's important to understand the difference between tax deductions and exemptions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Tax Deductions</h3>
              <p>Deductions are amounts that are subtracted from your gross total income to arrive at your taxable income. They are available under various sections of the Income Tax Act, such as 80C, 80D, etc.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Tax Exemptions</h3>
              <p>Exemptions are specific types of income that are not included in your total income for tax purposes. Examples include agricultural income, HRA (House Rent Allowance), etc.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Key Deductions Under Section 80C to 80U
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The Income Tax Act provides various deductions under Chapter VI-A (Sections 80C to 80U) to help taxpayers reduce their taxable income:
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Section 80C (Up to ₹1.5 Lakhs)</h3>
            <p className="mb-2">
              This is one of the most popular sections for tax deductions, allowing investments up to ₹1.5 lakhs in specified instruments:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Public Provident Fund (PPF)</li>
              <li>Employee Provident Fund (EPF)</li>
              <li>Equity Linked Savings Scheme (ELSS)</li>
              <li>National Savings Certificate (NSC)</li>
              <li>Tax Saving Fixed Deposits (5-year lock-in)</li>
              <li>Life Insurance Premium</li>
              <li>Sukanya Samriddhi Yojana</li>
              <li>Principal repayment of Home Loan</li>
              <li>Tuition fees for children (maximum 2 children)</li>
              <li>Senior Citizens Savings Scheme</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Section 80CCC (Up to ₹1.5 Lakhs)</h3>
            <p>
              Deduction for contributions to certain pension funds of LIC or other insurers. This deduction is included within the overall limit of ₹1.5 lakhs under Section 80C.
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Section 80CCD (Additional ₹50,000)</h3>
            <p className="mb-2">
              This section provides deduction for contributions to the National Pension System (NPS):
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong className="text-purple-700">Section 80CCD(1):</strong> Employee's contribution to NPS (part of ₹1.5 lakhs limit under Section 80C)</li>
              <li><strong className="text-purple-700">Section 80CCD(1B):</strong> Additional deduction of up to ₹50,000 for NPS contribution</li>
              <li><strong className="text-purple-700">Section 80CCD(2):</strong> Employer's contribution to NPS (up to 10% of salary)</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Section 80D (Health Insurance)</h3>
            <p className="mb-2">
              Deduction for health insurance premiums:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Up to ₹25,000 for self, spouse, and dependent children</li>
              <li>Additional ₹25,000 for parents</li>
              <li>If parents are senior citizens (60 years or above), the limit increases to ₹50,000</li>
              <li>If self or spouse is a senior citizen, the limit increases to ₹50,000</li>
              <li>Maximum possible deduction: ₹1,00,000</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Other Important Deductions
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-700">Section 80E:</strong> 
                <p>Deduction for interest paid on education loan (no upper limit) for higher education of self, spouse, or children.</p>
              </li>
              <li>
                <strong className="text-purple-700">Section 80EE:</strong> 
                <p>Additional interest deduction of up to ₹50,000 on home loans for first-time homebuyers (specific conditions apply).</p>
              </li>
              <li>
                <strong className="text-purple-700">Section 80G:</strong> 
                <p>Deduction for donations to specified charitable institutions and funds (50% to 100% of donation amount).</p>
              </li>
              <li>
                <strong className="text-purple-700">Section 80GG:</strong> 
                <p>Deduction for rent paid when HRA is not received from employer (least of: rent paid minus 10% of income, ₹5,000 per month, or 25% of total income).</p>
              </li>
              <li>
                <strong className="text-purple-700">Section 80TTA:</strong> 
                <p>Deduction of up to ₹10,000 for interest earned on savings account with banks, post offices, or co-operative societies.</p>
              </li>
              <li>
                <strong className="text-purple-700">Section 80TTB:</strong> 
                <p>For senior citizens, deduction of up to ₹50,000 for interest income from deposits (replaces 80TTA for senior citizens).</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Deductions for Disabilities and Medical Treatment
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-700">Section 80DD:</strong> 
                <p>Deduction for expenditure on medical treatment, training, and rehabilitation of a dependent with disability (₹75,000 for disability, ₹1,25,000 for severe disability).</p>
              </li>
              <li>
                <strong className="text-purple-700">Section 80DDB:</strong> 
                <p>Deduction for medical treatment of specified diseases for self or dependents (up to ₹40,000, or ₹1,00,000 for senior citizens).</p>
              </li>
              <li>
                <strong className="text-purple-700">Section 80U:</strong> 
                <p>Deduction for individuals with disabilities (₹75,000 for disability, ₹1,25,000 for severe disability).</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Common Tax Exemptions
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Apart from deductions, certain types of income are exempt from tax:
          </p>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">House Rent Allowance (HRA)</h3>
            <p className="mb-2">
              HRA received from employer is exempt to the extent of the least of:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Actual HRA received</li>
              <li>50% of salary (for metro cities) or 40% of salary (for non-metro cities)</li>
              <li>Actual rent paid minus 10% of salary</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Leave Travel Allowance (LTA)</h3>
            <p>
              Exemption for travel expenses within India for self and family (twice in a block of four years).
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Other Exempt Incomes</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Agricultural income</li>
              <li>Dividends received from domestic companies (up to ₹10 lakhs)</li>
              <li>Long-term capital gains from equity shares/equity-oriented mutual funds up to ₹1 lakh</li>
              <li>Gratuity (up to specified limits)</li>
              <li>Commutation of pension (partial or full, depending on whether government or non-government employee)</li>
              <li>Leave encashment on retirement (up to specified limits)</li>
              <li>Retrenchment compensation (up to specified limits)</li>
              <li>VRS compensation (up to ₹5 lakhs)</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Tax Deductions in the New Tax Regime
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The new tax regime introduced in Budget 2020 offers lower tax rates but eliminates most deductions and exemptions. Under this regime:
          </p>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Deductions Not Available</h3>
            <ul className="list-disc pl-5 space-y-2 grid grid-cols-1 md:grid-cols-2">
              <li>Section 80C deductions</li>
              <li>Section 80D (Health Insurance)</li>
              <li>Section 80E (Education Loan)</li>
              <li>House Rent Allowance (HRA)</li>
              <li>Leave Travel Allowance (LTA)</li>
              <li>Standard Deduction</li>
              <li>Professional Tax</li>
              <li>Interest on Housing Loan</li>
              <li>Chapter VI-A deductions (except 80CCD(2) and 80JJAA)</li>
            </ul>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Deductions Still Available</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Section 80CCD(2): Employer's contribution to NPS</li>
              <li>Section 80JJAA: Deduction for employment of new employees</li>
              <li>Transport Allowance for differently-abled persons</li>
              <li>Conveyance Allowance for official duty</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Tips for Maximizing Tax Deductions
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Here are some strategies to make the most of available tax deductions:
          </p>
          
          <ul className="list-disc pl-5 space-y-3 mt-4">
            <li>
              <strong className="text-purple-700">Plan Investments Early:</strong> 
              <p>Start investing in tax-saving instruments at the beginning of the financial year rather than rushing at the end.</p>
            </li>
            <li>
              <strong className="text-purple-700">Diversify Tax-Saving Investments:</strong> 
              <p>Distribute your ₹1.5 lakh Section 80C limit across different instruments based on your risk appetite and liquidity needs.</p>
            </li>
            <li>
              <strong className="text-purple-700">Utilize NPS Additional Deduction:</strong> 
              <p>Contribute to NPS to claim the additional ₹50,000 deduction under Section 80CCD(1B).</p>
            </li>
            <li>
              <strong className="text-purple-700">Health Insurance for Family:</strong> 
              <p>Purchase health insurance for yourself, spouse, children, and parents to maximize Section 80D benefits.</p>
            </li>
            <li>
              <strong className="text-purple-700">Home Loan Planning:</strong> 
              <p>If you have a home loan, claim deductions for both principal repayment (Section 80C) and interest payment (Section 24).</p>
            </li>
            <li>
              <strong className="text-purple-700">Choose the Right Tax Regime:</strong> 
              <p>Compare your tax liability under both old and new tax regimes to determine which is more beneficial for you.</p>
            </li>
            <li>
              <strong className="text-purple-700">Keep Documentation:</strong> 
              <p>Maintain proper records and receipts of all investments and expenses for which you claim deductions.</p>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/taxation/income-tax"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Previous: Income Tax
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 