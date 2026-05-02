// src/data/works.ts

import type { Work } from '@/types/work';

export const works: Work[] = [
  {
    id: 'w001',
    slug: 'original-fabric-gamaguchi-shoulder',
    title: 'オリジナル生地 がま口ショルダーバッグ',
    category: 'bag',
    description:
      '落ち着いたネイビーに、上品な花柄の織り生地を使用。カジュアルにも着物にも合わせやすいデザインです。真鍮のがま口は使うほどに馴染みが増し、長くご愛用いただけます。',
    material: 'オリジナル生地・本革・真鍮',
    dimensions: { height: 24, width: 32, depth: 14, weight: 480 },
    capacity: { a4: true, bottle500: true, smartphone: true, wallet: true },
    basePrice: 28000,
    semiCustom: {
      handles: [
        { id: 'h-standard', label: '標準仕様', amount: 0, image: '' },
        { id: 'h-leather-short', label: '本革（短）', amount: 3000, image: '' },
        { id: 'h-leather-shoulder', label: '本革（肩掛）', amount: 4500, image: '' },
        { id: 'h-detachable', label: '着脱式', amount: 5000, image: '' },
      ],
      leatherDetails: [
        { id: 'ld-none', label: '追加なし', amount: 0, image: '' },
        { id: 'ld-tassel', label: '革タッセル', amount: 1500, image: '' },
        { id: 'ld-flower', label: '革花モチーフ', amount: 2500, image: '' },
        { id: 'ld-braid', label: '革編み装飾', amount: 3500, image: '' },
        { id: 'ld-engraving', label: '名入れ刻印', amount: 2000, image: '' },
      ],
    },
    thumbnail: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
    ],
    featured: true,
    createdAt: '2024-03-01',
  },
  {
    id: 'w002',
    slug: 'leather-tote-a4',
    title: '栃木レザー A4トートバッグ',
    category: 'bag',
    description:
      '厳選した栃木レザーを使用したA4サイズ対応のトートバッグ。シンプルながらも深みのある色合いと上質な革の質感が特徴です。ビジネスからカジュアルまで幅広くご愛用いただけます。',
    material: '栃木レザー（ヌメ革）',
    dimensions: { height: 30, width: 36, depth: 12, weight: 620 },
    capacity: { a4: true, bottle500: true, smartphone: true, wallet: true },
    basePrice: 45000,
    semiCustom: {
      handles: [
        { id: 'h-standard', label: '標準仕様', amount: 0, image: '' },
        { id: 'h-leather-shoulder', label: '肩掛けストラップ追加', amount: 5000, image: '' },
      ],
      leatherDetails: [
        { id: 'ld-none', label: '追加なし', amount: 0, image: '' },
        { id: 'ld-engraving', label: '名入れ刻印', amount: 2000, image: '' },
      ],
    },
    thumbnail: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800&q=80',
    ],
    featured: true,
    createdAt: '2024-02-15',
  },
  {
    id: 'w003',
    slug: 'kimono-clutch-pouch',
    title: '着物地クラッチポーチ',
    category: 'pouch',
    description:
      '着物の端切れを活かしたクラッチポーチ。お茶席やフォーマルな場面にもお使いいただける上品な佇まいです。真鍮のがま口金具が アクセントになっています。',
    material: '着物地・本革・真鍮',
    dimensions: { height: 14, width: 22, depth: 5, weight: 180 },
    capacity: { a4: false, bottle500: false, smartphone: true, wallet: true },
    basePrice: 18000,
    semiCustom: {
      handles: [
        { id: 'h-standard', label: '標準仕様', amount: 0, image: '' },
      ],
      leatherDetails: [
        { id: 'ld-none', label: '追加なし', amount: 0, image: '' },
        { id: 'ld-tassel', label: '革タッセル', amount: 1500, image: '' },
        { id: 'ld-engraving', label: '名入れ刻印', amount: 2000, image: '' },
      ],
    },
    thumbnail: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    ],
    featured: false,
    createdAt: '2024-01-20',
  },
];

export function getWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getFeaturedWorks(): Work[] {
  return works.filter((w) => w.featured);
}
