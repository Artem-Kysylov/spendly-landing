import type { MetadataRoute } from 'next'
import { resolveSiteBaseUrl } from '@/lib/site-url'

/** `host` / `sitemap` use the origin from `NEXT_PUBLIC_SITE_URL` when set. */
export default function robots(): MetadataRoute.Robots {
  const site = resolveSiteBaseUrl()
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  }
}