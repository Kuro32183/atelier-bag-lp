// src/components/molecules/SizeComparison/index.tsx
// Figma: Molecules/SizeComparison/Default

import type { Capacity, ProductDimensions } from '@/types/work';
import { landing } from '@/content/ja/landing';

interface SizeComparisonProps {
  capacity: Capacity;
  dimensions: ProductDimensions;
}

export function SizeComparison({ capacity, dimensions }: SizeComparisonProps) {
  const content = landing.sizeComparison;

  return (
    <div className="space-y-4">
      <h3 className="font-heading text-lg font-bold text-textPrimary">{content.title}</h3>
      <div className="flex items-end gap-4 p-4 bg-linen rounded-lg">
        {/* Bag silhouette */}
        <div className="flex flex-col items-center gap-1">
          <div
            className="bg-primary/20 border-2 border-primary/40 rounded-sm"
            style={{ width: `${dimensions.width * 2.5}px`, height: `${dimensions.height * 2.5}px` }}
            aria-label={`バッグ: 幅${dimensions.width}cm × 高さ${dimensions.height}cm`}
          />
          <span className="font-body text-xs text-textPrimary/60 text-center">
            {dimensions.width}×{dimensions.height}cm
          </span>
        </div>

        {/* A4 */}
        {capacity.a4 && (
          <div className="flex flex-col items-center gap-1">
            <div
              className="bg-brass/20 border-2 border-brass/50 rounded-xs"
              style={{ width: '53px', height: '74px' }}
              aria-label="A4用紙"
            />
            <span className="font-body text-xs text-textPrimary/60 text-center whitespace-pre-line">
              {content.labels.a4}
            </span>
          </div>
        )}

        {/* Smartphone */}
        {capacity.smartphone && (
          <div className="flex flex-col items-center gap-1">
            <div
              className="bg-leather/20 border-2 border-leather/50 rounded-sm"
              style={{ width: '32px', height: '64px' }}
              aria-label="スマートフォン"
            />
            <span className="font-body text-xs text-textPrimary/60 text-center whitespace-pre-line">
              {content.labels.smartphone}
            </span>
          </div>
        )}

        {/* Wallet */}
        {capacity.wallet && (
          <div className="flex flex-col items-center gap-1">
            <div
              className="bg-linen border-2 border-borderSubtle rounded-xs"
              style={{ width: '48px', height: '25px' }}
              aria-label="長財布"
            />
            <span className="font-body text-xs text-textPrimary/60 text-center whitespace-pre-line">
              {content.labels.wallet}
            </span>
          </div>
        )}

        {/* 500ml bottle */}
        {capacity.bottle500 && (
          <div className="flex flex-col items-center gap-1">
            <div
              className="bg-blue-100 border-2 border-blue-200 rounded-full"
              style={{ width: '20px', height: '68px', borderRadius: '10px 10px 8px 8px' }}
              aria-label="500mlボトル"
            />
            <span className="font-body text-xs text-textPrimary/60 text-center">
              {content.labels.bottle500}
            </span>
          </div>
        )}
      </div>
      <p className="font-body text-xs text-textPrimary/50 leading-relaxed">
        ※ {content.note}
      </p>
    </div>
  );
}
