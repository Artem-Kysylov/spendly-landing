// /i18n.ts
export const locales = ['en', 'ru', 'uk', 'hi', 'ko', 'id', 'ja'] as const;
export const defaultLocale = 'en' as const;

export const pathnames = {
  '/': '/',
  '/privacy-policy': '/privacy-policy',
  '/terms-and-conditions': '/terms-and-conditions'
} as const;

const i18n = {
  locales,
  defaultLocale,
  localePrefix: 'always',
  pathnames
};
export default i18n;