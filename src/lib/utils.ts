// src/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return `¥${amount.toLocaleString('ja-JP')}`;
}

export function formatPriceDiff(amount: number): string {
  if (amount === 0) return '±0';
  return amount > 0 ? `+¥${amount.toLocaleString('ja-JP')}` : `-¥${Math.abs(amount).toLocaleString('ja-JP')}`;
}
