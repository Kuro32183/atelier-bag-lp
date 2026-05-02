// src/components/organisms/PhilosophySection/index.tsx
import type { LandingContent } from '@/content/ja/landing';

interface PhilosophySectionProps {
  content: LandingContent['philosophy'];
}

export default function PhilosophySection({ content }: PhilosophySectionProps) {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-paper"
      aria-labelledby="philosophy-title"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-latin text-xs tracking-[0.2em] uppercase text-leather mb-6">
          {content.sectionLabel}
        </p>
        <h2
          id="philosophy-title"
          className="font-heading font-bold text-primary text-3xl md:text-4xl leading-tight mb-8"
        >
          {content.title}
        </h2>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8" aria-hidden>
          <div className="h-px w-16 bg-leather/30" />
          <div className="w-1.5 h-1.5 rounded-full bg-leather/50" />
          <div className="h-px w-16 bg-leather/30" />
        </div>

        <p className="text-text-primary/80 text-base md:text-lg leading-loose mb-6">
          {content.body}
        </p>
        <p className="text-text-primary/60 text-sm md:text-base leading-loose mb-10">
          {content.subBody}
        </p>

        <p className="font-heading text-primary text-xl italic">— {content.signature}</p>
      </div>
    </section>
  );
}
