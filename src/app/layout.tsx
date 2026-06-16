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
  title: 'Hadarah | Luxury Interior Design & Procurement in Kwara State',
  description: 'Hadarah is a premium interior design, space planning, and hospitality procurement firm based in Kwara State, Nigeria. We transform residential and commercial spaces into breathtaking experiences.',
  keywords: ['Interior Design Kwara State', 'Luxury Furniture Ilorin', 'Hospitality Procurement Nigeria', 'Architectural Design Kwara', 'Hadarah Interiors', 'B2B Hotel Setup'],
  openGraph: {
    title: 'Hadarah | Premium Interior Design',
    description: 'Transforming spaces into beautiful experiences across Kwara State and beyond.',
    url: 'https://hadarah.com',
    siteName: 'Hadarah',
    images: [
      {
        url: '/images/og-image.png', // Note: We need to upload this image to the public folder
        width: 1200,
        height: 630,
        alt: 'Hadarah Interior Design Portfolio',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hadarah | Premium Interior Design',
    description: 'Transforming spaces into beautiful experiences across Kwara State and beyond.',
    images: ['/images/og-image.png'],
  },
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
