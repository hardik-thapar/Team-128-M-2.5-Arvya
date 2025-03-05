'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the BotpressChat component
const BotpressChat = dynamic(() => import('./BotpressChat'), {
  ssr: false,
  loading: () => null,
});

// Simple client component wrapper
const BotpressClientWrapper: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <BotpressChat />
    </Suspense>
  );
};

export default BotpressClientWrapper; 