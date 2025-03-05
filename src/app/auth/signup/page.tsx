"use client";

import React from 'react';
import Layout from '../../../components/Layout';
import AuthForm from '../../../components/AuthForm';

export default function SignupPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Create an Account</h1>
          <AuthForm type="signup" />
        </div>
      </div>
    </Layout>
  );
} 