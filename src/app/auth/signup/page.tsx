"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Layout from '../../../components/Layout';
import Link from 'next/link';
import { useAuth } from '../../../context/AuthContext';
import { createUserProfile } from '../../../lib/firebase/firestore';

const SignUpPage = () => {
  const router = useRouter();
  const { signup, updateUserProfile } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Basic validation
      if (!name || !email || !password || !confirmPassword) {
        throw new Error('Please fill in all fields');
      }

      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }

      // Create user with Firebase
      const user = await signup(email, password);
      
      // Update user profile with display name
      await updateUserProfile(name);
      
      // Create user profile in Firestore if needed
      try {
        await createUserProfile(user.uid, {
          displayName: name,
          email,
          createdAt: new Date()
        });
      } catch (profileError) {
        console.error('Error creating user profile:', profileError);
      }

      // Set user as logged in
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', name);

      // Redirect to dashboard
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Signup error:', error);
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered. Please log in instead.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address.');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Please use at least 6 characters.');
      } else {
        setError(error.message || 'An error occurred during sign up');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-center text-purple-900 mb-6">Create an Account</h2>
              
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your full name"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Enter your email"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Create a password"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-medium mb-2">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Confirm your password"
                    required
                    disabled={loading}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full py-2 px-4 rounded-full font-medium text-white bg-purple-800 hover:bg-purple-900 transition-colors ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? 'Creating Account...' : 'Sign Up'}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">
                  Already have an account?{' '}
                  <Link href="/auth/signin" className="text-purple-800 hover:text-purple-900">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SignUpPage; 