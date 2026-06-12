'use client';

import { motion } from 'framer-motion';

const services = [
  { name: 'Hospitality', description: 'Elevating boutique hotels and luxury resorts with immersive, unforgettable spatial experiences.' },
  { name: 'Residential', description: 'Crafting breathtaking, highly personalized homes that reflect your unique lifestyle.' },
  { name: 'Commercial', description: 'Designing premium corporate and retail environments that inspire both employees and clients.' },
  { name: 'Bespoke Projects', description: 'Custom furniture sourcing, spatial planning, and elite architectural detailing.' },
];

export default function ServicesPage() {
  return (
    <main className="flex-1 bg-gray-50 pt-32 pb-24 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive design solutions tailored for the most demanding projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.name}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
