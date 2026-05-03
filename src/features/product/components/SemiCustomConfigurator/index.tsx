// src/features/product/components/SemiCustomConfigurator/index.tsx
'use client';

import Image from 'next/image';
import { Check, ArrowRight, MessageCircle } from 'lucide-react';
import { useProductStore } from '@/stores/product.store';
import Button from '@/components/atoms/Button';
import { formatPrice, formatPriceDiff, cn } from '@/lib/utils';
import type { Work, CustomOption } from '@/types/work';

interface SemiCustomConfiguratorProps {
  work: Work;
}

interface OptionCardProps {
  option: CustomOption;
  selected: boolean;
  onSelect: () => void;
}

function OptionCard({ option, selected, onSelect }: OptionCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'relative flex flex-col items-center gap-2 p-3 rounded-md border transition-all duration-fast cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
        selected
          ? 'border-primary bg-primary/5 shadow-sm'
          : 'border-border-subtle bg-paper hover:border-leather'
      )}
      aria-pressed={selected}
      aria-label={`${option.label} ${formatPriceDiff(option.amount)}`}
    >
      {selected && (
        <span className="absolute top-2 right-2 w-5 h-5 bg-primary text-paper rounded-full flex items-center justify-center">
          <Check className="w-3 h-3" aria-hidden />
        </span>
      )}
      <div className="relative w-16 h-16 rounded-sm bg-linen overflow-hidden">
        <Image
          src={option.image}
          alt={option.label}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>
      <p className="text-xs font-body font-medium text-primary text-center leading-tight">
        {option.label}
      </p>
      <p className="text-xs text-leather font-body">{formatPriceDiff(option.amount)}</p>
    </button>
  );
}

export default function SemiCustomConfigurator({ work }: SemiCustomConfiguratorProps) {
  const { selectedHandle, selectedLeather, totalPrice, selectHandle, selectLeather } =
    useProductStore();

  return (
    <div className="bg-paper border border-border-subtle rounded-lg p-6 space-y-8">
      {/* STEP 1: Handle */}
      <section aria-labelledby="step1-title">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-primary text-paper text-xs font-bold flex items-center justify-center">1</span>
          <h3 id="step1-title" className="font-heading font-bold text-primary text-base">持ち手を選ぶ</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {work.semiCustom.handles.map((option) => (
            <OptionCard
              key={option.id}
              option={option}
              selected={selectedHandle?.id === option.id}
              onSelect={() => selectHandle(option)}
            />
          ))}
        </div>
      </section>

      {/* STEP 2: Leather detail */}
      <section aria-labelledby="step2-title">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-primary text-paper text-xs font-bold flex items-center justify-center">2</span>
          <h3 id="step2-title" className="font-heading font-bold text-primary text-base">革細工を追加する</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {work.semiCustom.leatherDetails.map((option) => (
            <OptionCard
              key={option.id}
              option={option}
              selected={selectedLeather?.id === option.id}
              onSelect={() => selectLeather(option)}
            />
          ))}
        </div>
      </section>

      {/* STEP 3: Price */}
      <section aria-labelledby="step3-title" className="bg-linen rounded-md p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-6 h-6 rounded-full bg-primary text-paper text-xs font-bold flex items-center justify-center">3</span>
          <h3 id="step3-title" className="font-heading font-bold text-primary text-base">価格シミュレーション</h3>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-text-primary/70">
            <span>基本価格</span>
            <span>{formatPrice(work.basePrice)}</span>
          </div>
          {selectedHandle && selectedHandle.amount > 0 && (
            <div className="flex justify-between text-text-primary/70">
              <span>持ち手（{selectedHandle.label}）</span>
              <span>{formatPriceDiff(selectedHandle.amount)}</span>
            </div>
          )}
          {selectedLeather && selectedLeather.amount > 0 && (
            <div className="flex justify-between text-text-primary/70">
              <span>革細工（{selectedLeather.label}）</span>
              <span>{formatPriceDiff(selectedLeather.amount)}</span>
            </div>
          )}
          <div className="flex justify-between font-bold text-primary text-lg pt-3 border-t border-border-subtle">
            <span>合計（税込）</span>
            <span>{formatPrice(totalPrice)}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="相談CTA" className="space-y-3">
        <Button variant="cta" size="lg" fullWidth href="/#contact">
          この内容で相談する
          <ArrowRight className="w-4 h-4" aria-hidden />
        </Button>
        <Button variant="secondary" size="lg" fullWidth href="https://line.me/R/ti/p/@atelier">
          <MessageCircle className="w-4 h-4" aria-hidden />
          LINEで気軽に相談する
        </Button>
      </section>
    </div>
  );
}
