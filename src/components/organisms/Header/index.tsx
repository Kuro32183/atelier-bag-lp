// src/components/organisms/Header/index.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ShoppingBag } from 'lucide-react';
import Button from '@/components/atoms/Button';
import type { LandingContent } from '@/content/ja/landing';
import { cn } from '@/lib/utils';

interface HeaderProps {
  content: LandingContent['nav'];
}

export default function Header({ content }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 32);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: content.works, href: '/#works' },
    { label: content.materials, href: '/#materials' },
    { label: content.process, href: '/#process' },
    { label: content.about, href: '/#about' },
    { label: content.faq, href: '/#faq' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-base',
        isScrolled
          ? 'bg-paper/95 backdrop-blur-sm border-b border-border-subtle shadow-sm'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="hover:opacity-80 transition-opacity duration-fast"
            aria-label="手作り工房『こみち』 ホーム"
          >
            <Image
              src="/images/materials/title.webp"
              alt="手作り工房『こみち』"
              width={200}
              height={50}
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="メインナビゲーション">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-primary/70 hover:text-primary transition-colors duration-fast"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="cta" size="sm" href="/#contact">
              {content.cta}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-primary hover:text-leather transition-colors duration-fast focus-visible:outline-none"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav
            className="md:hidden border-t border-border-subtle pb-4"
            aria-label="モバイルナビゲーション"
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-primary/70 hover:text-primary py-3 px-1 transition-colors duration-fast"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="cta"
                size="md"
                href="/#contact"
                fullWidth
                className="mt-3"
              >
                {content.cta}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
