// /Users/macbookair/Documents/projects/spendly-landing/i18n/request.ts
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  const current = locale ?? 'en';
  try {
    const messages = (await import(`../locales/${current}.json`)).default;
    return {locale: current, messages};
  } catch {
    const fallback = (await import(`../locales/en.json`)).default;
    return {locale: 'en', messages: fallback};
  }
});