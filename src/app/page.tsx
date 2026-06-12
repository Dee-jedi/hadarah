import { Hero } from '@/components/layout/Hero';
import { Stats } from '@/components/home/Stats';
import { PortfolioPreview } from '@/components/home/PortfolioPreview';
import { Testimonials } from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <main className="flex-1 overflow-x-hidden">
      <Hero />
      
      {/* Subtle Divider */}
      <div className="w-full max-w-7xl mx-auto px-6 flex justify-center pb-8 sm:pb-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-orange-100/40 to-transparent blur-3xl rounded-full" />
      </div>

      <PortfolioPreview />
      <Stats />
      <Testimonials />
    </main>
  );
}
