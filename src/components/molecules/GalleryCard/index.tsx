// src/components/molecules/GalleryCard/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Badge from '@/components/atoms/Badge';
import { formatPrice } from '@/lib/utils';
import type { Work } from '@/types/work';

export interface GalleryCardProps {
  work: Work;
  badgeLabel?: string;
  fromLabel?: string;
}

export default function GalleryCard({ work, badgeLabel = '一点もの', fromLabel = '¥' }: GalleryCardProps) {
  return (
    <Link
      href={`/works/${work.slug}`}
      className="group block w-full bg-paper rounded-md overflow-hidden border border-border-subtle hover:border-leather transition-all duration-base hover:shadow-md"
      aria-label={`${work.title}の詳細を見る`}
    >
      {/* 1:1 画像エリア — aspect-square + overflow-hidden で確実にクリップ */}
      <div className="relative w-full aspect-square overflow-hidden bg-linen">
        <Image
          src={work.thumbnail}
          alt={work.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-slow"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="default">{badgeLabel}</Badge>
        </div>
      </div>

      {/* テキストエリア */}
      <div className="p-4">
        <h3 className="font-heading font-bold text-primary text-base mb-2 line-clamp-1">
          {work.title}
        </h3>
        <div className="flex items-center justify-between mt-3">
          <span className="text-leather font-body text-sm font-medium">
            {fromLabel}{work.basePrice.toLocaleString('ja-JP')}
          </span>
          <ArrowRight
            className="w-4 h-4 text-border-subtle group-hover:text-leather group-hover:translate-x-1 transition-all duration-fast"
            aria-hidden
          />
        </div>
      </div>
    </Link>
  );
}
