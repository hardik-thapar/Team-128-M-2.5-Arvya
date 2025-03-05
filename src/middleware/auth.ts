"use client";

import { useEffect, useState } from 'react';
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
      router.push('/dashboard');
    }
  }, [router]);
}

interface UserState {
  email: string | null;
  name: string | null;
  isLoggedIn: boolean;
}

export function useUser() {
  const [user, setUser] = useState<UserState>({
    email: null,
    name: null,
    isLoggedIn: false
  });

  useEffect(() => {
    // This will run only on the client side
    if (typeof window !== 'undefined') {
      const updateUserState = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        if (isLoggedIn) {
          setUser({
            email: localStorage.getItem('userEmail'),
            name: localStorage.getItem('userName'),
            isLoggedIn: true
          });
        } else {
          setUser({
            email: null,
            name: null,
            isLoggedIn: false
          });
        }
      };

      // Initial check
      updateUserState();

      // Listen for storage changes
      window.addEventListener('storage', updateUserState);
      
      // Custom event for auth state changes
      const handleAuthChange = () => {
        updateUserState();
      };
      
      window.addEventListener('authStateChanged', handleAuthChange);
      
      return () => {
        window.removeEventListener('storage', updateUserState);
        window.removeEventListener('authStateChanged', handleAuthChange);
      };
    }
  }, []);

  return user;
} 