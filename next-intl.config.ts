// /Users/macbookair/Documents/projects/spendly-landing/next-intl.config.ts
import {defineRouting} from 'next-intl/routing';

export default defineRouting({
  locales: ['en', 'ru', 'uk', 'hi', 'ko', 'id', 'ja'],
  defaultLocale: 'en',
  localePrefix: 'always'
});