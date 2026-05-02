// src/types/work.ts
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

export type WorkCategory = 'bag' | 'wallet' | 'pouch' | 'kimono';

export interface Work {
  id: string;
  slug: string;
  title: string;
  description: string;
  basePrice: number;
  material: string;
  lining: string;
  weight: number;
  origin: string;
  dimensions: ProductDimensions;
  capacity: Capacity;
  thumbnail: string;
  images: string[];
  category: WorkCategory;
  featured: boolean;
  createdAt: string;
  semiCustom: SemiCustomOptions;
}
