'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const STORAGE_KEY = 'spendly-cookie-consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    void Promise.resolve().then(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored !== 'accepted') {
          setVisible(true)
        }
      } catch {
        setVisible(true)
      }
    })
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted')
    } catch {
      // Storage may be unavailable; still dismiss for this session
    }
    setVisible(false)
  }

  if (!visible) {
    return null
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-[100] flex max-w-[min(100vw-2rem,22rem)] flex-col gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 shadow-lg backdrop-blur-md sm:bottom-6 sm:right-6 sm:max-w-sm sm:px-5 sm:py-4"
      role="region"
      aria-label="Cookie consent"
    >
      <p className="text-[13px] leading-relaxed text-white/90">
        We use cookies to improve your experience. By using our site, you agree to our{' '}
        <Link
          href="/privacy-policy"
          className="font-medium text-white underline decoration-white/40 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
        >
          Privacy Policy
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={accept}
        className="self-end rounded-xl bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background"
      >
        Accept
      </button>
    </div>
  )
}
