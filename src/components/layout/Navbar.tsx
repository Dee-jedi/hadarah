'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },

  { name: 'Why Us', href: '/why-us' },

  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Services', href: '/services' },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isDarkHero = (pathname === '/why-us' || pathname === '/services') && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-xs py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center gap-2 group">
            <div className={`w-8 h-8 flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12 ${pathname === '/why-us' && !scrolled ? 'bg-white' : 'bg-[#D95D39]'}`}>
              <span className={`font-bold text-xl leading-none ${pathname === '/why-us' && !scrolled ? 'text-[#111111]' : 'text-white'}`}>H</span>
            </div>
            <span className={`font-bold text-xl tracking-wide transition-colors ${isDarkHero ? 'text-white' : 'text-[#111111]'}`}>
              Hadarah.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              let textColorClass = 'text-gray-600 hover:text-[#D95D39]';
              if (isActive) textColorClass = 'text-[#D95D39]';
              else if (isDarkHero) textColorClass = 'text-white/80 hover:text-white';

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors relative ${textColorClass}`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#D95D39]"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="text-sm font-medium text-white bg-[#111111] px-5 py-2.5 rounded-full transition-all hover:bg-[#D95D39] hover:shadow-lg hover:shadow-orange-500/20 active:scale-95"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="relative z-50 md:hidden w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-5 flex flex-col justify-center items-end gap-1.5">
              <span
                className={`h-0.5 bg-[#D95D39] rounded-full transform transition-all duration-300 ${mobileMenuOpen ? 'w-5 rotate-45 translate-y-[4px]' : 'w-5'
                  }`}
              />
              <span
                className={`h-0.5 bg-[#D95D39] rounded-full transform transition-all duration-300 ${mobileMenuOpen ? 'w-5 -rotate-45 translate-y-[-4px]' : 'w-4'
                  }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-60 md:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-[80%] max-w-sm h-dvh bg-white z-70 flex flex-col pt-8 px-8 pb-12 md:hidden shadow-2xl overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between mb-12">
                <Link href="/" className="flex items-center gap-2 group" onClick={() => setMobileMenuOpen(false)}>
                  <div className="w-8 h-8 bg-[#D95D39] flex items-center justify-center rounded-sm transition-transform group-hover:rotate-12">
                    <span className="text-white font-bold text-xl leading-none">H</span>
                  </div>
                  <span className="text-[#111111] font-bold text-xl tracking-wide">
                    Hadarah.
                  </span>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="relative z-50 w-12 h-12 flex items-center justify-center bg-white rounded-full shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all -mr-2 hover:scale-105"
                  aria-label="Close menu"
                >
                  <div className="w-5 flex flex-col justify-center items-center gap-1.5">
                    <span className="h-0.5 w-5 bg-[#334155] rounded-full transform rotate-45 translate-y-[4px]" />
                    <span className="h-0.5 w-5 bg-[#334155] rounded-full transform -rotate-45 translate-y-[-4px]" />
                  </div>
                </button>
              </div>

              <nav className="flex flex-col gap-6 text-2xl font-medium tracking-tight">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`transition-colors ${pathname === link.href ? 'text-[#D95D39]' : 'text-gray-900 hover:text-[#D95D39]'}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-center text-lg font-medium text-white bg-[#D95D39] px-6 py-4 rounded-full transition-all hover:opacity-90 shadow-md hover:shadow-xl hover:-translate-y-0.5"
                >
                  Let's Talk
                  <motion.svg
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="ml-2 w-5 h-5 text-white/90"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
