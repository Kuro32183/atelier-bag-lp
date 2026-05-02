// src/components/atoms/Heading/index.tsx
import { cn } from '@/lib/utils';

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
}

const defaultSizes = {
  h1: 'text-4xl md:text-6xl',
  h2: 'text-3xl md:text-4xl',
  h3: 'text-2xl md:text-3xl',
  h4: 'text-xl md:text-2xl',
};

export default function Heading({ as: Tag = 'h2', children, className }: HeadingProps) {
  return (
    <Tag
      className={cn(
        'font-heading font-bold text-primary leading-tight tracking-tight',
        defaultSizes[Tag],
        className
      )}
    >
      {children}
    </Tag>
  );
}
