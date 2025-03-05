'use client';

import React from 'react';
import Button from '../components/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">Error</h1>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Something went wrong</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          We apologize for the inconvenience. Please try again later.
        </p>
        <Button onClick={reset}>
          Try Again
        </Button>
      </div>
    </div>
  );
} 