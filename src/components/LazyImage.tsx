// PERF: Reusable lazy image component with blur-up placeholder and fade-in transition
import { useState, useEffect } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
}

export default function LazyImage({
  src,
  alt,
  className = "",
  width,
  height,
  aspectRatio,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      {/* PERF: Skeleton shimmer fallback while loading */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}

      {/* PERF: Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground text-xs">
          Failed to load
        </div>
      )}

      {/* PERF: Actual image with lazy loading + explicit dimensions */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
