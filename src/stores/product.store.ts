'use client';
// src/stores/product.store.ts

import { create } from 'zustand';
import type { CustomOption } from '@/types/work';

interface ProductState {
  selectedHandle: CustomOption | null;
  selectedLeather: CustomOption | null;
  basePrice: number;
  totalPrice: number;
}

interface ProductActions {
  selectHandle: (option: CustomOption) => void;
  selectLeather: (option: CustomOption) => void;
  setBasePrice: (price: number) => void;
  calculatePrice: () => void;
  reset: () => void;
}

const initialState: ProductState = {
  selectedHandle: null,
  selectedLeather: null,
  basePrice: 0,
  totalPrice: 0,
};

export const useProductStore = create<ProductState & ProductActions>((set, get) => ({
  ...initialState,

  selectHandle: (option) => {
    set({ selectedHandle: option });
    get().calculatePrice();
  },

  selectLeather: (option) => {
    set({ selectedLeather: option });
    get().calculatePrice();
  },

  setBasePrice: (price) => {
    set({ basePrice: price });
    get().calculatePrice();
  },

  calculatePrice: () => {
    const { basePrice, selectedHandle, selectedLeather } = get();
    const total =
      basePrice +
      (selectedHandle?.amount ?? 0) +
      (selectedLeather?.amount ?? 0);
    set({ totalPrice: total });
  },

  reset: () => set(initialState),
}));
