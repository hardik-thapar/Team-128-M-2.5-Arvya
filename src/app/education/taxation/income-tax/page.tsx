"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function IncomeTaxPage() {
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
        Understanding Income Tax in India
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Income tax is a direct tax levied by the government on the income earned by individuals and entities during a financial year. In India, income tax is governed by the Income Tax Act, 1961, and is administered by the Central Board of Direct Taxes (CBDT) under the Department of Revenue, Ministry of Finance.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/8RMjUpYJMko" 
          title="Understanding Income Tax in India" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Income Tax Basics
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Income tax in India is calculated based on the income earned during a financial year (April 1 to March 31). The tax is paid in the assessment year, which is the year following the financial year.
          </p>
          
          <h3 className="text-xl font-semibold text-purple-700 mt-6 mb-3">Who Needs to Pay Income Tax?</h3>
          <p>
            In India, the following categories of people are required to pay income tax:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Individuals</li>
            <li>Hindu Undivided Families (HUFs)</li>
            <li>Companies</li>
            <li>Firms</li>
            <li>Association of Persons (AOPs)</li>
            <li>Body of Individuals (BOIs)</li>
            <li>Local Authorities</li>
            <li>Artificial Juridical Persons</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-purple-700 mt-6 mb-3">Residential Status</h3>
          <p>
            The tax liability in India depends on the residential status of the taxpayer, which is determined based on the number of days spent in India during a financial year:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong className="text-purple-700">Resident and Ordinarily Resident (ROR):</strong> Taxed on global income</li>
            <li><strong className="text-purple-700">Resident but Not Ordinarily Resident (RNOR):</strong> Taxed on income earned or received in India and income from business controlled in India</li>
            <li><strong className="text-purple-700">Non-Resident (NR):</strong> Taxed only on income earned or received in India</li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Income Tax Slabs and Rates (FY 2023-24)
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            India follows a progressive tax system, where higher income levels are taxed at higher rates. Currently, there are two tax regimes in India:
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Old Tax Regime</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-purple-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-purple-200 bg-purple-50 text-left text-purple-800">Income Slab (₹)</th>
                    <th className="py-2 px-4 border-b border-purple-200 bg-purple-50 text-left text-purple-800">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-purple-100">Up to 2,50,000</td>
                    <td className="py-2 px-4 border-b border-purple-100">Nil</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-purple-100">2,50,001 to 5,00,000</td>
                    <td className="py-2 px-4 border-b border-purple-100">5%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-purple-100">5,00,001 to 10,00,000</td>
                    <td className="py-2 px-4 border-b border-purple-100">20%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Above 10,00,000</td>
                    <td className="py-2 px-4">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">
              * Senior citizens (60-80 years) have a basic exemption limit of ₹3,00,000.
              <br />
              * Super senior citizens (above 80 years) have a basic exemption limit of ₹5,00,000.
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">New Tax Regime</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-purple-200">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b border-purple-200 bg-purple-50 text-left text-purple-800">Income Slab (₹)</th>
                    <th className="py-2 px-4 border-b border-purple-200 bg-purple-50 text-left text-purple-800">Tax Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b border-purple-100">Up to 3,00,000</td>
                    <td className="py-2 px-4 border-b border-purple-100">Nil</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-purple-100">3,00,001 to 6,00,000</td>
                    <td className="py-2 px-4 border-b border-purple-100">5%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-purple-100">6,00,001 to 9,00,000</td>
                    <td className="py-2 px-4 border-b border-purple-100">10%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-purple-100">9,00,001 to 12,00,000</td>
                    <td className="py-2 px-4 border-b border-purple-100">15%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-purple-100">12,00,001 to 15,00,000</td>
                    <td className="py-2 px-4 border-b border-purple-100">20%</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4">Above 15,00,000</td>
                    <td className="py-2 px-4">30%</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-sm">
              * The new tax regime is optional and comes with fewer deductions and exemptions.
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Surcharge and Cess</h3>
            <p>
              In addition to the income tax, the following are also applicable:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li><strong className="text-purple-700">Surcharge:</strong> Applicable on individuals with income above ₹50 lakhs (10%) and ₹1 crore (15%)</li>
              <li><strong className="text-purple-700">Health and Education Cess:</strong> 4% on the amount of income tax plus surcharge</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Types of Income
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              Under the Income Tax Act, income is classified into five heads:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong className="text-purple-700">Income from Salary:</strong> 
                <p>Income received from an employer in return for services rendered.</p>
              </li>
              <li>
                <strong className="text-purple-700">Income from House Property:</strong> 
                <p>Rental income from property owned by the taxpayer.</p>
              </li>
              <li>
                <strong className="text-purple-700">Income from Business or Profession:</strong> 
                <p>Profits earned from business activities or professional services.</p>
              </li>
              <li>
                <strong className="text-purple-700">Income from Capital Gains:</strong> 
                <p>Profits from the sale of capital assets like property, shares, etc.</p>
              </li>
              <li>
                <strong className="text-purple-700">Income from Other Sources:</strong> 
                <p>Income that doesn't fall under any of the above heads, such as interest, dividends, etc.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Tax Filing Process
          </h3>
          <div className="space-y-3 text-gray-700">
            <p>
              The process of filing income tax returns in India involves the following steps:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <strong className="text-purple-700">Gather Documents:</strong> 
                <p>Collect Form 16, bank statements, investment proofs, etc.</p>
              </li>
              <li>
                <strong className="text-purple-700">Choose the Right ITR Form:</strong> 
                <p>Select the appropriate Income Tax Return form based on your income sources.</p>
              </li>
              <li>
                <strong className="text-purple-700">Calculate Your Income:</strong> 
                <p>Compute your total income from all sources.</p>
              </li>
              <li>
                <strong className="text-purple-700">Apply Deductions:</strong> 
                <p>Claim eligible deductions under various sections of the Income Tax Act.</p>
              </li>
              <li>
                <strong className="text-purple-700">Calculate Tax Liability:</strong> 
                <p>Determine the tax payable based on applicable rates.</p>
              </li>
              <li>
                <strong className="text-purple-700">File the Return:</strong> 
                <p>Submit the ITR form online through the Income Tax Department's portal.</p>
              </li>
              <li>
                <strong className="text-purple-700">Verify the Return:</strong> 
                <p>Verify the filed return using Aadhaar OTP, net banking, etc.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Important Tax Deadlines
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Adhering to tax deadlines is crucial to avoid penalties and interest. Here are the key deadlines to remember:
          </p>
          
          <div className="overflow-x-auto mt-4">
            <table className="min-w-full bg-white border border-purple-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b border-purple-200 bg-purple-50 text-left text-purple-800">Activity</th>
                  <th className="py-2 px-4 border-b border-purple-200 bg-purple-50 text-left text-purple-800">Deadline</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b border-purple-100">Filing of Income Tax Return (ITR)</td>
                  <td className="py-2 px-4 border-b border-purple-100">July 31 (for individuals not requiring audit)</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-purple-100">Filing of ITR with audit</td>
                  <td className="py-2 px-4 border-b border-purple-100">October 31</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-purple-100">Advance Tax Payments</td>
                  <td className="py-2 px-4 border-b border-purple-100">
                    15% by June 15<br />
                    45% by September 15<br />
                    75% by December 15<br />
                    100% by March 15
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b border-purple-100">TDS Payment</td>
                  <td className="py-2 px-4 border-b border-purple-100">7th of the next month</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">TDS Return Filing</td>
                  <td className="py-2 px-4">Quarterly (July 31, October 31, January 31, May 31)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Tax Planning Tips
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Effective tax planning can help you legally minimize your tax liability. Here are some tips:
          </p>
          
          <ul className="list-disc pl-5 space-y-3 mt-4">
            <li>
              <strong className="text-purple-700">Invest in Tax-Saving Instruments:</strong> 
              <p>Utilize Section 80C investments like PPF, ELSS, NSC, etc., to claim deductions up to ₹1.5 lakhs.</p>
            </li>
            <li>
              <strong className="text-purple-700">Health Insurance:</strong> 
              <p>Purchase health insurance for yourself and family to claim deduction under Section 80D.</p>
            </li>
            <li>
              <strong className="text-purple-700">Home Loan:</strong> 
              <p>Claim deduction on interest (up to ₹2 lakhs) and principal repayment (under Section 80C) of home loans.</p>
            </li>
            <li>
              <strong className="text-purple-700">NPS Investment:</strong> 
              <p>Contribute to the National Pension System to claim additional deduction of up to ₹50,000 under Section 80CCD(1B).</p>
            </li>
            <li>
              <strong className="text-purple-700">Choose the Right Tax Regime:</strong> 
              <p>Compare tax liability under both old and new tax regimes to determine which is more beneficial for you.</p>
            </li>
            <li>
              <strong className="text-purple-700">Plan Capital Gains:</strong> 
              <p>Time the sale of capital assets to minimize tax impact and utilize indexation benefits for long-term capital gains.</p>
            </li>
            <li>
              <strong className="text-purple-700">Salary Restructuring:</strong> 
              <p>Work with your employer to structure your salary in a tax-efficient manner.</p>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/taxation/deductions"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Next: Tax Deductions and Exemptions
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 