'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    id: '01',
    name: 'Space Planning',
    description: 'Optimize layouts for beauty, comfort and efficiency. We analyze flow, light, and geometry to ensure every square foot serves a purpose while maintaining a feeling of expansive luxury.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '02',
    name: 'Interior Design',
    description: 'Bespoke residential, hospitality and commercial interiors. From concept to completion, we craft immersive environments that reflect your unique identity and elevate the everyday.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '03',
    name: 'Project Management',
    description: 'Flawless execution from blueprint to final reveal. We orchestrate contractors, artisans, and timelines to ensure your vision is realized without compromise.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '04',
    name: 'Lighting Design',
    description: 'Create ambience and enhance guest experiences. We design layered lighting schemes that transform spaces from functional daytime environments to dramatic evening retreats.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '05',
    name: 'Colour Consultation',
    description: 'Curated palettes that elevate spaces. We masterfully blend hues, tones, and textures to evoke the precise emotional resonance your environment demands.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '06',
    name: 'Kitchen Design',
    description: 'Luxury residential and commercial kitchens. Where culinary function meets architectural beauty, featuring state-of-the-art appliances integrated seamlessly into stunning cabinetry.',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '07',
    name: 'Hotel Setup Consultancy',
    description: 'Complete hotel startup and renovation support. We align brand identity with guest experience, optimizing operational flow and specifying durable, breathtaking finishes.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '08',
    name: 'Procurement & Installation',
    description: 'Source, supply and install hospitality products. Access our exclusive network of global artisans and manufacturers for custom furniture, art, and architectural elements.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  }
];

const categories = [
  'Boutique Hotels',
  'Luxury Apartments',
  'Private Villas',
  'Fine Dining Restaurants',
  'Corporate Headquarters',
  'Spa & Wellness Facilities'
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-white min-h-screen selection:bg-[#D95D39] selection:text-white">

      {/* Editorial Hero Section */}
      <section className="relative h-[60vh] sm:h-[80vh] w-full flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Interior Design"
            fill
            className="object-cover scale-105 transform animate-slow-zoom"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center px-5 py-2 border border-white/20 rounded-full mb-6 backdrop-blur-sm bg-white/5">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white">
                Our Expertise
              </span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-white mb-6 leading-[1.1]">
              Designing Hospitality.<br />
              <span className="italic text-white">Delivering Luxury.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* The Services - Cinematic Alternating Scroll */}
      <section className="py-24 sm:py-40 px-4 sm:px-6 lg:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col gap-32 sm:gap-48">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={service.id}
                className={`flex flex-col-reverse ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24 group`}
              >

                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full lg:w-3/5 relative"
                >
                  <div className="relative h-[200px] sm:h-[600px] w-full overflow-hidden rounded-xl">

                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />
                  </div>

                  {/* Floating Number */}
                  <div className={`absolute -top-8 sm:-top-16 ${isEven ? '-right-4 sm:-right-12' : '-left-4 sm:-left-12'} text-[100px] sm:text-[180px] font-bold text-gray-50 leading-none select-none -z-10`}>
                    {service.id}
                  </div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full lg:w-2/5 flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D95D39]" />
                    <span className="text-sm font-semibold tracking-widest text-[#D95D39]">{service.id}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-gray-900 mb-6 group-hover:text-[#D95D39] transition-colors duration-500">
                    {service.name}
                  </h2>

                  <p className="text-lg text-gray-500 leading-relaxed font-light mb-10">
                    {service.description}
                  </p>

                  <Link 
                    href="/contact" 
                    className="inline-flex items-center gap-3 text-sm font-semibold tracking-[0.2em] uppercase text-gray-900 hover:text-[#D95D39] transition-colors w-fit group/btn"
                  >
                    <span>Consult With Us</span>
                    <motion.svg
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                      className="w-5 h-5 transition-colors duration-300 group-hover/btn:text-[#D95D39]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </Link>
                </motion.div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Dark Theme Categories Section */}
      <section className="bg-[#111111] py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-[#D95D39]/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start lg:items-center">

          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center px-4 py-1.5 border border-[#D95D39]/30 rounded-full mb-6 bg-[#D95D39]/5">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#D95D39]">
                  Sectors
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-white mb-6">
                Spaces We<br />Transform.
              </h2>
              <p className="text-gray-400 font-light text-lg mb-0 lg:mb-8 leading-relaxed">
                We bring our signature aesthetic, operational expertise, and relentless pursuit of perfection to a diverse portfolio of property types.
              </p>
            </motion.div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0 border-t border-white/10 mb-12">
              {categories.map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between py-6 border-b border-white/10 group cursor-default"
                >
                  <span className="text-xl sm:text-2xl font-light text-gray-300 group-hover:text-white transition-colors duration-300">
                    {category}
                  </span>
                  <span className="text-[#D95D39] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-widest uppercase text-white border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
              >
                View Portfolio
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Inject custom animation for hero zoom */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slowZoom 20s ease-out forwards;
        }
      `}} />
    </main>
  );
}
