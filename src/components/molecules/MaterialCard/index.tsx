// src/components/molecules/MaterialCard/index.tsx
import Image from 'next/image';
import type { Material } from '@/types/common';

interface MaterialCardProps {
  material: Material;
}

export default function MaterialCard({ material }: MaterialCardProps) {
  return (
    <div className="bg-paper rounded-md overflow-hidden border border-border-subtle group hover:border-leather transition-colors duration-base">
      <div className="relative aspect-[4/3] bg-linen overflow-hidden">
        <Image
          src={material.textureImage}
          alt={material.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-slow"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-heading font-bold text-primary text-lg">{material.name}</h3>
          <span className="text-xs text-leather font-body bg-linen px-2 py-0.5 rounded-sm">{material.origin}</span>
        </div>
        <p className="text-text-primary/70 text-sm leading-relaxed">{material.description}</p>
        <div className="mt-4 flex gap-1" aria-label={`耗久度: ${material.durabilityScore}/5`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full ${
                i < material.durabilityScore ? 'bg-brass' : 'bg-border-subtle'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
