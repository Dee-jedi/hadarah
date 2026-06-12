'use client';

import { motion } from 'framer-motion';

export default function PortfolioPage() {
  return (
    <main className="flex-1 bg-white pt-32 pb-24 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
          Full Portfolio
        </h1>
        <p className="text-xl text-gray-500 max-w-xl mx-auto">
          Our complete gallery of residential and hospitality projects is currently being curated. Check back soon.
        </p>
      </motion.div>
    </main>
  );
}
