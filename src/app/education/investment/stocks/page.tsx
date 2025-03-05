"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function StocksPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <Link 
          href="/education/investment"
          className="inline-flex items-center text-purple-600"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Back to Investment
        </Link>
      </div>
      
      <h1 className="text-3xl font-bold mb-6 text-purple-800">
        Understanding Stock Market Investments
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Stock market investing involves buying shares of publicly traded companies, allowing you to own a portion of these businesses and potentially benefit from their growth and profitability. This guide will help you understand the basics of stock investing, how the stock market works, and strategies for building a successful stock portfolio.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/Xn7KWR9EOGQ" 
          title="Stock Market Basics for Beginners" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Stock Market Basics
        </h2>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold text-purple-700 mt-6 mb-3">What Are Stocks?</h3>
          <p>
            Stocks, also known as shares or equities, represent ownership in a company. When you buy a stock, you're purchasing a small piece of that company, making you a shareholder. As a shareholder, you may:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Benefit from the company's growth through stock price appreciation</li>
            <li>Receive dividends (a portion of the company's profits distributed to shareholders)</li>
            <li>Have voting rights on certain company decisions</li>
            <li>Own a claim on the company's assets and earnings</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-purple-700 mt-6 mb-3">How the Stock Market Works</h3>
          <p>
            The stock market is a marketplace where buyers and sellers trade shares of publicly listed companies. In India, the major stock exchanges are:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li><strong className="text-purple-700">Bombay Stock Exchange (BSE):</strong> Asia's oldest stock exchange, established in 1875</li>
            <li><strong className="text-purple-700">National Stock Exchange (NSE):</strong> India's largest stock exchange by trading volume</li>
          </ul>
          <p className="mt-3">
            Stock prices fluctuate based on supply and demand, which are influenced by various factors including:
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Company performance and financial results</li>
            <li>Industry trends and competitive landscape</li>
            <li>Economic indicators and government policies</li>
            <li>Market sentiment and investor psychology</li>
            <li>Global events and geopolitical factors</li>
          </ul>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Types of Stocks
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Stocks can be categorized in various ways based on their characteristics:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">By Company Size</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-purple-700">Large-Cap Stocks:</strong> 
                  <p>Shares of companies with market capitalization above ₹20,000 crores. These are typically well-established, financially stable companies with a proven track record (e.g., Reliance Industries, TCS, HDFC Bank).</p>
                </li>
                <li>
                  <strong className="text-purple-700">Mid-Cap Stocks:</strong> 
                  <p>Shares of companies with market capitalization between ₹5,000 crores and ₹20,000 crores. These companies offer a balance of growth potential and stability.</p>
                </li>
                <li>
                  <strong className="text-purple-700">Small-Cap Stocks:</strong> 
                  <p>Shares of companies with market capitalization below ₹5,000 crores. These companies often offer higher growth potential but come with higher risk.</p>
                </li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">By Investment Style</h3>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <strong className="text-purple-700">Growth Stocks:</strong> 
                  <p>Shares of companies expected to grow at an above-average rate compared to other companies. These companies typically reinvest profits to fuel expansion rather than paying dividends.</p>
                </li>
                <li>
                  <strong className="text-purple-700">Value Stocks:</strong> 
                  <p>Shares of companies that appear to be undervalued based on fundamental analysis. These stocks trade at a lower price relative to their fundamentals (earnings, dividends, sales, etc.).</p>
                </li>
                <li>
                  <strong className="text-purple-700">Dividend Stocks:</strong> 
                  <p>Shares of companies that regularly distribute a portion of their earnings to shareholders. These are often mature companies with stable cash flows.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">By Sectors</h3>
            <p className="mb-3">
              Stocks can also be categorized by the industry or sector in which the company operates:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Financial Services</span>
              </div>
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Information Technology</span>
              </div>
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Healthcare</span>
              </div>
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Consumer Goods</span>
              </div>
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Energy</span>
              </div>
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Manufacturing</span>
              </div>
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Real Estate</span>
              </div>
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Telecommunications</span>
              </div>
              <div className="p-3 bg-white border border-purple-200 rounded-lg">
                <span className="font-medium text-purple-700">Utilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Benefits of Stock Investing
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-purple-700">Potential for High Returns:</strong> 
                <p>Historically, stocks have provided higher returns compared to other asset classes over the long term.</p>
              </li>
              <li>
                <strong className="text-purple-700">Ownership in Companies:</strong> 
                <p>Buying stocks allows you to own a piece of businesses you believe in and potentially benefit from their success.</p>
              </li>
              <li>
                <strong className="text-purple-700">Dividend Income:</strong> 
                <p>Many companies distribute a portion of their profits to shareholders in the form of dividends, providing a regular income stream.</p>
              </li>
              <li>
                <strong className="text-purple-700">Liquidity:</strong> 
                <p>Stocks can be easily bought and sold on stock exchanges during market hours, providing high liquidity.</p>
              </li>
              <li>
                <strong className="text-purple-700">Inflation Hedge:</strong> 
                <p>Stocks have historically outpaced inflation, helping preserve purchasing power over time.</p>
              </li>
              <li>
                <strong className="text-purple-700">Diversification:</strong> 
                <p>Adding stocks to your investment portfolio can provide diversification benefits, potentially reducing overall risk.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Risks of Stock Investing
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-purple-700">Market Risk:</strong> 
                <p>Stock prices can be volatile and may decline due to overall market conditions, regardless of individual company performance.</p>
              </li>
              <li>
                <strong className="text-purple-700">Company Risk:</strong> 
                <p>Individual companies may underperform or even go bankrupt, potentially resulting in significant or total loss of investment.</p>
              </li>
              <li>
                <strong className="text-purple-700">Sector Risk:</strong> 
                <p>Certain industries or sectors may face challenges that affect all companies within that sector.</p>
              </li>
              <li>
                <strong className="text-purple-700">Liquidity Risk:</strong> 
                <p>Some stocks, particularly of smaller companies, may be difficult to sell quickly without affecting the price.</p>
              </li>
              <li>
                <strong className="text-purple-700">Emotional Risk:</strong> 
                <p>Fear and greed can lead to impulsive decisions, potentially resulting in buying high and selling low.</p>
              </li>
              <li>
                <strong className="text-purple-700">Timing Risk:</strong> 
                <p>Attempting to time the market (buying at lows and selling at highs) is extremely difficult and can lead to missed opportunities.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          How to Start Investing in Stocks
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Getting started with stock investing involves several key steps:
          </p>
          
          <ol className="list-decimal pl-5 space-y-4 mt-4">
            <li>
              <strong className="text-purple-700">Set Clear Investment Goals:</strong> 
              <p>Define your financial objectives, time horizon, and risk tolerance. Are you investing for retirement, a major purchase, or wealth creation?</p>
            </li>
            <li>
              <strong className="text-purple-700">Educate Yourself:</strong> 
              <p>Learn about stock market basics, fundamental and technical analysis, and different investment strategies. Read books, take courses, and follow reputable financial news sources.</p>
            </li>
            <li>
              <strong className="text-purple-700">Open a Demat and Trading Account:</strong> 
              <p>In India, you need both a Demat account (to hold shares in electronic form) and a trading account (to buy and sell shares). Choose a reputable broker based on factors like fees, research tools, customer service, and user interface.</p>
            </li>
            <li>
              <strong className="text-purple-700">Complete KYC Requirements:</strong> 
              <p>Provide necessary documents like PAN card, Aadhaar card, address proof, and bank details to complete the Know Your Customer (KYC) process.</p>
            </li>
            <li>
              <strong className="text-purple-700">Start with a Small Amount:</strong> 
              <p>Begin with an amount you can afford to lose while you're learning. Consider starting with blue-chip companies or index funds for lower risk.</p>
            </li>
            <li>
              <strong className="text-purple-700">Diversify Your Portfolio:</strong> 
              <p>Spread your investments across different sectors, company sizes, and investment styles to reduce risk.</p>
            </li>
            <li>
              <strong className="text-purple-700">Monitor and Review Regularly:</strong> 
              <p>Keep track of your investments and review your portfolio periodically. Make adjustments based on performance and changes in your financial goals.</p>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Stock Analysis Methods
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Investors use various methods to analyze stocks and make investment decisions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Fundamental Analysis</h3>
              <p className="mb-3">
                Evaluates a company's financial health, competitive position, and growth prospects to determine its intrinsic value.
              </p>
              <p className="font-medium mb-2">Key metrics include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Earnings Per Share (EPS)</li>
                <li>Price-to-Earnings (P/E) Ratio</li>
                <li>Price-to-Book (P/B) Ratio</li>
                <li>Debt-to-Equity Ratio</li>
                <li>Return on Equity (ROE)</li>
                <li>Dividend Yield</li>
                <li>Free Cash Flow</li>
              </ul>
            </div>
            
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">Technical Analysis</h3>
              <p className="mb-3">
                Studies price movements and trading volumes to identify patterns and trends that may predict future price behavior.
              </p>
              <p className="font-medium mb-2">Key concepts include:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Support and Resistance Levels</li>
                <li>Moving Averages</li>
                <li>Relative Strength Index (RSI)</li>
                <li>Moving Average Convergence Divergence (MACD)</li>
                <li>Bollinger Bands</li>
                <li>Chart Patterns (e.g., head and shoulders, double tops)</li>
                <li>Volume Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Stock Investment Strategies
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Different investment strategies suit different goals, time horizons, and risk tolerances:
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Buy and Hold</h3>
              <p>Purchasing stocks of quality companies and holding them for the long term, regardless of short-term market fluctuations. This strategy focuses on the company's long-term growth potential rather than short-term price movements.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Value Investing</h3>
              <p>Seeking stocks that appear undervalued relative to their intrinsic value. Value investors look for companies trading below their true worth due to temporary market inefficiencies or negative sentiment.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Growth Investing</h3>
              <p>Focusing on companies with strong growth potential, even if their current valuations seem high. Growth investors prioritize companies with above-average growth in revenue, earnings, and market share.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Dividend Investing</h3>
              <p>Investing in companies that pay regular dividends, providing a steady income stream. This strategy is popular among income-oriented investors, particularly retirees.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Rupee-Cost Averaging</h3>
              <p>Investing a fixed amount regularly, regardless of market conditions. This approach allows you to buy more shares when prices are low and fewer when prices are high, potentially lowering the average cost per share over time.</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/investment/mutual-funds"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Next: Mutual Funds
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 