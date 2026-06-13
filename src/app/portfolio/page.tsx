'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePortfolio } from '@/hooks/usePortfolio';

import { PortfolioSkeleton } from '@/components/portfolio/PortfolioSkeleton';

const ANIMATION_BATCH = 15;

export default function PortfolioPage() {
  const { images, loading, loadingMore, hasMore, ref } = usePortfolio();
  const [selectedMedia, setSelectedMedia] = useState<{ url: string, isVideo: boolean } | null>(null);

  // Close lightbox with Escape key & lock body scroll
  useEffect(() => {
    if (!selectedMedia) return;

    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedMedia(null);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMedia]);

  const heroVideo = images.find(img => img.fileName.toLowerCase() === 'vid_1.mp4');
  return (
    <main className="flex-1 bg-white pt-24 sm:pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Loading Initial State */}
        {loading ? (
          <PortfolioSkeleton />
        ) : (
          <>
            {/* Full-Width Hero Video (vid_1) - Mobile Only */}
            {heroVideo && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full mb-[6px] sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden block sm:hidden bg-neutral-100/80"
              >
                <video
                  src={heroVideo.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[180px] max-h-[70vh] object-cover"
                />
              </motion.div>
            )}

            {/* Masonry Grid */}
            <div className="columns-2 lg:columns-3 gap-1 sm:gap-3 space-y-1 sm:space-y-2">
              <AnimatePresence>
                {images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (index % ANIMATION_BATCH) * 0.1 }}
                    className={`break-inside-avoid relative rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 cursor-zoom-in ${image.fileName.toLowerCase() === 'vid_1.mp4' ? 'hidden sm:block' : ''}`}
                    onClick={() => setSelectedMedia({
                      url: image.url,
                      isVideo: image.fileName.toLowerCase().endsWith('.mp4')
                    })}
                  >
                    {image.fileName.toLowerCase().endsWith('.mp4') ? (
                      <video
                        src={image.url}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={image.url}
                        alt={image.fileName}
                        className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Infinite Scroll Trigger / Spinner */}
            <div ref={ref} className="w-full py-16 flex justify-center items-center h-24">
              {loadingMore && (
                <div className="w-8 h-8 border-4 border-gray-200 border-t-[#D95D39] rounded-full animate-spin" />
              )}
              {!hasMore && images.length > 0 && (
                <p className="text-gray-400 text-sm italic">You have reached the end of the gallery.</p>
              )}
            </div>
          </>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/95 p-4 sm:p-8 cursor-zoom-out backdrop-blur-sm"
          >
            {/* Close Button */}
            <button
              onClick={(e) => { e.stopPropagation(); setSelectedMedia(null); }}
              className="absolute top-6 right-6 text-white hover:text-[#D95D39] transition-colors z-50 p-2"
              aria-label="Close modal"
            >
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.isVideo ? (
                <video
                  src={selectedMedia.url}
                  autoPlay
                  loop
                  controls
                  playsInline
                  className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
                />
              ) : (
                <img
                  src={selectedMedia.url}
                  alt="Full screen portfolio view"
                  className="max-w-full max-h-[90vh] object-contain rounded-md shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
