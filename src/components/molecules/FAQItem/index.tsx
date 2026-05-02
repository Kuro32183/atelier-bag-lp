// src/components/molecules/FAQItem/index.tsx
'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border-subtle last:border-0">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:text-leather transition-colors duration-fast focus-visible:outline-none focus-visible:text-leather"
        aria-expanded={isOpen}
      >
        <span className="font-body font-medium text-primary text-base">{question}</span>
        {isOpen ? (
          <Minus className="w-4 h-4 text-leather shrink-0" aria-hidden />
        ) : (
          <Plus className="w-4 h-4 text-leather shrink-0" aria-hidden />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 pr-8">
          <p className="text-text-primary/70 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
