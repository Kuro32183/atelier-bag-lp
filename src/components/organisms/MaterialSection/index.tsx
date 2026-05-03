// src/components/organisms/MaterialSection/index.tsx
// CraftProofSection と統合 — 素材3点をアイコン付きカードで表示
import SectionTitle from '@/components/molecules/SectionTitle';
import type { LandingContent } from '@/content/ja/landing';
import { Scissors, Leaf, PenLine } from 'lucide-react';

interface MaterialSectionProps {
  content: LandingContent['materials'];
}

const ICON_MAP: Record<string, React.ReactNode> = {
  scissors: <Scissors className="w-6 h-6" aria-hidden />,
  leaf: <Leaf className="w-6 h-6" aria-hidden />,
  pencil: <PenLine className="w-6 h-6" aria-hidden />,
};

export default function MaterialSection({ content }: MaterialSectionProps) {
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
          center
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.cards.map((card) => (
            <div
              key={card.id}
              className="bg-paper rounded-md border border-border-subtle p-7 flex flex-col gap-4 hover:border-leather transition-colors duration-base group"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-linen flex items-center justify-center text-leather group-hover:bg-leather group-hover:text-paper transition-colors duration-base">
                {ICON_MAP[card.icon] ?? null}
              </div>
              {/* Title + origin */}
              <div>
                <h3 className="font-heading font-bold text-primary text-lg leading-snug">
                  {card.title}
                </h3>
                <span className="text-xs text-leather font-body mt-1 inline-block">
                  {card.origin}
                </span>
              </div>
              {/* Body */}
              <p className="text-text-primary/70 text-sm leading-relaxed flex-1">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
