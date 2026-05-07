import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { MotionConfig, LazyMotion, domAnimation } from 'framer-motion'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/utils/SmoothScroll'
import en from '@/locales/en.json'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

function resolveSiteBaseUrl(): string {
  if (process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
    (process.env.VERCEL ? 'https://getspendly.net' : 'http://localhost:3000')
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(resolveSiteBaseUrl()),
  title: {
    default: en.metadata.title.default,
    template: en.metadata.title.template,
  },
  description: en.metadata.description,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: en.metadata.openGraph.title,
    description: en.metadata.openGraph.description,
    siteName: 'Spendly',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: en.metadata.openGraph.imagesAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: en.metadata.twitter.title,
    description: en.metadata.twitter.description,
    images: ['/og-image.png'],
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
            <Header />
            {children}
            <Footer />
          </LazyMotion>
        </MotionConfig>
      </body>
    </html>
  )
}
