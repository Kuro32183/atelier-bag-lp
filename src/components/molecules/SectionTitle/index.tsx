// src/components/molecules/SectionTitle/index.tsx
// Figma: Molecules/SectionTitle

import { cn } from '@/lib/utils';

interface SectionTitleProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export function SectionTitle({ label, title, subtitle, center = false, className }: SectionTitleProps) {
  return (
    <div className={cn('space-y-3', center && 'text-center', className)}>
      {label && (
        <p className="font-latin text-xs tracking-[0.2em] uppercase text-brass">
          {label}
        </p>
      )}
      <h2 className="font-heading text-2xl md:text-4xl font-bold text-textPrimary leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-base text-textPrimary/60 leading-relaxed whitespace-pre-line">
          {subtitle}
        </p>
      )}
    </div>
  );
}
