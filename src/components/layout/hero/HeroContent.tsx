'use client';

import Link from 'next/link';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] },
  },
};

const WORDS = ["Design.", "Decorate.", "Transform.", "Furnish."];

export function HeroContent() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      animate="visible"
      className="mx-auto max-w-4xl px-4 sm:px-5 pt-28 sm:pt-36 lg:pt-40 pb-12 text-center"
    >
      {/* Main heading */}
      <motion.h1
        variants={fadeDown}
        className="text-[clamp(2.2rem,8vw,4.5rem)] font-bold text-[#111111] leading-[1.1] tracking-tight mt-6"
      >
        <span className="relative inline-block whitespace-nowrap">
          <span className="relative inline-block overflow-hidden align-bottom h-[1.2em] w-[5em] text-left text-[#111111]">
            <AnimatePresence initial={false}>
              <motion.span
                key={wordIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="absolute left-0 bottom-0"
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </span>
        <br className="sm:hidden" />
        <span className="whitespace-nowrap">
          Your Space
          Elevated.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        variants={fadeDown}
        className="mx-auto max-w-3xl mt-8 text-[15px] sm:text-[17px] leading-relaxed text-gray-600 px-2"
      >
        From giving boutique hotels a premium feel, to crafting breathtaking residential spaces, we design interiors that leave a lasting impression.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        variants={fadeDown}
        className="flex flex-row justify-center gap-3 sm:gap-4 mt-10 px-2"
      >
        <Link
          href="/portfolio"
          className="group inline-flex flex-1 max-w-[200px] min-w-[130px] whitespace-nowrap items-center justify-center h-11 sm:h-12 px-4 sm:px-8 text-[13px] sm:text-[15px] font-medium text-white bg-[#D95D39] rounded-full transition-all duration-200 hover:bg-[#B84D2F] hover:shadow-lg hover:shadow-orange-500/20 active:scale-[0.97]"
        >
          View Portfolio
          <svg
            className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>

        <Link
          href="/contact"
          className="group inline-flex flex-1 max-w-[200px] min-w-[130px] whitespace-nowrap items-center justify-center h-11 sm:h-12 px-4 sm:px-8 text-[13px] sm:text-[15px] font-medium text-[#D95D39] bg-white border-[1.5px] border-[#D95D39] rounded-full transition-all duration-200 hover:bg-orange-50 active:scale-[0.97]"
        >
          Book Consult
          <svg
            className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>
    </motion.div>
  );
}
