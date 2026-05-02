'use client';
// src/components/organisms/Header/index.tsx
// Figma: Organisms/Header

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/atoms/Button';
import { landing } from '@/content/ja/landing';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const nav = landing.nav;

  const navLinks = [
    { label: nav.works, href: '/works' },
    { label: nav.materials, href: '/#materials' },
    { label: nav.process, href: '/#process' },
    { label: nav.about, href: '/#profile' },
    { label: nav.faq, href: '/#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-borderSubtle">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <ShoppingBag className="w-5 h-5 text-primary" />
          <span className="font-latin font-bold text-xl tracking-widest text-primary">
            ATELIER
          </span>
          <span className="hidden md:block font-body text-xs text-textPrimary/40 ml-1">
            Handmade Bag & Atelier
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="メインナビゲーション">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-sm text-textPrimary/70 hover:text-primary transition-colors duration-fast"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <Button variant="primary" size="sm" href="/#contact">
            {nav.cta}
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-sm text-primary hover:bg-linen transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'md:hidden bg-paper border-t border-borderSubtle overflow-hidden transition-all duration-base',
          isOpen ? 'max-h-96' : 'max-h-0'
        )}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col px-4 py-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-base text-textPrimary/80 hover:text-primary py-1"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button variant="primary" size="sm" href="/#contact" fullWidth>
            {nav.cta}
          </Button>
        </nav>
      </div>
    </header>
  );
}
