'use client';

import { usePathname } from 'next/navigation';
import { Footer } from './Footer';

export function FooterWrapper() {
  const pathname = usePathname();
  
  if (pathname === '/contact' || pathname === '/portfolio' || pathname.startsWith('/shop') || pathname === '/procurement') {
    return null;
  }
  
  return <Footer />;
}
