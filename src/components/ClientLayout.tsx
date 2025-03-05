"use client";

import React from 'react';
import { ThemeProvider } from "../context/ThemeContext";
import { AuthProvider } from "../context/AuthContext";
import { WalletProvider } from "../context/WalletContext";
import { TranslationProvider } from '../context/TranslationContext';
import BotpressClientWrapper from "./BotpressClientWrapper";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <AuthProvider>
          <WalletProvider>
            {children}
            <BotpressClientWrapper />
          </WalletProvider>
        </AuthProvider>
      </TranslationProvider>
    </ThemeProvider>
  );
} 