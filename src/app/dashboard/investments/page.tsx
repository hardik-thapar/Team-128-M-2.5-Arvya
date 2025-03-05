"use client";

import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import ProtectedRoute from '../../../components/ProtectedRoute';
import Card from '../../../components/Card';
import { useAuth } from '../../../context/AuthContext';
import { getUserInvestments } from '../../../lib/firebase/investments';
import { downloadInvestmentReceipt, InvestmentReceiptData } from '../../../utils/pdfGenerator';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Format currency in Indian Rupees (INR)
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
};

// Format date in a readable format
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

export default function InvestmentsPage() {
  const { currentUser } = useAuth();
  const [investments, setInvestments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchInvestments = async () => {
      if (!currentUser) return;
      
      try {
        setLoading(true);
        setError(null);
        
        const userInvestments = await getUserInvestments(currentUser.uid);
        setInvestments(userInvestments);
      } catch (err: any) {
        console.error('Error fetching investments:', err);
        setError(err.message || 'Failed to fetch investments');
      } finally {
        setLoading(false);
      }
    };
    
    fetchInvestments();
  }, [currentUser]);
  
  const handleDownloadReceipt = (investment: any) => {
    if (!currentUser) return;
    
    const receiptData: InvestmentReceiptData = {
      id: investment.id,
      userId: currentUser.uid,
      userName: currentUser.displayName || currentUser.email || 'Investor',
      circleId: investment.circleId,
      circleName: investment.circleName,
      amount: investment.amount,
      date: new Date(investment.createdAt)
    };
    
    downloadInvestmentReceipt(receiptData);
  };
  
  return (
    <ProtectedRoute>
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">My Investments</h1>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <Card className="bg-red-50 border border-red-200 p-4 mb-6">
              <p className="text-red-600">{error}</p>
            </Card>
          ) : investments.length === 0 ? (
            <Card className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-700">No Investments Yet</h2>
              <p className="text-gray-600 mb-6">You haven't made any investments yet. Explore circles to start investing.</p>
              <Link href="/dashboard/circles/discover">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-200">
                  Explore Circles
                </button>
              </Link>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {investments.map((investment, index) => (
                <motion.div
                  key={investment.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">
                            <Link href={`/dashboard/circles/${investment.circleId}`}>
                              <span className="text-blue-600 hover:text-blue-800 cursor-pointer">
                                {investment.circleName}
                              </span>
                            </Link>
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {formatDate(new Date(investment.createdAt))}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-green-600">
                            {formatCurrency(investment.amount)}
                          </p>
                          <p className="text-xs text-gray-500">Investment Amount</p>
                        </div>
                      </div>
                      
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm text-gray-600">Receipt Generated</span>
                          </div>
                          <button 
                            onClick={() => handleDownloadReceipt(investment)}
                            className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm py-1.5 px-4 rounded-full transition duration-200 flex items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </ProtectedRoute>
  );
} 