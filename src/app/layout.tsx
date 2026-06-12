import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Hadarah | Premium Interior Design',
  description: 'Transforming spaces into beautiful experiences.',
};

import { FooterWrapper } from '@/components/layout/FooterWrapper';
import { FloatingWhatsApp } from '@/components/layout/FloatingWhatsApp';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen flex flex-col antialiased bg-white text-gray-900 overflow-x-hidden w-full max-w-[100vw]">
        <Navbar />
        <div className="flex-1 w-full overflow-x-hidden relative">
          {children}
        </div>
        <FooterWrapper />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
