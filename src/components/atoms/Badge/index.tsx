// src/components/atoms/Badge/index.tsx
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'leather' | 'brass';
  className?: string;
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-primary text-paper',
    leather: 'bg-leather text-paper',
    brass: 'bg-brass text-paper',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-sm font-body',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
