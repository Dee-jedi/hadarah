'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import gal_photo from '../public/images/gal_32.jpg'

const PROCESS_STEPS = [
  {
    id: 1,
    title: 'Consultation & Vision',
    desc: 'We begin by deeply understanding your goals, lifestyle, and the emotional essence of the space you want to create. This is where your dream takes root.'
  },
  {
    id: 2,
    title: 'Design & Sourcing',
    desc: 'Our architectural team drafts bespoke layouts, while our curation experts source extremely rare, premium materials from around the globe to ensure unparalleled quality.'
  },
  {
    id: 3,
    title: 'Execution & Styling',
    desc: 'Flawless, white-glove installation and final styling touches that bring the luxurious vision to life, down to the absolute last curated detail.'
  }
];

export default function WhyUsPage() {
  return (
    <main className="flex-1 bg-white overflow-x-hidden">

      {/* 1. The Full-Bleed Manifesto Hero */}
      <section className="relative w-full h-dvh flex flex-col items-center justify-center overflow-hidden">

        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2500&q=80"
            alt="Hadarah Philosophy"
            fill
            className="object-cover"
            priority
          />
          {/* Deep Cinematic Overlay */}
          <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
        </div>

        {/* Foreground Manifesto Typography */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16 sm:mt-0"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="h-px w-8 sm:w-16 bg-[#D95D39]" />
            <h2 className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#D95D39]">
              The Manifesto
            </h2>
            <span className="h-px w-8 sm:w-16 bg-[#D95D39]" />
          </div>

          <h1 className="text-4xl sm:text-7xl lg:text-8xl font-light tracking-tighter text-white leading-[1.1]">
            Beyond Architecture.<br />
            Beyond Design.<br />
            <span className="text-gray-400">We curate lifestyles.</span>
          </h1>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <span className="text-xs tracking-[0.2em] text-white/50 uppercase">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute top-0 w-full h-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* 2. The Editorial Philosophy Spread */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-32 bg-white relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5"
          >
            <p className="text-2xl sm:text-3xl font-light leading-snug text-gray-900">
              Hadarah Interiors is a premier luxury design firm, renowned for bringing timeless elegance to the world's most exclusive properties.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-6 md:col-start-7 flex flex-col gap-6 text-base sm:text-lg text-gray-500 font-light"
          >
            <p>
              We believe that true luxury is found in the meticulous attention to the unseen details. It is the perfect symmetry of a room, the exact weight of a door handle, and the precise way natural light washes across a bespoke texture.
            </p>
            <p>
              Whether it is a high-end commercial lounge, a boutique hotel, or a private residence, our approach remains the same: we transform abstract visions into sophisticated, functional art that elevates every human experience within it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. The Vertical Roadmap */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 pb-32 bg-white relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center sm:text-left"
        >
          <h2 className="text-4xl font-light tracking-tight text-gray-900">
            Our{' '}
            <span className="relative inline-block">
              Process
              {/* Red Underline */}
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-[105%] h-[clamp(8px,1.5vw,12px)]"
                viewBox="0 0 120 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 7C20 3 40 2 60 3C80 4 100 5 118 3"
                  stroke="#D95D39"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
        </motion.div>

        {/* The Timeline Container */}
        <div className="relative pl-[100px] sm:pl-[160px]">

          {/* The Steps */}
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative mb-24 last:mb-0"
            >
              {/* Connecting Line Segment (Hidden on last item) */}
              {index !== PROCESS_STEPS.length - 1 && (
                <div className="absolute top-2.5 left-[-30px] sm:left-[-48px] w-px h-[calc(100%+6rem)] bg-gray-200 z-0" />
              )}

              {/* Massive Number on the Left */}
              <div className="absolute left-[-100px] sm:left-[-160px] w-10 sm:w-16 text-right">
                <span className="text-3xl sm:text-4xl font-light text-gray-300">
                  0{step.id}
                </span>
              </div>

              {/* The Dot on the Line */}
              <div className="absolute left-[-34px] sm:left-[-52px] top-2.5 w-2 h-2 rounded-full bg-white border border-[#D95D39] ring-4 ring-white z-10" />

              {/* Content */}
              <div className="pt-1 relative z-20">
                <h3 className="text-2xl font-medium text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
