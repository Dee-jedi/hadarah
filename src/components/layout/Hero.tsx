'use client';

import { HeroContent } from './hero/HeroContent';
import { HeroImages } from './hero/HeroImages';

export function Hero() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      <HeroContent />
      <HeroImages />
      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 w-full h-[30%] bg-linear-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}
