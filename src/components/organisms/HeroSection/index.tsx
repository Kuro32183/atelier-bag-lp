// src/components/organisms/HeroSection/index.tsx
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '@/components/atoms/Button';
import type { LandingContent } from '@/content/ja/landing';

interface HeroSectionProps {
  content: LandingContent['hero'];
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
      aria-label="ヒーロー"
    >
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #FAF8F4 0, #FAF8F4 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden
      />

      {/* Decorative circles */}
      <div
        className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] rounded-full border border-paper/10"
        aria-hidden
      />
      <div
        className="absolute bottom-[-5%] left-[-5%] w-[300px] h-[300px] rounded-full border border-paper/10"
        aria-hidden
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">

        {/* Eyebrow — 工房名はしっかり視認できるサイズに */}
        <p className="font-body text-sm sm:text-base tracking-[0.25em] text-paper/80 mb-5 sm:mb-6">
          {content.eyebrow}
        </p>

        {/* Main title */}
        <h1
          className="font-heading font-bold text-paper leading-tight tracking-tight mb-6 sm:mb-8
                     text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl
                     whitespace-pre-line"
        >
          {content.title}
        </h1>

        {/* Subtitle
            \n を取り除いてコンポーネント側で自然折り返しに委ねる。
            max-w-2xl + mx-auto でどのデバイスでも読みやすい行長をキープ。 */}
        <p
          className="text-paper/70 leading-[1.9] mb-10 sm:mb-12
                     text-sm sm:text-base md:text-lg
                     max-w-2xl mx-auto"
        >
          {content.subtitle.replace(/\\n/g, ' ')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Button variant="cta" size="lg" href="/#works">
            {content.cta}
            <ArrowRight className="w-4 h-4" aria-hidden />
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="/#process"
            className="text-paper/80 hover:text-paper border-0"
          >
            {content.ctaSub}
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/40"
        aria-hidden
      >
        <span className="font-latin text-[10px] tracking-[0.3em] uppercase">{content.scrollLabel}</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
