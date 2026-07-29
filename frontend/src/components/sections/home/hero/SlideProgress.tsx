'use client';

import React from 'react';

interface SlideProgressProps {
  total: number;
  activeIndex: number;
  progressKey: number;
  autoPlayMs: number;
  isPaused: boolean;
  onSelect: (index: number) => void;
}

const SlideProgress: React.FC<SlideProgressProps> = ({
  total,
  activeIndex,
  progressKey,
  autoPlayMs,
  isPaused,
  onSelect,
}) => (
  <div
className="absolute inset-x-0 bottom-24 z-20 flex gap-1.5 px-6 sm:px-10"
    role="tablist"
    aria-label="اسلایدهای هیرو"
  >
    {Array.from({ length: total }).map((_, index) => (
      <button
        key={index}
        type="button"
        role="tab"
        aria-selected={index === activeIndex}
        aria-controls={`hero-slide-${index}`}
        onClick={() => onSelect(index)}
        className="h-1 flex-1 overflow-hidden rounded-full bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400 focus-visible:outline-offset-2"
      >
        {index === activeIndex ? (
          <span
            key={progressKey}
            className={`block h-full rounded-full bg-amber-400 mapa-progress-fill ${
              isPaused ? 'mapa-progress-paused' : ''
            }`}
            style={{ animationDuration: `${autoPlayMs}ms` }}
          />
        ) : (
          <span
            className={`block h-full rounded-full ${
              index < activeIndex ? 'bg-amber-400/60' : 'bg-transparent'
            }`}
          />
        )}
      </button>
    ))}
  </div>
);

export default SlideProgress;
