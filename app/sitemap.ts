import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://getspendly.net').replace(/\/$/, '');
  const locales = ['en', 'ru', 'uk', 'hi', 'ko', 'id', 'ja'];
  const now = new Date();

  const pages = ['', 'privacy-policy', 'refund-policy', 'terms-and-conditions', 'blog'];

  const sitemapEntries: MetadataRoute.Sitemap = locales.flatMap((locale) =>
    pages.map((p) => ({
      url: `${baseUrl}/${locale}${p ? `/${p}` : ''}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: p === '' ? 0.9 : 0.7
    }))
  );

  const contentDirectory = path.join(process.cwd(), 'content');

  for (const locale of locales) {
    const localeDir = path.join(contentDirectory, locale);
    if (!fs.existsSync(localeDir)) continue;

    const fileNames = fs.readdirSync(localeDir);
    const slugs = fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map((fileName) => fileName.replace(/\.mdx$/, ''));

    for (const slug of slugs) {
      const filePath = path.join(localeDir, `${slug}.mdx`);
      const lastModified = fs.existsSync(filePath) ? fs.statSync(filePath).mtime : now;

      sitemapEntries.push({
        url: `${baseUrl}/${locale}/blog/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.6
      });
    }
  }

  const unique = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of sitemapEntries) unique.set(entry.url, entry);
  return Array.from(unique.values());
}