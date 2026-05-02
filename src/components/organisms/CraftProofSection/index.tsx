// src/components/organisms/CraftProofSection/index.tsx
// Figma: Organisms/CraftProofSection

import { ProofCard } from '@/components/molecules/ProofCard';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { landing } from '@/content/ja/landing';

export function CraftProofSection() {
  const content = landing.craftProof;
  return (
    <section id="craft" className="py-20 md:py-28 bg-paper" aria-labelledby="craft-title">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          label={content.sectionLabel}
          title={content.title}
          subtitle={content.subtitle}
          center
          className="mb-12"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.cards.map((card) => (
            <ProofCard key={card.title} title={card.title} body={card.body} icon={card.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
