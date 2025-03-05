"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';

interface SidebarItem {
  title: string;
  path: string;
  icon?: React.ReactNode;
  subItems?: SidebarItem[];
}

const sidebarItems: SidebarItem[] = [
  {
    title: 'Basic Financial Education',
    path: '/education/basic-financial-education',
    subItems: [
      { title: 'Financial Literacy', path: '/education/basic-financial-education/literacy' },
      { title: 'Money Management', path: '/education/basic-financial-education/money-management' },
    ]
  },
  {
    title: 'Financial Assistance',
    path: '/education/financial-assistance',
    subItems: [
      { title: 'Grants', path: '/education/financial-assistance/grants' },
      { title: 'Loans', path: '/education/financial-assistance/loans' },
    ]
  },
  {
    title: 'Taxation',
    path: '/education/taxation',
    subItems: [
      { title: 'Income Tax', path: '/education/taxation/income-tax' },
      { title: 'Tax Deductions', path: '/education/taxation/deductions' },
    ]
  },
  {
    title: 'Budgeting',
    path: '/education/budgeting',
    subItems: [
      { title: 'Creating a Budget', path: '/education/budgeting/creating' },
      { title: 'Expense Tracking', path: '/education/budgeting/tracking' },
    ]
  },
  {
    title: 'Credit',
    path: '/education/credit',
    subItems: [
      { title: 'Credit Scores', path: '/education/credit/scores' },
      { title: 'Credit Reports', path: '/education/credit/reports' },
    ]
  },
  {
    title: 'Government Schemes',
    path: '/education/government-schemes',
    subItems: [
      { title: 'Women Empowerment', path: '/education/government-schemes/women-empowerment' },
      { title: 'Financial Inclusion', path: '/education/government-schemes/financial-inclusion' },
    ]
  },
  {
    title: 'Investment',
    path: '/education/investment',
    subItems: [
      { title: 'Stocks', path: '/education/investment/stocks' },
      { title: 'Mutual Funds', path: '/education/investment/mutual-funds' },
    ]
  },
  {
    title: 'Investment Circles',
    path: '/education/investment-circles',
    subItems: [
      { title: 'How It Works', path: '/education/investment-circles/how-it-works' },
      { title: 'Benefits', path: '/education/investment-circles/benefits' },
    ]
  }
];

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleExpand = (path: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  const isActive = (path: string) => pathname === path;
  const isParentActive = (item: SidebarItem) => {
    if (isActive(item.path)) return true;
    return item.subItems?.some(subItem => pathname === subItem.path) || false;
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex flex-col md:flex-row flex-1">
        {/* Mobile sidebar toggle */}
        <div className="md:hidden p-4 flex items-center">
          <button 
            onClick={toggleMobileSidebar}
            className={`px-4 py-2 rounded-md ${theme === 'public' ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          >
            {isMobileSidebarOpen ? 'Hide Menu' : 'Show Menu'}
          </button>
        </div>

        {/* Sidebar for mobile (conditionally rendered) */}
        {isMobileSidebarOpen && (
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={`w-full md:hidden border-b ${theme === 'public' ? 'border-primary-light bg-white' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'}`}
          >
            <div className="p-4">
              <h2 className={`text-xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
                Financial Education
              </h2>
              <nav>
                <ul className="space-y-1">
                  {sidebarItems.map((item) => (
                    <li key={item.path} className="mb-2">
                      <div className="flex flex-col">
                        <button
                          onClick={() => toggleExpand(item.path)}
                          className={`flex justify-between items-center p-2 rounded-md w-full text-left ${
                            isParentActive(item)
                              ? theme === 'public'
                                ? 'bg-accent text-primary-dark font-medium'
                                : 'bg-gray-100 dark:bg-gray-800 font-medium'
                              : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`}
                        >
                          <span>{item.title}</span>
                          <span className="ml-2">
                            {expandedItems[item.path] || isParentActive(item) ? '−' : '+'}
                          </span>
                        </button>
                        {(expandedItems[item.path] || isParentActive(item)) && item.subItems && (
                          <ul className="pl-4 mt-1 space-y-1">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.path}>
                                <Link
                                  href={subItem.path}
                                  className={`block rounded-lg px-4 py-2 ${
                                    isActive(subItem.path)
                                      ? theme === 'public'
                                        ? 'bg-accent text-primary-dark font-medium'
                                        : 'bg-gray-100 dark:bg-gray-800 font-medium'
                                      : theme === 'public'
                                      ? 'text-primary hover:bg-gray-50'
                                      : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                  }`}
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.aside>
        )}

        {/* Sidebar for larger screens */}
        <motion.aside 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`hidden md:block w-64 min-h-screen flex-shrink-0 border-r ${theme === 'public' ? 'border-primary-light bg-white' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900'}`}
        >
          <div className="p-4 sticky top-0">
            <h2 className={`text-xl font-bold mb-6 ${theme === 'public' ? 'text-primary' : ''}`}>
              Financial Education
            </h2>
            <nav>
              <ul className="space-y-1">
                {sidebarItems.map((item) => (
                  <li key={item.path} className="mb-2">
                    <div className="flex flex-col">
                      <button
                        onClick={() => toggleExpand(item.path)}
                        className={`flex justify-between items-center p-2 rounded-md w-full text-left ${
                          isParentActive(item)
                            ? theme === 'public'
                              ? 'bg-accent text-primary-dark font-medium'
                              : 'bg-gray-100 dark:bg-gray-800 font-medium'
                            : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                        }`}
                      >
                        <span>{item.title}</span>
                        <span className="ml-2">
                          {expandedItems[item.path] || isParentActive(item) ? '−' : '+'}
                        </span>
                      </button>
                      {(expandedItems[item.path] || isParentActive(item)) && item.subItems && (
                        <ul className="pl-4 mt-1 space-y-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.path}>
                              <Link
                                href={subItem.path}
                                className={`block rounded-lg px-4 py-2 ${
                                  isActive(subItem.path)
                                    ? theme === 'public'
                                      ? 'bg-accent text-primary-dark font-medium'
                                      : 'bg-gray-100 dark:bg-gray-800 font-medium'
                                    : theme === 'public'
                                    ? 'text-primary hover:bg-gray-50'
                                    : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                }`}
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </motion.aside>

        {/* Main content */}
        <motion.main 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 p-6"
        >
          {children}
        </motion.main>
      </div>
      
      {/* Footer */}
      <footer className={`p-4 ${theme === 'public' ? 'bg-white border-t border-primary-light text-primary-dark' : 'bg-gray-800 text-white'}`}>
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Arvya Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
} 