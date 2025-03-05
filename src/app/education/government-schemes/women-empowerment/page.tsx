"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function WomenEmpowermentSchemesPage() {
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
        Women Empowerment Schemes
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          The Government of India has launched various schemes aimed at empowering women through financial support, skill development, healthcare, education, and entrepreneurship opportunities. These initiatives are designed to promote gender equality and enhance the socio-economic status of women across the country.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/bv9xk62c6mE" 
          title="Women Empowerment Schemes in India" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Key Women Empowerment Schemes
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Beti Bachao, Beti Padhao</h3>
            <p className="mb-2">A campaign aimed at generating awareness and improving the efficiency of welfare services intended for girls.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Prevents gender-biased sex selective elimination</li>
              <li>Ensures survival and protection of the girl child</li>
              <li>Ensures education and participation of the girl child</li>
              <li>Provides financial incentives for girl child education</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Pradhan Mantri Matru Vandana Yojana (PMMVY)</h3>
            <p className="mb-2">A maternity benefit program that provides financial assistance to pregnant women and lactating mothers.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cash incentive of ₹5,000 in three installments</li>
              <li>Promotes appropriate practices, care, and service utilization during pregnancy</li>
              <li>Encourages women to follow up on their health during pregnancy</li>
              <li>Compensates for wage loss during pregnancy and after delivery</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Mahila Shakti Kendra</h3>
            <p className="mb-2">A scheme that aims to empower rural women through community participation and create an environment in which they realize their full potential.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provides one-stop convergent support services for women</li>
              <li>Offers skill development, employment, digital literacy, health, and nutrition</li>
              <li>Facilitates community engagement through College Student Volunteers</li>
              <li>Spreads awareness about government programs and services</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Working Women Hostel</h3>
            <p className="mb-2">A scheme that provides safe and affordable accommodation to working women away from their hometowns.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provides accommodation for single working women</li>
              <li>Accommodates women with their children (up to age 18 for boys and 21 for girls)</li>
              <li>Offers day-care facilities for children of working mothers</li>
              <li>Ensures security and safe environment</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Financial Empowerment Schemes
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-700">Mahila E-Haat:</strong> 
                <p>An online marketing platform for women entrepreneurs to showcase their products and services.</p>
              </li>
              <li>
                <strong className="text-purple-700">Stand-Up India:</strong> 
                <p>Facilitates bank loans between ₹10 lakh and ₹1 crore to at least one woman per bank branch for setting up a new enterprise.</p>
              </li>
              <li>
                <strong className="text-purple-700">Rashtriya Mahila Kosh:</strong> 
                <p>Provides micro-credit to poor women at reasonable rates of interest with very low transaction costs and simple procedures.</p>
              </li>
              <li>
                <strong className="text-purple-700">Mahila Udyam Nidhi Scheme:</strong> 
                <p>Offers financial assistance up to ₹10 lakhs to set up new small-scale ventures.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Education and Skill Development Schemes
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-purple-700">Pragati Scholarship:</strong> 
                <p>Provides financial assistance to girls pursuing technical education.</p>
              </li>
              <li>
                <strong className="text-purple-700">UDAAN Scheme:</strong> 
                <p>Aims to increase the enrollment of girls in engineering colleges and technical institutions.</p>
              </li>
              <li>
                <strong className="text-purple-700">Support to Training and Employment Programme (STEP):</strong> 
                <p>Provides skills that give employability to women and provides competencies and skills that enable women to become self-employed/entrepreneurs.</p>
              </li>
              <li>
                <strong className="text-purple-700">Nai Roshni:</strong> 
                <p>A leadership development program for minority women to empower them to participate in society.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Health and Safety Schemes
        </h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Janani Suraksha Yojana (JSY)</h3>
            <p className="mb-2">A safe motherhood intervention under the National Health Mission that promotes institutional delivery among poor pregnant women.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cash assistance for delivery and post-delivery care</li>
              <li>Reduces maternal and neonatal mortality</li>
              <li>Provides assistance for both rural and urban areas</li>
              <li>Integrates cash assistance with delivery and post-delivery care</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">One Stop Centre Scheme (Sakhi)</h3>
            <p className="mb-2">Provides support and assistance to women affected by violence, both in private and public spaces.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Provides medical, legal, psychological, and counseling support</li>
              <li>Facilitates lodging of FIR and court cases</li>
              <li>Offers temporary shelter for women in distress</li>
              <li>Provides video conferencing facility to record statement for police/courts</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-2">Women Helpline Scheme</h3>
            <p className="mb-2">A 24-hour helpline that provides immediate and emergency response to women affected by violence.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Toll-free 24-hour telecom service (181)</li>
              <li>Provides information about women-related government schemes and programs</li>
              <li>Facilitates crisis and non-crisis intervention through referral</li>
              <li>Links with existing mechanisms such as police, hospital, and ambulance services</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          How to Apply for Women Empowerment Schemes
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            The application process for women empowerment schemes varies depending on the specific program. However, here are general steps to apply:
          </p>
          
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong className="text-purple-700">Research the scheme</strong>
              <p>Visit the official website of the ministry or department implementing the scheme to understand eligibility criteria and benefits.</p>
            </li>
            <li>
              <strong className="text-purple-700">Gather required documents</strong>
              <p>Common documents include identity proof, address proof, income certificate, bank account details, and photographs.</p>
            </li>
            <li>
              <strong className="text-purple-700">Fill the application form</strong>
              <p>Complete the application form either online or offline, depending on the scheme's requirements.</p>
            </li>
            <li>
              <strong className="text-purple-700">Submit the application</strong>
              <p>Submit the completed form along with required documents to the designated authority or through the online portal.</p>
            </li>
            <li>
              <strong className="text-purple-700">Follow up on your application</strong>
              <p>Keep track of your application status and respond to any queries or additional document requests.</p>
            </li>
          </ol>
          
          <p className="mt-4">
            For specific application procedures, you can:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visit the nearest Common Service Centre (CSC)</li>
            <li>Contact the concerned ministry or department</li>
            <li>Seek assistance from local government offices</li>
            <li>Use the official websites or mobile applications of the schemes</li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Success Stories and Impact
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Government schemes for women empowerment have made significant impacts across India:
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Beti Bachao, Beti Padhao Impact</h3>
              <p>The Sex Ratio at Birth (SRB) has improved by 16 points from 918 (2014-15) to 934 (2019-20) at the national level. Gross Enrollment Ratio of girls in elementary education has improved from 94.32% to 96.77%.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">MUDRA Yojana Success</h3>
              <p>More than 70% of the beneficiaries under the Pradhan Mantri MUDRA Yojana are women entrepreneurs, who have received collateral-free loans to start or expand their businesses.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Janani Suraksha Yojana Achievement</h3>
              <p>The scheme has contributed to a significant increase in institutional deliveries, from 38.7% in 2005-06 to 78.9% in 2015-16, leading to reduced maternal and infant mortality rates.</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/government-schemes/financial-inclusion"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Next: Financial Inclusion
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 