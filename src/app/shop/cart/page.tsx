'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useShopStore } from '@/store/useShopStore';
import { PRODUCTS } from '@/constants/shop';

export default function CartPage() {
  const [isClient, setIsClient] = useState(false);
  const { cartIds, removeFromCart } = useShopStore();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const cartItems = PRODUCTS.filter(product => cartIds.includes(product.id));

  // Helper to parse price string (e.g. "$120.00") to number for calculation
  const getPriceNumber = (priceStr: string) => {
    return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
  };

  const subtotal = cartItems.reduce((total, item) => total + getPriceNumber(item.price), 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let message = `*New Order Inquiry*\n\n`;
    message += `I would like to purchase the following items from the Hadarah catalog:\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}* - ${item.price}\n`;
    });
    
    message += `\n*Estimated Total:* $${subtotal.toFixed(2)}\n\n`;
    message += `Please let me know the availability, lead times, and shipping costs.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348035830347?text=${encodedMessage}`, '_blank');
  };

  if (!isClient) return <main className="min-h-screen bg-[#fafafa] pt-24 pb-24"></main>;

  return (
    <main className="min-h-screen bg-[#fafafa] pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <div className="mb-12 border-b border-gray-200 pb-6 flex items-end justify-between">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Shopping Bag</h1>
          {cartItems.length > 0 && (
            <span className="text-gray-500 font-medium mb-1 hidden sm:block">
              {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {cartItems.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100 text-center px-6"
          >
            <div className="w-24 h-24 bg-[#fafafa] rounded-full flex items-center justify-center mb-8">
              <svg className="w-10 h-10 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Your Bag is Empty</h2>
            <p className="text-gray-500 max-w-md mb-8">Looks like you haven't added any premium supplies to your bag yet.</p>
            <Link 
              href="/shop"
              className="bg-[#111111] text-white px-10 py-4 rounded-full font-semibold text-sm tracking-widest uppercase hover:bg-[#D95D39] transition-all duration-300"
            >
              Continue Shopping
            </Link>
          </motion.div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Cart Items List */}
            <div className="flex-1 flex flex-col gap-6">
              {cartItems.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={product.id}
                  className="flex gap-4 sm:gap-6 py-6 bg-white rounded-3xl p-4 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-gray-100 relative group"
                >
                  <Link href={`/shop/${product.id}`} className="shrink-0 relative w-24 h-32 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100px, 150px"
                    />
                  </Link>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                      <Link href={`/shop/${product.id}`} className="block pr-8 sm:pr-0">
                        <h3 className="text-sm sm:text-lg font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#D95D39] transition-colors mt-1">
                          {product.name}
                        </h3>
                        <p className="text-base sm:text-lg font-semibold text-[#D95D39]">{product.price}</p>
                      </Link>

                      <button
                        className="absolute right-4 top-4 sm:relative sm:top-0 sm:right-0 text-gray-400 hover:text-red-500 p-2 transition-colors rounded-full hover:bg-red-50"
                        onClick={(e) => {
                          e.preventDefault();
                          removeFromCart(product.id);
                        }}
                        aria-label="Remove from cart"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-[380px] shrink-0">
              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 sticky top-32">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>
                
                <div className="flex flex-col gap-4 text-gray-600 border-b border-gray-100 pb-6 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-sm">Calculated on WhatsApp</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-lg font-bold text-gray-900">Estimated Total</span>
                  <span className="text-2xl font-bold text-[#D95D39]">${subtotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={handleWhatsAppCheckout}
                  className="group w-full bg-[#D95D39] text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:bg-[#111111] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Checkout via WhatsApp
                </button>

                <p className="text-xs text-gray-400 text-center mt-4">
                  You will be redirected to WhatsApp to confirm your order details securely.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}
