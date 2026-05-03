// src/app/works/page.tsx
import { works } from '@/data/works';
import { landing } from '@/content/ja/landing';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import GalleryCard from '@/components/molecules/GalleryCard';
import AIConciergeFAB from '@/features/chatbot/components/AIConciergeFAB';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `作品一覧 | 手作り工房『こみち』`,
  description: '手作り工房「こみち」の作品一覧です。一点ものの鞄・ポーチをご覧ください。',
};

export default function WorksPage() {
  return (
    <>
      <Header content={landing.nav} />
      <main className="pt-20">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="mb-12">
            <p className="text-xs font-body tracking-widest text-leather uppercase mb-2">WORKS</p>
            <h1 className="font-heading font-bold text-primary text-3xl md:text-4xl">作品一覧</h1>
            <p className="mt-3 text-text-primary/60 text-sm">{works.length}点の作品</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((work) => (
              <GalleryCard
                key={work.id}
                work={work}
                badgeLabel={landing.featuredWorks.badge}
                fromLabel={landing.featuredWorks.from}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer content={landing.footer} />
      <AIConciergeFAB content={landing.aiConcierge} />
    </>
  );
}
