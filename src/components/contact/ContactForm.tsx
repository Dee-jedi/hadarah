'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
    meetingType: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const message = `*New Consultation Request*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Service Requested:* ${formData.service || 'Not specified'}
*Preferred Date:* ${formData.date || 'Not specified'}
*Preferred Time:* ${formData.time || 'Not specified'}
*Meeting Type:* ${formData.meetingType || 'Not specified'}

*Additional Details:* 
${formData.details || 'No additional details provided.'}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/2348035830347?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-gray-100 shadow-2xl shadow-gray-200/50 rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
      
      {/* Decorative gradient blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-orange-50 blur-3xl opacity-50 pointer-events-none" />

      <div className="text-center mb-10 relative z-10">
        <h3 className="text-3xl font-light text-gray-900 mb-3">Book a Consultation</h3>
        <p className="text-gray-500 font-light text-sm sm:text-base">Schedule a session with our design experts to discuss your vision.</p>
      </div>
      
      <form className="flex flex-col gap-8 relative z-10" onSubmit={handleSubmit}>
        
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

        {/* Row 2: Service Selection */}
        <div className="relative mt-2">
          <select 
            id="service"
            required
            value={formData.service}
            onChange={handleChange}
            className={`w-full border-b border-gray-200 bg-transparent py-3 focus:border-[#D95D39] focus:outline-none transition-colors appearance-none font-light ${formData.service ? 'text-gray-900' : 'text-gray-400'}`}
          >
            <option value="" disabled>Select Service *</option>
            <option value="Interior Design" className="text-gray-900">Interior Design</option>
            <option value="Space Planning" className="text-gray-900">Space Planning</option>
            <option value="Hotel Design" className="text-gray-900">Hotel Design</option>
            <option value="Lighting Consultation" className="text-gray-900">Lighting Consultation</option>
            <option value="Colour Consultation" className="text-gray-900">Colour Consultation</option>
            <option value="Project Management" className="text-gray-900">Project Management</option>
            <option value="Procurement Consultation" className="text-gray-900">Procurement Consultation</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>

        {/* Row 3: Date, Time and Meeting Type */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="relative mt-2">
            <input 
              type="date" 
              id="date"
              required
              value={formData.date}
              onChange={handleChange}
              className={`w-full border-b border-gray-200 bg-transparent py-3 focus:border-[#D95D39] focus:outline-none transition-colors font-light ${formData.date ? 'text-gray-900' : 'text-gray-400'}`}
            />
            <label htmlFor="date" className="absolute left-0 -top-4 text-xs text-gray-500 uppercase tracking-wider font-medium">
              Preferred Date *
            </label>
          </div>

          <div className="relative mt-2">
            <input 
              type="time" 
              id="time"
              required
              value={formData.time}
              onChange={handleChange}
              className={`w-full border-b border-gray-200 bg-transparent py-3 focus:border-[#D95D39] focus:outline-none transition-colors font-light ${formData.time ? 'text-gray-900' : 'text-gray-400'}`}
            />
            <label htmlFor="time" className="absolute left-0 -top-4 text-xs text-gray-500 uppercase tracking-wider font-medium">
              Preferred Time *
            </label>
          </div>

          <div className="relative mt-2">
            <select 
              id="meetingType"
              required
              value={formData.meetingType}
              onChange={handleChange}
              className={`w-full border-b border-gray-200 bg-transparent py-3 focus:border-[#D95D39] focus:outline-none transition-colors appearance-none font-light ${formData.meetingType ? 'text-gray-900' : 'text-gray-400'}`}
            >
              <option value="" disabled>Meeting Type *</option>
              <option value="Physical Meeting" className="text-gray-900">Physical Meeting</option>
              <option value="Virtual Meeting" className="text-gray-900">Virtual Meeting</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <label htmlFor="meetingType" className="absolute left-0 -top-4 text-xs text-gray-500 uppercase tracking-wider font-medium">
              Format *
            </label>
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
            Additional Notes or Project Details
          </label>
        </div>

        {/* Submit */}
        <div className="mt-4 flex justify-center">
          <button 
            type="submit"
            className="group inline-flex items-center justify-center w-full sm:w-auto px-12 py-4 text-[15px] font-medium text-white bg-[#D95D39] hover:bg-[#B84D2F] transition-all rounded-full shadow-lg hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-1"
          >
            Confirm Booking
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
