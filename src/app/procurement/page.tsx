'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProcurementPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'new_build',
    roomCount: '',
    timeline: '0-3_months',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        projectType: 'new_build',
        roomCount: '',
        timeline: '0-3_months',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_2.png"
            alt="Luxury Hotel Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-[#fafafa]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-semibold tracking-wider uppercase mb-6">
              B2B Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Elevate Your <span className="text-[#C5A059]">Hospitality</span> Experience
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 font-light">
              End-to-end premium FF&E procurement for boutique hotels and luxury resorts. Turnkey solutions tailored to your brand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Information */}
          <motion.div 
            {...fadeInUp}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-[#111111] mb-6">Why Partner With Us?</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                We understand that every hotel project is unique. Our dedicated procurement team works closely with developers, owners, and interior designers to deliver exceptional quality on time and within budget.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m3-4h1m-1 4h1m-5 8h8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">Turnkey Packages</h3>
                <p className="text-gray-600 text-sm">Comprehensive packages for guest rooms, lobbies, and public spaces.</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">Volume Pricing</h3>
                <p className="text-gray-600 text-sm">Exclusive wholesale rates for projects requiring 20+ room setups.</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">Commercial-grade durability without compromising on luxury aesthetics.</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-[#C5A059]/10 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#C5A059]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">Dedicated Support</h3>
                <p className="text-gray-600 text-sm">A single point of contact from initial quotation to final installation.</p>
              </div>
            </div>
            
            <div className="pt-8 border-t border-gray-200 overflow-hidden relative">
              <h3 className="text-lg font-bold text-[#111111] mb-4">Past Clients Include</h3>
              
              {/* Fade gradients */}
              <div className="absolute left-0 top-14 bottom-0 w-12 bg-linear-to-r from-[#fafafa] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-14 bottom-0 w-12 bg-linear-to-l from-[#fafafa] to-transparent z-10 pointer-events-none"></div>

              <div className="flex">
                <motion.div 
                  className="flex gap-12 opacity-60 pr-12 min-w-max"
                  animate={{ x: [0, "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                >
                  {/* First set */}
                  {['TREAL Hotel and Suites', 'Whitefield Hotel', 'Ephoenix Hotel', 'Norktel', 'Dato hotel', 'ML Apartments'].map((client, i) => (
                    <div key={`c1-${i}`} className="text-xl font-bold font-serif whitespace-nowrap">{client}</div>
                  ))}
                  {/* Duplicate set for seamless loop */}
                  {['TREAL Hotel and Suites', 'Whitefield Hotel', 'Ephoenix Hotel', 'Norktel', 'Dato hotel', 'ML Apartments'].map((client, i) => (
                    <div key={`c2-${i}`} className="text-xl font-bold font-serif whitespace-nowrap">{client}</div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-4xl shadow-xl border border-gray-100 relative lg:-mt-32 z-20"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-[#111111] mb-2">Request Quotation</h2>
              <p className="text-gray-500">Fill out the details below and our team will get back to you within 24 hours.</p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 text-green-800 p-8 rounded-2xl flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Request Received!</h3>
                <p>Thank you for reaching out. A dedicated account manager will review your requirements and contact you shortly.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">First Name <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@hotel.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Hotel / Company Name <span className="text-red-500">*</span></label>
                  <input
                    required
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                    placeholder="Grand Plaza Hotel"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Project Type</label>
                    <div className="relative">
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white appearance-none"
                      >
                        <option value="new_build">New Build</option>
                        <option value="renovation">Renovation / Refurbishment</option>
                        <option value="expansion">Expansion</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Number of Rooms <span className="text-red-500">*</span></label>
                    <input
                      required
                      type="number"
                      name="roomCount"
                      value={formData.roomCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white"
                      placeholder="e.g. 50"
                      min="1"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Project Timeline</label>
                  <div className="relative">
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white appearance-none"
                    >
                      <option value="0-3_months">0-3 Months</option>
                      <option value="3-6_months">3-6 Months</option>
                      <option value="6-12_months">6-12 Months</option>
                      <option value="1_year_plus">1 Year +</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Additional Details</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell us more about your design vision, specific requirements, or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#111111] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#C5A059] transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      Submit Quotation Request
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By submitting this form, you agree to our <Link href="/terms" className="underline hover:text-[#C5A059]">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-[#C5A059]">Privacy Policy</Link>.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* Trust Banner / Bottom CTA */}
      <section className="bg-[#111111] py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied hoteliers who have elevated their properties with our premium procurement services.
          </p>
          <Link 
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-[#111111] transition-all duration-300"
          >
            View Our Portfolio
          </Link>
        </div>
      </section>
    </main>
  );
}
