// src/components/organisms/Footer/index.tsx
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import type { LandingContent } from '@/content/ja/landing';

interface FooterProps {
  content: LandingContent['footer'];
}

export default function Footer({ content }: FooterProps) {
  return (
    <footer className="bg-primary text-paper/60 pt-16 pb-8" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-paper/10">
          {/* Brand */}
          <div>
            <p className="font-latin font-bold text-xl text-paper tracking-widest mb-2">
              {content.brand}
            </p>
            <p className="text-xs text-paper/40 tracking-widest mb-4">{content.tagline}</p>
          </div>

          {/* Links */}
          <nav aria-label="フッターナビゲーション">
            <ul className="space-y-3">
              {content.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body hover:text-paper transition-colors duration-fast"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <p className="text-xs tracking-wider uppercase font-latin mb-4">Follow</p>
            <div className="flex gap-4">
              <a
                href={content.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-paper/50 hover:text-paper transition-colors duration-fast"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-center text-paper/30 pt-8">{content.copyright}</p>
      </div>
    </footer>
  );
}
