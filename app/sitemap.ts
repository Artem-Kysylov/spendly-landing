import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://getspendly.net';
  const locales = ['en','ru','uk','hi','ko','id','ja'];
  const now = new Date();
  const pages = ['', 'privacy-policy', 'terms-and-conditions'];

  return locales.flatMap((l) =>
    pages.map((p) => ({
      url: `${base}/${l}${p ? `/${p}` : ''}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: p === '' ? 0.9 : 0.7
    }))
  );
}