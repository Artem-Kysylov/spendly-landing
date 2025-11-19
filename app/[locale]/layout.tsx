// /Users/macbookair/Documents/projects/spendly-landing/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import uk from '@/locales/uk.json';
import hi from '@/locales/hi.json';
import ko from '@/locales/ko.json';
import id from '@/locales/id.json';
import ja from '@/locales/ja.json';

const MESSAGES: Record<string, any> = { en, ru, uk, hi, ko, id, ja };

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = MESSAGES[locale] ?? en;
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider>
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}