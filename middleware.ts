// /Users/macbookair/Documents/projects/spendly-landing/middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale, pathnames } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale,
  pathnames,
  localePrefix: 'always'
});

export const config = {
  matcher: ['/((?!_next|.*\\..*|api).*)']
};