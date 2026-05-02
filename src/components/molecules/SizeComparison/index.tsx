// src/components/molecules/SizeComparison/index.tsx
import type { LandingContent } from '@/content/ja/landing';
import type { Capacity, ProductDimensions } from '@/types/work';

export interface SizeComparisonProps {
  content: LandingContent['sizeComparison'];
  capacity: Capacity;
  dimensions: ProductDimensions;
}

// Fixed silhouette proportions (px at 1x)
const SILHOUETTES = {
  a4: { w: 62, h: 88, label: 'A4\n(21×29.7cm)' },
  smartphone: { w: 32, h: 72, label: 'スマートフォン\n(6.7インチ)' },
  wallet: { w: 56, h: 32, label: '長財布\n(19×10cm)' },
  bottle500: { w: 24, h: 80, label: '500mlボトル' },
};

export default function SizeComparison({ content, capacity, dimensions }: SizeComparisonProps) {
  return (
    <div className="bg-linen rounded-md p-6">
      <h3 className="font-heading font-bold text-primary text-base mb-6">{content.title}</h3>
      <div className="flex items-end justify-around gap-4 mb-4 min-h-[100px]">
        {(Object.keys(SILHOUETTES) as Array<keyof typeof SILHOUETTES>).map((key) => {
          const s = SILHOUETTES[key];
          const fits = capacity[key as keyof Capacity];
          return (
            <div key={key} className="flex flex-col items-center gap-2">
              <div
                style={{ width: s.w, height: s.h }}
                className={`rounded-sm border-2 ${
                  fits
                    ? 'border-leather bg-leather/10'
                    : 'border-border-subtle bg-paper'
                } transition-colors`}
                aria-label={`${s.label.replace('\\n', ' ')}: ${fits ? '収納可' : '非対応'}`}
              />
              <p className="text-xs text-text-primary/60 whitespace-pre-line text-center leading-tight">
                {s.label}
              </p>
            </div>
          );
        })}
      </div>
      <p className="text-xs text-text-primary/50 mt-4 leading-relaxed">※{content.note}</p>
    </div>
  );
}
