'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the BotpressChat component to avoid SSR issues
const BotpressChat = dynamic(() => import('./BotpressChat'), {
  ssr: false,
  loading: () => null,
});

const BotpressChatWrapper: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted state after component mounts on client
    setIsMounted(true);
    
    // Add error handling for Botpress
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes('botpress') || event.filename?.includes('botpress')) {
        console.error('Botpress error caught:', event.message);
        // Prevent the error from bubbling up
        event.preventDefault();
      }
    };
    
    window.addEventListener('error', handleError);
    
    return () => {
      window.removeEventListener('error', handleError);
      // Clean up Botpress when component unmounts
      if (typeof window !== 'undefined' && window.botpressWebChat) {
        try {
          window.botpressWebChat.destroy();
        } catch (error) {
          console.error('Error destroying Botpress chat:', error);
        }
      }
    };
  }, []);

  // Only render the chat component on the client side
  if (!isMounted) {
    return null;
  }

  return <BotpressChat />;
};

export default BotpressChatWrapper; 