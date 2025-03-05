"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MutualFundsPage() {
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
        Understanding Mutual Funds
      </h1>
      
      <div className="prose max-w-none mb-8">
        <p className="text-lg text-gray-700">
          Mutual funds are investment vehicles that pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. They offer an accessible way for individuals to invest in professionally managed portfolios, even with limited capital and investment knowledge.
        </p>
      </div>

      <div className="mb-10 rounded-lg overflow-hidden shadow-md">
        <iframe 
          width="100%" 
          height="400" 
          src="https://www.youtube.com/embed/qB4QDP5Pzn0" 
          title="Mutual Funds Explained for Beginners" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          className="w-full"
        ></iframe>
      </div>
      
      <div className="p-6 rounded-lg mb-8 bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          How Mutual Funds Work
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Mutual funds operate on a simple principle: pooling resources to achieve diversification and professional management. Here's how they work:
          </p>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">The Investment Process</h3>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <strong className="text-purple-700">Pooling of Funds:</strong> 
                <p>Multiple investors contribute money to the mutual fund.</p>
              </li>
              <li>
                <strong className="text-purple-700">Professional Management:</strong> 
                <p>A fund manager (or team) invests the pooled money in a portfolio of securities based on the fund's investment objective.</p>
              </li>
              <li>
                <strong className="text-purple-700">Unit Allocation:</strong> 
                <p>Investors receive units of the fund proportionate to their investment amount.</p>
              </li>
              <li>
                <strong className="text-purple-700">Net Asset Value (NAV):</strong> 
                <p>The price of each unit is determined by the fund's Net Asset Value, calculated by dividing the total value of the fund's assets by the number of outstanding units.</p>
              </li>
              <li>
                <strong className="text-purple-700">Returns:</strong> 
                <p>Investors earn returns through capital appreciation (increase in NAV) and/or dividends/interest distributed by the fund.</p>
              </li>
            </ol>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Key Participants</h3>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-purple-700">Asset Management Company (AMC):</strong> 
                <p>The company that manages the mutual fund (e.g., HDFC AMC, SBI Funds Management, Aditya Birla Sun Life AMC).</p>
              </li>
              <li>
                <strong className="text-purple-700">Fund Manager:</strong> 
                <p>The professional responsible for making investment decisions for the fund.</p>
              </li>
              <li>
                <strong className="text-purple-700">Trustees:</strong> 
                <p>Oversee the activities of the AMC to ensure they act in the best interest of investors.</p>
              </li>
              <li>
                <strong className="text-purple-700">Registrar and Transfer Agent:</strong> 
                <p>Maintains records of investors and processes transactions.</p>
              </li>
              <li>
                <strong className="text-purple-700">Custodian:</strong> 
                <p>Holds the securities owned by the mutual fund.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Types of Mutual Funds
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Mutual funds are classified based on various parameters such as asset class, investment objective, structure, and more:
          </p>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Based on Asset Class</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Equity Funds</h4>
                <p>Invest primarily in stocks of companies. These funds aim for capital appreciation and typically offer higher potential returns with higher risk.</p>
                <p className="mt-2 font-medium">Sub-categories include:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Large-cap funds</li>
                  <li>Mid-cap funds</li>
                  <li>Small-cap funds</li>
                  <li>Multi-cap funds</li>
                  <li>Sector/Thematic funds</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Debt Funds</h4>
                <p>Invest in fixed-income securities like government bonds, corporate bonds, and money market instruments. These funds aim for regular income and capital preservation.</p>
                <p className="mt-2 font-medium">Sub-categories include:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Liquid funds</li>
                  <li>Ultra short-term funds</li>
                  <li>Short-term funds</li>
                  <li>Corporate bond funds</li>
                  <li>Government securities funds</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Hybrid Funds</h4>
                <p>Invest in a mix of equity and debt instruments to balance risk and return. These funds offer moderate risk and returns.</p>
                <p className="mt-2 font-medium">Sub-categories include:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Balanced funds</li>
                  <li>Aggressive hybrid funds</li>
                  <li>Conservative hybrid funds</li>
                  <li>Multi-asset allocation funds</li>
                </ul>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Other Specialized Funds</h4>
                <p>Invest in specific asset classes or follow unique strategies.</p>
                <p className="mt-2 font-medium">Examples include:</p>
                <ul className="list-disc pl-5 mt-1 space-y-1">
                  <li>Index funds</li>
                  <li>Exchange-Traded Funds (ETFs)</li>
                  <li>Fund of Funds (FoFs)</li>
                  <li>International/Overseas funds</li>
                  <li>Commodity funds</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Based on Investment Structure</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Open-Ended Funds</h4>
                <p>Allow investors to enter and exit at any time at the prevailing NAV. These funds do not have a fixed maturity date and provide high liquidity.</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Close-Ended Funds</h4>
                <p>Have a fixed maturity period (typically 3-5 years). Investors can buy units only during the initial offering period. Units are listed on stock exchanges for trading.</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Interval Funds</h4>
                <p>A hybrid of open-ended and close-ended funds. These funds allow investors to buy or sell units at pre-defined intervals (e.g., quarterly or half-yearly).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Benefits of Mutual Funds
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-purple-700">Professional Management:</strong> 
                <p>Experienced fund managers make investment decisions based on research and market analysis.</p>
              </li>
              <li>
                <strong className="text-purple-700">Diversification:</strong> 
                <p>Even with a small investment, you gain exposure to a diversified portfolio, reducing risk.</p>
              </li>
              <li>
                <strong className="text-purple-700">Affordability:</strong> 
                <p>Start investing with as little as ₹500 through Systematic Investment Plans (SIPs).</p>
              </li>
              <li>
                <strong className="text-purple-700">Liquidity:</strong> 
                <p>Open-ended funds allow redemption at any time, providing easy access to your money.</p>
              </li>
              <li>
                <strong className="text-purple-700">Convenience:</strong> 
                <p>Easy to buy, sell, and track investments through online platforms and mobile apps.</p>
              </li>
              <li>
                <strong className="text-purple-700">Regulatory Oversight:</strong> 
                <p>Mutual funds in India are regulated by SEBI, ensuring transparency and investor protection.</p>
              </li>
              <li>
                <strong className="text-purple-700">Tax Efficiency:</strong> 
                <p>Certain mutual funds (like ELSS) offer tax benefits under Section 80C of the Income Tax Act.</p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 rounded-lg shadow-md bg-white border border-purple-200">
          <h3 className="text-xl font-semibold mb-3 text-purple-800">
            Risks and Limitations
          </h3>
          <div className="space-y-3 text-gray-700">
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <strong className="text-purple-700">Market Risk:</strong> 
                <p>Mutual funds are subject to market fluctuations, and there's no guarantee of returns.</p>
              </li>
              <li>
                <strong className="text-purple-700">Fund Manager Risk:</strong> 
                <p>Performance depends on the fund manager's decisions, which may not always be optimal.</p>
              </li>
              <li>
                <strong className="text-purple-700">Expense Ratio:</strong> 
                <p>Fees and expenses reduce overall returns. Higher expense ratios can significantly impact long-term performance.</p>
              </li>
              <li>
                <strong className="text-purple-700">Exit Load:</strong> 
                <p>Some funds charge a fee (exit load) if you redeem your investment before a specified period.</p>
              </li>
              <li>
                <strong className="text-purple-700">Tracking Error:</strong> 
                <p>Index funds may not perfectly replicate the performance of their benchmark indices.</p>
              </li>
              <li>
                <strong className="text-purple-700">Concentration Risk:</strong> 
                <p>Sector or thematic funds may be concentrated in specific industries, increasing risk.</p>
              </li>
              <li>
                <strong className="text-purple-700">Liquidity Risk:</strong> 
                <p>In certain market conditions, funds may face challenges in selling securities to meet redemption requests.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          How to Invest in Mutual Funds
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Investing in mutual funds is a straightforward process:
          </p>
          
          <ol className="list-decimal pl-5 space-y-4 mt-4">
            <li>
              <strong className="text-purple-700">Assess Your Financial Goals and Risk Tolerance:</strong> 
              <p>Define your investment objectives (wealth creation, regular income, tax saving), time horizon, and risk appetite.</p>
            </li>
            <li>
              <strong className="text-purple-700">Complete KYC (Know Your Customer) Requirements:</strong> 
              <p>Submit identity and address proof documents (PAN card, Aadhaar card, etc.) to comply with regulatory requirements.</p>
            </li>
            <li>
              <strong className="text-purple-700">Choose the Right Mutual Fund:</strong> 
              <p>Select funds that align with your financial goals, risk tolerance, and investment horizon. Research fund performance, expense ratio, fund manager experience, and portfolio composition.</p>
            </li>
            <li>
              <strong className="text-purple-700">Decide on the Investment Mode:</strong> 
              <p>Choose between:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li><strong className="text-purple-700">Lump Sum:</strong> Investing a large amount at once</li>
                <li><strong className="text-purple-700">Systematic Investment Plan (SIP):</strong> Investing a fixed amount at regular intervals (monthly, quarterly)</li>
              </ul>
            </li>
            <li>
              <strong className="text-purple-700">Select an Investment Platform:</strong> 
              <p>Invest through:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>Directly from the AMC's website or office</li>
                <li>Through a mutual fund distributor or financial advisor</li>
                <li>Via online investment platforms or mobile apps</li>
                <li>Through your bank</li>
              </ul>
            </li>
            <li>
              <strong className="text-purple-700">Monitor Your Investments:</strong> 
              <p>Regularly review your portfolio's performance and make adjustments if necessary. However, avoid frequent changes based on short-term market movements.</p>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-white border border-purple-200 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Understanding Mutual Fund Costs
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Mutual funds involve various costs that can impact your overall returns:
          </p>
          
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Expense Ratio</h3>
            <p>
              The annual fee charged by the fund to cover operating expenses, management fees, administrative costs, and other expenses. It's expressed as a percentage of the fund's average net assets.
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Equity funds: Maximum 2.25%</li>
              <li>Debt funds: Maximum 2.00%</li>
              <li>Index funds and ETFs: Typically lower (0.05% to 0.50%)</li>
            </ul>
            <p className="mt-2">
              A higher expense ratio reduces your net returns. For example, if a fund generates a 12% return but has an expense ratio of 2%, your effective return is 10%.
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Exit Load</h3>
            <p>
              A fee charged when you redeem (sell) your mutual fund units before a specified period. It's designed to discourage short-term investing and is typically:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>1% if redeemed within 1 year of investment</li>
              <li>Nil after the specified period</li>
            </ul>
            <p className="mt-2">
              Different funds have different exit load structures, so it's important to check before investing.
            </p>
          </div>
          
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-purple-700 mb-3">Direct vs. Regular Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-3">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Direct Plans</h4>
                <p>Purchased directly from the AMC without any intermediary. These plans have lower expense ratios as they don't include distributor commissions.</p>
              </div>
              
              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-700 mb-2">Regular Plans</h4>
                <p>Purchased through intermediaries like distributors, advisors, or banks. These plans have higher expense ratios as they include distributor commissions.</p>
              </div>
            </div>
            <p className="mt-3">
              The difference in expense ratio between direct and regular plans can be 0.5% to 1.5%, which can significantly impact long-term returns.
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 rounded-lg bg-purple-50">
        <h2 className="text-2xl font-bold mb-4 text-purple-800">
          Mutual Fund Investment Strategies
        </h2>
        <div className="space-y-4 text-gray-700">
          <p>
            Here are some effective strategies for mutual fund investing:
          </p>
          
          <div className="space-y-4 mt-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Systematic Investment Plan (SIP)</h3>
              <p>Invest a fixed amount at regular intervals (typically monthly) regardless of market conditions. This strategy:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Promotes disciplined investing</li>
                <li>Leverages rupee-cost averaging (buying more units when prices are low and fewer when prices are high)</li>
                <li>Reduces the impact of market volatility</li>
                <li>Harnesses the power of compounding</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Asset Allocation</h3>
              <p>Distribute your investments across different asset classes (equity, debt, gold, etc.) based on your risk tolerance and financial goals. This strategy:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Balances risk and return</li>
                <li>Reduces portfolio volatility</li>
                <li>Provides diversification benefits</li>
                <li>Can be adjusted as your financial situation changes</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Goal-Based Investing</h3>
              <p>Align your mutual fund investments with specific financial goals (education, retirement, home purchase, etc.). This strategy:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Provides clarity and purpose to your investments</li>
                <li>Helps in selecting appropriate funds based on time horizon</li>
                <li>Makes it easier to track progress towards goals</li>
                <li>Enables better financial planning</li>
              </ul>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h3 className="font-semibold text-purple-700 mb-2">Core and Satellite Strategy</h3>
              <p>Build a portfolio with a stable "core" (index funds or large-cap funds) and supplement it with "satellite" investments (mid-cap, small-cap, or sector funds) for potentially higher returns. This strategy:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Balances stability with growth potential</li>
                <li>Provides diversification across market segments</li>
                <li>Allows for tactical allocation to capture market opportunities</li>
                <li>Manages risk while seeking enhanced returns</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link 
            href="/education/investment/stocks"
            className="inline-flex items-center font-medium text-purple-600"
          >
            Previous: Stocks
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 