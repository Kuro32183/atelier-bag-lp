// src/components/organisms/Footer/index.tsx
// Figma: Organisms/Footer

import Link from 'next/link';
import { ShoppingBag, Instagram } from 'lucide-react';
import { landing } from '@/content/ja/landing';

export function Footer() {
  const content = landing.footer;
  return (
    <footer className="bg-primary text-paper/70">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-paper/10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brass" />
              <span className="font-latin font-bold text-xl tracking-widest text-paper">
                {content.brand}
              </span>
            </div>
            <p className="font-body text-sm text-paper/50">{content.tagline}</p>
          </div>

          {/* Nav */}
          <nav className="space-y-2" aria-label="フッターナビゲーション">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block font-body text-sm hover:text-paper transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="space-y-4">
            <a
              href={content.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm hover:text-paper transition-colors"
              aria-label="Instagramを開く"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </a>
          </div>
        </div>
        <p className="pt-6 font-body text-xs text-paper/30 text-center">
          {content.copyright}
        </p>
      </div>
    </footer>
  );
}
