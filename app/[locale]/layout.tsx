// /Users/macbookair/Documents/projects/spendly-landing/app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { ThemeProvider } from '@/context/ThemeContext';
import SmoothScroll from '@/components/utils/SmoothScroll';
import en from '@/locales/en.json';
import ru from '@/locales/ru.json';
import uk from '@/locales/uk.json';
import hi from '@/locales/hi.json';
import ko from '@/locales/ko.json';
import id from '@/locales/id.json';
import ja from '@/locales/ja.json';

const MESSAGES: Record<string, typeof en> = { en, ru, uk, hi, ko, id, ja };

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = MESSAGES[locale] ?? en;
  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://spendly.app"),
    title: {
      default: messages.metadata.title.default,
      template: messages.metadata.title.template
    },
    description: messages.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ru: "/ru",
        uk: "/uk",
        hi: "/hi",
        ko: "/ko",
        id: "/id",
        ja: "/ja"
      }
    },
    openGraph: {
      title: messages.metadata.openGraph.title,
      description: messages.metadata.openGraph.description,
      url: `/${locale}`,
      siteName: "Spendly",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: messages.metadata.openGraph.imagesAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: messages.metadata.twitter.title,
      description: messages.metadata.twitter.description,
      images: ["/og-image.png"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    icons: {
      icon: "/favicon.ico"
    }
  };
}

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
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
