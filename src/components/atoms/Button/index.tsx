// src/components/atoms/Button/index.tsx
// Figma: Atoms/Button/Primary | Secondary | Ghost

import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-sm font-body font-medium transition-all duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-paper hover:bg-primaryLight active:scale-[0.98]',
        secondary:
          'border border-primary text-primary bg-transparent hover:bg-primary hover:text-paper active:scale-[0.98]',
        ghost:
          'text-primary underline-offset-4 hover:underline bg-transparent',
        cta:
          'bg-brass text-paper hover:brightness-105 active:scale-[0.98] shadow-md',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-13 px-8 text-lg',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  variant,
  size,
  fullWidth,
  href,
  loading,
  children,
  className,
  ...props
}: ButtonProps) {
  const classes = buttonVariants({ variant, size, fullWidth, className });

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} disabled={loading || props.disabled} {...props}>
      {loading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  );
}
