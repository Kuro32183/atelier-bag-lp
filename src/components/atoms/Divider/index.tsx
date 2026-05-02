// src/components/atoms/Divider/index.tsx
import { cn } from '@/lib/utils';

interface DividerProps {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
}

export default function Divider({ className, orientation = 'horizontal' }: DividerProps) {
  if (orientation === 'vertical') {
    return <div className={cn('w-px bg-border-subtle', className)} aria-hidden />;
  }
  return <hr className={cn('border-0 border-t border-border-subtle', className)} aria-hidden />;
}
