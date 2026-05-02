// src/features/product/components/ProductGallery/index.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  title: string;
}

export default function ProductGallery({ images, title }: ProductGalleryProps) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div
        className="relative aspect-[4/3] bg-linen rounded-md overflow-hidden cursor-zoom-in group"
        onClick={() => setLightbox(true)}
        role="button"
        tabIndex={0}
        aria-label="画像を拡大する"
        onKeyDown={(e) => e.key === 'Enter' && setLightbox(true)}
      >
        <Image
          src={images[active]}
          alt={`${title} - 画像${active + 1}`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-fast flex items-end justify-end p-3">
          <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-fast" aria-hidden />
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative w-16 h-16 rounded-sm overflow-hidden border-2 transition-colors duration-fast focus-visible:outline-none ${
                active === i ? 'border-primary' : 'border-border-subtle hover:border-leather'
              }`}
              aria-label={`画像${i + 1}を表示`}
              aria-pressed={active === i}
            >
              <Image
                src={src}
                alt={`${title} - サムネイル${i + 1}`}
                fill
                className="object-cover"
                sizes="64px"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(false)}
          role="dialog"
          aria-modal="true"
          aria-label="画像ライトボックス"
        >
          <div className="relative max-w-3xl max-h-full aspect-[4/3] w-full">
            <Image
              src={images[active]}
              alt={`${title} - 拡大表示`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
          <button
            type="button"
            className="absolute top-4 right-4 text-white/60 hover:text-white text-3xl font-light focus-visible:outline-none"
            aria-label="閉じる"
          >
            ×
          </button>
        </div>
      )}
    </div>
  );
}
