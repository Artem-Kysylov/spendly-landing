import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx'
import { resolveSiteBaseUrl } from '@/lib/site-url'

/**
 * Sitemap entries are absolute URLs. Origin comes from `NEXT_PUBLIC_SITE_URL`
 * (see `resolveSiteBaseUrl` in `@/lib/site-url`).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = resolveSiteBaseUrl()
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/terms-and-conditions`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]

  const posts = getAllPosts('en')
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticPages, ...blogPages]
}
