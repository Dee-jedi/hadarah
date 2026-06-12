'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'The Kensington Residence',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Aura Boutique Hotel',
    category: 'Hospitality',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Lumina Penthouse',
    category: 'Residential',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80',
  },
];

export function PortfolioPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;

    // Calculate the center of the scroll container relative to its content
    const scrollCenter = container.scrollLeft + container.clientWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    // Find which child element is closest to the center
    Array.from(container.children).forEach((child, index) => {
      const el = child as HTMLElement;
      // Center of the child element
      const childCenter = el.offsetLeft + el.clientWidth / 2;
      const distance = Math.abs(scrollCenter - childCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  return (
    <section className="pb-24 sm:pb-32 bg-white overflow-hidden">

      {/* The Indented Architectural Header */}
      <div className="relative mb-12 sm:mb-20 px-6 lg:px-12 pt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Overtitle with Line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 sm:w-16 h-[2px] bg-[#D95D39]"></div>
            <span className="uppercase tracking-widest text-sm font-semibold text-[#D95D39]">Featured Works</span>
          </div>

          {/* Main Indented Content */}
          <div className="flex-1 h-px bg-gray-200 ml-4 hidden sm:block" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Curated Spaces
          </h2>
          <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
            A journey through a selection of our most breathtaking hospitality and residential transformations.
          </p>
        </motion.div>
      </div>

      {/* The Horizontal Cinematic Scroll */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 px-6 lg:px-12 pb-4 w-full"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex-none w-[85vw] sm:w-[450px] md:w-[500px] snap-center group cursor-pointer flex flex-col gap-6"
          >
            {/* The Image Box */}
            <div className="relative w-full aspect-3/4 overflow-hidden rounded-md cursor-none">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 85vw, (max-width: 1024px) 450px, 500px"
                priority={index < 2}
              />
              {/* Extremely subtle dark tint on hover to focus the eye */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
            </div>

            {/* The Text Box (Outside the image) */}
            <div className="flex flex-col gap-3 px-2">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#D95D39] transition-all duration-500 group-hover:w-10" />
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#D95D39]">
                  {project.category}
                </p>
              </div>
              <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-500">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Editorial Footer: Indicators & Link */}
      <div className="mt-8 px-6 lg:px-12 flex items-center justify-between w-full">

        {/* Numeric Progress */}
        <div className="flex items-center gap-3 sm:gap-4 text-sm tracking-widest text-gray-400 font-light">
          <span className="text-gray-900 font-medium">{(activeIndex + 1).toString().padStart(2, '0')}</span>
          <span className="w-8 sm:w-16 h-px bg-gray-300 relative">
            {/* Active progress line overlay */}
            <span
              className="absolute top-0 left-0 h-px bg-[#D95D39] transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / projects.length) * 100}%` }}
            />
          </span>
          <span>{projects.length.toString().padStart(2, '0')}</span>
        </div>

        {/* Minimalist Explore Link */}
        <Link
          href="/portfolio"
          className="group flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-gray-900 transition-colors hover:text-[#D95D39]"
        >
          <span className="hidden sm:inline">Explore Portfolio</span>
          <span className="sm:hidden">Explore</span>
          <motion.svg
            animate={{ x: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-5 sm:w-6 sm:h-6 text-[#D95D39] sm:text-gray-900 sm:group-hover:text-[#D95D39] transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </motion.svg>
        </Link>
      </div>

      {/* Inject style to hide scrollbar for webkit browsers since utility classes sometimes miss */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
