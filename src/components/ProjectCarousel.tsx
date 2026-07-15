import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Touch Swipe Support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      // Swipe left -> Next
      handleNext();
    } else if (diff < -50) {
      // Swipe right -> Prev
      handlePrev();
    }
    touchStartX.current = null;
  };

  // Mouse Swipe Support for Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    touchStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.clientX;

    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <div 
      className="relative w-full aspect-[16/10] sm:aspect-[16/9] md:aspect-[1.8/1] max-h-[480px] bg-[#0A0B10] rounded-xl overflow-hidden border border-gray-800 shadow-inner group cursor-grab active:cursor-grabbing select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {/* Images Slider with slide animation */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${title} mockup ${currentIndex + 1}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: 'spring', damping: 20, stiffness: 120 }}
            className="w-full h-full object-contain pointer-events-none"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            id="prev-slide-btn"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#0052FF]/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 hover:border-transparent transition-all duration-300 shadow-md cursor-pointer z-10 active:scale-95 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Immagine precedente"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            id="next-slide-btn"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-[#0052FF]/90 text-white flex items-center justify-center backdrop-blur-md border border-white/10 hover:border-transparent transition-all duration-300 shadow-md cursor-pointer z-10 active:scale-95 md:opacity-0 md:group-hover:opacity-100"
            aria-label="Prossima immagine"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Slide Indicators Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              className={`dot-indicator h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex 
                  ? 'w-6 bg-[#0052FF]' 
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Vai alla slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Top Left Image Count Badge */}
      <div className="absolute top-3 left-3 bg-black/60 border border-white/10 backdrop-blur-md text-[10px] font-mono font-medium tracking-wider text-gray-300 px-2.5 py-1 rounded-full pointer-events-none select-none z-10">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
