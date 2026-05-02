'use client';
// src/features/product/components/SemiCustomConfigurator/index.tsx
// Figma: Organisms/SemiCustomConfigurator

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useProductStore } from '@/stores/product.store';
import { Button } from '@/components/atoms/Button';
import { formatPrice } from '@/lib/utils';
import type { Work } from '@/types/work';
import { cn } from '@/lib/utils';

interface SemiCustomConfiguratorProps {
  work: Work;
}

export function SemiCustomConfigurator({ work }: SemiCustomConfiguratorProps) {
  const { selectedHandle, selectedLeather, totalPrice, selectHandle, selectLeather, setBasePrice } =
    useProductStore();

  useEffect(() => {
    setBasePrice(work.basePrice);
    if (work.semiCustom.handles[0]) selectHandle(work.semiCustom.handles[0]);
    if (work.semiCustom.leatherDetails[0]) selectLeather(work.semiCustom.leatherDetails[0]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [work.id]);

  return (
    <div className="space-y-8">
      {/* STEP 1: Handle */}
      <div>
        <p className="font-body text-xs font-medium text-brass tracking-widest mb-3">
          ❶ 持ち手を選ぶ
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {work.semiCustom.handles.map((option) => {
            const isSelected = selectedHandle?.id === option.id;
            return (
              <button
                key={option.id}
                onClick={() => selectHandle(option)}
                className={cn(
                  'relative flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-borderSubtle bg-paper hover:border-brass'
                )}
                aria-pressed={isSelected}
                aria-label={option.label}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-paper" />
                  </div>
                )}
                <div className="w-12 h-12 bg-linen rounded-md flex items-center justify-center">
                  <span className="text-2xl">👜</span>
                </div>
                <div className="text-center">
                  <p className="font-body text-xs font-medium text-textPrimary">{option.label}</p>
                  <p className="font-body text-xs text-brass">
                    {option.amount === 0 ? '±¥0' : `+${formatPrice(option.amount)}`}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 2: Leather Detail */}
      <div>
        <p className="font-body text-xs font-medium text-brass tracking-widest mb-3">
          ❷ 革細工を追加する
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {work.semiCustom.leatherDetails.map((option) => {
            const isSelected = selectedLeather?.id === option.id;
            return (
              <button
                key={option.id}
                onClick={() => selectLeather(option)}
                className={cn(
                  'relative flex flex-col items-center gap-2 p-3 rounded-lg border-2 transition-all duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  isSelected
                    ? 'border-primary bg-primary/5'
                    : 'border-borderSubtle bg-paper hover:border-brass'
                )}
                aria-pressed={isSelected}
                aria-label={option.label}
              >
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-paper" />
                  </div>
                )}
                <div className="w-10 h-10 bg-linen rounded-md flex items-center justify-center">
                  <span className="text-xl">✿</span>
                </div>
                <div className="text-center">
                  <p className="font-body text-xs font-medium text-textPrimary">{option.label}</p>
                  <p className="font-body text-xs text-brass">
                    {option.amount === 0 ? '±¥0' : `+${formatPrice(option.amount)}`}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 3: Price Breakdown */}
      <div className="bg-linen rounded-lg p-5 space-y-2">
        <p className="font-body text-xs font-medium text-brass tracking-widest mb-3">
          ❸ 価格シミュレーション
        </p>
        <div className="space-y-1.5 text-sm font-body">
          <div className="flex justify-between text-textPrimary/70">
            <span>基本価格</span>
            <span>{formatPrice(work.basePrice)}</span>
          </div>
          {selectedHandle && selectedHandle.amount > 0 && (
            <div className="flex justify-between text-textPrimary/70">
              <span>{selectedHandle.label}</span>
              <span>+{formatPrice(selectedHandle.amount)}</span>
            </div>
          )}
          {selectedLeather && selectedLeather.amount > 0 && (
            <div className="flex justify-between text-textPrimary/70">
              <span>{selectedLeather.label}</span>
              <span>+{formatPrice(selectedLeather.amount)}</span>
            </div>
          )}
          <div className="border-t border-borderSubtle pt-2 flex justify-between font-bold text-textPrimary text-base">
            <span>合計（税込）</span>
            <motion.span
              key={totalPrice}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-primary text-xl"
            >
              {formatPrice(totalPrice)}
            </motion.span>
          </div>
        </div>
      </div>

      {/* STEP 4: CTA */}
      <div className="space-y-3">
        <Button variant="cta" size="lg" href="/#contact" fullWidth>
          この内容で相談する →
        </Button>
        <Button variant="secondary" size="md" href={landing_line} fullWidth>
          <span>💬</span> LINEで気軽に相談する
        </Button>
      </div>
    </div>
  );
}

const landing_line = 'https://line.me/R/ti/p/@atelier';
