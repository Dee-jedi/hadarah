'use client';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

const stats = [
  { id: 1, name: 'Years of Experience', value: 10, suffix: '+' },
  { id: 2, name: 'Projects Completed', value: 150, suffix: '+' },
  { id: 3, name: 'Happy Clients', value: 100, suffix: '+' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, { duration: 2.5, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, count, value]);

  return (
    <span ref={ref} className="flex justify-center items-center">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <div className="bg-gray-50 py-20 sm:py-28 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className={`mx-auto flex w-full flex-col gap-y-3 ${index === 2 ? 'col-span-2 lg:col-span-1' : ''}`}
            >
              <dt className="text-sm sm:text-base/7 text-gray-500">{stat.name}</dt>
              <dd className="order-first text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}
