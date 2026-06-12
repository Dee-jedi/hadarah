'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Hadarah completely transformed our boutique hotel. Their attention to detail, sophisticated understanding of space, and sheer luxury aesthetic gave us the exact premium feel we were hoping for. An absolutely flawless execution.",
    author: "Eleanor",
    role: "Owner, The Aura Hotel"
  },
  {
    id: 2,
    quote: "Working with Hadarah was a revelation. They brought an unmatched level of sophistication and timeless elegance to our penthouse project. Every room feels like a masterpiece.",
    author: "Marcus",
    role: "Resident, Lumina Penthouse"
  },
  {
    id: 3,
    quote: "Our commercial space now feels like a high-end luxury lounge. The attention to material, lighting, and texture is second to none. Our clients are consistently blown away.",
    author: "Sarah",
    role: "Director, The Obsidian Lounge"
  },
  {
    id: 4,
    quote: "From the first consultation to the final reveal, the team at Hadarah demonstrated absolute mastery over interior architecture. They didn't just design a house; they curated a lifestyle.",
    author: "David",
    role: "Owner, Villa Serenity"
  }
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(45rem_50rem_at_top,var(--color-gray-100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-gray-600/10 ring-1 ring-gray-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-2xl lg:max-w-4xl flex flex-col justify-center">
        <div className="text-center">
          <svg className="mx-auto h-12 w-12 text-[#D95D39]/40 mb-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <div className="relative min-h-[300px] sm:min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.figure
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full absolute"
              >
                <blockquote className="text-center text-xl font-medium leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>"{testimonials[activeIndex].quote}"</p>
                </blockquote>
                <figcaption className="mt-10">
                  <div className="flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">{testimonials[activeIndex].author}</div>
                    <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600">{testimonials[activeIndex].role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Editorial Numeric Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center gap-3 sm:gap-4 text-sm tracking-widest text-gray-400 font-light">
              <span className="text-gray-900 font-medium">{(activeIndex + 1).toString().padStart(2, '0')}</span>
              <span className="w-16 sm:w-32 h-px bg-gray-300 relative">
                {/* Active progress line overlay */}
                <span 
                  className="absolute top-0 left-0 h-px bg-[#D95D39] transition-all duration-500"
                  style={{ width: `${((activeIndex + 1) / testimonials.length) * 100}%` }}
                />
              </span>
              <span>{testimonials.length.toString().padStart(2, '0')}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
