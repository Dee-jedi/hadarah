'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const previewServices = [
  {
    id: '01',
    name: 'Interior Design',
    description: 'Bespoke residential, hospitality and commercial interiors.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '02',
    name: 'Space Planning',
    description: 'Optimize layouts for beauty, comfort and efficiency.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '03',
    name: 'Procurement',
    description: 'Source, supply and install premium hospitality products.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80'
  }
];

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 sm:w-12 h-[2px] bg-[#C5A059]"></div>
              <span className="uppercase tracking-widest text-xs font-semibold text-[#C5A059]">Our Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111111] leading-tight">
              Comprehensive <br />
              <span className="text-gray-400 font-light">Design Solutions.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-gray-900 hover:text-[#C5A059] transition-colors group"
            >
              <span>View All Services</span>
              <motion.svg
                animate={{ x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-4 h-4 text-[#C5A059] group-hover:text-[#C5A059] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </Link>
          </motion.div>
        </div>

        {/* Editorial 3-Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {previewServices.map((service, index) => (
            <Link href="/services" key={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group flex flex-col w-full h-[180px] sm:h-[220px] rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Background Image & Overlays */}
                <div 
                  className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
                </div>

                {/* Content Wrapper */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  {/* Top Section */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                      <span className="flex h-1.5 w-1.5 rounded-full bg-[#C5A059]"></span>
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/90">
                        {service.id}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:border-[#C5A059] transition-all duration-300">
                      <svg className="w-4 h-4 text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="mt-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                      {service.name}
                    </h3>
                    <p className="text-white/80 text-sm font-medium drop-shadow-sm line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
