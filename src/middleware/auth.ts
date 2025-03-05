"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function useAuthProtection() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      router.push('/auth/signin');
    }
  }, [router]);
}

export function useRedirectIfAuthenticated() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      router.push('/community');
    }
  }, [router]);
}

export function useUser() {
  const getUser = () => {
    if (typeof window !== 'undefined') {
      const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      if (isLoggedIn) {
        return {
          email: localStorage.getItem('userEmail'),
          name: localStorage.getItem('userName'),
          isLoggedIn: true
        };
      }
    }
    return {
      email: null,
      name: null,
      isLoggedIn: false
    };
  };

  return getUser();
} 