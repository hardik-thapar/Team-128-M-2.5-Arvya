"use client";

import React from 'react';
import Layout from '@/components/Layout';
import InvestmentForm from '@/components/InvestmentForm';

export default function AIAssistancePage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">AI Investment Assistant</h1>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Get personalized investment recommendations based on your financial profile and goals.
          Our AI-powered system analyzes your inputs to suggest the most suitable investment circle for you.
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <InvestmentForm />
        </div>
      </div>
    </Layout>
  );
} 