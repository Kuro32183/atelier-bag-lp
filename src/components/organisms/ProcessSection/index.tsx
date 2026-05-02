// src/components/organisms/ProcessSection/index.tsx
import ProcessStep from '@/components/molecules/ProcessStep';
import SectionTitle from '@/components/molecules/SectionTitle';
import type { LandingContent } from '@/content/ja/landing';

interface ProcessSectionProps {
  content: LandingContent['process'];
}

export default function ProcessSection({ content }: ProcessSectionProps) {
  return (
    <section
      id="process"
      className="py-20 md:py-28 bg-paper"
      aria-labelledby="process-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <SectionTitle
            eyebrow={content.sectionLabel}
            title={content.title}
            subtitle={content.subtitle}
          />
          <div className="space-y-0">
            {content.steps.map((step, index) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                isLast={index === content.steps.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
