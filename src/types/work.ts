// src/types/work.ts
// Figma: Domain Types — Work

export type WorkCategory = 'bag' | 'wallet' | 'pouch' | 'kimono';

export interface ProductDimensions {
  height: number;
  width: number;
  depth: number;
  weight: number;
}

export interface Capacity {
  a4: boolean;
  bottle500: boolean;
  smartphone: boolean;
  wallet: boolean;
}

export interface CustomOption {
  id: string;
  label: string;
  amount: number;
  image: string;
}

export interface SemiCustomOptions {
  handles: CustomOption[];
  leatherDetails: CustomOption[];
}

export interface Work {
  id: string;
  slug: string;
  title: string;
  category: WorkCategory;
  description: string;
  material: string;
  dimensions: ProductDimensions;
  capacity: Capacity;
  basePrice: number;
  semiCustom: SemiCustomOptions;
  thumbnail: string;
  images: string[];
  featured: boolean;
  createdAt: string;
}
