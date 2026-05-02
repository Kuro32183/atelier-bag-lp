// src/components/organisms/FAQSection/index.tsx
// Figma: Organisms/FAQSection

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { landing } from '@/content/ja/landing';
import { cn } from '@/lib/utils';

export function FAQSection() {
  const content = landing.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-linen" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionTitle
          label={content.sectionLabel}
          title={content.title}
          center
          className="mb-12"
        />
        <div className="space-y-2">
          {content.items.map((item, i) => (
            <div key={i} className="bg-paper border border-borderSubtle rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left gap-4 hover:bg-linen transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-body text-base font-medium text-textPrimary">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-brass shrink-0 transition-transform duration-base',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-base',
                  openIndex === i ? 'max-h-48' : 'max-h-0'
                )}
              >
                <p className="px-6 pb-4 font-body text-sm text-textPrimary/70 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
