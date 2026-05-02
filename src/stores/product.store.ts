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
  calculatePrice: () => void;
  reset: (basePrice?: number) => void;
  initBasePrice: (price: number) => void;
}

export const useProductStore = create<ProductState & ProductActions>((set, get) => ({
  selectedHandle: null,
  selectedLeather: null,
  basePrice: 0,
  totalPrice: 0,

  initBasePrice: (price: number) => {
    set({ basePrice: price, totalPrice: price });
  },

  selectHandle: (option: CustomOption) => {
    set({ selectedHandle: option });
    get().calculatePrice();
  },

  selectLeather: (option: CustomOption) => {
    set({ selectedLeather: option });
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

  reset: (basePrice?: number) => {
    set({
      selectedHandle: null,
      selectedLeather: null,
      basePrice: basePrice ?? 0,
      totalPrice: basePrice ?? 0,
    });
  },
}));
