"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
  updateEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';

interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
  signup: (email: string, password: string, name: string) => Promise<User | null>;
  login: (email: string, password: string) => Promise<User | null>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserProfile: (displayName: string) => Promise<void>;
  updateUserEmail: (email: string, password: string) => Promise<void>;
  updateUserPassword: (currentPassword: string, newPassword: string) => Promise<void>;
  signInWithGoogle: () => Promise<User>;
}

const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  loading: true,
  error: null,
  signup: async () => null,
  login: async () => null,
  logout: async () => {},
  resetPassword: async () => {},
  updateUserProfile: async () => {},
  updateUserEmail: async () => {},
  updateUserPassword: async () => {},
  signInWithGoogle: async () => { throw new Error('Not implemented'); },
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        setCurrentUser(user);
        setLoading(false);
        
        // Update localStorage based on auth state
        if (user) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('userEmail', user.email || '');
          localStorage.setItem('userName', user.displayName || '');
          
          // Dispatch custom event for components that need to know about auth changes
          window.dispatchEvent(new Event('authStateChanged'));
        } else {
          localStorage.removeItem('isLoggedIn');
          localStorage.removeItem('userEmail');
          localStorage.removeItem('userName');
          
          // Dispatch custom event for components that need to know about auth changes
          window.dispatchEvent(new Event('authStateChanged'));
        }
      });
      
      return unsubscribe;
    } catch (error) {
      console.error('Error setting up auth state listener:', error);
      setLoading(false);
      return () => {};
    }
  }, []);

  const signup = async (email: string, password: string, name: string): Promise<User | null> => {
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Update profile with display name
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name
        });
        
        // Update local state
        setCurrentUser({
          ...userCredential.user,
          displayName: name
        });
        
        // Update localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', name);
      }
      
      return userCredential.user;
    } catch (error: any) {
      setError(error.message);
      console.error('Signup error:', error);
      return null;
    }
  };

  const login = async (email: string, password: string): Promise<User | null> => {
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Update localStorage
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userName', userCredential.user.displayName || '');
      
      return userCredential.user;
    } catch (error: any) {
      setError(error.message);
      console.error('Login error:', error);
      return null;
    }
  };

  const logout = async (): Promise<void> => {
    setError(null);
    try {
      await signOut(auth);
      
      // Clear localStorage
      localStorage.removeItem('isLoggedIn');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userName');
    } catch (error: any) {
      setError(error.message);
      console.error('Logout error:', error);
    }
  };

  const resetPassword = async (email: string): Promise<void> => {
    setError(null);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      setError(error.message);
      console.error('Reset password error:', error);
      throw error;
    }
  };

  const updateUserProfile = async (displayName: string): Promise<void> => {
    setError(null);
    try {
      if (currentUser) {
        await updateProfile(currentUser, { displayName });
        
        // Update localStorage
        localStorage.setItem('userName', displayName);
        
        // Update local state to trigger re-render
        setCurrentUser({ ...currentUser, displayName });
      }
    } catch (error: any) {
      setError(error.message);
      console.error('Update profile error:', error);
      throw error;
    }
  };

  const updateUserEmail = async (email: string, password: string): Promise<void> => {
    setError(null);
    try {
      if (currentUser && currentUser.email) {
        // Re-authenticate user before changing email
        const credential = EmailAuthProvider.credential(currentUser.email, password);
        await reauthenticateWithCredential(currentUser, credential);
        
        // Update email
        await updateEmail(currentUser, email);
        
        // Update localStorage
        localStorage.setItem('userEmail', email);
        
        // Update local state to trigger re-render
        setCurrentUser({ ...currentUser, email });
      }
    } catch (error: any) {
      setError(error.message);
      console.error('Update email error:', error);
      throw error;
    }
  };

  const updateUserPassword = async (currentPassword: string, newPassword: string): Promise<void> => {
    setError(null);
    try {
      if (currentUser && currentUser.email) {
        // Re-authenticate user before changing password
        const credential = EmailAuthProvider.credential(currentUser.email, currentPassword);
        await reauthenticateWithCredential(currentUser, credential);
        
        // Update password
        await updatePassword(currentUser, newPassword);
      }
    } catch (error: any) {
      setError(error.message);
      console.error('Update password error:', error);
      throw error;
    }
  };

  const signInWithGoogle = async (): Promise<User> => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  };

  const value = {
    currentUser,
    loading,
    error,
    signup,
    login,
    logout,
    resetPassword,
    updateUserProfile,
    updateUserEmail,
    updateUserPassword,
    signInWithGoogle
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
}; 