"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

const educationCategories = [
  {
    title: 'Basic Financial Education',
    description: 'Learn the fundamentals of personal finance and money management.',
    path: '/education/basic-financial-education',
    icon: '📚'
  },
  {
    title: 'Financial Assistance',
    description: 'Discover resources and programs that can provide financial support.',
    path: '/education/financial-assistance',
    icon: '🤝'
  },
  {
    title: 'Taxation',
    description: 'Understand tax obligations, deductions, and strategies to optimize your tax situation.',
    path: '/education/taxation',
    icon: '📋'
  },
  {
    title: 'Budgeting',
    description: 'Learn how to create and maintain a budget that works for your financial goals.',
    path: '/education/budgeting',
    icon: '💰'
  },
  {
    title: 'Credit',
    description: 'Understand credit scores, reports, and strategies to build and maintain good credit.',
    path: '/education/credit',
    icon: '💳'
  },
  {
    title: 'Government Schemes',
    description: 'Explore government programs and initiatives focused on women in finance.',
    path: '/education/government-schemes',
    icon: '🏛️'
  },
  {
    title: 'Investment',
    description: 'Learn about different investment options and strategies to grow your wealth.',
    path: '/education/investment',
    icon: '📈'
  },
  {
    title: 'Investment Circles',
    description: 'Discover how our investment circles work and their benefits.',
    path: '/education/investment-circles',
    icon: '⭕'
  }
];

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7,
      ease: "easeOut"
    } 
  }
};

export default function EducationPage() {
  const [themeValue, setThemeValue] = useState('public');
  const [themeError, setThemeError] = useState(false);
  
  // Use the ThemeContext at the top level of the component
  const themeContext = useTheme();
  
  // Update the theme value when the context changes
  useEffect(() => {
    try {
      if (themeContext && themeContext.theme) {
        setThemeValue(themeContext.theme);
      }
    } catch (error) {
      console.error('Error accessing ThemeContext:', error);
      setThemeError(true);
    }
  }, [themeContext]);
  
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-800">
          Financial Education Center
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl mx-auto text-gray-700">
          Empower yourself with knowledge to make informed financial decisions and secure your future.
        </p>
        <div className="h-1 w-24 mx-auto bg-purple-500"></div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
      >
        {educationCategories.map((category) => (
          <motion.div key={category.path} variants={item}>
            <Link 
              href={category.path}
              className="block h-full p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-white border border-purple-200 hover:border-purple-400"
            >
              <div className="flex items-start">
                <div className="text-3xl mr-4 p-3 rounded-full bg-purple-100 text-purple-700">
                  {category.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-purple-800">
                    {category.title}
                  </h2>
                  <p className="text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial="hidden"
        animate="show"
        variants={fadeIn}
        className="rounded-lg overflow-hidden shadow-lg bg-white border border-purple-200"
      >
        <div className="p-1 bg-purple-600"></div>
        <div className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-purple-800">
            Why Financial Education Matters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="mb-4 text-gray-700">
                Financial education is essential for making informed decisions about money management, investments, and long-term financial planning. By understanding key financial concepts, you can take control of your financial future.
              </p>
              
              <ul className="space-y-3">
                {[
                  'Make better decisions about saving, spending, and investing',
                  'Prepare for unexpected financial challenges',
                  'Plan effectively for major life events and retirement',
                  'Avoid common financial pitfalls and scams',
                  'Build wealth and achieve financial independence'
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="mr-2 text-lg text-purple-600">✓</span>
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="rounded-lg p-6 bg-purple-50">
              <h3 className="text-xl font-semibold mb-4 text-purple-800">
                Our Approach to Financial Education
              </h3>
              <p className="mb-4 text-gray-700">
                We believe that financial education should be:
              </p>
              
              <div className="space-y-4">
                {[
                  { title: 'Accessible', desc: 'Available to everyone regardless of background or current knowledge' },
                  { title: 'Practical', desc: 'Focused on real-world applications and actionable steps' },
                  { title: 'Comprehensive', desc: 'Covering all aspects of personal finance' },
                  { title: 'Empowering', desc: 'Giving you the confidence to make your own financial decisions' }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <div className="h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0 bg-purple-600 text-white">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center mt-8"
          >
            <p className="text-gray-700 mb-6">
              Start your financial education journey today and take the first step toward financial empowerment.
            </p>
            <Link 
              href="/education/basic-financial-education"
              className="inline-block px-6 py-3 rounded-md font-medium transition-colors bg-purple-700 text-white hover:bg-purple-800"
            >
              Begin Learning
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
} 