// src/types/common.ts

export interface Material {
  id: string;
  name: string;
  origin: string;
  description: string;
  textureImage: string;
  durabilityScore: number;
}

export interface ArtisanProfile {
  name: string;
  brandName: string;
  biography: string;
  startedYear: number;
  philosophy: string;
  profileImage: string;
  instagram?: string;
}

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
  'aria-label'?: string;
}

export interface BaseImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  fill?: boolean;
  className?: string;
}

export interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  children: React.ReactNode;
  className?: string;
}
