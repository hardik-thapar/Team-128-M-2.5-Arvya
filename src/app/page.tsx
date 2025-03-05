"use client";

import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Image from "next/image";

export default function Home() {
  const { theme } = useTheme();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: "easeOut" 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const featureItem = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut" 
      } 
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        {/* Purple background on the right side */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-purple-600 z-0"></div>
        
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Left side content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 z-10"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                Welcome to Arvya<br />
                <span className="text-gray-900">The future of smart investing</span>
              </h1>
              <p className="text-xl text-gray-800 mb-8 max-w-lg">
                Join our community of investors and grow your wealth with smart, collaborative investment strategies designed for everyone.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/auth/signup">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                    Join an Investment Circle
                  </Button>
                </Link>
                <Link href="/education">
                  <Button variant="outline" size="lg" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
            
            {/* Right side with static image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center">
                {/* Hero image */}
                <div className="relative w-full h-full">
                  <div className="absolute top-10 left-10 text-white font-medium text-xl z-20">
                    Empowering Women in Finance
                  </div>
                  
                  {/* Main image with overlay */}
                  <div className="relative w-full h-full overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="/hero-image.webp" 
                      alt="Empowering Women in Finance" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-purple-600 bg-opacity-20"></div>
                    
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-purple-900 to-transparent z-20">
                      <h3 className="text-white text-xl font-semibold mb-2">Building Financial Independence</h3>
                      <p className="text-white text-sm opacity-90">Join our community and grow your wealth through education and collaboration</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Product category cards */}
        <div className="container mx-auto px-4 pb-16 relative z-10">
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-4 flex items-center w-[180px] hover:shadow-lg transition-shadow border-l-4 border-blue-500"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-500 text-xl">📊</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Investment Circles</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-4 flex items-center w-[180px] hover:shadow-lg transition-shadow border-l-4 border-purple-500"
            >
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <span className="text-purple-500 text-xl">📚</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Financial Education</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-white rounded-lg shadow-md p-4 flex items-center w-[180px] hover:shadow-lg transition-shadow border-l-4 border-indigo-500"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                <span className="text-indigo-500 text-xl">📈</span>
              </div>
              <span className="text-sm font-medium text-gray-900">Market Analysis</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What is it section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              What is Arvya?
            </h2>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Arvya is a pioneering investment platform that empowers individuals to grow their wealth through collaborative investing. Our community-driven approach combines the wisdom of experienced investors with innovative technology to make smart investing accessible to everyone.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
                <p className="text-gray-700 text-center">Investment Experts</p>
              </motion.div>
              
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">10,000+</div>
                <p className="text-gray-700 text-center">Active Investors</p>
              </motion.div>
              
              <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="text-4xl font-bold text-purple-600 mb-2">$25M+</div>
                <p className="text-gray-700 text-center">Assets Under Management</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Arvya Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="bg-gradient-to-tr from-purple-200 to-indigo-100 rounded-2xl p-8 h-[300px] w-full flex items-center justify-center">
                  <div className="relative transform rotate-6">
                    <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-r from-purple-400 to-indigo-500 rounded-xl opacity-30"></div>
                    <div className="relative bg-white rounded-xl shadow-lg p-6 z-10">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <span className="text-purple-500 text-xl">💰</span>
                        </div>
                        <span className="font-semibold">Financial Dashboard</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-3/4"></div>
                        <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                What Arvya does?
              </h2>
              <p className="text-lg text-gray-800 mb-6 leading-relaxed">
                Arvya is a cutting-edge investment platform that connects investors, provides educational resources, and offers powerful tools to help you make informed financial decisions and grow your wealth.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-800">Create and join investment circles with like-minded investors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-800">Access expert-curated investment strategies and portfolios</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-800">Track performance with real-time analytics and insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-3 text-lg">✓</span>
                  <span className="text-gray-800">Learn investment fundamentals through our educational resources</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Features Overview
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Discover the tools and features that make Arvya the perfect platform for your financial journey.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto"
          >
            {/* Feature 1: Investment Circles */}
            <motion.div 
              variants={featureItem}
              className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-purple-600">⭕</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Investment Circles</h3>
                <div className="w-10 h-0.5 bg-purple-500 mb-4"></div>
                <p className="text-gray-600 mb-6">
                  Pool funds with other members, vote on investment strategies, and grow your wealth together.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Collaborative decision-making</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Transparent fund management</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Lower investment barriers</span>
                  </div>
                </div>
                <Link href="/dashboard/circles" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Explore Circles
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Feature 2: Arvya Accelerator */}
            <motion.div 
              variants={featureItem}
              className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-purple-600">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Arvya Accelerator</h3>
                <div className="w-10 h-0.5 bg-purple-500 mb-4"></div>
                <p className="text-gray-600 mb-6">
                  Get personalized financial guidance with our AI-driven roadmap and mentorship program.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Personalized financial roadmap</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">AI-driven investment suggestions</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Expert mentorship access</span>
                  </div>
                </div>
                <Link href="/dashboard" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  Get Started
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Feature 3: Dashboard & Tools */}
            <motion.div 
              variants={featureItem}
              className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative p-8">
                <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-purple-600">📊</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Dashboard & Tools</h3>
                <div className="w-10 h-0.5 bg-purple-500 mb-4"></div>
                <p className="text-gray-600 mb-6">
                  Access real-time dashboards with vibrant data visualizations and interactive tools.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Real-time investment tracking</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Interactive financial tools</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-purple-600 mr-2">✓</span>
                    <span className="text-gray-700">Comprehensive reporting</span>
                  </div>
                </div>
                <Link href="/dashboard" className="inline-flex items-center text-purple-600 font-medium hover:text-purple-700 transition-colors">
                  View Dashboard
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Financial Journey?
            </h2>
            <p className="text-lg mb-8 text-purple-100">
              Join thousands of women who are already using Arvya Platform to build wealth and achieve financial independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-600 font-semibold">
                  Sign Up Now
                </Button>
              </Link>
              <Link href="/education">
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-purple-700">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
