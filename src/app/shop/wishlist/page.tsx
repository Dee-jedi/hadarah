'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useShopStore } from '@/store/useShopStore';
import { PRODUCTS } from '@/constants/shop';

export default function WishlistPage() {
  const [isClient, setIsClient] = useState(false);
  const { wishlistIds, toggleWishlist } = useShopStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const wishlistedItems = PRODUCTS.filter(product => wishlistIds.includes(product.id));

  // If not on client yet, render nothing to avoid hydration mismatch
  if (!isClient) return <main className="min-h-screen bg-[#fafafa] pt-24 pb-24"></main>;

  return (
    <main className="min-h-screen bg-[#fafafa] pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-16 border-b border-gray-200 pb-6 flex items-end justify-between">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Your Wishlist</h1>
          {wishlistedItems.length > 0 && (
            <span className="text-gray-500 font-medium mb-1">
              {wishlistedItems.length} {wishlistedItems.length === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {wishlistedItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 sm:py-32 bg-white rounded-3xl shadow-sm border border-gray-100 text-center px-6 max-w-4xl mx-auto"
          >
            {/* Elegant Empty State Icon */}
            <div className="relative mb-10 group cursor-pointer">
              <div className="w-28 h-28 bg-[#fafafa] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <svg className="w-12 h-12 text-gray-300 group-hover:text-[#C5A059] transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              {/* Decorative accent */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-[#C5A059] rounded-full animate-pulse"></div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif tracking-tight">Your Curated Collection is Empty</h2>
            <p className="text-lg text-gray-500 max-w-lg mb-10 leading-relaxed">
              Discover our premium selection of hospitality supplies and start building the ideal space for your luxury residential or commercial project.
            </p>

            <Link 
              href="/shop"
              className="bg-[#111111] text-white px-10 py-5 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-[#C5A059] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
            >
              Explore the Store
            </Link>
          </motion.div>
        ) : (
          <div className="flex flex-col">
            {/* Header row for desktop */}
            <div className="hidden sm:grid grid-cols-12 gap-6 pb-4 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-widest mb-6">
              <div className="col-span-8">Product</div>
              <div className="col-span-4 text-right">Action</div>
            </div>

            <div className="flex flex-col divide-y divide-gray-100">
              {wishlistedItems.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={product.id}
                  className="flex gap-4 sm:gap-6 py-6 sm:py-8 group relative"
                >
                  {/* Left: Thumbnail */}
                  <Link href={`/shop/${product.id}`} className="shrink-0 relative w-24 h-32 sm:w-32 sm:h-40 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100px, 150px"
                    />
                  </Link>

                  {/* Right: Info & Actions */}
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      {/* Product Text */}
                      <Link href={`/shop/${product.id}`} className="block pr-8 sm:pr-0">
                        <h3 className="text-sm sm:text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#C5A059] transition-colors mt-1">
                          {product.name}
                        </h3>
                        <p className="text-sm sm:text-base font-medium text-[#C5A059]">{product.price}</p>
                      </Link>

                      {/* Remove Button (X) */}
                      <button
                        className="absolute right-0 top-6 sm:relative sm:top-0 text-gray-400 hover:text-red-500 p-2 sm:-mr-2 transition-colors rounded-full hover:bg-red-50"
                        onClick={(e) => {
                          e.preventDefault();
                          toggleWishlist(product.id);
                        }}
                        aria-label="Remove from wishlist"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {/* Move to Cart Action */}
                    <div className="mt-auto pt-4 flex items-center justify-between sm:justify-end gap-4 w-full">
                      <button
                        className="w-full sm:w-auto bg-[#C5A059] text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-[#111111] hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Moved to cart!');
                          // In a real app, you'd call addToCart(product.id) and maybe toggleWishlist(product.id)
                        }}
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Move to Bag
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
