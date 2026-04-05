import React, { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ImageGalleryModal - A premium image viewer with navigation, infinite looping,
 * and backdrop-blur effects.
 */
const ImageGalleryModal = ({ isOpen, onClose, images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync index when initialIndex changes (e.g. clicking a different zone)
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handleNext = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation for 'Senior' experience
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleNext, handlePrev]);

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300 p-4 md:p-8 overflow-hidden"
      onClick={onClose}
    >
      {/* Small Pop-up Window Container */}
      <div 
        className="relative bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl max-w-5xl w-full flex flex-col items-center justify-center p-2 md:p-4 group animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{ maxHeight: '85vh' }}
      >
        {/* Close Button - More Integrated */}
        <button 
          className="absolute -top-12 right-0 p-2 text-white/50 hover:text-white transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Navigation Buttons - Smaller and within the flow */}
        {images.length > 1 && (
          <>
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-all group/btn z-10 border border-white/5"
              onClick={handlePrev}
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
            </button>
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/60 rounded-full backdrop-blur-md transition-all group/btn z-10 border border-white/5"
              onClick={handleNext}
            >
              <ChevronRight className="w-6 h-6 text-white group-hover/btn:scale-110 transition-transform" />
            </button>
          </>
        )}

        {/* Scaled Image */}
        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-xl">
          <img 
            src={images[currentIndex]} 
            alt={`Gallery image ${currentIndex + 1}`}
            className="max-w-full max-h-[75vh] object-contain"
          />
        </div>
        
        {/* Navigation Indicator / Counter */}
        {images.length > 1 && (
          <div className="mt-4 text-white/40 text-[10px] font-serif font-black uppercase tracking-[0.2em]">
            Exploring Facility — {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGalleryModal;
