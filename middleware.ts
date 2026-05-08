import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { apexHostnameFromEnv } from '@/lib/site-url'

/** Locales removed when the site went English-only. */
const REMOVED_LOCALE_PREFIXES = ['ru', 'uk', 'ja', 'hi', 'ko', 'id'] as const

function appendSearch(dest: URL, source: NextRequest): void {
  dest.search = source.nextUrl.search
}

export default function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const hostname = host.split(':')[0].toLowerCase()
  const { pathname } = req.nextUrl

  if (pathname === '/refund-policy' || pathname === '/refund-policy/') {
    const url = new URL('/', req.nextUrl.origin)
    appendSearch(url, req)
    return NextResponse.redirect(url, 301)
  }

  for (const locale of REMOVED_LOCALE_PREFIXES) {
    if (
      pathname === `/${locale}` ||
      pathname === `/${locale}/` ||
      pathname.startsWith(`/${locale}/`)
    ) {
      const url = new URL('/', req.nextUrl.origin)
      appendSearch(url, req)
      return NextResponse.redirect(url, 301)
    }
  }

  if (pathname === '/en' || pathname === '/en/') {
    const url = new URL('/', req.nextUrl.origin)
    appendSearch(url, req)
    return NextResponse.redirect(url, 301)
  }

  if (pathname.startsWith('/en/')) {
    const stripped = pathname.replace(/^\/en/, '') || '/'
    const url = new URL(stripped, req.nextUrl.origin)
    appendSearch(url, req)
    return NextResponse.redirect(url, 301)
  }

  const apex = apexHostnameFromEnv()
  if (apex && hostname === `www.${apex}`) {
    const url = req.nextUrl.clone()
    url.hostname = apex
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|api|robots\\.txt|sitemap\\.xml|favicon\\.ico|.*\\..*).*)', '/'],
}
