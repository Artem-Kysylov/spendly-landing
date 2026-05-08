/**
 * Site origin for sitemap, robots, canonical URLs, and metadataBase.
 * Primary source: `NEXT_PUBLIC_SITE_URL` (set on Vercel, e.g. https://getspendly.net).
 */
export function resolveSiteBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, '')
  if (fromEnv) return fromEnv

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`.replace(/\/$/, '')
  }

  return 'http://localhost:3000'
}

/** Absolute URL for `<link rel="canonical">`, Open Graph, and JSON-LD. */
export function absoluteUrl(pathname: string): string {
  const base = resolveSiteBaseUrl().replace(/\/$/, '')
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${base}${path}`
}

/** Apex hostname derived from `NEXT_PUBLIC_SITE_URL` (for www → apex redirects). */
export function apexHostnameFromEnv(): string | null {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!raw) return null
  try {
    return new URL(raw).hostname.toLowerCase()
  } catch {
    return null
  }
}
