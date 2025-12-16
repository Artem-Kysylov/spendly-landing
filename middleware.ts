// /Users/macbookair/Documents/projects/spendly-landing/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, pathnames } from './i18n';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localePrefix: 'always'
});

export default function middleware(req: NextRequest) {
  const host = req.headers.get('host') || '';
  const hostname = host.split(':')[0].toLowerCase();
  if (hostname === 'www.getspendly.net') {
    const url = new URL(req.url);
    url.host = 'getspendly.net';
    return NextResponse.redirect(url, 308);
  }
  const p = req.nextUrl.pathname;
  if (p === '/robots.txt' || p === '/sitemap.xml' || p === '/favicon.ico') {
    return NextResponse.next();
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!_next|api|robots\\.txt|sitemap\\.xml|favicon\\.ico|.*\\..*).*)']
};