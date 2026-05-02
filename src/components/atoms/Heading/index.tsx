// src/components/atoms/Heading/index.tsx
// Figma: Atoms/Heading

import type { HeadingProps } from '@/types/common';
import { cn } from '@/lib/utils';

const styles = {
  h1: 'font-heading text-4xl md:text-6xl font-bold leading-snug tracking-tight text-textPrimary',
  h2: 'font-heading text-2xl md:text-4xl font-bold leading-snug tracking-tight text-textPrimary',
  h3: 'font-heading text-xl md:text-2xl font-bold leading-snug text-textPrimary',
  h4: 'font-heading text-lg md:text-xl font-bold leading-snug text-textPrimary',
} as const;

export function Heading({ as: Tag = 'h2', children, className }: HeadingProps) {
  return <Tag className={cn(styles[Tag], className)}>{children}</Tag>;
}
