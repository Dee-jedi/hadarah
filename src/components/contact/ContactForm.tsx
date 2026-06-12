'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Inquiry via Website*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Project Type:* ${formData.projectType || 'Not specified'}
*Budget:* ${formData.budget || 'Not specified'}
*Timeline:* ${formData.timeline || 'Not specified'}

*Details:* 
${formData.details || 'No additional details provided.'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348035830347?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-2xl p-8 sm:p-12 lg:p-16">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-light text-gray-900 mb-3">Send an Inquiry</h3>
        <p className="text-gray-500 font-light text-sm sm:text-base">Fill out the details below and we will connect with you immediately via WhatsApp.</p>
      </div>
      
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Name */}
          <div className="relative">
            <input 
              type="text" 
              id="name" 
              required
              value={formData.name}
              onChange={handleChange}
              className="peer w-full border-b border-gray-200 bg-transparent py-3 text-gray-900 placeholder-transparent focus:border-[#D95D39] focus:outline-none transition-colors"
              placeholder="Full Name"
            />
            <label htmlFor="name" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D95D39] uppercase tracking-wider font-medium">
              Full Name *
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input 
              type="email" 
              id="email" 
              required
              value={formData.email}
              onChange={handleChange}
              className="peer w-full border-b border-gray-200 bg-transparent py-3 text-gray-900 placeholder-transparent focus:border-[#D95D39] focus:outline-none transition-colors"
              placeholder="Email Address"
            />
            <label htmlFor="email" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D95D39] uppercase tracking-wider font-medium">
              Email Address *
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Project Type */}
          <div className="relative mt-2">
            <select 
              id="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className={`w-full border-b border-gray-200 bg-transparent py-3 focus:border-[#D95D39] focus:outline-none transition-colors appearance-none font-light ${formData.projectType ? 'text-gray-900' : 'text-gray-400'}`}
            >
              <option value="" disabled>Project Type</option>
              <option value="Residential Design" className="text-gray-900">Residential Design</option>
              <option value="Hospitality / Hotel" className="text-gray-900">Hospitality / Hotel</option>
              <option value="Commercial / Retail" className="text-gray-900">Commercial / Retail</option>
              <option value="Other Inquiry" className="text-gray-900">Other Inquiry</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>

          {/* Budget */}
          <div className="relative mt-2">
            <select 
              id="budget"
              value={formData.budget}
              onChange={handleChange}
              className={`w-full border-b border-gray-200 bg-transparent py-3 focus:border-[#D95D39] focus:outline-none transition-colors appearance-none font-light ${formData.budget ? 'text-gray-900' : 'text-gray-400'}`}
            >
              <option value="" disabled>Estimated Budget</option>
              <option value="Under ₦10M" className="text-gray-900">Under ₦10M</option>
              <option value="₦10M - ₦50M" className="text-gray-900">₦10M - ₦50M</option>
              <option value="₦50M - ₦150M" className="text-gray-900">₦50M - ₦150M</option>
              <option value="₦150M+" className="text-gray-900">₦150M+</option>
              <option value="Not Sure Yet" className="text-gray-900">Not Sure Yet</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative mt-2">
          <select 
            id="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className={`w-full border-b border-gray-200 bg-transparent py-3 focus:border-[#D95D39] focus:outline-none transition-colors appearance-none font-light ${formData.timeline ? 'text-gray-900' : 'text-gray-400'}`}
          >
            <option value="" disabled>Project Timeline</option>
            <option value="Immediately (ASAP)" className="text-gray-900">Immediately (ASAP)</option>
            <option value="1 - 3 Months" className="text-gray-900">1 - 3 Months</option>
            <option value="3 - 6 Months" className="text-gray-900">3 - 6 Months</option>
            <option value="Just Exploring" className="text-gray-900">Just Exploring</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Details */}
        <div className="relative mt-2">
          <textarea 
            id="details" 
            rows={4}
            value={formData.details}
            onChange={handleChange}
            className="peer w-full border-b border-gray-200 bg-transparent py-3 text-gray-900 placeholder-transparent focus:border-[#D95D39] focus:outline-none transition-colors resize-none"
            placeholder="Project Details"
          />
          <label htmlFor="details" className="absolute left-0 -top-3.5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[#D95D39] uppercase tracking-wider font-medium">
            Project Details
          </label>
        </div>

        {/* Submit */}
        <div className="mt-4 flex justify-center">
          <button 
            type="submit"
            className="group inline-flex items-center justify-center w-full sm:w-auto px-12 py-4 text-[15px] font-medium text-white bg-[#D95D39] hover:bg-[#B84D2F] transition-all rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1"
          >
            Send Request
            <svg
              className="ml-3 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

      </form>
    </div>
  );
}
