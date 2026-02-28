// PERF: Skeleton loader component for Spotify and other data-fetched sections
import { motion } from "framer-motion";

interface SkeletonProps {
  variant?: "spotify" | "card" | "text" | "circle";
  className?: string;
  count?: number;
}

export default function LoadingSkeleton({
  variant = "card",
  className = "",
  count = 1,
}: SkeletonProps) {
  // PERF: Shimmer animation using CSS gradient
  const shimmerClass =
    "animate-pulse bg-gradient-to-r from-muted via-card-hover to-muted bg-[length:200%_100%]";

  if (variant === "spotify") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto"
      >
        {/* Header skeleton */}
        <div className="mb-6 flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl ${shimmerClass}`} />
          <div className="flex-1 space-y-2">
            <div className={`h-8 w-48 rounded ${shimmerClass}`} />
            <div className={`h-4 w-64 rounded ${shimmerClass}`} />
          </div>
        </div>

        {/* Player card skeleton */}
        <div className="bg-card rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <div className="p-6">
            <div className={`w-full h-[450px] rounded-xl ${shimmerClass}`} />
          </div>
          <div className="px-6 pb-6">
            <div className={`h-12 w-full rounded-full ${shimmerClass}`} />
          </div>
        </div>

        {/* Info cards skeleton */}
        <div className="grid sm:grid-cols-2 gap-4 mt-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-4 border border-white/5"
            >
              <div className={`h-4 w-24 rounded mb-2 ${shimmerClass}`} />
              <div className={`h-3 w-full rounded ${shimmerClass}`} />
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  if (variant === "card") {
    return (
      <>
        {Array.from({ length: count }).map((_, i) => (
          <div
            key={i}
            className={`bg-card rounded-xl overflow-hidden ${className}`}
          >
            <div className={`aspect-video ${shimmerClass}`} />
            <div className="p-4 space-y-3">
              <div className={`h-5 w-3/4 rounded ${shimmerClass}`} />
              <div className={`h-4 w-full rounded ${shimmerClass}`} />
              <div className="flex gap-2">
                <div className={`h-6 w-16 rounded-full ${shimmerClass}`} />
                <div className={`h-6 w-16 rounded-full ${shimmerClass}`} />
              </div>
            </div>
          </div>
        ))}
      </>
    );
  }

  if (variant === "circle") {
    return <div className={`rounded-full ${shimmerClass} ${className}`} />;
  }

  // text variant
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`h-4 rounded ${shimmerClass} ${className}`} />
      ))}
    </>
  );
}
