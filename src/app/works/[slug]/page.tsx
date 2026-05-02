// src/app/works/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { works } from '@/data/works';
import { landing } from '@/content/ja/landing';
import Header from '@/components/organisms/Header';
import Footer from '@/components/organisms/Footer';
import SemiCustomConfigurator from '@/features/product/components/SemiCustomConfigurator';
import SizeComparison from '@/components/molecules/SizeComparison';
import GalleryCard from '@/components/molecules/GalleryCard';
import AIConciergeFAB from '@/features/chatbot/components/AIConciergeFAB';
import ProductGallery from '@/features/product/components/ProductGallery';
import ProductInitializer from '@/features/product/components/ProductInitializer';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) return {};
  return {
    title: `${work.title} | ATELIER`,
    description: work.description,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = works.find((w) => w.slug === slug);
  if (!work) notFound();

  const related = works.filter((w) => w.id !== work.id).slice(0, 3);

  return (
    <>
      <Header content={landing.nav} />
      <main className="pt-20">
        {/* Initialize store */}
        <ProductInitializer basePrice={work.basePrice} />

        {/* Breadcrumb */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-label="パンくず">
          <ol className="flex items-center gap-2 text-xs text-text-primary/50 font-body">
            <li><a href="/" className="hover:text-primary transition-colors">HOME</a></li>
            <li aria-hidden>/</li>
            <li><a href="/#works" className="hover:text-primary transition-colors">作品一覧</a></li>
            <li aria-hidden>/</li>
            <li className="text-primary" aria-current="page">{work.title}</li>
          </ol>
        </nav>

        {/* Product section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Gallery + Size */}
            <div className="space-y-6">
              <ProductGallery images={work.images} title={work.title} />
              <SizeComparison
                content={landing.sizeComparison}
                capacity={work.capacity}
                dimensions={work.dimensions}
              />
            </div>

            {/* Right: Info + Configurator */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium bg-primary text-paper rounded-sm mb-3">
                  一点もの
                </span>
                <h1 className="font-heading font-bold text-primary text-2xl md:text-3xl leading-tight mb-4">
                  {work.title}
                </h1>
                <p className="text-text-primary/70 text-sm leading-relaxed mb-6">
                  {work.description}
                </p>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                  {[
                    ['素材', work.material],
                    ['内布', work.lining],
                    ['重量', `約${work.weight}g`],
                    ['生産地', work.origin],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <dt className="text-text-primary/40 text-xs mb-0.5">{label}</dt>
                      <dd className="text-primary font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <SemiCustomConfigurator work={work} />
            </div>
          </div>
        </section>

        {/* Related works */}
        {related.length > 0 && (
          <section className="bg-linen py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-heading font-bold text-primary text-2xl mb-8">関連作品</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((w) => (
                  <GalleryCard
                    key={w.id}
                    work={w}
                    badgeLabel={landing.featuredWorks.badge}
                    fromLabel={landing.featuredWorks.from}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer content={landing.footer} />
      <AIConciergeFAB content={landing.aiConcierge} />
    </>
  );
}
