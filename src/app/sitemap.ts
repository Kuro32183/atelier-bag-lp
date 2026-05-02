import { MetadataRoute } from 'next';
import { works } from '@/data/works';

export default function sitemap(): MetadataRoute.Sitemap {
  const workUrls = works.map((work) => ({
    url: `https://atelier-bag.vercel.app/works/${work.slug}`,
    lastModified: new Date(work.createdAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://atelier-bag.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...workUrls,
  ];
}
