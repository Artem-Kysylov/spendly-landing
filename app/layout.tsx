import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MotionConfig, LazyMotion, domAnimation } from 'framer-motion'
import Footer from '@/components/layout/Footer'
import { StickyHeaderBlock } from '@/components/layout/StickyHeaderBlock'
import SmoothScroll from '@/components/utils/SmoothScroll'
import en from '@/locales/en.json'
import { absoluteUrl, resolveSiteBaseUrl } from '@/lib/site-url'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  /** Canonical and relative OG URLs resolve against this origin (`NEXT_PUBLIC_SITE_URL` on Vercel). */
  metadataBase: new URL(resolveSiteBaseUrl()),
  title: {
    default: en.metadata.title.default,
    template: en.metadata.title.template,
  },
  description: en.metadata.description,
  alternates: {
    canonical: absoluteUrl('/'),
  },
  openGraph: {
    title: en.metadata.openGraph.title,
    description: en.metadata.openGraph.description,
    siteName: 'Spendly',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: en.metadata.twitter.title,
    description: en.metadata.twitter.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
        style={{
          backgroundImage: 'url(/bg.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
        }}
      >
        <MotionConfig reducedMotion="user">
          <LazyMotion features={domAnimation}>
            <SmoothScroll />
            <StickyHeaderBlock />
            {children}
            <Footer />
          </LazyMotion>
        </MotionConfig>
      </body>
    </html>
  )
}
