"use client";

import { useState } from 'react';
import axios from 'axios';

const InvestmentForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    risk_level: '',
    savings: '',
    investment_goal: ''
  });

  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Convert string values to numbers
      const payload = {
        age: parseInt(formData.age),
        income: parseInt(formData.income),
        risk_level: parseInt(formData.risk_level),
        savings: parseInt(formData.savings),
        investment_goal: parseInt(formData.investment_goal)
      };
      
      const response = await axios.post('https://ai-backend-7cm1.onrender.com/predict', payload);
      setRecommendation(response.data.recommended_circle);
    } catch (error) {
      console.error('Error fetching recommendation:', error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          setError(`Failed to get recommendation (${error.response.status}). Please try again.`);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('No response received:', error.request);
          setError('Failed to connect to the recommendation service. Please try again later.');
        } else {
          // Something happened in setting up the request that triggered an Error
          setError(`Error: ${error.message}`);
        }
      } else {
        setError('Failed to get recommendation. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const getCircleDescription = (circle: string) => {
    switch(circle) {
      case 'Conservative':
        return 'Low-risk investments focused on capital preservation with modest returns.';
      case 'Balanced':
        return 'Moderate-risk approach balancing growth and income with medium volatility.';
      case 'Growth':
        return 'Higher-risk investments aimed at long-term capital appreciation.';
      case 'Aggressive':
        return 'Highest-risk strategy targeting maximum returns with significant volatility.';
      default:
        return '';
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Personalized Investment Plan</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="age" className="block text-sm font-medium mb-1">Age</label>
          <input
            id="age"
            type="number"
            name="age"
            placeholder="Your age"
            value={formData.age}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        
        <div>
          <label htmlFor="income" className="block text-sm font-medium mb-1">Annual Income (₹)</label>
          <input
            id="income"
            type="number"
            name="income"
            placeholder="Your annual income"
            value={formData.income}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        
        <div>
          <label htmlFor="risk_level" className="block text-sm font-medium mb-1">Risk Tolerance</label>
          <select
            id="risk_level"
            name="risk_level"
            value={formData.risk_level}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          >
            <option value="">Select risk level</option>
            <option value="1">Low - I prefer stability</option>
            <option value="2">Medium-Low - I can accept small fluctuations</option>
            <option value="3">Medium-High - I'm comfortable with moderate risk</option>
            <option value="4">High - I can tolerate significant volatility</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="savings" className="block text-sm font-medium mb-1">Current Savings (₹)</label>
          <input
            id="savings"
            type="number"
            name="savings"
            placeholder="Your current savings"
            value={formData.savings}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          />
        </div>
        
        <div>
          <label htmlFor="investment_goal" className="block text-sm font-medium mb-1">Investment Goal</label>
          <select
            id="investment_goal"
            name="investment_goal"
            value={formData.investment_goal}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
            required
          >
            <option value="">Select investment goal</option>
            <option value="1">Short-term (1-3 years)</option>
            <option value="2">Medium-term (3-7 years)</option>
            <option value="3">Long-term (7+ years)</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-lg transition-colors"
          disabled={loading}
        >
          {loading ? 'Analyzing...' : 'Get Recommendation'}
        </button>
      </form>
      
      {error && <p className="mt-4 text-red-500">{error}</p>}
      
      {recommendation && (
        <div className="mt-6 p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
          <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300">Your Recommended Investment Circle</h3>
          <div className="mt-2 text-xl font-bold">{recommendation}</div>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{getCircleDescription(recommendation)}</p>
        </div>
      )}
    </div>
  );
};

export default InvestmentForm; 