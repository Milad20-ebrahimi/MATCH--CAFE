'use client';

import React, { useEffect, useRef, useState } from 'react';
import type { SlideMedia } from './types';

interface SlideMediaLayerProps {
  domId: string;
  media: SlideMedia;
  isActive: boolean;
  /** فقط اسلاید فعال و اسلاید بعدی مقدار true می‌گیرند تا لود اولیه سبک بماند */
  shouldLoad: boolean;
  isMuted: boolean;
  registerVideoRef?: (el: HTMLVideoElement | null) => void;
}

const SlideMediaLayer: React.FC<SlideMediaLayerProps> = ({
  domId,
  media,
  isActive,
  shouldLoad,
  isMuted,
  registerVideoRef,
}) => {
  const [videoFailed, setVideoFailed] = useState<boolean>(false);
  const fallbackTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* اگر ویدیو تا ۴ ثانیه آماده‌ی پخش نشد (اینترنت کند)، برو سراغ تصویر poster */
  useEffect(() => {
    if (media.type !== 'video' || !isActive || !shouldLoad) return undefined;
    setVideoFailed(false);
    fallbackTimeout.current = setTimeout(() => setVideoFailed(true), 4000);
    return () => {
      if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current);
    };
  }, [isActive, shouldLoad, media]);

  const handleCanPlay = (): void => {
    if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current);
  };

  if (!shouldLoad) {
    return <div id={domId} className="absolute inset-0 bg-stone-900" />;
  }

  if (media.type === 'image') {
    return (
      <div
        id={domId}
        className={`h-full w-full bg-stone-800 bg-cover bg-center ${
          isActive ? 'mapa-kenburns' : ''
        }`}
        style={{ backgroundImage: `url(${media.src})` }}
      />
    );
  }

  if (videoFailed && media.poster) {
    return (
      <div
        id={domId}
        className="h-full w-full bg-stone-800 bg-cover bg-center"
        style={{ backgroundImage: `url(${media.poster})` }}
      />
    );
  }

  return (
    <video
      id={domId}
      ref={registerVideoRef}
      src={media.src}
      poster={media.poster}
      muted={isMuted}
      loop
      playsInline
      preload="metadata"
      onCanPlay={handleCanPlay}
      className="h-full w-full object-cover"
    />
  );
};

export default SlideMediaLayer;
