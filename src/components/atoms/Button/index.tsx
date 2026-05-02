// src/components/atoms/Button/index.tsx
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'cta';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-paper hover:bg-primary-light border border-primary hover:border-primary-light',
  secondary:
    'bg-transparent text-primary border border-primary hover:bg-primary hover:text-paper',
  ghost:
    'bg-transparent text-primary hover:text-leather border-0 underline-offset-4 hover:underline',
  cta:
    'bg-brass text-paper hover:bg-leather border border-brass hover:border-leather shadow-md hover:shadow-lg',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-sm',
  md: 'px-6 py-3 text-base rounded-md',
  lg: 'px-8 py-4 text-base rounded-md',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  href,
  onClick,
  children,
  className,
  type = 'button',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-body font-medium transition-all duration-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const styles = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {loading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden />}
      {children}
    </>
  );

  if (href && !disabled && !loading) {
    return (
      <Link href={href} className={styles} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={styles}
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}
