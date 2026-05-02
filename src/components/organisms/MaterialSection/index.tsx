// src/components/organisms/MaterialSection/index.tsx
import MaterialCard from '@/components/molecules/MaterialCard';
import SectionTitle from '@/components/molecules/SectionTitle';
import type { LandingContent } from '@/content/ja/landing';
import type { Material } from '@/types/common';

interface MaterialSectionProps {
  content: LandingContent['materials'];
  items: Material[];
}

export default function MaterialSection({ content, items }: MaterialSectionProps) {
  return (
    <section
      id="materials"
      className="py-20 md:py-28 bg-linen"
      aria-labelledby="materials-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.sectionLabel}
          title={content.title}
          subtitle={content.subtitle}
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((material) => (
            <MaterialCard key={material.id} material={material} />
          ))}
        </div>
      </div>
    </section>
  );
}
