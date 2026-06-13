export function PortfolioSkeleton() {
  // Array of varied heights to simulate a masonry layout
  const heights = [
    'h-64', 'h-96', 'h-72', 'h-80',
    'h-96', 'h-64', 'h-80', 'h-72',
    'h-72', 'h-80', 'h-96', 'h-64',
  ];

  const Shimmer = () => (
    <div className="absolute inset-0 -translate-x-full animate-shimmer bg-linear-to-r from-transparent via-white/40 to-transparent" />
  );

  return (
    <>
      {/* Full-Width Hero Video Skeleton (Mobile Only) */}
      <div className="w-full mb-[6px] sm:mb-12 rounded-xl sm:rounded-2xl overflow-hidden block sm:hidden relative bg-neutral-100/80">
        <div className="w-full h-[180px]" />
        <Shimmer />
      </div>

      {/* Masonry Grid Skeleton */}
      <div className="columns-2 lg:columns-3 gap-1 sm:gap-3 space-y-1 sm:space-y-2">
        {heights.map((height, index) => (
          <div
            key={index}
            className={`break-inside-avoid relative rounded-xl overflow-hidden bg-neutral-100/80 mb-1 sm:mb-2 w-full ${height}`}
          >
            <Shimmer />
          </div>
        ))}
      </div>
    </>
  );
}
