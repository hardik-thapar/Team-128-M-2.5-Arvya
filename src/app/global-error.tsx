'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-purple-600 mb-4">Error</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Application Error</h2>
            <p className="text-gray-600 mb-8 max-w-md">
              We apologize for the inconvenience. The application encountered a critical error.
            </p>
            <button
              onClick={reset}
              className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 