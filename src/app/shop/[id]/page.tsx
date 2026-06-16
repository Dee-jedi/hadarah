'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/constants/shop';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = params.id as string;

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fafafa]">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <button onClick={() => router.push('/shop')} className="text-[#C5A059] hover:underline">
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafafa] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-500 flex items-center gap-2">
          <Link href="/shop" className="hover:text-[#C5A059] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.category}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image 
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Product Details & Actions */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <p className="text-sm font-semibold tracking-[0.2em] text-[#C5A059] uppercase mb-4">
              {product.category}
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {product.name}
            </h1>
            <p className="text-2xl text-gray-700 mb-8 font-medium">
              {product.price}
            </p>

            <div className="prose prose-gray mb-10">
              <p className="text-gray-600 leading-relaxed">
                Experience the ultimate in luxury hospitality with our premium {product.name.toLowerCase()}. 
                Sourced from the finest materials and designed for both aesthetic brilliance and lasting durability, 
                this piece is perfect for elevating your hotel, resort, or luxury residence.
              </p>
            </div>

            {/* Premium Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              
              <button className="sm:col-span-2 flex items-center justify-center gap-3 bg-[#C5A059] text-white py-4 px-6 rounded-xl font-semibold hover:bg-[#111111] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to Cart
              </button>

              <button className="flex items-center justify-center gap-3 bg-[#f5f5f5] text-gray-900 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Bulk Order
              </button>

              <button className="flex items-center justify-center gap-3 bg-[#f5f5f5] text-gray-900 py-4 px-6 rounded-xl font-medium hover:bg-gray-200 transition-colors">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Request Quotation
              </button>

            </div>

            {/* Delivery/Info */}
            <div className="border-t border-gray-200 pt-8 mt-4">
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                In stock and ready for global shipping
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
                Special rates available for 50+ room hotel projects
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
