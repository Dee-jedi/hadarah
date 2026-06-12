'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900">
      {/* Big CTA Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mb-8">
            Ready to elevate your space?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600 mb-10">
            Let's discuss how we can transform your vision into a sophisticated, timeless reality.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-[#D95D39] rounded-full transition-all hover:bg-[#B84D2F] hover:shadow-xl hover:-translate-y-1"
          >
            Let's Talk
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-[#111111] flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-xl leading-none">H</span>
            </div>
            <span className="text-[#111111] font-bold text-xl tracking-wide">
              Hadarah<span className="text-[#D95D39]">.</span>
            </span>
          </div>
          
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Hadarah Interiors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
