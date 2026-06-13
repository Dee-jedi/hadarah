'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type PreviewImage = {
  id: string;
  url: string;
  fileName: string;
};

const PREVIEW_COUNT = 6;

export function PortfolioPreview() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState<PreviewImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPreviewImages = async () => {
      try {
        // Fetch a small set of images, skipping videos, ordered by position
        const q = query(
          collection(db, 'portfolio'),
          orderBy('order', 'asc'),
          limit(30) // Fetch more than we need so we can filter out videos
        );
        const snapshot = await getDocs(q);
        
        const allImages = snapshot.docs.map(doc => ({
          id: doc.id,
          url: doc.data().url,
          fileName: doc.data().fileName,
        }));

        // Filter to only actual images (no .mp4), take PREVIEW_COUNT
        const photoOnly = allImages.filter(
          img => !img.fileName.toLowerCase().endsWith('.mp4')
        );
        setImages(photoOnly.slice(0, PREVIEW_COUNT));
      } catch (error) {
        console.error('Error fetching preview images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPreviewImages();
  }, []);

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
      {loading ? (
        // Skeleton while loading
        <div className="flex gap-6 md:gap-8 px-6 lg:px-12 pb-4 w-full overflow-hidden">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-none w-[85vw] sm:w-[450px] md:w-[500px] flex flex-col gap-6">
              <div className="relative w-full aspect-3/4 overflow-hidden rounded-md bg-neutral-100/80 animate-pulse" />
            </div>
          ))}
        </div>
      ) : (
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 md:gap-8 px-6 lg:px-12 pb-4 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex-none w-[85vw] sm:w-[450px] md:w-[500px] snap-center group cursor-pointer flex flex-col gap-6"
            >
              {/* The Image Box */}
              <div className="relative w-full aspect-3/4 overflow-hidden rounded-md cursor-none">
                <Image
                  src={image.url}
                  alt={`Portfolio work ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 450px, 500px"
                  priority={index < 2}
                />
                {/* Extremely subtle dark tint on hover to focus the eye */}
                <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Editorial Footer: Indicators & Link */}
      <div className="mt-8 px-6 lg:px-12 flex items-center justify-between w-full">

        {/* Numeric Progress */}
        <div className="flex items-center gap-3 sm:gap-4 text-sm tracking-widest text-gray-400 font-light">
          <span className="text-gray-900 font-medium">{(activeIndex + 1).toString().padStart(2, '0')}</span>
          <span className="w-8 sm:w-16 h-px bg-gray-300 relative">
            {/* Active progress line overlay */}
            <span
              className="absolute top-0 left-0 h-px bg-[#D95D39] transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / Math.max(images.length, 1)) * 100}%` }}
            />
          </span>
          <span>{Math.max(images.length, 1).toString().padStart(2, '0')}</span>
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
