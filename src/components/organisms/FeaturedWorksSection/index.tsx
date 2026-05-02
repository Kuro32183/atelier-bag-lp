// src/components/organisms/FeaturedWorksSection/index.tsx
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import GalleryCard from '@/components/molecules/GalleryCard';
import SectionTitle from '@/components/molecules/SectionTitle';
import type { LandingContent } from '@/content/ja/landing';
import type { Work } from '@/types/work';

interface FeaturedWorksSectionProps {
  content: LandingContent['featuredWorks'];
  works: Work[];
}

export default function FeaturedWorksSection({ content, works }: FeaturedWorksSectionProps) {
  return (
    <section
      id="works"
      className="py-20 md:py-28 bg-paper"
      aria-labelledby="featured-works-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <SectionTitle
            eyebrow={content.sectionLabel}
            title={content.title}
            subtitle={content.subtitle}
          />
          <Link
            href="/works"
            className="hidden md:flex items-center gap-2 text-sm font-body text-primary/60 hover:text-leather transition-colors duration-fast group"
            aria-label="すべての作品を見る"
          >
            {content.viewAll}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <GalleryCard
              key={work.id}
              work={work}
              badgeLabel={content.badge}
              fromLabel={content.from}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/works"
            className="flex items-center gap-2 text-sm font-body text-primary/60 hover:text-leather transition-colors duration-fast group"
          >
            {content.viewAll}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-fast" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
