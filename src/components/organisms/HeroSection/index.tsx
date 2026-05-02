'use client';
// src/components/organisms/HeroSection/index.tsx
// Figma: Organisms/HeroSection

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import type { landing } from '@/content/ja/landing';

interface HeroContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaSub: string;
  scrollLabel: string;
}

interface HeroProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroProps) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary"
      aria-label="ヒーローセクション"
    >
      {/* Background image */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=1600&q=80"
          alt="ハンドメイドバッグ"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="font-latin text-xs tracking-[0.3em] uppercase text-brass"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {content.eyebrow}
          </motion.p>

          <h1 className="font-heading text-4xl md:text-6xl font-bold text-paper leading-snug whitespace-pre-line">
            {content.title}
          </h1>

          <p className="font-body text-base md:text-lg text-paper/70 leading-relaxed whitespace-pre-line">
            {content.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="cta" size="lg" href="/works">
              {content.cta}
            </Button>
            <Button variant="secondary" size="lg" href="/#process" className="border-paper/40 text-paper hover:bg-paper hover:text-primary">
              {content.ctaSub}
            </Button>
          </div>
        </motion.div>

        {/* Hero image card */}
        <motion.div
          className="hidden md:block relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80"
              alt="職人が制作した一点物のバッグ"
              fill
              priority
              className="object-cover"
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-4 -left-4 bg-brass text-paper px-4 py-2 rounded-md shadow-md">
            <p className="font-body text-xs">一点もの</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="font-latin text-[10px] tracking-widest uppercase">{content.scrollLabel}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
