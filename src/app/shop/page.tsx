'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, SHOP_CATEGORIES, ShopCategory, Product } from '@/constants/shop';
import { useShopStore } from '@/store/useShopStore';

function ProductCard({ product, getAspectRatioClass }: { product: Product, getAspectRatioClass: (ratio: string) => string }) {
  const { toggleWishlist, isInWishlist, addToCart } = useShopStore();
  const isWishlisted = isInWishlist(product.id);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (addedToCart) return;
    
    addToCart(product.id);
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleWishlist(product.id);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      className="break-inside-avoid relative rounded-3xl overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500 bg-gray-100"
    >
      <Link href={`/shop/${product.id}`} className="block relative w-full h-full">
        {/* Image */}
        <div className={`relative w-full ${getAspectRatioClass(product.aspectRatio)}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Gradient overlay to ensure text readability */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/10" />

          {/* Top Icons Layer */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-start pointer-events-none z-20">
            {/* Wishlist (Left) */}
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-red-500 transition-colors pointer-events-auto shadow-sm"
              onClick={handleToggleWishlist}
            >
              <svg 
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${isWishlisted ? 'fill-current text-red-500 scale-110' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isWishlisted ? 0 : 2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Add to Cart (Right) */}
            <button
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full backdrop-blur-md flex items-center justify-center transition-all duration-300 pointer-events-auto shadow-sm ${
                addedToCart ? 'bg-[#C5A059] text-white rotate-360' : 'bg-white/20 text-white hover:bg-[#C5A059]'
              }`}
              onClick={handleAddToCart}
            >
              {addedToCart ? (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              )}
            </button>
          </div>

          {/* Product Info inside the image at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
            <h3 className="text-sm sm:text-lg font-bold leading-tight mb-1 group-hover:text-white truncate">
              {product.name}
            </h3>
            <p className="text-sm sm:text-md font-medium text-[#C5A059]">{product.price}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ShopCategory>('All');
  
  // Hydration safety for zustand persist
  const [isClient, setIsClient] = useState(false);
  useState(() => { setIsClient(true) });

  const wishlistCount = useShopStore((state) => state.wishlistIds.length);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Determine tailwind aspect ratio classes based on our mock data
  const getAspectRatioClass = (ratio: string) => {
    switch (ratio) {
      case 'portrait': return 'aspect-[3/4]';
      case 'tall': return 'aspect-[1/2]';
      case 'landscape': return 'aspect-[4/3]';
      default: return 'aspect-square';
    }
  };

  return (
    <main className="min-h-screen bg-[#fafafa] pt-24 pb-24">
      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 mb-8">
        <div className="flex flex-col gap-6">

          {/* Search Bar & Wishlist Icon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 w-full"
          >
            {/* Search Input (Takes up most space) */}
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search premium products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-gray-200 text-gray-900 px-5 py-3 md:px-6 md:py-4 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all"
              />
              <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 text-gray-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Wishlist Link */}
            <Link
              href="/shop/wishlist"
              className="relative shrink-0 w-12 h-12 md:w-14 md:h-14 bg-white border border-gray-200 rounded-full shadow-sm flex items-center justify-center text-gray-600 hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              
              <AnimatePresence>
                {isClient && wishlistCount > 0 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute -top-1 -right-1 w-5 h-5 md:w-6 md:h-6 bg-[#C5A059] text-white text-[10px] md:text-xs font-bold rounded-full flex items-center justify-center shadow-sm border-2 border-white"
                  >
                    {wishlistCount}
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          </motion.div>

          {/* Category Filters (Horizontally scrollable on mobile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex overflow-x-auto hide-scrollbar gap-2 -mx-4 px-4 md:mx-0 md:px-0 md:flex-wrap md:justify-start"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SHOP_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`whitespace-nowrap flex-none px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                  ? 'bg-[#111111] text-white shadow-md'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile Procurement Banner */}
      <div className="max-w-7xl mx-auto px-4 mb-8 md:hidden">
        <Link
          href="/procurement"
          className="relative group flex flex-col w-full min-h-[160px] rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
        >
          {/* Background Image & Overlays */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80)' }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-500" />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent" />
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Top Section */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#C5A059] animate-pulse"></span>
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/90">
                  B2B Solutions
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
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-tight drop-shadow-md">
                Hotel Setup Packages
              </h2>
              <p className="text-white/80 text-sm font-medium drop-shadow-sm">
                Bulk procurement for 20-200+ rooms.
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Masonry Grid (CSS Columns approach - 2 cols on mobile) */}
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No products found matching your search.
          </div>
        ) : (
          <motion.div
            layout
            className="columns-2 lg:columns-3 xl:columns-4 gap-2 space-y-2"
          >
            <AnimatePresence>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} getAspectRatioClass={getAspectRatioClass} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <style dangerouslySetInnerHTML={{
          __html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          @keyframes gradient-xy {
            0%, 100% {
              background-size: 400% 400%;
              background-position: left center;
            }
            50% {
              background-size: 200% 200%;
              background-position: right center;
            }
          }
          .animate-gradient-xy {
            animation: gradient-xy 8s ease infinite;
          }
        `}} />
      </div>
    </main>
  );
}
