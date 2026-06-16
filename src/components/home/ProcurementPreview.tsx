'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export function ProcurementPreview() {
  return (
    <section className="py-24 sm:py-32 bg-[#111111] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-linear-to-r from-[#C5A059]/20 to-transparent blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 sm:w-16 h-[2px] bg-[#C5A059]"></div>
              <span className="uppercase tracking-widest text-sm font-semibold text-[#C5A059]">B2B Solutions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Hotel Setup Packages & Procurement
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
              We provide end-to-end premium FF&E procurement for boutique hotels and luxury resorts. Exclusive volume pricing and turnkey solutions tailored directly to your brand.
            </p>
            
            <Link 
              href="/procurement"
              className="inline-flex items-center justify-center gap-3 bg-[#C5A059] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#111111] transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Request Quotation
              <motion.svg
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-5 h-5 text-white group-hover:text-[#111111] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
          
          {/* Visual Elements Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            <div className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-4xl hover:bg-white/10 transition-all flex flex-col justify-center aspect-square sm:aspect-auto sm:h-[220px]">
              <h3 className="text-4xl sm:text-5xl font-light text-white mb-3">20<span className="text-[#C5A059]">+</span></h3>
              <p className="text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Rooms Min</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-4xl hover:bg-white/10 transition-all flex flex-col justify-center aspect-square sm:aspect-auto sm:h-[220px] sm:translate-y-12">
              <h3 className="text-4xl sm:text-5xl font-light text-white mb-3">100<span className="text-[#C5A059]">%</span></h3>
              <p className="text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Turnkey</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-4xl hover:bg-white/10 transition-all flex flex-col justify-center aspect-square sm:aspect-auto sm:h-[220px]">
              <h3 className="text-4xl sm:text-5xl font-light text-white mb-3">Top<span className="text-[#C5A059]">.</span></h3>
              <p className="text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Quality</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/5 p-8 rounded-4xl hover:bg-white/10 transition-all flex flex-col justify-center aspect-square sm:aspect-auto sm:h-[220px] sm:translate-y-12">
              <h3 className="text-4xl sm:text-5xl font-light text-white mb-3">24<span className="text-[#C5A059]">/7</span></h3>
              <p className="text-white/50 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">Support</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
