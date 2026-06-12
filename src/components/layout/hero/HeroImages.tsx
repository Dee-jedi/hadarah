'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const SHAPES = [
  {
    // The Arch (Center Left)
    id: 'arch',
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80',
    alt: 'Architectural details',
    className: 'absolute left-[5%] sm:left-[10%] top-[10%] sm:top-[15%] w-[50%] sm:w-[45%] aspect-[2/3] rounded-t-full rounded-b-2xl',
    floatDelay: 0,
    zIndex: 10,
  },
  {
    // The Circle (Top Right)
    id: 'circle',
    src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80',
    alt: 'Living room detail',
    className: 'absolute right-[5%] sm:right-[15%] top-[5%] w-[40%] sm:w-[35%] aspect-square rounded-full',
    floatDelay: 1.5,
    zIndex: 20,
  },
  {
    // The Pill (Bottom Right)
    id: 'pill',
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    alt: 'Texture and material',
    className: 'absolute right-[15%] sm:right-[25%] bottom-[5%] w-[35%] sm:w-[30%] aspect-[1/2] rounded-full',
    floatDelay: 3,
    zIndex: 30,
  }
];

export function HeroImages() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="relative mx-auto w-full max-w-4xl px-4 sm:px-6 pb-20 sm:pb-32 mt-4 sm:mt-8"
    >
      {/* Container that maintains a nice aspect ratio for the cluster to float within */}
      <div className="relative w-full aspect-square sm:aspect-4/3 md:aspect-video bg-transparent group">
        {SHAPES.map((shape, i) => (
          <motion.div
            key={shape.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1.2,
              delay: 0.6 + i * 0.2,
              ease: [0.25, 1, 0.5, 1],
            }}
            className={`${shape.className} overflow-hidden shadow-2xl shadow-gray-300/60 border-4 sm:border-8 border-white bg-gray-100`}
            style={{ zIndex: shape.zIndex }}
          >
            {/* The infinite floating animation wrapper */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: 'easeInOut',
                delay: shape.floatDelay,
              }}
              className="w-full h-full relative"
            >
              <Image
                src={shape.src}
                alt={shape.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 30vw"
                priority={i === 0}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
