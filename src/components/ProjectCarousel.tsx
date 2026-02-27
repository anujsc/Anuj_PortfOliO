import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectCarouselProps {
  images: string[];
  alt: string;
  /** aspect ratio class applied to the wrapper, default "aspect-video" */
  aspectClass?: string;
  /** extra classes on the outer wrapper */
  className?: string;
  /** show overlaid title / slot for gradient + text  */
  overlay?: React.ReactNode;
  autoPlay?: boolean;
  intervalMs?: number;
}

export default function ProjectCarousel({
  images,
  alt,
  aspectClass = "aspect-video",
  className = "",
  overlay,
  autoPlay = true,
  intervalMs = 5000,
}: ProjectCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = images.length;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  // Auto-advance
  const startTimer = useCallback(() => {
    if (!autoPlay) return;
    timerRef.current = setInterval(next, intervalMs);
  }, [autoPlay, intervalMs, next]);

  const stopTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    return stopTimer;
  }, [startTimer, stopTimer]);

  if (total === 0) return null;
  if (total === 1) {
    return (
      <div className={`relative ${aspectClass} overflow-hidden ${className}`}>
        <img src={images[0]} alt={alt} className="w-full h-full object-cover" />
        {overlay}
      </div>
    );
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: "0%", opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div
      className={`relative ${aspectClass} overflow-hidden ${className}`}
      onMouseEnter={() => {
        setIsHovering(true);
        stopTimer();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        startTimer();
      }}
    >
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          src={images[current]}
          alt={`${alt} — ${current + 1} of ${total}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
      </AnimatePresence>

      {/* Overlay slot (gradient + text, passed from parent) */}
      {overlay}

      {/* Prev / Next buttons */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/75 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:bg-black/75 hover:text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              goTo(i);
            }}
            aria-label={`Go to image ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-4 h-1.5 bg-primary"
                : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Progress bar at bottom - visible only on hover */}
      {autoPlay && isHovering && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10 z-10">
          <motion.div
            key={current}
            className="h-full bg-primary/70"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: intervalMs / 1000, ease: "linear" }}
          />
        </div>
      )}
    </div>
  );
}
