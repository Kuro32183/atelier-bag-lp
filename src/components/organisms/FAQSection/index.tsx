// src/components/organisms/FAQSection/index.tsx
import FAQItem from '@/components/molecules/FAQItem';
import SectionTitle from '@/components/molecules/SectionTitle';
import type { LandingContent } from '@/content/ja/landing';

interface FAQSectionProps {
  content: LandingContent['faq'];
}

export default function FAQSection({ content }: FAQSectionProps) {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-linen"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow={content.sectionLabel}
          title={content.title}
          center
          className="mb-12"
        />
        <div className="divide-y divide-border-subtle">
          {content.items.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
