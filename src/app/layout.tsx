import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import AppHeader from '@/common/headers/AppHeader'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Regen Projects",
  description: "Next.js + SSR + Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-white`}>
      <AppHeader />
      {children}
      </body>
    </html>
  );
}
