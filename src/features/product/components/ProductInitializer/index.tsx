// src/features/product/components/ProductInitializer/index.tsx
'use client';

import { useEffect } from 'react';
import { useProductStore } from '@/stores/product.store';

interface ProductInitializerProps {
  basePrice: number;
}

export default function ProductInitializer({ basePrice }: ProductInitializerProps) {
  const initBasePrice = useProductStore((state) => state.initBasePrice);

  useEffect(() => {
    initBasePrice(basePrice);
  }, [basePrice, initBasePrice]);

  return null;
}
