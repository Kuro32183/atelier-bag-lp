// src/components/molecules/SectionTitle/index.tsx
import { cn } from '@/lib/utils';

export interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = false,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('space-y-3', center && 'text-center', className)}>
      {eyebrow && (
        <p className="font-latin text-xs tracking-[0.2em] uppercase text-leather">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading font-bold text-primary text-3xl md:text-4xl leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-primary/70 text-base md:text-lg leading-relaxed mt-3">
          {subtitle}
        </p>
      )}
    </div>
  );
}
